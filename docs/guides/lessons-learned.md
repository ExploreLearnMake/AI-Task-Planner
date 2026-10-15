# Lessons learned

Things that broke, or nearly did, while running this. Each one shaped a rule in the prompts.

1. **Unattended runs may be refused actions a person would approve.** Deleting calendar events was refused while creating and updating were allowed. Design so the planner never needs to delete anything.
2. **State exactly what the owner authorized.** The first unattended run couldn't read calendars until the prompt listed which calendars and actions were approved. Keep the list narrow and accurate.
3. **Report refusals word for word, on the page.** Silent failures are what kill trust.
4. **Out-of-office events reject descriptions.** Creating one with a description (or a visibility or color setting) fails with *"Request contains an invalid argument."* Send only the title and times, and track these events by ID.
5. **The calendar connection ignores colors.** Setting a color returns success but changes nothing. A small Apps Script in your own account works.
6. **Free/busy can't tell vacation from a meeting.** Keep your own list of days off and lighter days on the page. It's the source of truth.
7. **Not every personal event means you're away.** A reminder that the landscapers are coming isn't an appointment. Use free/busy on the personal calendar, and ignore titles starting with "Reminder".
8. **Mark the planner's own events.** A marker in the description is how it knows what it may touch. Use a different marker for each planner instance.
9. **Sort steps by their order, not their ID.** Otherwise "print the model" can show up before "design the model".
10. **"In November" and "starting in November" mean different things.** The first sets a deadline; the second only a start date.
11. **Anything a program reads needs a fixed format.** Free-form emails from one planner varied run to run, so the receiving planner needed a fixed block it could parse.
12. **Busy all-day events you forgot about block whole days.** An all-day conference marked busy hid two free days from the planner. Mark multi-day "interested" events as free.
13. **If you drag blocks after the morning run, the page catches up the next morning.** That's expected, not a bug.
14. **Imports bring old baggage.** Put imported lists through a review step before anything is scheduled.
15. **Connections attach when a chat starts.** If you just turned one on, start a new chat before testing.
