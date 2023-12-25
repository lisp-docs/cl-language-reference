**load-logical-pathname-translations** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



**load-logical-pathname-translations** *host → just-loaded* 



**Arguments and Values:** 



*host*—a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



*just-loaded*—a *generalized boolean*. 



**Description:** 



Searches for and loads the definition of a *logical host* named *host*, if it is not already defined. The specific nature of the search is <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 







 



 



If the *host* is already defined, no attempt to find or load a definition is attempted, and <ClLinks  term={"false"}><i>false</i></ClLinks> is returned. If the *host* is not already defined, but a definition is successfully found and loaded, <ClLinks  term={"true"}><i>true</i></ClLinks> is returned. Otherwise, an error is signaled. 



**Examples:**
```lisp
(translate-logical-pathname "hacks:weather;barometer.lisp.newest") 
▷ Error: The logical host HACKS is not defined. 
(load-logical-pathname-translations "HACKS") 
▷ ;; Loading SYS:SITE;HACKS.TRANSLATIONS 
▷ ;; Loading done. 
→ true 
(translate-logical-pathname "hacks:weather;barometer.lisp.newest") 
→ #P"HELIUM:[SHARED.HACKS.WEATHER]BAROMETER.LSP;0" 
(load-logical-pathname-translations "HACKS") 
→ false 
```
**Exceptional Situations:** 



If no definition is found, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks> is signaled. 



**See Also:** 



<ClLinks  term={"logical-pathname"}><b>logical-pathname</b></ClLinks> 



**Notes:** 



*Logical pathname* definitions will be created not just by *implementors* but also by <ClLinks  term={"programmer"}><i>programmers</i></ClLinks>. As such, it is important that the search strategy be documented. For example, an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> might define that the definition of a *host* is to be found in a file called “*host*.translations” in some specifically named directory. 



