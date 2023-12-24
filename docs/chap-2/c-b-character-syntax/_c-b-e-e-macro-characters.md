 



When the *Lisp reader* encounters a *macro character* on an *input stream*, special parsing of subsequent <ClLinks styled={true} term={"character"}><i>characters</i></ClLinks> on the *input stream* is performed. 



A *macro character* has an associated <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> called a *reader macro function* that implements its specialized parsing behavior. An association of this kind can be established or modified under control of a *conforming program* by using the <ClLinks styled={true} term={"function"}><i>functions</i></ClLinks> <ClLinks styled={true} term={"set-macro-character"}><b>set-macro-character</b></ClLinks> and **set-dispatch-macro-character**. 



Upon encountering a *macro character* , the *Lisp reader* calls its *reader macro function*, which parses one specially formatted object from the *input stream*. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> either returns the parsed <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, or else it returns no <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> to indicate that the characters scanned by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> are being ignored (*e.g.*, in the case of a comment). Examples of *macro characters* are <ClLinks styled={true} term={"backquote"}><i>backquote</i></ClLinks>, <ClLinks styled={true} term={"single-quote"}><i>single-quote</i></ClLinks>, <ClLinks styled={true} term={"left-parenthesis"}><i>left-parenthesis</i></ClLinks>, and <ClLinks styled={true} term={"right-parenthesis"}><i>right-parenthesis</i></ClLinks>. 



A *macro character* is either <ClLinks styled={true} term={"terminating"}><i>terminating</i></ClLinks> or <ClLinks styled={true} term={"non-terminating"}><i>non-terminating</i></ClLinks>. The difference between <ClLinks styled={true} term={"terminating"}><i>terminating</i></ClLinks> and *non-terminating macro characters* lies in what happens when such characters occur in the middle of a <ClLinks styled={true} term={"token"}><i>token</i></ClLinks>. If a *non-terminating macro character* occurs in the middle of a <ClLinks styled={true} term={"token"}><i>token</i></ClLinks>, the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> associated with the *non-terminating macro character* is not called, and the *non terminating macro character* does not terminate the <ClLinks styled={true} term={"token"}><i>token</i></ClLinks>’s name; it becomes part of the name as if the *macro character* were really a constituent character. A *terminating macro character* terminates any <ClLinks styled={true} term={"token"}><i>token</i></ClLinks>, and its associated *reader macro function* is called no matter where the <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> appears. The only *non-terminating macro character* in *standard syntax* is <ClLinks styled={true} term={"sharpsign"}><i>sharpsign</i></ClLinks>. 



If a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> is a *dispatching macro character C*<sub>1</sub>, its *reader macro function* is a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> supplied by the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. This <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> reads decimal *digit characters* until a non-*digit C*<sub>2</sub> is read. If any <ClLinks styled={true} term={"digit"}><i>digits</i></ClLinks> were read, they are converted into a corresponding *integer* infix parameter *P*; otherwise, the infix parameter *P* is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The terminating non-*digit C*<sub>2</sub> is a <ClLinks styled={true} term={"character"}><i>character</i></ClLinks> (sometimes called a “sub-character” to emphasize its subordinate role in the dispatching) that is looked up in the dispatch table associated with the *dispatching macro character C*<sub>1</sub>. The *reader macro function* associated with the sub-character *C*<sub>2</sub> is invoked with three arguments: the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>, the sub-character *C*<sub>2</sub>, and the infix parameter *P*. For more information about dispatch characters, see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> **set-dispatch-macro-character**. 



For information about the *macro characters* that are available in *standard syntax* , see Section 2.4 (Standard Macro Characters).  







