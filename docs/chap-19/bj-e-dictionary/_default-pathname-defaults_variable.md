*∗<DictionaryLink styled={true} term={"default-pathname-defaults"}><b>*default-pathname-defaults*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a *pathname object*. 



**Initial Value:** 



An *implementation-dependent pathname*, typically in the working directory that was current when Common Lisp was started up. 



**Description:** 



a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, used as the default whenever a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> needs a default <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> and one is not supplied. 



**Examples:**
```lisp

;; This example illustrates a possible usage for a hypothetical Lisp running on a ;; DEC TOPS-20 file system. Since pathname conventions vary between Lisp 
;; implementations and host file system types, it is not possible to provide a ;; general-purpose, conforming example. 
\*default-pathname-defaults\* *→* #P"PS:<FRED>" 
(merge-pathnames (make-pathname :name "CALENDAR")) 
*→* #P"PS:<FRED>CALENDAR" 
(let ((\*default-pathname-defaults\* (pathname "<MARY>"))) 
  (merge-pathnames (make-pathname :name "CALENDAR"))) 
*→* #P"<MARY>CALENDAR" 

```
**Affected By:** 



The <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



