**copy-structure** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"copy-structure"}><b>copy-structure</b></DictionaryLink> *structure → copy* 







 



 



<DictionaryLink styled={true} term={"copy-structure"}><b>copy-structure</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"structure"}><i>structure</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"structure"}><i>structure</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm>—a copy of the <GlossaryTerm styled={true} term={"structure"}><i>structure</i></GlossaryTerm>. 



**Description:** 



Returns a <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm><sub>6</sub> of the <GlossaryTerm styled={true} term={"structure"}><i>structure</i></GlossaryTerm>. 



Only the <GlossaryTerm styled={true} term={"structure"}><i>structure</i></GlossaryTerm> itself is copied; not the values of the slots. 



**See Also:** 



the :copier option to <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink> 



**Notes:** 



The <GlossaryTerm styled={true} term={"copy"}><i>copy</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"same"}><i>same</i></GlossaryTerm> as the given <GlossaryTerm styled={true} term={"structure"}><i>structure</i></GlossaryTerm> under <DictionaryLink styled={true} term={"equalp"}><b>equalp</b></DictionaryLink>, but not under <DictionaryLink styled={true} term={"equal"}><b>equal</b></DictionaryLink>. 

