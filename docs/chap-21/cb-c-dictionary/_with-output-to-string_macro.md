**with-output-to-string** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks> (*var* &amp;optional *string-form* &amp;key *element-type*) <ClLinks  term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks  term={"form"}><i>\{form\}</i></ClLinks>\* → \{result\}\* 



**Arguments and Values:** 



*var*—a *variable name*. 







 



 



<ClLinks  term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks> 



*string-form*—a <ClLinks  term={"form"}><i>form</i></ClLinks> or <ClLinks  term={"nil"}><b>nil</b></ClLinks>; if <ClLinks  term={"non-nil"}><i>non-nil</i></ClLinks>, evaluated to produce <ClLinks  term={"string"}><i>string</i></ClLinks>. 



<ClLinks  term={"string"}><i>string</i></ClLinks>—a <ClLinks  term={"string"}><i>string</i></ClLinks> that has a *fill pointer* . 



*element-type*—a *type specifier* ; evaluated. The default is <ClLinks  term={"character"}><b>character</b></ClLinks>. 



<ClLinks  term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks  term={"form"}><i>forms</i></ClLinks>—an *implicit progn*. 



*results*—If a *string-form* is not supplied or <ClLinks  term={"nil"}><b>nil</b></ClLinks>, a <ClLinks  term={"string"}><i>string</i></ClLinks>; otherwise, the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by the <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



**Description:** 



<ClLinks  term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks> creates a character *output stream*, performs a series of operations that may send results to this <ClLinks  term={"stream"}><i>stream</i></ClLinks>, and then closes the <ClLinks  term={"stream"}><i>stream</i></ClLinks>. 



The *element-type* names the <ClLinks  term={"type"}><i>type</i></ClLinks> of the elements of the <ClLinks  term={"stream"}><i>stream</i></ClLinks>; a <ClLinks  term={"stream"}><i>stream</i></ClLinks> is constructed of the most specialized <ClLinks  term={"type"}><i>type</i></ClLinks> that can accommodate elements of the given <ClLinks  term={"type"}><i>type</i></ClLinks>. 



The body is executed as an *implicit progn* with *var* bound to an *output string stream*. All output to that *string stream* is saved in a <ClLinks  term={"string"}><i>string</i></ClLinks>. 



If <ClLinks  term={"string"}><i>string</i></ClLinks> is supplied, *element-type* is ignored, and the output is incrementally appended to <ClLinks  term={"string"}><i>string</i></ClLinks> as if by use of <ClLinks  term={"vector-push-extend"}><b>vector-push-extend</b></ClLinks>. 



The *output stream* is automatically closed on exit from **with-output-from-string**, no matter whether the exit is normal or abnormal. The *output string stream* to which the *variable var* is <ClLinks  term={"bound"}><i>bound</i></ClLinks> has *dynamic extent*; its <ClLinks  term={"extent"}><i>extent</i></ClLinks> ends when the <ClLinks  term={"form"}><i>form</i></ClLinks> is exited. 



If no <ClLinks  term={"string"}><i>string</i></ClLinks> is provided, then **with-output-from-string** produces a <ClLinks  term={"stream"}><i>stream</i></ClLinks> that accepts characters and returns a <ClLinks  term={"string"}><i>string</i></ClLinks> of the indicated *element-type*. If <ClLinks  term={"string"}><i>string</i></ClLinks> is provided, <ClLinks  term={"with-output-to-string"}><b>with-output-to-string</b></ClLinks> returns the results of evaluating the last <ClLinks  term={"form"}><i>form</i></ClLinks>. 



The consequences are undefined if an attempt is made to <ClLinks  term={"assign"}><i>assign</i></ClLinks> the *variable var*. 



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



The <ClLinks  term={"string"}><i>string</i></ClLinks> is modified. 



**Exceptional Situations:** 







 



 



The consequences are undefined if destructive modifications are performed directly on the <ClLinks  term={"string"}><i>string</i></ClLinks> during the *dynamic extent* of the call. 



**See Also:** 



<b>make-string-output-stream</b>, <b>vector-push-extend</b>, Section 3.6 (Traversal Rules and Side Effects) <sup><i>∗</i><b>debug-io</b><i>∗</i><b>,</b> <i>∗</i><b>error-output</b><i>∗</i><b>,</b> <i>∗</i><b>query-io</b><i>∗</i><b>,</b> <i>∗</i><b>standard</b></sup> input<i>∗</i><b>,</b> <i>∗</i><b>standard-output</b><i>∗</i><b>,</b> <i>∗</i><b>trace-output</b><i>∗ Variable</i> 



**Value Type:** 



For **\*standard-input\***: an *input stream* 



For **\*error-output\***, **\*standard-output\***, and **\*trace-output\***: an *output stream*. 



For **\*debug-io\***, **\*query-io\***: a *bidirectional stream*. 



**Initial Value:** 



<ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>, but it must be an *open stream* that is not a *generalized synonym stream* to an *I/O customization variables* but that might be a *generalized synonym stream* to the value of some *I/O customization variable*. The initial value might also be a *generalized synonym stream* to either the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks> or to the <ClLinks  term={"stream"}><i>stream</i></ClLinks> that is its <ClLinks  term={"value"}><i>value</i></ClLinks>. 



**Description:** 



These <ClLinks  term={"variable"}><i>variables</i></ClLinks> are collectively called the *standardized I/O customization variables*. They can be <ClLinks  term={"bound"}><i>bound</i></ClLinks> or *assigned* in order to change the default destinations for input and/or output used by various *standardized operators* and facilities. 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*debug-io\***, called *debug I/O*, is a <ClLinks  term={"stream"}><i>stream</i></ClLinks> to be used for interactive debugging purposes. 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*error-output\***, called *error output*, is a <ClLinks  term={"stream"}><i>stream</i></ClLinks> to which warnings and non-interactive error messages should be sent. 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*query-io\***, called *query I/O*, is a *bidirectional stream* to be used when asking questions of the user. The question should be output to this <ClLinks  term={"stream"}><i>stream</i></ClLinks>, and the answer read from it. 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*standard-input\***, called *standard input*, is a <ClLinks  term={"stream"}><i>stream</i></ClLinks> that is used by many <ClLinks  term={"operator"}><i>operators</i></ClLinks> as a default source of input when no specific *input stream* is explicitly supplied. 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*standard-output\***, called *standard output*, is a <ClLinks  term={"stream"}><i>stream</i></ClLinks> that is used by many <ClLinks  term={"operator"}><i>operators</i></ClLinks> as a default destination for output when no specific *output stream* is explicitly supplied. 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*trace-output\***, called *trace output*, is the <ClLinks  term={"stream"}><i>stream</i></ClLinks> on which traced functions (see <ClLinks  term={"trace"}><b>trace</b></ClLinks>) and the <ClLinks  term={"time"}><b>time</b></ClLinks> <ClLinks  term={"macro"}><i>macro</i></ClLinks> print their output. 







 



 



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



<ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>, <ClLinks  term={"synonym-stream"}><b>synonym-stream</b></ClLinks>, <ClLinks  term={"time"}><b>time</b></ClLinks>, <ClLinks  term={"trace"}><b>trace</b></ClLinks>, Chapter 9 (Conditions), Chapter 23 (Reader), Chapter 22 (Printer) 



**Notes:** 



The intent of the constraints on the initial <ClLinks  term={"value"}><i>value</i></ClLinks> of the *I/O customization variables* is to ensure that it is always safe to <ClLinks  term={"bind"}><i>bind</i></ClLinks> or <ClLinks  term={"assign"}><i>assign</i></ClLinks> such a <ClLinks  term={"variable"}><i>variable</i></ClLinks> to the <ClLinks  term={"value"}><i>value</i></ClLinks> of another *I/O customization* 







 



 



<ClLinks  term={"variable"}><i>variable</i></ClLinks>, without unduly restricting <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> flexibility. 



It is common for an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> to make the initial <ClLinks  term={"value"}><i>values</i></ClLinks> of **\*debug-io\*** and **\*query-io\*** be the *same stream*, and to make the initial <ClLinks  term={"value"}><i>values</i></ClLinks> of **\*error-output\*** and **\*standard-output\*** be the *same stream*. 



The functions <ClLinks  term={"y-or-n-p"}><b>y-or-n-p</b></ClLinks> and <ClLinks  term={"yes-or-no-p"}><b>yes-or-no-p</b></ClLinks> use *query I/O* for their input and output. 



In the normal *Lisp read-eval-print loop*, input is read from *standard input*. Many input functions, including <ClLinks  term={"read"}><b>read</b></ClLinks> and <ClLinks  term={"read-char"}><b>read-char</b></ClLinks>, take a <ClLinks  term={"stream"}><i>stream</i></ClLinks> argument that defaults to *standard input*. 



In the normal *Lisp read-eval-print loop*, output is sent to *standard output*. Many output functions, including <ClLinks  term={"print"}><b>print</b></ClLinks> and <ClLinks  term={"write-char"}><b>write-char</b></ClLinks>, take a <ClLinks  term={"stream"}><i>stream</i></ClLinks> argument that defaults to *standard output*. 



A program that wants, for example, to divert output to a file should do so by <ClLinks  term={"binding"}><i>binding</i></ClLinks> **\*standard-output\***; that way error messages sent to **\*error-output\*** can still get to the user by going through <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks> (if **\*error-output\*** is bound to <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>), which is usually what is desired. 



