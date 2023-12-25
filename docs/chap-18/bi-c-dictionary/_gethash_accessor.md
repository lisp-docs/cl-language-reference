**gethash** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"gethash"}><b>gethash</b></DictionaryLink> *key hash-table* &amp;optional *default → value, present-p* 



**(setf (gethash** *key hash-table* &amp;optional *default<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-value***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*hash-table*—a *hash table*. 



*default*—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*present-p*—a *generalized boolean*. 



**Description:** 



<GlossaryTerm styled={true} term={"value"}><i>Value</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> in *hash-table* whose <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm> under the *hash-table*’s equivalence test. If there is no such entry, <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is the *default*. 



*Present-p* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if an entry is found; otherwise, it is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> may be used with <DictionaryLink styled={true} term={"gethash"}><b>gethash</b></DictionaryLink> to modify the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> associated with a given <GlossaryTerm styled={true} term={"key"}><i>key</i></GlossaryTerm>, or to add a new entry. When a <DictionaryLink styled={true} term={"gethash"}><b>gethash</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is used as a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is ignored. 



**Examples:**
```lisp

(setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32206334> 
(gethash 1 table) *→* NIL, *false* 
(gethash 1 table 2) *→* 2, *false* 
(setf (gethash 1 table) "one") *→* "one" 
(setf (gethash 2 table "two") "two") *→* "two" 
(gethash 1 table) *→* "one", *true* 
(gethash 2 table) *→* "two", *true* 
(gethash nil table) *→* NIL, *false* 
(setf (gethash nil table) nil) *→* NIL 
(gethash nil table) *→* NIL, *true* 
(defvar \*counters\* (make-hash-table)) *→* \*COUNTERS\* 
(gethash ’foo \*counters\*) *→* NIL, *false* 
(gethash ’foo \*counters\* 0) *→* 0, *false* 



(defmacro how-many (obj) ‘(values (gethash ,obj \*counters\* 0))) *→* HOW-MANY 
(defun count-it (obj) (incf (how-many obj))) *→* COUNT-IT 
(dolist (x ’(bar foo foo bar bar baz)) (count-it x)) 
(how-many ’foo) *→* 2 
(how-many ’bar) *→* 3 
(how-many ’quux) *→* 0 

```
**See Also:** 



<DictionaryLink styled={true} term={"remhash"}><b>remhash</b></DictionaryLink> 



**Notes:** 



The *secondary value*, *present-p*, can be used to distinguish the absence of an entry from the presence of an entry that has a value of *default*. 



