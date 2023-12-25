**stream-external-format** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"stream-external-format"}><b>stream-external-format</b></DictionaryLink> *stream → format* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a *file stream*. 



<GlossaryTerm styled={true} term={"format"}><i>format</i></GlossaryTerm>—an *external file format*. 



**Description:** 



Returns an *external file format designator* for the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**Examples:**
```lisp

(with-open-file (stream "test" :direction :output) 

  
  
  (stream-external-format stream)) 
*→* :DEFAULT 
<i><sup>or</sup>→</i> :ISO8859/1-1987 
<i><sup>or</sup>→</i> (:ASCII :SAIL) 
<i><sup>or</sup>→</i> ACME::PROPRIETARY-FILE-FORMAT-17 
<i><sup>or</sup>→</i> #<FILE-FORMAT :ISO646-1983 2343673> 

```
**See Also:** 



the :external-format <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink> and the <DictionaryLink styled={true} term={"with-open-file"}><b>with-open-file</b></DictionaryLink> <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>. 



**Notes:** 



The <GlossaryTerm styled={true} term={"format"}><i>format</i></GlossaryTerm> returned is not necessarily meaningful to other <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm>. 



