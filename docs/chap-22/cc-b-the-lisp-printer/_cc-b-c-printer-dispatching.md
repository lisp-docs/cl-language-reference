 



The *Lisp printer* makes its determination of how to print an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> as follows: 



If the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, printing is controlled by the *current pprint dispatch table*; see Section 22.2.1.4 (Pretty Print Dispatch Tables). 



Otherwise (if the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>), the object’s <DictionaryLink styled={true} term={"print-object"}><b>print-object</b></DictionaryLink> method is used; see Section 22.1.3 (Default Print-Object Methods). 



