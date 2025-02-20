**with-hash-table-iterator** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></DictionaryLink> (*name hash-table*) *\{declaration\}*\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* → \{result\}\* 



**Arguments and Values:** 



<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>—a name suitable for the first argument to <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>. 



*hash-table*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, evaluated once, that should produce a <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



Within the lexical scope of the body, <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> is defined via <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink> such that successive invocations of (<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>) return the items, one by one, from the <GlossaryTerm styled={true} term={"hash table"}><i>hash table</i></GlossaryTerm> that is obtained by evaluating *hash-table* only once. 



An invocation (<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>) returns three values as follows: 



1\. A <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> that is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if an entry is returned. 



2\. The key from the *hash-table* entry. 



3\. The value from the *hash-table* entry. 



After all entries have been returned by successive invocations of (<GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm>), then only one value is returned, namely <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



It is unspecified what happens if any of the implicit interior state of an iteration is returned outside the dynamic extent of the <DictionaryLink  term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> such as by returning some <GlossaryTerm  term={"closure"}><i>closure</i></GlossaryTerm> over the invocation <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



Any number of invocations of <DictionaryLink  term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></DictionaryLink> can be nested, and the body of the innermost one can invoke all of the locally *established macros*, provided all of those <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> have <GlossaryTerm  term={"distinct"}><i>distinct</i></GlossaryTerm> names. 



**Examples:**

The following function should return **t** on any *hash table*, and signal an error if the usage of **with-hash-table-iterator** does not agree with the corresponding usage of **maphash**. 
Hash 

```lisp
(defun test-hash-table-iterator (hash-table) 
  (let ((all-entries ’()) 
	(generated-entries ’()) 
	(unique (list nil))) 
    (maphash #’(lambda (key value) (push (list key value) all-entries)) 
	       hash-table) 
    (with-hash-table-iterator (generator-fn hash-table) 
      (loop 
       (multiple-value-bind (more? key value) (generator-fn) 
	 (unless more? (return)) 
	 (unless (eql value (gethash key hash-table unique)) 
	   (error "Key ~S not found for value ~S" key value)) 
	 (push (list key value) generated-entries)))) 
    (unless (= (length all-entries) 
	       (length generated-entries) 
	       (length (union all-entries generated-entries 
			      :key #’car :test (hash-table-test hash-table)))) 
      (error "Generated entries and Maphash entries don’t correspond")) 
    t))
```

The following could be an acceptable definition of **maphash**, implemented by **with-hash-table-iterator**. 

```lisp
(defun maphash (function hash-table) 
  (with-hash-table-iterator (next-entry hash-table) 
    (loop (multiple-value-bind (more key value) (next-entry) 
	    (unless more (return nil)) 
	    (funcall function key value))))) 
```
**Exceptional Situations:** 



The consequences are undefined if the local function named *name established* by <DictionaryLink  term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></DictionaryLink> is called after it has returned <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> as its <GlossaryTerm styled={true} term={"primary value"}><i>primary value</i></GlossaryTerm>. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



