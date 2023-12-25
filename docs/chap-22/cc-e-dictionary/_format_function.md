**format** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> *destination control-string* &amp;rest *args ! result* 



**Arguments and Values:** 



*destination*—<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, or a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> with a *fill pointer* . 



*control-string*—a *format control*. 



*args*—*format arguments* for *control-string*. 



*result*—if *destination* is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, then <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>; otherwise, a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



**Description:** 



<DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> produces formatted output by outputting the characters of *control-string* and observing that a *tilde* introduces a directive. The character after the tilde, possibly preceded by prefix parameters and modifiers, specifies what kind of formatting is desired. Most directives use one or more elements of *args* to create their output. 



If *destination* is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, or <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>, then the *result* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Otherwise, the *result* is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> containing the ‘output.’ 



<DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> is useful for producing nicely formatted text, producing good-looking messages, and so on. <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink> can generate and return a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> or output to *destination*. 



For details on how the *control-string* is interpreted, see Section 22.3 (Formatted Output). 



**Aected By:** 



**\*standard-output\***, <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-radix"}><b>\*print-radix\*</b></DictionaryLink>, **\*print-base\***, <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink>, **\*print-level\***, <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-case"}><b>\*print-case\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-gensym"}><b>\*print-gensym\*</b></DictionaryLink>, <DictionaryLink styled={true} term={"print-array"}><b>\*print-array\*</b></DictionaryLink>. 



**Exceptional Situations:** 



If *destination* is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> with a *fill pointer* , the consequences are undefined if destructive modifications are performed directly on the <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> during the *dynamic extent* of the call. 



**See Also:** 



<DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, Section 13.1.10 (Documentation of Implementation-Defined Scripts) 







 



 



 



**22. Printer** 


  







 



 



