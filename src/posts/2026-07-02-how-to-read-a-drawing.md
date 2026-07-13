---
layout: layouts/post.njk
title: How to Read a Drawing If You Didn't Go to Engineering School
deck: You don't need an engineering degree to read one.
date: 2026-07-02
---

<!-- # How to Read a Drawing If You Didn't Go to Engineering School -->

A casting drawing looks like a wall of numbers and arrows until you know what each piece is for. Then it stops being a puzzle. It's just a part, described honestly, by someone who wanted to be understood.

You don't need an engineering degree to read one. You need to know where to look first.

## Start With the Title Block

Every drawing has a boxed-off area, usually bottom right, called the title block. It's the part's label. Read it before you read a single dimension.

The title block names the part, the drawing number, the scale, the units, who drew it, and when. Contents vary by customer. The job doesn't: confirm you're holding the right document, and confirm you're reading it correctly. Get either wrong and nothing downstream matters.

## Know Which Drawing You're Holding

A customer hands you a casting drawing, a machine drawing, or both. Same part, two different stages. Mix them up and you'll quote the wrong process.

A **casting drawing** shows the part before machining — as-cast shape, dimensions, tolerances, machining stock. No machining marks. Sometimes dotted lines under a surface show the finished profile, so you can see what metal comes off later.

A **machine drawing** shows the part after machining — final dimensions, tighter tolerances, datum references, holes, threads, surface finish. Separate these finished numbers from the as-cast geometry you actually need to build the pattern.

A casting drawing may also call out draft — the slight angle on a surface that lets the pattern pull clean from the mould. Skip it and the pattern tears the mould on every draw.

## The Views: One Part, Several Flat Pictures

The body of the drawing shows the part from several angles — usually front, top, one side. Each view is straight-on. Stack them in your head and you get the shape.

Hidden features need a section view — an imaginary cut through the part that shows a wall thickness, bore, cavity, or passage you can't see from outside. If a drawing hides something without a section view to show it, ask for one. Don't guess at a wall thickness. Guessing is how you get a hot spot and a customer complaint.

## Dimensions and Tolerances: Size, and How Much It's Allowed to Move

Every process makes variation. The only real question is how much variation the part can take and the process can hold.

That allowed range is the tolerance. It sits next to a dimension, in the title block, in a general note, or in a referenced standard — ISO 8062 sets tolerance grades for cast dimensions so buyer and foundry aren't negotiating from two different assumptions.

A tolerance tells you the range. It doesn't tell you why the dimension matters. If a dimension is functionally critical, it needs to say so — an individual tolerance, a note, or GD&T (Geometric Dimensioning and Tolerancing).

Remember one thing from this section: every controlled dimension gets a tolerance, even the ones that borrow it from somewhere else on the page.

## Datums and Machining Stock: Where You Measure From, What Comes Off Later

Datum features set the shared reference — a surface, an axis, a point — that both sides measure from. Without it, you and the customer inspect from two different edges and argue about a part that's actually fine.

Machining stock is extra material called out on a face, meant to come off during machining. Most castings get machined somewhere, especially where a tighter dimension or surface finish is required. The stock is there on purpose.

See machining stock on a surface, and you know that surface isn't finished yet. It's not a defect. It's a plan.

## The Symbols: Surface Requirements and GD&T

A surface-texture symbol — usually a check-mark shape — points at a face and states the surface condition required there: a roughness value, or a note that material has to come off.

Visual cast-surface requirements sometimes live separately, in a note or the title block, referencing a standard like MSS SP-55 or ASTM A802 SCRATA comparator plates.

Then there's GD&T — boxed symbols called feature-control frames, defining how form, orientation, and location are controlled relative to the datums on the page. GD&T says more, and says it more precisely, than a plus-or-minus dimension ever will.

GD&T earns its own piece. For now: those boxes govern how features relate to each other, not just how big they are.

## The Notes: Small Print That Runs the Job

Off to the side, usually numbered, sit the general notes. Read every one. This is where a drawing puts what doesn't fit next to a dimension — heat treatment, non-destructive testing, marking, traceability, the standards that apply.

Some of it lives in a spec or purchase order the drawing references instead of states. A line as short as "inspect all surfaces per…" pulls an entire document, and every requirement in it, straight into your job. Skip the notes and you didn't actually read the drawing. You read the pictures.

## The Revision Block: Which Version You're Actually Building To

The revision block tracks changes over time. Any revision can move a dimension, a material callout, a note.

Having the newest revision on file proves nothing. What matters is whether the revision in your hand matches the purchase order and the approved document package for this job. Newest isn't correct. Ordered-against is correct.

## A Practical Reading Order

The strongest drawing packages aren't the busiest. They're the clearest. Work one in this order:

1. Confirm casting drawing, machine drawing, or both. Check part number, drawing number, revision, and units.
2. Read the views and sections. Build the geometry.
3. Find the general tolerance and every individually toleranced dimension.
4. Identify datums, machining stock, and surfaces staying as-cast.
5. Read every general note. Pull every referenced standard or spec.
6. Confirm the drawing matches the purchase order and the approved document package.

You'll never need to produce a drawing like this. But reading one — glancing at it and knowing exactly where to look — is one of the most useful skills a buyer or engineer brings into a conversation with a foundry.

To the foundry, it was never a wall of numbers. It was a part, described carefully, by someone who wanted to be understood.
