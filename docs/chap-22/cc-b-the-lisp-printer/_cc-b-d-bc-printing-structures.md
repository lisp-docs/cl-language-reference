 



By default, a <ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks> of type *S* is printed using #S syntax. This behavior can be customized by specifying a :print-function or :print-object option to the <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that defines *S*, or by writing a <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> that is <ClLinks styled={true} term={"specialized"}><i>specialized</i></ClLinks> for <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> of type *S*. 



Different structures might print out in different ways; the default notation for structures is: #S(*structure-name \{slot-key slot-value\}*\*) 



where #S indicates structure syntax, *structure-name* is a *structure name*, each *slot-key* is an initialization argument <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> for a <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks> in the <ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks>, and each corresponding *slot-value* is a representation of the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> in that <ClLinks styled={true} term={"slot"}><i>slot</i></ClLinks>. 



For information on how the *Lisp reader* parses <ClLinks styled={true} term={"structure"}><i>structures</i></ClLinks>, see Section 2.4.8.13 (Sharpsign S). 



 



 



