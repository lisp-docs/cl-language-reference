**with-hash-table-iterator** *Macro* 



**Syntax:** 



**with-hash-table-iterator** (*name hash-table*) *\&#123;declaration\&#125;*\* *\&#123;form\&#125;*\* *→ \&#123;result\&#125;*\* 



**Arguments and Values:** 



*name*—a name suitable for the first argument to **macrolet**. 



*hash-table*—a *form*, evaluated once, that should produce a *hash table*. 



*declaration*—a **declare** *expression*; not evaluated. 



*forms*—an *implicit progn*. 



*results*—the *values* returned by *forms*. 



**Description:** 



Within the lexical scope of the body, *name* is defined via **macrolet** such that successive invocations of (*name*) return the items, one by one, from the *hash table* that is obtained by evaluating *hash-table* only once. 



An invocation (*name*) returns three values as follows: 



1\. A *generalized boolean* that is *true* if an entry is returned. 



2\. The key from the *hash-table* entry. 



3\. The value from the *hash-table* entry. 



After all entries have been returned by successive invocations of (*name*), then only one value is returned, namely **nil**. 



It is unspecified what happens if any of the implicit interior state of an iteration is returned outside the dynamic extent of the **with-hash-table-iterator** *form* such as by returning some *closure* over the invocation *form*. 



Any number of invocations of **with-hash-table-iterator** can be nested, and the body of the innermost one can invoke all of the locally *established macros*, provided all of those *macros* have *distinct* names. 



**Examples:**
```lisp
 



The following function should return **t** on any *hash table*, and signal an error if the usage of **with-hash-table-iterator** does not agree with the corresponding usage of **maphash**. 



Hash 



 



 



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



The following could be an acceptable definition of **maphash**, implemented by **with-hash-table-iterator**. 



(defun maphash (function hash-table) 



(with-hash-table-iterator (next-entry hash-table) 



(loop (multiple-value-bind (more key value) (next-entry) 



(unless more (return nil)) 



(funcall function key value))))) 




```
**Exceptional Situations:** 



The consequences are undefined if the local function named *name established* by **with-hash-table-iterator** is called after it has returned *false* as its *primary value*. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



