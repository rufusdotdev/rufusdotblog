---
layout: layouts/post.njk
title: Designing a QMS for a pattern shop nobody thought needed one
deck: A QMS alone doesn't prevent problems.
date: 2026-06-12
---

<!-- # Designing a QMS for a pattern shop nobody thought needed one -->

Nobody builds a quality management system because they woke up excited about document control. You build one because a customer-owned pattern went missing for three days and cost a pour. Because two guys logged the same cycle count differently and nobody could tell you which number was real. Because "we know where everything is" turned out to mean "Dave knows where everything is," and Dave took a vacation.

That's how ours started. Not with ISO 9001 as the goal, but with a warehouse across four locations, thousands of patterns and core boxes, some owned by us and some owned by customers who'd notice fast if their tooling walked off, and no system tying any of it together except memory and good intentions. Memory doesn't scale. Good intentions don't survive a shift change.

## Start with what actually breaks

Every QMS guide starts with the manual. Ours didn't. We started with the failure modes, because the manual is supposed to describe what already works, not aspire to it.

The failures were consistent: patterns received without proper identification, storage locations that drifted from the record the moment someone "just set it down for now," transfers that happened verbally and lived nowhere, customer property mixed in with company assets, and damage that got noticed weeks after it happened instead of at receipt, when you could still trace who was responsible.

Name the failure precisely and the structure follows. Ours follows the life of a pattern: receiving, identification, storage, retrieval, transfer, maintenance, and disposition. Every SOP we wrote maps to one of those states, because that's the actual path an asset takes through the building, not an abstraction borrowed from a template.

## Document hierarchy isn't bureaucracy. It's traceability.

We built six levels: Quality Manual, Policies, SOPs, Work Instructions, Forms, and Records. Numbered (SOP-001, WI-001, FRM-001) so anyone can point to exactly which document governs an action and which revision is current.

This sounds like paperwork for paperwork's sake until you've had the argument about which version of a procedure was in effect the day something went wrong. Revision control isn't there to slow you down. It's there so that six months from now, when you're investigating why a pattern shipped without the right revision mark, you can prove what the procedure said at the time instead of guessing.

Level 1, the Quality Manual, states the policy: every pattern identified, traceable, protected, accessible. Level 3, the SOPs, tell you how. Level 4, the Work Instructions, tell you exactly, step by step, the way you'd tell a new hire standing next to you at the rack. Level 5 and 6, the forms and records, prove it happened.

Skip a level and the system breaks in a specific way. Policy without procedure is a poster on the wall. Procedure without work instructions leaves interpretation up to whoever's on shift. Work instructions without records mean you did it right but can't prove it, and to an auditor or an angry customer, that's the same as not doing it at all.

## Build the SOPs around the asset's life, not the org chart

We wrote eleven SOPs. Receiving. Identification standards. Storage and preservation. Retrieval and return. Transfers. Cycle counting. Inventory audits. Customer-owned pattern control. Maintenance and repair. Obsolete pattern disposition. Nonconformance and corrective action.

Notice what's not on that list: nothing about "the pattern shop department" or "the warehouse team." The SOPs follow the pattern, not the org chart, because assets don't care who's on shift. A pattern that comes in Monday and gets misidentified doesn't know or care that receiving and storage are technically different departments. The failure travels with the object. The documentation has to travel with it too.

Customer-owned pattern control got its own SOP, separate from general storage, on purpose. When it's your tooling, a mix-up is inventory shrinkage. When it's a customer's tooling, a mix-up is a phone call you don't want to make. Different risk, different procedure, same rack, unless you deliberately keep them apart in the system and in practice.

## Nonconformance isn't a punishment. It's a system correcting itself.

The most important document in the whole QMS isn't the Quality Manual. It's SOP-011, nonconformance and corrective action. Everything else describes how the system should work. This one describes what happens when it doesn't, and that's where the real engineering lives.

The sequence is short on purpose: contain it, investigate it, fix it, verify the fix held. Stop use. Verify what's actually affected. Find out what happened and why it happened, not just the immediate cause, but the condition that let it happen. Assign an owner and a due date, because a corrective action with no owner is a corrective action that dies quietly. Then come back and check that it actually worked, because plenty of fixes look good on paper and fail the first time reality tests them again.

Root cause analysis is where you name the system, not just the symptom. "Employee mislabeled pattern" is a symptom. "Identification standard wasn't posted at the receiving station and the new hire was never walked through it" is a root cause, and it's the difference between writing up one person and fixing the actual gap that will produce the next mislabeled pattern with someone else's name on it. If your corrective actions keep pointing at individuals instead of conditions, your root cause analysis isn't finished yet.

## Training ties the paper to the person

A QMS is only as good as the person executing the step, so we built a training and competency structure alongside the procedures: a department training matrix, individual training records, competency evaluation checklists, and retraining records for when someone falls out of practice or a procedure changes underneath them.

This matters more than it sounds like it should. A perfectly written SOP that nobody's been trained against isn't a control. It's a document. The training matrix is what turns "we have a procedure for that" into "the person doing the work today knows the procedure and has been checked against it." Competency evaluation isn't a formality. It's the verification step for the training investment, the same way effectiveness review is the verification step for a corrective action.

## Metrics close the loop

Cycle counts, monthly inventory audits, and department metrics aren't there to generate reports nobody reads. They're the feedback mechanism, the way you find out whether the system you built is actually holding, or whether it's drifting the way the old informal system drifted, just slower and with better paperwork.

If your cycle count discrepancy rate isn't trending down after six months of a new QMS, the system isn't working, no matter how clean the document hierarchy looks. Metrics are the honesty check on the whole exercise.

## The manual isn't the point

The Quality Manual is the least important document in the system, and also the one everyone wants to see first. It's the summary, not the substance. The substance is in whether the receiving clerk actually fills out FRM-001 every time, whether the cycle count sheet gets reconciled instead of just filed, whether a nonconformance actually triggers SOP-011 instead of a shrug and a verbal warning.

A QMS doesn't prevent problems. People following a system that was actually built around how work happens prevent problems. The manual just proves, later, that you knew what you were doing.

The system exists because someone already paid for not having one. Build it so nobody has to pay twice.
                                                                            