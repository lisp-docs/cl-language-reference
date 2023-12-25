**multiple-value-setq** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink> *vars form ! result* 



**Arguments and Values:** 



*vars*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are either *variable names* or <GlossaryTerm styled={true} term={"name"}><i>names</i></GlossaryTerm> of *symbol macros*. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*result*—The *primary value* returned by the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink> assigns values to *vars*. 



The <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is evaluated, and each *var* is *assigned* to the corresponding <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> returned by that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. If there are more *vars* than <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is *assigned* to the extra *vars*. If there are more <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> than *vars*, the extra <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> are discarded. 



If any <i>var</i> is the <i>name</i> of a <i>symbol macro</i>, then it is <i>assigned</i> as if by <b>setf</b>. Specifically, (multiple-value-setq (<i>symbol</i><sub>1</sub> ... <i>symbol<sub>n</sub></i>) <i>value-producing-form</i>) 



is defined to always behave in the same way as 



(values (setf (values <i>symbol</i><sub>1</sub> ... <i>symbol<sub>n</sub></i>) <i>value-producing-form</i>)) 



in order that the rules for order of evaluation and side-e↵ects be consistent with those used by <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. See Section 5.1.2.3 (VALUES Forms as Places). 



**Examples:**
```lisp

(multiple-value-setq (quotient remainder) (truncate 3.2 2)) *!* 1 
quotient *!* 1 
remainder *!* 1.2 
(multiple-value-setq (a b c) (values 1 2)) *!* 1 
a *!* 1 
b *!* 2 
c *!* NIL 
(multiple-value-setq (a b) (values 4 5 6)) *!* 4 
a *!* 4 
b *!* 5 

```
**See Also:** 



<DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink>, <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> 



Data and Control 



 



 



