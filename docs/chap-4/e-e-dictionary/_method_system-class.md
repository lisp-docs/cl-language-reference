**method** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"method"}><b>method</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that represents a modular part of the behavior of a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



A <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> contains <GlossaryTerm  term={"code"}><i>code</i></GlossaryTerm> to implement the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>’s behavior, a sequence of <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> that specify when the given <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is applicable, and a sequence of <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm> that is used by the method combination facility to distinguish among <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>. Each required parameter of each <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> has an associated <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> , and the <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> will be invoked only on arguments that satisfy its <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm>. 



The method combination facility controls the selection of <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>, the order in which they are run, and the values that are returned by the generic function. The object system offers a default method combination type and provides a facility for declaring new types of method combination. 



**See Also:** 



Section 7.6 (Generic Functions and Methods)  







