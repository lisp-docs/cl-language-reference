**eval** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> *form → \{result\}*\* 



**Arguments and Values:** 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



*results*—the *values yielded* by the <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> of <ClLinks  term={"form"}><i>form</i></ClLinks>. 



**Description:** 



Evaluates <ClLinks  term={"form"}><i>form</i></ClLinks> in the current <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm>. <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> is a user interface to the evaluator. 



The evaluator expands macro calls as if through the use of <DictionaryLink  term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink>. 



Constants appearing in code processed by <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> are not copied nor coalesced. The code resulting from the execution of <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> references <ClLinks  term={"object"}><i>objects</i></ClLinks> that are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to the corresponding <ClLinks  term={"object"}><i>objects</i></ClLinks> in the source code. 



**Examples:**
```lisp
(setq form ’(1+ a) a 999) → 999 
(eval form) → 1000 
(eval ’form) → (1+ A) 
(let ((a ’(this would break if eval used local value))) (eval form)) 
→ 1000 
```
**See Also:** 



<DictionaryLink  term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink>, Section 3.1.2 (The Evaluation Model) 



**Notes:** 



To obtain the current dynamic value of a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, use of <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> is equivalent (and usually preferable) to use of <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink>. 



Note that an <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> involves two levels of <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> for its <ClLinks  term={"argument"}><i>argument</i></ClLinks>. First, <ClLinks  term={"form"}><i>form</i></ClLinks> is *evaluated* by the normal argument evaluation mechanism as would occur with any <ClLinks  term={"call"}><i>call</i></ClLinks>. The <ClLinks  term={"object"}><i>object</i></ClLinks> that  







results from this normal *argument evaluation* becomes the <ClLinks  term={"value"}><i>value</i></ClLinks> of the *form parameter* , and is then *evaluated* as part of the <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks>. For example: 



(eval (list ’cdr (car ’((quote (a . b)) c)))) → b 



The *argument form* (list ’cdr (car ’((quote (a . b)) c))) is evaluated in the usual way to produce the <ClLinks  term={"argument"}><i>argument</i></ClLinks> (cdr (quote (a . b))); <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> then evaluates its <ClLinks  term={"argument"}><i>argument</i></ClLinks>, (cdr (quote (a . b))), to produce b. Since a single <ClLinks  term={"evaluation"}><i>evaluation</i></ClLinks> already occurs for any *argument form* in any <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm>, <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> is sometimes said to perform “an extra level of evaluation.” 



