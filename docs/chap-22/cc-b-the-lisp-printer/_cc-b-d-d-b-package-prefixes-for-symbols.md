**22.1.3.3.1 Package Prefixes for Symbols** 

*Package prefixes* are printed if necessary. The rules for *package prefixes* are as follows. When the *symbol* is printed, if it is in the KEYWORD *package*, then it is printed with a preceding *colon*; otherwise, if it is *accessible* in the *current package*, it is printed without any *package prefix* ; otherwise, it is printed with a *package prefix* . 

A *symbol* that is *apparently uninterned* is printed preceded by “#:” if **\*print-gensym\*** is *true* and *printer escaping* is enabled; if **\*print-gensym\*** is *false* or *printer escaping* is disabled, then the *symbol* is printed without a prefix, as if it were in the *current package*. 

Because the #: syntax does not intern the following symbol, it is necessary to use circular-list syntax if **\*print-circle\*** is *true* and the same uninterned symbol appears several times in an expression to be printed. For example, the result of 

(let ((x (make-symbol "FOO"))) (list x x)) 

would be printed as (#:foo #:foo) if **\*print-circle\*** were *false*, but as (#1=#:foo #1#) if **\*print-circle\*** were *true*. 

A summary of the preceding package prefix rules follows: 

foo:bar 

foo:bar is printed when *symbol* bar is external in its *home package* foo and is not *accessible* in the *current package*. 

foo::bar 

foo::bar is printed when bar is internal in its *home package* foo and is not *accessible* in the *current package*. 

:bar 

:bar is printed when the home package of bar is the KEYWORD *package*. 

#:bar 

#:bar is printed when bar is *apparently uninterned*, even in the pathological case that bar has no *home package* but is nevertheless somehow *accessible* in the *current package*. 

