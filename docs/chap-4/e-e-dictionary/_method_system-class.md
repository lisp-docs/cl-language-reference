**method** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"method"}><b>method</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that represents a modular part of the behavior of a *generic function*. 



A <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> contains <ClLinks styled={true} term={"code"}><i>code</i></ClLinks> to implement the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>’s behavior, a sequence of *parameter specializers* that specify when the given <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is applicable, and a sequence of <ClLinks styled={true} term={"qualifier"}><i>qualifiers</i></ClLinks> that is used by the method combination facility to distinguish among <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>. Each required parameter of each <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> has an associated *parameter specializer* , and the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> will be invoked only on arguments that satisfy its *parameter specializers*. 



The method combination facility controls the selection of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>, the order in which they are run, and the values that are returned by the generic function. The object system offers a default method combination type and provides a facility for declaring new types of method combination. 



**See Also:** 



Section 7.6 (Generic Functions and Methods)  







