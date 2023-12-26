**wild-pathname-p** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink> <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> &amp;optional *field-key → generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*Field-key*—one of :host, :device :directory, :name, :type, :version, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink> tests <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> for the presence of wildcard components. 



If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> (as returned by <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>) it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



If *field-key* is not supplied or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink  term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink> returns true if <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> has any wildcard components, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> has none. If *field-key* is <GlossaryTerm  term={"non-nil"}><i>non-nil</i></GlossaryTerm>, <DictionaryLink  term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink> returns true if the indicated component of <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is a wildcard, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if the component is not a wildcard. 



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



If <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is not a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>, a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm> an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



Not all implementations support wildcards in all fields. See Section 19.2.2.2.2 (:WILD as a 



 



 



Component Value) and Section 19.2.2.3 (Restrictions on Wildcard Pathnames). 



