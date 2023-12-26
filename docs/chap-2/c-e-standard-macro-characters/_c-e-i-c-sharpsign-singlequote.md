 



Any <ClLinks  term={"expression"}><i>expression</i></ClLinks> preceded by #’ (<ClLinks  term={"sharpsign"}><i>sharpsign</i></ClLinks> followed by <ClLinks  term={"single-quote"}><i>single-quote</i></ClLinks>), as in #’<ClLinks  term={"expression"}><i>expression</i></ClLinks>, is treated by the *Lisp reader* as an abbreviation for and parsed identically to the <ClLinks  term={"expression"}><i>expression</i></ClLinks> (function <ClLinks  term={"expression"}><i>expression</i></ClLinks>). See <DictionaryLink  term={"function"}><b>function</b></DictionaryLink>. For example, 



(apply #’+ l) *≡* (apply (function +) l) 



