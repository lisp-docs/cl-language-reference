**ensure-directories-exist** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"ensure-directories-exist"}><b>ensure-directories-exist</b></ClLinks> *pathspec* &amp;key *verbose → pathspec, created* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 



*verbose*—a *generalized boolean*. 



*created*—a *generalized boolean*. 



**Description:** 



Tests whether the directories containing the specified <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> actually exist, and attempts to create them if they do not. 



If the containing directories do not exist and if *verbose* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, then the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is permitted (but not required) to perform output to *standard output* saying what directories were created. If the containing directories exist, or if *verbose* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, this function performs no output. 







 



 



The *primary value* is the given *pathspec* so that this operation can be straightforwardly composed with other file manipulation expressions. The *secondary value*, *created*, is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if any directories were created. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled if the host, device, or directory part of *pathspec* is <ClLinks styled={true} term={"wild"}><i>wild</i></ClLinks>. 



If the directory creation attempt is not successful, an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"file-error"}><b>file-error</b></ClLinks> is signaled; if this occurs, it might be the case that none, some, or all of the requested creations have actually occurred within the *file system*. 



**See Also:** 



<ClLinks styled={true} term={"probe-file"}><b>probe-file</b></ClLinks>, <ClLinks styled={true} term={"open"}><b>open</b></ClLinks>, Section 19.1.2 (Pathnames as Filenames) 



