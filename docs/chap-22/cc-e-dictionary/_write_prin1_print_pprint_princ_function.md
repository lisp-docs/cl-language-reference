**write, prin1, print, pprint, princ** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;key *array base case circle escape gensym* 



*length level lines miser-width pprint-dispatch* 



*pretty radix readably right-margin stream* 



*→ object* 



<DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;optional *output-stream → object* 



<DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;optional *output-stream → object* 







 



 



**write, prin1, print, pprint, princ** 



<DictionaryLink styled={true} term={"print"}><b>print</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;optional *output-stream → object* 



<DictionaryLink styled={true} term={"pprint"}><b>pprint</b></DictionaryLink> <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> &amp;optional *output-stream → hno valuesi* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. 



*output-stream*—an *output stream designator* . The default is *standard output*. 



<GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm>—a *generalized boolean*. 



*base*—a <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> . 



<GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> (member :upcase :downcase :capitalize). 



*circle*—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"escape"}><i>escape</i></GlossaryTerm>—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"gensym"}><i>gensym</i></GlossaryTerm>—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm>—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*level*—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*lines*—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*miser-width*—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*pprint-dispatch*—a *pprint dispatch table*. 



*pretty*—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm>—a *generalized boolean*. 



<GlossaryTerm styled={true} term={"readably"}><i>readably</i></GlossaryTerm>—a *generalized boolean*. 



*right-margin*—a non-negative *integer* , or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—an *output stream designator* . The default is *standard output*. 



**Description:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink>, <DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink>, <DictionaryLink styled={true} term={"print"}><b>print</b></DictionaryLink>, and <DictionaryLink styled={true} term={"pprint"}><b>pprint</b></DictionaryLink> write the printed representation of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> to *output-stream*. 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> is the general entry point to the *Lisp printer* . For each explicitly supplied *keyword parameter* named in Figure 22–7, the corresponding *printer control variable* is dynamically bound to its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> while printing goes on; for each *keyword parameter* in Figure 22–7 that is not explicitly supplied, the value of the corresponding *printer control variable* is the same as it was at the time <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink> was invoked. Once the appropriate <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> are *established*, the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is output by the *Lisp printer* . 







 



 



**write, prin1, print, pprint, princ** 



|**Parameter Corresponding Dynamic Variable**|

| :- |

|<p><GlossaryTerm styled={true} term={"array"}><i>array</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-array"}><b>\*print-array\*</b></DictionaryLink> </p><p>*base* **\*print-base\*** </p><p><GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink> </p><p>*circle* <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"escape"}><i>escape</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"gensym"}><i>gensym</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"length"}><i>length</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink> </p><p>*level* **\*print-level\*** </p><p>*lines* <DictionaryLink styled={true} term={"print-lines"}><b>\*print-lines\*</b></DictionaryLink> </p><p>*miser-width* <DictionaryLink styled={true} term={"print-miser-width"}><b>\*print-miser-width\*</b></DictionaryLink> </p><p>*pprint-dispatch* <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink> </p><p>*pretty* <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-radix"}><b>\*print-radix\*</b></DictionaryLink> </p><p><GlossaryTerm styled={true} term={"readably"}><i>readably</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> </p><p>*right-margin* <DictionaryLink styled={true} term={"print-right-margin"}><b>\*print-right-margin\*</b></DictionaryLink></p>|





**Figure 22–7. Argument correspondences for the WRITE function.** 



<DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink>, <DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink>, <DictionaryLink styled={true} term={"print"}><b>print</b></DictionaryLink>, and <DictionaryLink styled={true} term={"pprint"}><b>pprint</b></DictionaryLink> implicitly <GlossaryTerm styled={true} term={"bind"}><i>bind</i></GlossaryTerm> certain print parameters to particu lar values. The remaining parameter values are taken from <DictionaryLink styled={true} term={"print-array"}><b>\*print-array\*</b></DictionaryLink>, **\*print-base\***, <DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>, **\*print-level\***, <DictionaryLink styled={true} term={"print-lines"}><b>\*print-lines\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-miser-width"}><b>\*print-miser-width\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-radix"}><b>\*print-radix\*</b></DictionaryLink>, and <DictionaryLink styled={true} term={"print-right-margin"}><b>\*print-right-margin\*</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink> produces output suitable for input to <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>. It binds <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



<DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink> is just like <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink> except that the output has no *escape characters*. It binds <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm> and <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. The general rule is that output from <DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink> is intended to look good to people, while output from <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink> is intended to be acceptable to <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>. 



<DictionaryLink styled={true} term={"print"}><b>print</b></DictionaryLink> is just like <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink> except that the printed representation of <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is preceded by a newline and followed by a space. 



<DictionaryLink styled={true} term={"pprint"}><b>pprint</b></DictionaryLink> is just like <DictionaryLink styled={true} term={"print"}><b>print</b></DictionaryLink> except that the trailing space is omitted and <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is printed with the <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> flag <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm> to produce pretty output. 



*Output-stream* specifies the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> to which output is to be sent. 



**Affected By:** 



**\*standard-output\***, <DictionaryLink styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-radix"}><b>\*print-radix\*</b></DictionaryLink>, **\*print-base\***, <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink>, **\*print-level\***, <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-array"}><b>\*print-array\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></DictionaryLink>. 







 



 



**See Also:** 



<DictionaryLink styled={true} term={"readtable-case"}><b>readtable-case</b></DictionaryLink>, Section 22.3.4 (FORMAT Printer Operations) 



**Notes:** 



The <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink> and <DictionaryLink styled={true} term={"print"}><b>print</b></DictionaryLink> do not bind <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink>. 



(prin1 object output-stream) 



*≡* (write object :stream output-stream :escape t) 



(princ object output-stream) 



*≡* (write object stream output-stream :escape nil :readably nil) 



(print object output-stream) 



*≡* (progn (terpri output-stream) 



(write object :stream output-stream 



:escape t) 



(write-char #\space output-stream)) 



(pprint object output-stream) 



*≡* (write object :stream output-stream :escape t :pretty t) 



