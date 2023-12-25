**eval** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> *form → \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*results*—the *values yielded* by the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



Evaluates <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in the current *dynamic environment* and the *null lexical environment*. <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> is a user interface to the evaluator. 



The evaluator expands macro calls as if through the use of <DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink>. 



Constants appearing in code processed by <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> are not copied nor coalesced. The code resulting from the execution of <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> references <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> that are <DictionaryLink styled={true} term={"eql"}><b>eql</b></DictionaryLink> to the corresponding <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> in the source code. 



**Examples:**
```lisp

(setq form ’(1+ a) a 999) *→* 999 
(eval form) *→* 1000 
(eval ’form) *→* (1+ A) 
(let ((a ’(this would break if eval used local value))) (eval form)) 
*→* 1000 

```
**See Also:** 



<DictionaryLink styled={true} term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink>, Section 3.1.2 (The Evaluation Model) 



**Notes:** 



To obtain the current dynamic value of a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, use of <DictionaryLink styled={true} term={"symbol-value"}><b>symbol-value</b></DictionaryLink> is equivalent (and usually preferable) to use of <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink>. 



Note that an <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> involves two levels of <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> for its <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>. First, <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is *evaluated* by the normal argument evaluation mechanism as would occur with any <GlossaryTerm styled={true} term={"call"}><i>call</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> that  







results from this normal *argument evaluation* becomes the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the *form parameter* , and is then *evaluated* as part of the <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. For example: 



(eval (list ’cdr (car ’((quote (a . b)) c)))) *→* b 



The *argument form* (list ’cdr (car ’((quote (a . b)) c))) is evaluated in the usual way to produce the <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> (cdr (quote (a . b))); <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> then evaluates its <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>, (cdr (quote (a . b))), to produce b. Since a single <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> already occurs for any *argument form* in any *function form*, <DictionaryLink styled={true} term={"eval"}><b>eval</b></DictionaryLink> is sometimes said to perform “an extra level of evaluation.” 



