**class-of** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"class-of"}><b>class-of</b></DictionaryLink> *object ! class* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>—a *class object*. 



**Description:** 



Returns the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of which the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a *direct instance*. 



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



<DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink styled={true} term={"type-of"}><b>type-of</b></DictionaryLink> 



