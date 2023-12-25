**storage-condition** *Condition Type* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"storage-condition"}><b>storage-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"serious-condition"}><b>serious-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"storage-condition"}><b>storage-condition</b></DictionaryLink> consists of serious conditions that relate to problems with memory management that are potentially due to <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> limits rather than semantic errors in *conforming programs*, and that typically warrant entry to the debugger if not handled. 



Depending on the details of the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>, these might include such problems as stack overflow, memory region overflow, and storage exhausted. 



**Notes:** 



While some Common Lisp operations might signal *storage-condition* because they are defined to create <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm>, it is unspecified whether operations that are not defined to create <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> create them anyway and so might also signal <DictionaryLink styled={true} term={"storage-condition"}><b>storage-condition</b></DictionaryLink>. Likewise, the evaluator itself might create <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> and so might signal <DictionaryLink styled={true} term={"storage-condition"}><b>storage-condition</b></DictionaryLink>. (The natural assumption might be that such <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> creation is naturally inefficient, but even that is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>.) In general, the entire question of how storage allocation is done is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm>, and so any operation might signal <DictionaryLink styled={true} term={"storage-condition"}><b>storage-condition</b></DictionaryLink> at any time. Because such a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is indicative of a limitation of the <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm> or of the *image* rather than an error in a <GlossaryTerm styled={true} term={"program"}><i>program</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"storage-condition"}><b>storage-condition</b></DictionaryLink> are not of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. 



