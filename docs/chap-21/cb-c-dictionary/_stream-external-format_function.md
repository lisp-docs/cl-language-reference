**stream-external-format** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"stream-external-format"}><b>stream-external-format</b></ClLinks> *stream → format* 



**Arguments and Values:** 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a *file stream*. 



<ClLinks styled={true} term={"format"}><i>format</i></ClLinks>—an *external file format*. 



**Description:** 



Returns an *external file format designator* for the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



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



the :external-format <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> to the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"open"}><b>open</b></ClLinks> and the <ClLinks styled={true} term={"with-open-file"}><b>with-open-file</b></ClLinks> <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>. 



**Notes:** 



The <ClLinks styled={true} term={"format"}><i>format</i></ClLinks> returned is not necessarily meaningful to other <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks>. 



