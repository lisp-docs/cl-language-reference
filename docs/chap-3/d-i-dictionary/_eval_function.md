**eval** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> *form → \{result\}*\* 



**Arguments and Values:** 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*results*—the *values yielded* by the <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> of <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



Evaluates <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> in the current <GlossaryTerm styled={true} term={"dynamic environment"}><i>dynamic environment</i></GlossaryTerm> and the <GlossaryTerm styled={true} term={"null lexical environment"}><i>null lexical environment</i></GlossaryTerm>. <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> is a user interface to the evaluator. 



The evaluator expands macro calls as if through the use of <DictionaryLink  term={"macroexpand-1"}><b>macroexpand-1</b></DictionaryLink>. 



Constants appearing in code processed by <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> are not copied nor coalesced. The code resulting from the execution of <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> references <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> that are <DictionaryLink  term={"eql"}><b>eql</b></DictionaryLink> to the corresponding <GlossaryTerm  term={"object"}><i>objects</i></GlossaryTerm> in the source code. 



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



To obtain the current dynamic value of a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, use of <DictionaryLink  term={"symbol-value"}><b>symbol-value</b></DictionaryLink> is equivalent (and usually preferable) to use of <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink>. 



Note that an <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> involves two levels of <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> for its <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm>. First, <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is *evaluated* by the normal argument evaluation mechanism as would occur with any <GlossaryTerm  term={"call"}><i>call</i></GlossaryTerm>. The <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> that  







results from this normal *argument evaluation* becomes the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the *form parameter* , and is then *evaluated* as part of the <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. For example: 



(eval (list ’cdr (car ’((quote (a . b)) c)))) → b 



The *argument form* (list ’cdr (car ’((quote (a . b)) c))) is evaluated in the usual way to produce the <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm> (cdr (quote (a . b))); <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> then evaluates its <GlossaryTerm  term={"argument"}><i>argument</i></GlossaryTerm>, (cdr (quote (a . b))), to produce b. Since a single <GlossaryTerm  term={"evaluation"}><i>evaluation</i></GlossaryTerm> already occurs for any *argument form* in any <GlossaryTerm styled={true} term={"function form"}><i>function form</i></GlossaryTerm>, <DictionaryLink  term={"eval"}><b>eval</b></DictionaryLink> is sometimes said to perform “an extra level of evaluation.” 



