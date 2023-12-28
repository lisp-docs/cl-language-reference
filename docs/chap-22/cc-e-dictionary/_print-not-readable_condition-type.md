**print-not-readable** *Condition Type* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"print-not-readable"}><b>print-not-readable</b></DictionaryLink>, <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"serious-condition"}><b>serious-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-not-readable"}><b>print-not-readable</b></DictionaryLink> consists of error conditions that occur during output while <DictionaryLink styled={true} term={"print-readably"}><b>\*print-readably\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, as a result of attempting to write a printed representation with the *Lisp printer* that would not be correctly read back with the *Lisp reader* . The object which could not be printed is initialized by the :object initialization argument to <DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink>, and is *accessed* by the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> <DictionaryLink styled={true} term={"print-not-readable-object"}><b>print-not-readable-object</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"print-not-readable-object"}><b>print-not-readable-object</b></DictionaryLink> 



