**wild-pathname-p** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"wild-pathname-p"}><b>wild-pathname-p</b></ClLinks> <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> &amp;optional *field-key → generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"pathname"}><i>pathname</i></ClLinks>—a *pathname designator* . 



*Field-key*—one of :host, :device :directory, :name, :type, :version, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<ClLinks  term={"wild-pathname-p"}><b>wild-pathname-p</b></ClLinks> tests <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> for the presence of wildcard components. 



If <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> is a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> (as returned by <ClLinks  term={"pathname"}><b>pathname</b></ClLinks>) it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



If *field-key* is not supplied or <ClLinks  term={"nil"}><b>nil</b></ClLinks>, <ClLinks  term={"wild-pathname-p"}><b>wild-pathname-p</b></ClLinks> returns true if <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> has any wildcard components, <ClLinks  term={"nil"}><b>nil</b></ClLinks> if <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> has none. If *field-key* is <ClLinks  term={"non-nil"}><i>non-nil</i></ClLinks>, <ClLinks  term={"wild-pathname-p"}><b>wild-pathname-p</b></ClLinks> returns true if the indicated component of <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> is a wildcard, <ClLinks  term={"nil"}><b>nil</b></ClLinks> if the component is not a wildcard. 



**Examples:**
```lisp
;;;The following examples are not portable. They are written to run 
;;;with particular file systems and particular wildcard conventions. 
;;;Other implementations will behave differently. These examples are 
;;;intended to be illustrative, not to be prescriptive. 
(wild-pathname-p (make-pathname :name :wild)) → true 
(wild-pathname-p (make-pathname :name :wild) :name) → true 
(wild-pathname-p (make-pathname :name :wild) :type) → false 
(wild-pathname-p (pathname "s:>foo>\*\*>")) → true ;Lispm 
(wild-pathname-p (pathname :name "F\*O")) → true ;Most places 
```
**Exceptional Situations:** 



If <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> is not a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>, a <ClLinks  term={"string"}><i>string</i></ClLinks>, or a *stream associated with a file* an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



Not all implementations support wildcards in all fields. See Section 19.2.2.2.2 (:WILD as a 



 



 



Component Value) and Section 19.2.2.3 (Restrictions on Wildcard Pathnames). 



