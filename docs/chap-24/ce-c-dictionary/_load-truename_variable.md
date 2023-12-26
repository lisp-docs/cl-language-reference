*∗<DictionaryLink  term={"load-truename"}><b>*load-truename*</b></DictionaryLink>∗ Variable* 



**Value Type:** 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*load-pathname\*** must always be a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. The <ClLinks  term={"value"}><i>value</i></ClLinks> of <DictionaryLink  term={"load-truename"}><b>\*load-truename\*</b></DictionaryLink> must always be a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Initial Value:** 



<DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



During a call to <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>, **\*load-pathname\*** is <ClLinks  term={"bound"}><i>bound</i></ClLinks> to the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> denoted by the the first argument to <DictionaryLink  term={"load"}><b>load</b></DictionaryLink>, merged against the defaults; that is, it is <ClLinks  term={"bound"}><i>bound</i></ClLinks> to (pathname (merge-pathnames *filespec*)). During the same time interval, <DictionaryLink  term={"load-truename"}><b>\*load-truename\*</b></DictionaryLink> is <ClLinks  term={"bound"}><i>bound</i></ClLinks> to the <ClLinks  term={"truename"}><i>truename</i></ClLinks> of the <ClLinks  term={"file"}><i>file</i></ClLinks> being loaded. 



At other times, the <ClLinks  term={"value"}><i>value</i></ClLinks> of these <ClLinks  term={"variable"}><i>variables</i></ClLinks> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



If a <GlossaryTerm styled={true} term={"break loop"}><i>break loop</i></GlossaryTerm> is entered while <DictionaryLink  term={"load"}><b>load</b></DictionaryLink> is ongoing, it is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether these <ClLinks  term={"variable"}><i>variables</i></ClLinks> retain the <ClLinks  term={"value"}><i>values</i></ClLinks> they had just prior to entering the <GlossaryTerm styled={true} term={"break loop"}><i>break loop</i></GlossaryTerm> or whether they are <ClLinks  term={"bound"}><i>bound</i></ClLinks> to <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



The consequences are unspecified if an attempt is made to <ClLinks  term={"assign"}><i>assign</i></ClLinks> or <ClLinks  term={"bind"}><i>bind</i></ClLinks> either of these <ClLinks  term={"variable"}><i>variables</i></ClLinks>. 



**Affected By:** 



The <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 



**See Also:** 



<DictionaryLink  term={"load"}><b>load</b></DictionaryLink> 



*∗***compile-print***∗***,** 