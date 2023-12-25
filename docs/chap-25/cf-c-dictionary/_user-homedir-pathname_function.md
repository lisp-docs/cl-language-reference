**user-homedir-pathname** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"user-homedir-pathname"}><b>user-homedir-pathname</b></ClLinks> &amp;optional *host → pathname* 



**Arguments and Values:** 



*host*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>, or :unspecific. 



<ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>—a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"user-homedir-pathname"}><b>user-homedir-pathname</b></ClLinks> determines the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> that corresponds to the user’s home directory on *host*. If *host* is not supplied, its value is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. For a description of :unspecific, see Section 19.2.1 (Pathname Components). 



The definition of home directory is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but defined in Common Lisp to mean the directory where the user keeps personal files such as initialization files and mail. 



<ClLinks styled={true} term={"user-homedir-pathname"}><b>user-homedir-pathname</b></ClLinks> returns a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> without any name, type, or version component (those components are all <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>) for the user’s home directory on *host*. 



If it is impossible to determine the user’s home directory on *host*, then <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned. <ClLinks styled={true} term={"user-homedir-pathname"}><b>user-homedir-pathname</b></ClLinks> never returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if *host* is not supplied. 



**Examples:**
```lisp
(pathnamep (user-homedir-pathname)) → true 
```
**Affected By:** 



The host computer’s file system, and the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 





