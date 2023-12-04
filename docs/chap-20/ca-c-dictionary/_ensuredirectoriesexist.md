**ensure-directories-exist** *Function* 



**Syntax:** 



**ensure-directories-exist** *pathspec* &key *verbose → pathspec, created* 



**Arguments and Values:** 



*pathspec*—a *pathname designator* . 



*verbose*—a *generalized boolean*. 



*created*—a *generalized boolean*. 



**Description:** 



Tests whether the directories containing the specified *file* actually exist, and attempts to create them if they do not. 



If the containing directories do not exist and if *verbose* is *true*, then the *implementation* is permitted (but not required) to perform output to *standard output* saying what directories were created. If the containing directories exist, or if *verbose* is *false*, this function performs no output. 







 



 



The *primary value* is the given *pathspec* so that this operation can be straightforwardly composed with other file manipulation expressions. The *secondary value*, *created*, is *true* if any directories were created. 



**Affected By:** 



The host computer’s file system. 



**Exceptional Situations:** 



An error of *type* **file-error** is signaled if the host, device, or directory part of *pathspec* is *wild*. 



If the directory creation attempt is not successful, an error of *type* **file-error** is signaled; if this occurs, it might be the case that none, some, or all of the requested creations have actually occurred within the *file system*. 



**See Also:** 



**probe-file**, **open**, Section 19.1.2 (Pathnames as Filenames) 



