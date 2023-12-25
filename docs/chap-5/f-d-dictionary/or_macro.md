---
title: "or"
---

# or

import OrMacro from './_or_macro.md';

<OrMacro />

## Expanded Reference: or

<DictionaryLink  term={"or"}><b>or</b></DictionaryLink> is defined as a macro because it stops evaluating as soon as any <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> evaluates to something other than <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>.  If it were defined as a function, every <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> would be evaluated before the function was applied.  As a result of <DictionaryLink  term={"or"}><b>or</b></DictionaryLink> not being a function, it can not be used with <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink>.  In order to check that some value of a list is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, the function <DictionaryLink  term={"some"}><b>some</b></DictionaryLink> could be used.
