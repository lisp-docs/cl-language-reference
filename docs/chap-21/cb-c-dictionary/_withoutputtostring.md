**with-output-to-string** *Macro* 



**Syntax:** 



**with-output-to-string** (*var* &optional *string-form* &key *element-type*) *\&#123;declaration\&#125;*\* *\&#123;form\&#125;*\* *→ \&#123;result\&#125;*\* 



**Arguments and Values:** 



*var*—a *variable name*. 







 



 



**with-output-to-string** 



*string-form*—a *form* or **nil**; if *non-nil*, evaluated to produce *string*. 



*string*—a *string* that has a *fill pointer* . 



*element-type*—a *type specifier* ; evaluated. The default is **character**. 



*declaration*—a **declare** *expression*; not evaluated. 



*forms*—an *implicit progn*. 



*results*—If a *string-form* is not supplied or **nil**, a *string*; otherwise, the *values* returned by the *forms*. 



**Description:** 



**with-output-to-string** creates a character *output stream*, performs a series of operations that may send results to this *stream*, and then closes the *stream*. 



The *element-type* names the *type* of the elements of the *stream*; a *stream* is constructed of the most specialized *type* that can accommodate elements of the given *type*. 



The body is executed as an *implicit progn* with *var* bound to an *output string stream*. All output to that *string stream* is saved in a *string*. 



If *string* is supplied, *element-type* is ignored, and the output is incrementally appended to *string* as if by use of **vector-push-extend**. 



The *output stream* is automatically closed on exit from **with-output-from-string**, no matter whether the exit is normal or abnormal. The *output string stream* to which the *variable var* is *bound* has *dynamic extent*; its *extent* ends when the *form* is exited. 



If no *string* is provided, then **with-output-from-string** produces a *stream* that accepts characters and returns a *string* of the indicated *element-type*. If *string* is provided, **with-output-to-string** returns the results of evaluating the last *form*. 



The consequences are undefined if an attempt is made to *assign* the *variable var*. 



**Examples:**
```lisp
 



(setq fstr (make-array ’(0) :element-type ’base-char 



:fill-pointer 0 :adjustable t)) *→* "" 



(with-output-to-string (s fstr) 



(format s "here’s some output") 



(input-stream-p s)) *→ false* 



fstr *→* "here’s some output" 




```
**Side Effects:** 



The *string* is modified. 



**Exceptional Situations:** 







 



 



The consequences are undefined if destructive modifications are performed directly on the *string* during the *dynamic extent* of the call. 



**See Also:** 



<b>make-string-output-stream</b>, <b>vector-push-extend</b>, Section 3.6 (Traversal Rules and Side Effects) <sup><i>∗</i><b>debug-io</b><i>∗</i><b>,</b> <i>∗</i><b>error-output</b><i>∗</i><b>,</b> <i>∗</i><b>query-io</b><i>∗</i><b>,</b> <i>∗</i><b>standard</b></sup> input</b><i>∗</i><b>,</b> <i>∗</i><b>standard-output</b><i>∗</i><b>,</b> <i>∗</i><b>trace-output</b><i>∗ Variable</i> 



**Value Type:** 



For **\*standard-input\***: an *input stream* 



For **\*error-output\***, **\*standard-output\***, and **\*trace-output\***: an *output stream*. 



For **\*debug-io\***, **\*query-io\***: a *bidirectional stream*. 



**Initial Value:** 



*implementation-dependent*, but it must be an *open stream* that is not a *generalized synonym stream* to an *I/O customization variables* but that might be a *generalized synonym stream* to the value of some *I/O customization variable*. The initial value might also be a *generalized synonym stream* to either the *symbol* **\*terminal-io\*** or to the *stream* that is its *value*. 



**Description:** 



These *variables* are collectively called the *standardized I/O customization variables*. They can be *bound* or *assigned* in order to change the default destinations for input and/or output used by various *standardized operators* and facilities. 



The *value* of **\*debug-io\***, called *debug I/O*, is a *stream* to be used for interactive debugging purposes. 



The *value* of **\*error-output\***, called *error output*, is a *stream* to which warnings and non-interactive error messages should be sent. 



The *value* of **\*query-io\***, called *query I/O*, is a *bidirectional stream* to be used when asking questions of the user. The question should be output to this *stream*, and the answer read from it. 



The *value* of **\*standard-input\***, called *standard input*, is a *stream* that is used by many *operators* as a default source of input when no specific *input stream* is explicitly supplied. 



The *value* of **\*standard-output\***, called *standard output*, is a *stream* that is used by many *operators* as a default destination for output when no specific *output stream* is explicitly supplied. 



The *value* of **\*trace-output\***, called *trace output*, is the *stream* on which traced functions (see **trace**) and the **time** *macro* print their output. 







 



 



*∗***debug-io***∗***,** *∗***error-output***∗***,** *∗***query-io***∗***,** *. . .* 



**Examples:** 



(with-output-to-string (\*error-output\*) 



(warn "this string is sent to \*error-output\*")) 



*→* "Warning: this string is sent to \*error-output\* 



" ;The exact format of this string is *implementation-dependent*. 



(with-input-from-string (\*standard-input\* "1001") 



(+ 990 (read))) *→* 1991 



(progn (setq out (with-output-to-string (\*standard-output\*) 



(print "print and format t send things to") 



(format t "\*standard-output\* now going to a string"))) 



:done) 



*→* :DONE 



out 



*→* " 



\"print and format t send things to\" \*standard-output\* now going to a string" 



(defun fact (n) (if (< n 2) 1 (\* n (fact (- n 1))))) 



*→* FACT 



(trace fact) 



*→* (FACT) 



;; Of course, the format of traced output is implementation-dependent. 



(with-output-to-string (\*trace-output\*) 



(fact 3)) 



*→* " 



1 Enter FACT 3 



| 2 Enter FACT 2 



| 3 Enter FACT 1 



| 3 Exit FACT 1 



| 2 Exit FACT 2 



1 Exit FACT 6" 



**See Also:** 



**\*terminal-io\***, **synonym-stream**, **time**, **trace**, Chapter 9 (Conditions), Chapter 23 (Reader), Chapter 22 (Printer) 



**Notes:** 



The intent of the constraints on the initial *value* of the *I/O customization variables* is to ensure that it is always safe to *bind* or *assign* such a *variable* to the *value* of another *I/O customization* 







 



 



*variable*, without unduly restricting *implementation* flexibility. 



It is common for an *implementation* to make the initial *values* of **\*debug-io\*** and **\*query-io\*** be the *same stream*, and to make the initial *values* of **\*error-output\*** and **\*standard-output\*** be the *same stream*. 



The functions **y-or-n-p** and **yes-or-no-p** use *query I/O* for their input and output. 



In the normal *Lisp read-eval-print loop*, input is read from *standard input*. Many input functions, including **read** and **read-char**, take a *stream* argument that defaults to *standard input*. 



In the normal *Lisp read-eval-print loop*, output is sent to *standard output*. Many output functions, including **print** and **write-char**, take a *stream* argument that defaults to *standard output*. 



A program that wants, for example, to divert output to a file should do so by *binding* **\*standard-output\***; that way error messages sent to **\*error-output\*** can still get to the user by going through **\*terminal-io\*** (if **\*error-output\*** is bound to **\*terminal-io\***), which is usually what is desired. 



*∗***terminal-io***∗ Variable* 



**Value Type:** 



a *bidirectional stream*. 



**Initial Value:** 



*implementation-dependent*, but it must be an *open stream* that is not a *generalized synonym stream* to an *I/O customization variables* but that might be a *generalized synonym stream* to the *value* of some *I/O customization variable*. 



**Description:** 



The *value* of **\*terminal-io\***, called *terminal I/O*, is ordinarily a *bidirectional stream* that connects to the user’s console. Typically, writing to this *stream* would cause the output to appear on a display screen, for example, and reading from the *stream* would accept input from a keyboard. It is intended that standard input functions such as **read** and **read-char**, when used with this *stream*, cause echoing of the input into the output side of the *stream*. The means by which this is accomplished are *implementation-dependent*. 



The effect of changing the *value* of **\*terminal-io\***, either by *binding* or *assignment*, is *implementation-defined*. 



**Examples:** 



(progn (prin1 ’foo) (prin1 ’bar \*terminal-io\*)) 







 



 



▷ FOOBAR 



*→* BAR 



(with-output-to-string (\*standard-output\*) 



(prin1 ’foo) 



(prin1 ’bar \*terminal-io\*)) 



▷ BAR 



*→* "FOO" 



**See Also:** 



