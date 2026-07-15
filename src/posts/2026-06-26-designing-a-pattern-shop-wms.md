---
layout: layouts/post.njk
title: Designing a WMS for assets that don't move like inventory
deck: Make the discipline easy to follow and hard to skip
date: 2026-06-26
---

<!-- # Designing a WMS for assets that don't move like inventory -->

A pattern isn't a SKU. It doesn't turn over. It might sit on a shelf for eleven months and then get pulled for a production run with two days' notice, and if it's not exactly where the record says it is, you don't lose a sale. You lose a pour, and possibly a customer relationship you've been building for a decade. That difference is the whole reason a generic warehouse management system doesn't fit a pattern shop, and why we ended up building our own.

Off-the-shelf WMS platforms are built for throughput: pick, pack, ship, replenish. Ours had to be built for permanence: identify, protect, locate, and produce on demand, sometimes years apart, across four separate buildings. Same category of software problem on paper. Completely different problem in practice.

## Start with the question the system has to answer

Every WMS decision traces back to one question: if someone needs this pattern right now, can we tell them exactly where it is, in what condition, and whether we're even allowed to touch it? That's it. Everything else, the database fields, the location codes, the count cadence, exists to make that question answerable in under five minutes, every time, for every one of thousands of assets spread across Costa Mesa, South Gate, and Perris.

Design the system backward from that question and the architecture falls into place on its own.

## The master record is the single source of truth, or it's nothing

We built one governing rule before anything else: every pattern has exactly one active master record. Not a spreadsheet here and a whiteboard there and someone's memory filling the gaps. One record, one location field, one condition status.

The fields aren't decorative. Pattern ID and description tell you what it is. Customer name and number tell you whose problem it becomes if it's wrong. Part number and casting description tie it to the product it makes, because a pattern with no link back to the casting is a pattern nobody can find when Production Control calls asking for "the impeller housing thing." Ownership status is its own field, not a note, because company-owned and customer-owned assets carry different obligations, and a system that treats them the same is a system waiting to embarrass you with a customer's tooling.

Last cycle count date and last audit date live in the master record too, not in a separate log somebody has to cross-reference. If the system can't tell you, at a glance, when a pattern was last physically verified, it's not a source of truth. It's a filing cabinet with a database interface.

## Location codes have to mean something standing in the aisle

We use a four-part code: facility, zone, rack, shelf. CMF-A-03-04. Read it cold and you know it's Costa Mesa Foundry, zone A, rack 3, shelf 4, before you've walked a single step. That's the test for a location scheme: can a new hire stand in the aisle, look at the code on the pick list, and find the shelf without asking anyone.

A location code that only makes sense to the person who invented it isn't a system. It's a puzzle you've built into your own operation, and puzzles don't scale past the one person who can solve them.

Assigning a location isn't just "find open space and put it there," either. Verify the space is actually available. Verify the rack can carry the weight; pattern equipment isn't uniform, and a heavy core box on an undersized shelf is how you find out the hard way that structural capacity was never checked. Confirm it's accessible, not buried behind six other patterns nobody's touched since the Clinton administration. Enter it in the database before you place the pattern, not after, because "I'll log it later" is how location drift starts. Then verify the location once it's placed. Four checks, in order, every time. Skip the order and you're back to guessing.

## Count what matters most, most often

We didn't count everything on the same schedule, because not everything carries the same risk. A-items, your highest-value or highest-turnover patterns, get counted monthly. B-items quarterly. C-items twice a year. That's an ABC tier straight out of inventory theory, but the point isn't the theory. The point is that your counting effort should track where the cost of being wrong is highest, not spread evenly across everything like counting is a chore to get through instead of a control to rely on.

The count procedure itself stays deliberately plain: locate the pattern, verify identification, verify location, verify quantity, record findings. No narrative, no judgment calls. A counter's job is to report what's actually there, not to explain it away.

Discrepancies get investigated immediately, not batched for end of month. And if the same location or the same pattern type keeps showing variance, that's not a counting problem anymore. That's a root cause problem, and it goes to corrective action instead of getting logged and forgotten. We hold ourselves to 98% inventory accuracy as the KPI. Below that, the system isn't earning its keep, no matter how good the location codes look on paper.

## The flow has to match how work actually happens

Receive it. Verify identity. Review condition. Enter it in the database. Assign a location. Store it. Then it sits in inventory maintenance, cycle counts and audits, until someone requests it, at which point you retrieve it and it goes back out the door, eventually to return and start the loop again.

That sequence isn't arbitrary. Condition review happens before database entry on purpose: you want the record to reflect reality at receipt, not reality plus three weeks of "we'll note the damage later." Location assignment happens after the database entry exists, because you're not physically placing an asset you haven't already accounted for. Every step earns its position in the sequence by preventing a specific failure that happens when you skip it or do it out of order.

## Customer-owned assets don't get to blend in

A meaningful share of what sits in these warehouses isn't ours. It belongs to customers who trust us to keep it identified, protected, and ready, and who will notice fast if it isn't. The WMS treats ownership status as a first-class field specifically so customer property never quietly merges into general inventory. Separate handling requirements, separate visibility, same rigor applied to the physical control either way.

That's not extra bureaucracy. That's the difference between a warehouse and a warehouse you can put a customer's name on.

## A WMS isn't software. It's a discipline the software enforces.

The database, the location codes, the count schedule: none of it replaces the discipline of doing the receiving check correctly, entering the location before you walk away, counting honestly instead of rubber-stamping a sheet. The system's real job is to make the discipline easy to follow and hard to skip, and to leave a record when someone does skip it anyway.

Build it around how the assets actually move, not how a generic system assumes inventory moves, and the WMS stops being overhead. It becomes the reason you can answer, in under five minutes, the only question that ever really mattered: where is it, and can we get it.
                                                  