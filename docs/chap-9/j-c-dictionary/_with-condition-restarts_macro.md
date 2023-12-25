**with-condition-restarts** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"with-condition-restarts"}><b>with-condition-restarts</b></DictionaryLink> *condition-form restarts-form \{form\}*\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*condition-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; *evaluated* to produce a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a *condition object* resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of *condition-form*. 



*restart-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; *evaluated* to produce a *restart-list*. 



*restart-list*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *restart objects* resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of *restart-form*. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*; evaluated. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. 







 



 



**Description:** 



First, the *condition-form* and *restarts-form* are *evaluated* in normal left-to-right order; the *primary values* yielded by these <GlossaryTerm styled={true} term={"evaluation"}><i>evaluations</i></GlossaryTerm> are respectively called the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> and the *restart-list*. 



Next, the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are *evaluated* in a *dynamic environment* in which each <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> in *restart-list* is associated with the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. See Section 9.1.4.2.4 (Associating a Restart with a Condition). 



**See Also:** 



<DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> 



**Notes:** 



Usually this <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> is not used explicitly in code, since <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> handles most of the common cases in a way that is syntactically more concise. 



