# Planner Colors (Apps Script)

Colors the planner's events on your calendar by area. The planner can't set colors through its calendar connection, so this small script does it from inside your Google account.

## Install (about 3 minutes)

1. Go to script.google.com, signed in to the same Google account as your calendar, and create a project named "Planner Colors."
2. Replace `Code.gs` with `Code.js` from this folder. Edit the `CONFIG` block: your event marker, and your exact Area names with their colors.
3. Project Settings → check **Show "appsscript.json" manifest file in editor**, then replace it with `appsscript.json` from this folder. Change `timeZone` to yours.
4. Pick `install` in the toolbar and click **Run**. Approve the calendar permission.

With clasp instead: `clasp create --type standalone --title "Planner Colors"`, copy these files in, `clasp push`, then run `install` once from the editor.

## What it does

Every hour on weekdays (5 AM–5 PM), it checks your calendar from yesterday through the next 21 days:

| Event | Color |
|---|---|
| Titles starting with ‼ (urgent) | Tomato |
| Break + email | Flamingo |
| Out of office, Travel | Graphite |
| Planner task blocks | By the Area name in the event description |

It only recolors an event when the color is wrong.

**Labels:** Google Calendar labels are names you give to colors. Rename the colors to your area names in Calendar, and every colored event shows the label too.

**Your own events:** `titleRules` (commented out) can color your own meetings by title words. It only touches events without a color.

To stop it, run `uninstall`.
