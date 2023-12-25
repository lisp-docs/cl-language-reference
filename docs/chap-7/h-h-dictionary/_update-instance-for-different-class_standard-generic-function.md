**update-instance-for-different-class** *Standard Generic Function* 



**Syntax:** 



**update-instance-for-different-class** *previous current* &amp;rest *initargs* &amp;key &amp;allow-other-keys → implementation-dependent 



**Method Signatures:** 



**update-instance-for-different-class** (*previous* <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>) 



(*current* <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>) 



&amp;rest *initargs* 



**Arguments and Values:** 



*previous*—a copy of the original <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>. 



*current*—the original <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> (altered). 



*initargs*—an *initialization argument list*. 



**Description:** 



The generic function **update-instance-for-different-class** is not intended to be called by program mers. Programmers may write <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for it. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **update-instance-for-different-class** is called only by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks>. 



The system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on **update-instance-for-different-class** checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. This <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> then initializes <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> with values according to the *initargs*, and initializes the newly added <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> with values according to their :initform forms. It does this by calling the generic function <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> with the following arguments: the instance (*current*), a list of <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> of the newly added <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks>, and the *initargs* it received. Newly added <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> are those *local slots* for which no <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> of the same name exists in the *previous* class. 



<ClLinks styled={true} term={"method"}><i>Methods</i></ClLinks> for **update-instance-for-different-class** can be defined to specify actions to be taken when an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> is updated. If only *after methods* for **update-instance-for-different-class** are defined, they will be run after the system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for initialization and therefore will not interfere with the default behavior of **update-instance-for-different-class**. 



<ClLinks styled={true} term={"method"}><i>Methods</i></ClLinks> on **update-instance-for-different-class** can be defined to initialize <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> differently from <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks>. The default behavior of <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> is described in Section 7.2 (Changing the Class of an Instance). 







 



 



The arguments to **update-instance-for-different-class** are computed by <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks>. When <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> is invoked on an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>, a copy of that <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> is made; <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> then de structively alters the original <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>. The first argument to **update-instance-for-different-class**, *previous*, is that copy; it holds the old <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> values temporarily. This argument has dynamic extent within <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks>; if it is referenced in any way once **update-instance-for-different-class** returns, the results are undefined. The second argument to **update-instance-for-different-class**, *current*, is the altered original <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks>. The intended use of *previous* is to extract old <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> values by using <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> or <ClLinks styled={true} term={"with-slots"}><b>with-slots</b></ClLinks> or by invoking a reader generic function, or to run other <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> that were applicable to <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> of the original <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. 



**Examples:**
```lisp
See the example for the *function* **change-class**. 
```
**Exceptional Situations:** 



The system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on **update-instance-for-different-class** signals an error if an initialization argument is supplied that is not declared as valid. 



**See Also:** 



<ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks>, <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>, Section 7.2 (Changing the Class of an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, or by defining <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for **update-instance-for-different-class** or <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. The keyword name of each keyword parameter specifier in the *lambda list* of any <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> defined on **update-instance-for-different-class** or <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> is declared as a valid *initarg* name for all *classes* for which that <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is applicable. 



The value returned by **update-instance-for-different-class** is ignored by <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks>. 



