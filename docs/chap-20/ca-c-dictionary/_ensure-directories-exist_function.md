**ensure-directories-exist** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"ensure-directories-exist"}><b>ensure-directories-exist</b></DictionaryLink> *pathspec* &amp;key *verbose → pathspec, created* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*verbose*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*created*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Tests whether the directories containing the specified <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> actually exist, and attempts to create them if they do not. 



If the containing directories do not exist and if *verbose* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, then the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted (but not required) to perform output to <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm> saying what directories were created. If the containing directories exist, or if *verbose* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>, this function performs no output. 







 



 



The <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> is the given *pathspec* so that this operation can be straightforwardly composed with other file manipulation expressions. The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *created*, is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if any directories were created. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the host, device, or directory part of *pathspec* is <GlossaryTerm  term={"wild"}><i>wild</i></GlossaryTerm>. 



If the directory creation attempt is not successful, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled; if this occurs, it might be the case that none, some, or all of the requested creations have actually occurred within the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink>, <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>, Section 19.1.2 (Pathnames as Filenames) 



