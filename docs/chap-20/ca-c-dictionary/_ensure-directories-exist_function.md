**ensure-directories-exist** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"ensure-directories-exist"}><b>ensure-directories-exist</b></DictionaryLink> *pathspec* &amp;key *verbose → pathspec, created* 



**Arguments and Values:** 



*pathspec*—a <GlossaryTerm styled={true} term={"pathname designator"}><i>pathname designator</i></GlossaryTerm> . 



*verbose*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



*created*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Tests whether the directories containing the specified <ClLinks  term={"file"}><i>file</i></ClLinks> actually exist, and attempts to create them if they do not. 



If the containing directories do not exist and if *verbose* is <ClLinks  term={"true"}><i>true</i></ClLinks>, then the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is permitted (but not required) to perform output to <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm> saying what directories were created. If the containing directories exist, or if *verbose* is <ClLinks  term={"false"}><i>false</i></ClLinks>, this function performs no output. 







 



 



The <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm> is the given *pathspec* so that this operation can be straightforwardly composed with other file manipulation expressions. The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *created*, is <ClLinks  term={"true"}><i>true</i></ClLinks> if any directories were created. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled if the host, device, or directory part of *pathspec* is <ClLinks  term={"wild"}><i>wild</i></ClLinks>. 



If the directory creation attempt is not successful, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"file-error"}><b>file-error</b></DictionaryLink> is signaled; if this occurs, it might be the case that none, some, or all of the requested creations have actually occurred within the <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"probe-file"}><b>probe-file</b></DictionaryLink>, <DictionaryLink  term={"open"}><b>open</b></DictionaryLink>, Section 19.1.2 (Pathnames as Filenames) 



