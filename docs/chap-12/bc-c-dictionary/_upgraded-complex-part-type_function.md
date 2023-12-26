**upgraded-complex-part-type** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink> *typespec* &amp;optional *environment → upgraded-typespec* 



**Arguments and Values:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, denoting the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm> and the and current <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 



*upgraded-typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink> returns the part type of the most specialized <ClLinks  term={"complex"}><i>complex</i></ClLinks> number representation that can hold parts of *type typespec*. 



The *typespec* is a <ClLinks  term={"subtype"}><i>subtype</i></ClLinks> of (and possibly <GlossaryTerm styled={true} term={"type equivalent"}><i>type equivalent</i></GlossaryTerm> to) the *upgraded-typespec*. 



The purpose of <DictionaryLink  term={"upgraded-complex-part-type"}><b>upgraded-complex-part-type</b></DictionaryLink> is to reveal how an implementation does its *upgrading*. 



**See Also:** 



<DictionaryLink  term={"complex"}><b>complex</b></DictionaryLink> (<ClLinks  term={"function"}><i>function</i></ClLinks> and <ClLinks  term={"type"}><i>type</i></ClLinks>) 



**Notes:** 



