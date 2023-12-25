**step** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"step"}><b>step</b></DictionaryLink> *form → \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"step"}><b>step</b></DictionaryLink> implements a debugging paradigm wherein the programmer is allowed to <GlossaryTerm styled={true} term={"step"}><i>step</i></GlossaryTerm> through the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. The specific nature of the interaction, including which I/O streams are used and whether the stepping has lexical or dynamic scope, is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"step"}><b>step</b></DictionaryLink> evaluates <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in the current <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. A call to <DictionaryLink styled={true} term={"step"}><b>step</b></DictionaryLink> can be compiled, but it is acceptable for an implementation to interactively step through only those parts of the computation that are interpreted. 



It is technically permissible for a *conforming implementation* to take no action at all other than normal *execution* of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. In such a situation, (step <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>) is equivalent to, for example, (let () <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>). In implementations where this is the case, the associated documentation should mention that fact. 



**See Also:** 



<DictionaryLink styled={true} term={"trace"}><b>trace</b></DictionaryLink> 



**Notes:** 



<GlossaryTerm styled={true} term={"implementation"}><i>Implementations</i></GlossaryTerm> are encouraged to respond to the typing of ? or the pressing of a “help key” by providing help including a list of commands. 



