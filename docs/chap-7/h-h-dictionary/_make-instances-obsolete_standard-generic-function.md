**make-instances-obsolete** *Standard Generic Function* 



**Syntax:** 



<ClLinks  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> *class → class* 



**Method Signatures:** 



<ClLinks  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>) 



<ClLinks  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> (<ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"symbol"}><b>symbol</b></ClLinks>) 



**Arguments and Values:** 



<ClLinks  term={"class"}><i>class</i></ClLinks>—a *class designator* . 



**Description:** 



The <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> has the effect of initiating the process of updating the instances of the <ClLinks  term={"class"}><i>class</i></ClLinks>. During updating, the generic function **update-instance-for-redefined-class** will be invoked. 



The generic function <ClLinks  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> is invoked automatically by the system when <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> has been used to redefine an existing standard class and the set of local *slots accessible* in an instance is changed or the order of <ClLinks  term={"slot"}><i>slots</i></ClLinks> in storage is changed. It can also be explicitly invoked by the user. 



If the second of the above <ClLinks  term={"method"}><i>methods</i></ClLinks> is selected, that <ClLinks  term={"method"}><i>method</i></ClLinks> invokes <ClLinks  term={"make-instances-obsolete"}><b>make-instances-obsolete</b></ClLinks> on (find-class <ClLinks  term={"class"}><i>class</i></ClLinks>). 







 



 



**Examples:**
```lisp

```
**See Also:** 



**update-instance-for-redefined-class**, Section 4.3.6 (Redefining Classes) 



