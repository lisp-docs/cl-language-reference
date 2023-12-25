**lambda** <GlossaryTerm styled={true} term={"symbol"}><i>Symbol</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"lambda"}><b>lambda</b></DictionaryLink> *lambda-list* [[ <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



**Arguments:** 



*lambda-list*—an *ordinary lambda list*. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



A *lambda expression* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that can be used in place of a *function name* in certain contexts to denote a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> by directly describing its behavior rather than indirectly by referring to the name of an *established function*. 



*Documentation* is attached to the denoted <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> (if any is actually created) as a *documentation string*. 



**See Also:** 



<DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, **documentation**, Section 3.1.3 (Lambda Expressions), Section 3.1.2.1.2.4 (Lambda Forms), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



The *lambda form* 



((lambda *lambda-list* . *body*) . <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>) 



is semantically equivalent to the *function form* 



(funcall #’(lambda *lambda-list* . *body*) . <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>) 



