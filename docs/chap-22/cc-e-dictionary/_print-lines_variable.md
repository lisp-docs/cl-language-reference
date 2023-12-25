*∗<DictionaryLink styled={true} term={"print-lines"}><b>*print-lines*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Initial Value:** 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



When the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-lines"}><b>\*print-lines\*</b></DictionaryLink> is other than <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, it is a limit on the number of output lines produced when something is pretty printed. If an attempt is made to go beyond that many lines, “..” is printed at the end of the last line followed by all of the suffixes (closing delimiters) that are pending to be printed. 



**Examples:**
```lisp

(let ((\*print-right-margin\* 25) (\*print-lines\* 3)) 
  (pprint ’(progn (setq a 1 b 2 c 3 d 4)))) 
▷ (PROGN (SETQ A 1 
	       ▷ B 2 
	       ▷ C 3 ..)) 
*→ hno valuesi* 

```
**Notes:** 



The “..” notation is intentionally different than the “...” notation used for level abbreviation, so that the two different situations can be visually distinguished. 



This notation is used to increase the likelihood that the *Lisp reader* will signal an error if an attempt is later made to read the abbreviated output. Note however that if the truncation occurs in a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, as in "This string has been trunc..", the problem situation cannot be detected later and no such error will be signaled. 



