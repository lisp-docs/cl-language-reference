**type** <ClLinks styled={true} term={"declaration"}><i>Declaration</i></ClLinks> 



**Syntax:** 



(type *typespec \{var\}*\*) 



(*typespec \{var\}*\*) 



**Arguments:** 



*typespec*—a *type specifier* . 



*var*—a *variable name*. 



**Valid Context:** 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> or <ClLinks styled={true} term={"proclamation"}><i>proclamation</i></ClLinks> 



**Binding Types Aected:** 



<ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> 



**Description:** 



A↵ects only variable <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> and specifies that the *vars* take on values only of the specified *typespec*. In particular, values assigned to the variables by <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks>, as well as the initial values of the *vars* must be of the specified *typespec*. <ClLinks styled={true} term={"type"}><b>type</b></ClLinks> declarations never apply to function <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> (see <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks>). 



A type declaration of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> defined by <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> is equivalent to wrapping a <ClLinks styled={true} term={"the"}><b>the</b></ClLinks> expression around the expansion of that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, although the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s *macro expansion* is not actually a↵ected. 



The meaning of a type declaration is equivalent to changing each reference to a variable (*var*) within the scope of the declaration to (the *typespec var*), changing each expression assigned to the variable (*new-value*) within the scope of the declaration to (the *typespec new-value*), and executing (the *typespec var*) at the moment the scope of the declaration is entered. 



A <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> declaration is valid in all declarations. The interpretation of a type declaration is as follows: 



1\. During the execution of any reference to the declared variable within the scope of the declaration, the consequences are undefined if the value of the declared variable is not of the declared <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



2\. During the execution of any <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks> of the declared variable within the scope of the declaration, the consequences are undefined if the newly assigned value of the declared variable is not of the declared <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



3\. At the moment the scope of the declaration is entered, the consequences are undefined if the value of the declared variable is not of the declared <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>. 



Evaluation and 



 



 



<ClLinks styled={true} term={"type"}><b>type</b></ClLinks> 



A <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> declaration a↵ects only variable references within its scope. 



If nested <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> declarations refer to the same variable, then the value of the variable must be a member of the intersection of the declared <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>. 



If there is a local type declaration for a dynamic variable, and there is also a global type proclamation for that same variable, then the value of the variable within the scope of the local declaration must be a member of the intersection of the two declared <ClLinks styled={true} term={"type"}><i>types</i></ClLinks>. 



<ClLinks styled={true} term={"type"}><b>type</b></ClLinks> declarations can be *free declarations* or *bound declarations*. 



A <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> cannot be both the name of a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and the name of a declaration. Defining a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> as the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, <ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks>, <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>, or <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, when the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> has been *declared* as a declaration name, or vice versa, signals an error. 



Within the *lexical scope* of an <ClLinks styled={true} term={"array"}><b>array</b></ClLinks> type declaration, all references to *array elements* are assumed to satisfy the *expressed array element type* (as opposed to the *upgraded array element type*). A compiler can treat the code within the scope of the <ClLinks styled={true} term={"array"}><b>array</b></ClLinks> type declaration as if each <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> of an *array element* were surrounded by an appropriate <ClLinks styled={true} term={"the"}><b>the</b></ClLinks> form. 



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



<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>, <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks>, <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> 



**Notes:** 



(*typespec \{var\}*\*) is an abbreviation for (type *typespec \{var\}*\*). 



A <ClLinks styled={true} term={"type"}><b>type</b></ClLinks> declaration for the arguments to a function does not necessarily imply anything about the type of the result. The following function is not permitted to be compiled using *implementation-dependent fixnum*-only arithmetic: 



(defun f (x y) (declare (fixnum x y)) (+ x y)) 



To see why, consider (f most-positive-fixnum 1). Common Lisp defines that F must return a *bignum* here, rather than signal an error or produce a mathematically incorrect result. If you have special knowledge such “<ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks> overflow” cases will not come up, you can declare the result value to be in the <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks> range, enabling some compilers to use more ecient arithmetic: 



(defun f (x y) 



(declare (fixnum x y)) 



(the fixnum (+ x y))) 



Note, however, that in the three-argument case, because of the possibility of an implicit Evaluation and 



 



 



intermediate value growing too large, the following will not cause *implementation-dependent fixnum*-only arithmetic to be used: 



(defun f (x y) 



(declare (fixnum x y z)) 



(the fixnum (+ x y z))) 



To see why, consider (f most-positive-fixnum 1 -1). Although the arguments and the result are all <ClLinks styled={true} term={"fixnum"}><i>fixnums</i></ClLinks>, an intermediate value is not a <ClLinks styled={true} term={"fixnum"}><i>fixnum</i></ClLinks>. If it is important that *implementation-dependent fixnum*-only arithmetic be selected in <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks> that provide it, consider writing something like this instead: 



(defun f (x y) 



(declare (fixnum x y z)) 



(the fixnum (+ (the fixnum (+ x y)) z))) 



