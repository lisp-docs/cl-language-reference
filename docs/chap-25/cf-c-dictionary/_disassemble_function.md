**disassemble** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"disassemble"}><b>disassemble</b></ClLinks> *fn →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*fn*—an *extended function designator* or a *lambda expression*. 



**Description:** 



The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"disassemble"}><b>disassemble</b></ClLinks> is a debugging aid that composes symbolic instructions or expressions in some <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> language which represent the code used to produce the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> which is or is named by the argument *fn*. The result is displayed to *standard output* in an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> format. 



If *fn* is a *lambda expression* or *interpreted function*, it is compiled first and the result is disassembled. 



If the *fn designator* is a *function name*, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that it <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> is disassembled. (If that <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is an *interpreted function*, it is first compiled but the result of this implicit compilation is not installed.) 



**Examples:**
```lisp
(defun f (a) (1+ a)) → F 
(eq (symbol-function ’f) 
    (progn (disassemble ’f) 
	   (symbol-function ’f))) → true 
```
**Affected By:** 



**\*standard-output\***. 



**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if *fn* is not an *extended function designator* or a *lambda expression*. 



**documentation, (setf documentation)** *Standard Generic Function* 



**Syntax:** 



**documentation** *x doc-type → documentation* 



**(setf documentation)** *new-value x doc-type → new-value* 







 



 



**documentation, (setf documentation)** 



**Argument Precedence Order:** 



*doc-type*, <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> 



**Method Signatures:** 



**Functions, Macros, and Special Forms:** 



**documentation** (*x* <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>) (*doc-type* (eql ’t)) 



**documentation** (*x* <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>) (*doc-type* (eql ’function)) 



**documentation** (*x* <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>) (*doc-type* (eql ’function)) 



**documentation** (*x* <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>) (*doc-type* (eql ’compiler-macro)) 



**documentation** (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’function)) 



**documentation** (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’compiler-macro)) 



**documentation** (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’setf)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>) (*doc-type* (eql ’function)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>) (*doc-type* (eql ’function)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"list"}><b>list</b></ClLinks>) (*doc-type* (eql ’compiler-macro)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’function)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’compiler-macro)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’setf)) 



**Method Combinations:** 



**documentation** (*x* <ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks>) (*doc-type* (eql ’t)) 



**documentation** (*x* <ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks>) (*doc-type* (eql ’method-combination)) 



**documentation** (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’method-combination)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks>) (*doc-type* (eql ’method-combination)) **(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’method-combination)) **Methods:** 







 



 



**documentation, (setf documentation)** 



**documentation** (*x* <ClLinks styled={true} term={"standard-method"}><b>standard-method</b></ClLinks>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"standard-method"}><b>standard-method</b></ClLinks>) (*doc-type* (eql ’t)) 



**Packages:** 



**documentation** (*x* <ClLinks styled={true} term={"package"}><b>package</b></ClLinks>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"package"}><b>package</b></ClLinks>) (*doc-type* (eql ’t)) 



**Types, Classes, and Structure Names:** 



**documentation** (*x* <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>) (*doc-type* (eql ’t)) 



**documentation** (*x* <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>) (*doc-type* (eql ’type)) 



**documentation** (*x* <ClLinks styled={true} term={"structure-class"}><b>structure-class</b></ClLinks>) (*doc-type* (eql ’t)) 



**documentation** (*x* <ClLinks styled={true} term={"structure-class"}><b>structure-class</b></ClLinks>) (*doc-type* (eql ’type)) 



**documentation** (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’type)) 



**documentation** (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’structure)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"standard-class"}><b>standard-class</b></ClLinks>) (*doc-type* (eql ’type)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"structure-class"}><b>structure-class</b></ClLinks>) (*doc-type* (eql ’t)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"structure-class"}><b>structure-class</b></ClLinks>) (*doc-type* (eql ’type)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’type)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’structure)) 



**Variables:** 



**documentation** (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’variable)) 



**(setf documentation)** *new-value* (*x* <ClLinks styled={true} term={"symbol"}><b>symbol</b></ClLinks>) (*doc-type* (eql ’variable)) 



**Arguments and Values:** 



*x*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*doc-type*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*documentation*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*new-value*—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 







 



 



**documentation, (setf documentation)** 



**Description:** 



The *generic function* **documentation** returns the *documentation string* associated with the given <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> if it is available; otherwise it returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



The *generic function* (setf documentation) updates the *documentation string* associated with *x* to *new-value*. If *x* is a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, it must be of the form (setf <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>). 



*Documentation strings* are made available for debugging purposes. *Conforming programs* are permitted to use *documentation strings* when they are present, but should not depend for their correct behavior on the presence of those *documentation strings*. An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is permitted to discard *documentation strings* at any time for <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> reasons. 



The nature of the *documentation string* returned depends on the *doc-type*, as follows: 



**compiler-macro** 



Returns the *documentation string* of the *compiler macro* whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is the *function name x*. 



<ClLinks styled={true} term={"function"}><b>function</b></ClLinks> 



If *x* is a *function name*, returns the *documentation string* of the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, or *special operator* whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is *x*. 



If *x* is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, returns the *documentation string* associated with *x*. 



<ClLinks styled={true} term={"method-combination"}><b>method-combination</b></ClLinks> 



If *x* is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, returns the *documentation string* of the *method combination* whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is *x*. 



If *x* is a *method combination*, returns the *documentation string* associated with *x*. 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> 



Returns the *documentation string* of the *setf expander* whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is the *symbol x*. 



**structure** 



Returns the *documentation string* associated with the *structure name x*. 



<ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



Returns a *documentation string* specialized on the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of the argument *x* itself. For example, if *x* is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, the *documentation string* associated with the *function x* is returned. 



<ClLinks styled={true} term={"type"}><b>type</b></ClLinks> 







 



 



If *x* is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, returns the *documentation string* of the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is the *symbol x*, if there is such a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. Otherwise, it returns the *documentation string* of the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> which is the *type specifier symbol x*. 



If *x* is a *structure class* or *standard class*, returns the *documentation string* associated with the *class x*. 



**variable** 



Returns the *documentation string* of the *dynamic variable* or *constant variable* whose <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> is the *symbol x*. 



A *conforming implementation* or a *conforming program* may extend the set of <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> that are acceptable as the *doc-type*. 



**Notes:** 



This standard prescribes no means to retrieve the *documentation strings* for individual slots specified in a <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> form, but <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> might still provide debugging tools and/or programming language extensions which manipulate this information. Implementors wishing to provide such support are encouraged to consult the *Metaobject Protocol* for suggestions about how this might be done. 



