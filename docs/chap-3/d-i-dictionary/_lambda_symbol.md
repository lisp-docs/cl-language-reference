**lambda** <GlossaryTerm  term={"symbol"}><i>Symbol</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"lambda"}><b>lambda</b></DictionaryLink> *lambda-list* [[ <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *| documentation* ]] <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



**Arguments:** 



*lambda-list*—an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



*documentation*—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



A <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> is a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> that can be used in place of a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> in certain contexts to denote a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> by directly describing its behavior rather than indirectly by referring to the name of an *established function*. 



*Documentation* is attached to the denoted <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> (if any is actually created) as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, **documentation**, Section 3.1.3 (Lambda Expressions), Section 3.1.2.1.2.4 (Lambda Forms), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



The <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm> 



((lambda *lambda-list* . *body*) . <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>) 



is semantically equivalent to the <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm> 



(funcall #’(lambda *lambda-list* . *body*) . <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>) 



