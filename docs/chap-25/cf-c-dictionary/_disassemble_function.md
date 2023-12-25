**disassemble** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"disassemble"}><b>disassemble</b></DictionaryLink> *fn →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*fn*—an *extended function designator* or a *lambda expression*. 



**Description:** 



The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"disassemble"}><b>disassemble</b></DictionaryLink> is a debugging aid that composes symbolic instructions or expressions in some <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> language which represent the code used to produce the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> which is or is named by the argument *fn*. The result is displayed to *standard output* in an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> format. 



If *fn* is a *lambda expression* or *interpreted function*, it is compiled first and the result is disassembled. 



If the *fn designator* is a *function name*, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that it <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> is disassembled. (If that <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is an *interpreted function*, it is first compiled but the result of this implicit compilation is not installed.) 



**Examples:**
```lisp

(defun f (a) (1+ a)) *→* F 
(eq (symbol-function ’f) 
    (progn (disassemble ’f) 
	   (symbol-function ’f))) *→ true* 

```
**Affected By:** 



**\*standard-output\***. 



**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if *fn* is not an *extended function designator* or a *lambda expression*. 



**documentation, (setf documentation)** *Standard Generic Function* 



**Syntax:** 



**documentation** *x doc-type → documentation* 



**(setf documentation)** *new-value x doc-type → new-value* 







 



 



**documentation, (setf documentation)** 



**Argument Precedence Order:** 



*doc-type*, <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> 



**Method Signatures:** 



**Functions, Macros, and Special Forms:** 



**documentation** (*x* <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**documentation** (*x* <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>) (*doc-type* (eql ’function)) 



**documentation** (*x* <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>) (*doc-type* (eql ’function)) 



**documentation** (*x* <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>) (*doc-type* (eql ’compiler-macro)) 



**documentation** (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’function)) 



**documentation** (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’compiler-macro)) 



**documentation** (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’setf)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>) (*doc-type* (eql ’function)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>) (*doc-type* (eql ’function)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"list"}><b>list</b></DictionaryLink>) (*doc-type* (eql ’compiler-macro)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’function)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’compiler-macro)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’setf)) 



**Method Combinations:** 



**documentation** (*x* <DictionaryLink styled={true} term={"method-combination"}><b>method-combination</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**documentation** (*x* <DictionaryLink styled={true} term={"method-combination"}><b>method-combination</b></DictionaryLink>) (*doc-type* (eql ’method-combination)) 



**documentation** (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’method-combination)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"method-combination"}><b>method-combination</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"method-combination"}><b>method-combination</b></DictionaryLink>) (*doc-type* (eql ’method-combination)) **(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’method-combination)) **Methods:** 







 



 



**documentation, (setf documentation)** 



**documentation** (*x* <DictionaryLink styled={true} term={"standard-method"}><b>standard-method</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"standard-method"}><b>standard-method</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**Packages:** 



**documentation** (*x* <DictionaryLink styled={true} term={"package"}><b>package</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"package"}><b>package</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**Types, Classes, and Structure Names:** 



**documentation** (*x* <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**documentation** (*x* <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>) (*doc-type* (eql ’type)) 



**documentation** (*x* <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**documentation** (*x* <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink>) (*doc-type* (eql ’type)) 



**documentation** (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’type)) 



**documentation** (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’structure)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"standard-class"}><b>standard-class</b></DictionaryLink>) (*doc-type* (eql ’type)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"structure-class"}><b>structure-class</b></DictionaryLink>) (*doc-type* (eql ’type)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’type)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’structure)) 



**Variables:** 



**documentation** (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’variable)) 



**(setf documentation)** *new-value* (*x* <DictionaryLink styled={true} term={"symbol"}><b>symbol</b></DictionaryLink>) (*doc-type* (eql ’variable)) 



**Arguments and Values:** 



*x*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*doc-type*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*documentation*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*new-value*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 







 



 



**documentation, (setf documentation)** 



**Description:** 



The *generic function* **documentation** returns the *documentation string* associated with the given <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> if it is available; otherwise it returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



The *generic function* (setf documentation) updates the *documentation string* associated with *x* to *new-value*. If *x* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, it must be of the form (setf <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>). 



*Documentation strings* are made available for debugging purposes. *Conforming programs* are permitted to use *documentation strings* when they are present, but should not depend for their correct behavior on the presence of those *documentation strings*. An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted to discard *documentation strings* at any time for <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> reasons. 



The nature of the *documentation string* returned depends on the *doc-type*, as follows: 



**compiler-macro** 



Returns the *documentation string* of the *compiler macro* whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is the *function name x*. 



<DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink> 



If *x* is a *function name*, returns the *documentation string* of the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, or *special operator* whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is *x*. 



If *x* is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, returns the *documentation string* associated with *x*. 



<DictionaryLink styled={true} term={"method-combination"}><b>method-combination</b></DictionaryLink> 



If *x* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, returns the *documentation string* of the *method combination* whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is *x*. 



If *x* is a *method combination*, returns the *documentation string* associated with *x*. 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> 



Returns the *documentation string* of the *setf expander* whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is the *symbol x*. 



**structure** 



Returns the *documentation string* associated with the *structure name x*. 



<DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



Returns a *documentation string* specialized on the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of the argument *x* itself. For example, if *x* is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, the *documentation string* associated with the *function x* is returned. 



<DictionaryLink styled={true} term={"type"}><b>type</b></DictionaryLink> 







 



 



If *x* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, returns the *documentation string* of the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is the *symbol x*, if there is such a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>. Otherwise, it returns the *documentation string* of the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> which is the *type specifier symbol x*. 



If *x* is a *structure class* or *standard class*, returns the *documentation string* associated with the *class x*. 



**variable** 



Returns the *documentation string* of the *dynamic variable* or *constant variable* whose <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is the *symbol x*. 



A *conforming implementation* or a *conforming program* may extend the set of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are acceptable as the *doc-type*. 



**Notes:** 



This standard prescribes no means to retrieve the *documentation strings* for individual slots specified in a <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> form, but <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> might still provide debugging tools and/or programming language extensions which manipulate this information. Implementors wishing to provide such support are encouraged to consult the *Metaobject Protocol* for suggestions about how this might be done. 



