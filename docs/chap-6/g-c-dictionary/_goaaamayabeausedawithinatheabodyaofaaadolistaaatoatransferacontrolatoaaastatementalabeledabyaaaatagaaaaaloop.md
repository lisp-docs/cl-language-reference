**go** may be used within the body of **dolist** to transfer control to a statement labeled by a *tag*. **loop** *Macro* 



**Syntax:** 



The “simple” **loop** *form*: 



**loop** *\&#123;compound-form\&#125;*\* *→ \&#123;result\&#125;*\* 



The “extended” **loop** *form*: 



**loop** [*↓name-clause*] *\&#123;↓variable-clause\&#125;*\* *\&#123;↓main-clause\&#125;*\* *→ \&#123;result\&#125;*\* 



*name-clause::*=named *name* 



*variable-clause::*=*↓with-clause | ↓initial-final | ↓for-as-clause* 



*with-clause::*=with *var1* [*type-spec*] [= *form1*] *\&#123;*and *var2* [*type-spec*] [= *form2*]*\&#125;*\* 



*main-clause::*=*↓unconditional | ↓accumulation | ↓conditional | ↓termination-test | ↓initial-final initial-final::*=initially *\&#123;compound-form\&#125;*<sup>+</sup>*|* finally *\&#123;compound-form\&#125;*<sup>+</sup> 



*unconditional::*=*\&#123;*do *|* doing*\&#125; \&#123;compound-form\&#125;*<sup>+</sup>*|* return *\&#123;form |* it*\&#125;* 



*accumulation::*=*↓list-accumulation | ↓numeric-accumulation* 



*list-accumulation::*=*\&#123;*collect *|* collecting *|* append *|* appending *|* nconc *|* nconcing*\&#125; \&#123;form |* it*\&#125;* [into *simple-var*] 







 



 



**loop** 



*numeric-accumulation::*=*\&#123;*count *|* counting *|* sum *|* summing *|* 



maximize *|* maximizing *|* minimize *|* minimizing*\&#125; \&#123;form |* it*\&#125;* 



[into *simple-var*] [*type-spec*] 



*conditional::*=*\&#123;*if *|* when *|* unless*\&#125; form ↓selectable-clause \&#123;*and *↓selectable-clause\&#125;*\* 



[else *↓selectable-clause \&#123;*and *↓selectable-clause\&#125;*\*] 



[end] 



*selectable-clause::*=*↓unconditional | ↓accumulation | ↓conditional* 



*termination-test::*=while *form |* until *form |* repeat *form |* always *form |* never *form |* thereis *form for-as-clause::*=*\&#123;*for *|* as*\&#125; ↓for-as-subclause \&#123;*and *↓for-as-subclause\&#125;*\* 



*for-as-subclause::*=*↓for-as-arithmetic | ↓for-as-in-list | ↓for-as-on-list | ↓for-as-equals-then | ↓for-as-across | ↓for-as-hash | ↓for-as-package* 



*for-as-arithmetic::*=*var* [*type-spec*] *↓for-as-arithmetic-subclause* 



*for-as-arithmetic-subclause::*=*↓arithmetic-up | ↓arithmetic-downto | ↓arithmetic-downfrom arithmetic-up::*=[[ *\&#123;*from *|* upfrom*\&#125; form1 | \&#123;*to *|* upto *|* below*\&#125; form2 |* by *form3* ]]<sup>+</sup> 



*arithmetic-downto::*=[[ *\&#123;*from *form1\&#125;*<sup>1</sup>*| \&#123;\&#123;*downto *|* above*\&#125; form2\&#125;*<sup>1</sup>*|* by *form3* ]] 



*arithmetic-downfrom::*=[[ *\&#123;*downfrom *form1\&#125;*<sup>1</sup>*| \&#123;*to *|* downto *|* above*\&#125; form2 |* by *form3* ]] *for-as-in-list::*=*var* [*type-spec*] in *form1* [by *step-fun*] 



*for-as-on-list::*=*var* [*type-spec*] on *form1* [by *step-fun*] 



*for-as-equals-then::*=*var* [*type-spec*] = *form1* [then *form2*] 



*for-as-across::*=*var* [*type-spec*] across *vector* 



*for-as-hash::*=*var* [*type-spec*] being *\&#123;*each *|* the*\&#125;* 



*\&#123;\&#123;*hash-key *|* hash-keys*\&#125; \&#123;*in *|* of*\&#125; hash-table* 



[using (hash-value *other-var*)] *|* 



*\&#123;*hash-value *|* hash-values*\&#125; \&#123;*in *|* of*\&#125; hash-table* 



[using (hash-key *other-var*)]*\&#125;* 







 



 



**loop** 



*for-as-package::*=*var* [*type-spec*] being *\&#123;*each *|* the*\&#125;* 



*\&#123;*symbol *|* symbols *|* 



present-symbol *|* present-symbols *|* 



external-symbol *|* external-symbols*\&#125;* 



[*\&#123;*in *|* of*\&#125; package*] 



*type-spec::*=*↓simple-type-spec | ↓destructured-type-spec* 



*simple-type-spec::*=**fixnum** *|* **float** *|* **t** *|* **nil** 



*destructured-type-spec::*=of-type *d-type-spec* 



*d-type-spec::*=*type-specifier |* (*d-type-spec* . *d-type-spec*) 



*var::*=*↓d-var-spec* 



*var1::*=*↓d-var-spec* 



*var2::*=*↓d-var-spec* 



*other-var::*=*↓d-var-spec* 



*d-var-spec::*=*simple-var |* **nil** *|* (*↓d-var-spec* . *↓d-var-spec*) 



**Arguments and Values:** 



*compound-form*—a *compound form*. 



*name*—a *symbol*. 



*simple-var*—a *symbol* (a *variable* name). 



*form*, *form1*, *form2*, *form3*—a *form*. 



*step-fun*—a *form* that evaluates to a *function* of one *argument*. 



*vector*—a *form* that evaluates to a *vector* . 



*hash-table*—a *form* that evaluates to a *hash table*. 



*package*—a *form* that evaluates to a *package designator* . 



*type-specifier*—a *type specifier* . This might be either an *atomic type specifier* or a *compound type specifier* , which introduces some additional complications to proper parsing in the face of destructuring; for further information, see Section 6.1.1.7 (Destructuring). 



*result*—an *object*. 







 



 



**loop** 



**Description:** 



For details, see Section 6.1 (The LOOP Facility). 



**Examples:**
```lisp
 



;; An example of the simple form of LOOP. 



(defun sqrt-advisor () 



(loop (format t "~&Number: ") 



(let ((n (parse-integer (read-line) :junk-allowed t))) 



(when (not n) (return)) 



(format t "~&The square root of ~D is ~D.~%" n (sqrt n))))) 



*→* SQRT-ADVISOR 



(sqrt-advisor) 



▷ Number: 5*←-* 



▷ The square root of 5 is 2.236068. 



▷ Number: 4*←-* 



▷ The square root of 4 is 2. 



▷ Number: done*←-* 



*→* NIL 



;; An example of the extended form of LOOP. 



(defun square-advisor () 



(loop as n = (progn (format t "~&Number: ") 



(parse-integer (read-line) :junk-allowed t)) 



while n 



do (format t "~&The square of ~D is ~D.~%" n (\* n n)))) 



*→* SQUARE-ADVISOR 



(square-advisor) 



▷ Number: 4*←-* 



▷ The square of 4 is 16. 



▷ Number: 23*←-* 



▷ The square of 23 is 529. 



▷ Number: done*←-* 



*→* NIL 



;; Another example of the extended form of LOOP. 



(loop for n from 1 to 10 



when (oddp n) 



collect n) 



*→* (1 3 5 7 9) 




```
**See Also:** 



**do**, **dolist**, **dotimes**, **return**, **go**, **throw**, Section 6.1.1.7 (Destructuring) 







 



 



**Notes:** 



Except that **loop-finish** cannot be used within a simple **loop** *form*, a simple **loop** *form* is related to an extended **loop** *form* in the following way: 



(loop *\&#123;compound-form\&#125;*\*) *≡* (loop do *\&#123;compound-form\&#125;*\*) 



