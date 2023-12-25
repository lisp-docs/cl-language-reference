**get** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> *symbol indicator* &amp;optional *default → value* 



**(setf (get** *symbol indicator* &amp;optional *default<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-value***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*default*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>—if the indicated property exists, the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that is its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>; otherwise, the specified *default*. *new-value*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> finds a <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm> on the *property list* <sub>2</sub> of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> whose *property indicator* is <GlossaryTerm styled={true} term={"identical"}><i>identical</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"indicator"}><i>indicator</i></GlossaryTerm>, and returns its corresponding *property value*. If there are multiple *properties*<sub>1</sub> with that *property indicator* , <DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> uses the first such <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>. If there is no <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm> with that *property indicator* , *default* is returned. 







 



 



<DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> may be used to associate a new <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> with an existing indicator already on the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>’s *property list*, or to create a new assocation if none exists. If there are multiple *properties*<sub>1</sub> with that *property indicator* , <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> associates the *new-value* with the first such <GlossaryTerm styled={true} term={"property"}><i>property</i></GlossaryTerm>. When a <DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is used as a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is ignored. 



**Examples:**
```lisp

(defun make-person (first-name last-name) 
  (let ((person (gensym "PERSON"))) 
    (setf (get person ’first-name) first-name) 
    (setf (get person ’last-name) last-name) 
    person)) *→* MAKE-PERSON 
(defvar \*john\* (make-person "John" "Dow")) *→* \*JOHN\* 
\*john\* *→* #:PERSON4603 
(defvar \*sally\* (make-person "Sally" "Jones")) *→* \*SALLY\* 
(get \*john\* ’first-name) *→* "John" 
(get \*sally\* ’last-name) *→* "Jones" 
(defun marry (man woman married-name) 
  (setf (get man ’wife) woman) 
  (setf (get woman ’husband) man) 
  (setf (get man ’last-name) married-name) 
  (setf (get woman ’last-name) married-name) 
  married-name) *→* MARRY 
(marry \*john\* \*sally\* "Dow-Jones") *→* "Dow-Jones" 
(get \*john\* ’last-name) *→* "Dow-Jones" 
(get (get \*john\* ’wife) ’first-name) *→* "Sally" 
(symbol-plist \*john\*) 
*→* (WIFE #:PERSON4604 LAST-NAME "Dow-Jones" FIRST-NAME "John") 
(defmacro age (person &optional (default ”thirty-something)) 
  ‘(get ,person ’age ,default)) *→* AGE 
(age \*john\*) *→* THIRTY-SOMETHING 
(age \*john\* 20) *→* 20 
(setf (age \*john\*) 25) *→* 25 
(age \*john\*) *→* 25 
(age \*john\* 20) *→* 25 

```
**Exceptional Situations:** 



Should signal an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"getf"}><b>getf</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-plist"}><b>symbol-plist</b></DictionaryLink>, <DictionaryLink styled={true} term={"remprop"}><b>remprop</b></DictionaryLink> 



**Notes:** 



(get x y) *≡* (getf (symbol-plist x) y) 







 



 



<GlossaryTerm styled={true} term={"number"}><i>Numbers</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> are not recommended for use as <GlossaryTerm styled={true} term={"indicator"}><i>indicators</i></GlossaryTerm> in portable code since <DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> tests with <DictionaryLink styled={true} term={"eq"}><b>eq</b></DictionaryLink> rather than <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink>, and consequently the effect of using such <GlossaryTerm styled={true} term={"indicator"}><i>indicators</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



There is no way using <DictionaryLink styled={true} term={"get"}><b>get</b></DictionaryLink> to distinguish an absent property from one whose value is *default*. However, see <DictionaryLink styled={true} term={"get-properties"}><b>get-properties</b></DictionaryLink>. 



