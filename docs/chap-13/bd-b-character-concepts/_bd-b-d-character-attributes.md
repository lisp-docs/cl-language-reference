 



*Characters* have only one *standardized attribute*: a *code*. A *character* ’s *code* is a non-negative *integer* . This *code* is composed from a character *script* and a character label in an *implementation dependent* way. See the *functions* **char-code** and **code-char**. 



Additional, *implementation-defined attributes* of *characters* are also permitted so that, for example, two *characters* with the same *code* may differ in some other, *implementation-defined* way. 



For any *implementation-defined attribute* there is a distinguished value called the *null* value for that *attribute*. A *character* for which each *implementation-defined attribute* has the null value for that *attribute* is called a *simple character* . If the *implementation* has no *implementation-defined attributes*, then all *characters* are *simple characters*. 







 



 



