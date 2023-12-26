**truename** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink> *filespec → truename* 



**Arguments and Values:** 



*filespec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



<GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink> tries to find the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> indicated by *filespec* and returns its <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm>. If the *filespec designator* is an open <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, its associated <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> is used. If *filespec* is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, <DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink> can be used whether the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is open or closed. It is permissible for <DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink> to return more specific information after the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is closed than when the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> was open. If *filespec* is a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



**Examples:**
```lisp
;; An example involving version numbers. Note that the precise nature of 
;; the truename is implementation-dependent while the file is still open. 
(with-open-file (stream ">vistor>test.text.newest") 
  (values (pathname stream) 
	  
	  
	  (truename stream))) 
→ #P"S:>vistor>test.text.newest", #P"S:>vistor>test.text.1" 
<i><sup>or</sup>→</i> #P"S:>vistor>test.text.newest", #P"S:>vistor>test.text.newest" 
<i><sup>or</sup>→</i> #P"S:>vistor>test.text.newest", #P"S:>vistor> temp . temp .1" 
;; In this case, the file is closed when the truename is tried, so the 
;; truename information is reliable. 
(with-open-file (stream ">vistor>test.text.newest") 
  (close stream) 
  (values (pathname stream) 
	  (truename stream))) 
→ #P"S:>vistor>test.text.newest", #P"S:>vistor>test.text.1" 
;; An example involving TOP-20’s implementation-dependent concept 
;; of logical devices – in this case, "DOC:" is shorthand for 
;; "PS:<DOCUMENTATION>" ... 
(with-open-file (stream "CMUC::DOC:DUMPER.HLP") 
  (values (pathname stream) 
	  (truename stream))) 
→ #P"CMUC::DOC:DUMPER.HLP", #P"CMUC::PS:<DOCUMENTATION>DUMPER.HLP.13" 
```
**Exceptional Situations:** 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if an appropriate <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> cannot be located within the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> for the given *filespec*, or if the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> cannot perform the requested operation. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is <GlossaryTerm  term={"wild"}><i>wild</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



<DictionaryLink  term={"truename"}><b>truename</b></DictionaryLink> may be used to account for any <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> translations performed by the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 