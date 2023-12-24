 



*Package prefixes* are printed if necessary. The rules for *package prefixes* are as follows. When the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is printed, if it is in the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>, then it is printed with a preceding <ClLinks styled={true} term={"colon"}><i>colon</i></ClLinks>; otherwise, if it is <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the *current package*, it is printed without any *package prefix* ; otherwise, it is printed with a *package prefix* . 



A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is *apparently uninterned* is printed preceded by “#:” if <ClLinks styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and *printer escaping* is enabled; if <ClLinks styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></ClLinks> is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> or *printer escaping* is disabled, then the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is printed without a prefix, as if it were in the *current package*. 



Because the #: syntax does not intern the following symbol, it is necessary to use circular-list syntax if <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> and the same uninterned symbol appears several times in an expression to be printed. For example, the result of 



(let ((x (make-symbol "FOO"))) (list x x)) 



would be printed as (#:foo #:foo) if <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> were <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, but as (#1=#:foo #1#) if <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> were <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



A summary of the preceding package prefix rules follows: 



foo:bar 



foo:bar is printed when <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> bar is external in its *home package* foo and is not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the *current package*. 



foo::bar 



foo::bar is printed when bar is internal in its *home package* foo and is not <ClLinks styled={true} term={"accessible"}><i>accessible</i></ClLinks> in the *current package*. 



:bar 



:bar is printed when the home package of bar is the KEYWORD <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



#:bar 



#:bar is printed when bar is *apparently uninterned*, even in the pathological case that bar has no *home package* but is nevertheless somehow *accessible* in the *current package*. 



