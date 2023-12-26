**broadcast-stream** <GlossaryTerm styled={true} term={"system class"}><i>System Class</i></GlossaryTerm> 



**Class Precedence List:** 



<DictionaryLink  term={"broadcast-stream"}><b>broadcast-stream</b></DictionaryLink>, <DictionaryLink  term={"stream"}><b>stream</b></DictionaryLink>, <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



A <GlossaryTerm styled={true} term={"broadcast stream"}><i>broadcast stream</i></GlossaryTerm> is an *output stream* which has associated with it a set of zero or more *output streams* such that any output sent to the <GlossaryTerm styled={true} term={"broadcast stream"}><i>broadcast stream</i></GlossaryTerm> gets passed on as output to each of the associated *output streams*. (If a <GlossaryTerm styled={true} term={"broadcast stream"}><i>broadcast stream</i></GlossaryTerm> has no *component streams*, then all output to the <GlossaryTerm styled={true} term={"broadcast stream"}><i>broadcast stream</i></GlossaryTerm> is discarded.) 



The set of operations that may be performed on a <GlossaryTerm styled={true} term={"broadcast stream"}><i>broadcast stream</i></GlossaryTerm> is the intersection of those for its associated *output streams*. 



Some output operations (*e.g.*, <DictionaryLink  term={"fresh-line"}><b>fresh-line</b></DictionaryLink>) return <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> based on the state of the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> at the time of the operation. Since these <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> might differ for each of the *component streams*, it is necessary to describe their return value specifically: 



*•* <DictionaryLink  term={"stream-element-type"}><b>stream-element-type</b></DictionaryLink> returns the value from the last component stream, or <DictionaryLink  term={"t"}><b>t</b></DictionaryLink> if there are no component streams. 



*•* <DictionaryLink  term={"fresh-line"}><b>fresh-line</b></DictionaryLink> returns the value from the last component stream, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> if there are no component streams. 







 



 



*•* The functions <DictionaryLink  term={"file-length"}><b>file-length</b></DictionaryLink>, <DictionaryLink  term={"file-position"}><b>file-position</b></DictionaryLink>, <DictionaryLink  term={"file-string-length"}><b>file-string-length</b></DictionaryLink>, and <DictionaryLink  term={"stream-external-format"}><b>stream-external-format</b></DictionaryLink> return the value from the last component stream; if there are no component 



streams, <DictionaryLink  term={"file-length"}><b>file-length</b></DictionaryLink> and <DictionaryLink  term={"file-position"}><b>file-position</b></DictionaryLink> return 0, <DictionaryLink  term={"file-string-length"}><b>file-string-length</b></DictionaryLink> returns 1, and <DictionaryLink  term={"stream-external-format"}><b>stream-external-format</b></DictionaryLink> returns :default. 



*•* The functions <DictionaryLink  term={"streamp"}><b>streamp</b></DictionaryLink> and **output-stream-p** always return <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> for <GlossaryTerm styled={true} term={"broadcast stream"}><i>broadcast streams</i></GlossaryTerm>. 



*•* The functions <DictionaryLink  term={"open-stream-p"}><b>open-stream-p</b></DictionaryLink> tests whether the <GlossaryTerm styled={true} term={"broadcast stream"}><i>broadcast stream</i></GlossaryTerm> is <GlossaryTerm  term={"open"}><i>open</i></GlossaryTerm><sub>2</sub>, not whether its component streams are <GlossaryTerm  term={"open"}><i>open</i></GlossaryTerm>. 



*•* The functions **input-stream-p** and *interactive-stream-p* return an <GlossaryTerm  term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm> value. 



*•* For the input operations **clear-input listen**, <DictionaryLink styled={true} term={"peek-char"}><b>peek-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-byte"}><b>read-byte</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-char-no-hang"}><b>read-char-no-hang</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-char"}><b>read-char</b></DictionaryLink>, <DictionaryLink styled={true} term={"read-line"}><b>read-line</b></DictionaryLink>, and <DictionaryLink  term={"unread-char"}><b>unread-char</b></DictionaryLink>, the consequences are undefined if the indicated operation is performed. However, an <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm> is permitted to define such a behavior as an <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> extension. 



For any output operations not having their return values explicitly specified above or elsewhere in this document, it is defined that the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> returned by such an operation are the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> resulting from performing the operation on the last of its *component streams*; the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> resulting from performing the operation on all preceding <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm> are discarded. If there are no *component streams*, the value is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"broadcast-stream-streams"}><b>broadcast-stream-streams</b></DictionaryLink>, <DictionaryLink  term={"make-broadcast-stream"}><b>make-broadcast-stream</b></DictionaryLink> 



