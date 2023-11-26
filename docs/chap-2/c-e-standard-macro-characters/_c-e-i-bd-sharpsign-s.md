**2.4.8.13 Sharpsign S** 

#s(name slot1 value1 slot2 value2 ...) denotes a *structure*. This is valid only if *name* is the name of a *structure type* already defined by **defstruct** and if the *structure type* has a standard constructor function. Let *cm* stand for the name of this constructor function; then this syntax is equivalent to 

#.(cm keyword1 ’value1 keyword2 ’value2 ...) 

where each *keywordj* is the result of computing 

(intern (string slotj) (find-package ’keyword)) 

The net effect is that the constructor function is called with the specified slots having the specified values. (This coercion feature is deprecated; in the future, keyword names will be taken in the package they are read in, so *symbols* that are actually in the KEYWORD *package* should be used if that is what is desired.) 

Whatever *object* the constructor function returns is returned by the #S syntax. 

For information on how the *Lisp printer* prints *structures*, see Section 22.1.3.12 (Printing Structures). 

