**2.3.5 Valid Patterns for Tokens** 

The valid patterns for *tokens* are summarized in Figure 2–17.  



|\<p\>*nnnnn* a *number* \</p\>\<p\>*xxxxx* a *symbol* in the *current package* \</p\>\<p\>:*xxxxx* a *symbol* in the the KEYWORD *package* \</p\>\<p\>*ppppp*:*xxxxx* an *external symbol* in the *ppppp package* \</p\>\<p\>*ppppp*::*xxxxx* a (possibly internal) *symbol* in the *ppppp package* :*nnnnn* undefined \</p\>\<p\>*ppppp*:*nnnnn* undefined \</p\>\<p\>*ppppp*::*nnnnn* undefined \</p\>\<p\>::*aaaaa* undefined \</p\>\<p\>*aaaaa*: undefined \</p\>\<p\>*aaaaa*:*aaaaa*:*aaaaa* undefined\</p\>|
| :- |


**Figure 2–17. Valid patterns for tokens** 

Note that *nnnnn* has number syntax, neither *xxxxx* nor *ppppp* has number syntax, and *aaaaa* has any syntax. 

A summary of rules concerning *package markers* follows. In each case, examples are offered to illustrate the case; for presentational simplicity, the examples assume that the *readtable case* of the *current readtable* is :upcase. 

1\. If there is a single *package marker* , and it occurs at the beginning of the *token*, then the *token* is interpreted as a *symbol* in the KEYWORD *package*. It also sets the **symbol-value** of the newly-created *symbol* to that same *symbol* so that the *symbol* will self-evaluate. 

For example, :bar, when read, interns BAR as an *external symbol* in the KEYWORD *package*. 

2\. If there is a single *package marker* not at the beginning or end of the *token*, then it divides the *token* into two parts. The first part specifies a *package*; the second part is the name of an *external symbol* available in that package. 

For example, foo:bar, when read, looks up BAR among the *external symbols* of the *package* named FOO. 

3\. If there are two adjacent *package markers* not at the beginning or end of the *token*, then they divide the *token* into two parts. The first part specifies a *package*; the second part is the name of a *symbol* within that *package* (possibly an *internal symbol*). 

For example, foo::bar, when read, interns BAR in the *package* named FOO. 

4\. If the *token* contains no *package markers*, and does not have *potential number* syntax, then the entire *token* is the name of the *symbol*. The *symbol* is looked up in the *current package*. 

For example, bar, when read, interns BAR in the *current package*.  



5\. The consequences are unspecified if any other pattern of *package markers* in a *token* is used. All other uses of *package markers* within names of *symbols* are not defined by this standard but are reserved for *implementation-dependent* use. 

For example, assuming the *readtable case* of the *current readtable* is :upcase, editor:buffer refers to the *external symbol* named BUFFER present in the *package* named editor, regardless of whether there is a *symbol* named BUFFER in the *current package*. If there is no *package* named editor, or if 

no *symbol* named BUFFER is present in editor, or if BUFFER is not exported by editor, the reader signals a correctable error. If editor::buffer is seen, the effect is exactly the same as reading buffer with the EDITOR *package* being the *current package*. 

