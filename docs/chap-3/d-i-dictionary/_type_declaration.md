**type** <ClLinks  term={"declaration"}><i>Declaration</i></ClLinks> 



**Syntax:** 



(type *typespec \{var\}*\*) 



(*typespec \{var\}*\*) 



**Arguments:** 



*typespec*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> . 



*var*—a *variable name*. 



**Valid Context:** 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks> or <ClLinks  term={"proclamation"}><i>proclamation</i></ClLinks> 



**Binding Types Aected:** 



<ClLinks  term={"variable"}><i>variable</i></ClLinks> 



**Description:** 



A↵ects only variable <ClLinks  term={"binding"}><i>bindings</i></ClLinks> and specifies that the *vars* take on values only of the specified *typespec*. In particular, values assigned to the variables by <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink>, as well as the initial values of the *vars* must be of the specified *typespec*. <DictionaryLink  term={"type"}><b>type</b></DictionaryLink> declarations never apply to function <ClLinks  term={"binding"}><i>bindings</i></ClLinks> (see <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink>). 



A type declaration of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> defined by <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> is equivalent to wrapping a <DictionaryLink  term={"the"}><b>the</b></DictionaryLink> expression around the expansion of that <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, although the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <GlossaryTerm styled={true} term={"macro expansion"}><i>macro expansion</i></GlossaryTerm> is not actually a↵ected. 



The meaning of a type declaration is equivalent to changing each reference to a variable (*var*) within the scope of the declaration to (the *typespec var*), changing each expression assigned to the variable (*new-value*) within the scope of the declaration to (the *typespec new-value*), and executing (the *typespec var*) at the moment the scope of the declaration is entered. 



A <ClLinks  term={"type"}><i>type</i></ClLinks> declaration is valid in all declarations. The interpretation of a type declaration is as follows: 



1\. During the execution of any reference to the declared variable within the scope of the declaration, the consequences are undefined if the value of the declared variable is not of the declared <ClLinks  term={"type"}><i>type</i></ClLinks>. 



2\. During the execution of any <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> of the declared variable within the scope of the declaration, the consequences are undefined if the newly assigned value of the declared variable is not of the declared <ClLinks  term={"type"}><i>type</i></ClLinks>. 



3\. At the moment the scope of the declaration is entered, the consequences are undefined if the value of the declared variable is not of the declared <ClLinks  term={"type"}><i>type</i></ClLinks>. 



Evaluation and 



 



 



<DictionaryLink  term={"type"}><b>type</b></DictionaryLink> 



A <ClLinks  term={"type"}><i>type</i></ClLinks> declaration a↵ects only variable references within its scope. 



If nested <ClLinks  term={"type"}><i>type</i></ClLinks> declarations refer to the same variable, then the value of the variable must be a member of the intersection of the declared <ClLinks  term={"type"}><i>types</i></ClLinks>. 



If there is a local type declaration for a dynamic variable, and there is also a global type proclamation for that same variable, then the value of the variable within the scope of the local declaration must be a member of the intersection of the two declared <ClLinks  term={"type"}><i>types</i></ClLinks>. 



<DictionaryLink  term={"type"}><b>type</b></DictionaryLink> declarations can be <GlossaryTerm styled={true} term={"free declaration"}><i>free declarations</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"bound declaration"}><i>bound declarations</i></GlossaryTerm>. 



A <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> cannot be both the name of a <ClLinks  term={"type"}><i>type</i></ClLinks> and the name of a declaration. Defining a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> as the <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"class"}><i>class</i></ClLinks>, <ClLinks  term={"structure"}><i>structure</i></ClLinks>, <ClLinks  term={"condition"}><i>condition</i></ClLinks>, or <ClLinks  term={"type"}><i>type</i></ClLinks>, when the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> has been *declared* as a declaration name, or vice versa, signals an error. 



Within the <GlossaryTerm styled={true} term={"lexical scope"}><i>lexical scope</i></GlossaryTerm> of an <DictionaryLink  term={"array"}><b>array</b></DictionaryLink> type declaration, all references to *array elements* are assumed to satisfy the <GlossaryTerm styled={true} term={"expressed array element type"}><i>expressed array element type</i></GlossaryTerm> (as opposed to the <GlossaryTerm styled={true} term={"upgraded array element type"}><i>upgraded array element type</i></GlossaryTerm>). A compiler can treat the code within the scope of the <DictionaryLink  term={"array"}><b>array</b></DictionaryLink> type declaration as if each <ClLinks  term={"access"}><i>access</i></ClLinks> of an *array element* were surrounded by an appropriate <DictionaryLink  term={"the"}><b>the</b></DictionaryLink> form. 



**Examples:**
```lisp
(defun f (x y) 
  (declare (type fixnum x y)) 
  (let ((z (+ x y))) 
    (declare (type fixnum z)) 
    z)) *!* F 
(f 1 2) *!* 3 
;; The previous definition of F is equivalent to 
(defun f (x y) 
  ;; This declaration is a shorthand form of the TYPE declaration 
  (declare (fixnum x y)) 
  ;; To declare the type of a return value, it’s not necessary to 
  ;; create a named variable. A THE special form can be used instead. 
  (the fixnum (+ x y))) *!* F 
(f 1 2) *!* 3 
(defvar \*one-array\* (make-array 10 :element-type ’(signed-byte 5))) 
(defvar \*another-array\* (make-array 10 :element-type ’(signed-byte 8))) 
(defun frob (an-array) 
  (declare (type (array (signed-byte 5) 1) an-array)) 
  (setf (aref an-array 1) 31) 
  (setf (aref an-array 2) 127) 
  (setf (aref an-array 3) (\* 2 (aref an-array 3))) 
  (let ((foo 0)) 
    
    
    **type** 
    (declare (type (signed-byte 5) foo)) 
    (setf foo (aref an-array 0)))) 
(frob \*one-array\*) 
(frob \*another-array\*) 
The above definition of frob is equivalent to: 
(defun frob (an-array) 
  (setf (the (signed-byte 5) (aref an-array 1)) 31) 
  (setf (the (signed-byte 5) (aref an-array 2)) 127) 
  (setf (the (signed-byte 5) (aref an-array 3)) 
	(\* 2 (the (signed-byte 5) (aref an-array 3)))) 
  (let ((foo 0)) 
    (declare (type (signed-byte 5) foo)) 
    (setf foo (the (signed-byte 5) (aref an-array 0))))) 
Given an implementation in which *fixnums* are 29 bits but **fixnum** *arrays* are upgraded to signed 32-bit *arrays*, the following could be compiled with all *fixnum* arithmetic: 
(defun bump-counters (counters) 
  (declare (type (array fixnum \*) bump-counters)) 
  (dotimes (i (length counters)) 
    (incf (aref counters i)))) 
```
**See Also:** 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink> 



**Notes:** 



(*typespec \{var\}*\*) is an abbreviation for (type *typespec \{var\}*\*). 



A <DictionaryLink  term={"type"}><b>type</b></DictionaryLink> declaration for the arguments to a function does not necessarily imply anything about the type of the result. The following function is not permitted to be compiled using *implementation-dependent fixnum*-only arithmetic: 



(defun f (x y) (declare (fixnum x y)) (+ x y)) 



To see why, consider (f most-positive-fixnum 1). Common Lisp defines that F must return a *bignum* here, rather than signal an error or produce a mathematically incorrect result. If you have special knowledge such “<ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks> overflow” cases will not come up, you can declare the result value to be in the <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks> range, enabling some compilers to use more ecient arithmetic: 



(defun f (x y) 



(declare (fixnum x y)) 



(the fixnum (+ x y))) 



Note, however, that in the three-argument case, because of the possibility of an implicit Evaluation and 



 



 



intermediate value growing too large, the following will not cause *implementation-dependent fixnum*-only arithmetic to be used: 



(defun f (x y) 



(declare (fixnum x y z)) 



(the fixnum (+ x y z))) 



To see why, consider (f most-positive-fixnum 1 -1). Although the arguments and the result are all <ClLinks  term={"fixnum"}><i>fixnums</i></ClLinks>, an intermediate value is not a <ClLinks  term={"fixnum"}><i>fixnum</i></ClLinks>. If it is important that *implementation-dependent fixnum*-only arithmetic be selected in <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> that provide it, consider writing something like this instead: 



(defun f (x y) 



(declare (fixnum x y z)) 



(the fixnum (+ (the fixnum (+ x y)) z))) 



