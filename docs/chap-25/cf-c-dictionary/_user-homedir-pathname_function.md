**user-homedir-pathname** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"user-homedir-pathname"}><b>user-homedir-pathname</b></DictionaryLink> &amp;optional *host → pathname* 



**Arguments and Values:** 



*host*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, or :unspecific. 



<GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"user-homedir-pathname"}><b>user-homedir-pathname</b></DictionaryLink> determines the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> that corresponds to the user’s home directory on *host*. If *host* is not supplied, its value is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. For a description of :unspecific, see Section 19.2.1 (Pathname Components). 



The definition of home directory is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, but defined in Common Lisp to mean the directory where the user keeps personal files such as initialization files and mail. 



<DictionaryLink styled={true} term={"user-homedir-pathname"}><b>user-homedir-pathname</b></DictionaryLink> returns a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> without any name, type, or version component (those components are all <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>) for the user’s home directory on *host*. 



If it is impossible to determine the user’s home directory on *host*, then <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned. <DictionaryLink styled={true} term={"user-homedir-pathname"}><b>user-homedir-pathname</b></DictionaryLink> never returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if *host* is not supplied. 



**Examples:**
```lisp

(pathnamep (user-homedir-pathname)) *→ true* 

```
**Affected By:** 



The host computer’s file system, and the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 





