**built-in-class** *System Class* 



**Class Precedence List:** 



<ClLinks  term={"built-in-class"}><b>built-in-class</b></ClLinks>, <ClLinks  term={"class"}><b>class</b></ClLinks>, <ClLinks  term={"standard-object"}><b>standard-object</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



A *built-in class* is a <ClLinks  term={"class"}><i>class</i></ClLinks> whose <ClLinks  term={"instance"}><i>instances</i></ClLinks> have restricted capabilities or special representations. Attempting to use <ClLinks  term={"defclass"}><b>defclass</b></ClLinks> to define *subclasses* of a *built-in class* signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. Calling <ClLinks  term={"make-instance"}><b>make-instance</b></ClLinks> to create an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a *built-in class* signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. Calling <ClLinks  term={"slot-value"}><b>slot-value</b></ClLinks> on an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of a *built-in class* signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. Redefining a *built-in class* or using <ClLinks  term={"change-class"}><b>change-class</b></ClLinks> to change the <ClLinks  term={"class"}><i>class</i></ClLinks> of an <ClLinks  term={"instance"}><i>instance</i></ClLinks> to or from a *built-in class* signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>. However, *built-in classes* can be used as *parameter specializers* in <ClLinks  term={"method"}><i>methods</i></ClLinks>.  







