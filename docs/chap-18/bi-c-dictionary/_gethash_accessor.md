**gethash** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"gethash"}><b>gethash</b></ClLinks> *key hash-table* &amp;optional *default → value, present-p* 



<!-- **(setf (gethash** *key hash-table* &amp;optional *default<ClLinks  term={"t"}><b>*)</b></ClLinks> *new-value***)**  -->
**(setf (gethash** *key hash-table* &amp;optional *default***)** *new-value***)** 



**Arguments and Values:** 



<ClLinks  term={"key"}><i>key</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*default*—an <ClLinks  term={"object"}><i>object</i></ClLinks>. The default is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks  term={"value"}><i>value</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



*present-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<ClLinks  term={"value"}><i>Value</i></ClLinks> is the <ClLinks  term={"object"}><i>object</i></ClLinks> in *hash-table* whose <ClLinks  term={"key"}><i>key</i></ClLinks> is the <ClLinks  term={"same"}><i>same</i></ClLinks> as <ClLinks  term={"key"}><i>key</i></ClLinks> under the *hash-table*’s equivalence test. If there is no such entry, <ClLinks  term={"value"}><i>value</i></ClLinks> is the *default*. 



*Present-p* is <ClLinks  term={"true"}><i>true</i></ClLinks> if an entry is found; otherwise, it is <ClLinks  term={"false"}><i>false</i></ClLinks>. 



<ClLinks  term={"setf"}><b>setf</b></ClLinks> may be used with <ClLinks  term={"gethash"}><b>gethash</b></ClLinks> to modify the <ClLinks  term={"value"}><i>value</i></ClLinks> associated with a given <ClLinks  term={"key"}><i>key</i></ClLinks>, or to add a new entry. When a <ClLinks  term={"gethash"}><b>gethash</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> is used as a <ClLinks  term={"setf"}><b>setf</b></ClLinks> <ClLinks  term={"place"}><i>place</i></ClLinks>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <ClLinks  term={"value"}><i>value</i></ClLinks> is ignored. 



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



<ClLinks  term={"remhash"}><b>remhash</b></ClLinks> 



**Notes:** 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *present-p*, can be used to distinguish the absence of an entry from the presence of an entry that has a value of *default*. 



