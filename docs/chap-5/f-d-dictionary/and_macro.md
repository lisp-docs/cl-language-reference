---
title: "and"
---

# and

import AndMacro from './_and_macro.md';

<AndMacro />

## Expanded Reference: and

<ClLinks styled={true} term={"and"}><b>and</b></ClLinks> is defined as a macro because it stops evaluating as soon as any <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> evaluates to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>.  If it were defined as a function, every <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> would be evaluated before the function was applied.  As a result of <ClLinks styled={true} term={"and"}><b>and</b></ClLinks> not being a function, it can not be used with <ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks>.  In order to check that every value of a list is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, the function <ClLinks styled={true} term={"every"}><b>every</b></ClLinks> could be used.
