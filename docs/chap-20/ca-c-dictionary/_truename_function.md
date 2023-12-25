**truename** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks> *filespec → truename* 



**Arguments and Values:** 



*filespec*—a *pathname designator* . 



<ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks>—a *physical pathname*. 



**Description:** 



<ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks> tries to find the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> indicated by *filespec* and returns its <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks>. If the *filespec designator* is an open <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, its associated <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> is used. If *filespec* is a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, <ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks> can be used whether the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is open or closed. It is permissible for <ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks> to return more specific information after the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is closed than when the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> was open. If *filespec* is a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 



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



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled if an appropriate <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> cannot be located within the *file system* for the given *filespec*, or if the *file system* cannot perform the requested operation. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled if <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is <ClLinks styled={true} term={"wild"}><i>wild</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



<ClLinks styled={true} term={"truename"}><b>truename</b></ClLinks> may be used to account for any <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> translations performed by the *file system*. 