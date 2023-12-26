**pathname** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink> *pathspec → pathname* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



<GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>—a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>. 



**Description:** 



Returns the <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> denoted by *pathspec*. 







 



 



<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink> 



If the *pathspec designator* is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> can be either open or closed; in both cases, the <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink> returned corresponds to the <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> used to open the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm>. <DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink> returns the same <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> for a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> after it is closed as it did when it was open. 



If the *pathspec designator* is a <GlossaryTerm styled={true} term={"file stream"}><i>file stream</i></GlossaryTerm> created by opening a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"logical pathname"}><i>logical pathname</i></GlossaryTerm> is returned. 



**Examples:**
```lisp
;; There is a great degree of variability permitted here. The next 
;; several examples are intended to illustrate just a few of the many 
;; possibilities. Whether the name is canonicalized to a particular 
;; case (either upper or lower) depends on both the file system and the 
;; implementation since two different implementations using the same 
;; file system might differ on many issues. How information is stored 
;; internally (and possibly presented in #S notation) might vary, 
;; possibly requiring ‘accessors’ such as PATHNAME-NAME to perform case 
;; conversion upon access. The format of a namestring is dependent both 
;; on the file system and the implementation since, for example, one 
;; implementation might include the host name in a namestring, and 
;; another might not. #S notation would generally only be used in a 
;; situation where no appropriate namestring could be constructed for use 
;; with #P. 
(setq p1 (pathname "test")) 
→ #P"CHOCOLATE:TEST" ; with case canonicalization (e.g., VMS) 
<i><sup>or</sup>→</i> #P"VANILLA:test" ; without case canonicalization (e.g., Unix) 
<i><sup>or</sup>→</i> #P"test" 
<i><sup>or</sup>→</i> #S(PATHNAME :HOST "STRAWBERRY" :NAME "TEST") 
<i><sup>or</sup>→</i> #S(PATHNAME :HOST "BELGIAN-CHOCOLATE" :NAME "test") 
(setq p2 (pathname "test")) 
→ #P"CHOCOLATE:TEST" 
<i><sup>or</sup>→</i> #P"VANILLA:test" 
<i><sup>or</sup>→</i> #P"test" 
<i><sup>or</sup>→</i> #S(PATHNAME :HOST "STRAWBERRY" :NAME "TEST") 
<i><sup>or</sup>→</i> #S(PATHNAME :HOST "BELGIAN-CHOCOLATE" :NAME "test") 
(pathnamep p1) → true 
(eq p1 (pathname p1)) → true 
(eq p1 p2) 
→ true 
<i><sup>or</sup>→ false</i> 
(with-open-file (stream "test" :direction :output) 
  (pathname stream)) 
→ #P"ORANGE-CHOCOLATE:>Gus>test.lisp.newest" 
```
**See Also:** 



<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as 



 



 



Filenames) 



