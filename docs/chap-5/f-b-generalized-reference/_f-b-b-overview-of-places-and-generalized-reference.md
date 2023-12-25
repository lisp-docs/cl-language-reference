 



A *generalized reference* is the use of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, sometimes called a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, as if it were a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> that could be read and written. The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to which the *place form* evaluates. The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> can be changed by using <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. The concept of binding a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is not defined 



in Common Lisp, but an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted to extend the language by defining this concept. 



Figure 5–1 contains examples of the use of <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink>. Note that the values returned by evaluating the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in column two are not necessarily the same as those obtained by evaluating the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in column three. In general, the exact *macro expansion* of a <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is not guaranteed and can even be <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>; all that is guaranteed is that the expansion is an update form that works for that particular <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, that the left-to-right evaluation of <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> is preserved, and that the ultimate result of evaluating <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> is the value or values being stored. 




|**Access function Update Function Update using setf**
|

| :- |

|<p>x (setq x datum) (setf x datum) </p><p>(car x) (rplaca x datum) (setf (car x) datum) (symbol-value x) (set x datum) (setf (symbol-value x) datum)</p>|





**Figure 5–1. Examples of setf** 



Figure 5–2 shows <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> relating to <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm> and *generalized reference*. 



|<p>**assert defsetf push** </p><p>**ccase get-setf-expansion remf** </p><p>**ctypecase getf rotatef decf incf setf** </p><p>**define-modify-macro pop shiftf define-setf-expander psetf**</p>|

| :- |





**Figure 5–2. Operators relating to places and generalized reference.** 



Some of the <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> above manipulate <GlossaryTerm styled={true} term={"place"}><i>places</i></GlossaryTerm> and some manipulate *setf expanders*. A *setf expansion* can be derived from any <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. New *setf expanders* can be defined by using <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> and <DictionaryLink styled={true} term={"define-setf-expander"}><b>define-setf-expander</b></DictionaryLink>. 



Data and Control 











