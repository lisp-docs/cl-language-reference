**wild-pathname-p** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink> <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;optional *field-key → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>—a *pathname designator* . 



*Field-key*—one of :host, :device :directory, :name, :type, :version, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



<DictionaryLink styled={true} term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink> tests <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> for the presence of wildcard components. 



If <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> (as returned by <DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>) it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



If *field-key* is not supplied or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink styled={true} term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink> returns true if <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> has any wildcard components, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> has none. If *field-key* is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, <DictionaryLink styled={true} term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink> returns true if the indicated component of <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is a wildcard, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the component is not a wildcard. 



**Examples:**
```lisp

;;;The following examples are not portable. They are written to run 
;;;with particular file systems and particular wildcard conventions. 
;;;Other implementations will behave differently. These examples are 
;;;intended to be illustrative, not to be prescriptive. 
(wild-pathname-p (make-pathname :name :wild)) *→ true* 
(wild-pathname-p (make-pathname :name :wild) :name) *→ true* 
(wild-pathname-p (make-pathname :name :wild) :type) *→ false* 
(wild-pathname-p (pathname "s:>foo>\*\*>")) *→ true* ;Lispm 
(wild-pathname-p (pathname :name "F\*O")) *→ true* ;Most places 

```
**Exceptional Situations:** 



If <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, or a *stream associated with a file* an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



Not all implementations support wildcards in all fields. See Section 19.2.2.2.2 (:WILD as a 



 



 



Component Value) and Section 19.2.2.3 (Restrictions on Wildcard Pathnames). 



