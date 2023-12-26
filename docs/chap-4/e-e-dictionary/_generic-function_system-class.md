**generic-function** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"generic-function"}><b>generic-function</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is a <ClLinks  term={"function"}><i>function</i></ClLinks> whose behavior depends on the *classes* or identities of the <ClLinks  term={"argument"}><i>arguments</i></ClLinks> supplied to it. A generic function object contains a set of <ClLinks  term={"method"}><i>methods</i></ClLinks>, a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>, a *method combination type*, and other information. The <ClLinks  term={"method"}><i>methods</i></ClLinks> define the class-specific behavior and operations of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>; a <ClLinks  term={"method"}><i>method</i></ClLinks> is said to <ClLinks  term={"specialize"}><i>specialize</i></ClLinks> a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. When invoked, a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> executes a subset of its <ClLinks  term={"method"}><i>methods</i></ClLinks> based on the *classes* or identities of its <ClLinks  term={"argument"}><i>arguments</i></ClLinks>. 



A <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> can be used in the same ways that an ordinary <ClLinks  term={"function"}><i>function</i></ClLinks> can be used; specifically, a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> can be used as an argument to <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink> and <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink>, and can be given a global or a local name.  







