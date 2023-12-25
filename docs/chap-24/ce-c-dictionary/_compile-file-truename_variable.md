*∗<DictionaryLink styled={true} term={"compile-file-truename"}><b>*compile-file-truename*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"compile-file-pathname"}><b>\*compile-file-pathname\*</b></DictionaryLink> must always be a <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"compile-file-truename"}><b>\*compile-file-truename\*</b></DictionaryLink> must always be a *physical pathname* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Initial Value:** 



<DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



During a call to <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, <DictionaryLink styled={true} term={"compile-file-pathname"}><b>\*compile-file-pathname\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"pathname"}><i>pathname</i></GlossaryTerm> denoted by the first argument to <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink>, merged against the defaults; that is, it is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> to (pathname (merge-pathnames *input-file*)). During the same time interval, <DictionaryLink styled={true} term={"compile-file-truename"}><b>\*compile-file-truename\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> to the <GlossaryTerm styled={true} term={"truename"}><i>truename</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"file"}><i>file</i></GlossaryTerm> being *compiled*. 



At other times, the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of these <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



If a *break loop* is entered while <DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> is ongoing, it is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether these <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> retain the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> they had just prior to entering the *break loop* or whether they are <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



The consequences are unspecified if an attempt is made to <GlossaryTerm styled={true} term={"assign"}><i>assign</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"bind"}><i>bind</i></GlossaryTerm> either of these <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm>. 



**Affected By:** 



The *file system*. 



**See Also:** 



<DictionaryLink styled={true} term={"compile-file"}><b>compile-file</b></DictionaryLink> 







 



 



*∗***load-pathname***∗***,** 