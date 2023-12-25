**constantp** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"constantp"}><b>constantp</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> &amp;optional *environment ! generalized-boolean* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>—an *environment object*. The default is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> can be determined by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> to be a *constant form* in the indicated <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>; otherwise, it returns <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> indicating either that the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is not a *constant form* or that it cannot be determined whether or not <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a *constant form*. 



The following kinds of <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are considered *constant forms*: 



*• Self-evaluating objects* (such as <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>, and the various kinds of <GlossaryTerm styled={true} term={"array"}><i>arrays</i></GlossaryTerm>) are always considered *constant forms* and must be recognized as such by <DictionaryLink styled={true} term={"constantp"}><b>constantp</b></DictionaryLink>. 



*• Constant variables*, such as <GlossaryTerm styled={true} term={"keyword"}><i>keywords</i></GlossaryTerm>, symbols defined by Common Lisp as constant (such as <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, and **pi**), and symbols declared as constant by the user in the indicated <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> using <DictionaryLink styled={true} term={"defconstant"}><b>defconstant</b></DictionaryLink> are always considered *constant forms* and must be recognized as such by <DictionaryLink styled={true} term={"constantp"}><b>constantp</b></DictionaryLink>. 



*•* <DictionaryLink styled={true} term={"quote"}><b>quote</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are always considered *constant forms* and must be recognized as such by <DictionaryLink styled={true} term={"constantp"}><b>constantp</b></DictionaryLink>. 



*•* An <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted, but not required, to detect additional *constant forms*. If it does, it is also permitted, but not required, to make use of information in the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. Examples of *constant forms* for which <DictionaryLink styled={true} term={"constantp"}><b>constantp</b></DictionaryLink> might or might not return <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> are: (sqrt pi), (+ 3 2), (length ’(a b c)), and (let ((x 7)) (zerop x)). 



If an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> chooses to make use of the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> information, such actions as expanding <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> or performing function inlining are permitted to be used, but not required; however, expanding *compiler macros* is not permitted. 



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



The state of the global environment (*e.g.*, which <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> have been declared to be the <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of *constant variables*). 



**See Also:** 



<DictionaryLink styled={true} term={"defconstant"}><b>defconstant</b></DictionaryLink> 





