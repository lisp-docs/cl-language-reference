**nth** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"nth"}><b>nth</b></ClLinks> *n list → object* 



<!-- **(setf (nth** *n list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks>  -->
**(setf (nth** *n list***)** *new-object***)** 



**Arguments and Values:** 



*n*—a non-negative *integer* . 



<ClLinks styled={true} term={"list"}><i>list</i></ClLinks>—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, which might be a *dotted list* or a *circular list*. 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*new-object*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"nth"}><b>nth</b></ClLinks> locates the *n*th element of <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, where the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> is the “zeroth” element. Specifically, (nth *n list<ClLinks styled={true} term={"t"}><i>) </i></ClLinks>≡* (car (nthcdr *n list*)) 



<ClLinks styled={true} term={"nth"}><b>nth</b></ClLinks> may be used to specify a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> to <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>. Specifically, 



(setf (nth *n list<ClLinks styled={true} term={"t"}><i>) </i></ClLinks>new-object<ClLinks styled={true} term={"t"}><i>) </i></ClLinks>≡* (setf (car (nthcdr *n list<ClLinks styled={true} term={"t"}><i>)) </i></ClLinks>new-object*) 



**Examples:**
```lisp

(nth 0 ’(foo bar baz)) → FOO 
(nth 1 ’(foo bar baz)) → BAR 
(nth 3 ’(foo bar baz)) → NIL 
(setq 0-to-3 (list 0 1 2 3)) → (0 1 2 3) 
(setf (nth 2 0-to-3) "two") → "two" 
0-to-3 → (0 1 "two" 3) 

```
**See Also:** 



<ClLinks styled={true} term={"elt"}><b>elt</b></ClLinks>, <ClLinks styled={true} term={"first"}><b>first</b></ClLinks>, <ClLinks styled={true} term={"nthcdr"}><b>nthcdr</b></ClLinks> 







 



 



