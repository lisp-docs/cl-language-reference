**gethash** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"gethash"}><b>gethash</b></ClLinks> *key hash-table* &amp;optional *default → value, present-p* 



<!-- **(setf (gethash** *key hash-table* &amp;optional *default<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-value***)**  -->
**(setf (gethash** *key hash-table* &amp;optional *default***)** *new-value***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"key"}><i>key</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*hash-table*—a *hash table*. 



*default*—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"value"}><i>value</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*present-p*—a *generalized boolean*. 



**Description:** 



<ClLinks styled={true} term={"value"}><i>Value</i></ClLinks> is the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> in *hash-table* whose <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> is the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as <ClLinks styled={true} term={"key"}><i>key</i></ClLinks> under the *hash-table*’s equivalence test. If there is no such entry, <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is the *default*. 



*Present-p* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if an entry is found; otherwise, it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> may be used with <ClLinks styled={true} term={"gethash"}><b>gethash</b></ClLinks> to modify the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> associated with a given <ClLinks styled={true} term={"key"}><i>key</i></ClLinks>, or to add a new entry. When a <ClLinks styled={true} term={"gethash"}><b>gethash</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is used as a <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> is ignored. 



**Examples:**
```lisp

(setq table (make-hash-table)) → #<HASH-TABLE EQL 0/120 32206334> 
(gethash 1 table) → NIL, *false* 
(gethash 1 table 2) → 2, *false* 
(setf (gethash 1 table) "one") → "one" 
(setf (gethash 2 table "two") "two") → "two" 
(gethash 1 table) → "one", *true* 
(gethash 2 table) → "two", *true* 
(gethash nil table) → NIL, *false* 
(setf (gethash nil table) nil) → NIL 
(gethash nil table) → NIL, *true* 
(defvar \*counters\* (make-hash-table)) → \*COUNTERS\* 
(gethash ’foo \*counters\*) → NIL, *false* 
(gethash ’foo \*counters\* 0) → 0, *false* 



(defmacro how-many (obj) ‘(values (gethash ,obj \*counters\* 0))) → HOW-MANY 
(defun count-it (obj) (incf (how-many obj))) → COUNT-IT 
(dolist (x ’(bar foo foo bar bar baz)) (count-it x)) 
(how-many ’foo) → 2 
(how-many ’bar) → 3 
(how-many ’quux) → 0 

```
**See Also:** 



<ClLinks styled={true} term={"remhash"}><b>remhash</b></ClLinks> 



**Notes:** 



The *secondary value*, *present-p*, can be used to distinguish the absence of an entry from the presence of an entry that has a value of *default*. 



