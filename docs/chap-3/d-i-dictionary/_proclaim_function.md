**proclaim** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> *declaration-specifier ! implementation-dependent* 



**Arguments and Values:** 



*declaration-specifier*—a *declaration specifier* . 



**Description:** 



*Establishes* the <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> specified by *declaration-specifier* in the *global environment*. 



Such a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>, sometimes called a *global declaration* or a <GlossaryTerm styled={true} term={"proclamation"}><i>proclamation</i></GlossaryTerm>, is always in force unless locally *shadowed*. 



<GlossaryTerm styled={true} term={"name"}><i>Names</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> within *declaration-specifier* refer to *dynamic variables* and global <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> definitions, respectively. 







 



 



Figure 3–22 shows a list of *declaration identifiers* that can be used with <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink>. 




```lisp title="Figure 3–22. Global Declaration Specifiers"
**declaration inline optimize type ftype notinline special**
```
 



An implementation is free to support other (<GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>) *declaration identifiers* as well. **Examples:**
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



<DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink>, <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, Section 3.2 (Compilation) 



**Notes:** 



Although the *execution* of a <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> has e↵ects that might a↵ect compilation, the compiler does not make any attempt to recognize and specially process <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. A <GlossaryTerm styled={true} term={"proclamation"}><i>proclamation</i></GlossaryTerm> such as the following, even if a *top level form*, does not have any e↵ect until it is executed: 



(proclaim ’(special \*x\*)) 



If compile time side e↵ects are desired, <DictionaryLink styled={true} term={"eval-when"}><b>eval-when</b></DictionaryLink> may be useful. For example: 



(eval-when (:execute :compile-toplevel :load-toplevel) 



(proclaim ’(special \*x\*))) 



In most such cases, however, it is preferrable to use <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink> for this purpose. 



Since <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are ordinary *function forms*, *macro forms* can expand into them. 