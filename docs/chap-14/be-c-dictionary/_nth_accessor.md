**nth** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"nth"}><b>nth</b></DictionaryLink> *n list → object* 



<!-- **(setf (nth** *n list<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-object<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks>  -->
**(setf (nth** *n list***)** *new-object***)** 



**Arguments and Values:** 



*n*—a non-negative *integer* . 



<GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, which might be a *dotted list* or a *circular list*. 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*new-object*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"nth"}><b>nth</b></DictionaryLink> locates the *n*th element of <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, where the <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> is the “zeroth” element. Specifically, (nth *n list<ClLinks styled={true} term={"t"}><i>) </i></ClLinks>≡* (car (nthcdr *n list*)) 



<DictionaryLink styled={true} term={"nth"}><b>nth</b></DictionaryLink> may be used to specify a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. Specifically, 



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



<DictionaryLink styled={true} term={"elt"}><b>elt</b></DictionaryLink>, <DictionaryLink styled={true} term={"first"}><b>first</b></DictionaryLink>, <DictionaryLink styled={true} term={"nthcdr"}><b>nthcdr</b></DictionaryLink> 







 



 



