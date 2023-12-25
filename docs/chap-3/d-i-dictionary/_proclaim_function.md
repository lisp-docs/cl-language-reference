**proclaim** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> *declaration-specifier ! implementation-dependent* 



**Arguments and Values:** 



*declaration-specifier*—a *declaration specifier* . 



**Description:** 



*Establishes* the <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> specified by *declaration-specifier* in the *global environment*. 



Such a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>, sometimes called a *global declaration* or a <ClLinks styled={true} term={"proclamation"}><i>proclamation</i></ClLinks>, is always in force unless locally *shadowed*. 



<ClLinks styled={true} term={"name"}><i>Names</i></ClLinks> of <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> and <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> within *declaration-specifier* refer to *dynamic variables* and global <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> definitions, respectively. 







 



 



Figure 3–22 shows a list of *declaration identifiers* that can be used with <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks>. 




```lisp title="Figure 3–22. Global Declaration Specifiers"
**declaration inline optimize type ftype notinline special**
```
 



An implementation is free to support other (<ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>) *declaration identifiers* as well. 

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



<ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks>, <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>, Section 3.2 (Compilation) 



**Notes:** 



Although the *execution* of a <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> has e↵ects that might a↵ect compilation, the compiler does not make any attempt to recognize and specially process <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. A <ClLinks styled={true} term={"proclamation"}><i>proclamation</i></ClLinks> such as the following, even if a *top level form*, does not have any e↵ect until it is executed: 



(proclaim ’(special \*x\*)) 



If compile time side e↵ects are desired, <ClLinks styled={true} term={"eval-when"}><b>eval-when</b></ClLinks> may be useful. For example: 



(eval-when (:execute :compile-toplevel :load-toplevel) 



(proclaim ’(special \*x\*))) 



In most such cases, however, it is preferrable to use <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks> for this purpose. 



Since <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks> <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are ordinary *function forms*, *macro forms* can expand into them. 