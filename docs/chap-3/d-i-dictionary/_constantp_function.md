**constantp** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> &amp;optional *environment ! generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> can be determined by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to be a <GlossaryTerm styled={true} term={"constant form"}><i>constant form</i></GlossaryTerm> in the indicated <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>; otherwise, it returns <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm> indicating either that the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"constant form"}><i>constant form</i></GlossaryTerm> or that it cannot be determined whether or not <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"constant form"}><i>constant form</i></GlossaryTerm>. 



The following kinds of <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are considered <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm>: 



*• Self-evaluating objects* (such as <GlossaryTerm  term={"number"}><i>numbers</i></GlossaryTerm>, <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>, and the various kinds of <GlossaryTerm  term={"array"}><i>arrays</i></GlossaryTerm>) are always considered <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm> and must be recognized as such by <DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink>. 



*• Constant variables*, such as <GlossaryTerm  term={"keyword"}><i>keywords</i></GlossaryTerm>, symbols defined by Common Lisp as constant (such as <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, and **pi**), and symbols declared as constant by the user in the indicated <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> using <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> are always considered <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm> and must be recognized as such by <DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink>. 



*•* <DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are always considered <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm> and must be recognized as such by <DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink>. 



*•* An <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted, but not required, to detect additional <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm>. If it does, it is also permitted, but not required, to make use of information in the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>. Examples of <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm> for which <DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink> might or might not return <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> are: (sqrt pi), (+ 3 2), (length ’(a b c)), and (let ((x 7)) (zerop x)). 



If an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> chooses to make use of the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> information, such actions as expanding <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> or performing function inlining are permitted to be used, but not required; however, expanding <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> is not permitted. 



**Examples:**
```lisp
(constantp 1) *! true* 
(constantp ’temp) *! false* 
(constantp ”temp)) *! true* 
(defconstant this-is-a-constant ’never-changing) *!* THIS-IS-A-CONSTANT 
Evaluation and 

**constantp** 
(constantp ’this-is-a-constant) *! true* 
(constantp "temp") *! true* 
(setq a 6) *!* 6 
(constantp a) *! true* 
(constantp ’(sin pi)) *! implementation-dependent* 
(constantp ’(car ’(x))) *! implementation-dependent* 
(constantp ’(eql x x)) *! implementation-dependent* 
(constantp ’(typep x ’nil)) *! implementation-dependent* 
(constantp ’(typep x ’t)) *! implementation-dependent* 
(constantp ’(values this-is-a-constant)) *! implementation-dependent* 
(constantp ’(values ’x ’y)) *! implementation-dependent* 
(constantp ’(let ((a ’(a b c))) (+ (length a) 6))) *! implementation-dependent* 
```
**Aected By:** 



The state of the global environment (*e.g.*, which <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> have been declared to be the <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm>). 



**See Also:** 



<DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> 





