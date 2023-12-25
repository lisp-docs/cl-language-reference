 



A *generalized reference* is the use of a <ClLinks  term={"form"}><i>form</i></ClLinks>, sometimes called a <ClLinks  term={"place"}><i>place</i></ClLinks>, as if it were a <ClLinks  term={"variable"}><i>variable</i></ClLinks> that could be read and written. The <ClLinks  term={"value"}><i>value</i></ClLinks> of a <ClLinks  term={"place"}><i>place</i></ClLinks> is the <ClLinks  term={"object"}><i>object</i></ClLinks> to which the *place form* evaluates. The <ClLinks  term={"value"}><i>value</i></ClLinks> of a <ClLinks  term={"place"}><i>place</i></ClLinks> can be changed by using <ClLinks  term={"setf"}><b>setf</b></ClLinks>. The concept of binding a <ClLinks  term={"place"}><i>place</i></ClLinks> is not defined 



in Common Lisp, but an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is permitted to extend the language by defining this concept. 



Figure 5–1 contains examples of the use of <ClLinks  term={"setf"}><b>setf</b></ClLinks>. Note that the values returned by evaluating the <ClLinks  term={"form"}><i>forms</i></ClLinks> in column two are not necessarily the same as those obtained by evaluating the <ClLinks  term={"form"}><i>forms</i></ClLinks> in column three. In general, the exact *macro expansion* of a <ClLinks  term={"setf"}><b>setf</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks> is not guaranteed and can even be <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>; all that is guaranteed is that the expansion is an update form that works for that particular <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>, that the left-to-right evaluation of <ClLinks  term={"subform"}><i>subforms</i></ClLinks> is preserved, and that the ultimate result of evaluating <ClLinks  term={"setf"}><b>setf</b></ClLinks> is the value or values being stored. 




|**Access function Update Function Update using setf**
|

| :- |

|<p>x (setq x datum) (setf x datum) </p><p>(car x) (rplaca x datum) (setf (car x) datum) (symbol-value x) (set x datum) (setf (symbol-value x) datum)</p>|





**Figure 5–1. Examples of setf** 



Figure 5–2 shows <ClLinks  term={"operator"}><i>operators</i></ClLinks> relating to <ClLinks  term={"place"}><i>places</i></ClLinks> and *generalized reference*. 



|<p>**assert defsetf push** </p><p>**ccase get-setf-expansion remf** </p><p>**ctypecase getf rotatef decf incf setf** </p><p>**define-modify-macro pop shiftf define-setf-expander psetf**</p>|

| :- |





**Figure 5–2. Operators relating to places and generalized reference.** 



Some of the <ClLinks  term={"operator"}><i>operators</i></ClLinks> above manipulate <ClLinks  term={"place"}><i>places</i></ClLinks> and some manipulate *setf expanders*. A *setf expansion* can be derived from any <ClLinks  term={"place"}><i>place</i></ClLinks>. New *setf expanders* can be defined by using <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> and <ClLinks  term={"define-setf-expander"}><b>define-setf-expander</b></ClLinks>. 



Data and Control 











