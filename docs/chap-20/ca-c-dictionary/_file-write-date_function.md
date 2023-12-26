**file-write-date** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"file-write-date"}><b>file-write-date</b></ClLinks> *pathspec → date* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*date*—a <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm> or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"universal time"}><i>universal time</i></GlossaryTerm> representing the time at which the <ClLinks  term={"file"}><i>file</i></ClLinks> specified by *pathspec* was last written (or created), or returns <ClLinks  term={"nil"}><b>nil</b></ClLinks> if such a time cannot be determined. 



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



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> is signaled if *pathspec* is <ClLinks  term={"wild"}><i>wild</i></ClLinks>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> is signaled if the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> cannot perform the requested operation. 



**See Also:** 



Section 25.1.4.2 (Universal Time), Section 19.1.2 (Pathnames as Filenames) 



