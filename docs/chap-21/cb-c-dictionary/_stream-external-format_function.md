**stream-external-format** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"stream-external-format"}><b>stream-external-format</b></DictionaryLink> *stream → format* 



**Arguments and Values:** 



<GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm>. 



<GlossaryTerm  term={"format"}><i>format</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm>. 



**Description:** 



Returns an <GlossaryTerm styled={true} term={"external file format designator"}><i>external file format designator</i></GlossaryTerm> for the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



**Examples:**
```lisp
(with-open-file (stream "test" :direction :output) 
  
  
  (stream-external-format stream)) 
→ :DEFAULT 
<i><sup>or</sup>→</i> :ISO8859/1-1987 
<i><sup>or</sup>→</i> (:ASCII :SAIL) 
<i><sup>or</sup>→</i> ACME::PROPRIETARY-FILE-FORMAT-17 
<i><sup>or</sup>→</i> #<FILE-FORMAT :ISO646-1983 2343673> 
```
**See Also:** 



the :external-format <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> to the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"open"}><b>open</b></DictionaryLink> and the <DictionaryLink  term={"with-open-file"}><b>with-open-file</b></DictionaryLink> <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>. 



**Notes:** 



The <GlossaryTerm  term={"format"}><i>format</i></GlossaryTerm> returned is not necessarily meaningful to other <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm>. 



