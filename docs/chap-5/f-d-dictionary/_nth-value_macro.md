**nth-value** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"nth-value"}><b>nth-value</b></DictionaryLink> *n form ! object* 



**Arguments and Values:** 



*n*—a non-negative *integer* ; evaluated. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; evaluated as described below. 



<GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. 



**Description:** 



Evaluates *n* and then <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, returning as its only value the *n*th value *yielded* by <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if *n* is greater than or equal to the number of <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. (The first returned value is numbered 0.) 



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



Operationally, the following relationship is true, although <DictionaryLink  term={"nth-value"}><b>nth-value</b></DictionaryLink> might be more ecient in some <GlossaryTerm  term={"implementation"}><i>implementations</i></GlossaryTerm> because, for example, some *consing* might be avoided. 



(nth-value *n form*) *⌘* (nth *n* (multiple-value-list <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>)) 



**prog, prog***⇤ Macro* 



**Syntax:** 



**prog** (*\{var |* (*var* [*init-form*])*\}*\*) <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



*! \{result\}*\* 



**prog\*** (*\{var |* (*var* [*init-form*])*\}*\*) <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



*! \{result\}*\* 



**Arguments and Values:** 



*var*—variable name. 



*init-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"go tag"}><i>go tag</i></GlossaryTerm>; not evaluated. 



*statement*—a <GlossaryTerm styled={true} term={"compound form"}><i>compound form</i></GlossaryTerm>; evaluated as described below. 



*results*—<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if a <GlossaryTerm styled={true} term={"normal return"}><i>normal return</i></GlossaryTerm> occurs, or else, if an <GlossaryTerm styled={true} term={"explicit return"}><i>explicit return</i></GlossaryTerm> occurs, the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> that were transferred. 



**Description:** 



Three distinct operations are performed by **prog** and **prog\***: they bind local variables, they permit use of the <DictionaryLink  term={"return"}><b>return</b></DictionaryLink> statement, and they permit use of the <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> statement. A typical **prog** looks like this: 



(prog (var1 var2 (var3 init-form-3) var4 (var5 init-form-5)) 



<GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* 



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



The body of **prog** is executed as if it were a <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; the <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> statement can be used to transfer control to a <GlossaryTerm  term={"tag"}><i>tag</i></GlossaryTerm>. <GlossaryTerm  term={"tag"}><i>Tags</i></GlossaryTerm> label *statements*. 



**prog** implicitly establishes a <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> named <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> around the entire **prog** <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>, so that <DictionaryLink  term={"return"}><b>return</b></DictionaryLink> can be used at any time to exit from the **prog** <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



The di↵erence between **prog\*** and **prog** is that in **prog\*** the <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> and initialization of the *vars* is done <GlossaryTerm  term={"sequentially"}><i>sequentially</i></GlossaryTerm>, so that the *init-form* for each one can use the values of previous ones. 



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



