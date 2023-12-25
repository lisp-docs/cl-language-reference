**upgraded-complex-part-type** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink> *typespec* &amp;optional *environment → upgraded-typespec* 



**Arguments and Values:** 



*typespec*—a *type specifier* . 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>—an *environment object*. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, denoting the *null lexical environment* and the and current *global environment*. 



*upgraded-typespec*—a *type specifier* . 



**Description:** 



<DictionaryLink styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink> returns the part type of the most specialized <GlossaryTerm styled={true} term={"complex"}><i>complex</i></GlossaryTerm> number representation that can hold parts of *type typespec*. 



The *typespec* is a <GlossaryTerm styled={true} term={"subtype"}><i>subtype</i></GlossaryTerm> of (and possibly *type equivalent* to) the *upgraded-typespec*. 



The purpose of <DictionaryLink styled={true} term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink> is to reveal how an implementation does its *upgrading*. 



**See Also:** 



<DictionaryLink styled={true} term={"complex"}><b>complex</b></DictionaryLink> (<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>) 



**Notes:** 



