**make-instances-obsolete** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> *class → class* 



**Method Signatures:** 



<DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> (<ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"standard-class"}><b>standard-class</b></DictionaryLink>) 



<DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> (<ClLinks  term={"class"}><i>class</i></ClLinks> <DictionaryLink  term={"symbol"}><b>symbol</b></DictionaryLink>) 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a <GlossaryTerm styled={true} term={"class designator"}><i>class designator</i></GlossaryTerm> . 



**Description:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> has the effect of initiating the process of updating the instances of the <ClLinks  term={"class"}><i>class</i></ClLinks>. During updating, the generic function **update-instance-for-redefined-class** will be invoked. 



The generic function <DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> is invoked automatically by the system when <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> has been used to redefine an existing standard class and the set of local *slots accessible* in an instance is changed or the order of <ClLinks  term={"slot"}><i>slots</i></ClLinks> in storage is changed. It can also be explicitly invoked by the user. 



If the second of the above <ClLinks  term={"method"}><i>methods</i></ClLinks> is selected, that <ClLinks  term={"method"}><i>method</i></ClLinks> invokes <DictionaryLink  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></DictionaryLink> on (find-class <ClLinks  term={"class"}><i>class</i></ClLinks>). 







 



 



**Examples:**
```lisp

```
**See Also:** 



**update-instance-for-redefined-class**, Section 4.3.6 (Redefining Classes) 



