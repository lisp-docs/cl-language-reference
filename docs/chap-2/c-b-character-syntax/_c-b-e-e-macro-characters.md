 



When the *Lisp reader* encounters a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> on an *input stream*, special parsing of subsequent <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm> on the *input stream* is performed. 



A <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> has an associated <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> called a <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> that implements its specialized parsing behavior. An association of this kind can be established or modified under control of a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> by using the <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink  term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink> and **set-dispatch-macro-character**. 



Upon encountering a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> , the *Lisp reader* calls its <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm>, which parses one specially formatted object from the *input stream*. The <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> either returns the parsed <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>, or else it returns no <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> to indicate that the characters scanned by the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> are being ignored (*e.g.*, in the case of a comment). Examples of <GlossaryTerm styled={true} term={"macro character"}><i>macro characters</i></GlossaryTerm> are <GlossaryTerm  term={"backquote"}><i>backquote</i></GlossaryTerm>, <GlossaryTerm  term={"single-quote"}><i>single-quote</i></GlossaryTerm>, <GlossaryTerm  term={"left-parenthesis"}><i>left-parenthesis</i></GlossaryTerm>, and <GlossaryTerm  term={"right-parenthesis"}><i>right-parenthesis</i></GlossaryTerm>. 



A <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> is either <GlossaryTerm  term={"terminating"}><i>terminating</i></GlossaryTerm> or <GlossaryTerm  term={"non-terminating"}><i>non-terminating</i></GlossaryTerm>. The difference between <GlossaryTerm  term={"terminating"}><i>terminating</i></GlossaryTerm> and *non-terminating macro characters* lies in what happens when such characters occur in the middle of a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>. If a *non-terminating macro character* occurs in the middle of a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>, the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> associated with the *non-terminating macro character* is not called, and the *non terminating macro character* does not terminate the <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>’s name; it becomes part of the name as if the <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> were really a constituent character. A *terminating macro character* terminates any <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>, and its associated <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> is called no matter where the <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> appears. The only *non-terminating macro character* in <GlossaryTerm styled={true} term={"standard syntax"}><i>standard syntax</i></GlossaryTerm> is <GlossaryTerm  term={"sharpsign"}><i>sharpsign</i></GlossaryTerm>. 



If a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> is a *dispatching macro character C*<sub>1</sub>, its <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> is a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> supplied by the <GlossaryTerm  term={"implementation"}><i>implementation</i></GlossaryTerm>. This <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> reads decimal *digit characters* until a non-*digit C*<sub>2</sub> is read. If any <GlossaryTerm  term={"digit"}><i>digits</i></GlossaryTerm> were read, they are converted into a corresponding *integer* infix parameter *P*; otherwise, the infix parameter *P* is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The terminating non-*digit C*<sub>2</sub> is a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> (sometimes called a “sub-character” to emphasize its subordinate role in the dispatching) that is looked up in the dispatch table associated with the *dispatching macro character C*<sub>1</sub>. The <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> associated with the sub-character *C*<sub>2</sub> is invoked with three arguments: the <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm>, the sub-character *C*<sub>2</sub>, and the infix parameter *P*. For more information about dispatch characters, see the <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> **set-dispatch-macro-character**. 



For information about the <GlossaryTerm styled={true} term={"macro character"}><i>macro characters</i></GlossaryTerm> that are available in <GlossaryTerm styled={true} term={"standard syntax"}><i>standard syntax</i></GlossaryTerm> , see Section 2.4 (Standard Macro Characters).  







