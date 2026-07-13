---
layout: layouts/post.njk
title: First entry
deck: Starting a blog, mostly to have somewhere to put the things that don't fit in a status report.
date: 2026-06-26
---

This is a placeholder post to show the layout working end to end — the drop-cap opener, the reading-time estimate, the pull quote, and code block styles. Replace it with real writing whenever you're ready.

## A section header

Section headers get their own hairline rule and Cormorant Garamond treatment, so a long post reads like a printed piece rather than a wall of text.

> Blockquotes get a terracotta rule on the left, for pulling out a line worth sitting with.

Inline `code` and fenced blocks both pick up the mono face:

```js
// Reading time filter — roughly 200 words per minute
const words = content.trim().split(/\s+/).length;
const minutes = Math.max(1, Math.round(words / 200));
```

Delete this post once you've got real entries in `/src/posts/`.
