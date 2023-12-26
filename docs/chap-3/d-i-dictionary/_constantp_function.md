**constantp** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink> <ClLinks  term={"form"}><i>form</i></ClLinks> &amp;optional *environment ! generalized-boolean* 



**Arguments and Values:** 



<ClLinks  term={"form"}><i>form</i></ClLinks>—a <ClLinks  term={"form"}><i>form</i></ClLinks>. 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. The default is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*generalized-boolean*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. 



**Description:** 



Returns <ClLinks  term={"true"}><i>true</i></ClLinks> if <ClLinks  term={"form"}><i>form</i></ClLinks> can be determined by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to be a <GlossaryTerm styled={true} term={"constant form"}><i>constant form</i></GlossaryTerm> in the indicated <ClLinks  term={"environment"}><i>environment</i></ClLinks>; otherwise, it returns <ClLinks  term={"false"}><i>false</i></ClLinks> indicating either that the <ClLinks  term={"form"}><i>form</i></ClLinks> is not a <GlossaryTerm styled={true} term={"constant form"}><i>constant form</i></GlossaryTerm> or that it cannot be determined whether or not <ClLinks  term={"form"}><i>form</i></ClLinks> is a <GlossaryTerm styled={true} term={"constant form"}><i>constant form</i></GlossaryTerm>. 



The following kinds of <ClLinks  term={"form"}><i>forms</i></ClLinks> are considered <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm>: 



*• Self-evaluating objects* (such as <ClLinks  term={"number"}><i>numbers</i></ClLinks>, <ClLinks  term={"character"}><i>characters</i></ClLinks>, and the various kinds of <ClLinks  term={"array"}><i>arrays</i></ClLinks>) are always considered <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm> and must be recognized as such by <DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink>. 



*• Constant variables*, such as <ClLinks  term={"keyword"}><i>keywords</i></ClLinks>, symbols defined by Common Lisp as constant (such as <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink>, and **pi**), and symbols declared as constant by the user in the indicated <ClLinks  term={"environment"}><i>environment</i></ClLinks> using <DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> are always considered <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm> and must be recognized as such by <DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink>. 



*•* <DictionaryLink  term={"quote"}><b>quote</b></DictionaryLink> <ClLinks  term={"form"}><i>forms</i></ClLinks> are always considered <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm> and must be recognized as such by <DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink>. 



*•* An <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is permitted, but not required, to detect additional <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm>. If it does, it is also permitted, but not required, to make use of information in the <ClLinks  term={"environment"}><i>environment</i></ClLinks>. Examples of <GlossaryTerm styled={true} term={"constant form"}><i>constant forms</i></GlossaryTerm> for which <DictionaryLink  term={"constantp"}><b>constantp</b></DictionaryLink> might or might not return <ClLinks  term={"true"}><i>true</i></ClLinks> are: (sqrt pi), (+ 3 2), (length ’(a b c)), and (let ((x 7)) (zerop x)). 



If an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> chooses to make use of the <ClLinks  term={"environment"}><i>environment</i></ClLinks> information, such actions as expanding <ClLinks  term={"macro"}><i>macros</i></ClLinks> or performing function inlining are permitted to be used, but not required; however, expanding <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macros</i></GlossaryTerm> is not permitted. 



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



The state of the global environment (*e.g.*, which <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> have been declared to be the <ClLinks  term={"name"}><i>names</i></ClLinks> of <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm>). 



**See Also:** 



<DictionaryLink  term={"defconstant"}><b>defconstant</b></DictionaryLink> 





