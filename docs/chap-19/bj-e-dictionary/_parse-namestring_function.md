**parse-namestring** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"parse-namestring"}><b>parse-namestring</b></ClLinks> *thing* &amp;optional *host default-pathname* &amp;key *start end junk-allowed → pathname, position* 



**Arguments and Values:** 



*thing*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>, or a *stream associated with a file*. 



*host*—a *valid pathname host*, a *logical host*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*default-pathname*—a *pathname designator* . The default is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of 



<ClLinks styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>. 







 



 



<ClLinks styled={true} term={"parse-namestring"}><b>parse-namestring</b></ClLinks> 



*start*, *end*—*bounding index designators* of *thing*. The defaults for *start* and *end* are 0 and <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, respectively. 



*junk-allowed*—a *generalized boolean*. The default is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>—a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*position*—a *bounding index designator* for *thing*. 



**Description:** 



Converts *thing* into a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. 



The *host* supplies a host name with respect to which the parsing occurs. 



If *thing* is a *stream associated with a file*, processing proceeds as if the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> used to open that <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> had been supplied instead. 



If *thing* is a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>, the *host* and the host component of *thing* are compared. If they match, two values are immediately returned: *thing* and *start*; otherwise (if they do not match), an error is signaled. 



Otherwise (if *thing* is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>), <ClLinks styled={true} term={"parse-namestring"}><b>parse-namestring</b></ClLinks> parses the name of a <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> within the substring of *thing* bounded by *start* and *end*. 



If *thing* is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> then the substring of *thing bounded* by *start* and *end* is parsed into a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> as follows: 



*•* If *host* is a *logical host* then *thing* is parsed as a *logical pathname namestring* on the *host*. 



*•* If *host* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and *thing* is a syntactically valid *logical pathname namestring* containing an explicit host, then it is parsed as a *logical pathname namestring*. 



*•* If *host* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, *default-pathname* is a *logical pathname*, and *thing* is a syntactically valid *logical pathname namestring* without an explicit host, then it is parsed as a *logical pathname namestring* on the host that is the host component of *default-pathname*. 



*•* Otherwise, the parsing of *thing* is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



In the first of these cases, the host portion of the *logical pathname* namestring and its following <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks> are optional. 



If the host portion of the namestring and *host* are both present and do not match, an error is signaled. 



If *junk-allowed* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, then the *primary value* is the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> parsed or, if no syntactically correct <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> was seen, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. If *junk-allowed* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, then the entire substring is scanned, and the *primary value* is the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> parsed. 



In either case, the *secondary value* is the index into *thing* of the delimiter that terminated the 



 



 



parse, or the index beyond the substring if the parse terminated at the end of the substring (as will always be the case if *junk-allowed* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>). 



Parsing a *null string* always succeeds, producing a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> with all components (except the host) equal to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



If *thing* contains an explicit host name and no explicit device name, then it is *implementation defined* whether <ClLinks styled={true} term={"parse-namestring"}><b>parse-namestring</b></ClLinks> will supply the standard default device for that host as the device component of the resulting <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. 



**Examples:**
```lisp
(setq q (parse-namestring "test")) 
→ #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" 
	      :TYPE NIL :VERSION NIL) 
(pathnamep q) → true 
(parse-namestring "test") 
→ #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" 
	      :TYPE NIL :VERSION NIL), 4 
(setq s (open *xxx*)) → #<Input File Stream...> 
(parse-namestring s) 
→ #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME *xxx* 
	      :TYPE NIL :VERSION NIL), 0 
(parse-namestring "test" nil nil :start 2 :end 4 ) 
→ #S(PATHNAME ...), 15 
(parse-namestring "foo.lisp") 
→ #P"foo.lisp" 
```
**Exceptional Situations:** 



If *junk-allowed* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"parse-error"}><b>parse-error</b></ClLinks> is signaled if *thing* does not consist entirely of the representation of a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>, possibly surrounded on either side by <ClLinks styled={true} term={"whitespace"}><i>whitespace</i></ClLinks><sub>1</sub> characters if that is appropriate to the cultural conventions of the implementation. 



If *host* is supplied and not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, and *thing* contains a manifest host name, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled if the hosts do not match. 



If *thing* is a *logical pathname* namestring and if the host portion of the namestring and *host* are both present and do not match, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks styled={true} term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks styled={true} term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.2.2.2.3 (:UNSPE CIFIC as a Component Value), Section 19.1.2 (Pathnames as Filenames) 







 



 



<ClLinks styled={true} term={"wild-pathname-p"}><b>wild-pathname-p</b></ClLinks> 



