**file-write-date** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"file-write-date"}><b>file-write-date</b></DictionaryLink> *pathspec → date* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*date*—a <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm> representing the time at which the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> specified by *pathspec* was last written (or created), or returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if such a time cannot be determined. 



**Examples:**
```lisp
(with-open-file (s "noel.text" 
		   :direction :output :if-exists :error) 
  (format s "~&Dear Santa,~2%I was good this year. ~ 
Please leave lots of toys.~2%Love, Sue~ 
 
 
~2%attachments: milk, cookies~%") 
  (truename s)) 
→ #P"CUPID:/susan/noel.text" 
(with-open-file (s "noel.text") 
  (file-write-date s)) 
→ 2902600800 
```
**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if *pathspec* is <GlossaryTerm  term={"wild"}><i>wild</i></GlossaryTerm>. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> cannot perform the requested operation. 



**See Also:** 



Section 25.1.4.2 (Universal Time), Section 19.1.2 (Pathnames as Filenames) 



