**generic-function** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"generic-function"}><b>generic-function</b></DictionaryLink>, <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A *generic function* is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> whose behavior depends on the *classes* or identities of the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> supplied to it. A generic function object contains a set of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>, a *lambda list*, a *method combination type*, and other information. The <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> define the class-specific behavior and operations of the *generic function*; a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is said to <GlossaryTerm styled={true} term={"specialize"}><i>specialize</i></GlossaryTerm> a *generic function*. When invoked, a *generic function* executes a subset of its <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> based on the *classes* or identities of its <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>. 



A *generic function* can be used in the same ways that an ordinary <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> can be used; specifically, a *generic function* can be used as an argument to <DictionaryLink styled={true} term={"funcall"}><b>funcall</b></DictionaryLink> and <DictionaryLink styled={true} term={"apply"}><b>apply</b></DictionaryLink>, and can be given a global or a local name.  







