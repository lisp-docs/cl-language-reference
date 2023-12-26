 



Any <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm> preceded by #’ (<GlossaryTerm  term={"sharpsign"}><i>sharpsign</i></GlossaryTerm> followed by <GlossaryTerm  term={"single-quote"}><i>single-quote</i></GlossaryTerm>), as in #’<GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>, is treated by the *Lisp reader* as an abbreviation for and parsed identically to the <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm> (function <GlossaryTerm  term={"expression"}><i>expression</i></GlossaryTerm>). See <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>. For example, 



(apply #’+ l) *≡* (apply (function +) l) 



