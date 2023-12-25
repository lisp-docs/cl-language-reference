**built-in-class** *System Class* 



**Class Precedence List:** 



<ClLinks  term={"built-in-class"}><b>built-in-class</b></ClLinks>, <ClLinks  term={"class"}><b>class</b></ClLinks>, <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



A *built-in class* is a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> whose <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> have restricted capabilities or special representations. Attempting to use <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> to define *subclasses* of a *built-in class* signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <ClLinks  term={"error"}><b>error</b></ClLinks>. Calling <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> to create an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of a *built-in class* signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <ClLinks  term={"error"}><b>error</b></ClLinks>. Calling <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks> on an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of a *built-in class* signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <ClLinks  term={"error"}><b>error</b></ClLinks>. Redefining a *built-in class* or using <ClLinks  term={"change-class"}><b>change-class</b></ClLinks> to change the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to or from a *built-in class* signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <ClLinks  term={"error"}><b>error</b></ClLinks>. However, *built-in classes* can be used as *parameter specializers* in <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>.  







