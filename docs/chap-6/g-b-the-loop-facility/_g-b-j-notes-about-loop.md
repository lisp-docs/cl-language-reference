 

*Types* can be supplied for loop variables. It is not necessary to supply a *type* for any variable, but supplying the *type* can ensure that the variable has a correctly typed initial value, and it can also enable compiler optimizations (depending on the *implementation*). 

The clause repeat *n* ... is roughly equivalent to a clause such as 

(loop for *internal-variable* downfrom (- *n* 1) to 0 ...) 

but in some *implementations*, the repeat construct might be more efficient. 

Within the executable parts of the loop clauses and around the entire **loop** form, variables can be bound by using **let**. 

Use caution when using a variable named IT (in any *package*) in connection with **loop**, since it is a *loop keyword* that can be used in place of a *form* in certain contexts. 

There is no *standardized* mechanism for users to add extensions to **loop**. 



 

 

**do, do***∗ Macro* 

**Syntax:** 

**do** (*\{var |* (*var* [*init-form* [*step-form*]])*\}*\*) 

(*end-test-form \{result-form\}*\*) 

*\{declaration\}*\* *\{tag | statement\}*\* 

*→ \{result\}*\* 

**do\*** (*\{var |* (*var* [*init-form* [*step-form*]])*\}*\*) 

(*end-test-form \{result-form\}*\*) 

*\{declaration\}*\* *\{tag | statement\}*\* 

*→ \{result\}*\* 

**Arguments and Values:** 

*var*—a *symbol*. 

*init-form*—a *form*. 

*step-form*—a *form*. 

*end-test-form*—a *form*. 

*result-forms*—an *implicit progn*. 

*declaration*—a **declare** *expression*; not evaluated. 

*tag*—a *go tag*; not evaluated. 

*statement*—a *compound form*; evaluated as described below. 

*results*—if a **return** or **return-from** form is executed, the *values* passed from that *form*; otherwise, the *values* returned by the *result-forms*. 

**Description:** 

**do** iterates over a group of *statements* while a test condition holds. **do** accepts an arbitrary number of iteration *vars* which are bound within the iteration and stepped in parallel. An initial value may be supplied for each iteration variable by use of an *init-form*. *Step-forms* may be used to specify how the *vars* should be updated on succeeding iterations through the loop. *Step-forms* may be used both to generate successive values or to accumulate results. If the *end-test-form* condition is met prior to an execution of the body, the iteration terminates. *Tags* label *statements*. 

**do\*** is exactly like **do** except that the *bindings* and steppings of the *vars* are performed sequentially rather than in parallel. 

Iteration **6–31**

 

 

**do, do***∗* 

Before the first iteration, all the *init-forms* are evaluated, and each *var* is bound to the value of its respective *init-form*, if supplied. This is a *binding*, not an assignment; when the loop terminates, the old values of those variables will be restored. For **do**, all of the *init-forms* are evaluated before 

any *var* is bound. The *init-forms* can refer to the *bindings* of the *vars* visible before beginning execution of **do**. For **do\***, the first *init-form* is evaluated, then the first *var* is bound to that value, then the second *init-form* is evaluated, then the second *var* is bound, and so on; in general, the *k*th *init-form* can refer to the new binding of the *j*th *var* if *j* \< *k*, and otherwise to the old binding of the *j*th *var*. 

At the beginning of each iteration, after processing the variables, the *end-test-form* is evaluated. If the result is *false*, execution proceeds with the body of the **do** (or **do\***) form. If the result is *true*, the *result-forms* are evaluated in order as an *implicit progn*, and then **do** or **do\*** returns. 

At the beginning of each iteration other than the first, *vars* are updated as follows. All the *step-forms*, if supplied, are evaluated, from left to right, and the resulting values are assigned to the respective *vars*. Any *var* that has no associated *step-form* is not assigned to. For **do**, all the *step-forms* are evaluated before any *var* is updated; the assignment of values to *vars* is done in parallel, as if by **psetq**. Because all of the *step-forms* are evaluated before any of the *vars* are altered, a *step-form* when evaluated always has access to the old values of all the *vars*, even if other *step-forms* precede it. For **do\***, the first *step-form* is evaluated, then the value is assigned to the first *var*, then the second *step-form* is evaluated, then the value is assigned to the second *var*, and so on; the assignment of values to variables is done sequentially, as if by **setq**. For either **do** or **do\***, after the *vars* have been updated, the *end-test-form* is evaluated as described above, and the iteration continues. 

The remainder of the **do** (or **do\***) form constitutes an *implicit tagbody*. *Tags* may appear within the body of a **do** loop for use by **go** statements appearing in the body (but such **go** statements may not appear in the variable specifiers, the *end-test-form*, or the *result-forms*). When the end of a **do** body is reached, the next iteration cycle (beginning with the evaluation of *step-forms*) occurs. 

An *implicit block* named **nil** surrounds the entire **do** (or **do\***) form. A **return** statement may be used at any point to exit the loop immediately. 

*Init-form* is an initial value for the *var* with which it is associated. If *init-form* is omitted, the initial value of *var* is **nil**. If a *declaration* is supplied for a *var*, *init-form* must be consistent with the *declaration*. 

*Declarations* can appear at the beginning of a **do** (or **do\***) body. They apply to code in the **do** (or **do\***) body, to the *bindings* of the **do** (or **do\***) *vars*, to the *step-forms*, to the *end-test-form*, and to the *result-forms*. 

**Examples:** 

(do ((temp-one 1 (1+ temp-one)) 

(temp-two 0 (1- temp-two))) 

((\> (- temp-one temp-two) 5) temp-one)) *→* 4 



 

 

**do, do***∗* 

(do ((temp-one 1 (1+ temp-one)) 

(temp-two 0 (1+ temp-one))) 

((= 3 temp-two) temp-one)) *→* 3 

(do\* ((temp-one 1 (1+ temp-one)) 

(temp-two 0 (1+ temp-one))) 

((= 3 temp-two) temp-one)) *→* 2 

(do ((j 0 (+ j 1))) 

(nil) ;Do forever. 

(format t "~%Input ~D:" j) 

(let ((item (read))) 

(if (null item) (return) ;Process items until NIL seen. 

(format t "~&Output ~D: ~S" j item)))) 

&#9655; Input 0: banana 

&#9655; Output 0: BANANA 

&#9655; Input 1: (57 boxes) 

&#9655; Output 1: (57 BOXES) 

&#9655; Input 2: NIL 

*→* NIL 

(setq a-vector (vector 1 nil 3 nil)) 

(do ((i 0 (+ i 1)) ;Sets every null element of a-vector to zero. 

(n (array-dimension a-vector 0))) 

((= i n)) 

(when (null (aref a-vector i)) 

(setf (aref a-vector i) 0))) *→* NIL 

a-vector *→* #(1 0 3 0) 

(do ((x e (cdr x)) 

(oldx x x)) 

((null x)) 

body) 

is an example of parallel assignment to index variables. On the first iteration, the value of oldx is whatever value x had before the **do** was entered. On succeeding iterations, oldx contains the value that x had on the previous iteration. 

(do ((x foo (cdr x)) 

(y bar (cdr y)) 

(z ’() (cons (f (car x) (car y)) z))) 

((or (null x) (null y)) 

(nreverse z))) 

does the same thing as (mapcar #’f foo bar). The step computation for z is an example of the fact that variables are stepped in parallel. Also, the body of the loop is empty. 

Iteration **6–33**

 

 

**do, do***∗* 

(defun list-reverse (list) 

(do ((x list (cdr x)) 

(y ’() (cons (car x) y))) 

((endp x) y))) 

As an example of nested iterations, consider a data structure that is a *list* of *conses*. The *car* of each *cons* is a *list* of *symbols*, and the *cdr* of each *cons* is a *list* of equal length containing corresponding values. Such a data structure is similar to an association list, but is divided into “frames”; the overall structure resembles a rib-cage. A lookup function on such a data structure might be: 

(defun ribcage-lookup (sym ribcage) 

(do ((r ribcage (cdr r))) 

((null r) nil) 

(do ((s (caar r) (cdr s)) 

(v (cdar r) (cdr v))) 

((null s)) 

(when (eq (car s) sym) 

(return-from ribcage-lookup (car v)))))) *→* RIBCAGE-LOOKUP 

**See Also:** 

other iteration functions (**dolist**, **dotimes**, and **loop**) and more primitive functionality (**tagbody**, **go**, **block**, **return**, **let**, and **setq**) 

**Notes:** 

If *end-test-form* is **nil**, the test will never succeed. This provides an idiom for “do forever”: the body of the **do** or **do\*** is executed repeatedly. The infinite loop can be terminated by the use of **return**, **return-from**, **go** to an outer level, or **throw**. 

A **do** *form* may be explained in terms of the more primitive *forms* **block**, **return**, **let**, **loop**, **tagbody**, and **psetq** as follows: 

(block nil 

(let ((var1 init1) 

(var2 init2) 

... 

(varn initn)) 

*declarations* 

(loop (when end-test (return (progn . result))) 

(tagbody . tagbody) 

(psetq var1 step1 

var2 step2 

... 

varn stepn)))) 

**do\*** is similar, except that **let\*** and **setq** replace the **let** and **psetq**, respectively. 



 

 

**dotimes** *Macro* 

**Syntax:** 

**dotimes** (*var count-form* [*result-form*]) *\{declaration\}*\* *\{tag | statement\}*\* 

*→ \{result\}*\* 

**Arguments and Values:** 

*var*—a *symbol*. 

*count-form*—a *form*. 

*result-form*—a *form*. 

*declaration*—a **declare** *expression*; not evaluated. 

*tag*—a *go tag*; not evaluated. 

*statement*—a *compound form*; evaluated as described below. 

*results*—if a **return** or **return-from** form is executed, the *values* passed from that *form*; otherwise, the *values* returned by the *result-form* or **nil** if there is no *result-form*. 

**Description:** 

**dotimes** iterates over a series of *integers*. 

**dotimes** evaluates *count-form*, which should produce an *integer* . If *count-form* is zero or negative, the body is not executed. **dotimes** then executes the body once for each *integer* from 0 up to but not including the value of *count-form*, in the order in which the *tags* and *statements* occur, with *var* 

bound to each *integer* . Then *result-form* is evaluated. At the time *result-form* is processed, *var* is bound to the number of times the body was executed. *Tags* label *statements*. 

An *implicit block* named **nil** surrounds **dotimes**. **return** may be used to terminate the loop immediately without performing any further iterations, returning zero or more *values*. 

The body of the loop is an *implicit tagbody*; it may contain tags to serve as the targets of **go** statements. Declarations may appear before the body of the loop. 

The *scope* of the binding of *var* does not include the *count-form*, but the *result-form* is included. 

It is *implementation-dependent* whether **dotimes** *establishes* a new *binding* of *var* on each iteration or whether it *establishes* a binding for *var* once at the beginning and then *assigns* it on any subsequent iterations. 

Iteration **6–35**

 

 

**Examples:** 

(dotimes (temp-one 10 temp-one)) *→* 10 

(setq temp-two 0) *→* 0 

(dotimes (temp-one 10 t) (incf temp-two)) *→* T 

temp-two *→* 10 

Here is an example of the use of dotimes in processing strings: 

;;; True if the specified subsequence of the string is a 

;;; palindrome (reads the same forwards and backwards). 

(defun palindromep (string &optional 

(start 0) 

(end (length string))) 

(dotimes (k (floor (- end start) 2) t) 

(unless (char-equal (char string (+ start k)) 

(char string (- end k 1))) 

(return nil)))) 

(palindromep "Able was I ere I saw Elba") *→* T 

(palindromep "A man, a plan, a canal–Panama!") *→* NIL 

(remove-if-not #’alpha-char-p ;Remove punctuation. 

"A man, a plan, a canal–Panama!") 

*→* "AmanaplanacanalPanama" 

(palindromep 

(remove-if-not #’alpha-char-p 

"A man, a plan, a canal–Panama!")) *→* T 

(palindromep 

(remove-if-not 

#’alpha-char-p 

"Unremarkable was I ere I saw Elba Kramer, nu?")) *→* T 

(palindromep 

(remove-if-not 

#’alpha-char-p 

"A man, a plan, a cat, a ham, a yak, 

a yam, a hat, a canal–Panama!")) *→* T 

**See Also:** 

**do**, **dolist**, **tagbody** 

**Notes:** 

**go** may be used within the body of **dotimes** to transfer control to a statement labeled by a *tag*. 

 

 

**dolist** 

**dolist** *Macro* 

**Syntax:** 

**dolist** (*var list-form* [*result-form*]) *\{declaration\}*\* *\{tag | statement\}*\* 

*→ \{result\}*\* 

**Arguments and Values:** 

*var*—a *symbol*. 

*list-form*—a *form*. 

*result-form*—a *form*. 

*declaration*—a **declare** *expression*; not evaluated. 

*tag*—a *go tag*; not evaluated. 

*statement*—a *compound form*; evaluated as described below. 

*results*—if a **return** or **return-from** form is executed, the *values* passed from that *form*; otherwise, the *values* returned by the *result-form* or **nil** if there is no *result-form*. 

**Description:** 

**dolist** iterates over the elements of a *list*. The body of **dolist** is like a **tagbody**. It consists of a series of *tags* and *statements*. 

**dolist** evaluates *list-form*, which should produce a *list*. It then executes the body once for each element in the *list*, in the order in which the *tags* and *statements* occur, with *var* bound to the element. Then *result-form* is evaluated. *tags* label *statements*. 

At the time *result-form* is processed, *var* is bound to **nil**. 

An *implicit block* named **nil** surrounds **dolist**. **return** may be used to terminate the loop immediately without performing any further iterations, returning zero or more *values*. 

The *scope* of the binding of *var* does not include the *list-form*, but the *result-form* is included. 

It is *implementation-dependent* whether **dolist** *establishes* a new *binding* of *var* on each iteration or whether it *establishes* a binding for *var* once at the beginning and then *assigns* it on any subsequent iterations. 

**Examples:** 

(setq temp-two ’()) *→* NIL 

(dolist (temp-one ’(1 2 3 4) temp-two) (push temp-one temp-two)) *→* (4 3 2 1) (setq temp-two 0) *→* 0 

Iteration **6–37**

 

 

(dolist (temp-one ’(1 2 3 4)) (incf temp-two)) *→* NIL 

temp-two *→* 4 

(dolist (x ’(a b c d)) (prin1 x) (princ " ")) 

&#9655; A B C D 

*→* NIL 

**See Also:** 

**do**, **dotimes**, **tagbody**, Section 3.6 (Traversal Rules and Side Effects) 

**Notes:** 

**go** may be used within the body of **dolist** to transfer control to a statement labeled by a *tag*. **loop** *Macro* 

**Syntax:** 

The “simple” **loop** *form*: 

**loop** *\{compound-form\}*\* *→ \{result\}*\* 

The “extended” **loop** *form*: 

**loop** [*↓name-clause*] *\{↓variable-clause\}*\* *\{↓main-clause\}*\* *→ \{result\}*\* 

*name-clause::*=named *name* 

*variable-clause::*=*↓with-clause | ↓initial-final | ↓for-as-clause* 

*with-clause::*=with *var1* [*type-spec*] [= *form1*] *\{*and *var2* [*type-spec*] [= *form2*]*\}*\* 

*main-clause::*=*↓unconditional | ↓accumulation | ↓conditional | ↓termination-test | ↓initial-final initial-final::*=initially *\{compound-form\}*\<sup\>+\</sup\>*|* finally *\{compound-form\}*\<sup\>+\</sup\> 

*unconditional::*=*\{*do *|* doing*\} \{compound-form\}*\<sup\>+\</sup\>*|* return *\{form |* it*\}* 

*accumulation::*=*↓list-accumulation | ↓numeric-accumulation* 

*list-accumulation::*=*\{*collect *|* collecting *|* append *|* appending *|* nconc *|* nconcing*\} \{form |* it*\}* [into *simple-var*] 



 

 

**loop** 

*numeric-accumulation::*=*\{*count *|* counting *|* sum *|* summing *|* 

maximize *|* maximizing *|* minimize *|* minimizing*\} \{form |* it*\}* 

[into *simple-var*] [*type-spec*] 

*conditional::*=*\{*if *|* when *|* unless*\} form ↓selectable-clause \{*and *↓selectable-clause\}*\* 

[else *↓selectable-clause \{*and *↓selectable-clause\}*\*] 

[end] 

*selectable-clause::*=*↓unconditional | ↓accumulation | ↓conditional* 

*termination-test::*=while *form |* until *form |* repeat *form |* always *form |* never *form |* thereis *form for-as-clause::*=*\{*for *|* as*\} ↓for-as-subclause \{*and *↓for-as-subclause\}*\* 

*for-as-subclause::*=*↓for-as-arithmetic | ↓for-as-in-list | ↓for-as-on-list | ↓for-as-equals-then | ↓for-as-across | ↓for-as-hash | ↓for-as-package* 

*for-as-arithmetic::*=*var* [*type-spec*] *↓for-as-arithmetic-subclause* 

*for-as-arithmetic-subclause::*=*↓arithmetic-up | ↓arithmetic-downto | ↓arithmetic-downfrom arithmetic-up::*=[[ *\{*from *|* upfrom*\} form1 | \{*to *|* upto *|* below*\} form2 |* by *form3* ]]\<sup\>+\</sup\> 

*arithmetic-downto::*=[[ *\{*from *form1\}*\<sup\>1\</sup\>*| \{\{*downto *|* above*\} form2\}*\<sup\>1\</sup\>*|* by *form3* ]] 

*arithmetic-downfrom::*=[[ *\{*downfrom *form1\}*\<sup\>1\</sup\>*| \{*to *|* downto *|* above*\} form2 |* by *form3* ]] *for-as-in-list::*=*var* [*type-spec*] in *form1* [by *step-fun*] 

*for-as-on-list::*=*var* [*type-spec*] on *form1* [by *step-fun*] 

*for-as-equals-then::*=*var* [*type-spec*] = *form1* [then *form2*] 

*for-as-across::*=*var* [*type-spec*] across *vector* 

*for-as-hash::*=*var* [*type-spec*] being *\{*each *|* the*\}* 

*\{\{*hash-key *|* hash-keys*\} \{*in *|* of*\} hash-table* 

[using (hash-value *other-var*)] *|* 

*\{*hash-value *|* hash-values*\} \{*in *|* of*\} hash-table* 

[using (hash-key *other-var*)]*\}* 

Iteration **6–39**

 

 

**loop** 

*for-as-package::*=*var* [*type-spec*] being *\{*each *|* the*\}* 

*\{*symbol *|* symbols *|* 

present-symbol *|* present-symbols *|* 

external-symbol *|* external-symbols*\}* 

[*\{*in *|* of*\} package*] 

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

;; An example of the simple form of LOOP. 

(defun sqrt-advisor () 

(loop (format t "~&Number: ") 

(let ((n (parse-integer (read-line) :junk-allowed t))) 

(when (not n) (return)) 

(format t "~&The square root of ~D is ~D.~%" n (sqrt n))))) 

*→* SQRT-ADVISOR 

(sqrt-advisor) 

&#9655; Number: 5*←-* 

&#9655; The square root of 5 is 2.236068. 

&#9655; Number: 4*←-* 

&#9655; The square root of 4 is 2. 

&#9655; Number: done*←-* 

*→* NIL 

;; An example of the extended form of LOOP. 

(defun square-advisor () 

(loop as n = (progn (format t "~&Number: ") 

(parse-integer (read-line) :junk-allowed t)) 

while n 

do (format t "~&The square of ~D is ~D.~%" n (\* n n)))) 

*→* SQUARE-ADVISOR 

(square-advisor) 

&#9655; Number: 4*←-* 

&#9655; The square of 4 is 16. 

&#9655; Number: 23*←-* 

&#9655; The square of 23 is 529. 

&#9655; Number: done*←-* 

*→* NIL 

;; Another example of the extended form of LOOP. 

(loop for n from 1 to 10 

when (oddp n) 

collect n) 

*→* (1 3 5 7 9) 

**See Also:** 

**do**, **dolist**, **dotimes**, **return**, **go**, **throw**, Section 6.1.1.7 (Destructuring) 

Iteration **6–41**

 

 

**Notes:** 

Except that **loop-finish** cannot be used within a simple **loop** *form*, a simple **loop** *form* is related to an extended **loop** *form* in the following way: 

(loop *\{compound-form\}*\*) *≡* (loop do *\{compound-form\}*\*) 

**loop-finish** *Local Macro* 

**Syntax:** 

**loop-finish** *hno argumentsi →* 

**Description:** 

The **loop-finish** *macro* can be used lexically within an extended **loop** *form* to terminate that *form* “normally.” That is, it transfers control to the loop epilogue of the lexically innermost extended **loop** *form*. This permits execution of any **finally** clause (for effect) and the return of any accumulated result. 

**Examples:** 

;; Terminate the loop, but return the accumulated count. 

(loop for i in ’(1 2 3 stop-here 4 5 6) 

when (symbolp i) do (loop-finish) 

count i) 

*→* 3 

;; The preceding loop is equivalent to: 

(loop for i in ’(1 2 3 stop-here 4 5 6) 

until (symbolp i) 

count i) 

*→* 3 

;; While LOOP-FINISH can be used can be used in a variety of 

;; situations it is really most needed in a situation where a need 

;; to exit is detected at other than the loop’s ‘top level’ 

;; (where UNTIL or WHEN often work just as well), or where some 

;; computation must occur between the point where a need to exit is 

;; detected and the point where the exit actually occurs. For example: 

(defun tokenize-sentence (string) 

(macrolet ((add-word (wvar svar) 

‘(when ,wvar 

(push (coerce (nreverse ,wvar) ’string) ,svar) 

(setq ,wvar nil)))) 



 

 

**loop-finish** 

(loop with word = ’() and sentence = ’() and endpos = nil 

for i below (length string) 

do (let ((char (aref string i))) 

(case char 

(#\Space (add-word word sentence)) 

(#\. (setq endpos (1+ i)) (loop-finish)) 

(otherwise (push char word)))) 

finally (add-word word sentence) 

(return (values (nreverse sentence) endpos))))) 

*→* TOKENIZE-SENTENCE 

(tokenize-sentence "this is a sentence. this is another sentence.") 

*→* ("this" "is" "a" "sentence"), 19 

(tokenize-sentence "this is a sentence") 

*→* ("this" "is" "a" "sentence"), NIL 

**Side Effects:** 

Transfers control. 

**Exceptional Situations:** 

Whether or not **loop-finish** is *fbound* in the *global environment* is *implementation-dependent*; however, the restrictions on redefinition and *shadowing* of **loop-finish** are the same as for *symbols* in the COMMON-LISP *package* which are *fbound* in the *global environment*. The consequences of attempting to use **loop-finish** outside of **loop** are undefined. 

**See Also:** 

**loop**, Section 6.1 (The LOOP Facility) 

**Notes:** 

Iteration **6–43**

 

 


