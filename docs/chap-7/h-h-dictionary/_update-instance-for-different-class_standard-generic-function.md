**update-instance-for-different-class** *Standard Generic Function* 



**Syntax:** 



**update-instance-for-different-class** *previous current* &amp;rest *initargs* &amp;key &amp;allow-other-keys *→ implementation-dependent* 



**Method Signatures:** 



**update-instance-for-different-class** (*previous* <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>) 



(*current* <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>) 



&amp;rest *initargs* 



**Arguments and Values:** 



*previous*—a copy of the original <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. 



*current*—the original <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> (altered). 



*initargs*—an *initialization argument list*. 



**Description:** 



The generic function **update-instance-for-different-class** is not intended to be called by program mers. Programmers may write <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for it. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **update-instance-for-different-class** is called only by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink>. 



The system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on **update-instance-for-different-class** checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. This <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> then initializes <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> with values according to the *initargs*, and initializes the newly added <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> with values according to their :initform forms. It does this by calling the generic function <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the instance (*current*), a list of <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of the newly added <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm>, and the *initargs* it received. Newly added <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> are those *local slots* for which no <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> of the same name exists in the *previous* class. 



<GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> for **update-instance-for-different-class** can be defined to specify actions to be taken when an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is updated. If only *after methods* for **update-instance-for-different-class** are defined, they will be run after the system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for initialization and therefore will not interfere with the default behavior of **update-instance-for-different-class**. 



<GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> on **update-instance-for-different-class** can be defined to initialize <GlossaryTerm styled={true} term={"slot"}><i>slots</i></GlossaryTerm> differently from <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink>. The default behavior of <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink> is described in Section 7.2 (Changing the Class of an Instance). 







 



 



The arguments to **update-instance-for-different-class** are computed by <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink>. When <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink> is invoked on an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>, a copy of that <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> is made; <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink> then de structively alters the original <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. The first argument to **update-instance-for-different-class**, *previous*, is that copy; it holds the old <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> values temporarily. This argument has dynamic extent within <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink>; if it is referenced in any way once **update-instance-for-different-class** returns, the results are undefined. The second argument to **update-instance-for-different-class**, *current*, is the altered original <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm>. The intended use of *previous* is to extract old <GlossaryTerm styled={true} term={"slot"}><i>slot</i></GlossaryTerm> values by using <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink> or <DictionaryLink styled={true} term={"with-slots"}><b>with-slots</b></DictionaryLink> or by invoking a reader generic function, or to run other <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> that were applicable to <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> of the original <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. 



**Examples:**
```lisp

See the example for the *function* **change-class**. 

```
**Exceptional Situations:** 



The system-supplied primary <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on **update-instance-for-different-class** signals an error if an initialization argument is supplied that is not declared as valid. 



**See Also:** 



<DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink>, <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, Section 7.2 (Changing the Class of an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, or by defining <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for **update-instance-for-different-class** or <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The keyword name of each keyword parameter specifier in the *lambda list* of any <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> defined on **update-instance-for-different-class** or <DictionaryLink styled={true} term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is declared as a valid *initarg* name for all *classes* for which that <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is applicable. 



The value returned by **update-instance-for-different-class** is ignored by <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink>. 



