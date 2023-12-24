**generic-function** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"generic-function"}><b>generic-function</b></ClLinks>, <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A *generic function* is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> whose behavior depends on the *classes* or identities of the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> supplied to it. A generic function object contains a set of <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>, a *lambda list*, a *method combination type*, and other information. The <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> define the class-specific behavior and operations of the *generic function*; a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is said to <ClLinks styled={true} term={"specialize"}><i>specialize</i></ClLinks> a *generic function*. When invoked, a *generic function* executes a subset of its <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> based on the *classes* or identities of its <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks>. 



A *generic function* can be used in the same ways that an ordinary <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> can be used; specifically, a *generic function* can be used as an argument to <ClLinks styled={true} term={"funcall"}><b>funcall</b></ClLinks> and <ClLinks styled={true} term={"apply"}><b>apply</b></ClLinks>, and can be given a global or a local name.  







