**first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"first"}><b>first</b></DictionaryLink> *list → object* 



<DictionaryLink styled={true} term={"second"}><b>second</b></DictionaryLink> *list → object* 



<DictionaryLink styled={true} term={"third"}><b>third</b></DictionaryLink> *list → object* 



<DictionaryLink styled={true} term={"fourth"}><b>fourth</b></DictionaryLink> *list → object* 



<DictionaryLink styled={true} term={"fifth"}><b>fifth</b></DictionaryLink> *list → object* 



<DictionaryLink styled={true} term={"sixth"}><b>sixth</b></DictionaryLink> *list → object* 



<DictionaryLink styled={true} term={"seventh"}><b>seventh</b></DictionaryLink> *list → object* 



<DictionaryLink styled={true} term={"eighth"}><b>eighth</b></DictionaryLink> *list → object* 



<DictionaryLink styled={true} term={"ninth"}><b>ninth</b></DictionaryLink> *list → object* 



<DictionaryLink styled={true} term={"tenth"}><b>tenth</b></DictionaryLink> *list → object* 



**Arguments and Values:** 



**(setf (first** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-object***) (setf (second** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-object***) (setf (third** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-object***) (setf (fourth** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-object***) (setf (fifth** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-object***) (setf (sixth** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-object***) (setf (seventh** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-object***) (setf (eighth** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-object***) (setf (ninth** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-object***) (setf (tenth** *list<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-object<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, which might be a *dotted list* or a *circular list*. 







 



 



**first, second, third, fourth, fifth, sixth, seventh,** *. . .* 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, *new-object*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



The functions <DictionaryLink styled={true} term={"first"}><b>first</b></DictionaryLink>, <DictionaryLink styled={true} term={"second"}><b>second</b></DictionaryLink>, <DictionaryLink styled={true} term={"third"}><b>third</b></DictionaryLink>, <DictionaryLink styled={true} term={"fourth"}><b>fourth</b></DictionaryLink>, <DictionaryLink styled={true} term={"fifth"}><b>fifth</b></DictionaryLink>, <DictionaryLink styled={true} term={"sixth"}><b>sixth</b></DictionaryLink>, <DictionaryLink styled={true} term={"seventh"}><b>seventh</b></DictionaryLink>, <DictionaryLink styled={true} term={"eighth"}><b>eighth</b></DictionaryLink>, <DictionaryLink styled={true} term={"ninth"}><b>ninth</b></DictionaryLink>, and <DictionaryLink styled={true} term={"tenth"}><b>tenth</b></DictionaryLink> <GlossaryTerm styled={true} term={"access"}><i>access</i></GlossaryTerm> the first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, and tenth <GlossaryTerm styled={true} term={"element"}><i>elements</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, respectively. Specifically, 



(first <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (car <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) 



(second <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (car (cdr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>)) 



(third <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (car (cddr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>)) 



(fourth <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (car (cdddr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>)) 



(fifth <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (car (cddddr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>)) 



(sixth <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (car (cdr (cddddr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>))) 



(seventh <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (car (cddr (cddddr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>))) 



(eighth <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (car (cdddr (cddddr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>))) 



(ninth <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (car (cddddr (cddddr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>))) 



(tenth <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *≡* (car (cdr (cddddr (cddddr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>)))) 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> can also be used with any of these functions to change an existing component. The same equivalences apply. For example: 



(setf (fifth <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>) *new-object*) *≡* (setf (car (cddddr <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>)) *new-object*) 



**Examples:**
```lisp

(setq lst ’(1 2 3 (4 5 6) ((V)) vi 7 8 9 10)) 
*→* (1 2 3 (4 5 6) ((V)) VI 7 8 9 10) 
(first lst) *→* 1 
(tenth lst) *→* 10 
(fifth lst) *→* ((V)) 
(second (fourth lst)) *→* 5 
(sixth ’(1 2 3)) *→* NIL 
(setf (fourth lst) "four") *→* "four" 
lst *→* (1 2 3 "four" ((V)) VI 7 8 9 10) 

```
**See Also:** 



<DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink>, <DictionaryLink styled={true} term={"nth"}><b>nth</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"first"}><b>first</b></DictionaryLink> is functionally equivalent to <DictionaryLink styled={true} term={"car"}><b>car</b></DictionaryLink>, <DictionaryLink styled={true} term={"second"}><b>second</b></DictionaryLink> is functionally equivalent to <DictionaryLink styled={true} term={"cadr"}><b>cadr</b></DictionaryLink>, <DictionaryLink styled={true} term={"third"}><b>third</b></DictionaryLink> is functionally equivalent to <DictionaryLink styled={true} term={"caddr"}><b>caddr</b></DictionaryLink>, and <DictionaryLink styled={true} term={"fourth"}><b>fourth</b></DictionaryLink> is functionally equivalent to <DictionaryLink styled={true} term={"cadddr"}><b>cadddr</b></DictionaryLink>. 



The ordinal numbering used here is one-origin, as opposed to the zero-origin numbering used by <DictionaryLink styled={true} term={"nth"}><b>nth</b></DictionaryLink>: 



(fifth x) *≡* (nth 4 x) 







 



 



