**truename** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink> *filespec → truename* 



**Arguments and Values:** 



*filespec*—a *pathname designator* . 



<GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm>—a *physical pathname*. 



**Description:** 



<DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink> tries to find the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> indicated by *filespec* and returns its <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm>. If the *filespec designator* is an open <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, its associated <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> is used. If *filespec* is a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, <DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink> can be used whether the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is open or closed. It is permissible for <DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink> to return more specific information after the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is closed than when the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> was open. If *filespec* is a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



**Examples:**
```lisp

;; An example involving version numbers. Note that the precise nature of 
;; the truename is implementation-dependent while the file is still open. 
(with-open-file (stream ">vistor>test.text.newest") 
  (values (pathname stream) 

	  
	  
	  (truename stream))) 
*→* #P"S:>vistor>test.text.newest", #P"S:>vistor>test.text.1" 
<i><sup>or</sup>→</i> #P"S:>vistor>test.text.newest", #P"S:>vistor>test.text.newest" 
<i><sup>or</sup>→</i> #P"S:>vistor>test.text.newest", #P"S:>vistor> temp . temp .1" 
;; In this case, the file is closed when the truename is tried, so the 
;; truename information is reliable. 
(with-open-file (stream ">vistor>test.text.newest") 
  (close stream) 
  (values (pathname stream) 
	  (truename stream))) 
*→* #P"S:>vistor>test.text.newest", #P"S:>vistor>test.text.1" 
;; An example involving TOP-20’s implementation-dependent concept 
;; of logical devices – in this case, "DOC:" is shorthand for 
;; "PS:<DOCUMENTATION>" ... 
(with-open-file (stream "CMUC::DOC:DUMPER.HLP") 
  (values (pathname stream) 
	  (truename stream))) 
*→* #P"CMUC::DOC:DUMPER.HLP", #P"CMUC::PS:<DOCUMENTATION>DUMPER.HLP.13" 

```
**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if an appropriate <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> cannot be located within the *file system* for the given *filespec*, or if the *file system* cannot perform the requested operation. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"wild"}><i>wild</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



<DictionaryLink styled={true} term={"truename"}><b>truename</b></DictionaryLink> may be used to account for any <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> translations performed by the *file system*. 