**lambda** <ClLinks styled={true} term={"symbol"}><i>Symbol</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"lambda"}><b>lambda</b></ClLinks> *lambda-list* [[ <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



**Arguments:** 



*lambda-list*—an *ordinary lambda list*. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Description:** 



A *lambda expression* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that can be used in place of a *function name* in certain contexts to denote a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> by directly describing its behavior rather than indirectly by referring to the name of an *established function*. 



*Documentation* is attached to the denoted <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> (if any is actually created) as a *documentation string*. 



**See Also:** 



<ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, **documentation**, Section 3.1.3 (Lambda Expressions), Section 3.1.2.1.2.4 (Lambda Forms), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



The *lambda form* 



((lambda *lambda-list* . *body*) . <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>) 



is semantically equivalent to the *function form* 



(funcall #’(lambda *lambda-list* . *body*) . <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>) 



