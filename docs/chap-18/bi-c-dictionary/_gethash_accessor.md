**gethash** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"gethash"}><b>gethash</b></DictionaryLink> *key hash-table* &amp;optional *default → value, present-p* 

<!-- **(setf (gethash** *key hash-table* &amp;optional *default<DictionaryLink  term={"t"}><b>*)</b></DictionaryLink> *new-value***)**  -->
```
(setf (gethash key hash-table &optional default) new-value)
```

**Arguments and Values:** 



<GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*hash-table*—a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



*default*—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



*present-p*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



<GlossaryTerm  term={"value"}><i>Value</i></GlossaryTerm> is the <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> in *hash-table* whose <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm> is the <GlossaryTerm  term={"same"}><i>same</i></GlossaryTerm> as <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm> under the *hash-table*’s equivalence test. If there is no such entry, <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> is the *default*. 



*Present-p* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if an entry is found; otherwise, it is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>. 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> may be used with <DictionaryLink  term={"gethash"}><b>gethash</b></DictionaryLink> to modify the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> associated with a given <GlossaryTerm  term={"key"}><i>key</i></GlossaryTerm>, or to add a new entry. When a <DictionaryLink  term={"gethash"}><b>gethash</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is used as a <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>, any *default* which is supplied is evaluated according to normal left-to-right evaluation rules, but its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> is ignored. 



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



<DictionaryLink  term={"remhash"}><b>remhash</b></DictionaryLink> 



**Notes:** 



The <GlossaryTerm styled={true} term={"secondary value"}><i>secondary value</i></GlossaryTerm>, *present-p*, can be used to distinguish the absence of an entry from the presence of an entry that has a value of *default*. 



