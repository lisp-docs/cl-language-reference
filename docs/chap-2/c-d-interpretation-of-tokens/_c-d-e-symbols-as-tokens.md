 

Any *token* that is not a *potential number* , does not contain a *package marker* , and does not consist entirely of dots will always be interpreted as a *symbol*. Any *token* that is a *potential number* but does not fit the number syntax is a reserved *token* and has an *implementation-dependent* interpretation. In all other cases, the *token* is construed to be the name of a *symbol*. 

Examples of the printed representation of *symbols* are in Figure 2–15. For presentational simplicity, these examples assume that the *readtable case* of the *current readtable* is :upcase. 

|&#60;p&#62;FROBBOZ The *symbol* whose *name* is FROBBOZ. &#60;/p&#62;&#60;p&#62;frobboz Another way to notate the same *symbol*. &#60;/p&#62;&#60;p&#62;fRObBoz Yet another way to notate it. &#60;/p&#62;&#60;p&#62;unwind-protect A *symbol* with a hyphen in its *name*. &#60;/p&#62;&#60;p&#62;+$ The *symbol* named +$. &#60;/p&#62;&#60;p&#62;1+ The *symbol* named 1+. &#60;/p&#62;&#60;p&#62;+1 This is the *integer* 1, not a *symbol*. &#60;/p&#62;&#60;p&#62;pascal style This *symbol* has an underscore in its *name*. &#60;/p&#62;&#60;p&#62;file.rel.43 This *symbol* has periods in its *name*. &#60;/p&#62;&#60;p&#62;\( The *symbol* whose *name* is (. &#60;/p&#62;&#60;p&#62;\+1 The *symbol* whose *name* is +1. &#60;/p&#62;&#60;p&#62;+\1 Also the *symbol* whose *name* is +1. &#60;/p&#62;&#60;p&#62;\frobboz The *symbol* whose *name* is fROBBOZ. &#60;/p&#62;&#60;p&#62;3\.14159265\s0 The *symbol* whose *name* is 3.14159265s0. &#60;/p&#62;&#60;p&#62;3\.14159265\S0 A different *symbol*, whose *name* is 3.14159265S0. 3.14159265s0 A possible *short float* approximation to *π*.&#60;/p&#62;|
| :- |


**Figure 2–15. Examples of the printed representation of symbols (Part 1 of 2)** 





|&#60;p&#62;APL\\360 The *symbol* whose *name* is APL\360. &#60;/p&#62;&#60;p&#62;apl\\360 Also the &#60;i&#62;symbol&#60;/i&#62; whose &#60;i&#62;name&#60;/i&#62; is APL\360. \(b&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;2\)\ -\ 4*a*c The &#60;i&#62;name&#60;/i&#62; is (B&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;2) - 4*A*C. &#60;/p&#62;&#60;p&#62;Parentheses and two spaces in it. &#60;/p&#62;&#60;p&#62;\(\b&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;2\)\ -\4*\a*\c The &#60;i&#62;name&#60;/i&#62; is (b&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;2) - 4*a*c. &#60;/p&#62;&#60;p&#62;Letters explicitly lowercase. &#60;/p&#62;&#60;p&#62;|"| The same as writing \". &#60;/p&#62;&#60;p&#62;|(b&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;2) - 4*a*c| The &#60;i&#62;name&#60;/i&#62; is (b&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;2) - 4*a*c. &#60;/p&#62;&#60;p&#62;|frobboz| The *name* is frobboz, not FROBBOZ. &#60;/p&#62;&#60;p&#62;|APL\360| The *name* is APL360. &#60;/p&#62;&#60;p&#62;|APL\\360| The *name* is APL\360. &#60;/p&#62;&#60;p&#62;|apl\\360| The *name* is apl\360. &#60;/p&#62;&#60;p&#62;|\|\|| Same as \|\| —the *name* is ||. &#60;/p&#62;&#60;p&#62;|(B&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;2) - 4*A*C| The &#60;i&#62;name&#60;/i&#62; is (B&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;2) - 4*A*C. &#60;/p&#62;&#60;p&#62;Parentheses and two spaces in it. &#60;/p&#62;&#60;p&#62;|(b&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;2) - 4*a*c| The &#60;i&#62;name&#60;/i&#62; is (b&#60;i&#62;&#60;sup&#62;∧&#60;/sup&#62;&#60;/i&#62;2) - 4*a*c.&#60;/p&#62;|
| :- |


**Figure 2–16. Examples of the printed representation of symbols (Part 2 of 2)** 

In the process of parsing a *symbol*, it is *implementation-dependent* which *implementation-defined attributes* are removed from the *characters* forming a *token* that represents a *symbol*. 

When parsing the syntax for a *symbol*, the *Lisp reader* looks up the *name* of that *symbol* in the *current package*. This lookup may involve looking in other *packages* whose *external symbols* are inherited by the *current package*. If the name is found, the corresponding *symbol* is returned. If the name is not found (that is, there is no *symbol* of that name *accessible* in the *current package*), 

a new *symbol* is created and is placed in the *current package* as an *internal symbol*. The *current package* becomes the owner (*home package*) of the *symbol*, and the *symbol* becomes interned in the *current package*. If the name is later read again while this same *package* is current, the same *symbol* will be found and returned. 

