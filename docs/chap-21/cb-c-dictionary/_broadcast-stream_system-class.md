**broadcast-stream** *System Class* 



**Class Precedence List:** 



<ClLinks  term={"broadcast-stream"}><b>broadcast-stream</b></ClLinks>, <ClLinks  term={"stream"}><b>stream</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks> 



**Description:** 



A *broadcast stream* is an *output stream* which has associated with it a set of zero or more *output streams* such that any output sent to the *broadcast stream* gets passed on as output to each of the associated *output streams*. (If a *broadcast stream* has no *component streams*, then all output to the *broadcast stream* is discarded.) 



The set of operations that may be performed on a *broadcast stream* is the intersection of those for its associated *output streams*. 



Some output operations (*e.g.*, <ClLinks  term={"fresh-line"}><b>fresh-line</b></ClLinks>) return <ClLinks  term={"value"}><i>values</i></ClLinks> based on the state of the <ClLinks  term={"stream"}><i>stream</i></ClLinks> at the time of the operation. Since these <ClLinks  term={"value"}><i>values</i></ClLinks> might differ for each of the *component streams*, it is necessary to describe their return value specifically: 



*•* <ClLinks  term={"stream-element-type"}><b>stream-element-type</b></ClLinks> returns the value from the last component stream, or <ClLinks  term={"t"}><b>t</b></ClLinks> if there are no component streams. 



*•* <ClLinks  term={"fresh-line"}><b>fresh-line</b></ClLinks> returns the value from the last component stream, or <ClLinks  term={"nil"}><b>nil</b></ClLinks> if there are no component streams. 







 



 



*•* The functions <ClLinks  term={"file-length"}><b>file-length</b></ClLinks>, <ClLinks  term={"file-position"}><b>file-position</b></ClLinks>, <ClLinks  term={"file-string-length"}><b>file-string-length</b></ClLinks>, and <ClLinks  term={"stream-external-format"}><b>stream-external-format</b></ClLinks> return the value from the last component stream; if there are no component 



streams, <ClLinks  term={"file-length"}><b>file-length</b></ClLinks> and <ClLinks  term={"file-position"}><b>file-position</b></ClLinks> return 0, <ClLinks  term={"file-string-length"}><b>file-string-length</b></ClLinks> returns 1, and <ClLinks  term={"stream-external-format"}><b>stream-external-format</b></ClLinks> returns :default. 



*•* The functions <ClLinks  term={"streamp"}><b>streamp</b></ClLinks> and **output-stream-p** always return <ClLinks  term={"true"}><i>true</i></ClLinks> for *broadcast streams*. 



*•* The functions <ClLinks  term={"open-stream-p"}><b>open-stream-p</b></ClLinks> tests whether the *broadcast stream* is <ClLinks  term={"open"}><i>open</i></ClLinks><sub>2</sub>, not whether its component streams are <ClLinks  term={"open"}><i>open</i></ClLinks>. 



*•* The functions **input-stream-p** and *interactive-stream-p* return an <ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>, *generalized boolean* value. 



*•* For the input operations **clear-input listen**, **peek-char**, **read-byte**, **read-char-no-hang**, **read-char**, **read-line**, and <ClLinks  term={"unread-char"}><b>unread-char</b></ClLinks>, the consequences are undefined if the indicated operation is performed. However, an <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> is permitted to define such a behavior as an <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> extension. 



For any output operations not having their return values explicitly specified above or elsewhere in this document, it is defined that the <ClLinks  term={"value"}><i>values</i></ClLinks> returned by such an operation are the <ClLinks  term={"value"}><i>values</i></ClLinks> resulting from performing the operation on the last of its *component streams*; the <ClLinks  term={"value"}><i>values</i></ClLinks> resulting from performing the operation on all preceding <ClLinks  term={"stream"}><i>streams</i></ClLinks> are discarded. If there are no *component streams*, the value is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**See Also:** 



<ClLinks  term={"broadcast-stream-streams"}><b>broadcast-stream-streams</b></ClLinks>, <ClLinks  term={"make-broadcast-stream"}><b>make-broadcast-stream</b></ClLinks> 



