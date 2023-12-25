 



The <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> controls whether the *Lisp printer* tries to produce notations such as escape characters and package prefixes. 



The <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> can be used to override many of the individual aspects controlled by the other *printer control variables* when program-readable output is especially important. 



One of the many effects of making the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> be <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> is that the *Lisp printer* behaves as if <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> were also <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. For notational convenience, we say that if the value of either <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> or <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, then *printer escaping* is “enabled”; and we say that if the values of both <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> and <ClLinks styled={true} term={"print-escape"}><b>\*print-escape\*</b></ClLinks> are <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, then *printer escaping* is “disabled”. 



