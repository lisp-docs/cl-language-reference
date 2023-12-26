**proclaim** <GlossaryTerm  term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink> *declaration-specifier ! implementation-dependent* 



**Arguments and Values:** 



*declaration-specifier*—a <GlossaryTerm styled={true} term={"declaration specifier"}><i>declaration specifier</i></GlossaryTerm> . 



**Description:** 



*Establishes* the <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> specified by *declaration-specifier* in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 



Such a <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>, sometimes called a <GlossaryTerm styled={true} term={"global declaration"}><i>global declaration</i></GlossaryTerm> or a <GlossaryTerm  term={"proclamation"}><i>proclamation</i></GlossaryTerm>, is always in force unless locally *shadowed*. 



<GlossaryTerm  term={"name"}><i>Names</i></GlossaryTerm> of <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm> and <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> within *declaration-specifier* refer to <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm> and global <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> definitions, respectively. 







 



 



Figure 3–22 shows a list of <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifiers</i></GlossaryTerm> that can be used with <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink>. 




```lisp title="Figure 3–22. Global Declaration Specifiers"
**declaration inline optimize type ftype notinline special**
```
 



An implementation is free to support other (<GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>) <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifiers</i></GlossaryTerm> as well. 

**Examples:**
```lisp
(defun declare-variable-types-globally (type vars) 
  (proclaim ‘(type ,type ,@vars)) 
  type) 
;; Once this form is executed, the dynamic variable \*TOLERANCE\* 
;; must always contain a float. 
(declare-variable-types-globally ’float ’(\*tolerance\*)) 
*!* FLOAT 
```
**See Also:** 



<DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, Section 3.2 (Compilation) 



**Notes:** 



Although the *execution* of a <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> has e↵ects that might a↵ect compilation, the compiler does not make any attempt to recognize and specially process <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. A <GlossaryTerm  term={"proclamation"}><i>proclamation</i></GlossaryTerm> such as the following, even if a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, does not have any e↵ect until it is executed: 



(proclaim ’(special \*x\*)) 



If compile time side e↵ects are desired, <DictionaryLink  term={"eval-when"}><b>eval-when</b></DictionaryLink> may be useful. For example: 



(eval-when (:execute :compile-toplevel :load-toplevel) 



(proclaim ’(special \*x\*))) 



In most such cases, however, it is preferrable to use <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink> for this purpose. 



Since <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm> are ordinary <GlossaryTerm styled={true} term={"function form"}><i>function forms</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"macro form"}><i>macro forms</i></GlossaryTerm> can expand into them. 