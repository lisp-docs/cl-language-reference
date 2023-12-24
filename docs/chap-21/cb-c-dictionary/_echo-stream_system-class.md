**echo-stream** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"echo-stream"}><b>echo-stream</b></ClLinks>, <ClLinks styled={true} term={"stream"}><b>stream</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



An *echo stream* is a *bidirectional stream* that gets its input from an associated *input stream* and sends its output to an associated *output stream*. 



All input taken from the *input stream* is echoed to the *output stream*. Whether the input is echoed immediately after it is encountered, or after it has been read from the *input stream* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**See Also:** 



**echo-stream-input-stream**, **echo-stream-output-stream**, <ClLinks styled={true} term={"make-echo-stream"}><b>make-echo-stream</b></ClLinks> 



