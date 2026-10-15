/**
 * Planner Colors (AI Task Planner)
 * Colors the events the planner puts on your calendar, by area.
 * The planner's calendar connection can't set colors, so this script does it
 * from inside your own Google account.
 *
 * Run install() once. After that it runs every hour and only does work
 * between CONFIG.activeHours on weekdays.
 * MIT License.
 */

const CONFIG = {
  marker: '[Work Inbox]', // EDIT ME: must match {{EVENT_MARKER}} in your planner prompts
  daysBack: 1,
  daysAhead: 21,          // the planner schedules 14 days out; a little extra margin
  activeHours: [5, 17],   // run between 5 AM and 5 PM local time, Mon–Fri

  // Google event color ids:
  // 1 Lavender, 2 Sage, 3 Grape, 4 Flamingo, 5 Banana, 6 Tangerine,
  // 7 Peacock, 8 Graphite, 9 Blueberry, 10 Basil, 11 Tomato
  // EDIT ME: exact Area names from your rules → color id
  areaColors: {
    'Department Programs': '9',    // Blueberry
    'District Committee': '10',    // Basil
    'AI Initiative': '7',          // Peacock
    'Think Tank': '5',             // Banana
    'Community of Practice': '3',  // Grape
    'Professional Growth': '6',    // Tangerine
  },
  urgentColor: '11',  // Tomato   (titles starting with ‼)
  awayColor: '8',     // Graphite (Out of office, Travel)
  breakColor: '4',    // Flamingo (Break + email)

  // Optional: color your OWN events (not made by the planner) by words in the title.
  // Only events that don't have a color yet are touched, so manual colors win.
  titleRules: [
    // { match: /committee/i, color: '10' },
  ],
};

function colorPlannerEvents() {
  const now = new Date();
  const hour = now.getHours(), day = now.getDay();
  if (day === 0 || day === 6 || hour < CONFIG.activeHours[0] || hour >= CONFIG.activeHours[1]) return;

  const start = new Date(now.getTime() - CONFIG.daysBack * 864e5);
  const end = new Date(now.getTime() + CONFIG.daysAhead * 864e5);
  const events = CalendarApp.getDefaultCalendar().getEvents(start, end);
  let changed = 0, failed = 0;

  events.forEach(ev => {
    const want = desiredColor_(ev);
    if (!want || String(ev.getColor() || '') === want) return;
    try { ev.setColor(want); changed++; }
    catch (e) { failed++; console.warn('Could not color "' + ev.getTitle() + '": ' + e.message); }
  });
  console.log('Checked ' + events.length + ' events, colored ' + changed + (failed ? ', ' + failed + ' failed' : '') + '.');
}

function desiredColor_(ev) {
  const title = ev.getTitle() || '';
  const desc = ev.getDescription() || '';

  if (desc.indexOf(CONFIG.marker) !== -1) {
    if (title.indexOf('‼') === 0) return CONFIG.urgentColor;
    if (title === 'Break + email') return CONFIG.breakColor;
    if (title.indexOf('Travel') === 0 || title.indexOf('Out of office') === 0) return CONFIG.awayColor;
    const rest = desc.slice(desc.indexOf(CONFIG.marker) + CONFIG.marker.length);
    const m = rest.match(/^\s*([^·\n]+?)\s*·/);
    if (m && CONFIG.areaColors[m[1]]) return CONFIG.areaColors[m[1]];
    return null; // e.g. copied org events keep their default color
  }

  // Out-of-office events can't carry a description, so match the title.
  if (title === 'Out of office') return CONFIG.awayColor;

  if (!ev.getColor()) {
    for (const r of CONFIG.titleRules) if (r.match.test(title)) return r.color;
  }
  return null;
}

/** Run once: creates the hourly trigger (and removes any old copy of it). */
function install() {
  uninstall();
  ScriptApp.newTrigger('colorPlannerEvents').timeBased().everyHours(1).create();
  colorPlannerEvents();
}

/** Stops the hourly runs. */
function uninstall() {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'colorPlannerEvents')
    .forEach(t => ScriptApp.deleteTrigger(t));
}
