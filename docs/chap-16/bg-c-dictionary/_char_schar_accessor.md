**char, schar** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"char"}><b>char</b></DictionaryLink> *string index → character* 



<DictionaryLink  term={"schar"}><b>schar</b></DictionaryLink> *string index → character* 



**(setf (char** *string index***)** *new-character***)** 



**(setf (schar** *string index***)** *new-character***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—for <DictionaryLink  term={"char"}><b>char</b></DictionaryLink>, a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; for <DictionaryLink  term={"schar"}><b>schar</b></DictionaryLink>, a <GlossaryTerm styled={true} term={"simple string"}><i>simple string</i></GlossaryTerm>. 



*index*—a <GlossaryTerm styled={true} term={"valid array index"}><i>valid array index</i></GlossaryTerm> for the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



<GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm>, *new-character*—a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . 



**Description:** 



<DictionaryLink  term={"char"}><b>char</b></DictionaryLink> and <DictionaryLink  term={"schar"}><b>schar</b></DictionaryLink> <GlossaryTerm  term={"access"}><i>access</i></GlossaryTerm> the <GlossaryTerm  term={"element"}><i>element</i></GlossaryTerm> of <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> specified by *index*. 



<DictionaryLink  term={"char"}><b>char</b></DictionaryLink> ignores <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointers</i></GlossaryTerm> when *accessing elements*. 



**Examples:**
```lisp
(setq my-simple-string (make-string 6 :initial-element #\A)) → "AAAAAA" 
(schar my-simple-string 4) → #\A 
(setf (schar my-simple-string 4) #\B) → #\B 
my-simple-string → "AAAABA" 
(setq my-filled-string 
      (make-array 6 :element-type ’character 
		  :fill-pointer 5 
		  :initial-contents my-simple-string)) 
→ "AAAAB" 
(char my-filled-string 4) → #\B 
(char my-filled-string 5) → #\A 
(setf (char my-filled-string 3) #\C) → #\C 
(setf (char my-filled-string 5) #\D) → #\D 
(setf (fill-pointer my-filled-string) 6) → 6 
my-filled-string → "AAACBD" 


```
**See Also:** 



<DictionaryLink  term={"aref"}><b>aref</b></DictionaryLink>, <DictionaryLink  term={"elt"}><b>elt</b></DictionaryLink>, Section 3.2.1 (Compiler Terminology) 



**Notes:** 



(char s j) *≡* (aref (the string s) j) 



