**eval** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> *form → \{result\}*\* 



**Arguments and Values:** 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*results*—the *values yielded* by the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



**Description:** 



Evaluates <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in the current *dynamic environment* and the *null lexical environment*. <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> is a user interface to the evaluator. 



The evaluator expands macro calls as if through the use of <ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks>. 



Constants appearing in code processed by <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> are not copied nor coalesced. The code resulting from the execution of <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> references <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> that are <ClLinks styled={true} term={"eql"}><b>eql</b></ClLinks> to the corresponding <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> in the source code. 



**Examples:**
```lisp
(setq form ’(1+ a) a 999) → 999 
(eval form) → 1000 
(eval ’form) → (1+ A) 
(let ((a ’(this would break if eval used local value))) (eval form)) 
→ 1000 
```
**See Also:** 



<ClLinks styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></ClLinks>, Section 3.1.2 (The Evaluation Model) 



**Notes:** 



To obtain the current dynamic value of a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, use of <ClLinks styled={true} term={"symbol-value"}><b>symbol-value</b></ClLinks> is equivalent (and usually preferable) to use of <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks>. 



Note that an <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> involves two levels of <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> for its <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>. First, <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is *evaluated* by the normal argument evaluation mechanism as would occur with any <ClLinks styled={true} term={"call"}><i>call</i></ClLinks>. The <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> that  







results from this normal *argument evaluation* becomes the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the *form parameter* , and is then *evaluated* as part of the <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. For example: 



(eval (list ’cdr (car ’((quote (a . b)) c)))) → b 



The *argument form* (list ’cdr (car ’((quote (a . b)) c))) is evaluated in the usual way to produce the <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> (cdr (quote (a . b))); <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> then evaluates its <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>, (cdr (quote (a . b))), to produce b. Since a single <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> already occurs for any *argument form* in any *function form*, <ClLinks styled={true} term={"eval"}><b>eval</b></ClLinks> is sometimes said to perform “an extra level of evaluation.” 



