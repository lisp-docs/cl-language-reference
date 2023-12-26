**nth-value** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"nth-value"}><b>nth-value</b></DictionaryLink> *n form ! object* 



**Arguments and Values:** 



*n*—a non-negative *integer* ; evaluated. 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>; evaluated as described below. 



<ClLinks  term={"object"}><i>object</i></ClLinks>—an <ClLinks  term={"object"}><i>object</i></ClLinks>. 



**Description:** 



Evaluates *n* and then <ClLinks  term={"form"}><i>form</i></ClLinks>, returning as its only value the *n*th value *yielded* by <ClLinks  term={"form"}><i>form</i></ClLinks>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if *n* is greater than or equal to the number of <ClLinks  term={"value"}><i>values</i></ClLinks> returned by <ClLinks  term={"form"}><i>form</i></ClLinks>. (The first returned value is numbered 0.) 



**Examples:**
```lisp
 
(nth-value 0 (values ’a ’b)) *!* A 
(nth-value 1 (values ’a ’b)) *!* B 
(nth-value 2 (values ’a ’b)) *!* NIL 
(let\* ((x 83927472397238947423879243432432432) 
(y 32423489732) 
 
 
(a (nth-value 1 (floor x y))) 
(b (mod x y))) 
(values a b (= a b))) 
*!* 3332987528, 3332987528, *true* 
```
**See Also:** 



<DictionaryLink  term={"multiple-value-list"}><b>multiple-value-list</b></DictionaryLink>, <DictionaryLink  term={"nth"}><b>nth</b></DictionaryLink> 



**Notes:** 



Operationally, the following relationship is true, although <DictionaryLink  term={"nth-value"}><b>nth-value</b></DictionaryLink> might be more ecient in some <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> because, for example, some *consing* might be avoided. 



(nth-value *n form*) *⌘* (nth *n* (multiple-value-list <ClLinks  term={"form"}><i>form</i></ClLinks>)) 



**prog, prog***⇤ Macro* 



**Syntax:** 



**prog** (*\{var |* (*var* [*init-form*])*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *\{tag | statement\}*\* 



*! \{result\}*\* 



**prog\*** (*\{var |* (*var* [*init-form*])*\}*\*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *\{tag | statement\}*\* 



*! \{result\}*\* 



**Arguments and Values:** 



*var*—variable name. 



*init-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"tag"}><i>tag</i></ClLinks>—a <GlossaryTerm styled={true} term={"go tag"}><i>go tag</i></GlossaryTerm>; not evaluated. 



*statement*—a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>; evaluated as described below. 



*results*—<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if a <GlossaryTerm styled={true} term={"normal return"}><i>normal return</i></GlossaryTerm> occurs, or else, if an <GlossaryTerm styled={true} term={"explicit return"}><i>explicit return</i></GlossaryTerm> occurs, the <ClLinks  term={"value"}><i>values</i></ClLinks> that were transferred. 



**Description:** 



Three distinct operations are performed by **prog** and **prog\***: they bind local variables, they permit use of the <DictionaryLink  term={"return"}><b>return</b></DictionaryLink> statement, and they permit use of the <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> statement. A typical **prog** looks like this: 



(prog (var1 var2 (var3 init-form-3) var4 (var5 init-form-5)) 



<ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* 



Data and Control 



 



 



**prog, prog***⇤* 



statement1 



tag1 



statement2 



statement3 



statement4 



tag2 



statement5 



... 



) 



For **prog**, *init-forms* are evaluated first, in the order in which they are supplied. The *vars* are then bound to the corresponding values in parallel. If no *init-form* is supplied for a given *var*, that *var* is bound to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



The body of **prog** is executed as if it were a <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks>; the <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> statement can be used to transfer control to a <ClLinks  term={"tag"}><i>tag</i></ClLinks>. <ClLinks  term={"tag"}><i>Tags</i></ClLinks> label *statements*. 



**prog** implicitly establishes a <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> named <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> around the entire **prog** <ClLinks  term={"form"}><i>form</i></ClLinks>, so that <DictionaryLink  term={"return"}><b>return</b></DictionaryLink> can be used at any time to exit from the **prog** <ClLinks  term={"form"}><i>form</i></ClLinks>. 



The di↵erence between **prog\*** and **prog** is that in **prog\*** the <ClLinks  term={"binding"}><i>binding</i></ClLinks> and initialization of the *vars* is done <ClLinks  term={"sequentially"}><i>sequentially</i></ClLinks>, so that the *init-form* for each one can use the values of previous ones. 



**Examples:**
```lisp
(prog\* ((y z) (x (car y))) 
	(return x)) 
returns the *car* of the value of z. 
(setq a 1) *!* 1 
(prog ((a 2) (b a)) (return (if (= a b) ’= ’/=))) *!* /= 
(prog\* ((a 2) (b a)) (return (if (= a b) ’= ’/=))) *!* = 
(prog () ’no-return-value) *!* NIL 
(defun king-of-confusion (w) 
  "Take a cons of two lists and make a list of conses. 
Think of this function as being like a zipper." 
  (prog (x y z) ;Initialize x, y, z to NIL 
     (setq y (car w) z (cdr w)) 
   loop 
     (cond ((null y) (return x)) 
	   ((null z) (go err))) 
   rejoin 
     (setq x (cons (cons (car y) (car z)) x)) 
     (setq y (cdr y) z (cdr z)) 
     (go loop) 
   err 
     
     
     (cerror "Will self-pair extraneous items" 
	     "Mismatch - gleep! ~S" y) 
     (setq z y) 
     (go rejoin))) *!* KING-OF-CONFUSION 
This can be accomplished more perspicuously as follows: 
(defun prince-of-clarity (w) 
  "Take a cons of two lists and make a list of conses. 
Think of this function as being like a zipper." 
  (do ((y (car w) (cdr y)) 
       (z (cdr w) (cdr z)) 
       (x ’() (cons (cons (car y) (car z)) x))) 
      ((null y) x) 
    (when (null z) 
      (cerror "Will self-pair extraneous items" 
	      "Mismatch - gleep! ~S" y) 
      (setq z y)))) *!* PRINCE-OF-CLARITY 
```
**See Also:** 



<DictionaryLink  term={"block"}><b>block</b></DictionaryLink>, <DictionaryLink  term={"let"}><b>let</b></DictionaryLink>, <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink>, <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>, <DictionaryLink  term={"return"}><b>return</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



**prog** can be explained in terms of <DictionaryLink  term={"block"}><b>block</b></DictionaryLink>, <DictionaryLink  term={"let"}><b>let</b></DictionaryLink>, and <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> as follows: 



(prog *variable-list declaration* . *body*) 



*⌘* (block nil (let *variable-list declaration* (tagbody . *body*))) 



