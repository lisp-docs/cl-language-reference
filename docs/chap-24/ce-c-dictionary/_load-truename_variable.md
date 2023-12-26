*∗<DictionaryLink  term={"load-truename"}><b>*load-truename*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of **\*load-pathname\*** must always be a <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink  term={"load-truename"}><b>\*load-truename\*</b></DictionaryLink> must always be a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Initial Value:** 



<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



During a call to <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>, **\*load-pathname\*** is <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> to the <GlossaryTerm  term={"pathname"}><i>pathname</i></GlossaryTerm> denoted by the the first argument to <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>, merged against the defaults; that is, it is <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> to (pathname (merge-pathnames *filespec*)). During the same time interval, <DictionaryLink  term={"load-truename"}><b>\*load-truename\*</b></DictionaryLink> is <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> to the <GlossaryTerm  term={"truename"}><i>truename</i></GlossaryTerm> of the <GlossaryTerm  term={"file"}><i>file</i></GlossaryTerm> being loaded. 



At other times, the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of these <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



If a <GlossaryTerm styled={true} term={"break loop"}><i>break loop</i></GlossaryTerm> is entered while <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> is ongoing, it is <GlossaryTerm  term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether these <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm> retain the <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> they had just prior to entering the <GlossaryTerm styled={true} term={"break loop"}><i>break loop</i></GlossaryTerm> or whether they are <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



The consequences are unspecified if an attempt is made to <GlossaryTerm  term={"assign"}><i>assign</i></GlossaryTerm> or <GlossaryTerm  term={"bind"}><i>bind</i></GlossaryTerm> either of these <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm>. 



**Affected By:** 



The <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"load"}><b>load</b></DictionaryLink> 



*∗***compile-print***∗***,** 