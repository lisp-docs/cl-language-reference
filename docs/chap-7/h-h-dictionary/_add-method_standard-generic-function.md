**add-method** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"add-method"}><b>add-method</b></DictionaryLink> *generic-function method ! generic-function* 



**Method Signatures:** 



<DictionaryLink  term={"add-method"}><b>add-method</b></DictionaryLink> (*generic-function* <DictionaryLink  term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



(<GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> <DictionaryLink  term={"method"}><b>method</b></DictionaryLink>) 



**Arguments and Values:** 



*generic-function*—a *generic function object*. 



<GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm>—a *method object*. 



**Description:** 



The generic function <DictionaryLink  term={"add-method"}><b>add-method</b></DictionaryLink> adds a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> to a <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>. 







 



 



If <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> agrees with an existing <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> of *generic-function* on <GlossaryTerm styled={true} term={"parameter specializer"}><i>parameter specializers</i></GlossaryTerm> and <GlossaryTerm  term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, the existing <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is replaced. 



**Exceptional Situations:** 



The <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of the method function of <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> must be congruent with the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of *generic-function*, or an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



If <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is a *method object* of another <GlossaryTerm styled={true} term={"generic function"}><i>generic function</i></GlossaryTerm>, an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink  term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink  term={"defgeneric"}><b>defgeneric</b></DictionaryLink>, <DictionaryLink  term={"find-method"}><b>find-method</b></DictionaryLink>, <DictionaryLink  term={"remove-method"}><b>remove-method</b></DictionaryLink>, Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



