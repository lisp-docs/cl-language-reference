**upgraded-complex-part-type** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink> *typespec* &amp;optional *environment → upgraded-typespec* 



**Arguments and Values:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, denoting the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> and the and current <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 



*upgraded-typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink> returns the part type of the most specialized <GlossaryTerm  term={"complex"}><i>complex</i></GlossaryTerm> number representation that can hold parts of *type typespec*. 



The *typespec* is a <GlossaryTerm  term={"subtype"}><i>subtype</i></GlossaryTerm> of (and possibly <GlossaryTerm styled={true} term={"type equivalent"}><i>type equivalent</i></GlossaryTerm> to) the *upgraded-typespec*. 



The purpose of <DictionaryLink  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink> is to reveal how an implementation does its *upgrading*. 



**See Also:** 



<DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> (<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> and <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>) 



**Notes:** 



