**arithmetic-error** *Condition Type* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>, <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"serious-condition"}><b>serious-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink> consists of error conditions that occur during arithmetic operations. The operation and operands are initialized with the initialization arguments named :operation and :operands to <DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink>, and are *accessed* by the functions **arithmetic-error-operation** and **arithmetic-error-operands**. 



**See Also:** 



**arithmetic-error-operation**, **arithmetic-error-operands** 



<b><sup>arithmetic-error-operands, arithmetic-error</sup> operation</b> <i>Function</i> 



**Syntax:** 



**arithmetic-error-operands** *condition ! operands* 



**arithmetic-error-operation** *condition ! operation* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>. 



*operands*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



*operation*—a *function designator* . 



**Description:** 



**arithmetic-error-operands** returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the operands which were used in the o↵ending call to the operation that signaled the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 







 



 



**arithmetic-error-operation** returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of the o↵ending operation in the o↵ending call that signaled the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"arithmetic-error"}><b>arithmetic-error</b></DictionaryLink>, Chapter 9 (Conditions) 



**Notes:** 



