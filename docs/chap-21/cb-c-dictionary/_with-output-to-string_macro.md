**with-output-to-string** <GlossaryTerm  term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink> (*var* &amp;optional *string-form* &amp;key *element-type*) <GlossaryTerm  term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm  term={"form"}><i>\{form\}</i></GlossaryTerm>\* → \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*. 







 



 



<DictionaryLink  term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink> 



*string-form*—a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>; if <GlossaryTerm  term={"non-nil"}><i>non-nil</i></GlossaryTerm>, evaluated to produce <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



<GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> that has a <GlossaryTerm styled={true} term={"fill pointer"}><i>fill pointer</i></GlossaryTerm> . 



*element-type*—a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> ; evaluated. The default is <DictionaryLink  term={"character"}><b>character</b></DictionaryLink>. 



<GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 



*results*—If a *string-form* is not supplied or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>; otherwise, the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by the <GlossaryTerm  term={"form"}><i>forms</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink  term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink> creates a character *output stream*, performs a series of operations that may send results to this <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, and then closes the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>. 



The *element-type* names the <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> of the elements of the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>; a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> is constructed of the most specialized <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> that can accommodate elements of the given <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm>. 



The body is executed as an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm> with *var* bound to an *output string stream*. All output to that <GlossaryTerm styled={true} term={"string stream"}><i>string stream</i></GlossaryTerm> is saved in a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm>. 



If <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is supplied, *element-type* is ignored, and the output is incrementally appended to <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> as if by use of <DictionaryLink  term={"vector-push-extend"}><b>vector-push-extend</b></DictionaryLink>. 



The *output stream* is automatically closed on exit from **with-output-from-string**, no matter whether the exit is normal or abnormal. The *output string stream* to which the *variable var* is <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; its <GlossaryTerm  term={"extent"}><i>extent</i></GlossaryTerm> ends when the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is exited. 



If no <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is provided, then **with-output-from-string** produces a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> that accepts characters and returns a <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> of the indicated *element-type*. If <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is provided, <DictionaryLink  term={"with-output-to-string"}><b>with-output-to-string</b></DictionaryLink> returns the results of evaluating the last <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



The consequences are undefined if an attempt is made to <GlossaryTerm  term={"assign"}><i>assign</i></GlossaryTerm> the *variable var*. 



**Examples:**
```lisp
 
(setq fstr (make-array ’(0) :element-type ’base-char 
:fill-pointer 0 :adjustable t)) → "" 
(with-output-to-string (s fstr) 
(format s "here’s some output") 
(input-stream-p s)) → false 
fstr → "here’s some output" 
```
**Side Effects:** 



The <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> is modified. 



**Exceptional Situations:** 







 



 



The consequences are undefined if destructive modifications are performed directly on the <GlossaryTerm  term={"string"}><i>string</i></GlossaryTerm> during the <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> of the call. 



**See Also:** 



<b>make-string-output-stream</b>, <b>vector-push-extend</b>, Section 3.6 (Traversal Rules and Side Effects) <sup><i>∗</i><b>debug-io</b><i>∗</i><b>,</b> <i>∗</i><b>error-output</b><i>∗</i><b>,</b> <i>∗</i><b>query-io</b><i>∗</i><b>,</b> <i>∗</i><b>standard</b></sup> input<i>∗</i><b>,</b> <i>∗</i><b>standard-output</b><i>∗</i><b>,</b> <i>∗</i><b>trace-output</b><i>∗ Variable</i> 



**Value Type:** 



For **\*standard-input\***: an *input stream* 



For **\*error-output\***, **\*standard-output\***, and **\*trace-output\***: an *output stream*. 



For **\*debug-io\***, **\*query-io\***: a *bidirectional stream*. 



**Initial Value:** 



<GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, but it must be an *open stream* that is not a <GlossaryTerm styled={true} term={"generalized synonym stream"}><i>generalized synonym stream</i></GlossaryTerm> to an *I/O customization variables* but that might be a <GlossaryTerm styled={true} term={"generalized synonym stream"}><i>generalized synonym stream</i></GlossaryTerm> to the value of some *I/O customization variable*. The initial value might also be a <GlossaryTerm styled={true} term={"generalized synonym stream"}><i>generalized synonym stream</i></GlossaryTerm> to either the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink> or to the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> that is its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>. 



**Description:** 



These <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm> are collectively called the *standardized I/O customization variables*. They can be <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> or *assigned* in order to change the default destinations for input and/or output used by various *standardized operators* and facilities. 



The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*debug-io\***, called *debug I/O*, is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> to be used for interactive debugging purposes. 



The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*error-output\***, called <GlossaryTerm styled={true} term={"error output"}><i>error output</i></GlossaryTerm>, is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> to which warnings and non-interactive error messages should be sent. 



The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*query-io\***, called *query I/O*, is a *bidirectional stream* to be used when asking questions of the user. The question should be output to this <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, and the answer read from it. 



The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*standard-input\***, called <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>, is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> that is used by many <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> as a default source of input when no specific *input stream* is explicitly supplied. 



The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*standard-output\***, called <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>, is a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> that is used by many <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> as a default destination for output when no specific *output stream* is explicitly supplied. 



The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*trace-output\***, called <GlossaryTerm styled={true} term={"trace output"}><i>trace output</i></GlossaryTerm>, is the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> on which traced functions (see <DictionaryLink  term={"trace"}><b>trace</b></DictionaryLink>) and the <DictionaryLink  term={"time"}><b>time</b></DictionaryLink> <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> print their output. 







 



 



*∗***debug-io***∗***,** *∗***error-output***∗***,** *∗***query-io***∗***,** *. . .* 



**Examples:**
```lisp
(with-output-to-string (\*error-output\*) 
  (warn "this string is sent to \*error-output\*")) 
→ "Warning: this string is sent to \*error-output\* 
" ;The exact format of this string is *implementation-dependent*. 
(with-input-from-string (\*standard-input\* "1001") 
  (+ 990 (read))) → 1991 
(progn (setq out (with-output-to-string (\*standard-output\*) 
		   (print "print and format t send things to") 
		   (format t "\*standard-output\* now going to a string"))) 
       :done) 
→ :DONE 
out 
→ " 
\"print and format t send things to\" \*standard-output\* now going to a string" 
(defun fact (n) (if (< n 2) 1 (\* n (fact (- n 1))))) 
→ FACT 
(trace fact) 
→ (FACT) 
;; Of course, the format of traced output is implementation-dependent. 
(with-output-to-string (\*trace-output\*) 
  (fact 3)) 
→ " 
1 Enter FACT 3 
| 2 Enter FACT 2 
| 3 Enter FACT 1 
| 3 Exit FACT 1 
| 2 Exit FACT 2 
1 Exit FACT 6" 
```
**See Also:** 



<DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>, <DictionaryLink  term={"synonym-stream"}><b>synonym-stream</b></DictionaryLink>, <DictionaryLink  term={"time"}><b>time</b></DictionaryLink>, <DictionaryLink  term={"trace"}><b>trace</b></DictionaryLink>, Chapter 9 (Conditions), Chapter 23 (Reader), Chapter 22 (Printer) 



**Notes:** 



The intent of the constraints on the initial <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the *I/O customization variables* is to ensure that it is always safe to <GlossaryTerm  term={"bind"}><i>bind</i></GlossaryTerm> or <GlossaryTerm  term={"assign"}><i>assign</i></GlossaryTerm> such a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> to the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of another *I/O customization* 







 



 



<GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>, without unduly restricting <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> flexibility. 



It is common for an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> to make the initial <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of **\*debug-io\*** and **\*query-io\*** be the *same stream*, and to make the initial <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> of **\*error-output\*** and **\*standard-output\*** be the *same stream*. 



The functions <DictionaryLink  term={"y-or-n-p"}><b>y-or-n-p</b></DictionaryLink> and <DictionaryLink  term={"yes-or-no-p"}><b>yes-or-no-p</b></DictionaryLink> use *query I/O* for their input and output. 



In the normal *Lisp read-eval-print loop*, input is read from <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. Many input functions, including <DictionaryLink  term={"read"}><b>read</b></DictionaryLink> and <DictionaryLink  term={"read-char"}><b>read-char</b></DictionaryLink>, take a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> argument that defaults to <GlossaryTerm styled={true} term={"standard input"}><i>standard input</i></GlossaryTerm>. 



In the normal *Lisp read-eval-print loop*, output is sent to <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. Many output functions, including <DictionaryLink  term={"print"}><b>print</b></DictionaryLink> and <DictionaryLink  term={"write-char"}><b>write-char</b></DictionaryLink>, take a <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> argument that defaults to <GlossaryTerm styled={true} term={"standard output"}><i>standard output</i></GlossaryTerm>. 



A program that wants, for example, to divert output to a file should do so by <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> **\*standard-output\***; that way error messages sent to **\*error-output\*** can still get to the user by going through <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink> (if **\*error-output\*** is bound to <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>), which is usually what is desired. 



