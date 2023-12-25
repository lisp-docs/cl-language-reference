 



*Package prefixes* are printed if necessary. The rules for *package prefixes* are as follows. When the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is printed, if it is in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, then it is printed with a preceding <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm>; otherwise, if it is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the *current package*, it is printed without any *package prefix* ; otherwise, it is printed with a *package prefix* . 



A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is *apparently uninterned* is printed preceded by “#:” if <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and *printer escaping* is enabled; if <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> or *printer escaping* is disabled, then the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is printed without a prefix, as if it were in the *current package*. 



Because the #: syntax does not intern the following symbol, it is necessary to use circular-list syntax if <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and the same uninterned symbol appears several times in an expression to be printed. For example, the result of 



(let ((x (make-symbol "FOO"))) (list x x)) 



would be printed as (#:foo #:foo) if <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> were <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, but as (#1=#:foo #1#) if <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> were <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



A summary of the preceding package prefix rules follows: 



foo:bar 



foo:bar is printed when <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> bar is external in its *home package* foo and is not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the *current package*. 



foo::bar 



foo::bar is printed when bar is internal in its *home package* foo and is not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the *current package*. 



:bar 



:bar is printed when the home package of bar is the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



#:bar 



#:bar is printed when bar is *apparently uninterned*, even in the pathological case that bar has no *home package* but is nevertheless somehow *accessible* in the *current package*. 



