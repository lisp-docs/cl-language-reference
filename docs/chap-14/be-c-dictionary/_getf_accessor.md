**getf** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> *plist indicator* &amp;optional *default → value* 



<!-- **(setf (getf** *place indicator* &amp;optional *default<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-value***)**  -->
**(setf (getf** *place indicator* &amp;optional *default***)** *new-value***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"plist"}><i>plist</i></ClLinks>—a *property list*. 



<ClLinks styled={true} term={"place"}><i>place</i></ClLinks>—a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of which is a *property list*. 







 



 



<ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> 



<ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*default*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"value"}><i>value</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*new-value*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> finds a <ClLinks styled={true} term={"property"}><i>property</i></ClLinks> on the <ClLinks styled={true} term={"plist"}><i>plist</i></ClLinks> whose *property indicator* is <ClLinks styled={true} term={"identical"}><i>identical</i></ClLinks> to <ClLinks styled={true} term={"indicator"}><i>indicator</i></ClLinks>, and returns its corresponding *property value*. If there are multiple *properties*<sub>1</sub> with that *property indicator* , <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> uses the first such <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>. If there is no <ClLinks styled={true} term={"property"}><i>property</i></ClLinks> with that *property indicator* , *default* is returned. 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> may be used to associate a new <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> with an existing indicator in the *property list* held by <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, or to create a new assocation if none exists. If there are multiple *properties*<sub>1</sub> with that *property indicator* , <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> associates the *new-value* with the first such <ClLinks styled={true} term={"property"}><i>property</i></ClLinks>. When a <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is used as a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is ignored. 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> is permitted to either <ClLinks styled={true} term={"write"}><i>write</i></ClLinks> the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> itself, or modify of any part, <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> or <ClLinks styled={true} term={"cdr"}><i>cdr</i></ClLinks> , of the *list structure* held by <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



**Examples:**
```lisp
(setq x ’()) → NIL 
(getf x ’prop1) → NIL 
(getf x ’prop1 7) → 7 
(getf x ’prop1) → NIL 
(setf (getf x ’prop1) ’val1) → VAL1 
(eq (getf x ’prop1) ’val1) → true 
(getf x ’prop1) → VAL1 
(getf x ’prop1 7) → VAL1 
x → (PROP1 VAL1) 
;; Examples of implementation variation permitted. 
(setq foo (list ’a ’b ’c ’d ’e ’f)) → (A B C D E F) 
(setq bar (cddr foo)) → (C D E F) 
(remf foo ’c) → true 
foo → (A B E F) 
bar 
→ (C D E F) 
<i><sup>or</sup>→</i> (C) 
<i><sup>or</sup>→</i> (NIL) 
<i><sup>or</sup>→</i> (C NIL) 
<i><sup>or</sup>→</i> (C D) 


```
**See Also:** 



<ClLinks styled={true} term={"get"}><b>get</b></ClLinks>, <ClLinks styled={true} term={"get-properties"}><b>get-properties</b></ClLinks>, <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks>, Section 5.1.2.2 (Function Call Forms as Places) 



**Notes:** 



There is no way (using <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks>) to distinguish an absent property from one whose value is *default*; but see <ClLinks styled={true} term={"get-properties"}><b>get-properties</b></ClLinks>. 



Note that while supplying a *default* argument to <ClLinks styled={true} term={"getf"}><b>getf</b></ClLinks> in a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> situation is sometimes not very interesting, it is still important because some macros, such as <ClLinks styled={true} term={"push"}><b>push</b></ClLinks> and <ClLinks styled={true} term={"incf"}><b>incf</b></ClLinks>, require a <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> argument which data is both <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> from and *written* to. In such a context, if a *default* argument is to be supplied for the <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> situation, it must be syntactically valid for the <ClLinks styled={true} term={"write"}><i>write</i></ClLinks> situation as well. For example, 



(let ((plist ’())) 



(incf (getf plist ’count 0)) 



plist) → (COUNT 1) 



