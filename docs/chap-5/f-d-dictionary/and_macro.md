---
title: "and"
---

# and

import AndMacro from './_and_macro.md';

<AndMacro />

## Expanded Reference: and

<DictionaryLink  term={"and"}><b>and</b></DictionaryLink> is defined as a macro because it stops evaluating as soon as any <ClLinks  term={"form"}><i>form</i></ClLinks> evaluates to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>.  If it were defined as a function, every <ClLinks  term={"form"}><i>form</i></ClLinks> would be evaluated before the function was applied.  As a result of <DictionaryLink  term={"and"}><b>and</b></DictionaryLink> not being a function, it can not be used with <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink>.  In order to check that every value of a list is <ClLinks  term={"true"}><i>true</i></ClLinks>, the function <DictionaryLink  term={"every"}><b>every</b></DictionaryLink> could be used.
