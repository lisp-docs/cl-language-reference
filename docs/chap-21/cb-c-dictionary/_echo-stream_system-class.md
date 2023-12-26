**echo-stream** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"echo-stream"}><b>echo-stream</b></DictionaryLink>, <DictionaryLink  term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



An <GlossaryTerm styled={true} term={"echo stream"}><i>echo stream</i></GlossaryTerm> is a *bidirectional stream* that gets its input from an associated *input stream* and sends its output to an associated *output stream*. 



All input taken from the *input stream* is echoed to the *output stream*. Whether the input is echoed immediately after it is encountered, or after it has been read from the *input stream* is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**See Also:** 



**echo-stream-input-stream**, **echo-stream-output-stream**, <DictionaryLink  term={"make-echo-stream"}><b>make-echo-stream</b></DictionaryLink> 



