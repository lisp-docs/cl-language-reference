**class-of** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"class-of"}><b>class-of</b></DictionaryLink> *object ! class* 



**Arguments and Values:** 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>—a *class object*. 



**Description:** 



Returns the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of which the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"direct instance"}><i>direct instance</i></GlossaryTerm>. 



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



<DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink>, <DictionaryLink  term={"type-of"}><b>type-of</b></DictionaryLink> 



