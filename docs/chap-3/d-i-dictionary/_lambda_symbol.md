**lambda** <ClLinks  term={"symbol"}><i>Symbol</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"lambda"}><b>lambda</b></ClLinks> *lambda-list* [[ <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *| documentation* ]] <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* 



**Arguments:** 



*lambda-list*—an *ordinary lambda list*. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



*documentation*—a <ClLinks  term={"string"}><i>string</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Description:** 



A *lambda expression* is a <ClLinks  term={"list"}><i>list</i></ClLinks> that can be used in place of a *function name* in certain contexts to denote a <ClLinks  term={"function"}><i>function</i></ClLinks> by directly describing its behavior rather than indirectly by referring to the name of an *established function*. 



*Documentation* is attached to the denoted <ClLinks  term={"function"}><i>function</i></ClLinks> (if any is actually created) as a *documentation string*. 



**See Also:** 



<ClLinks  term={"function"}><b>function</b></ClLinks>, **documentation**, Section 3.1.3 (Lambda Expressions), Section 3.1.2.1.2.4 (Lambda Forms), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



The *lambda form* 



((lambda *lambda-list* . *body*) . <ClLinks  term={"argument"}><i>arguments</i></ClLinks>) 



is semantically equivalent to the *function form* 



(funcall #’(lambda *lambda-list* . *body*) . <ClLinks  term={"argument"}><i>arguments</i></ClLinks>) 



