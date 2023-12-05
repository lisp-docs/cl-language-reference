 



This section describes how to use the *defined name* in code. The “Syntax” description for a *generic function* describes the *lambda list* of the *generic function* itself, while the “Method Signatures” describe the *lambda lists* of the defined *methods*. The “Syntax” description for an *ordinary function*, a *macro*, or a *special operator* describes its *parameters*. 



For example, an *operator* description might say: 



**F** *x y* &amp;optional *z* &amp;key *k* 



This description indicates that the function **F** has two required parameters, *x* and *y*. In addition, there is an optional parameter *z* and a keyword parameter *k*. 



For *macros* and *special operators*, syntax is given in modified BNF notation; see Section 1.4.1.2 (Modified BNF Syntax). For *functions* a *lambda list* is given. In both cases, however, the outermost parentheses are omitted, and default value information is omitted. 



