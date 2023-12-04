**load-logical-pathname-translations** *Function* 



**Syntax:** 



**load-logical-pathname-translations** *host → just-loaded* 



**Arguments and Values:** 



*host*—a *string*. 



*just-loaded*—a *generalized boolean*. 



**Description:** 



Searches for and loads the definition of a *logical host* named *host*, if it is not already defined. The specific nature of the search is *implementation-defined*. 







 



 



If the *host* is already defined, no attempt to find or load a definition is attempted, and *false* is returned. If the *host* is not already defined, but a definition is successfully found and loaded, *true* is returned. Otherwise, an error is signaled. 



**Examples:**
```lisp
 



(translate-logical-pathname "hacks:weather;barometer.lisp.newest") 



▷ Error: The logical host HACKS is not defined. 



(load-logical-pathname-translations "HACKS") 



▷ ;; Loading SYS:SITE;HACKS.TRANSLATIONS 



▷ ;; Loading done. 



*→ true* 



(translate-logical-pathname "hacks:weather;barometer.lisp.newest") 



*→* #P"HELIUM:[SHARED.HACKS.WEATHER]BAROMETER.LSP;0" 



(load-logical-pathname-translations "HACKS") 



*→ false* 




```
**Exceptional Situations:** 



If no definition is found, an error of *type* **error** is signaled. 



**See Also:** 



**logical-pathname** 



**Notes:** 



*Logical pathname* definitions will be created not just by *implementors* but also by *programmers*. As such, it is important that the search strategy be documented. For example, an *implementation* might define that the definition of a *host* is to be found in a file called “*host*.translations” in some specifically named directory. 



