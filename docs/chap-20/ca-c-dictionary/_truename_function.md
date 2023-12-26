**truename** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"truename"}><b>truename</b></ClLinks> *filespec → truename* 



**Arguments and Values:** 



*filespec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



<ClLinks  term={"truename"}><i>truename</i></ClLinks>—a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"truename"}><b>truename</b></ClLinks> tries to find the <ClLinks  term={"file"}><i>file</i></ClLinks> indicated by *filespec* and returns its <ClLinks  term={"truename"}><i>truename</i></ClLinks>. If the *filespec designator* is an open <ClLinks  term={"stream"}><i>stream</i></ClLinks>, its associated <ClLinks  term={"file"}><i>file</i></ClLinks> is used. If *filespec* is a <ClLinks  term={"stream"}><i>stream</i></ClLinks>, <ClLinks  term={"truename"}><b>truename</b></ClLinks> can be used whether the <ClLinks  term={"stream"}><i>stream</i></ClLinks> is open or closed. It is permissible for <ClLinks  term={"truename"}><b>truename</b></ClLinks> to return more specific information after the <ClLinks  term={"stream"}><i>stream</i></ClLinks> is closed than when the <ClLinks  term={"stream"}><i>stream</i></ClLinks> was open. If *filespec* is a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



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



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> is signaled if an appropriate <ClLinks  term={"file"}><i>file</i></ClLinks> cannot be located within the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> for the given *filespec*, or if the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> cannot perform the requested operation. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> is signaled if <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> is <ClLinks  term={"wild"}><i>wild</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



<ClLinks  term={"truename"}><b>truename</b></ClLinks> may be used to account for any <ClLinks  term={"filename"}><i>filename</i></ClLinks> translations performed by the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 