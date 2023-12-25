**format** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"format"}><b>format</b></ClLinks> *destination control-string* &amp;rest *args ! result* 



**Arguments and Values:** 



*destination*—<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, or a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> with a *fill pointer* . 



*control-string*—a *format control*. 



*args*—*format arguments* for *control-string*. 



*result*—if *destination* is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, then <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>; otherwise, a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



**Description:** 



<ClLinks styled={true} term={"format"}><b>format</b></ClLinks> produces formatted output by outputting the characters of *control-string* and observing that a *tilde* introduces a directive. The character after the tilde, possibly preceded by prefix parameters and modifiers, specifies what kind of formatting is desired. Most directives use one or more elements of *args* to create their output. 



If *destination* is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>, a <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, or <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>, then the *result* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. Otherwise, the *result* is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> containing the ‘output.’ 



<ClLinks styled={true} term={"format"}><b>format</b></ClLinks> is useful for producing nicely formatted text, producing good-looking messages, and so on. <ClLinks styled={true} term={"format"}><b>format</b></ClLinks> can generate and return a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> or output to *destination*. 



For details on how the *control-string* is interpreted, see Section 22.3 (Formatted Output). 



**Aected By:** 



**\*standard-output\***, <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks>, <ClLinks styled={true} term={"print-radix"}><b>\*print-radix\*</b></ClLinks>, **\*print-base\***, <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks>, <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks>, **\*print-level\***, <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks>, <ClLinks styled={true} term={"print-case"}><b>\*print-case\*</b></ClLinks>, <ClLinks styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></ClLinks>, <ClLinks styled={true} term={"print-array"}><b>\*print-array\*</b></ClLinks>. 



**Exceptional Situations:** 



If *destination* is a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> with a *fill pointer* , the consequences are undefined if destructive modifications are performed directly on the <ClLinks styled={true} term={"string"}><i>string</i></ClLinks> during the *dynamic extent* of the call. 



**See Also:** 



<ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, Section 13.1.10 (Documentation of Implementation-Defined Scripts) 







 



 



 



**22. Printer** 


  







 



 



