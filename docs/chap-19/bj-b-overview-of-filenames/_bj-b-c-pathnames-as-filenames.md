
 



<GlossaryTerm styled={true} term={"pathname"}><i>Pathnames</i></GlossaryTerm> are structured <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that can represent, in an <GlossaryTerm styled={true} term={"implementation-independent"}><i>implementation-independent</i></GlossaryTerm> way, the <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm> that are used natively by an underlying *file system*. 



In addition, <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> can also represent certain partially composed <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm> for which an underlying *file system* might not have a specific <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm> representation. 



A <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> need not correspond to any file that actually exists, and more than one <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> can refer to the same file. For example, the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> with a version of :newest might refer to the same file as a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> with the same components except a certain number as the version. Indeed, a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> with version :newest might refer to different files as time passes, because the meaning of such a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> depends on the state of the file system. 



Some *file systems* naturally use a structural model for their <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm>, while others do not. Within the Common Lisp <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> model, all <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm> are seen as having a particular structure, even if that structure is not reflected in the underlying *file system*. The nature of the mapping between structure imposed by <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> and the structure, if any, that is used by the underlying *file system* is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 







 



 



Every <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> has six components: a host, a device, a directory, a name, a type, and a version. By naming <GlossaryTerm styled={true} term={"file"}><i>files</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm>, Common Lisp programs can work in essentially the same way even in *file systems* that seem superficially quite different. For a detailed description of these components, see Section 19.2.1 (Pathname Components). 



The mapping of the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> components into the concepts peculiar to each *file system* is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. There exist conceivable <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm> for which there is no mapping to a syntactically valid <GlossaryTerm styled={true} term={"filename"}><i>filename</i></GlossaryTerm> in a particular <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> may use various strategies in an attempt to find a mapping; for example, an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> may quietly truncate <GlossaryTerm styled={true} term={"filename"}><i>filenames</i></GlossaryTerm> that exceed length limitations imposed by the underlying *file system*, or ignore certain <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> components for which the *file system* provides no support. If such a mapping cannot be found, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



The time at which this mapping and associated error signaling occurs is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. Specifically, it may occur at the time the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> is constructed, when coercing a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"namestring"}><i>namestring</i></GlossaryTerm>, or when an attempt is made to <GlossaryTerm styled={true} term={"open"}><i>open</i></GlossaryTerm> or otherwise access the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> designated by the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm>. 



Figure 19–1 lists some *defined names* that are applicable to <GlossaryTerm styled={true} term={"pathname"}><i>pathnames</i></GlossaryTerm>. 



|<p>**\*default-pathname-defaults\* namestring pathname-name directory-namestring open pathname-type enough-namestring parse-namestring pathname-version file-namestring pathname pathnamep file-string-length pathname-device translate-pathname host-namestring pathname-directory truename** </p><p>**make-pathname pathname-host user-homedir-pathname merge-pathnames pathname-match-p wild-pathname-p**</p>|

| :- |





**Figure 19–1. Pathname Operations** 



