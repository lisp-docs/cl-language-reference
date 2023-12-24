**class-of** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"class-of"}><b>class-of</b></ClLinks> *object ! class* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"class"}><i>class</i></ClLinks>—a *class object*. 



**Description:** 



Returns the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of which the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a *direct instance*. 



**Examples:**
```lisp

(class-of ’fred) *!* #<BUILT-IN-CLASS SYMBOL 610327300> 
(class-of 2/3) *!* #<BUILT-IN-CLASS RATIO 610326642> 
(defclass book () ()) *!* #<STANDARD-CLASS BOOK 33424745> 
(class-of (make-instance ’book)) *!* #<STANDARD-CLASS BOOK 33424745> 
(defclass novel (book) ()) *!* #<STANDARD-CLASS NOVEL 33424764> 
(class-of (make-instance ’novel)) *!* #<STANDARD-CLASS NOVEL 33424764> 



(defstruct kons kar kdr) *!* KONS 
(class-of (make-kons :kar 3 :kdr 4)) *!* #<STRUCTURE-CLASS KONS 250020317> 

```
**See Also:** 



<ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks>, <ClLinks styled={true} term={"type-of"}><b>type-of</b></ClLinks> 



