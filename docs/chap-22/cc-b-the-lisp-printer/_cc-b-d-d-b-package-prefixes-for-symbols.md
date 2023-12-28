 



*Package prefixes* are printed if necessary. The rules for *package prefixes* are as follows. When the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is printed, if it is in the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, then it is printed with a preceding <GlossaryTerm styled={true} term={"colon"}><i>colon</i></GlossaryTerm>; otherwise, if it is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>, it is printed without any <GlossaryTerm styled={true} term={"package prefix"}><i>package prefix</i></GlossaryTerm> ; otherwise, it is printed with a <GlossaryTerm styled={true} term={"package prefix"}><i>package prefix</i></GlossaryTerm> . 



A <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is <GlossaryTerm styled={true} term={"apparently uninterned"}><i>apparently uninterned</i></GlossaryTerm> is printed preceded by “#:” if <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"printer escaping"}><i>printer escaping</i></GlossaryTerm> is enabled; if <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"printer escaping"}><i>printer escaping</i></GlossaryTerm> is disabled, then the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is printed without a prefix, as if it were in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



Because the #: syntax does not intern the following symbol, it is necessary to use circular-list syntax if <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> and the same uninterned symbol appears several times in an expression to be printed. For example, the result of 



(let ((x (make-symbol "FOO"))) (list x x)) 



would be printed as (#:foo #:foo) if <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> were <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, but as (#1=#:foo #1#) if <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> were <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



A summary of the preceding package prefix rules follows: 



foo:bar 



foo:bar is printed when <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> bar is external in its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> foo and is not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



foo::bar 



foo::bar is printed when bar is internal in its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm> foo and is not <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"current package"}><i>current package</i></GlossaryTerm>. 



:bar 



:bar is printed when the home package of bar is the KEYWORD <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



#:bar 



#:bar is printed when bar is *apparently uninterned*, even in the pathological case that bar has no *home package* but is nevertheless somehow *accessible* in the *current package*. 



