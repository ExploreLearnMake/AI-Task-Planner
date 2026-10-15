# Configuration

Every placeholder used in this repository, in one place. Fill in your own copy (the setup interview produces most of it), then search and replace in the prompts.

> Don't commit your filled-in copy to a public repository. It contains your email address, calendar IDs, and your page's URL.

| Placeholder | What it is | Example |
|---|---|---|
| `{{OWNER_NAME}}` | Your first name, so the prompts read naturally | Alex |
| `{{PLANNER_NAME}}` | What you call your planner | Work Inbox |
| `{{OWNER_EMAIL}}` | The Google account the planner works in | alex@example.edu |
| `{{TIME_ZONE}}` | IANA time zone | America/Phoenix |
| `{{UTC_OFFSET}}` | Offset, and whether it shifts for daylight saving | UTC-07:00, no DST |
| `{{EVENT_MARKER}}` | Text placed in every planner event's description. Use a different one per planner. | `[Work Inbox]` |
| `{{WORK_CALENDAR_ID}}` | Calendar that receives task blocks | alex@example.edu |
| `{{PERSONAL_CALENDAR_ID}}` | Personal calendar read to protect appointments (optional) | alex.personal@gmail.com |
| `{{ORG_EVENTS_CALENDAR_ID}}` | Organization events calendar (optional) | c_abc123@group.calendar.google.com |
| `{{CLOSURES_CALENDAR_ID}}` | Closures or holidays calendar (optional) | en.usa#holiday@group.v.calendar.google.com |
| `{{CAPTURE_PAGE_URL}}` | Your published capture page | https://claude.ai/artifact/… |
| `{{HANDOFF_SENDER}}` | Address that forwards ideas from another planner (optional) | alex.personal@gmail.com |
| `{{YOUR_RULES}}` | The rules block from the setup interview | see below |

## Schedules

| Task | Example cron |
|---|---|
| Morning planner | `CRON_TZ=America/Phoenix 56 4 * * 1-5` (4:56 AM weekdays) |
| Urgent check | `CRON_TZ=America/Phoenix 7 7-16 * * 1-5` (7 past each hour, 7 AM–4 PM weekdays) |

## Example YOUR RULES block

This is a real rule set with identifying details removed. Use it as a model, not a default.

```text
AREAS:
  programs → "Department Programs" (Blueberry)
  committee → "District Committee" (Basil)
  ai → "AI Initiative" (Peacock)
  thinktank → "Think Tank" (Banana)
  cop → "Community of Practice" (Grape)
  growth → "Professional Growth" (Tangerine)
WORKDAY: Mon–Fri (Mon–Thu during ALT SCHEDULE), not CLOSED, not inside an availability "out" range.
CLOSED: a CLOSURES event that day whose title contains "Closed", or an all-day out-of-office on WORK.
WINDOWS: tasks 07:30–15:30 (ALT 07:30–17:00). 06:30–07:30 is email time, no blocks. Hard stop 16:00 (ALT 17:00); only urgency "today" may run past the soft end. Never evenings or weekends.
LUNCH: keep one continuous 45-minute gap inside 11:00–13:00; if meetings already leave none, add no blocks there.
BREAKS: ~10:00 and ~14:00 (ALT ~14:30).
CAP: Mon/Thu 90 min; Tue/Wed/Fri 150 min. ALT: Mon/Thu 120; Tue/Wed 210. "light" day → half. ≥4 h of meetings → max 60. Urgent may exceed.
GROWTH: up to 120 min/week as two 60-min blocks, Tue and Fri 13:00–15:30 (ALT: Thu instead of Fri). Counts toward the cap.
RHYTHM: at most one deep block (60–120 min) per day, before 11:00 when possible; other blocks ≤ 45 min (growth 60). Never the same project twice in a row, except a short different-project task after the deep block. Mix areas. After lunch prefer "learn" tasks, then short admin/followup/prep.
BUFFERS: 10 min before and after busy meetings.
MEETING PREP: prep for a named meeting is due the workday before. The Thursday committee meeting: prep by end of Wednesday.
HOME SITE: main campus. TRAVEL: 30 min each way.
PERSONAL SKIP RULES: skip events marked free, titles starting "Reminder", and events from the personal planner.
ALT SCHEDULE: summer 4×10 (see examples/maricopa-rules.md for how the dates are found).
BUSY/FREE: urgency today/tomorrow and recurring → busy; everything else free.
```
