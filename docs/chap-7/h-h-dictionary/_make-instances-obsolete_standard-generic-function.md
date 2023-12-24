**make-instances-obsolete** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> *class → class* 



**Method Signatures:** 



<ClLinks styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> (<ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>) 



<ClLinks styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> (<ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) 



**Arguments and Values:** 



<ClLinks styled={true} term={"class"}><i>class</i></ClLinks>—a *class designator* . 



**Description:** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> has the effect of initiating the process of updating the instances of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. During updating, the generic function **update-instance-for-redefined-class** will be invoked. 



The generic function <ClLinks styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> is invoked automatically by the system when <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> has been used to redefine an existing standard class and the set of local *slots accessible* in an instance is changed or the order of <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> in storage is changed. It can also be explicitly invoked by the user. 



If the second of the above <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> is selected, that <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> invokes <ClLinks styled={true} term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> on (find-class <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>). 







 



 



**Examples:**
```lisp


```
**See Also:** 



**update-instance-for-redefined-class**, Section 4.3.6 (Redefining Classes) 



