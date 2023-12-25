**get** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"get"}><b>get</b></ClLinks> *symbol indicator* &amp;optional *default → value* 



<!-- **(setf (get** *symbol indicator* &amp;optional *default<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-value***)**  -->
**(setf (get** *symbol indicator* &amp;optional *default***)** *new-value***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*default*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"value"}><i>value</i></ClLinks>—if the indicated property exists, the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that is its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>; otherwise, the specified *default*. *new-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"get"}><b>get</b></ClLinks> finds a <ClLinks styled={true} term={"property"}><i>property</i></ClLinks> on the *property list* <sub>2</sub> of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> whose *property indicator* is <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to <ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>, and returns its corresponding *property value*. If there are multiple *properties*<sub>1</sub> with that *property indicator* , <ClLinks styled={true} term={"get"}><b>get</b></ClLinks> uses the first such <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>. If there is no <ClLinks styled={true} term={"property"}><i>property</i></ClLinks> with that *property indicator* , *default* is returned. 







 



 



<ClLinks styled={true} term={"get"}><b>get</b></ClLinks> 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"get"}><b>get</b></ClLinks> may be used to associate a new <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> with an existing indicator already on the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>’s *property list*, or to create a new assocation if none exists. If there are multiple *properties*<sub>1</sub> with that *property indicator* , <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"get"}><b>get</b></ClLinks> associates the *new-value* with the first such <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>. When a <ClLinks styled={true} term={"get"}><b>get</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is used as a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is ignored. 



**Examples:**
```lisp
(defun make-person (first-name last-name) 
  (let ((person (gensym "PERSON"))) 
    (setf (get person ’first-name) first-name) 
    (setf (get person ’last-name) last-name) 
    person)) → MAKE-PERSON 
(defvar \*john\* (make-person "John" "Dow")) → \*JOHN\* 
\*john\* → #:PERSON4603 
(defvar \*sally\* (make-person "Sally" "Jones")) → \*SALLY\* 
(get \*john\* ’first-name) → "John" 
(get \*sally\* ’last-name) → "Jones" 
(defun marry (man woman married-name) 
  (setf (get man ’wife) woman) 
  (setf (get woman ’husband) man) 
  (setf (get man ’last-name) married-name) 
  (setf (get woman ’last-name) married-name) 
  married-name) → MARRY 
(marry \*john\* \*sally\* "Dow-Jones") → "Dow-Jones" 
(get \*john\* ’last-name) → "Dow-Jones" 
(get (get \*john\* ’wife) ’first-name) → "Sally" 
(symbol-plist \*john\*) 
→ (WIFE #:PERSON4604 LAST-NAME "Dow-Jones" FIRST-NAME "John") 
(defmacro age (person &optional (default ”thirty-something)) 
  ‘(get ,person ’age ,default)) → AGE 
(age \*john\*) → THIRTY-SOMETHING 
(age \*john\* 20) → 20 
(setf (age \*john\*) 25) → 25 
(age \*john\*) → 25 
(age \*john\* 20) → 25 
```
**Exceptional Situations:** 



Should signal an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks>, <ClLinks styled={true} term={"symbol-plist"}><b>symbol-plist</b></ClLinks>, <ClLinks styled={true} term={"remprop"}><b>remprop</b></ClLinks> 



**Notes:** 



(get x y) *≡* (getf (symbol-plist x) y) 







 



 



<ClLinks styled={true} term={"number"}><i>Numbers</i></ClLinks> and <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> are not recommended for use as <ClLinks styled={true} term={"indicator"}><i>indicators</i></ClLinks> in portable code since <ClLinks styled={true} term={"get"}><b>get</b></ClLinks> tests with <ClLinks styled={true} term={"eq"}><b>eq</b></ClLinks> rather than <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks>, and consequently the effect of using such <ClLinks styled={true} term={"indicator"}><i>indicators</i></ClLinks> is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



There is no way using <ClLinks styled={true} term={"get"}><b>get</b></ClLinks> to distinguish an absent property from one whose value is *default*. However, see <ClLinks styled={true} term={"get-properties"}><b>get-properties</b></ClLinks>. 



