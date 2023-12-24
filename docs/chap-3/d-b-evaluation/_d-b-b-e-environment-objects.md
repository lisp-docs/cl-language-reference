 



Some <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> make use of an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>, called an *environment object*, that represents the set of *lexical bindings* needed to perform semantic analysis on a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in a given *lexical environment*. The set of <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> in an *environment object* may be a subset of the <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> that would be needed to actually perform an <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks>; for example, <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> associated with *variable names* and *function names* in the corresponding *lexical environment* might not be available in an *environment object*. 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> and nature of an *environment object* is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. The <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> of *environment parameters* to *macro functions* are examples of *environment objects*. 



The <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> when used as an *environment object* denotes the *null lexical environment*; see Section 3.1.1.3.1 (The Null Lexical Environment). 



