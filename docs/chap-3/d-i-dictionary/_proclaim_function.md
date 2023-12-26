**proclaim** <ClLinks  term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks> *declaration-specifier ! implementation-dependent* 



**Arguments and Values:** 



*declaration-specifier*—a <GlossaryTerm styled={true} term={"declaration specifier"}><i>declaration specifier</i></GlossaryTerm> . 



**Description:** 



*Establishes* the <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> specified by *declaration-specifier* in the <GlossaryTerm styled={true} term={"global environment"}><i>global environment</i></GlossaryTerm>. 



Such a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, sometimes called a <GlossaryTerm styled={true} term={"global declaration"}><i>global declaration</i></GlossaryTerm> or a <ClLinks  term={"proclamation"}><i>proclamation</i></ClLinks>, is always in force unless locally *shadowed*. 



<ClLinks  term={"name"}><i>Names</i></ClLinks> of <ClLinks  term={"variable"}><i>variables</i></ClLinks> and <ClLinks  term={"function"}><i>functions</i></ClLinks> within *declaration-specifier* refer to <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm> and global <ClLinks  term={"function"}><i>function</i></ClLinks> definitions, respectively. 







 



 



Figure 3–22 shows a list of <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifiers</i></GlossaryTerm> that can be used with <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks>. 




```lisp title="Figure 3–22. Global Declaration Specifiers"
**declaration inline optimize type ftype notinline special**
```
 



An implementation is free to support other (<ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>) <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifiers</i></GlossaryTerm> as well. 

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



<ClLinks  term={"declaim"}><b>declaim</b></ClLinks>, <ClLinks  term={"declare"}><b>declare</b></ClLinks>, Section 3.2 (Compilation) 



**Notes:** 



Although the *execution* of a <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> has e↵ects that might a↵ect compilation, the compiler does not make any attempt to recognize and specially process <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks> <ClLinks  term={"form"}><i>forms</i></ClLinks>. A <ClLinks  term={"proclamation"}><i>proclamation</i></ClLinks> such as the following, even if a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, does not have any e↵ect until it is executed: 



(proclaim ’(special \*x\*)) 



If compile time side e↵ects are desired, <ClLinks  term={"eval-when"}><b>eval-when</b></ClLinks> may be useful. For example: 



(eval-when (:execute :compile-toplevel :load-toplevel) 



(proclaim ’(special \*x\*))) 



In most such cases, however, it is preferrable to use <ClLinks  term={"declaim"}><b>declaim</b></ClLinks> for this purpose. 



Since <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks> <ClLinks  term={"form"}><i>forms</i></ClLinks> are ordinary <GlossaryTerm styled={true} term={"function form"}><i>function forms</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"macro form"}><i>macro forms</i></GlossaryTerm> can expand into them. 