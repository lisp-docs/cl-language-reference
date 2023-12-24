**built-in-class** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"built-in-class"}><b>built-in-class</b></ClLinks>, <ClLinks styled={true} term={"class"}><b>class</b></ClLinks>, <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A *built-in class* is a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> whose <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> have restricted capabilities or special representations. Attempting to use <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks> to define *subclasses* of a *built-in class* signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. Calling <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> to create an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of a *built-in class* signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. Calling <ClLinks styled={true} term={"slot-value"}><b>slot-value</b></ClLinks> on an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of a *built-in class* signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. Redefining a *built-in class* or using <ClLinks styled={true} term={"change-class"}><b>change-class</b></ClLinks> to change the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> of an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> to or from a *built-in class* signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. However, *built-in classes* can be used as *parameter specializers* in <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks>.  







