**parse-namestring** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"parse-namestring"}><b>parse-namestring</b></ClLinks> *thing* &amp;optional *host default-pathname* &amp;key *start end junk-allowed → pathname, position* 



**Arguments and Values:** 



*thing*—a <ClLinks  term={"string"}><i>string</i></ClLinks>, a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>, or a <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm>. 



*host*—a <GlossaryTerm styled={true} term={"valid pathname host"}><i>valid pathname host</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm>, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*default-pathname*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . The default is the <ClLinks  term={"value"}><i>value</i></ClLinks> of 



<ClLinks  term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></ClLinks>. 







 



 



<ClLinks  term={"parse-namestring"}><b>parse-namestring</b></ClLinks> 



*start*, *end*—<GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designators</i></GlossaryTerm> of *thing*. The defaults for *start* and *end* are 0 and <ClLinks  term={"nil"}><b>nil</b></ClLinks>, respectively. 



*junk-allowed*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"pathname"}><i>pathname</i></ClLinks>—a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*position*—a <GlossaryTerm styled={true} term={"bounding index designator"}><i>bounding index designator</i></GlossaryTerm> for *thing*. 



**Description:** 



Converts *thing* into a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. 



The *host* supplies a host name with respect to which the parsing occurs. 



If *thing* is a <GlossaryTerm styled={true} term={"stream associated with a file"}><i>stream associated with a file</i></GlossaryTerm>, processing proceeds as if the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> used to open that <ClLinks  term={"file"}><i>file</i></ClLinks> had been supplied instead. 



If *thing* is a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>, the *host* and the host component of *thing* are compared. If they match, two values are immediately returned: *thing* and *start*; otherwise (if they do not match), an error is signaled. 



Otherwise (if *thing* is a <ClLinks  term={"string"}><i>string</i></ClLinks>), <ClLinks  term={"parse-namestring"}><b>parse-namestring</b></ClLinks> parses the name of a <ClLinks  term={"file"}><i>file</i></ClLinks> within the substring of *thing* bounded by *start* and *end*. 



If *thing* is a <ClLinks  term={"string"}><i>string</i></ClLinks> then the substring of *thing bounded* by *start* and *end* is parsed into a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> as follows: 



*•* If *host* is a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> then *thing* is parsed as a *logical pathname namestring* on the *host*. 



*•* If *host* is <ClLinks  term={"nil"}><b>nil</b></ClLinks> and *thing* is a syntactically valid *logical pathname namestring* containing an explicit host, then it is parsed as a *logical pathname namestring*. 



*•* If *host* is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, *default-pathname* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, and *thing* is a syntactically valid *logical pathname namestring* without an explicit host, then it is parsed as a *logical pathname namestring* on the host that is the host component of *default-pathname*. 



*•* Otherwise, the parsing of *thing* is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



In the first of these cases, the host portion of the <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> namestring and its following <ClLinks  term={"colon"}><i>colon</i></ClLinks> are optional. 



If the host portion of the namestring and *host* are both present and do not match, an error is signaled. 



If *junk-allowed* is <ClLinks  term={"true"}><i>true</i></ClLinks>, then the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> is the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> parsed or, if no syntactically correct <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> was seen, <ClLinks  term={"nil"}><b>nil</b></ClLinks>. If *junk-allowed* is <ClLinks  term={"false"}><i>false</i></ClLinks>, then the entire substring is scanned, and the <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> is the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> parsed. 



In either case, the <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm> is the index into *thing* of the delimiter that terminated the 



 



 



parse, or the index beyond the substring if the parse terminated at the end of the substring (as will always be the case if *junk-allowed* is <ClLinks  term={"false"}><i>false</i></ClLinks>). 



Parsing a *null string* always succeeds, producing a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> with all components (except the host) equal to <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



If *thing* contains an explicit host name and no explicit device name, then it is *implementation defined* whether <ClLinks  term={"parse-namestring"}><b>parse-namestring</b></ClLinks> will supply the standard default device for that host as the device component of the resulting <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. 



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



If *junk-allowed* is <ClLinks  term={"false"}><i>false</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"parse-error"}><b>parse-error</b></ClLinks> is signaled if *thing* does not consist entirely of the representation of a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>, possibly surrounded on either side by <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>1</sub> characters if that is appropriate to the cultural conventions of the implementation. 



If *host* is supplied and not <ClLinks  term={"nil"}><b>nil</b></ClLinks>, and *thing* contains a manifest host name, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled if the hosts do not match. 



If *thing* is a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> namestring and if the host portion of the namestring and *host* are both present and do not match, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"pathname"}><b>pathname</b></ClLinks>, <ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks>, Section 20.1 (File System Concepts), Section 19.2.2.2.3 (:UNSPE CIFIC as a Component Value), Section 19.1.2 (Pathnames as Filenames) 







 



 



<ClLinks  term={"wild-pathname-p"}><b>wild-pathname-p</b></ClLinks> 



