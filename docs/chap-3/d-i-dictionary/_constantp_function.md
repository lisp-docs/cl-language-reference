**constantp** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"constantp"}><b>constantp</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> &amp;optional *environment ! generalized-boolean* 



**Arguments and Values:** 



<ClLinks styled={true} term={"form"}><i>form</i></ClLinks>—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>—an *environment object*. The default is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> if <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> can be determined by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> to be a *constant form* in the indicated <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>; otherwise, it returns <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> indicating either that the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is not a *constant form* or that it cannot be determined whether or not <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is a *constant form*. 



The following kinds of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are considered *constant forms*: 



*• Self-evaluating objects* (such as <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks>, <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks>, and the various kinds of <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks>) are always considered *constant forms* and must be recognized as such by <ClLinks styled={true} term={"constantp"}><b>constantp</b></ClLinks>. 



*• Constant variables*, such as <ClLinks styled={true} term={"keyword"}><i>keywords</i></ClLinks>, symbols defined by Common Lisp as constant (such as <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, and **pi**), and symbols declared as constant by the user in the indicated <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> using <ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> are always considered *constant forms* and must be recognized as such by <ClLinks styled={true} term={"constantp"}><b>constantp</b></ClLinks>. 



*•* <ClLinks styled={true} term={"quote"}><b>quote</b></ClLinks> <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are always considered *constant forms* and must be recognized as such by <ClLinks styled={true} term={"constantp"}><b>constantp</b></ClLinks>. 



*•* An <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is permitted, but not required, to detect additional *constant forms*. If it does, it is also permitted, but not required, to make use of information in the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. Examples of *constant forms* for which <ClLinks styled={true} term={"constantp"}><b>constantp</b></ClLinks> might or might not return <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> are: (sqrt pi), (+ 3 2), (length ’(a b c)), and (let ((x 7)) (zerop x)). 



If an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> chooses to make use of the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> information, such actions as expanding <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> or performing function inlining are permitted to be used, but not required; however, expanding *compiler macros* is not permitted. 



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



The state of the global environment (*e.g.*, which <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> have been declared to be the <ClLinks styled={true} term={"name"}><i>names</i></ClLinks> of *constant variables*). 



**See Also:** 



<ClLinks styled={true} term={"defconstant"}><b>defconstant</b></ClLinks> 





