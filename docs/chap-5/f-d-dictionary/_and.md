**and** *Macro* 



**Syntax:** 



**and** *\&#123;form\&#125;*\* *→ \&#123;result\&#125;*\* 



**Arguments and Values:** 



*form*—a *form*. 



*results*—the *values* resulting from the evaluation of the last *form*, or the symbols **nil** or **t**. 



**Description:** 



The macro **and** evaluates each *form* one at a time from left to right. As soon as any *form* evaluates to **nil**, **and** returns **nil** without evaluating the remaining *forms*. If all *forms* but the last evaluate to *true* values, **and** returns the results produced by evaluating the last *form*. 



If no *forms* are supplied, (and) returns **t**. 



**and** passes back multiple values from the last *subform* but not from subforms other than the last. **Examples:**
```lisp
 



(if (and (>= n 0) 















(< n (length a-simple-vector)) 



(eq (elt a-simple-vector n) ’foo)) 



(princ "Foo!")) 



The above expression prints Foo! if element n of a-simple-vector is the symbol foo, provided also that n is indeed a valid index for a-simple-vector. Because **and** guarantees left-to-right testing of its parts, **elt** is not called if n is out of range. 



(setq temp1 1 temp2 1 temp3 1) *→* 1 



(and (incf temp1) (incf temp2) (incf temp3)) *→* 2 



(and (eql 2 temp1) (eql 2 temp2) (eql 2 temp3)) *→ true* 



(decf temp3) *→* 1 



(and (decf temp1) (decf temp2) (eq temp3 ’nil) (decf temp3)) *→* NIL 



(and (eql temp1 temp2) (eql temp2 temp3)) *→ true* 



(and) *→* T 




```
**See Also:** 



**cond**, **every**, **if**, **or**, **when** 



**Notes:** 



(and *form*) *≡* (let () *form*) 



(and *form1 form2* ...) *≡* (when *form1* (and *form2* ...)) 



