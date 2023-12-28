**get** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"get"}><b>get</b></DictionaryLink> *symbol indicator* &amp;optional *default → value* 



<!-- **(setf (get** *symbol indicator* &amp;optional *default<DictionaryLink  term={"t"}><b>*)</b></DictionaryLink> *new-value***)**  -->
**(setf (get** *symbol indicator* &amp;optional *default***)** *new-value***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm  term={"indicator"}><i>indicator</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*default*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>—if the indicated property exists, the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that is its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>; otherwise, the specified *default*. *new-value*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"get"}><b>get</b></DictionaryLink> finds a <GlossaryTerm  term={"property"}><i>property</i></GlossaryTerm> on the <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm> <sub>2</sub> of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> is <GlossaryTerm  term={"identical"}><i>identical</i></GlossaryTerm> to <GlossaryTerm  term={"indicator"}><i>indicator</i></GlossaryTerm>, and returns its corresponding <GlossaryTerm styled={true} term={"property value"}><i>property value</i></GlossaryTerm>. If there are multiple *properties*<sub>1</sub> with that <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> , <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> uses the first such <GlossaryTerm  term={"property"}><i>property</i></GlossaryTerm>. If there is no <GlossaryTerm  term={"property"}><i>property</i></GlossaryTerm> with that <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> , *default* is returned. 







 



 



<DictionaryLink  term={"get"}><b>get</b></DictionaryLink> 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> may be used to associate a new <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> with an existing indicator already on the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>’s <GlossaryTerm styled={true} term={"property list"}><i>property list</i></GlossaryTerm>, or to create a new assocation if none exists. If there are multiple *properties*<sub>1</sub> with that <GlossaryTerm styled={true} term={"property indicator"}><i>property indicator</i></GlossaryTerm> , <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> associates the *new-value* with the first such <GlossaryTerm  term={"property"}><i>property</i></GlossaryTerm>. When a <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is used as a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> is ignored. 



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



Should signal an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"getf"}><b>getf</b></DictionaryLink>, <DictionaryLink  term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink>, <DictionaryLink  term={"remprop"}><b>remprop</b></DictionaryLink> 



**Notes:** 



(get x y) *≡* (getf (symbol-plist x) y) 







 



 



<GlossaryTerm  term={"number"}><i>Numbers</i></GlossaryTerm> and <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> are not recommended for use as <GlossaryTerm  term={"indicator"}><i>indicators</i></GlossaryTerm> in portable code since <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> tests with <DictionaryLink  term={"eq"}><b>eq</b></DictionaryLink> rather than <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink>, and consequently the effect of using such <GlossaryTerm  term={"indicator"}><i>indicators</i></GlossaryTerm> is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



There is no way using <DictionaryLink  term={"get"}><b>get</b></DictionaryLink> to distinguish an absent property from one whose value is *default*. However, see <DictionaryLink  term={"get-properties"}><b>get-properties</b></DictionaryLink>. 



