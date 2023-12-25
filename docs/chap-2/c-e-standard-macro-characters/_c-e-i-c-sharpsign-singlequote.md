 



Any <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> preceded by #’ (<GlossaryTerm styled={true} term={"sharpsign"}><i>sharpsign</i></GlossaryTerm> followed by <GlossaryTerm styled={true} term={"single-quote"}><i>single-quote</i></GlossaryTerm>), as in #’<GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>, is treated by the *Lisp reader* as an abbreviation for and parsed identically to the <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> (function <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>). See <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>. For example, 



(apply #’+ l) *≡* (apply (function +) l) 



