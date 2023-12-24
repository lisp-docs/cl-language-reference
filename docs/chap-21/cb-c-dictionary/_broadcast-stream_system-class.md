**broadcast-stream** *System Class* 



**Class Precedence List:** 



<ClLinks styled={true} term={"broadcast-stream"}><b>broadcast-stream</b></ClLinks>, <ClLinks styled={true} term={"stream"}><b>stream</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



A *broadcast stream* is an *output stream* which has associated with it a set of zero or more *output streams* such that any output sent to the *broadcast stream* gets passed on as output to each of the associated *output streams*. (If a *broadcast stream* has no *component streams*, then all output to the *broadcast stream* is discarded.) 



The set of operations that may be performed on a *broadcast stream* is the intersection of those for its associated *output streams*. 



Some output operations (*e.g.*, <ClLinks styled={true} term={"fresh-line"}><b>fresh-line</b></ClLinks>) return <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> based on the state of the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> at the time of the operation. Since these <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> might differ for each of the *component streams*, it is necessary to describe their return value specifically: 



*•* <ClLinks styled={true} term={"stream-element-type"}><b>stream-element-type</b></ClLinks> returns the value from the last component stream, or <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> if there are no component streams. 



*•* <ClLinks styled={true} term={"fresh-line"}><b>fresh-line</b></ClLinks> returns the value from the last component stream, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there are no component streams. 







 



 



*•* The functions <ClLinks styled={true} term={"file-length"}><b>file-length</b></ClLinks>, <ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks>, <ClLinks styled={true} term={"file-string-length"}><b>file-string-length</b></ClLinks>, and <ClLinks styled={true} term={"stream-external-format"}><b>stream-external-format</b></ClLinks> return the value from the last component stream; if there are no component 



streams, <ClLinks styled={true} term={"file-length"}><b>file-length</b></ClLinks> and <ClLinks styled={true} term={"file-position"}><b>file-position</b></ClLinks> return 0, <ClLinks styled={true} term={"file-string-length"}><b>file-string-length</b></ClLinks> returns 1, and <ClLinks styled={true} term={"stream-external-format"}><b>stream-external-format</b></ClLinks> returns :default. 



*•* The functions <ClLinks styled={true} term={"streamp"}><b>streamp</b></ClLinks> and **output-stream-p** always return <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> for *broadcast streams*. 



*•* The functions <ClLinks styled={true} term={"open-stream-p"}><b>open-stream-p</b></ClLinks> tests whether the *broadcast stream* is <ClLinks styled={true} term={"open"}><i>open</i></ClLinks><sub>2</sub>, not whether its component streams are <ClLinks styled={true} term={"open"}><i>open</i></ClLinks>. 



*•* The functions **input-stream-p** and *interactive-stream-p* return an <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>, *generalized boolean* value. 



*•* For the input operations **clear-input listen**, **peek-char**, **read-byte**, **read-char-no-hang**, **read-char**, **read-line**, and <ClLinks styled={true} term={"unread-char"}><b>unread-char</b></ClLinks>, the consequences are undefined if the indicated operation is performed. However, an <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks> is permitted to define such a behavior as an <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> extension. 



For any output operations not having their return values explicitly specified above or elsewhere in this document, it is defined that the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by such an operation are the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> resulting from performing the operation on the last of its *component streams*; the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> resulting from performing the operation on all preceding <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks> are discarded. If there are no *component streams*, the value is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"broadcast-stream-streams"}><b>broadcast-stream-streams</b></ClLinks>, <ClLinks styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></ClLinks> 



