**format** *Function* 



**Syntax:** 



**format** *destination control-string* &amp;rest *args ! result* 



**Arguments and Values:** 



*destination*—**nil**, **t**, a *stream*, or a *string* with a *fill pointer* . 



*control-string*—a *format control*. 



*args*—*format arguments* for *control-string*. 



*result*—if *destination* is *non-nil*, then **nil**; otherwise, a *string*. 



**Description:** 



**format** produces formatted output by outputting the characters of *control-string* and observing that a *tilde* introduces a directive. The character after the tilde, possibly preceded by prefix parameters and modifiers, specifies what kind of formatting is desired. Most directives use one or more elements of *args* to create their output. 



If *destination* is a *string*, a *stream*, or **t**, then the *result* is **nil**. Otherwise, the *result* is a *string* containing the ‘output.’ 



**format** is useful for producing nicely formatted text, producing good-looking messages, and so on. **format** can generate and return a *string* or output to *destination*. 



For details on how the *control-string* is interpreted, see Section 22.3 (Formatted Output). 



**Aected By:** 



**\*standard-output\***, **\*print-escape\***, **\*print-radix\***, **\*print-base\***, **\*print-circle\***, **\*print-pretty\***, **\*print-level\***, **\*print-length\***, **\*print-case\***, **\*print-gensym\***, **\*print-array\***. 



**Exceptional Situations:** 



If *destination* is a *string* with a *fill pointer* , the consequences are undefined if destructive modifications are performed directly on the *string* during the *dynamic extent* of the call. 



**See Also:** 



**write**, Section 13.1.10 (Documentation of Implementation-Defined Scripts) 







 



 



 



**22. Printer** 


  







 



 



