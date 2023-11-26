**2.1.4.4 Macro Characters** 

When the *Lisp reader* encounters a *macro character* on an *input stream*, special parsing of subsequent *characters* on the *input stream* is performed. 

A *macro character* has an associated *function* called a *reader macro function* that implements its specialized parsing behavior. An association of this kind can be established or modified under control of a *conforming program* by using the *functions* **set-macro-character** and **set-dispatch-macro-character**. 

Upon encountering a *macro character* , the *Lisp reader* calls its *reader macro function*, which parses one specially formatted object from the *input stream*. The *function* either returns the parsed *object*, or else it returns no *values* to indicate that the characters scanned by the *function* are being ignored (*e.g.*, in the case of a comment). Examples of *macro characters* are *backquote*, *single-quote*, *left-parenthesis*, and *right-parenthesis*. 

A *macro character* is either *terminating* or *non-terminating*. The difference between *terminating* and *non-terminating macro characters* lies in what happens when such characters occur in the middle of a *token*. If a *non-terminating macro character* occurs in the middle of a *token*, the *function* associated with the *non-terminating macro character* is not called, and the *non terminating macro character* does not terminate the *token*’s name; it becomes part of the name as if the *macro character* were really a constituent character. A *terminating macro character* terminates any *token*, and its associated *reader macro function* is called no matter where the *character* appears. The only *non-terminating macro character* in *standard syntax* is *sharpsign*. 

If a *character* is a *dispatching macro character C*\<sub\>1\</sub\>, its *reader macro function* is a *function* supplied by the *implementation*. This *function* reads decimal *digit characters* until a non-*digit C*\<sub\>2\</sub\> is read. If any *digits* were read, they are converted into a corresponding *integer* infix parameter *P*; otherwise, the infix parameter *P* is **nil**. The terminating non-*digit C*\<sub\>2\</sub\> is a *character* (sometimes called a “sub-character” to emphasize its subordinate role in the dispatching) that is looked up in the dispatch table associated with the *dispatching macro character C*\<sub\>1\</sub\>. The *reader macro function* associated with the sub-character *C*\<sub\>2\</sub\> is invoked with three arguments: the *stream*, the sub-character *C*\<sub\>2\</sub\>, and the infix parameter *P*. For more information about dispatch characters, see the *function* **set-dispatch-macro-character**. 

For information about the *macro characters* that are available in *standard syntax* , see Section 2.4 (Standard Macro Characters).  



