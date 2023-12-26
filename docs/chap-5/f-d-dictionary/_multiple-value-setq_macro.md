**multiple-value-setq** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink> *vars form ! result* 



**Arguments and Values:** 



*vars*—a <GlossaryTerm  term={"list"}><i>list</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbols</i></GlossaryTerm> that are either *variable names* or <GlossaryTerm  term={"name"}><i>names</i></GlossaryTerm> of *symbol macros*. 



<GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



*result*—The *primary value* returned by the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"multiple-value-setq"}><b>multiple-value-setq</b></DictionaryLink> assigns values to *vars*. 



The <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is evaluated, and each *var* is *assigned* to the corresponding <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> returned by that <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. If there are more *vars* than <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is *assigned* to the extra *vars*. If there are more <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> than *vars*, the extra <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> are discarded. 



If any <i>var</i> is the <i>name</i> of a <i>symbol macro</i>, then it is <i>assigned</i> as if by <b>setf</b>. Specifically, (multiple-value-setq (<i>symbol</i><sub>1</sub> ... <i>symbol<sub>n</sub></i>) <i>value-producing-form</i>) 



is defined to always behave in the same way as 



(values (setf (values <i>symbol</i><sub>1</sub> ... <i>symbol<sub>n</sub></i>) <i>value-producing-form</i>)) 



in order that the rules for order of evaluation and side-e↵ects be consistent with those used by <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink>. See Section 5.1.2.3 (VALUES Forms as Places). 



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



<DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink>, <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink> 



Data and Control 



 



 



