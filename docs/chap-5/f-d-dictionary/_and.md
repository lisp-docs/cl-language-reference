**and** *Macro* 



**Syntax:** 



**and** *\{form\}*\* → \{result\}\* 



**Arguments and Values:** 



*form*—a *form*. 



*results*—the *values* resulting from the evaluation of the last *form*, or the symbols **nil** or **t**. 



**Description:** 



The macro **and** evaluates each *form* one at a time from left to right. As soon as any *form* evaluates to **nil**, **and** returns **nil** without evaluating the remaining *forms*. If all *forms* but the last evaluate to *true* values, **and** returns the results produced by evaluating the last *form*. 



If no *forms* are supplied, (and) returns **t**. 



**and** passes back multiple values from the last *subform* but not from subforms other than the last.


**and** is defined as a macro because it stops evaluating as soon as any *form* evaluates to **nil**.  If it were defined as a function, every *form* would be evaluated before the function was applied.  As a result of **and** not being a function, it can not be used with **apply**.  In order to check that every value of a list is *true*, the function **every** could be used.


**Examples:**
```lisp

(if (and (>= n 0) 
	 (< n (length a-simple-vector)) 
	 (eq (elt a-simple-vector n) ’foo)) 
    (princ "Foo!")) 
```

The above expression prints Foo! if element n of a-simple-vector is the symbol foo, provided also that n is indeed a valid index for a-simple-vector. Because **and** guarantees left-to-right testing of its parts, **elt** is not called if n is out of range. 

```lisp

(defparameter temp1 1) → temp1
(defparameter temp2 1) → temp2
(defparameter temp3 1) → temp3
(and (incf temp1) (incf temp2) (incf temp3)) → 2 
(and (eql 2 temp1) (eql 2 temp2) (eql 2 temp3)) → true 
(decf temp3) → 1 
(and (decf temp1) (decf temp2) (eq temp3 ’nil) (decf temp3)) → NIL 
(and (eql temp1 temp2) (eql temp2 temp3)) → true 
(and) → T 

```
**See Also:** 



**cond**, **every**, **if**, **or**, **when** 



**Notes:** 



(and *form*) *≡* (let () *form*) 



(and *form1 form2* ...) *≡* (when *form1* (and *form2* ...)) 



:::info

We added a paragraph explaining why **and** must be defined as a macro, and the consequences of it being defined as a macro.

:::
