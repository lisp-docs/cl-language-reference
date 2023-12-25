**directory** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"directory"}><b>directory</b></DictionaryLink> *pathspec* &amp;key *→ pathnames* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* , which may contain <GlossaryTerm styled={true} term={"wild"}><i>wild</i></GlossaryTerm> components. 



<GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *physical pathnames*. 



**Description:** 



Determines which, if any, <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> that are present in the file system have names matching *pathspec*, and returns a *fresh list* of <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> corresponding to the <GlossaryTerm styled={true} term={"truename"}><i>truenames</i></GlossaryTerm> of those <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm>. 



An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> may be extended to accept <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> keyword arguments to <DictionaryLink styled={true} term={"directory"}><b>directory</b></DictionaryLink>. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



If the attempt to obtain a directory listing is not successful, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, <DictionaryLink styled={true} term={"ensure-directories-exist"}><b>ensure-directories-exist</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



If the *pathspec* is not <GlossaryTerm styled={true} term={"wild"}><i>wild</i></GlossaryTerm>, the resulting list will contain either zero or one elements. 



Common Lisp specifies “&amp;key” in the argument list to <DictionaryLink styled={true} term={"directory"}><b>directory</b></DictionaryLink> even though no <GlossaryTerm styled={true} term={"standardized"}><i>standardized</i></GlossaryTerm> keyword arguments to <DictionaryLink styled={true} term={"directory"}><b>directory</b></DictionaryLink> are defined. “:allow-other-keys t” may be used in *conforming programs* in order to quietly ignore any additional keywords which are passed by the program but not supported by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



