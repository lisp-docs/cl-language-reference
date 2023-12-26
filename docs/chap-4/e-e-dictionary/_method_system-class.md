**method** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"method"}><b>method</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <ClLinks  term={"method"}><i>method</i></ClLinks> is an <ClLinks  term={"object"}><i>object</i></ClLinks> that represents a modular part of the behavior of a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 



A <ClLinks  term={"method"}><i>method</i></ClLinks> contains <ClLinks  term={"code"}><i>code</i></ClLinks> to implement the <ClLinks  term={"method"}><i>method</i></ClLinks>’s behavior, a sequence of <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> that specify when the given <ClLinks  term={"method"}><i>method</i></ClLinks> is applicable, and a sequence of <ClLinks  term={"qualifier"}><i>qualifiers</i></ClLinks> that is used by the method combination facility to distinguish among <ClLinks  term={"method"}><i>methods</i></ClLinks>. Each required parameter of each <ClLinks  term={"method"}><i>method</i></ClLinks> has an associated <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializer</i></GlossaryTerm> , and the <ClLinks  term={"method"}><i>method</i></ClLinks> will be invoked only on arguments that satisfy its <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm>. 



The method combination facility controls the selection of <ClLinks  term={"method"}><i>methods</i></ClLinks>, the order in which they are run, and the values that are returned by the generic function. The object system offers a default method combination type and provides a facility for declaring new types of method combination. 



**See Also:** 



Section 7.6 (Generic Functions and Methods)  







