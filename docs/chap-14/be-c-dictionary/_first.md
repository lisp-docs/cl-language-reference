**first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth** *Accessor* 



**Syntax:** 



**first** *list → object* 



**second** *list → object* 



**third** *list → object* 



**fourth** *list → object* 



**fifth** *list → object* 



**sixth** *list → object* 



**seventh** *list → object* 



**eighth** *list → object* 



**ninth** *list → object* 



**tenth** *list → object* 



**Arguments and Values:** 



**(setf (first** *list***)** *new-object***) (setf (second** *list***)** *new-object***) (setf (third** *list***)** *new-object***) (setf (fourth** *list***)** *new-object***) (setf (fifth** *list***)** *new-object***) (setf (sixth** *list***)** *new-object***) (setf (seventh** *list***)** *new-object***) (setf (eighth** *list***)** *new-object***) (setf (ninth** *list***)** *new-object***) (setf (tenth** *list***)** *new-object***)** 



*list*—a *list*, which might be a *dotted list* or a *circular list*. 







 



 



**first, second, third, fourth, fifth, sixth, seventh,** *. . .* 



*object*, *new-object*—an *object*. 



**Description:** 



The functions **first**, **second**, **third**, **fourth**, **fifth**, **sixth**, **seventh**, **eighth**, **ninth**, and **tenth** *access* the first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, and tenth *elements* of *list*, respectively. Specifically, 



(first *list*) *≡* (car *list*) 



(second *list*) *≡* (car (cdr *list*)) 



(third *list*) *≡* (car (cddr *list*)) 



(fourth *list*) *≡* (car (cdddr *list*)) 



(fifth *list*) *≡* (car (cddddr *list*)) 



(sixth *list*) *≡* (car (cdr (cddddr *list*))) 



(seventh *list*) *≡* (car (cddr (cddddr *list*))) 



(eighth *list*) *≡* (car (cdddr (cddddr *list*))) 



(ninth *list*) *≡* (car (cddddr (cddddr *list*))) 



(tenth *list*) *≡* (car (cdr (cddddr (cddddr *list*)))) 



**setf** can also be used with any of these functions to change an existing component. The same equivalences apply. For example: 



(setf (fifth *list*) *new-object*) *≡* (setf (car (cddddr *list*)) *new-object*) 



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



**car**, **nth** 



**Notes:** 



**first** is functionally equivalent to **car**, **second** is functionally equivalent to **cadr**, **third** is functionally equivalent to **caddr**, and **fourth** is functionally equivalent to **cadddr**. 



The ordinal numbering used here is one-origin, as opposed to the zero-origin numbering used by **nth**: 



(fifth x) *≡* (nth 4 x) 







 



 



