**3.7.2.1 Examples of Transfer of Control during a Destructive Operation** 

The following examples illustrate some of the many ways in which the *implementation-dependent* nature of the modification can manifest itself. 

(let ((a (list 2 1 4 3 7 6 ’five))) 

(ignore-errors (sort a #’\<)) 

a) 

*→* (1 2 3 4 6 7 FIVE) 

\<i\>\<sup\>or\</sup\>→\</i\> (2 1 4 3 7 6 FIVE) 

\<i\>\<sup\>or\</sup\>→\</i\> (2) 

(prog foo ((a (list 1 2 3 4 5 6 7 8 9 10))) 

(sort a #’(lambda (x y) (if (zerop (random 5)) (return-from foo a) (\> x y))))) *→* (1 2 3 4 5 6 7 8 9 10) 

\<i\>\<sup\>or\</sup\>→\</i\> (3 4 5 6 2 7 8 9 10 1) 

\<i\>\<sup\>or\</sup\>→\</i\> (1 2 4 3)  



**lambda** *Symbol* 

**Syntax:** 

**lambda** *lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* 

**Arguments:** 

*lambda-list*—an *ordinary lambda list*. 

*declaration*—a **declare** *expression*; not evaluated. 

*documentation*—a *string*; not evaluated. 

*form*—a *form*. 

**Description:** 

A *lambda expression* is a *list* that can be used in place of a *function name* in certain contexts to denote a *function* by directly describing its behavior rather than indirectly by referring to the name of an *established function*. 

*Documentation* is attached to the denoted *function* (if any is actually created) as a *documentation string*. 

**See Also:** 

**function**, **documentation**, Section 3.1.3 (Lambda Expressions), Section 3.1.2.1.2.4 (Lambda Forms), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 

**Notes:** 

The *lambda form* 

((lambda *lambda-list* . *body*) . *arguments*) 

is semantically equivalent to the *function form* 

(funcall #’(lambda *lambda-list* . *body*) . *arguments*) 

**lambda** *Macro* 

**Syntax:** 

**lambda** *lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* *→ function* 

**Arguments and Values:** 

*lambda-list*—an *ordinary lambda list*.  



*declaration*—a **declare** *expression*; not evaluated. 

*documentation*—a *string*; not evaluated. 

*form*—a *form*. 

*function*—a *function*. 

**Description:** 

Provides a shorthand notation for a **function** *special form* involving a *lambda expression* such that: 

(lambda *lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\*) 

*≡* (function (lambda *lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\*)) 

*≡* #’(lambda *lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\*) 

**Examples:** 

(funcall (lambda (x) (+ x 3)) 4) *→* 7 

**See Also:** 

**lambda** (symbol) 

**Notes:** 

This macro could be implemented by: 

(defmacro lambda (&whole form &rest bvl-decls-and-body) 

(declare (ignore bvl-decls-and-body)) 

‘#’,form) 

**compile** *Function* 

**Syntax:** 

**compile** *name* &optional *definition → function, warnings-p, failure-p* 

**Arguments and Values:** 

*name*—a *function name*, or **nil**. 

*definition*—a *lambda expression* or a *function*. The default is the function definition of *name* if it names a *function*, or the *macro function* of *name* if it names a *macro*. The consequences are undefined if no *definition* is supplied when the *name* is **nil**. 

*function*—the *function-name*, or a *compiled function*. 

*warnings-p*—a *generalized boolean*.  



**compile** 

*failure-p*—a *generalized boolean*. 

**Description:** 

Compiles an *interpreted function*. 

**compile** produces a *compiled function* from *definition*. If the *definition* is a *lambda expression*, it is coerced to a *function*. If the *definition* is already a *compiled function*, **compile** either produces that function itself (*i.e.*, is an identity operation) or an equivalent function. 

If the *name* is **nil**, the resulting *compiled function* is returned directly as the *primary value*. If a *non-nil name* is given, then the resulting *compiled function* replaces the existing *function* definition of *name* and the *name* is returned as the *primary value*; if *name* is a *symbol* that names a *macro*, its *macro function* is updated and the *name* is returned as the *primary value*. 

*Literal objects* appearing in code processed by the **compile** function are neither copied nor *coalesced*. The code resulting from the execution of **compile** references *objects* that are **eql** to the corresponding *objects* in the source code. 

**compile** is permitted, but not required, to *establish* a *handler* for *conditions* of *type* **error**. For example, the *handler* might issue a warning and restart compilation from some *implementation dependent* point in order to let the compilation proceed without manual intervention. 

The *secondary value*, *warnings-p*, is *false* if no *conditions* of *type* **error** or **warning** were detected by the compiler, and *true* otherwise. 

The *tertiary value*, *failure-p*, is *false* if no *conditions* of *type* **error** or **warning** (other than **style-warning**) were detected by the compiler, and *true* otherwise. 

**Examples:** 

(defun foo () "bar") *→* FOO 

(compiled-function-p #’foo) *→ implementation-dependent* 

(compile ’foo) *→* FOO 

(compiled-function-p #’foo) *→ true* 

(setf (symbol-function ’foo) 

(compile nil ’(lambda () "replaced"))) *→* #\<Compiled-Function\> 

(foo) *→* "replaced" 

**Affected By:** 

**\*error-output\***, **\*macroexpand-hook\***. 

The presence of macro definitions and proclamations. 

**Exceptional Situations:** 

The consequences are undefined if the *lexical environment* surrounding the *function* to be compiled contains any *bindings* other than those for *macros*, *symbol macros*, or *declarations*. 

For information about errors detected during the compilation process, see Section 3.2.5 (Exceptional Evaluation and Compilation **3–57**





Situations in the Compiler). 

**See Also:** 

**compile-file** 

**eval** *Function* 

**Syntax:** 

**eval** *form → \{result\}*\* 

**Arguments and Values:** 

*form*—a *form*. 

*results*—the *values yielded* by the *evaluation* of *form*. 

**Description:** 

Evaluates *form* in the current *dynamic environment* and the *null lexical environment*. **eval** is a user interface to the evaluator. 

The evaluator expands macro calls as if through the use of **macroexpand-1**. 

Constants appearing in code processed by **eval** are not copied nor coalesced. The code resulting from the execution of **eval** references *objects* that are **eql** to the corresponding *objects* in the source code. 

**Examples:** 

(setq form ’(1+ a) a 999) *→* 999 

(eval form) *→* 1000 

(eval ’form) *→* (1+ A) 

(let ((a ’(this would break if eval used local value))) (eval form)) 

*→* 1000 

**See Also:** 

**macroexpand-1**, Section 3.1.2 (The Evaluation Model) 

**Notes:** 

To obtain the current dynamic value of a *symbol*, use of **symbol-value** is equivalent (and usually preferable) to use of **eval**. 

Note that an **eval** *form* involves two levels of *evaluation* for its *argument*. First, *form* is *evaluated* by the normal argument evaluation mechanism as would occur with any *call*. The *object* that  



results from this normal *argument evaluation* becomes the *value* of the *form parameter* , and is then *evaluated* as part of the **eval** *form*. For example: 

(eval (list ’cdr (car ’((quote (a . b)) c)))) *→* b 

The *argument form* (list ’cdr (car ’((quote (a . b)) c))) is evaluated in the usual way to produce the *argument* (cdr (quote (a . b))); **eval** then evaluates its *argument*, (cdr (quote (a . b))), to produce b. Since a single *evaluation* already occurs for any *argument form* in any *function form*, **eval** is sometimes said to perform “an extra level of evaluation.” 

**eval-when** *Special Operator* 

**Syntax:** 

**eval-when** (*\{situation\}*\*) *\{form\}*\* *→ \{result\}*\* 

**Arguments and Values:** 

*situation*—One of the *symbols* :compile-toplevel, :load-toplevel, :execute, **compile**, **load**, or **eval**. The use of **eval**, **compile**, and **load** is deprecated. 

*forms*—an *implicit progn*. 

*results*—the *values* of the *forms* if they are executed, or **nil** if they are not. 

**Description:** 

The body of an **eval-when** form is processed as an *implicit progn*, but only in the *situations* listed. 

The use of the *situations* :compile-toplevel (or compile) and :load-toplevel (or load) controls whether and when *evaluation* occurs when **eval-when** appears as a *top level form* in code processed by **compile-file**. See Section 3.2.3 (File Compilation). 

The use of the *situation* :execute (or eval) controls whether evaluation occurs for other **eval-when** *forms*; that is, those that are not *top level forms*, or those in code processed by **eval** or **compile**. If the :execute situation is specified in such a *form*, then the body *forms* are processed as an *implicit progn*; otherwise, the **eval-when** *form* returns **nil**. 

**eval-when** normally appears as a *top level form*, but it is meaningful for it to appear as a *non-top-level form*. However, the compile-time side effects described in Section 3.2 (Compilation) only take place when **eval-when** appears as a *top level form*. 

**Examples:** 

One example of the use of **eval-when** is that for the compiler to be able to read a file properly when it uses user-defined *reader macros*, it is necessary to write 

(eval-when (:compile-toplevel :load-toplevel :execute)  



**eval-when** 

(set-macro-character #\$ #’(lambda (stream char) 

(declare (ignore char)) 

(list ’dollar (read stream))))) *→* T 

This causes the call to **set-macro-character** to be executed in the compiler’s execution environment, thereby modifying its reader syntax table. 

;;; The EVAL-WHEN in this case is not at toplevel, so only the :EXECUTE 

;;; keyword is considered. At compile time, this has no effect. 

;;; At load time (if the LET is at toplevel), or at execution time 

;;; (if the LET is embedded in some other form which does not execute 

;;; until later) this sets (SYMBOL-FUNCTION ’FOO1) to a function which 

;;; returns 1. 

(let ((x 1)) 

(eval-when (:execute :load-toplevel :compile-toplevel) 

(setf (symbol-function ’foo1) #’(lambda () x)))) 

;;; If this expression occurs at the toplevel of a file to be compiled, 

;;; it has BOTH a compile time AND a load-time effect of setting 

;;; (SYMBOL-FUNCTION ’FOO2) to a function which returns 2. 

(eval-when (:execute :load-toplevel :compile-toplevel) 

(let ((x 2)) 

(eval-when (:execute :load-toplevel :compile-toplevel) 

(setf (symbol-function ’foo2) #’(lambda () x))))) 

;;; If this expression occurs at the toplevel of a file to be compiled, 

;;; it has BOTH a compile time AND a load-time effect of setting the 

;;; function cell of FOO3 to a function which returns 3. 

(eval-when (:execute :load-toplevel :compile-toplevel) 

(setf (symbol-function ’foo3) #’(lambda () 3))) 

;;; #4: This always does nothing. It simply returns NIL. 

(eval-when (:compile-toplevel) 

(eval-when (:compile-toplevel) 

(print ’foo4))) 

;;; If this form occurs at toplevel of a file to be compiled, FOO5 is 

;;; printed at compile time. If this form occurs in a non-top-level 

;;; position, nothing is printed at compile time. Regardless of context, 

;;; nothing is ever printed at load time or execution time. 

(eval-when (:compile-toplevel) 

(eval-when (:execute) 

(print ’foo5))) 

;;; If this form occurs at toplevel of a file to be compiled, FOO6 is 

;;; printed at compile time. If this form occurs in a non-top-level  



**eval-when** 

;;; position, nothing is printed at compile time. Regardless of context, 

;;; nothing is ever printed at load time or execution time. 

(eval-when (:execute :load-toplevel) 

(eval-when (:compile-toplevel) 

(print ’foo6))) 

**See Also:** 

**compile-file**, Section 3.2 (Compilation) 

**Notes:** 

The following effects are logical consequences of the definition of **eval-when**: 

*•* Execution of a single **eval-when** expression executes the body code at most once. 

*• Macros* intended for use in *top level forms* should be written so that side-effects are done by the *forms* in the macro expansion. The macro-expander itself should not do the side-effects. 

For example: 

Wrong: 

(defmacro foo () 

(really-foo) 

‘(really-foo)) 

Right: 

(defmacro foo () 

‘(eval-when (:compile-toplevel :execute :load-toplevel) (really-foo))) 

Adherence to this convention means that such *macros* behave intuitively when appearing as *non-top-level forms*. 

*•* Placing a variable binding around an **eval-when** reliably captures the binding because the compile-time-too mode cannot occur (*i.e.*, introducing a variable binding means that the **eval-when** is not a *top level form*). For example, 

(let ((x 3)) 

(eval-when (:execute :load-toplevel :compile-toplevel) (print x))) 

prints 3 at execution (*i.e.*, load) time, and does not print anything at compile time. This is important so that expansions of **defun** and **defmacro** can be done in terms of **eval-when** and can correctly capture the *lexical environment*. 

(defun bar (x) (defun foo () (+ x 3)))  



(defun bar (x) 

(progn (eval-when (:compile-toplevel) 

(compiler::notice-function-definition ’foo ’(x))) 

(eval-when (:execute :load-toplevel) 

(setf (symbol-function ’foo) #’(lambda () (+ x 3)))))) 

which would be treated by the above rules the same as 

(defun bar (x) 

(setf (symbol-function ’foo) #’(lambda () (+ x 3)))) 

when the definition of bar is not a *top level form*. 

**load-time-value** *Special Operator* 

**Syntax:** 

**load-time-value** *form* &optional *read-only-p → object* 

**Arguments and Values:** 

*form*—a *form*; evaluated as described below. 

*read-only-p*—a *boolean*; not evaluated. 

*object*—the *primary value* resulting from evaluating *form*. 

**Description:** 

**load-time-value** provides a mechanism for delaying evaluation of *form* until the expression is in the run-time environment; see Section 3.2 (Compilation). 

*Read-only-p* designates whether the result can be considered a *constant object*. If **t**, the result is a read-only quantity that can, if appropriate to the *implementation*, be copied into read-only space and/or *coalesced* with *similar constant objects* from other *programs*. If **nil** (the default), the result must be neither copied nor coalesced; it must be considered to be potentially modifiable data. 

If a **load-time-value** expression is processed by **compile-file**, the compiler performs its normal semantic processing (such as macro expansion and translation into machine code) on *form*, but arranges for the execution of *form* to occur at load time in a *null lexical environment*, with the result of this *evaluation* then being treated as a *literal object* at run time. It is guaranteed that 

the evaluation of *form* will take place only once when the *file* is *loaded*, but the order of evaluation with respect to the evaluation of *top level forms* in the file is *implementation-dependent*. 

If a **load-time-value** expression appears within a function compiled with **compile**, the *form* is evaluated at compile time in a *null lexical environment*. The result of this compile-time evaluation is treated as a *literal object* in the compiled code.  



**load-time-value** 

If a **load-time-value** expression is processed by **eval**, *form* is evaluated in a *null lexical environment*, and one value is returned. Implementations that implicitly compile (or partially compile) expressions processed by **eval** might evaluate *form* only once, at the time this compilation is performed. 

If the *same list* (load-time-value *form*) is evaluated or compiled more than once, it is *implementation-dependent* whether *form* is evaluated only once or is evaluated more than once. This can happen both when an expression being evaluated or compiled shares substructure, and when the *same form* is processed by **eval** or **compile** multiple times. Since a **load-time-value** expression can be referenced in more than one place and can be evaluated multiple times by **eval**, it is *implementation-dependent* whether each execution returns a fresh *object* or returns the same *object* as some other execution. Users must use caution when destructively modifying the resulting *object*. 

If two lists (load-time-value *form*) that are the *same* under **equal** but are not *identical* are evaluated or compiled, their values always come from distinct evaluations of *form*. Their *values* may not be coalesced unless *read-only-p* is **t**. 

**Examples:** 

;;; The function INCR1 always returns the same value, even in different images. ;;; The function INCR2 always returns the same value in a given image, 

;;; but the value it returns might vary from image to image. 

(defun incr1 (x) (+ x #.(random 17))) 

(defun incr2 (x) (+ x (load-time-value (random 17)))) 

;;; The function FOO1-REF references the nth element of the first of 

;;; the \*FOO-ARRAYS\* that is available at load time. It is permissible for 

;;; that array to be modified (e.g., by SET-FOO1-REF); FOO1-REF will see the 

;;; updated values. 

(defvar \*foo-arrays\* (list (make-array 7) (make-array 8))) 

(defun foo1-ref (n) (aref (load-time-value (first \*my-arrays\*) nil) n)) 

(defun set-foo1-ref (n val) 

(setf (aref (load-time-value (first \*my-arrays\*) nil) n) val)) 

;;; The function BAR1-REF references the nth element of the first of 

;;; the \*BAR-ARRAYS\* that is available at load time. The programmer has 

;;; promised that the array will be treated as read-only, so the system 

;;; can copy or coalesce the array. 

(defvar \*bar-arrays\* (list (make-array 7) (make-array 8))) 

(defun bar1-ref (n) (aref (load-time-value (first \*my-arrays\*) t) n)) 

;;; This use of LOAD-TIME-VALUE permits the indicated vector to be coalesced 

;;; even though NIL was specified, because the object was already read-only 

;;; when it was written as a literal vector rather than created by a constructor. ;;; User programs must treat the vector v as read-only. 

(defun baz-ref (n)  



(let ((v (load-time-value #(A B C) nil))) 

(values (svref v n) v))) 

;;; This use of LOAD-TIME-VALUE permits the indicated vector to be coalesced 

;;; even though NIL was specified in the outer situation because T was specified ;;; in the inner situation. User programs must treat the vector v as read-only. (defun baz-ref (n) 

(let ((v (load-time-value (load-time-value (vector 1 2 3) t) nil))) 

(values (svref v n) v))) 

**See Also:** 

**compile-file**, **compile**, **eval**, Section 3.2.2.2 (Minimal Compilation), Section 3.2 (Compilation) 

**Notes:** 

**load-time-value** must appear outside of quoted structure in a “for *evaluation*” position. In situations which would appear to call for use of **load-time-value** within a quoted structure, the *backquote reader macro* is probably called for; see Section 2.4.6 (Backquote). 

Specifying **nil** for *read-only-p* is not a way to force an object to become modifiable if it has already been made read-only. It is only a way to say that, for an object that is modifiable, this operation is not intended to make that object read-only. 

**quote** *Special Operator* 

**Syntax:** 

**quote** *object → object* 

**Arguments and Values:** 

*object*—an *object*; not evaluated. 

**Description:** 

The **quote** *special operator* just returns *object*. 

The consequences are undefined if *literal objects* (including *quoted objects*) are destructively modified. 

**Examples:** 

(setq a 1) *→* 1 

(quote (setq a 3)) *→* (SETQ A 3) 

a *→* 1 

’a *→* A 

”a *→* (QUOTE A)  



”’a *→* (QUOTE (QUOTE A)) 

(setq a 43) *→* 43 

(list a (cons a 3)) *→* (43 (43 . 3)) 

(list (quote a) (quote (cons a 3))) *→* (A (CONS A 3)) 

1 *→* 1 

’1 *→* 1 

"foo" *→* "foo" 

’"foo" *→* "foo" 

(car ’(a b)) *→* A 

’(car ’(a b)) *→* (CAR (QUOTE (A B))) 

#(car ’(a b)) *→* #(CAR (QUOTE (A B))) 

’#(car ’(a b)) *→* #(CAR (QUOTE (A B))) 

**See Also:** 

Section 3.1 (Evaluation), Section 2.4.3 (Single-Quote), Section 3.2.1 (Compiler Terminology) 

**Notes:** 

The textual notation ’*object* is equivalent to (quote *object*); see Section 3.2.1 (Compiler Terminology). 

Some *objects*, called *self-evaluating objects*, do not require quotation by **quote**. However, *symbols* and *lists* are used to represent parts of programs, and so would not be useable as constant data in a program without **quote**. Since **quote** suppresses the *evaluation* of these *objects*, they become data rather than program. 

**compiler-macro-function** *Accessor* 

**Syntax:** 

**compiler-macro-function** *name* &optional *environment → function* 

**(setf (compiler-macro-function** *name* &optional *environment***)** *new-function***)** 

**Arguments and Values:** 

*name*—a *function name*. 

*environment*—an *environment object*. 

*function*, *new-function*—a *compiler macro function*, or **nil**. 

**Description:** 

*Accesses* the *compiler macro function* named *name*, if any, in the *environment*.  



A value of **nil** denotes the absence of a *compiler macro function* named *name*. 

**Exceptional Situations:** 

The consequences are undefined if *environment* is *non-nil* in a use of **setf** of **compiler-macro-function**. 

**See Also:** 

**define-compiler-macro**, Section 3.2.2.1 (Compiler Macros) 

**define-compiler-macro** *Macro* 

**Syntax:** 

**define-compiler-macro** *name lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* *→ name* 

**Arguments and Values:** 

*name*—a *function name*. 

*lambda-list*—a *macro lambda list*. 

*declaration*—a **declare** *expression*; not evaluated. 

*documentation*—a *string*; not evaluated. 

*form*—a *form*. 

**Description:** 

This is the normal mechanism for defining a *compiler macro function*. Its manner of definition is the same as for **defmacro**; the only differences are: 

*•* The *name* can be a *function name* naming any *function* or *macro*. 

*•* The expander function is installed as a *compiler macro function* for the *name*, rather than as a *macro function*. 

*•* The **&whole** argument is bound to the form argument that is passed to the *compiler macro function*. The remaining lambda-list parameters are specified as if this form contained the function name in the *car* and the actual arguments in the *cdr* , but if the *car* of the actual form is the symbol **funcall**, then the destructuring of the arguments is actually performed using its *cddr* instead. 

*• Documentation* is attached as a *documentation string* to *name* (as kind **compiler-macro**) and to the *compiler macro function*.  



**define-compiler-macro** 

*•* Unlike an ordinary *macro*, a *compiler macro* can decline to provide an expansion merely by returning a form that is the *same* as the original (which can be obtained by using **&whole**). 

**Examples:** 

(defun square (x) (expt x 2)) *→* SQUARE 

(define-compiler-macro square (&whole form arg) 

(if (atom arg) 

‘(expt ,arg 2) 

(case (car arg) 

(square (if (= (length arg) 2) 

‘(expt ,(nth 1 arg) 4) 

form)) 

(expt (if (= (length arg) 3) 

(if (numberp (nth 2 arg)) 

‘(expt ,(nth 1 arg) ,(\* 2 (nth 2 arg))) 

‘(expt ,(nth 1 arg) (\* 2 ,(nth 2 arg)))) 

form)) 

(otherwise ‘(expt ,arg 2))))) *→* SQUARE 

(square (square 3)) *→* 81 

(macroexpand ’(square x)) *→* (SQUARE X), *false* 

(funcall (compiler-macro-function ’square) ’(square x) nil) 

*→* (EXPT X 2) 

(funcall (compiler-macro-function ’square) ’(square (square x)) nil) 

*→* (EXPT X 4) 

(funcall (compiler-macro-function ’square) ’(funcall #’square x) nil) 

*→* (EXPT X 2) 

(defun distance-positional (x1 y1 x2 y2) 

(sqrt (+ (expt (- x2 x1) 2) (expt (- y2 y1) 2)))) 

*→* DISTANCE-POSITIONAL 

(defun distance (&key (x1 0) (y1 0) (x2 x1) (y2 y1)) 

(distance-positional x1 y1 x2 y2)) 

*→* DISTANCE 

(define-compiler-macro distance (&whole form 

&rest key-value-pairs 

&key (x1 0 x1-p) 

(y1 0 y1-p) 

(x2 x1 x2-p) 

(y2 y1 y2-p) 

&allow-other-keys 

&environment env) 

(flet ((key (n) (nth (\* n 2) key-value-pairs)) 

(arg (n) (nth (1+ (\* n 2)) key-value-pairs)) 

(simplep (x)  



**define-compiler-macro** 

(let ((expanded-x (macroexpand x env))) 

(or (constantp expanded-x env) 

(symbolp expanded-x))))) 

(let ((n (/ (length key-value-pairs) 2))) 

(multiple-value-bind (x1s y1s x2s y2s others) 

(loop for (key) on key-value-pairs by #’cddr 

count (eq key ’:x1) into x1s 

count (eq key ’:y1) into y1s 

count (eq key ’:x2) into x2s 

count (eq key ’:y1) into y2s 

count (not (member key ’(:x1 :x2 :y1 :y2))) 

into others 

finally (return (values x1s y1s x2s y2s others))) 

(cond ((and (= n 4) 

(eq (key 0) :x1) 

(eq (key 1) :y1) 

(eq (key 2) :x2) 

(eq (key 3) :y2)) 

‘(distance-positional ,x1 ,y1 ,x2 ,y2)) 

((and (if x1-p (and (= x1s 1) (simplep x1)) t) 

(if y1-p (and (= y1s 1) (simplep y1)) t) 

(if x2-p (and (= x2s 1) (simplep x2)) t) 

(if y2-p (and (= y2s 1) (simplep y2)) t) 

(zerop others)) 

‘(distance-positional ,x1 ,y1 ,x2 ,y2)) 

((and (\< x1s 2) (\< y1s 2) (\< x2s 2) (\< y2s 2) 

(zerop others)) 

(let ((temps (loop repeat n collect (gensym)))) 

‘(let ,(loop for i below n 

collect (list (nth i temps) (arg i))) 

(distance 

,@(loop for i below n 

append (list (key i) (nth i temps))))))) 

(t form)))))) 

*→* DISTANCE 

(dolist (form 

’((distance :x1 (setq x 7) :x2 (decf x) :y1 (decf x) :y2 (decf x)) (distance :x1 (setq x 7) :y1 (decf x) :x2 (decf x) :y2 (decf x)) 

(distance :x1 (setq x 7) :y1 (incf x)) 

(distance :x1 (setq x 7) :y1 (incf x) :x1 (incf x)) 

(distance :x1 a1 :y1 b1 :x2 a2 :y2 b2) 

(distance :x1 a1 :x2 a2 :y1 b1 :y2 b2) 

(distance :x1 a1 :y1 b1 :z1 c1 :x2 a2 :y2 b2 :z2 c2))) 

(print (funcall (compiler-macro-function ’distance) form nil))) 

&#9655; (LET ((#:G6558 (SETQ X 7))  



&#9655; (#:G6559 (DECF X)) 

&#9655; (#:G6560 (DECF X)) 

&#9655; (#:G6561 (DECF X))) 

&#9655; (DISTANCE :X1 #:G6558 :X2 #:G6559 :Y1 #:G6560 :Y2 #:G6561)) 

&#9655; (DISTANCE-POSITIONAL (SETQ X 7) (DECF X) (DECF X) (DECF X)) 

&#9655; (LET ((#:G6567 (SETQ X 7)) 

&#9655; (#:G6568 (INCF X))) 

&#9655; (DISTANCE :X1 #:G6567 :Y1 #:G6568)) 

&#9655; (DISTANCE :X1 (SETQ X 7) :Y1 (INCF X) :X1 (INCF X)) 

&#9655; (DISTANCE-POSITIONAL A1 B1 A2 B2) 

&#9655; (DISTANCE-POSITIONAL A1 B1 A2 B2) 

&#9655; (DISTANCE :X1 A1 :Y1 B1 :Z1 C1 :X2 A2 :Y2 B2 :Z2 C2) 

*→* NIL 

**See Also:** 

**compiler-macro-function**, **defmacro**, **documentation**, Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 

**Notes:** 

The consequences of writing a *compiler macro* definition for a function in the COMMON-LISP *package* are undefined; it is quite possible that in some *implementations* such an attempt would override an equivalent or equally important definition. In general, it is recommended that a programmer only write *compiler macro* definitions for *functions* he or she personally maintains–writing a *compiler macro* definition for a function maintained elsewhere is normally considered a violation of traditional rules of modularity and data abstraction. 

**defmacro** *Macro* 

**Syntax:** 

**defmacro** *name lambda-list* [[ *\{declaration\}*\* *| documentation* ]] *\{form\}*\* 

*→ name* 

**Arguments and Values:** 

*name*—a *symbol*. 

*lambda-list*—a *macro lambda list*. 

*declaration*—a **declare** *expression*; not evaluated. 

*documentation*—a *string*; not evaluated. 

*form*—a *form*.  



**defmacro** 

**Description:** 

Defines *name* as a *macro* by associating a *macro function* with that *name* in the global environment. The *macro function* is defined in the same *lexical environment* in which the **defmacro** *form* appears. 

The parameter variables in *lambda-list* are bound to destructured portions of the macro call. 

The expansion function accepts two arguments, a *form* and an *environment*. The expansion function returns a *form*. The body of the expansion function is specified by *forms*. *Forms* are executed in order. The value of the last *form* executed is returned as the expansion of the *macro*. The body *forms* of the expansion function (but not the *lambda-list*) are implicitly enclosed in a *block* whose name is *name*. 

The *lambda-list* conforms to the requirements described in Section 3.4.4 (Macro Lambda Lists). 

*Documentation* is attached as a *documentation string* to *name* (as kind **function**) and to the *macro function*. 

**defmacro** can be used to redefine a *macro* or to replace a *function* definition with a *macro* definition. 

Recursive expansion of the *form* returned must terminate, including the expansion of other *macros* which are *subforms* of other *forms* returned. 

The consequences are undefined if the result of fully macroexpanding a *form* contains any *circular list structure* except in *literal objects*. 

If a **defmacro** *form* appears as a *top level form*, the *compiler* must store the *macro* definition at compile time, so that occurrences of the macro later on in the file can be expanded correctly. Users must ensure that the body of the *macro* can be evaluated at compile time if it is referenced within the *file* being *compiled*. 

**Examples:** 

(defmacro mac1 (a b) "Mac1 multiplies and adds" 

‘(+ ,a (\* ,b 3))) *→* MAC1 

(mac1 4 5) *→* 19 

(documentation ’mac1 ’function) *→* "Mac1 multiplies and adds" 

(defmacro mac2 (&optional (a 2 b) (c 3 d) &rest x) ‘’(,a ,b ,c ,d ,x)) *→* MAC2 (mac2 6) *→* (6 T 3 NIL NIL) 

(mac2 6 3 8) *→* (6 T 3 T (8)) 

(defmacro mac3 (&whole r a &optional (b 3) &rest x &key c (d a)) 

‘’(,r ,a ,b ,c ,d ,x)) *→* MAC3 

(mac3 1 6 :d 8 :c 9 :d 10) *→* ((MAC3 1 6 :D 8 :C 9 :D 10) 1 6 9 8 (:D 8 :C 9 :D 10)) 

The stipulation that an embedded *destructuring lambda list* is permitted only where *ordinary lambda list* syntax would permit a parameter name but not a *list* is made to prevent ambiguity. For example, the following is not valid:  



**defmacro** 

(defmacro loser (x &optional (a b &rest c) &rest z) 

...) 

because *ordinary lambda list* syntax does permit a *list* following &optional; the list (a b &rest c) would be interpreted as describing an optional parameter named a whose default value is that of the form b, with a supplied-p parameter named **&rest** (not valid), and an extraneous symbol c in the list (also not valid). An almost correct way to express this is 

(defmacro loser (x &optional ((a b &rest c)) &rest z) 

...) 

The extra set of parentheses removes the ambiguity. However, the definition is now incorrect because a macro call such as (loser (car pool)) would not provide any argument form for the lambda list (a b &rest c), and so the default value against which to match the *lambda list* would be **nil** because no explicit default value was specified. The consequences of this are unspecified since the empty list, **nil**, does not have *forms* to satisfy the parameters a and b. The fully correct definition would be either 

(defmacro loser (x &optional ((a b &rest c) ’(nil nil)) &rest z) 

...) 

or 

(defmacro loser (x &optional ((&optional a b &rest c)) &rest z) 

...) 

These differ slightly: the first requires that if the macro call specifies a explicitly then it must also specify b explicitly, whereas the second does not have this requirement. For example, 

(loser (car pool) ((+ x 1))) 

would be a valid call for the second definition but not for the first. 

(defmacro dm1a (&whole x) ‘’,x) 

(macroexpand ’(dm1a)) *→* (QUOTE (DM1A)) 

(macroexpand ’(dm1a a)) is an error. 

(defmacro dm1b (&whole x a &optional b) ‘’(,x ,a ,b)) 

(macroexpand ’(dm1b)) is an error. 

(macroexpand ’(dm1b q)) *→* (QUOTE ((DM1B Q) Q NIL)) 

(macroexpand ’(dm1b q r)) *→* (QUOTE ((DM1B Q R) Q R)) 

(macroexpand ’(dm1b q r s)) is an error. 

(defmacro dm2a (&whole form a b) ‘’(form ,form a ,a b ,b)) 

(macroexpand ’(dm2a x y)) *→* (QUOTE (FORM (DM2A X Y) A X B Y)) 

(dm2a x y) *→* (FORM (DM2A X Y) A X B Y) 

(defmacro dm2b (&whole form a (&whole b (c . d) &optional (e 5)) 

&body f &environment env)  



“(,’,form „a ,’,b ,’,(macroexpand c env) ,’,d ,’,e ,’,f)) 

;Note that because backquote is involved, implementations may differ 

;slightly in the nature (though not the functionality) of the expansion. 

(macroexpand ’(dm2b x1 (((incf x2) x3 x4)) x5 x6)) 

*→* (LIST\* ’(DM2B X1 (((INCF X2) X3 X4)) 

X5 X6) 

X1 

’((((INCF X2) X3 X4)) (SETQ X2 (+ X2 1)) (X3 X4) 5 (X5 X6))), 

T 

(let ((x1 5)) 

(macrolet ((segundo (x) ‘(cadr ,x))) 

(dm2b x1 (((segundo x2) x3 x4)) x5 x6))) 

*→* ((DM2B X1 (((SEGUNDO X2) X3 X4)) X5 X6) 

5 (((SEGUNDO X2) X3 X4)) (CADR X2) (X3 X4) 5 (X5 X6)) 

**See Also:** 

**define-compiler-macro**, **destructuring-bind**, **documentation**, **macroexpand**, 

**\*macroexpand-hook\***, **macrolet**, **macro-function**, Section 3.1 (Evaluation), Section 3.2 (Compilation), Section 3.4.11 (Syntactic Interaction of Documentation Strings and Declarations) 

**macro-function** *Accessor* 

**Syntax:** 

**macro-function** *symbol* &optional *environment → function* 

**(setf (macro-function** *symbol* &optional *environment***)** *new-function***)** 

**Arguments and Values:** 

*symbol*—a *symbol*. 

*environment*—an *environment object*. 

*function*—a *macro function* or **nil**. 

*new-function*—a *macro function*. 

**Description:** 

Determines whether *symbol* has a function definition as a macro in the specified *environment*. 





If so, the macro expansion function, a function of two arguments, is returned. If *symbol* has no function definition in the lexical environment *environment*, or its definition is not a *macro*, **macro-function** returns **nil**. 

It is possible for both **macro-function** and **special-operator-p** to return *true* of *symbol*. The *macro* definition must be available for use by programs that understand only the standard Common Lisp *special forms*. 

**Examples:** 

(defmacro macfun (x) ’(macro-function ’macfun)) *→* MACFUN 

(not (macro-function ’macfun)) *→ false* 

(macrolet ((foo (&environment env) 

(if (macro-function ’bar env) 

”yes 

”no))) 

(list (foo) 

(macrolet ((bar () :beep)) 

(foo)))) 

*→* (NO YES) 

**Affected By:** 

(setf macro-function), **defmacro**, and **macrolet**. 

**Exceptional Situations:** 

The consequences are undefined if *environment* is *non-nil* in a use of **setf** of **macro-function**. 

**See Also:** 

**defmacro**, Section 3.1 (Evaluation) 

**Notes:** 

**setf** can be used with **macro-function** to install a *macro* as a symbol’s global function definition: (setf (macro-function symbol) fn) 

The value installed must be a *function* that accepts two arguments, the entire macro call and an *environment*, and computes the expansion for that call. Performing this operation causes *symbol* to have only that macro definition as its global function definition; any previous definition, whether as a *macro* or as a *function*, is lost.  



**macroexpand, macroexpand-1** 

**macroexpand, macroexpand-1** *Function* 

**Syntax:** 

**macroexpand** *form* &optional *env → expansion, expanded-p* 

**macroexpand-1** *form* &optional *env → expansion, expanded-p* 

**Arguments and Values:** 

*form*—a *form*. 

*env*—an *environment object*. The default is **nil**. 

*expansion*—a *form*. 

*expanded-p*—a *generalized boolean*. 

**Description:** 

**macroexpand** and **macroexpand-1** expand *macros*. 

If *form* is a *macro form*, then **macroexpand-1** expands the *macro form* call once. 

**macroexpand** repeatedly expands *form* until it is no longer a *macro form*. In effect, **macroexpand** calls **macroexpand-1** repeatedly until the *secondary value* it returns is **nil**. 

If *form* is a *macro form*, then the *expansion* is a *macro expansion* and *expanded-p* is *true*. Otherwise, the *expansion* is the given *form* and *expanded-p* is *false*. 

Macro expansion is carried out as follows. Once **macroexpand-1** has determined that the *form* is a *macro form*, it obtains an appropriate expansion *function* for the *macro* or *symbol macro*. The value of **\*macroexpand-hook\*** is coerced to a *function* and then called as a *function* of three arguments: the expansion *function*, the *form*, and the *env*. The *value* returned from this call is taken to be the expansion of the *form*. 

In addition to *macro* definitions in the global environment, any local macro definitions established within *env* by **macrolet** or **symbol-macrolet** are considered. If only *form* is supplied as an argument, then the environment is effectively null, and only global macro definitions as established by **defmacro** are considered. *Macro* definitions are shadowed by local *function* definitions. 

**Examples:** 

(defmacro alpha (x y) ‘(beta ,x ,y)) *→* ALPHA 

(defmacro beta (x y) ‘(gamma ,x ,y)) *→* BETA 

(defmacro delta (x y) ‘(gamma ,x ,y)) *→* EPSILON 

(defmacro expand (form &environment env) 

(multiple-value-bind (expansion expanded-p) 

(macroexpand form env) 

‘(values ’,expansion ’,expanded-p))) *→* EXPAND  



**macroexpand, macroexpand-1** 

(defmacro expand-1 (form &environment env) 

(multiple-value-bind (expansion expanded-p) 

(macroexpand-1 form env) 

‘(values ’,expansion ’,expanded-p))) *→* EXPAND-1 

;; Simple examples involving just the global environment 

(macroexpand-1 ’(alpha a b)) *→* (BETA A B), *true* 

(expand-1 (alpha a b)) *→* (BETA A B), *true* 

(macroexpand ’(alpha a b)) *→* (GAMMA A B), *true* 

(expand (alpha a b)) *→* (GAMMA A B), *true* 

(macroexpand-1 ’not-a-macro) *→* NOT-A-MACRO, *false* 

(expand-1 not-a-macro) *→* NOT-A-MACRO, *false* 

(macroexpand ’(not-a-macro a b)) *→* (NOT-A-MACRO A B), *false* 

(expand (not-a-macro a b)) *→* (NOT-A-MACRO A B), *false* 

;; Examples involving lexical environments 

(macrolet ((alpha (x y) ‘(delta ,x ,y))) 

(macroexpand-1 ’(alpha a b))) *→* (BETA A B), *true* 

(macrolet ((alpha (x y) ‘(delta ,x ,y))) 

(expand-1 (alpha a b))) *→* (DELTA A B), *true* 

(macrolet ((alpha (x y) ‘(delta ,x ,y))) 

(macroexpand ’(alpha a b))) *→* (GAMMA A B), *true* 

(macrolet ((alpha (x y) ‘(delta ,x ,y))) 

(expand (alpha a b))) *→* (GAMMA A B), *true* 

(macrolet ((beta (x y) ‘(epsilon ,x ,y))) 

(expand (alpha a b))) *→* (EPSILON A B), *true* 

(let ((x (list 1 2 3))) 

(symbol-macrolet ((a (first x))) 

(expand a))) *→* (FIRST X), *true* 

(let ((x (list 1 2 3))) 

(symbol-macrolet ((a (first x))) 

(macroexpand ’a))) *→* A, *false* 

(symbol-macrolet ((b (alpha x y))) 

(expand-1 b)) *→* (ALPHA X Y), *true* 

(symbol-macrolet ((b (alpha x y))) 

(expand b)) *→* (GAMMA X Y), *true* 

(symbol-macrolet ((b (alpha x y)) 

(a b)) 

(expand-1 a)) *→* B, *true* 

(symbol-macrolet ((b (alpha x y)) 

(a b)) 

(expand a)) *→* (GAMMA X Y), *true*  



;; Examples of shadowing behavior 

(flet ((beta (x y) (+ x y))) 

(expand (alpha a b))) *→* (BETA A B), *true* 

(macrolet ((alpha (x y) ‘(delta ,x ,y))) 

(flet ((alpha (x y) (+ x y))) 

(expand (alpha a b)))) *→* (ALPHA A B), *false* 

(let ((x (list 1 2 3))) 

(symbol-macrolet ((a (first x))) 

(let ((a x)) 

(expand a)))) *→* A, *false* 

**Affected By:** 

**defmacro**, **setf** of **macro-function**, **macrolet**, **symbol-macrolet** 

**See Also:** 

**\*macroexpand-hook\***, **defmacro**, **setf** of **macro-function**, **macrolet**, **symbol-macrolet**, Section 3.1 (Evaluation) 

**Notes:** 

Neither **macroexpand** nor **macroexpand-1** makes any explicit attempt to expand *macro forms* that are either *subforms* of the *form* or *subforms* of the *expansion*. Such expansion might occur implicitly, however, due to the semantics or implementation of the *macro function*. 

**define-symbol-macro** *Macro* 

**Syntax:** 

**define-symbol-macro** *symbol expansion* 

*→ symbol* 

**Arguments and Values:** 

*symbol*—a *symbol*. 

*expansion*—a *form*. 

**Description:** 

Provides a mechanism for globally affecting the *macro expansion* of the indicated *symbol*. 

Globally establishes an expansion function for the *symbol macro* named by *symbol*. The only guaranteed property of an expansion *function* for a *symbol macro* is that when it is applied to the *form* and the *environment* it returns the correct expansion. (In particular, it is *implementation dependent* whether the expansion is conceptually stored in the expansion function, the *environment*, or both.)  



Each global reference to *symbol* (*i.e.*, not *shadowed* \<sub\>2\</sub\> by a *binding* for a *variable* or *symbol macro* named by the same *symbol*) is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a *symbol macro* is subject to further *macro expansion* in the same *lexical environment* as the *symbol macro* reference, exactly analogous to normal *macros*. 

The consequences are unspecified if a **special** declaration is made for *symbol* while in the scope of this definition (*i.e.*, when it is not *shadowed* \<sub\>2\</sub\> by a *binding* for a *variable* or *symbol macro* named by the same *symbol*). 

Any use of **setq** to set the value of the *symbol* while in the scope of this definition is treated as if it were a **setf**. **psetq** of *symbol* is treated as if it were a **psetf**, and **multiple-value-setq** is treated as if it were a **setf** of **values**. 

A *binding* for a *symbol macro* can be *shadowed* \<sub\>2\</sub\> by **let** or **symbol-macrolet**. 

**Examples:** 

(defvar \*things\* (list ’alpha ’beta ’gamma)) *→* \*THINGS\* 

(define-symbol-macro thing1 (first \*things\*)) *→* THING1 

(define-symbol-macro thing2 (second \*things\*)) *→* THING2 

(define-symbol-macro thing3 (third \*things\*)) *→* THING3 

thing1 *→* ALPHA 

(setq thing1 ’ONE) *→* ONE 

\*things\* *→* (ONE BETA GAMMA) 

(multiple-value-setq (thing2 thing3) (values ’two ’three)) *→* TWO 

thing3 *→* THREE 

\*things\* *→* (ONE TWO THREE) 

(list thing2 (let ((thing2 2)) thing2)) *→* (TWO 2) 

**Exceptional Situations:** 

If *symbol* is already defined as a *global variable*, an error of *type* **program-error** is signaled. 

**See Also:** 

**symbol-macrolet**, **macroexpand**  



**symbol-macrolet** 

**symbol-macrolet** *Special Operator* 

**Syntax:** 

**symbol-macrolet** (*\{*(*symbol expansion*)*\}*\*) *\{declaration\}*\* *\{form\}*\* 

*→ \{result\}*\* 

**Arguments and Values:** 

*symbol*—a *symbol*. 

*expansion*—a *form*. 

*declaration*—a **declare** *expression*; not evaluated. 

*forms*—an *implicit progn*. 

*results*—the *values* returned by the *forms*. 

**Description:** 

**symbol-macrolet** provides a mechanism for affecting the *macro expansion* environment for *symbols*. 

**symbol-macrolet** lexically establishes expansion functions for each of the *symbol macros* named by *symbols*. The only guaranteed property of an expansion *function* for a *symbol macro* is that when it is applied to the *form* and the *environment* it returns the correct expansion. (In particular, it is *implementation-dependent* whether the expansion is conceptually stored in the expansion function, the *environment*, or both.) 

Each reference to *symbol* as a variable within the lexical *scope* of **symbol-macrolet** is expanded by the normal macro expansion process; see Section 3.1.2.1.1 (Symbols as Forms). The expansion of a symbol macro is subject to further macro expansion in the same lexical environment as the symbol macro invocation, exactly analogous to normal *macros*. 

Exactly the same *declarations* are allowed as for **let** with one exception: **symbol-macrolet** signals an error if a **special** declaration names one of the *symbols* being defined by **symbol-macrolet**. 

When the *forms* of the **symbol-macrolet** form are expanded, any use of **setq** to set the value of one of the specified variables is treated as if it were a **setf**. **psetq** of a *symbol* defined as a symbol macro is treated as if it were a **psetf**, and **multiple-value-setq** is treated as if it were a **setf** of **values**. 

The use of **symbol-macrolet** can be shadowed by **let**. In other words, **symbol-macrolet** only substitutes for occurrences of *symbol* that would be in the *scope* of a lexical binding of *symbol* surrounding the *forms*. 

**Examples:** 

;;; The following is equivalent to 

;;; (list ’foo (let ((x ’bar)) x)), 
