**with-condition-restarts** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"with-condition-restarts"}><b>with-condition-restarts</b></ClLinks> *condition-form restarts-form \{form\}*\* 



→ \{result\}\* 



**Arguments and Values:** 



*condition-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; *evaluated* to produce a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. 



<ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>—a *condition object* resulting from the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of *condition-form*. 



*restart-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; *evaluated* to produce a *restart-list*. 



*restart-list*—a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of *restart objects* resulting from the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> of *restart-form*. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an *implicit progn*; evaluated. 



*results*—the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 







 



 



**Description:** 



First, the *condition-form* and *restarts-form* are *evaluated* in normal left-to-right order; the *primary values* yielded by these <ClLinks styled={true} term={"evaluation"}><i>evaluations</i></ClLinks> are respectively called the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> and the *restart-list*. 



Next, the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are *evaluated* in a *dynamic environment* in which each <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> in *restart-list* is associated with the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks>. See Section 9.1.4.2.4 (Associating a Restart with a Condition). 



**See Also:** 



<ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks> 



**Notes:** 



Usually this <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> is not used explicitly in code, since <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks> handles most of the common cases in a way that is syntactically more concise. 



