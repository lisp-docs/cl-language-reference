**ensure-directories-exist** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"ensure-directories-exist"}><b>ensure-directories-exist</b></DictionaryLink> *pathspec* &amp;key *verbose → pathspec, created* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 



*verbose*—a *generalized boolean*. 



*created*—a *generalized boolean*. 



**Description:** 



Tests whether the directories containing the specified <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> actually exist, and attempts to create them if they do not. 



If the containing directories do not exist and if *verbose* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, then the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted (but not required) to perform output to *standard output* saying what directories were created. If the containing directories exist, or if *verbose* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, this function performs no output. 







 



 



The *primary value* is the given *pathspec* so that this operation can be straightforwardly composed with other file manipulation expressions. The *secondary value*, *created*, is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if any directories were created. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the host, device, or directory part of *pathspec* is <GlossaryTerm styled={true} term={"wild"}><i>wild</i></GlossaryTerm>. 



If the directory creation attempt is not successful, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"file-error"}><b>file-error</b></DictionaryLink> is signaled; if this occurs, it might be the case that none, some, or all of the requested creations have actually occurred within the *file system*. 



**See Also:** 



<DictionaryLink styled={true} term={"probe-file"}><b>probe-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"open"}><b>open</b></DictionaryLink>, Section 19.1.2 (Pathnames as Filenames) 



