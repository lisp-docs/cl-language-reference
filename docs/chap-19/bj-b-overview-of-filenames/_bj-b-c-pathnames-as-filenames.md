

 

*Pathnames* are structured *objects* that can represent, in an *implementation-independent* way, the *filenames* that are used natively by an underlying *file system*. 

In addition, *pathnames* can also represent certain partially composed *filenames* for which an underlying *file system* might not have a specific *namestring* representation. 

A *pathname* need not correspond to any file that actually exists, and more than one *pathname* can refer to the same file. For example, the *pathname* with a version of :newest might refer to the same file as a *pathname* with the same components except a certain number as the version. Indeed, a *pathname* with version :newest might refer to different files as time passes, because the meaning of such a *pathname* depends on the state of the file system. 

Some *file systems* naturally use a structural model for their *filenames*, while others do not. Within the Common Lisp *pathname* model, all *filenames* are seen as having a particular structure, even if that structure is not reflected in the underlying *file system*. The nature of the mapping between structure imposed by *pathnames* and the structure, if any, that is used by the underlying *file system* is *implementation-defined*. 

Filenames **19–1**

 

 

Every *pathname* has six components: a host, a device, a directory, a name, a type, and a version. By naming *files* with *pathnames*, Common Lisp programs can work in essentially the same way even in *file systems* that seem superficially quite different. For a detailed description of these components, see Section 19.2.1 (Pathname Components). 

The mapping of the *pathname* components into the concepts peculiar to each *file system* is *implementation-defined*. There exist conceivable *pathnames* for which there is no mapping to a syntactically valid *filename* in a particular *implementation*. An *implementation* may use various strategies in an attempt to find a mapping; for example, an *implementation* may quietly truncate *filenames* that exceed length limitations imposed by the underlying *file system*, or ignore certain *pathname* components for which the *file system* provides no support. If such a mapping cannot be found, an error of *type* **file-error** is signaled. 

The time at which this mapping and associated error signaling occurs is *implementation-dependent*. Specifically, it may occur at the time the *pathname* is constructed, when coercing a *pathname* to a *namestring*, or when an attempt is made to *open* or otherwise access the *file* designated by the *pathname*. 

Figure 19–1 lists some *defined names* that are applicable to *pathnames*. 

|&#60;p&#62;**\*default-pathname-defaults\* namestring pathname-name directory-namestring open pathname-type enough-namestring parse-namestring pathname-version file-namestring pathname pathnamep file-string-length pathname-device translate-pathname host-namestring pathname-directory truename** &#60;/p&#62;&#60;p&#62;**make-pathname pathname-host user-homedir-pathname merge-pathnames pathname-match-p wild-pathname-p**&#60;/p&#62;|
| :- |


**Figure 19–1. Pathname Operations** 

