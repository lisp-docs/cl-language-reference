**2.3.4 Symbols as Tokens** 

Any *token* that is not a *potential number* , does not contain a *package marker* , and does not consist entirely of dots will always be interpreted as a *symbol*. Any *token* that is a *potential number* but does not fit the number syntax is a reserved *token* and has an *implementation-dependent* interpretation. In all other cases, the *token* is construed to be the name of a *symbol*. 

Examples of the printed representation of *symbols* are in Figure 2–15. For presentational simplicity, these examples assume that the *readtable case* of the *current readtable* is :upcase. 

|\<p\>FROBBOZ The *symbol* whose *name* is FROBBOZ. \</p\>\<p\>frobboz Another way to notate the same *symbol*. \</p\>\<p\>fRObBoz Yet another way to notate it. \</p\>\<p\>unwind-protect A *symbol* with a hyphen in its *name*. \</p\>\<p\>+$ The *symbol* named +$. \</p\>\<p\>1+ The *symbol* named 1+. \</p\>\<p\>+1 This is the *integer* 1, not a *symbol*. \</p\>\<p\>pascal style This *symbol* has an underscore in its *name*. \</p\>\<p\>file.rel.43 This *symbol* has periods in its *name*. \</p\>\<p\>\( The *symbol* whose *name* is (. \</p\>\<p\>\+1 The *symbol* whose *name* is +1. \</p\>\<p\>+\1 Also the *symbol* whose *name* is +1. \</p\>\<p\>\frobboz The *symbol* whose *name* is fROBBOZ. \</p\>\<p\>3\.14159265\s0 The *symbol* whose *name* is 3.14159265s0. \</p\>\<p\>3\.14159265\S0 A different *symbol*, whose *name* is 3.14159265S0. 3.14159265s0 A possible *short float* approximation to *π*.\</p\>|
| :- |


**Figure 2–15. Examples of the printed representation of symbols (Part 1 of 2)** Syntax **2–19**





|\<p\>APL\\360 The *symbol* whose *name* is APL\360. \</p\>\<p\>apl\\360 Also the \<i\>symbol\</i\> whose \<i\>name\</i\> is APL\360. \(b\<i\>\<sup\>∧\</sup\>\</i\>2\)\ -\ 4*a*c The \<i\>name\</i\> is (B\<i\>\<sup\>∧\</sup\>\</i\>2) - 4*A*C. \</p\>\<p\>Parentheses and two spaces in it. \</p\>\<p\>\(\b\<i\>\<sup\>∧\</sup\>\</i\>2\)\ -\4*\a*\c The \<i\>name\</i\> is (b\<i\>\<sup\>∧\</sup\>\</i\>2) - 4*a*c. \</p\>\<p\>Letters explicitly lowercase. \</p\>\<p\>|"| The same as writing \". \</p\>\<p\>|(b\<i\>\<sup\>∧\</sup\>\</i\>2) - 4*a*c| The \<i\>name\</i\> is (b\<i\>\<sup\>∧\</sup\>\</i\>2) - 4*a*c. \</p\>\<p\>|frobboz| The *name* is frobboz, not FROBBOZ. \</p\>\<p\>|APL\360| The *name* is APL360. \</p\>\<p\>|APL\\360| The *name* is APL\360. \</p\>\<p\>|apl\\360| The *name* is apl\360. \</p\>\<p\>|\|\|| Same as \|\| —the *name* is ||. \</p\>\<p\>|(B\<i\>\<sup\>∧\</sup\>\</i\>2) - 4*A*C| The \<i\>name\</i\> is (B\<i\>\<sup\>∧\</sup\>\</i\>2) - 4*A*C. \</p\>\<p\>Parentheses and two spaces in it. \</p\>\<p\>|(b\<i\>\<sup\>∧\</sup\>\</i\>2) - 4*a*c| The \<i\>name\</i\> is (b\<i\>\<sup\>∧\</sup\>\</i\>2) - 4*a*c.\</p\>|
| :- |


**Figure 2–16. Examples of the printed representation of symbols (Part 2 of 2)** 

In the process of parsing a *symbol*, it is *implementation-dependent* which *implementation-defined attributes* are removed from the *characters* forming a *token* that represents a *symbol*. 

When parsing the syntax for a *symbol*, the *Lisp reader* looks up the *name* of that *symbol* in the *current package*. This lookup may involve looking in other *packages* whose *external symbols* are inherited by the *current package*. If the name is found, the corresponding *symbol* is returned. If the name is not found (that is, there is no *symbol* of that name *accessible* in the *current package*), 

a new *symbol* is created and is placed in the *current package* as an *internal symbol*. The *current package* becomes the owner (*home package*) of the *symbol*, and the *symbol* becomes interned in the *current package*. If the name is later read again while this same *package* is current, the same *symbol* will be found and returned. 

