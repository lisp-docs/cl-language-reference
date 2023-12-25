**parse-namestring** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"parse-namestring"}><b>parse-namestring</b></DictionaryLink> *thing* &amp;optional *host default-pathname* &amp;key *start end junk-allowed → pathname, position* 



**Arguments and Values:** 



*thing*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, or a *stream associated with a file*. 



*host*—a *valid pathname host*, a *logical host*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*default-pathname*—a *pathname designator* . The default is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of 



<DictionaryLink styled={true} term={"default-pathname-defaults"}><b>\*default-pathname-defaults\*</b></DictionaryLink>. 







 



 



<DictionaryLink styled={true} term={"parse-namestring"}><b>parse-namestring</b></DictionaryLink> 



*start*, *end*—*bounding index designators* of *thing*. The defaults for *start* and *end* are 0 and <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, respectively. 



*junk-allowed*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*position*—a *bounding index designator* for *thing*. 



**Description:** 



Converts *thing* into a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



The *host* supplies a host name with respect to which the parsing occurs. 



If *thing* is a *stream associated with a file*, processing proceeds as if the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> used to open that <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> had been supplied instead. 



If *thing* is a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, the *host* and the host component of *thing* are compared. If they match, two values are immediately returned: *thing* and *start*; otherwise (if they do not match), an error is signaled. 



Otherwise (if *thing* is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>), <DictionaryLink styled={true} term={"parse-namestring"}><b>parse-namestring</b></DictionaryLink> parses the name of a <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> within the substring of *thing* bounded by *start* and *end*. 



If *thing* is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> then the substring of *thing bounded* by *start* and *end* is parsed into a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> as follows: 



*•* If *host* is a *logical host* then *thing* is parsed as a *logical pathname namestring* on the *host*. 



*•* If *host* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and *thing* is a syntactically valid *logical pathname namestring* containing an explicit host, then it is parsed as a *logical pathname namestring*. 



*•* If *host* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, *default-pathname* is a *logical pathname*, and *thing* is a syntactically valid *logical pathname namestring* without an explicit host, then it is parsed as a *logical pathname namestring* on the host that is the host component of *default-pathname*. 



*•* Otherwise, the parsing of *thing* is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 



In the first of these cases, the host portion of the *logical pathname* namestring and its following <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm> are optional. 



If the host portion of the namestring and *host* are both present and do not match, an error is signaled. 



If *junk-allowed* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, then the *primary value* is the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> parsed or, if no syntactically correct <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> was seen, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. If *junk-allowed* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, then the entire substring is scanned, and the *primary value* is the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> parsed. 



In either case, the *secondary value* is the index into *thing* of the delimiter that terminated the 



 



 



parse, or the index beyond the substring if the parse terminated at the end of the substring (as will always be the case if *junk-allowed* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>). 



Parsing a *null string* always succeeds, producing a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> with all components (except the host) equal to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



If *thing* contains an explicit host name and no explicit device name, then it is *implementation defined* whether <DictionaryLink styled={true} term={"parse-namestring"}><b>parse-namestring</b></DictionaryLink> will supply the standard default device for that host as the device component of the resulting <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



**Examples:**
```lisp

(setq q (parse-namestring "test")) 
*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" 
		:TYPE NIL :VERSION NIL) 
(pathnamep q) *→ true* 
(parse-namestring "test") 
*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME "test" 
		:TYPE NIL :VERSION NIL), 4 
(setq s (open *xxx*)) *→* #<Input File Stream...> 
(parse-namestring s) 
*→* #S(PATHNAME :HOST NIL :DEVICE NIL :DIRECTORY NIL :NAME *xxx* 
		:TYPE NIL :VERSION NIL), 0 
(parse-namestring "test" nil nil :start 2 :end 4 ) 
*→* #S(PATHNAME ...), 15 
(parse-namestring "foo.lisp") 
*→* #P"foo.lisp" 

```
**Exceptional Situations:** 



If *junk-allowed* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"parse-error"}><b>parse-error</b></DictionaryLink> is signaled if *thing* does not consist entirely of the representation of a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, possibly surrounded on either side by <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>1</sub> characters if that is appropriate to the cultural conventions of the implementation. 



If *host* is supplied and not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, and *thing* contains a manifest host name, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled if the hosts do not match. 



If *thing* is a *logical pathname* namestring and if the host portion of the namestring and *host* are both present and do not match, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.2.2.2.3 (:UNSPE CIFIC as a Component Value), Section 19.1.2 (Pathnames as Filenames) 







 



 



<DictionaryLink styled={true} term={"wild-pathname-p"}><b>wild-pathname-p</b></DictionaryLink> 



