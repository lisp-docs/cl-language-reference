
 



<ClLinks styled={true} term={"pathname"}><i>Pathnames</i></ClLinks> are structured <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that can represent, in an <ClLinks styled={true} term={"implementation-independent"}><i>implementation-independent</i></ClLinks> way, the <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks> that are used natively by an underlying *file system*. 



In addition, <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> can also represent certain partially composed <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks> for which an underlying *file system* might not have a specific <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks> representation. 



A <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> need not correspond to any file that actually exists, and more than one <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> can refer to the same file. For example, the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> with a version of :newest might refer to the same file as a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> with the same components except a certain number as the version. Indeed, a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> with version :newest might refer to different files as time passes, because the meaning of such a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> depends on the state of the file system. 



Some *file systems* naturally use a structural model for their <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks>, while others do not. Within the Common Lisp <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> model, all <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks> are seen as having a particular structure, even if that structure is not reflected in the underlying *file system*. The nature of the mapping between structure imposed by <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> and the structure, if any, that is used by the underlying *file system* is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 







 



 



Every <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> has six components: a host, a device, a directory, a name, a type, and a version. By naming <ClLinks styled={true} term={"file"}><i>files</i></ClLinks> with <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks>, Common Lisp programs can work in essentially the same way even in *file systems* that seem superficially quite different. For a detailed description of these components, see Section 19.2.1 (Pathname Components). 



The mapping of the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> components into the concepts peculiar to each *file system* is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. There exist conceivable <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks> for which there is no mapping to a syntactically valid <ClLinks styled={true} term={"filename"}><i>filename</i></ClLinks> in a particular <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> may use various strategies in an attempt to find a mapping; for example, an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> may quietly truncate <ClLinks styled={true} term={"filename"}><i>filenames</i></ClLinks> that exceed length limitations imposed by the underlying *file system*, or ignore certain <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> components for which the *file system* provides no support. If such a mapping cannot be found, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled. 



The time at which this mapping and associated error signaling occurs is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. Specifically, it may occur at the time the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is constructed, when coercing a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> to a <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks>, or when an attempt is made to <ClLinks styled={true} term={"open"}><i>open</i></ClLinks> or otherwise access the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> designated by the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks>. 



Figure 19–1 lists some *defined names* that are applicable to <ClLinks styled={true} term={"pathname"}><i>pathnames</i></ClLinks>. 



|<p>**\*default-pathname-defaults\* namestring pathname-name directory-namestring open pathname-type enough-namestring parse-namestring pathname-version file-namestring pathname pathnamep file-string-length pathname-device translate-pathname host-namestring pathname-directory truename** </p><p>**make-pathname pathname-host user-homedir-pathname merge-pathnames pathname-match-p wild-pathname-p**</p>|

| :- |





**Figure 19–1. Pathname Operations** 



