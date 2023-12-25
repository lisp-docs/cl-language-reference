**make-instances-obsolete** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> *class → class* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> (<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>) 



<DictionaryLink styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> (<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>—a *class designator* . 



**Description:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> has the effect of initiating the process of updating the instances of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. During updating, the generic function **update-instance-for-redefined-class** will be invoked. 



The generic function <DictionaryLink styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> is invoked automatically by the system when <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> has been used to redefine an existing standard class and the set of local *slots accessible* in an instance is changed or the order of <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> in storage is changed. It can also be explicitly invoked by the user. 



If the second of the above <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> is selected, that <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> invokes <DictionaryLink styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> on (find-class <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>). 







 



 



**Examples:**
```lisp


```
**See Also:** 



**update-instance-for-redefined-class**, Section 4.3.6 (Redefining Classes) 



