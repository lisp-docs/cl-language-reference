**method** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"method"}><b>method</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that represents a modular part of the behavior of a *generic function*. 



A <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> contains <GlossaryTerm styled={true} term={"code"}><i>code</i></GlossaryTerm> to implement the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>’s behavior, a sequence of *parameter specializers* that specify when the given <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is applicable, and a sequence of <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm> that is used by the method combination facility to distinguish among <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>. Each required parameter of each <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> has an associated *parameter specializer* , and the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> will be invoked only on arguments that satisfy its *parameter specializers*. 



The method combination facility controls the selection of <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>, the order in which they are run, and the values that are returned by the generic function. The object system offers a default method combination type and provides a facility for declaring new types of method combination. 



**See Also:** 



Section 7.6 (Generic Functions and Methods)  







