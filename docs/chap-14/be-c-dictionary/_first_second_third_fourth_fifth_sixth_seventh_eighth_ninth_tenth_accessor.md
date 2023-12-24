**first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"first"}><b>first</b></ClLinks> *list → object* 



<ClLinks styled={true} term={"second"}><b>second</b></ClLinks> *list → object* 



<ClLinks styled={true} term={"third"}><b>third</b></ClLinks> *list → object* 



<ClLinks styled={true} term={"fourth"}><b>fourth</b></ClLinks> *list → object* 



<ClLinks styled={true} term={"fifth"}><b>fifth</b></ClLinks> *list → object* 



<ClLinks styled={true} term={"sixth"}><b>sixth</b></ClLinks> *list → object* 



<ClLinks styled={true} term={"seventh"}><b>seventh</b></ClLinks> *list → object* 



<ClLinks styled={true} term={"eighth"}><b>eighth</b></ClLinks> *list → object* 



<ClLinks styled={true} term={"ninth"}><b>ninth</b></ClLinks> *list → object* 



<ClLinks styled={true} term={"tenth"}><b>tenth</b></ClLinks> *list → object* 



**Arguments and Values:** 



<!-- **(setf (first** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object***) (setf (second** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object***) (setf (third** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object***) (setf (fourth** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object***) (setf (fifth** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object***) (setf (sixth** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object***) (setf (seventh** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object***) (setf (eighth** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object***) (setf (ninth** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object***) (setf (tenth** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks>  -->
**(setf (first** *list***)** *new-object***) (setf (second** *list***)** *new-object***) (setf (third** *list***)** *new-object***) (setf (fourth** *list***)** *new-object***) (setf (fifth** *list***)** *new-object***) (setf (sixth** *list***)** *new-object***) (setf (seventh** *list***)** *new-object***) (setf (eighth** *list***)** *new-object***) (setf (ninth** *list***)** *new-object***) (setf (tenth** *list***)** *new-object***)** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, which might be a *dotted list* or a *circular list*. 







 



 



**first, second, third, fourth, fifth, sixth, seventh,** *. . .* 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, *new-object*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



The functions <ClLinks styled={true} term={"first"}><b>first</b></ClLinks>, <ClLinks styled={true} term={"second"}><b>second</b></ClLinks>, <ClLinks styled={true} term={"third"}><b>third</b></ClLinks>, <ClLinks styled={true} term={"fourth"}><b>fourth</b></ClLinks>, <ClLinks styled={true} term={"fifth"}><b>fifth</b></ClLinks>, <ClLinks styled={true} term={"sixth"}><b>sixth</b></ClLinks>, <ClLinks styled={true} term={"seventh"}><b>seventh</b></ClLinks>, <ClLinks styled={true} term={"eighth"}><b>eighth</b></ClLinks>, <ClLinks styled={true} term={"ninth"}><b>ninth</b></ClLinks>, and <ClLinks styled={true} term={"tenth"}><b>tenth</b></ClLinks> <ClLinks styled={true} term={"access"}><i>access</i></ClLinks> the first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, and tenth <ClLinks styled={true} term={"element"}><i>elements</i></ClLinks> of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, respectively. Specifically, 



(first <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (car <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) 



(second <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (car (cdr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>)) 



(third <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (car (cddr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>)) 



(fourth <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (car (cdddr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>)) 



(fifth <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (car (cddddr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>)) 



(sixth <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (car (cdr (cddddr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>))) 



(seventh <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (car (cddr (cddddr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>))) 



(eighth <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (car (cdddr (cddddr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>))) 



(ninth <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (car (cddddr (cddddr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>))) 



(tenth <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (car (cdr (cddddr (cddddr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>)))) 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> can also be used with any of these functions to change an existing component. The same equivalences apply. For example: 



(setf (fifth <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *new-object*) *≡* (setf (car (cddddr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>)) *new-object*) 



**Examples:**
```lisp

(setq lst ’(1 2 3 (4 5 6) ((V)) vi 7 8 9 10)) 
→ (1 2 3 (4 5 6) ((V)) VI 7 8 9 10) 
(first lst) → 1 
(tenth lst) → 10 
(fifth lst) → ((V)) 
(second (fourth lst)) → 5 
(sixth ’(1 2 3)) → NIL 
(setf (fourth lst) "four") → "four" 
lst → (1 2 3 "four" ((V)) VI 7 8 9 10) 

```
**See Also:** 



<ClLinks styled={true} term={"car"}><b>car</b></ClLinks>, <ClLinks styled={true} term={"nth"}><b>nth</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"first"}><b>first</b></ClLinks> is functionally equivalent to <ClLinks styled={true} term={"car"}><b>car</b></ClLinks>, <ClLinks styled={true} term={"second"}><b>second</b></ClLinks> is functionally equivalent to <ClLinks styled={true} term={"cadr"}><b>cadr</b></ClLinks>, <ClLinks styled={true} term={"third"}><b>third</b></ClLinks> is functionally equivalent to <ClLinks styled={true} term={"caddr"}><b>caddr</b></ClLinks>, and <ClLinks styled={true} term={"fourth"}><b>fourth</b></ClLinks> is functionally equivalent to <ClLinks styled={true} term={"cadddr"}><b>cadddr</b></ClLinks>. 



The ordinal numbering used here is one-origin, as opposed to the zero-origin numbering used by <ClLinks styled={true} term={"nth"}><b>nth</b></ClLinks>: 



(fifth x) *≡* (nth 4 x) 







 



 



