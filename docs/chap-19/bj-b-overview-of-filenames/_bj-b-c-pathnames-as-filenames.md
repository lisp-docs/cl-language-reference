
 



<ClLinks  term={"pathname"}><i>Pathnames</i></ClLinks> are structured <ClLinks  term={"object"}><i>objects</i></ClLinks> that can represent, in an <ClLinks  term={"implementation-independent"}><i>implementation-independent</i></ClLinks> way, the <ClLinks  term={"filename"}><i>filenames</i></ClLinks> that are used natively by an underlying <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 



In addition, <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> can also represent certain partially composed <ClLinks  term={"filename"}><i>filenames</i></ClLinks> for which an underlying <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> might not have a specific <ClLinks  term={"namestring"}><i>namestring</i></ClLinks> representation. 



A <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> need not correspond to any file that actually exists, and more than one <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> can refer to the same file. For example, the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> with a version of :newest might refer to the same file as a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> with the same components except a certain number as the version. Indeed, a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> with version :newest might refer to different files as time passes, because the meaning of such a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> depends on the state of the file system. 



Some <GlossaryTerm styled={true} term={"file system"}><i>file systems</i></GlossaryTerm> naturally use a structural model for their <ClLinks  term={"filename"}><i>filenames</i></ClLinks>, while others do not. Within the Common Lisp <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> model, all <ClLinks  term={"filename"}><i>filenames</i></ClLinks> are seen as having a particular structure, even if that structure is not reflected in the underlying <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. The nature of the mapping between structure imposed by <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> and the structure, if any, that is used by the underlying <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 







 



 



Every <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> has six components: a host, a device, a directory, a name, a type, and a version. By naming <ClLinks  term={"file"}><i>files</i></ClLinks> with <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks>, Common Lisp programs can work in essentially the same way even in <GlossaryTerm styled={true} term={"file system"}><i>file systems</i></GlossaryTerm> that seem superficially quite different. For a detailed description of these components, see Section 19.2.1 (Pathname Components). 



The mapping of the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> components into the concepts peculiar to each <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. There exist conceivable <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> for which there is no mapping to a syntactically valid <ClLinks  term={"filename"}><i>filename</i></ClLinks> in a particular <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may use various strategies in an attempt to find a mapping; for example, an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> may quietly truncate <ClLinks  term={"filename"}><i>filenames</i></ClLinks> that exceed length limitations imposed by the underlying <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>, or ignore certain <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> components for which the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm> provides no support. If such a mapping cannot be found, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



The time at which this mapping and associated error signaling occurs is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. Specifically, it may occur at the time the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> is constructed, when coercing a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> to a <ClLinks  term={"namestring"}><i>namestring</i></ClLinks>, or when an attempt is made to <ClLinks  term={"open"}><i>open</i></ClLinks> or otherwise access the <ClLinks  term={"file"}><i>file</i></ClLinks> designated by the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>. 



Figure 19–1 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks>. 



|<p>**\*default-pathname-defaults\* namestring pathname-name directory-namestring open pathname-type enough-namestring parse-namestring pathname-version file-namestring pathname pathnamep file-string-length pathname-device translate-pathname host-namestring pathname-directory truename** </p><p>**make-pathname pathname-host user-homedir-pathname merge-pathnames pathname-match-p wild-pathname-p**</p>|

| :- |





**Figure 19–1. Pathname Operations** 



