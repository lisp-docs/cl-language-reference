**update-instance-for-different-class** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



**update-instance-for-different-class** *previous current* &amp;rest *initargs* &amp;key &amp;allow-other-keys → implementation-dependent 



**Method Signatures:** 



**update-instance-for-different-class** (*previous* <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) 



(*current* <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) 



&amp;rest *initargs* 



**Arguments and Values:** 



*previous*—a copy of the original <ClLinks  term={"instance"}><i>instance</i></ClLinks>. 



*current*—the original <ClLinks  term={"instance"}><i>instance</i></ClLinks> (altered). 



*initargs*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



**Description:** 



The generic function **update-instance-for-different-class** is not intended to be called by program mers. Programmers may write <ClLinks  term={"method"}><i>methods</i></ClLinks> for it. The <ClLinks  term={"function"}><i>function</i></ClLinks> **update-instance-for-different-class** is called only by the <ClLinks  term={"function"}><i>function</i></ClLinks> <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>. 



The system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> on **update-instance-for-different-class** checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. This <ClLinks  term={"method"}><i>method</i></ClLinks> then initializes <ClLinks  term={"slot"}><i>slots</i></ClLinks> with values according to the *initargs*, and initializes the newly added <ClLinks  term={"slot"}><i>slots</i></ClLinks> with values according to their :initform forms. It does this by calling the generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the instance (*current*), a list of <ClLinks  term={"name"}><i>names</i></ClLinks> of the newly added <ClLinks  term={"slot"}><i>slots</i></ClLinks>, and the *initargs* it received. Newly added <ClLinks  term={"slot"}><i>slots</i></ClLinks> are those <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> for which no <ClLinks  term={"slot"}><i>slot</i></ClLinks> of the same name exists in the *previous* class. 



<ClLinks  term={"method"}><i>Methods</i></ClLinks> for **update-instance-for-different-class** can be defined to specify actions to be taken when an <ClLinks  term={"instance"}><i>instance</i></ClLinks> is updated. If only <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> for **update-instance-for-different-class** are defined, they will be run after the system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> for initialization and therefore will not interfere with the default behavior of **update-instance-for-different-class**. 



<ClLinks  term={"method"}><i>Methods</i></ClLinks> on **update-instance-for-different-class** can be defined to initialize <ClLinks  term={"slot"}><i>slots</i></ClLinks> differently from <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>. The default behavior of <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is described in Section 7.2 (Changing the Class of an Instance). 







 



 



The arguments to **update-instance-for-different-class** are computed by <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>. When <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is invoked on an <ClLinks  term={"instance"}><i>instance</i></ClLinks>, a copy of that <ClLinks  term={"instance"}><i>instance</i></ClLinks> is made; <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> then de structively alters the original <ClLinks  term={"instance"}><i>instance</i></ClLinks>. The first argument to **update-instance-for-different-class**, *previous*, is that copy; it holds the old <ClLinks  term={"slot"}><i>slot</i></ClLinks> values temporarily. This argument has dynamic extent within <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>; if it is referenced in any way once **update-instance-for-different-class** returns, the results are undefined. The second argument to **update-instance-for-different-class**, *current*, is the altered original <ClLinks  term={"instance"}><i>instance</i></ClLinks>. The intended use of *previous* is to extract old <ClLinks  term={"slot"}><i>slot</i></ClLinks> values by using <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> or <DictionaryLink  term={"with-slots"}><b>with-slots</b></DictionaryLink> or by invoking a reader generic function, or to run other <ClLinks  term={"method"}><i>methods</i></ClLinks> that were applicable to <ClLinks  term={"instance"}><i>instances</i></ClLinks> of the original <ClLinks  term={"class"}><i>class</i></ClLinks>. 



**Examples:**
```lisp
See the example for the *function* **change-class**. 
```
**Exceptional Situations:** 



The system-supplied primary <ClLinks  term={"method"}><i>method</i></ClLinks> on **update-instance-for-different-class** signals an error if an initialization argument is supplied that is not declared as valid. 



**See Also:** 



<DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>, <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, Section 7.2 (Changing the Class of an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, or by defining <ClLinks  term={"method"}><i>methods</i></ClLinks> for **update-instance-for-different-class** or <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The keyword name of each keyword parameter specifier in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of any <ClLinks  term={"method"}><i>method</i></ClLinks> defined on **update-instance-for-different-class** or <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is declared as a valid *initarg* name for all *classes* for which that <ClLinks  term={"method"}><i>method</i></ClLinks> is applicable. 



The value returned by **update-instance-for-different-class** is ignored by <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>. 



