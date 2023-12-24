**print-not-readable** *Condition Type* 



**Class Precedence List:** 



<ClLinks styled={true} term={"print-not-readable"}><b>print-not-readable</b></ClLinks>, <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"serious-condition"}><b>serious-condition</b></ClLinks>, <ClLinks styled={true} term={"condition"}><b>condition</b></ClLinks>, <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> 



**Description:** 



The <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"print-not-readable"}><b>print-not-readable</b></ClLinks> consists of error conditions that occur during output while <ClLinks styled={true} term={"print-readably"}><b>\*print-readably\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, as a result of attempting to write a printed representation with the *Lisp printer* that would not be correctly read back with the *Lisp reader* . The object which could not be printed is initialized by the :object initialization argument to <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks>, and is *accessed* by the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"print-not-readable-object"}><b>print-not-readable-object</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"print-not-readable-object"}><b>print-not-readable-object</b></ClLinks> 



