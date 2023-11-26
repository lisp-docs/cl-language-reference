 

Since the exact manner in which the *Lisp reader* will parse an *expression* involving the *backquote reader macro* is not specified, an *implementation* is free to choose any representation that preserves the semantics described. 

Often an *implementation* will choose a representation that facilitates pretty printing of the expression, so that (pprint ‘(a ,b)) will display ‘(a ,b) and not, for example, (list ’a b). However, this is not a requirement. 

Implementors who have no particular reason to make one choice or another might wish to refer to *IEEE Standard for the Scheme Programming Language*, which identifies a popular choice of representation for such expressions that might provide useful to be useful compatibility for some user communities. There is no requirement, however, that any *conforming implementation* use this particular representation. This information is provided merely for cross-reference purposes. 

