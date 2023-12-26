**load-logical-pathname-translations** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



**load-logical-pathname-translations** *host → just-loaded* 



**Arguments and Values:** 



*host*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



*just-loaded*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Searches for and loads the definition of a <GlossaryTerm styled={true} term={"logical host"}><i>logical host</i></GlossaryTerm> named *host*, if it is not already defined. The specific nature of the search is <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 







 



 



If the *host* is already defined, no attempt to find or load a definition is attempted, and <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> is returned. If the *host* is not already defined, but a definition is successfully found and loaded, <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> is returned. Otherwise, an error is signaled. 



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



If no definition is found, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"logical-pathname"}><b>logical-pathname</b></DictionaryLink> 



**Notes:** 



<GlossaryTerm styled={true} term={"logical pathname"}><i>Logical pathname</i></GlossaryTerm> definitions will be created not just by *implementors* but also by <GlossaryTerm  term={"programmer"}><i>programmers</i></GlossaryTerm>. As such, it is important that the search strategy be documented. For example, an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> might define that the definition of a *host* is to be found in a file called “*host*.translations” in some specifically named directory. 



