**directory** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink> *pathspec* &amp;key → pathnames 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> , which may contain <GlossaryTerm  term={"wild"}><i>wild</i></GlossaryTerm> components. 



<GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm>—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathnames</i></GlossaryTerm>. 



**Description:** 



Determines which, if any, <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm> that are present in the file system have names matching *pathspec*, and returns a *fresh list* of <GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm> corresponding to the <GlossaryTerm  term={"truename"}><i>truenames</i></GlossaryTerm> of those <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm>. 



An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may be extended to accept <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> keyword arguments to <DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink>. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



If the attempt to obtain a directory listing is not successful, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"pathname"}><b>pathname</b></DictionaryLink>, <DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink>, <DictionaryLink  term={"ensure-directories-exist"}><b>ensure-directories-exist</b></DictionaryLink>, Section 20.1 (File System Concepts), Section 21.1.1.1.2 (Open and Closed Streams), Section 19.1.2 (Pathnames as Filenames) 



**Notes:** 



If the *pathspec* is not <GlossaryTerm  term={"wild"}><i>wild</i></GlossaryTerm>, the resulting list will contain either zero or one elements. 



Common Lisp specifies “&amp;key” in the argument list to <DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink> even though no <GlossaryTerm  term={"standardized"}><i>standardized</i></GlossaryTerm> keyword arguments to <DictionaryLink  term={"directory"}><b>directory</b></DictionaryLink> are defined. “:allow-other-keys t” may be used in <GlossaryTerm styled={true} term={"conforming program"}><i>conforming programs</i></GlossaryTerm> in order to quietly ignore any additional keywords which are passed by the program but not supported by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. 



