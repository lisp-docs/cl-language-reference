**rest** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"rest"}><b>rest</b></DictionaryLink> *list → tail* 



**(setf (rest** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-tail***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, which might be a *dotted list* or a *circular list*. 



<GlossaryTerm styled={true} term={"tail"}><i>tail</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"rest"}><b>rest</b></DictionaryLink> performs the same operation as <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink>, but mnemonically complements <DictionaryLink styled={true} term={"first"}><b>first</b></DictionaryLink>. Specifically, 



(rest <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (cdr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) 



(setf (rest <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *new-tail*) *≡* (setf (cdr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *new-tail*) 



**Examples:**
```lisp

(rest ’(1 2)) *→* (2) 



(rest ’(1 . 2)) *→* 2 
(rest ’(1)) *→* NIL 
(setq \*cons\* ’(1 . 2)) *→* (1 . 2) 
(setf (rest \*cons\*) "two") *→* "two" 
\*cons\* *→* (1 . "two") 

```
**See Also:** 



<DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink>, <DictionaryLink styled={true} term={"nthcdr"}><b>nthcdr</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"rest"}><b>rest</b></DictionaryLink> is often preferred stylistically over <DictionaryLink styled={true} term={"cdr"}><b>cdr</b></DictionaryLink> when the argument is to being subjectively viewed as a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> rather than as a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>. 



