# Decision records

Why the planner works the way it does. Each record gives the situation, the choice, and its consequences. Add new records at the bottom; when a decision changes, mark the old one superseded rather than rewriting it.

These came from running two versions, one for home and one for work, so some records mention both.

---

## 1. One capture page, everywhere
**Situation:** Past systems failed because capturing worked differently on phone and computer, and because deciding *where* an idea belonged was itself a hurdle.
**Decision:** A single private web page with one text box. On a phone it's saved to the home screen. Data lives in the page's own database so the planner can read it.
**Consequences:** One habit on every device. It isn't a true phone widget; opening it takes a tap or two.

## 2. Plan in the cloud on a schedule, not in real time
**Situation:** Planning has to happen when your computer is off. Planning every idea instantly would mean constant notifications and churn.
**Decision:** A scheduled cloud task plans once each workday morning. A second, hourly task during work hours handles only "Urgent: today" items and stops immediately if there are none.
**Consequences:** One planning pass and one notification a day. Ideas captured in the evening can be edited or removed before they're committed.

## 3. The calendar is the approval screen
**Situation:** Early on, checkboxes on the page were mistaken for "approve" and marked tasks done.
**Decision:** A block that stays on the calendar is approved. Dragging it moves it (and pins it). Deleting it drops the task. The page has a labeled **Done** button and an Undo list instead of checkboxes.
**Consequences:** No separate approval step. The calendar you already check is the control.

## 4. Never delete calendar events
**Situation:** An unattended run tried to delete missed blocks before re-creating them. The deletes were refused by the safety check that governs unattended runs; creating and updating events were allowed.
**Decision:** The planner moves events instead of deleting them, so each task keeps one event for life. Anything no longer needed is retitled "(delete this)" and marked free.
**Consequences:** No duplicates, fewer risky actions. Only you delete events.

## 5. Spell out exactly what the planner may do
**Situation:** The first unattended run was blocked from reading calendars until the instructions listed what the owner had approved.
**Decision:** The planner prompt includes a short, accurate authorization section: which calendars it reads, which it writes, and what it never does. It reports every refusal word for word on the page.
**Consequences:** Problems surface within a day instead of failing silently.

## 6. Only change events with our marker
**Decision:** Every planner-made event carries a marker in its description (for example `[Work Inbox]`). Out-of-office events can't have a description, so they're tracked by event ID instead. Nothing else is ever touched.
**Consequences:** Two planners (home and work) can share a calendar view without stepping on each other, as long as each uses its own marker.

## 7. Pad estimates by 1.5×
**Situation:** People underestimate, and AI estimates for short captures are guesses.
**Decision:** Hands-on estimate × 1.5, rounded up to 15 minutes, minimum 15, maximum 120 per block. Longer work is split into parts.
**Consequences:** Plans hold up better. If the calendar overflows while time sits unused, lower the padding first.

## 8. Schedule hands-on time, not waiting time
**Decision:** Each task has a padded estimate and a separate minimum wait before the next step (an approval, a print, a delivery). Waits aren't blocked on the calendar.
**Consequences:** Steps that depend on someone else land in the right order without wasting calendar time.

## 9. Urgency and importance are separate
**Situation:** Two levels (urgent/normal) weren't enough for a large workload, and a strict numbered ranking was impossible to keep current.
**Decision:** Each *project* has an importance (high/medium/low). Each *item* has an urgency: Someday, Normal, This week, Urgent tomorrow morning, Urgent today. Optional due date.
**Consequences:** Most things are Normal and sort by importance. True emergencies are rare and obvious.

## 10. Urgent today is handled the same day
**Decision:** "Urgent: today" is picked up by the hourly check and placed after now + 15 minutes, bumping normal blocks if needed. "Urgent: tomorrow morning" takes the first slot of the next workday. Both are marked busy.
**Consequences:** The once-a-day rhythm doesn't block real emergencies.

## 11. Busy for urgent, free for everything else
**Situation:** Filling the calendar with busy blocks would leave no room for colleagues to book meetings.
**Decision:** Urgent and recurring blocks are marked busy. Normal blocks are marked free, so people can still book you. If a meeting lands on a free block, the next run moves the block.
**Consequences:** You stay bookable, and nothing gets lost when plans change.

## 12. Moved blocks stay put; urgent can bump the rest
**Decision:** A block you move yourself is pinned and never bumped. Urgent items may bump unpinned normal blocks. Every bump is named in the morning summary.
**Consequences:** "Move it yourself" doubles as "lock it in." Bumps are never silent.

## 13. Someday ideas are parked, not scheduled
**Decision:** Someday ideas are kept in their own list and ignored by the planner until you tap **Plan this**.
**Consequences:** The calendar only holds things you've committed to.

## 14. Adjust adds notes and triggers a re-plan
**Decision:** One Adjust form everywhere: change area, urgency, importance, and add a note. Notes are appended, never edited. The next run re-reads everything.
**Consequences:** One mechanism covers new information, changed priorities, and corrections.

## 15. The planner suggests missing steps, clearly labeled
**Decision:** It keeps every step you wrote and adds only steps that genuinely matter (who must approve, a required form, an accessibility check), marked *Suggested* with a one-line reason. Delete a suggested block if you don't need it.
**Consequences:** Helpful nudges without silently rewriting your plan.

## 16. Commit 14 days, forecast the rest
**Decision:** Only the next 14 days go on the calendar. Beyond that, the planner simulates the schedule and shows a forecast finish date on the page, recalculated every morning.
**Consequences:** You see when long projects will finish without cluttering months of your calendar.

## 17. A shaped workday, not just "free time"
**Situation:** Treating every free minute as available produced days with no breathing room.
**Decision:** The planner follows explicit rules: email time first thing, a soft end and a hard stop, a lunch gap within a window, two break + email blocks, a daily cap that's lower on meeting-heavy days, and buffers around meetings.
**Consequences:** Planned days are realistic. All of these are settings you define (see `prompts/setup-interview.md`).

## 18. A daily rhythm: one deep block plus variety
**Situation:** Some days call for long focus; others work better switching every 30–60 minutes. Spending a whole day on one project is draining.
**Decision:** Starting rule: at most one deep-work block per day (mornings preferred), other blocks 45 minutes or less, never two blocks of the same project back to back, and learning or building work preferred after lunch.
**Consequences:** It's a starting point to test, not a final answer. A future option is a one-tap end-of-day check to learn which rhythm works on which kind of day.

## 19. Protect personal appointments without exposing them
**Decision:** The planner reads your personal calendar (read-only). For each busy appointment during work hours, it adds a plain "Out of office" block with travel time on both sides. Personal events marked free, or titled "Reminder…", are ignored. No titles or details are copied.
**Consequences:** You can't book over a doctor's appointment by accident, and colleagues see only "Out of office". Real out-of-office events also auto-decline new invites.

## 20. Double-check must-attend org events
**Situation:** A college-wide event wasn't copied to the calendar shown on a phone, and a personal appointment got booked over it.
**Decision:** The planner scans an organization events calendar for titles you list (for example "All Faculty Meeting") and copies any you haven't already added.
**Consequences:** A safety net, not a replacement for your own habit. The keyword list is editable on the page.

## 21. Colors come from a small script, not the planner
**Situation:** The calendar connection silently ignores event colors. Separate per-area calendars were rejected, because colleagues wouldn't see busy blocks and it adds setup.
**Decision:** A Google Apps Script in your own account colors events hourly, reading the area name the planner writes into each event's description.
**Consequences:** Colors and color labels work, with a short delay after each planning run.

## 22. Areas of responsibility, plus protected growth time
**Decision:** Every project belongs to one area, used for filtering, color, and mixing work through the day. A *Professional Growth* area gets a weekly time budget (for example two 60-minute blocks) so learning doesn't keep losing to urgent work.
**Consequences:** You can see the balance of your week, and growth happens on purpose.

## 23. Recurring tasks with reminders you can't miss
**Decision:** Weekly tasks you tend to forget are recurring items. If you already keep your own calendar event for one, the planner links to it instead of adding a duplicate.
**Consequences:** No duplicate blocks. A week that ends undone is reported in the summary.

## 24. Importing an old list goes through review first
**Situation:** An imported task list was mostly past due or no longer relevant.
**Decision:** Imported items wait in a **Review** section (Plan this / Someday / Already done / Drop). Only items with future dates go straight to the planner.
**Consequences:** A clean start without silently scheduling stale work.
