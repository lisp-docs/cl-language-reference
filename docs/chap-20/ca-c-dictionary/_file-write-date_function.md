**file-write-date** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"file-write-date"}><b>file-write-date</b></ClLinks> *pathspec → date* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 



*date*—a *universal time* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



Returns a *universal time* representing the time at which the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> specified by *pathspec* was last written (or created), or returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if such a time cannot be determined. 



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



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled if *pathspec* is <ClLinks styled={true} term={"wild"}><i>wild</i></ClLinks>. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled if the *file system* cannot perform the requested operation. 



**See Also:** 



Section 25.1.4.2 (Universal Time), Section 19.1.2 (Pathnames as Filenames) 



