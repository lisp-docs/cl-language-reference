**built-in-class** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"built-in-class"}><b>built-in-class</b></DictionaryLink>, <DictionaryLink styled={true} term={"class"}><b>class</b></DictionaryLink>, <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A *built-in class* is a <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"instance"}><i>instances</i></GlossaryTerm> have restricted capabilities or special representations. Attempting to use <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink> to define *subclasses* of a *built-in class* signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. Calling <DictionaryLink styled={true} term={"make-instance"}><b>make-instance</b></DictionaryLink> to create an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of a *built-in class* signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. Calling <DictionaryLink styled={true} term={"slot-value"}><b>slot-value</b></DictionaryLink> on an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> of a *built-in class* signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. Redefining a *built-in class* or using <DictionaryLink styled={true} term={"change-class"}><b>change-class</b></DictionaryLink> to change the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm styled={true} term={"instance"}><i>instance</i></GlossaryTerm> to or from a *built-in class* signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. However, *built-in classes* can be used as *parameter specializers* in <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm>.  







