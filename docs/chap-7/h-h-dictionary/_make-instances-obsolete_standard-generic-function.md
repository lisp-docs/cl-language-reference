**make-instances-obsolete** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> *class → class* 



**Method Signatures:** 



<DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> (<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>) 



<DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> (<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>) 



**Arguments and Values:** 



<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"class designator"}><i>class designator</i></GlossaryTerm> . 



**Description:** 



The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> has the effect of initiating the process of updating the instances of the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. During updating, the generic function **update-instance-for-redefined-class** will be invoked. 



The generic function <DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> is invoked automatically by the system when <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> has been used to redefine an existing standard class and the set of local *slots accessible* in an instance is changed or the order of <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> in storage is changed. It can also be explicitly invoked by the user. 



If the second of the above <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> is selected, that <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> invokes <DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> on (find-class <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>). 







 



 



**Examples:**
```lisp

```
**See Also:** 



**update-instance-for-redefined-class**, Section 4.3.6 (Redefining Classes) 



