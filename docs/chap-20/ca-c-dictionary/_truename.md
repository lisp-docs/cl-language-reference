**truename** *Function* 

**Syntax:** 

**truename** *filespec → truename* 

**Arguments and Values:** 

*filespec*—a *pathname designator* . 

*truename*—a *physical pathname*. 

**Description:** 

**truename** tries to find the *file* indicated by *filespec* and returns its *truename*. If the *filespec designator* is an open *stream*, its associated *file* is used. If *filespec* is a *stream*, **truename** can be used whether the *stream* is open or closed. It is permissible for **truename** to return more specific information after the *stream* is closed than when the *stream* was open. If *filespec* is a *pathname* it represents the name used to open the file. This may be, but is not required to be, the actual name of the file. 

**Examples:** 

;; An example involving version numbers. Note that the precise nature of 

;; the truename is implementation-dependent while the file is still open. 

(with-open-file (stream "&#62;vistor&#62;test.text.newest") 

(values (pathname stream) 



 

 

(truename stream))) 

*→* #P"S:&#62;vistor&#62;test.text.newest", #P"S:&#62;vistor&#62;test.text.1" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; #P"S:&#62;vistor&#62;test.text.newest", #P"S:&#62;vistor&#62;test.text.newest" 

&#60;i&#62;&#60;sup&#62;or&#60;/sup&#62;→&#60;/i&#62; #P"S:&#62;vistor&#62;test.text.newest", #P"S:&#62;vistor&#62; temp . temp .1" 

;; In this case, the file is closed when the truename is tried, so the 

;; truename information is reliable. 

(with-open-file (stream "&#62;vistor&#62;test.text.newest") 

(close stream) 

(values (pathname stream) 

(truename stream))) 

*→* #P"S:&#62;vistor&#62;test.text.newest", #P"S:&#62;vistor&#62;test.text.1" 

;; An example involving TOP-20’s implementation-dependent concept 

;; of logical devices – in this case, "DOC:" is shorthand for 

;; "PS:&#60;DOCUMENTATION&#62;" ... 

(with-open-file (stream "CMUC::DOC:DUMPER.HLP") 

(values (pathname stream) 

(truename stream))) 

*→* #P"CMUC::DOC:DUMPER.HLP", #P"CMUC::PS:&#60;DOCUMENTATION&#62;DUMPER.HLP.13" 

**Exceptional Situations:** 

An error of *type* **file-error** is signaled if an appropriate *file* cannot be located within the *file system* for the given *filespec*, or if the *file system* cannot perform the requested operation. 

An error of *type* **file-error** is signaled if *pathname* is *wild*. 

**See Also:** 

**pathname**, **logical-pathname**, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames) 

**Notes:** 

