**built-in-class** *System Class* 



**Class Precedence List:** 



<DictionaryLink  term={"built-in-class"}><b>built-in-class</b></DictionaryLink>, <DictionaryLink  term={"class"}><b>class</b></DictionaryLink>, <DictionaryLink  term={"standard-object"}><b>standard-object</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A *built-in class* is a <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> whose <GlossaryTerm  term={"instance"}><i>instances</i></GlossaryTerm> have restricted capabilities or special representations. Attempting to use <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink> to define *subclasses* of a *built-in class* signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. Calling <DictionaryLink  term={"make-instance"}><b>make-instance</b></DictionaryLink> to create an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of a *built-in class* signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. Calling <DictionaryLink  term={"slot-value"}><b>slot-value</b></DictionaryLink> on an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> of a *built-in class* signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. Redefining a *built-in class* or using <DictionaryLink  term={"change-class"}><b>change-class</b></DictionaryLink> to change the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> of an <GlossaryTerm  term={"instance"}><i>instance</i></GlossaryTerm> to or from a *built-in class* signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>. However, *built-in classes* can be used as *parameter specializers* in <GlossaryTerm  term={"method"}><i>methods</i></GlossaryTerm>.  







