**stream-external-format** *Function* 



**Syntax:** 



**stream-external-format** *stream → format* 



**Arguments and Values:** 



*stream*—a *file stream*. 



*format*—an *external file format*. 



**Description:** 



Returns an *external file format designator* for the *stream*. 



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



the :external-format *argument* to the *function* **open** and the **with-open-file** *macro*. 



**Notes:** 



The *format* returned is not necessarily meaningful to other *implementations*. 



