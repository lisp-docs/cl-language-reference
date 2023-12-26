**lambda** <ClLinks  term={"symbol"}><i>Symbol</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"lambda"}><b>lambda</b></ClLinks> *lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



**Arguments:** 



*lambda-list*—an <GlossaryTerm styled={true} term={"ordinary lambda list"}><i>ordinary lambda list</i></GlossaryTerm>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Description:** 



A <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> is a <ClLinks  term={"list"}><i>list</i></ClLinks> that can be used in place of a <GlossaryTerm styled={true} term={"function name"}><i>function name</i></GlossaryTerm> in certain contexts to denote a <ClLinks  term={"function"}><i>function</i></ClLinks> by directly describing its behavior rather than indirectly by referring to the name of an *established function*. 



*Documentation* is attached to the denoted <ClLinks  term={"function"}><i>function</i></ClLinks> (if any is actually created) as a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm>. 



**See Also:** 



<ClLinks  term={"function"}><b>function</b></ClLinks>, **documentation**, Section 3.1.3 (Lambda Expressions), Section 3.1.2.1.2.4 (Lambda Forms), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



The <GlossaryTerm styled={true} term={"lambda form"}><i>lambda form</i></GlossaryTerm> 



((lambda *lambda-list* . *body*) . <ClLinks  term={"argument"}><i>arguments</i></ClLinks>) 



is semantically equivalent to the <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm> 



(funcall #’(lambda *lambda-list* . *body*) . <ClLinks  term={"argument"}><i>arguments</i></ClLinks>) 



