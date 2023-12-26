
 



<GlossaryTerm  term={"pathname"}><i>Pathnames</i></GlossaryTerm> are structured <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that can represent, in an <GlossaryTerm  term={"implementation-independent"}><i>implementation-independent</i></GlossaryTerm> way, the <GlossaryTerm  term={"filename"}><i>filenames</i></GlossaryTerm> that are used natively by an underlying <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 



In addition, <GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm> can also represent certain partially composed <GlossaryTerm  term={"filename"}><i>filenames</i></GlossaryTerm> for which an underlying <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> might not have a specific <GlossaryTerm  term={"namestring"}><i>namestring</i></GlossaryTerm> representation. 



A <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> need not correspond to any file that actually exists, and more than one <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> can refer to the same file. For example, the <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> with a version of :newest might refer to the same file as a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> with the same components except a certain number as the version. Indeed, a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> with version :newest might refer to different files as time passes, because the meaning of such a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> depends on the state of the file system. 



Some <GlossaryTerm styled={true} term={"file system"}><i>file systems</i></GlossaryTerm> naturally use a structural model for their <GlossaryTerm  term={"filename"}><i>filenames</i></GlossaryTerm>, while others do not. Within the Common Lisp <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> model, all <GlossaryTerm  term={"filename"}><i>filenames</i></GlossaryTerm> are seen as having a particular structure, even if that structure is not reflected in the underlying <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. The nature of the mapping between structure imposed by <GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm> and the structure, if any, that is used by the underlying <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 







 



 



Every <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> has six components: a host, a device, a directory, a name, a type, and a version. By naming <GlossaryTerm  term={"file"}><i>files</i></GlossaryTerm> with <GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm>, Common Lisp programs can work in essentially the same way even in <GlossaryTerm styled={true} term={"file system"}><i>file systems</i></GlossaryTerm> that seem superficially quite different. For a detailed description of these components, see Section 19.2.1 (Pathname Components). 



The mapping of the <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> components into the concepts peculiar to each <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. There exist conceivable <GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm> for which there is no mapping to a syntactically valid <GlossaryTerm  term={"filename"}><i>filename</i></GlossaryTerm> in a particular <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may use various strategies in an attempt to find a mapping; for example, an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> may quietly truncate <GlossaryTerm  term={"filename"}><i>filenames</i></GlossaryTerm> that exceed length limitations imposed by the underlying <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>, or ignore certain <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> components for which the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> provides no support. If such a mapping cannot be found, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled. 



The time at which this mapping and associated error signaling occurs is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. Specifically, it may occur at the time the <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> is constructed, when coercing a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> to a <GlossaryTerm  term={"namestring"}><i>namestring</i></GlossaryTerm>, or when an attempt is made to <GlossaryTerm  term={"open"}><i>open</i></GlossaryTerm> or otherwise access the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> designated by the <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm>. 



Figure 19–1 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <GlossaryTerm  term={"pathname"}><i>pathnames</i></GlossaryTerm>. 



|<p>**\*default-pathname-defaults\* namestring pathname-name directory-namestring open pathname-type enough-namestring parse-namestring pathname-version file-namestring pathname pathnamep file-string-length pathname-device translate-pathname host-namestring pathname-directory truename** </p><p>**make-pathname pathname-host user-homedir-pathname merge-pathnames pathname-match-p wild-pathname-p**</p>|

| :- |





**Figure 19–1. Pathname Operations** 



