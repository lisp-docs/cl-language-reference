**echo-stream** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"echo-stream"}><b>echo-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



An *echo stream* is a *bidirectional stream* that gets its input from an associated *input stream* and sends its output to an associated *output stream*. 



All input taken from the *input stream* is echoed to the *output stream*. Whether the input is echoed immediately after it is encountered, or after it has been read from the *input stream* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**See Also:** 



**echo-stream-input-stream**, **echo-stream-output-stream**, <DictionaryLink styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></DictionaryLink> 



