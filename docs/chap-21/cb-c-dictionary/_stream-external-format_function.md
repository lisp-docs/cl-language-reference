**stream-external-format** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"stream-external-format"}><b>stream-external-format</b></ClLinks> *stream → format* 



**Arguments and Values:** 



<ClLinks  term={"stream"}><i>stream</i></ClLinks>—a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm>. 



<ClLinks  term={"format"}><i>format</i></ClLinks>—an <GlossaryTerm styled={true} term={"external file format"}><i>external file format</i></GlossaryTerm>. 



**Description:** 



Returns an <GlossaryTerm styled={true} term={"external file format designator"}><i>external file format designator</i></GlossaryTerm> for the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



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



the :external-format <ClLinks  term={"argument"}><i>argument</i></ClLinks> to the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"open"}><b>open</b></ClLinks> and the <ClLinks  term={"with-open-file"}><b>with-open-file</b></ClLinks> <ClLinks  term={"macro"}><i>macro</i></ClLinks>. 



**Notes:** 



The <ClLinks  term={"format"}><i>format</i></ClLinks> returned is not necessarily meaningful to other <ClLinks  term={"implementation"}><i>implementations</i></ClLinks>. 



