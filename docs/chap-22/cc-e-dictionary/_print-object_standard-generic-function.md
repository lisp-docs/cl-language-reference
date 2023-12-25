**print-object** *Standard Generic Function* 



**Syntax:** 



<DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> *object stream → object* 



**Method Signatures:** 



<DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> (*object standard-object<GlossaryTerm styled={true} term={"t"}><i>) </i></GlossaryTerm>stream* 



<DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> (*object structure-object<GlossaryTerm styled={true} term={"t"}><i>) </i></GlossaryTerm>stream* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 







 



 



<DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> 



**Description:** 



The *generic function* <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> writes the printed representation of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> is called by the *Lisp printer* ; it should not be called by the user. 



Each implementation is required to provide a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"standard-object"}><b>standard-object</b></DictionaryLink> and on the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink>. In addition, each <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> must provide <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> on enough other *classes* so as to ensure that there is always an applicable <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. Implementations are free to add <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for other *classes*. Users may write <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> for their own *classes* if they do not wish to inherit an *implementation-dependent method*. 



The <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> on the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> <DictionaryLink styled={true} term={"structure-object"}><b>structure-object</b></DictionaryLink> prints the object in the default #S notation; see Section 22.1.3.12 (Printing Structures). 



<GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> on <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> are responsible for implementing their part of the semantics of the *printer control variables*, as follows: 



<DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> 



All methods for <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> must obey <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink>. This includes both user-defined methods and <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm> methods. Readable printing of <GlossaryTerm styled={true} term={"structure"}><i>structures</i></GlossaryTerm> and *standard objects* is controlled by their <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> method, not by their <DictionaryLink styled={true} term={"make-load-form"}><b>make-load-form</b></DictionaryLink> <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"similarity"}><i>Similarity</i></GlossaryTerm> for these <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> is application dependent and hence is defined to be whatever these <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> do; see Section 3.2.4.2 (Similarity of Literal Objects). 



<DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> 



Each <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> must implement <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> 



The <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> may wish to perform specialized line breaking or other output conditional on the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink>. For further information, see (for example) the <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-fill"}><b>pprint-fill</b></DictionaryLink>. See also Section 22.2.1.4 (Pretty Print Dispatch Tables) and Section 22.2.2 (Examples of using the Pretty Printer). 



<DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink> 



<GlossaryTerm styled={true} term={"method"}><i>Methods</i></GlossaryTerm> that produce output of indefinite length must obey <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>. For further information, see (for example) the <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> and <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink>. See also Section 22.2.1.4 (Pretty Print Dispatch Tables) and Section 22.2.2 (Examples of using the Pretty Printer). 



**\*print-level\*** 



The printer takes care of **\*print-level\*** automatically, provided that each <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> handles exactly one level of structure and calls <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> (or an equivalent <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>) recursively if there are more structural levels. The printer’s decision of whether an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> has components (and 







 



 



therefore should not be printed when the printing depth is not less than **\*print-level\***) is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. In some implementations its <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is not called; in others the <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is called, and the determination that the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> has components is based on what it tries to write to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> 



When the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, a user-defined <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> can print <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> to the supplied <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> using <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink>, <DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink>, or <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> and expect circularities to be detected and printed using the #*n*# syntax. If a user-defined <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> prints to a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> other than the one that was supplied, then circularity detection starts over for that <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. See <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink>. 



**\*print-base\***, <DictionaryLink styled={true} term={"print-radix"}><b>\*print-radix\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink>, and <DictionaryLink styled={true} term={"print-array"}><b>\*print-array\*</b></DictionaryLink> 



These *printer control variables* apply to specific types of <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> and are handled by the <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> for those <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>. 



If these rules are not obeyed, the results are undefined. 



In general, the printer and the <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> methods should not rebind the print control variables as they operate recursively through the structure, but this is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



In some implementations the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> argument passed to a <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> is not the original <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, but is an intermediate <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that implements part of the printer. <GlossaryTerm styled={true} term={"method"}><i>methods</i></GlossaryTerm> should therefore not depend on the identity of this <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"pprint-fill"}><b>pprint-fill</b></DictionaryLink>, <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>, <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink>, <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>, Section 22.1.3 (Default Print-Object Methods), Section 22.1.3.12 (Printing Structures), Section 22.2.1.4 (Pretty Print Dispatch Tables), Section 22.2.2 (Examples of using the Pretty Printer) 



