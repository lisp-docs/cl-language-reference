 



Any <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> preceded by #’ (<ClLinks styled={true} term={"sharpsign"}><i>sharpsign</i></ClLinks> followed by <ClLinks styled={true} term={"single-quote"}><i>single-quote</i></ClLinks>), as in #’<ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>, is treated by the *Lisp reader* as an abbreviation for and parsed identically to the <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> (function <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>). See <ClLinks styled={true} term={"function"}><b>function</b></ClLinks>. For example, 



(apply #’+ l) *≡* (apply (function +) l) 



