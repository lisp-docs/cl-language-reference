**file-write-date** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"file-write-date"}><b>file-write-date</b></DictionaryLink> *pathspec → date* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 



*date*—a *universal time* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



Returns a *universal time* representing the time at which the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> specified by *pathspec* was last written (or created), or returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if such a time cannot be determined. 



**Examples:**
```lisp

(with-open-file (s "noel.text" 
		   :direction :output :if-exists :error) 
  (format s "~&Dear Santa,~2%I was good this year. ~ 
Please leave lots of toys.~2%Love, Sue~ 

 
 
~2%attachments: milk, cookies~%") 
  (truename s)) 
*→* #P"CUPID:/susan/noel.text" 
(with-open-file (s "noel.text") 
  (file-write-date s)) 
*→* 2902600800 

```
**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if *pathspec* is <GlossaryTerm styled={true} term={"wild"}><i>wild</i></GlossaryTerm>. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the *file system* cannot perform the requested operation. 



**See Also:** 



Section 25.1.4.2 (Universal Time), Section 19.1.2 (Pathnames as Filenames) 



