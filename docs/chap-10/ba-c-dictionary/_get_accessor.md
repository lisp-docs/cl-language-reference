**get** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"get"}><b>get</b></DictionaryLink> *symbol indicator* &amp;optional *default → value* 



<!-- **(setf (get** *symbol indicator* &amp;optional *default<ClLinks  term={"t"}><b>*)</b></ClLinks> *new-value***)**  -->
**(setf (get** *symbol indicator* &amp;optional *default***)** *new-value***)** 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"indicator"}><i>indicator</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*default*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<ClLinks  term={"value"}><i>value</i></ClLinks>—if the indicated property exists, the <ClLinks  term={"object"}><i>object</i></ClLinks> that is its <ClLinks  term={"value"}><i>value</i></ClLinks>; otherwise, the specified *default*. *new-value*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<DictionaryLink  term={"get"}><b>get</b></DictionaryLink> finds a <ClLinks  term={"property"}><i>property</i></ClLinks> on the <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> <sub>2</sub> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> whose <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> is <ClLinks  term={"identical"}><i>identical</i></ClLinks> to <ClLinks  term={"indicator"}><i>indicator</i></ClLinks>, and returns its corresponding <GlossaryTerm styled={true} term={"property value"}><i>property value</i></GlossaryTerm>. If there are multiple *properties*<sub>1</sub> with that <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> , <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> uses the first such <ClLinks  term={"property"}><i>property</i></ClLinks>. If there is no <ClLinks  term={"property"}><i>property</i></ClLinks> with that <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> , *default* is returned. 







 



 



<DictionaryLink  term={"get"}><b>get</b></DictionaryLink> 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> may be used to associate a new <ClLinks  term={"object"}><i>object</i></ClLinks> with an existing indicator already on the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>’s <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm>, or to create a new assocation if none exists. If there are multiple *properties*<sub>1</sub> with that <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> , <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> associates the *new-value* with the first such <ClLinks  term={"property"}><i>property</i></ClLinks>. When a <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> is used as a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> <ClLinks  term={"place"}><i>place</i></ClLinks>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <ClLinks  term={"value"}><i>value</i></ClLinks> is ignored. 



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



Should signal an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is not a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



**See Also:** 



<DictionaryLink  term={"getf"}><b>getf</b></DictionaryLink>, <DictionaryLink  term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink>, <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> 



**Notes:** 



(get x y) *≡* (getf (symbol-plist x) y) 







 



 



<ClLinks  term={"number"}><i>Numbers</i></ClLinks> and <ClLinks  term={"character"}><i>characters</i></ClLinks> are not recommended for use as <ClLinks  term={"indicator"}><i>indicators</i></ClLinks> in portable code since <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> tests with <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> rather than <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, and consequently the effect of using such <ClLinks  term={"indicator"}><i>indicators</i></ClLinks> is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



There is no way using <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> to distinguish an absent property from one whose value is *default*. However, see <DictionaryLink  term={"get-properties"}><b>get-properties</b></DictionaryLink>. 



