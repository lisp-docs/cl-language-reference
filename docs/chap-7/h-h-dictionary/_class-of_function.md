**class-of** *Function* 



**Syntax:** 



**class-of** *object ! class* 



**Arguments and Values:** 



*object*—an *object*. 



*class*—a *class object*. 



**Description:** 



Returns the *class* of which the *object* is a *direct instance*. 



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



**make-instance**, **type-of** 



