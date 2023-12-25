 



Some <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> make use of an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, called an *environment object*, that represents the set of *lexical bindings* needed to perform semantic analysis on a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> in a given *lexical environment*. The set of <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> in an *environment object* may be a subset of the <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> that would be needed to actually perform an <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm>; for example, <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> associated with *variable names* and *function names* in the corresponding *lexical environment* might not be available in an *environment object*. 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> and nature of an *environment object* is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> of *environment parameters* to *macro functions* are examples of *environment objects*. 



The <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> when used as an *environment object* denotes the *null lexical environment*; see Section 3.1.1.3.1 (The Null Lexical Environment). 



