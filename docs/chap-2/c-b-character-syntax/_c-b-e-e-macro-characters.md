 



When the *Lisp reader* encounters a *macro character* on an *input stream*, special parsing of subsequent <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> on the *input stream* is performed. 



A *macro character* has an associated <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> called a *reader macro function* that implements its specialized parsing behavior. An association of this kind can be established or modified under control of a *conforming program* by using the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> <DictionaryLink styled={true} term={"set-macro-character"}><b>set-macro-character</b></DictionaryLink> and **set-dispatch-macro-character**. 



Upon encountering a *macro character* , the *Lisp reader* calls its *reader macro function*, which parses one specially formatted object from the *input stream*. The <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> either returns the parsed <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, or else it returns no <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> to indicate that the characters scanned by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> are being ignored (*e.g.*, in the case of a comment). Examples of *macro characters* are <GlossaryTerm styled={true} term={"backquote"}><i>backquote</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"single-quote"}><i>single-quote</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"left-parenthesis"}><i>left-parenthesis</i></GlossaryTerm>, and <GlossaryTerm styled={true} term={"right-parenthesis"}><i>right-parenthesis</i></GlossaryTerm>. 



A *macro character* is either <GlossaryTerm styled={true} term={"terminating"}><i>terminating</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"non-terminating"}><i>non-terminating</i></GlossaryTerm>. The difference between <GlossaryTerm styled={true} term={"terminating"}><i>terminating</i></GlossaryTerm> and *non-terminating macro characters* lies in what happens when such characters occur in the middle of a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>. If a *non-terminating macro character* occurs in the middle of a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> associated with the *non-terminating macro character* is not called, and the *non terminating macro character* does not terminate the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>’s name; it becomes part of the name as if the *macro character* were really a constituent character. A *terminating macro character* terminates any <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>, and its associated *reader macro function* is called no matter where the <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> appears. The only *non-terminating macro character* in *standard syntax* is <GlossaryTerm styled={true} term={"sharpsign"}><i>sharpsign</i></GlossaryTerm>. 



If a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> is a *dispatching macro character C*<sub>1</sub>, its *reader macro function* is a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> supplied by the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. This <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> reads decimal *digit characters* until a non-*digit C*<sub>2</sub> is read. If any <GlossaryTerm styled={true} term={"digit"}><i>digits</i></GlossaryTerm> were read, they are converted into a corresponding *integer* infix parameter *P*; otherwise, the infix parameter *P* is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The terminating non-*digit C*<sub>2</sub> is a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> (sometimes called a “sub-character” to emphasize its subordinate role in the dispatching) that is looked up in the dispatch table associated with the *dispatching macro character C*<sub>1</sub>. The *reader macro function* associated with the sub-character *C*<sub>2</sub> is invoked with three arguments: the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, the sub-character *C*<sub>2</sub>, and the infix parameter *P*. For more information about dispatch characters, see the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> **set-dispatch-macro-character**. 



For information about the *macro characters* that are available in *standard syntax* , see Section 2.4 (Standard Macro Characters).  







