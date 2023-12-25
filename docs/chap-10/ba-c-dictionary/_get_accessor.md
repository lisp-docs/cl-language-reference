**get** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"get"}><b>get</b></ClLinks> *symbol indicator* &amp;optional *default → value* 



<!-- **(setf (get** *symbol indicator* &amp;optional *default<ClLinks  term={"t"}><b>*)</b></ClLinks> *new-value***)**  -->
**(setf (get** *symbol indicator* &amp;optional *default***)** *new-value***)** 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"indicator"}><i>indicator</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*default*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks  term={"value"}><i>value</i></ClLinks>—if the indicated property exists, the <ClLinks  term={"object"}><i>object</i></ClLinks> that is its <ClLinks  term={"value"}><i>value</i></ClLinks>; otherwise, the specified *default*. *new-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks  term={"get"}><b>get</b></ClLinks> finds a <ClLinks  term={"property"}><i>property</i></ClLinks> on the *property list* <sub>2</sub> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> whose *property indicator* is <ClLinks  term={"identical"}><i>identical</i></ClLinks> to <ClLinks  term={"indicator"}><i>indicator</i></ClLinks>, and returns its corresponding *property value*. If there are multiple *properties*<sub>1</sub> with that *property indicator* , <ClLinks  term={"get"}><b>get</b></ClLinks> uses the first such <ClLinks  term={"property"}><i>property</i></ClLinks>. If there is no <ClLinks  term={"property"}><i>property</i></ClLinks> with that *property indicator* , *default* is returned. 







 



 



<ClLinks  term={"get"}><b>get</b></ClLinks> 



<ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"get"}><b>get</b></ClLinks> may be used to associate a new <ClLinks  term={"object"}><i>object</i></ClLinks> with an existing indicator already on the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s *property list*, or to create a new assocation if none exists. If there are multiple *properties*<sub>1</sub> with that *property indicator* , <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"get"}><b>get</b></ClLinks> associates the *new-value* with the first such <ClLinks  term={"property"}><i>property</i></ClLinks>. When a <ClLinks  term={"get"}><b>get</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> is used as a <ClLinks  term={"setf"}><b>setf</b></ClLinks> <ClLinks  term={"place"}><i>place</i></ClLinks>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <ClLinks  term={"value"}><i>value</i></ClLinks> is ignored. 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"type-error"}><b>type-error</b></ClLinks> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"getf"}><b>getf</b></ClLinks>, <ClLinks  term={"symbol-plist"}><b>symbol-plist</b></ClLinks>, <ClLinks  term={"remprop"}><b>remprop</b></ClLinks> 



**Notes:** 



(get x y) *≡* (getf (symbol-plist x) y) 







 



 



<ClLinks  term={"number"}><i>Numbers</i></ClLinks> and <ClLinks  term={"character"}><i>characters</i></ClLinks> are not recommended for use as <ClLinks  term={"indicator"}><i>indicators</i></ClLinks> in portable code since <ClLinks  term={"get"}><b>get</b></ClLinks> tests with <ClLinks  term={"eq"}><b>eq</b></ClLinks> rather than <ClLinks  term={"eql"}><b>eql</b></ClLinks>, and consequently the effect of using such <ClLinks  term={"indicator"}><i>indicators</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



There is no way using <ClLinks  term={"get"}><b>get</b></ClLinks> to distinguish an absent property from one whose value is *default*. However, see <ClLinks  term={"get-properties"}><b>get-properties</b></ClLinks>. 



