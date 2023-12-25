**cell-error-name** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"cell-error-name"}><b>cell-error-name</b></DictionaryLink> *condition → name* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"cell-error"}><b>cell-error</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the offending cell involved in the <GlossaryTerm styled={true} term={"situation"}><i>situation</i></GlossaryTerm> represented by <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



The nature of the result depends on the specific <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. For example, if the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"unbound-variable"}><b>unbound-variable</b></DictionaryLink>, the result is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the *unbound variable* which was being *accessed*, if the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"undefined-function"}><b>undefined-function</b></DictionaryLink>, this is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the *undefined function* which was being *accessed*, and if the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink>, this is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> which was being *accessed*. 



**See Also:** 



<DictionaryLink styled={true} term={"cell-error"}><b>cell-error</b></DictionaryLink>, <DictionaryLink styled={true} term={"unbound-slot"}><b>unbound-slot</b></DictionaryLink>, <DictionaryLink styled={true} term={"unbound-variable"}><b>unbound-variable</b></DictionaryLink>, <DictionaryLink styled={true} term={"undefined-function"}><b>undefined-function</b></DictionaryLink>, Section 9.1 (Condition System Concepts) 



