**char, schar** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink> *string index → character* 



<DictionaryLink styled={true} term={"schar"}><b>schar</b></DictionaryLink> *string index → character* 



**(setf (char** *string index***)** *new-character***)** 



**(setf (schar** *string index***)** *new-character***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—for <DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink>, a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; for <DictionaryLink styled={true} term={"schar"}><b>schar</b></DictionaryLink>, a *simple string*. 



*index*—a *valid array index* for the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm>, *new-character*—a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink> and <DictionaryLink styled={true} term={"schar"}><b>schar</b></DictionaryLink> <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"element"}><i>element</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> specified by *index*. 



<DictionaryLink styled={true} term={"char"}><b>char</b></DictionaryLink> ignores *fill pointers* when *accessing elements*. 



**Examples:**
```lisp

(setq my-simple-string (make-string 6 :initial-element #\A)) *→* "AAAAAA" 
(schar my-simple-string 4) *→* #\A 
(setf (schar my-simple-string 4) #\B) *→* #\B 
my-simple-string *→* "AAAABA" 
(setq my-filled-string 
      (make-array 6 :element-type ’character 
		  :fill-pointer 5 
		  :initial-contents my-simple-string)) 
*→* "AAAAB" 
(char my-filled-string 4) *→* #\B 
(char my-filled-string 5) *→* #\A 
(setf (char my-filled-string 3) #\C) *→* #\C 
(setf (char my-filled-string 5) #\D) *→* #\D 
(setf (fill-pointer my-filled-string) 6) *→* 6 
my-filled-string *→* "AAACBD" 




```
**See Also:** 



<DictionaryLink styled={true} term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink styled={true} term={"elt"}><b>elt</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



(char s j) *≡* (aref (the string s) j) 



