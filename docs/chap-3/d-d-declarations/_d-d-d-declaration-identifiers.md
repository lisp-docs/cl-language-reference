 

Figure 3–9 shows a list of all *declaration identifiers* defined by this standard. 

|&#60;p&#62;**declaration ignore special** &#60;/p&#62;&#60;p&#62;**dynamic-extent inline type** &#60;/p&#62;&#60;p&#62;**ftype notinline** &#60;/p&#62;&#60;p&#62;**ignorable optimize**&#60;/p&#62;|
| :- |


**Figure 3–9. Common Lisp Declaration Identifiers**  



An implementation is free to support other (*implementation-defined*) *declaration identifiers* as well. A warning might be issued if a *declaration identifier* is not among those defined above, is not defined by the *implementation*, is not a *type name*, and has not been declared in a **declaration** *proclamation*. 

