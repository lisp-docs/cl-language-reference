 



A *pprint dispatch table* is a mapping from keys to pairs of values. Each key is a *type specifier* . The values associated with a key are a “function” (specifically, a *function designator* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>) and a “numerical priority” (specifically, a *real*). Basic insertion and retrieval is done based on the keys with the equality of keys being tested by <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>. 



When <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the *current pprint dispatch table* (in <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink>) controls how <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> are printed. The information in this table takes precedence over all other mechanisms for specifying how to print <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. In particular, it has priority over user-defined <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> because the *current pprint dispatch table* is consulted first. 



The function is chosen from the *current pprint dispatch table* by finding the highest priority function that is associated with a *type specifier* that matches the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>; if there is more than one such function, it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> which is used. 



However, if there is no information in the table about how to *pretty print* a particular kind of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is invoked which uses <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> to print the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The value of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is still <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> when this function is *called*, and individual methods for <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> might still elect to produce output in a special format conditional on the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink>. 



