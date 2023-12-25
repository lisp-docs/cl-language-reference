**write, prin1, print, pprint, princ** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks> <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> &amp;key *array base case circle escape gensym* 



*length level lines miser-width pprint-dispatch* 



*pretty radix readably right-margin stream* 



→ object 



<ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks> <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> &amp;optional *output-stream → object* 



<ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks> <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> &amp;optional *output-stream → object* 







 



 



**write, prin1, print, pprint, princ** 



<ClLinks styled={true} term={"print"}><b>print</b></ClLinks> <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> &amp;optional *output-stream → object* 



<ClLinks styled={true} term={"pprint"}><b>pprint</b></ClLinks> <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> &amp;optional *output-stream → ⟨no values⟩* 



**Arguments and Values:** 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. 



*output-stream*—an *output stream designator* . The default is *standard output*. 



<ClLinks styled={true} term={"array"}><i>array</i></ClLinks>—a *generalized boolean*. 



*base*—a <ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> . 



<ClLinks styled={true} term={"case"}><i>case</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> (member :upcase :downcase :capitalize). 



*circle*—a *generalized boolean*. 



<ClLinks styled={true} term={"escape"}><i>escape</i></ClLinks>—a *generalized boolean*. 



<ClLinks styled={true} term={"gensym"}><i>gensym</i></ClLinks>—a *generalized boolean*. 



<ClLinks styled={true} term={"length"}><i>length</i></ClLinks>—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*level*—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*lines*—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*miser-width*—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*pprint-dispatch*—a *pprint dispatch table*. 



*pretty*—a *generalized boolean*. 



<ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks>—a *generalized boolean*. 



<ClLinks styled={true} term={"readably"}><i>readably</i></ClLinks>—a *generalized boolean*. 



*right-margin*—a non-negative *integer* , or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—an *output stream designator* . The default is *standard output*. 



**Description:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks>, <ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks>, <ClLinks styled={true} term={"print"}><b>print</b></ClLinks>, and <ClLinks styled={true} term={"pprint"}><b>pprint</b></ClLinks> write the printed representation of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> to *output-stream*. 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks> is the general entry point to the *Lisp printer* . For each explicitly supplied *keyword parameter* named in Figure 22–7, the corresponding *printer control variable* is dynamically bound to its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> while printing goes on; for each *keyword parameter* in Figure 22–7 that is not explicitly supplied, the value of the corresponding *printer control variable* is the same as it was at the time <ClLinks styled={true} term={"write"}><b>write</b></ClLinks> was invoked. Once the appropriate <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> are *established*, the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is output by the *Lisp printer* . 







 



 



**write, prin1, print, pprint, princ** 



|**Parameter Corresponding Dynamic Variable**|

| :- |

|<p><ClLinks styled={true} term={"array"}><i>array</i></ClLinks> <ClLinks styled={true} term={"print-array"}><b>\*print-array\*</b></ClLinks> </p><p>*base* **\*print-base\*** </p><p><ClLinks styled={true} term={"case"}><i>case</i></ClLinks> <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks> </p><p>*circle* <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> </p><p><ClLinks styled={true} term={"escape"}><i>escape</i></ClLinks> <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> </p><p><ClLinks styled={true} term={"gensym"}><i>gensym</i></ClLinks> <ClLinks styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></ClLinks> </p><p><ClLinks styled={true} term={"length"}><i>length</i></ClLinks> <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks> </p><p>*level* **\*print-level\*** </p><p>*lines* <ClLinks styled={true} term={"print-lines"}><b>\*print-lines\*</b></ClLinks> </p><p>*miser-width* <ClLinks styled={true} term={"print-miser-width"}><b>\*print-miser-width\*</b></ClLinks> </p><p>*pprint-dispatch* <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks> </p><p>*pretty* <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> </p><p><ClLinks styled={true} term={"radix"}><i>radix</i></ClLinks> <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks> </p><p><ClLinks styled={true} term={"readably"}><i>readably</i></ClLinks> <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> </p><p>*right-margin* <ClLinks styled={true} term={"print-right-margin"}><b>\*print-right-margin\*</b></ClLinks></p>|





**Figure 22–7. Argument correspondences for the WRITE function.** 



<ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks>, <ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks>, <ClLinks styled={true} term={"print"}><b>print</b></ClLinks>, and <ClLinks styled={true} term={"pprint"}><b>pprint</b></ClLinks> implicitly <ClLinks styled={true} term={"bind"}><i>bind</i></ClLinks> certain print parameters to particu lar values. The remaining parameter values are taken from <ClLinks styled={true} term={"print-array"}><b>\*print-array\*</b></ClLinks>, **\*print-base\***, <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks>, <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks>, <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks>, <ClLinks styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></ClLinks>, <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>, **\*print-level\***, <ClLinks styled={true} term={"print-lines"}><b>\*print-lines\*</b></ClLinks>, <ClLinks styled={true} term={"print-miser-width"}><b>\*print-miser-width\*</b></ClLinks>, <ClLinks styled={true} term={"print-pprint-dispatch"}><b>\*print-pprint-dispatch\*</b></ClLinks>, <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks>, <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks>, and <ClLinks styled={true} term={"print-right-margin"}><b>\*print-right-margin\*</b></ClLinks>. 



<ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks> produces output suitable for input to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks>. It binds <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> to <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



<ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks> is just like <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks> except that the output has no *escape characters*. It binds <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> to <ClLinks styled={true} term={"false"}><i>false</i></ClLinks> and <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> to <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. The general rule is that output from <ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks> is intended to look good to people, while output from <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks> is intended to be acceptable to <ClLinks styled={true} term={"read"}><b>read</b></ClLinks>. 



<ClLinks styled={true} term={"print"}><b>print</b></ClLinks> is just like <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks> except that the printed representation of <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is preceded by a newline and followed by a space. 



<ClLinks styled={true} term={"pprint"}><b>pprint</b></ClLinks> is just like <ClLinks styled={true} term={"print"}><b>print</b></ClLinks> except that the trailing space is omitted and <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is printed with the <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> flag <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks> to produce pretty output. 



*Output-stream* specifies the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> to which output is to be sent. 



**Affected By:** 



**\*standard-output\***, <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>, <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks>, <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks>, **\*print-base\***, <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks>, <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks>, **\*print-level\***, <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>, <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks>, <ClLinks styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></ClLinks>, <ClLinks styled={true} term={"print-array"}><b>\*print-array\*</b></ClLinks>, <ClLinks styled={true} term={"read-default-float-format"}><b>\*read-default-float-format\*</b></ClLinks>. 







 



 



**See Also:** 



<ClLinks styled={true} term={"readtable-case"}><b>readtable-case</b></ClLinks>, Section 22.3.4 (FORMAT Printer Operations) 



**Notes:** 



The <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks> and <ClLinks styled={true} term={"print"}><b>print</b></ClLinks> do not bind <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks>. 



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



