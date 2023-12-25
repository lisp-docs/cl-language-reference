**add-method** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"add-method"}><b>add-method</b></DictionaryLink> *generic-function method ! generic-function* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"add-method"}><b>add-method</b></DictionaryLink> (*generic-function* <DictionaryLink styled={true} term={"standard-generic-function"}><b>standard-generic-function</b></DictionaryLink>) 



(<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> <DictionaryLink styled={true} term={"method"}><b>method</b></DictionaryLink>) 



**Arguments and Values:** 



*generic-function*—a *generic function object*. 



<GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>—a *method object*. 



**Description:** 



The generic function <DictionaryLink styled={true} term={"add-method"}><b>add-method</b></DictionaryLink> adds a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> to a *generic function*. 







 



 



If <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> agrees with an existing <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> of *generic-function* on *parameter specializers* and <GlossaryTerm styled={true} term={"qualifier"}><i>qualifiers</i></GlossaryTerm>, the existing <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is replaced. 



**Exceptional Situations:** 



The *lambda list* of the method function of <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> must be congruent with the *lambda list* of *generic-function*, or an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



If <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is a *method object* of another *generic function*, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> is signaled. 



**See Also:** 



<DictionaryLink styled={true} term={"defmethod"}><b>defmethod</b></DictionaryLink>, <DictionaryLink styled={true} term={"defgeneric"}><b>defgeneric</b></DictionaryLink>, <DictionaryLink styled={true} term={"find-method"}><b>find-method</b></DictionaryLink>, <DictionaryLink styled={true} term={"remove-method"}><b>remove-method</b></DictionaryLink>, Section 7.6.3 (Agreement on Parameter Specializers and Qualifiers) 



