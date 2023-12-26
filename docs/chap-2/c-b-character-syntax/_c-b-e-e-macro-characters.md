 



When the *Lisp reader* encounters a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> on an *input stream*, special parsing of subsequent <ClLinks  term={"character"}><i>characters</i></ClLinks> on the *input stream* is performed. 



A <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> has an associated <ClLinks  term={"function"}><i>function</i></ClLinks> called a <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> that implements its specialized parsing behavior. An association of this kind can be established or modified under control of a <GlossaryTerm styled={true} term={"conforming program"}><i>conforming program</i></GlossaryTerm> by using the <ClLinks  term={"function"}><i>functions</i></ClLinks> <DictionaryLink  term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink> and **set-dispatch-macro-character**. 



Upon encountering a <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> , the *Lisp reader* calls its <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm>, which parses one specially formatted object from the *input stream*. The <ClLinks  term={"function"}><i>function</i></ClLinks> either returns the parsed <ClLinks  term={"object"}><i>object</i></ClLinks>, or else it returns no <ClLinks  term={"value"}><i>values</i></ClLinks> to indicate that the characters scanned by the <ClLinks  term={"function"}><i>function</i></ClLinks> are being ignored (*e.g.*, in the case of a comment). Examples of <GlossaryTerm styled={true} term={"macro character"}><i>macro characters</i></GlossaryTerm> are <ClLinks  term={"backquote"}><i>backquote</i></ClLinks>, <ClLinks  term={"single-quote"}><i>single-quote</i></ClLinks>, <ClLinks  term={"left-parenthesis"}><i>left-parenthesis</i></ClLinks>, and <ClLinks  term={"right-parenthesis"}><i>right-parenthesis</i></ClLinks>. 



A <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> is either <ClLinks  term={"terminating"}><i>terminating</i></ClLinks> or <ClLinks  term={"non-terminating"}><i>non-terminating</i></ClLinks>. The difference between <ClLinks  term={"terminating"}><i>terminating</i></ClLinks> and *non-terminating macro characters* lies in what happens when such characters occur in the middle of a <ClLinks  term={"token"}><i>token</i></ClLinks>. If a *non-terminating macro character* occurs in the middle of a <ClLinks  term={"token"}><i>token</i></ClLinks>, the <ClLinks  term={"function"}><i>function</i></ClLinks> associated with the *non-terminating macro character* is not called, and the *non terminating macro character* does not terminate the <ClLinks  term={"token"}><i>token</i></ClLinks>’s name; it becomes part of the name as if the <GlossaryTerm styled={true} term={"macro character"}><i>macro character</i></GlossaryTerm> were really a constituent character. A *terminating macro character* terminates any <ClLinks  term={"token"}><i>token</i></ClLinks>, and its associated <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> is called no matter where the <ClLinks  term={"character"}><i>character</i></ClLinks> appears. The only *non-terminating macro character* in <GlossaryTerm styled={true} term={"standard syntax"}><i>standard syntax</i></GlossaryTerm> is <ClLinks  term={"sharpsign"}><i>sharpsign</i></ClLinks>. 



If a <ClLinks  term={"character"}><i>character</i></ClLinks> is a *dispatching macro character C*<sub>1</sub>, its <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> is a <ClLinks  term={"function"}><i>function</i></ClLinks> supplied by the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. This <ClLinks  term={"function"}><i>function</i></ClLinks> reads decimal *digit characters* until a non-*digit C*<sub>2</sub> is read. If any <ClLinks  term={"digit"}><i>digits</i></ClLinks> were read, they are converted into a corresponding *integer* infix parameter *P*; otherwise, the infix parameter *P* is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The terminating non-*digit C*<sub>2</sub> is a <ClLinks  term={"character"}><i>character</i></ClLinks> (sometimes called a “sub-character” to emphasize its subordinate role in the dispatching) that is looked up in the dispatch table associated with the *dispatching macro character C*<sub>1</sub>. The <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm> associated with the sub-character *C*<sub>2</sub> is invoked with three arguments: the <ClLinks  term={"stream"}><i>stream</i></ClLinks>, the sub-character *C*<sub>2</sub>, and the infix parameter *P*. For more information about dispatch characters, see the <ClLinks  term={"function"}><i>function</i></ClLinks> **set-dispatch-macro-character**. 



For information about the <GlossaryTerm styled={true} term={"macro character"}><i>macro characters</i></GlossaryTerm> that are available in <GlossaryTerm styled={true} term={"standard syntax"}><i>standard syntax</i></GlossaryTerm> , see Section 2.4 (Standard Macro Characters).  







