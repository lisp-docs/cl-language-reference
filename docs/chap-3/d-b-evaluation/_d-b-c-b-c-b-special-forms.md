 

A *special form* is a *form* with special syntax, special evaluation rules, or both, possibly manipulating the evaluation environment, control flow, or both. A *special operator* has access to the current *lexical environment* and the current *dynamic environment*. Each *special operator* defines the manner in which its *subexpressions* are treated—which are *forms*, which are special syntax, *etc.* 

Some *special operators* create new lexical or dynamic *environments* for use during the *evaluation* of *subforms* of the *special form*. For example, **block** creates a new *lexical environment* that is the same as the one in force at the point of evaluation of the **block** *form* with the addition of a *binding* of the **block** name to an *exit point* from the **block**. 

The set of *special operator names* is fixed in Common Lisp; no way is provided for the user to define a *special operator* . Figure 3–2 lists all of the Common Lisp *symbols* that have definitions as *special operators*. 

|&#60;p&#62;**block let\* return-from** &#60;/p&#62;&#60;p&#62;**catch load-time-value setq** &#60;/p&#62;&#60;p&#62;**eval-when locally symbol-macrolet flet macrolet tagbody** &#60;/p&#62;&#60;p&#62;**function multiple-value-call the** &#60;/p&#62;&#60;p&#62;**go multiple-value-prog1 throw** &#60;/p&#62;&#60;p&#62;**if progn unwind-protect labels progv** &#60;/p&#62;&#60;p&#62;**let quote**&#60;/p&#62;|
| :- |


**Figure 3–2. Common Lisp Special Operators** 

