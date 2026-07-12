<!-- # Cycle Counting a Pattern Shop Without Stopping Production -->

You cannot shut down a pattern shop to count it. Production Control doesn't care that you're mid-audit. They need the 14-inch volute pattern pulled for a Tuesday pour whether or not anyone's laid eyes on it since March. So the idea that you'll ever get a clean, all-hands, everything-frozen physical inventory is a fantasy — one more thing that sounds good in a meeting and dies the second the shop floor hears about it.

What you can get is a rolling count that never stops, doesn't block a single pull, and slowly turns 30,000-plus pattern SKUs from "we think that's where it is" into "we know that's where it is." That's the job. Here's how to build it.

## Why a Full Physical Inventory Fails Here

A full-stop count works in a warehouse full of boxed SKUs that don't move for weeks. A pattern shop doesn't have that luxury. Wood patterns, match plates, and core boxes move constantly — to molding, to repair, to an outside foundry on a custody transfer, back again. Freeze the floor for three days and you haven't gotten an accurate count. You've gotten a snapshot of a shop pretending to be still, followed by three days of transactions nobody logged because everyone was told not to touch anything.

The fix isn't a bigger event. It's a smaller one, repeated forever.

## The Count Design

Build the count around zones, not the whole warehouse at once.

- **Split each location into count zones.** Costa Mesa Foundry, Costa Mesa Storage, South Gate Foundry, and Perris Storage each get their own zone map — by aisle, rack, or shelf range, whatever your physical layout actually supports.
- **Set a cadence per zone, not per warehouse.** High-turn zones — active tooling near the molding floor — get counted monthly. Low-turn zones — long-term storage, seasonal patterns — get counted quarterly.
- **Weight the schedule by dollar value and turn frequency, not alphabetically.** A rack of high-value bronze match plates earns more count attention than a rack of retired wood patterns waiting on a disposition decision. Count what's expensive and what moves. Everything else gets its turn eventually.
- **Never take a zone fully offline.** A clerk counts a rack. If a pull request comes in for something on that rack mid-count, the pull happens. The clerk notes the transaction and adjusts the count in progress. The shop does not wait on the audit.

This is the whole trick: the count moves around the transactions instead of demanding the transactions stop.

## Clerk Assignments

Whoever counts a zone should not be the person who's been solely responsible for that zone's accuracy. That's not an accusation — it's just how blind spots work. The clerk who's owned a rack for two years has trained eyes that see what should be there, not always what is there.

- **Rotate count assignments across clerks.** Nobody counts their own primary zone on a standing basis.
- **Pair a new clerk with a senior clerk for the first few cycles.** Counting patterns — reading a stamped ID off a core box that's been re-tagged twice — has a learning curve. Don't find that out from bad data.
- **Give each clerk a written count sheet or handheld scan list, not a verbal assignment.** "Go count Aisle 4" turns into "I counted most of Aisle 4" by Friday. A defined list with a defined boundary is the only way to know a count is actually complete.
- **Log who counted what, and when.** When a variance shows up later, you need to know whose count it came from — not to blame them, but because patterns in who's finding what tell you where your process is actually weak.

## Variance Thresholds

Not every discrepancy is worth chasing to the ground, and not chasing the right ones is how a shop loses six figures of tooling nobody notices until a customer needs a rerun.

Set tiers:

- **Tier 1 — Location mismatch, item confirmed on-site.** Pattern's in Bay 3 instead of Bay 1. Update the location, log the correction, move on. This is the bulk of your variances and it should take seconds to close.
- **Tier 2 — Quantity or status mismatch on a low-value item.** A count of 3 core boxes where the ERP — Enterprise Resource Planning system — says 4, on an item under a set dollar threshold. Investigate within the week. Check custody transfer logs and repair queue status before assuming it's actually missing.
- **Tier 3 — High-value asset unaccounted for, or any pattern flagged for an active job.** This gets escalated same-day. No pattern tied to a scheduled pour sits in "we'll look into it" status. This is where you check external custody records first — a pattern sitting at an outside foundry for repair looks identical to a lost pattern until someone checks the paperwork.

Set the dollar threshold with Production Control and Quality, not alone. It's their exposure too, and a number you picked by yourself in an office is a number nobody else will defend when it gets questioned.

## When the Count and the ERP Disagree

This is where most cycle count programs quietly die. Someone counts a pattern, the ERP says something else, and the discrepancy sits in a spreadsheet nobody closes because closing it means admitting the system was wrong — or admitting the count was wrong — and either one takes more energy than anyone wants to spend on a Tuesday.

Don't let it sit. Work it in order:

1. **Re-verify the physical count before touching the record.** One bad scan or one misread tag has cost more people their afternoon than an actual inventory error. Confirm before you correct.
2. **Check the transaction log for anything unrecorded in the count window.** A same-day pull, a rush transfer to South Gate, a return from an outside pattern shop that hasn't been logged yet — these explain more variances than actual loss does.
3. **Check custody status.** If your system tracks external transactions — ship-external, return-external — verify the pattern isn't sitting at a vendor or customer site under a transfer that was recorded late.
4. **If the variance holds after that, log it as a confirmed discrepancy, not a guess.** Write down what you know, not what you assume. "Not located in assigned zone as of [count date]" is accurate. "Probably scrapped in 2023" is a story, and stories don't hold up when someone asks for the pattern in a year.
5. **Correct the record and note the reason code.** Every correction gets a reason — found in wrong location, confirmed in repair, confirmed external, or unresolved/investigating. An adjustment with no reason code is just a number that changed for no explainable cause, and that's worse than the original discrepancy.
6. **Track unresolved discrepancies as their own list, reviewed monthly.** Don't let them dissolve into the count history where nobody looks again. An item that stays unresolved past two cycles gets escalated — that's not a counting problem anymore, it's a process problem somewhere upstream.

The goal isn't a system that never has a variance. Thirty thousand SKUs moving across four locations will always throw variances. The goal is a system where every variance gets an answer, on a clock, instead of becoming permanent background noise that everyone's learned to ignore.

## What This Actually Buys You

A rolling count doesn't give you a clean inventory event you can point to and say "done." It gives you something better: a shop where the data stays close enough to reality that when Production Control needs a pattern at 6 a.m., you already know where it is, and you're not finding out otherwise in front of a customer.

That's the whole point of counting anything. Not the count itself — the confidence it buys you before someone needs the answer.

The shop that never counts finds out its inventory was wrong at the worst possible moment. The shop that counts constantly finds out on a Tuesday afternoon, from a clerk with a scan sheet, when it costs nothing to fix.

---

**What's your variance tolerance? Tell me I'm wrong.**