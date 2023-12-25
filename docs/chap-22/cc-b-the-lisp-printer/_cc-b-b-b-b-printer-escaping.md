 



The <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> controls whether the *Lisp printer* tries to produce notations such as escape characters and package prefixes. 



The <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> can be used to override many of the individual aspects controlled by the other *printer control variables* when program-readable output is especially important. 



One of the many effects of making the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> be <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> is that the *Lisp printer* behaves as if <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> were also <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. For notational convenience, we say that if the value of either <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> or <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, then *printer escaping* is “enabled”; and we say that if the values of both <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> and <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> are <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, then *printer escaping* is “disabled”. 



