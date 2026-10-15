# Setup interview prompt

Paste everything between the lines into a new Claude chat. Claude will interview you about how you work, one topic at a time, and then write your rules. It works for a **work** planner or a **personal** one.

You'll get two things at the end:
1. A filled-in **config** (calendar IDs, page URL, time zone, marker)
2. A **YOUR RULES** block to paste into both planner prompts

Plan on 20–30 minutes. You can stop and come back; ask Claude for "a summary of my answers so far" before you leave.

---

```text
You are helping me set up an AI task planner. It has a capture page where I jot down ideas, and a scheduled AI planner that breaks them into tasks and places time blocks on my Google Calendar each morning. Your job is to interview me and then write my planning rules.

How to run the interview:
- First ask: is this planner for WORK or for PERSONAL life? Then follow the matching topic list below.
- Go one topic at a time. Ask 2–4 short questions per topic, wait for my answers, then move on.
- For each question, offer a sensible default I can accept with "yes", and give the example answer shown (it comes from a real user and is only a guide).
- If an answer is vague or conflicts with an earlier one, ask one follow-up. Don't guess.
- If I say "skip", use the default and mark it "(default)".
- Keep a running list of my answers. When I ask for "a summary so far", show it.
- At the end, show the summary, ask me to confirm or fix anything, then produce the two outputs described under OUTPUT.

===== WORK topics =====

1. Calendars
   - Which calendar should receive task blocks? (Default: your main work calendar. Blocks are private, so colleagues see only "busy" or nothing.)
   - Do you keep personal appointments on another calendar that the planner should read (read-only) so it can protect that time? Example: "Yes, my personal calendar. I've double-booked a doctor's appointment over a meeting before."
   - Is there an organization events calendar with must-attend events? Which title words mark them? Example: "College-Wide Meeting, Planning Day, All Faculty Meeting."
   - Is there a calendar that marks closures or holidays? How are closed days labeled? Example: titles containing "Closed".

2. Your workday
   - What time do you usually start, and when do you aim to stop? Is there a hard stop you never want to work past? Example: "Start 6:30, aim to stop at 3:30, hard stop 4:00."
   - Is the first part of the day reserved for something, like email? Example: "30–60 minutes of email first thing, no blocks then."
   - Lunch: fixed or flexible? Example: "Flexible, usually noon, anywhere from 11 to 1. Keep 45 minutes open in that window."
   - Breaks: do you want planned breaks? Example: "A 15-minute break plus 15 minutes of email, mid-morning and mid-afternoon."
   - Which days do you work? Any days you work from home or at other sites? Does travel between sites take time? Example: "Mostly one campus; sometimes two others; about 30 minutes each way."
   - Any seasonal schedule, such as summer hours? How are its start and end dates determined? Example: "Summer 4×10s, Mon–Thu 6:30–5, starting the Monday after a specific district date."

3. Load and energy
   - How many hours of planned task time per day is realistic? Does it differ on meeting-heavy days? Example: "About 1.5 hours on my two meeting days, 2.5 hours on the others."
   - When do you do your best focused work? What kind of work re-energizes you later in the day? Example: "Mornings. After lunch my energy dips, but building or learning something picks me back up."
   - Do you prefer long uninterrupted stretches, or switching every 30–60 minutes? Example: "It varies. Start with one deep block a day plus short tasks from other projects."
   - Should the planner mark blocks busy (protected) or free (others can still book you)? Default: urgent busy, everything else free.

4. Areas and priorities
   - What are your areas of responsibility? List 3–7. Example: "Department programs, a district committee, a college think tank, an AI initiative, a community of practice."
   - Would you like a protected weekly budget for professional growth? How many hours, and when? Example: "Up to 2 hours a week, Tuesday and Friday afternoons."
   - Which colors should each area use? (Google event colors: Lavender, Sage, Grape, Flamingo, Banana, Tangerine, Peacock, Graphite, Blueberry, Basil, Tomato.) Defaults: Tomato for urgent, Graphite for out-of-office and travel, Flamingo for breaks.
   - Do you have weekly tasks you tend to forget? Which day, and about how long? Example: "Run a weekly report, Monday, 30 minutes."

5. Meetings and prep
   - Do certain meetings need prep done before them? Example: "My Thursday committee meeting: prep by end of Wednesday."
   - How much buffer do you want before and after meetings? (Default: 10 minutes.)

6. Personal appointments (only if a personal calendar is read)
   - How much travel time should be added on each side of an appointment? Example: "30 minutes each way."
   - Which personal events should be ignored? Default: events marked free, and titles starting "Reminder". Example: "A landscaper visit is a reminder, not an appointment."

===== PERSONAL topics =====

1. Calendars: which calendar gets blocks; any other calendars whose busy time must be respected (family, a work calendar's free/busy shared to you).
2. When you're available: weekday evenings? weekends? exact windows? Any seasonal change (heat, daylight)? Example: "Weekday evenings 5–8, max 90 minutes. Weekends 7–noon; in summer 5:30–noon because of the heat."
3. Kinds of tasks: which go where? Example: "Desk tasks (research, ordering, forms) on weeknights. Physical labor and anything over an hour on weekends."
4. Preparation: do you want a prep block the evening before hands-on days, with a tools-and-materials checklist? Example: "Friday evening covers the whole weekend."
5. Waiting and lead times: steps that need a wait (drying, deliveries, permits, utility locate requests) or a "must happen within" window?
6. Weather: should outdoor tasks be flagged for rain, heat, cold or wind? Which location and thresholds? (The planner flags; it never moves blocks for weather.)
7. Days off and away: how will you mark them? (Default: an availability list on the page.)
8. Work spillover: should work ideas captured at home be forwarded to a work planner? (Optional, by email.)
9. Areas, colors, and recurring chores, as in the work list.

===== OUTPUT =====

Produce exactly two blocks.

Block 1, titled CONFIG, a table with these rows (use "—" for anything not used):
OWNER_NAME, PLANNER_NAME, OWNER_EMAIL, TIME_ZONE (IANA), UTC_OFFSET, EVENT_MARKER (e.g. "[Work Inbox]"), WORK_CALENDAR_ID, PERSONAL_CALENDAR_ID, ORG_EVENTS_CALENDAR_ID, CLOSURES_CALENDAR_ID, CAPTURE_PAGE_URL (leave "to fill in"), HANDOFF_SENDER, MORNING_CRON, URGENT_CRON, ORG_EVENT_KEYWORDS.

Block 2, titled YOUR RULES, plain text in exactly this shape (one line or short paragraph per heading; keep my numbers and words):
AREAS: id → "Exact Area name" (Color), one per line
WORKDAY: which days; what makes a day not a workday
CLOSED: how closed days are recognized
WINDOWS: task window start–end; soft end; hard stop; reserved time (e.g. email first thing); never evenings/weekends
LUNCH: window and minimum gap
BREAKS: times of break + email blocks
CAP: planned minutes per day by day type; reductions (meeting-heavy days, "light" days)
GROWTH: weekly budget, block length, preferred days/times (or "none")
RHYTHM: deep-work limits and preferred time; max block length; mixing rules; afternoon preferences
BUFFERS: minutes before/after meetings
MEETING PREP: which meetings and the deadline rule
HOME SITE: where travel is not needed; TRAVEL: minutes each way
PERSONAL SKIP RULES: which personal events to ignore
ALT SCHEDULE: dates/rules and how the day changes (or "none")
BUSY/FREE: which blocks are busy and which are free

For a PERSONAL planner, also add: DAY TYPES, TASK KINDS, PREP, WAITS, WEATHER.

After the two blocks, list anything I left unanswered.
```
