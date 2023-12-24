**print-object** *Standard Generic Function* 



**Syntax:** 



<ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> *object stream → object* 



**Method Signatures:** 



<ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> (*object standard-object<ClLinks styled={true} term={"t"}><i>) </i></ClLinks>stream* 



<ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> (*object structure-object<ClLinks styled={true} term={"t"}><i>) </i></ClLinks>stream* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 







 



 



<ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> 



**Description:** 



The *generic function* <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> writes the printed representation of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> is called by the *Lisp printer* ; it should not be called by the user. 



Each implementation is required to provide a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"standard-object"}><b>standard-object</b></ClLinks> and on the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks>. In addition, each <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> must provide <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> on enough other *classes* so as to ensure that there is always an applicable <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. Implementations are free to add <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for other *classes*. Users may write <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> for their own *classes* if they do not wish to inherit an *implementation-dependent method*. 



The <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> on the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> <ClLinks styled={true} term={"structure-object"}><b>structure-object</b></ClLinks> prints the object in the default #S notation; see Section 22.1.3.12 (Printing Structures). 



<ClLinks styled={true} term={"method"}><i>Methods</i></ClLinks> on <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> are responsible for implementing their part of the semantics of the *printer control variables*, as follows: 



<ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> 



All methods for <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> must obey <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks>. This includes both user-defined methods and <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks> methods. Readable printing of <ClLinks styled={true} term={"structure"}><i>structures</i></ClLinks> and *standard objects* is controlled by their <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> method, not by their <ClLinks styled={true} term={"make-load-form"}><b>make-load-form</b></ClLinks> <ClLinks styled={true} term={"method"}><i>method</i></ClLinks>. <ClLinks styled={true} term={"similarity"}><i>Similarity</i></ClLinks> for these <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> is application dependent and hence is defined to be whatever these <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> do; see Section 3.2.4.2 (Similarity of Literal Objects). 



<ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> 



Each <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> must implement <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks>. 



<ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> 



The <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> may wish to perform specialized line breaking or other output conditional on the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks>. For further information, see (for example) the <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> <ClLinks styled={true} term={"pprint-fill"}><b>pprint-fill</b></ClLinks>. See also Section 22.2.1.4 (Pretty Print Dispatch Tables) and Section 22.2.2 (Examples of using the Pretty Printer). 



<ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks> 



<ClLinks styled={true} term={"method"}><i>Methods</i></ClLinks> that produce output of indefinite length must obey <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>. For further information, see (for example) the <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> and <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks>. See also Section 22.2.1.4 (Pretty Print Dispatch Tables) and Section 22.2.2 (Examples of using the Pretty Printer). 



**\*print-level\*** 



The printer takes care of **\*print-level\*** automatically, provided that each <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> handles exactly one level of structure and calls <ClLinks styled={true} term={"write"}><b>write</b></ClLinks> (or an equivalent <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>) recursively if there are more structural levels. The printer’s decision of whether an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> has components (and 







 



 



therefore should not be printed when the printing depth is not less than **\*print-level\***) is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. In some implementations its <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is not called; in others the <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is called, and the determination that the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> has components is based on what it tries to write to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



<ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> 



When the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, a user-defined <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> can print <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> to the supplied <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> using <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks>, <ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks>, or <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> and expect circularities to be detected and printed using the #*n*# syntax. If a user-defined <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> prints to a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> other than the one that was supplied, then circularity detection starts over for that <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. See <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks>. 



**\*print-base\***, <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks>, <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks>, <ClLinks styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></ClLinks>, and <ClLinks styled={true} term={"print-array"}><b>\*print-array\*</b></ClLinks> 



These *printer control variables* apply to specific types of <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks> and are handled by the <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> for those <ClLinks styled={true} term={"object"}><i>objects</i></ClLinks>. 



If these rules are not obeyed, the results are undefined. 



In general, the printer and the <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> methods should not rebind the print control variables as they operate recursively through the structure, but this is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



In some implementations the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> argument passed to a <ClLinks styled={true} term={"print-object"}><b>print-object</b></ClLinks> <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> is not the original <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, but is an intermediate <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that implements part of the printer. <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> should therefore not depend on the identity of this <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"pprint-fill"}><b>pprint-fill</b></ClLinks>, <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>, <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks>, <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks>, <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks>, <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks>, <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>, Section 22.1.3 (Default Print-Object Methods), Section 22.1.3.12 (Printing Structures), Section 22.2.1.4 (Pretty Print Dispatch Tables), Section 22.2.2 (Examples of using the Pretty Printer) 



