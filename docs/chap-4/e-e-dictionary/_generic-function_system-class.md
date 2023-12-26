**generic-function** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"generic-function"}><b>generic-function</b></DictionaryLink>, <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> is a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> whose behavior depends on the *classes* or identities of the <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> supplied to it. A generic function object contains a set of <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm>, a *method combination type*, and other information. The <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> define the class-specific behavior and operations of the <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>; a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is said to <GlossaryTerm  term={"specialize"}><i>specialize</i></GlossaryTerm> a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. When invoked, a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> executes a subset of its <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> based on the *classes* or identities of its <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> can be used in the same ways that an ordinary <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> can be used; specifically, a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm> can be used as an argument to <DictionaryLink  term={"funcall"}><b>funcall</b></DictionaryLink> and <DictionaryLink  term={"apply"}><b>apply</b></DictionaryLink>, and can be given a global or a local name.  







