 

**nil** has a variety of meanings. It is a *symbol* in the COMMON-LISP *package* with the *name* "NIL", it is *boolean* (and *generalized boolean*) *false*, it is the *empty list*, and it is the *name* of the *empty type* (a *subtype* of all *types*). 

Within Common Lisp, **nil** can be notated interchangeably as either NIL or (). By convention, the choice of notation offers a hint as to which of its many roles it is playing.  



|**For Evaluation? Notation Typically Implied Role**|
| :- |
|\<p\>Yes nil use as a *boolean*. \</p\>\<p\>Yes ’nil use as a *symbol*. \</p\>\<p\>Yes ’() use as an *empty list* \</p\>\<p\>No nil use as a *symbol* or *boolean*. No () use as an *empty list*.\</p\>|


**Figure 1–1. Notations for NIL** 

Within this document only, **nil** is also sometimes notated as *false* to emphasize its role as a *boolean*. For example: 

(print ()) ;avoided 

(defun three nil 3) ;avoided 

’(nil nil) ;list of two symbols 

’(() ()) ;list of empty lists 

(defun three () 3) ;Emphasize empty parameter list. 

(append ’() ’()) *→* () ;Emphasize use of empty lists 

(not nil) *→ true* ;Emphasize use as Boolean false 

(get ’nil ’color) ;Emphasize use as a symbol 

A *function* is sometimes said to “be *false*” or “be *true*” in some circumstance. Since no *function* object can be the same as **nil** and all *function objects* represent *true* when viewed as *booleans*, it would be meaningless to say that the *function* was literally *false* and uninteresting to say that it was literally *true*. Instead, these phrases are just traditional alternative ways of saying that the 

*function* “returns *false*” or “returns *true*,” respectively. 

