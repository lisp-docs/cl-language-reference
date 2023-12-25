**with-hash-table-iterator** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></ClLinks> (*name hash-table*) *\{declaration\}*\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a name suitable for the first argument to <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>. 



*hash-table*—a <ClLinks  term={"form"}><i>form</i></ClLinks>, evaluated once, that should produce a *hash table*. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



Within the lexical scope of the body, <ClLinks  term={"name"}><i>name</i></ClLinks> is defined via <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks> such that successive invocations of (<ClLinks  term={"name"}><i>name</i></ClLinks>) return the items, one by one, from the *hash table* that is obtained by evaluating *hash-table* only once. 



An invocation (<ClLinks  term={"name"}><i>name</i></ClLinks>) returns three values as follows: 



1\. A *generalized boolean* that is <ClLinks  term={"true"}><i>true</i></ClLinks> if an entry is returned. 



2\. The key from the *hash-table* entry. 



3\. The value from the *hash-table* entry. 



After all entries have been returned by successive invocations of (<ClLinks  term={"name"}><i>name</i></ClLinks>), then only one value is returned, namely <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



It is unspecified what happens if any of the implicit interior state of an iteration is returned outside the dynamic extent of the <ClLinks  term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> such as by returning some <ClLinks  term={"closure"}><i>closure</i></ClLinks> over the invocation <ClLinks  term={"form"}><i>form</i></ClLinks>. 



Any number of invocations of <ClLinks  term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></ClLinks> can be nested, and the body of the innermost one can invoke all of the locally *established macros*, provided all of those <ClLinks  term={"macro"}><i>macros</i></ClLinks> have <ClLinks  term={"distinct"}><i>distinct</i></ClLinks> names. 



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



The consequences are undefined if the local function named *name established* by <ClLinks  term={"with-hash-table-iterator"}><b>with-hash-table-iterator</b></ClLinks> is called after it has returned <ClLinks  term={"false"}><i>false</i></ClLinks> as its *primary value*. 



**See Also:** 



Section 3.6 (Traversal Rules and Side Effects) 



