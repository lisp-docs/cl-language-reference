**lambda** *Symbol* 



**Syntax:** 



**lambda** *lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* 



**Arguments:** 



*lambda-list*—an *ordinary lambda list*. 



*declaration*—a **declare** *expression*; not evaluated. 



*documentation*—a *string*; not evaluated. 



*form*—a *form*. 



**Description:** 



A *lambda expression* is a *list* that can be used in place of a *function name* in certain contexts to denote a *function* by directly describing its behavior rather than indirectly by referring to the name of an *established function*. 



*Documentation* is attached to the denoted *function* (if any is actually created) as a *documentation string*. 



**See Also:** 



**function**, **documentation**, Section 3.1.3 (Lambda Expressions), Section 3.1.2.1.2.4 (Lambda Forms), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 



**Notes:** 



The *lambda form* 



((lambda *lambda-list* . *body*) . *arguments*) 



is semantically equivalent to the *function form* 



(funcall #’(lambda *lambda-list* . *body*) . *arguments*) 



