 



In the *for-as-package* subclause the for or as construct iterates over the *symbols* in a *package*. In this syntax, a compound preposition is used to designate access to a *package*. The variable *var* takes on the value of each *symbol* in the supplied *package*. The following *loop keywords* serve as valid prepositions within this syntax: 



being 



The keyword being introduces either the Loop schema symbol, present-symbol, or external-symbol. 



each, the 



The *loop keyword* each follows the *loop keyword* being when symbol, present-symbol, or external-symbol is used. The *loop keyword* the is used with symbols, present-symbols, and external-symbols only for ease of reading. This agreement isn’t required. 



present-symbol, present-symbols 



These Loop schemas iterate over the *symbols* that are *present* in a *package*. The *package* to be iterated over is supplied in the same way that *package* arguments to **find-package** are supplied. If the *package* for the iteration is not supplied, the *current package* is used. If a *package* that does not exist is supplied, an error of *type* **package-error** is signaled. 



symbol, symbols 



These Loop schemas iterate over *symbols* that are *accessible* in a given *package*. The *package* to be iterated over is supplied in the same way that *package* arguments to **find-package** are supplied. If the *package* for the iteration is not supplied, the *current package* is used. If a *package* that does not exist is supplied, an error of *type* **package-error** is signaled. 



external-symbol, external-symbols 



These Loop schemas iterate over the *external symbols* of a *package*. The *package* to be iterated over is supplied in the same way that *package* arguments to **find-package** are 







 



 



supplied. If the *package* for the iteration is not supplied, the *current package* is used. If a *package* that does not exist is supplied, an error of *type* **package-error** is signaled. 



in, of 



These loop prepositions introduce *package*. 



In effect 



being *\&#123;*each *|* the*\&#125; \&#123;*symbol *|* symbols *|* present-symbol *|* present-symbols *|* external-symbol *|* external-symbols*\&#125; \&#123;*in *|* of*\&#125;* 



is a compound preposition. 



Iteration stops when there are no more *symbols* to be referenced in the supplied *package*. 