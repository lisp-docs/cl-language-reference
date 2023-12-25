---
title: "and"
---

# and

import AndMacro from './_and_macro.md';

<AndMacro />

## Expanded Reference: and

<ClLinks  term={"and"}><b>and</b></ClLinks> is defined as a macro because it stops evaluating as soon as any <ClLinks  term={"form"}><i>form</i></ClLinks> evaluates to <ClLinks  term={"nil"}><b>nil</b></ClLinks>.  If it were defined as a function, every <ClLinks  term={"form"}><i>form</i></ClLinks> would be evaluated before the function was applied.  As a result of <ClLinks  term={"and"}><b>and</b></ClLinks> not being a function, it can not be used with <ClLinks  term={"apply"}><b>apply</b></ClLinks>.  In order to check that every value of a list is <ClLinks  term={"true"}><i>true</i></ClLinks>, the function <ClLinks  term={"every"}><b>every</b></ClLinks> could be used.
