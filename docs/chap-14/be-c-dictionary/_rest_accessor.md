**rest** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"rest"}><b>rest</b></ClLinks> *list → tail* 



<!-- **(setf (rest** *list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-tail***)**  -->
**(setf (rest** *list***)** *new-tail***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, which might be a *dotted list* or a *circular list*. 



<ClLinks styled={true} term={"tail"}><i>tail</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"rest"}><b>rest</b></ClLinks> performs the same operation as <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks>, but mnemonically complements <ClLinks styled={true} term={"first"}><b>first</b></ClLinks>. Specifically, 



(rest <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *≡* (cdr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) 



(setf (rest <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *new-tail*) *≡* (setf (cdr <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>) *new-tail*) 



**Examples:**
```lisp

(rest ’(1 2)) → (2) 



(rest ’(1 . 2)) → 2 
(rest ’(1)) → NIL 
(setq \*cons\* ’(1 . 2)) → (1 . 2) 
(setf (rest \*cons\*) "two") → "two" 
\*cons\* → (1 . "two") 

```
**See Also:** 



<ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks>, <ClLinks styled={true} term={"nthcdr"}><b>nthcdr</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"rest"}><b>rest</b></ClLinks> is often preferred stylistically over <ClLinks styled={true} term={"cdr"}><b>cdr</b></ClLinks> when the argument is to being subjectively viewed as a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> rather than as a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>. 



