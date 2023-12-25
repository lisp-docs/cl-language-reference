**broadcast-stream** *System Class* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"broadcast-stream"}><b>broadcast-stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A *broadcast stream* is an *output stream* which has associated with it a set of zero or more *output streams* such that any output sent to the *broadcast stream* gets passed on as output to each of the associated *output streams*. (If a *broadcast stream* has no *component streams*, then all output to the *broadcast stream* is discarded.) 



The set of operations that may be performed on a *broadcast stream* is the intersection of those for its associated *output streams*. 



Some output operations (*e.g.*, <DictionaryLink styled={true} term={"fresh-line"}><b>fresh-line</b></DictionaryLink>) return <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> based on the state of the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> at the time of the operation. Since these <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> might differ for each of the *component streams*, it is necessary to describe their return value specifically: 



*•* <DictionaryLink styled={true} term={"stream-element-type"}><b>stream-element-type</b></DictionaryLink> returns the value from the last component stream, or <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> if there are no component streams. 



*•* <DictionaryLink styled={true} term={"fresh-line"}><b>fresh-line</b></DictionaryLink> returns the value from the last component stream, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there are no component streams. 







 



 



*•* The functions <DictionaryLink styled={true} term={"file-length"}><b>file-length</b></DictionaryLink>, <DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink>, <DictionaryLink styled={true} term={"file-string-length"}><b>file-string-length</b></DictionaryLink>, and <DictionaryLink styled={true} term={"stream-external-format"}><b>stream-external-format</b></DictionaryLink> return the value from the last component stream; if there are no component 



streams, <DictionaryLink styled={true} term={"file-length"}><b>file-length</b></DictionaryLink> and <DictionaryLink styled={true} term={"file-position"}><b>file-position</b></DictionaryLink> return 0, <DictionaryLink styled={true} term={"file-string-length"}><b>file-string-length</b></DictionaryLink> returns 1, and <DictionaryLink styled={true} term={"stream-external-format"}><b>stream-external-format</b></DictionaryLink> returns :default. 



*•* The functions <DictionaryLink styled={true} term={"streamp"}><b>streamp</b></DictionaryLink> and **output-stream-p** always return <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> for *broadcast streams*. 



*•* The functions <DictionaryLink styled={true} term={"open-stream-p"}><b>open-stream-p</b></DictionaryLink> tests whether the *broadcast stream* is <GlossaryTerm styled={true} term={"open"}><i>open</i></GlossaryTerm><sub>2</sub>, not whether its component streams are <GlossaryTerm styled={true} term={"open"}><i>open</i></GlossaryTerm>. 



*•* The functions **input-stream-p** and *interactive-stream-p* return an <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>, *generalized boolean* value. 



*•* For the input operations **clear-input listen**, **peek-char**, **read-byte**, **read-char-no-hang**, **read-char**, **read-line**, and <DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink>, the consequences are undefined if the indicated operation is performed. However, an <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted to define such a behavior as an <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> extension. 



For any output operations not having their return values explicitly specified above or elsewhere in this document, it is defined that the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by such an operation are the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> resulting from performing the operation on the last of its *component streams*; the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> resulting from performing the operation on all preceding <GlossaryTerm styled={true} term={"stream"}><i>streams</i></GlossaryTerm> are discarded. If there are no *component streams*, the value is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink styled={true} term={"broadcast-stream-streams"}><b>broadcast-stream-streams</b></DictionaryLink>, <DictionaryLink styled={true} term={"make-broadcast-stream"}><b>make-broadcast-stream</b></DictionaryLink> 



