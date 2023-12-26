**update-instance-for-different-class** <GlossaryTerm styled={true} term={"standard generic function"}><i>Standard Generic Function</i></GlossaryTerm> 



**Syntax:** 



**update-instance-for-different-class** *previous current* &amp;rest *initargs* &amp;key &amp;allow-other-keys → implementation-dependent 



**Method Signatures:** 



**update-instance-for-different-class** (*previous* <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) 



(*current* <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>) 



&amp;rest *initargs* 



**Arguments and Values:** 



*previous*—a copy of the original <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. 



*current*—the original <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> (altered). 



*initargs*—an <GlossaryTerm styled={true} term={"initialization argument list"}><i>initialization argument list</i></GlossaryTerm>. 



**Description:** 



The generic function **update-instance-for-different-class** is not intended to be called by program mers. Programmers may write <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for it. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> **update-instance-for-different-class** is called only by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>. 



The system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on **update-instance-for-different-class** checks the validity of *initargs* and signals an error if an *initarg* is supplied that is not declared as valid. This <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> then initializes <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> with values according to the *initargs*, and initializes the newly added <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> with values according to their :initform forms. It does this by calling the generic function <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> with the following arguments: the instance (*current*), a list of <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> of the newly added <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm>, and the *initargs* it received. Newly added <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> are those <GlossaryTerm styled={true} term={"local slot"}><i>local slots</i></GlossaryTerm> for which no <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> of the same name exists in the *previous* class. 



<GlossaryTerm  term={"method"}><i>Methods</i></GlossaryTerm> for **update-instance-for-different-class** can be defined to specify actions to be taken when an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is updated. If only <GlossaryTerm styled={true} term={"after method"}><i>after methods</i></GlossaryTerm> for **update-instance-for-different-class** are defined, they will be run after the system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for initialization and therefore will not interfere with the default behavior of **update-instance-for-different-class**. 



<GlossaryTerm  term={"method"}><i>Methods</i></GlossaryTerm> on **update-instance-for-different-class** can be defined to initialize <GlossaryTerm  term={"slot"}><i>slots</i></GlossaryTerm> differently from <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>. The default behavior of <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is described in Section 7.2 (Changing the Class of an Instance). 







 



 



The arguments to **update-instance-for-different-class** are computed by <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>. When <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> is invoked on an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>, a copy of that <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> is made; <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> then de structively alters the original <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. The first argument to **update-instance-for-different-class**, *previous*, is that copy; it holds the old <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> values temporarily. This argument has dynamic extent within <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>; if it is referenced in any way once **update-instance-for-different-class** returns, the results are undefined. The second argument to **update-instance-for-different-class**, *current*, is the altered original <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm>. The intended use of *previous* is to extract old <GlossaryTerm  term={"slot"}><i>slot</i></GlossaryTerm> values by using <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> or <DictionaryLink  term={"with-slots"}><b>with-slots</b></DictionaryLink> or by invoking a reader generic function, or to run other <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> that were applicable to <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> of the original <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>. 



**Examples:**
```lisp
See the example for the *function* **change-class**. 
```
**Exceptional Situations:** 



The system-supplied primary <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> on **update-instance-for-different-class** signals an error if an initialization argument is supplied that is not declared as valid. 



**See Also:** 



<DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>, <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>, Section 7.2 (Changing the Class of an Instance), Section 7.1.4 (Rules for Initialization Arguments), Section 7.1.2 (Declaring the Validity of Initialization Arguments) 



**Notes:** 



*Initargs* are declared as valid by using the :initarg option to <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, or by defining <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm> for **update-instance-for-different-class** or <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink>. The keyword name of each keyword parameter specifier in the <GlossaryTerm styled={true} term={"lambda list"}><i>lambda list</i></GlossaryTerm> of any <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> defined on **update-instance-for-different-class** or <DictionaryLink  term={"shared-initialize"}><b>shared-initialize</b></DictionaryLink> is declared as a valid *initarg* name for all *classes* for which that <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> is applicable. 



The value returned by **update-instance-for-different-class** is ignored by <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink>. 



