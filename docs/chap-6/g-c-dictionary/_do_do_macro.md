**do, do***∗ Macro* 



**Syntax:** 



<DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> (*\{var |* (*var* [*init-form* [*step-form*]])*\}*\*) 



(*end-test-form \{result-form\}*\*) 



<GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



*→ \{result\}*\* 



<DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink> (*\{var |* (*var* [*init-form* [*step-form*]])*\}*\*) 



(*end-test-form \{result-form\}*\*) 



<GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*var*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*init-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*step-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*end-test-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*result-forms*—an *implicit progn*. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



*results*—if a <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> or <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> form is executed, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> passed from that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; otherwise, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the *result-forms*. 



**Description:** 



<DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> iterates over a group of *statements* while a test condition holds. <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> accepts an arbitrary number of iteration *vars* which are bound within the iteration and stepped in parallel. An initial value may be supplied for each iteration variable by use of an *init-form*. *Step-forms* may be used to specify how the *vars* should be updated on succeeding iterations through the loop. *Step-forms* may be used both to generate successive values or to accumulate results. If the *end-test-form* condition is met prior to an execution of the body, the iteration terminates. <GlossaryTerm styled={true} term={"tag"}><i>Tags</i></GlossaryTerm> label *statements*. 



<DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink> is exactly like <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> except that the <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> and steppings of the *vars* are performed sequentially rather than in parallel. 







 



 



**do, do***∗* 



Before the first iteration, all the *init-forms* are evaluated, and each *var* is bound to the value of its respective *init-form*, if supplied. This is a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm>, not an assignment; when the loop terminates, the old values of those variables will be restored. For <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink>, all of the *init-forms* are evaluated before 



any *var* is bound. The *init-forms* can refer to the <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of the *vars* visible before beginning execution of <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink>. For <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>, the first *init-form* is evaluated, then the first *var* is bound to that value, then the second *init-form* is evaluated, then the second *var* is bound, and so on; in general, the *k*th *init-form* can refer to the new binding of the *j*th *var* if *j* &lt; *k*, and otherwise to the old binding of the *j*th *var*. 



At the beginning of each iteration, after processing the variables, the *end-test-form* is evaluated. If the result is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, execution proceeds with the body of the <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> (or <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>) form. If the result is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the *result-forms* are evaluated in order as an *implicit progn*, and then <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> or <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink> returns. 



At the beginning of each iteration other than the first, *vars* are updated as follows. All the *step-forms*, if supplied, are evaluated, from left to right, and the resulting values are assigned to the respective *vars*. Any *var* that has no associated *step-form* is not assigned to. For <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink>, all the *step-forms* are evaluated before any *var* is updated; the assignment of values to *vars* is done in parallel, as if by <DictionaryLink styled={true} term={"psetq"}><b>psetq</b></DictionaryLink>. Because all of the *step-forms* are evaluated before any of the *vars* are altered, a *step-form* when evaluated always has access to the old values of all the *vars*, even if other *step-forms* precede it. For <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>, the first *step-form* is evaluated, then the value is assigned to the first *var*, then the second *step-form* is evaluated, then the value is assigned to the second *var*, and so on; the assignment of values to variables is done sequentially, as if by <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>. For either <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> or <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>, after the *vars* have been updated, the *end-test-form* is evaluated as described above, and the iteration continues. 



The remainder of the <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> (or <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>) form constitutes an *implicit tagbody*. *Tags* may appear within the body of a <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> loop for use by <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> statements appearing in the body (but such <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> statements may not appear in the variable specifiers, the *end-test-form*, or the *result-forms*). When the end of a <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> body is reached, the next iteration cycle (beginning with the evaluation of *step-forms*) occurs. 



An *implicit block* named <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> surrounds the entire <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> (or <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>) form. A <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> statement may be used at any point to exit the loop immediately. 



*Init-form* is an initial value for the *var* with which it is associated. If *init-form* is omitted, the initial value of *var* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. If a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> is supplied for a *var*, *init-form* must be consistent with the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"declaration"}><i>Declarations</i></GlossaryTerm> can appear at the beginning of a <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> (or <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>) body. They apply to code in the <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> (or <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>) body, to the <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of the <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> (or <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>) *vars*, to the *step-forms*, to the *end-test-form*, and to the *result-forms*. 



**Examples:**
```lisp

(do ((temp-one 1 (1+ temp-one)) 
     (temp-two 0 (1- temp-two))) 
    ((> (- temp-one temp-two) 5) temp-one)) *→* 4 



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
▷ Input 0: banana 
▷ Output 0: BANANA 
▷ Input 1: (57 boxes) 
▷ Output 1: (57 BOXES) 
▷ Input 2: NIL 
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

```
**See Also:** 



other iteration functions (<DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink>, <DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink>, and <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>) and more primitive functionality (<DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>, <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>, <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink>, <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink>, <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink>, and <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>) 



**Notes:** 



If *end-test-form* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the test will never succeed. This provides an idiom for “do forever”: the body of the <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> or <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink> is executed repeatedly. The infinite loop can be terminated by the use of <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink>, <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>, <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> to an outer level, or <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>. 



A <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> may be explained in terms of the more primitive <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink>, <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink>, <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink>, <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>, <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink>, and <DictionaryLink styled={true} term={"psetq"}><b>psetq</b></DictionaryLink> as follows: 



(block nil 



(let ((var1 init1) 



(var2 init2) 



... 



(varn initn)) 



<GlossaryTerm styled={true} term={"declaration"}><i>declarations</i></GlossaryTerm> 



(loop (when end-test (return (progn . result))) 



(tagbody . tagbody) 



(psetq var1 step1 



var2 step2 



... 



varn stepn)))) 



<DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink> is similar, except that <DictionaryLink styled={true} term={"let"}><b>let\*</b></DictionaryLink> and <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> replace the <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink> and <DictionaryLink styled={true} term={"psetq"}><b>psetq</b></DictionaryLink>, respectively. 







 



 



