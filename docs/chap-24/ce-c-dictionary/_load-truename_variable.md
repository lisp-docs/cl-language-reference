*∗<ClLinks  term={"load-truename"}><b>*load-truename*</b></ClLinks>∗ Variable* 



**Value Type:** 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of **\*load-pathname\*** must always be a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. The <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"load-truename"}><b>\*load-truename\*</b></ClLinks> must always be a <GlossaryTerm styled={true} term={"physical pathname"}><i>physical pathname</i></GlossaryTerm> or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Initial Value:** 



<ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



During a call to <ClLinks  term={"load"}><b>load</b></ClLinks>, **\*load-pathname\*** is <ClLinks  term={"bound"}><i>bound</i></ClLinks> to the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> denoted by the the first argument to <ClLinks  term={"load"}><b>load</b></ClLinks>, merged against the defaults; that is, it is <ClLinks  term={"bound"}><i>bound</i></ClLinks> to (pathname (merge-pathnames *filespec*)). During the same time interval, <ClLinks  term={"load-truename"}><b>\*load-truename\*</b></ClLinks> is <ClLinks  term={"bound"}><i>bound</i></ClLinks> to the <ClLinks  term={"truename"}><i>truename</i></ClLinks> of the <ClLinks  term={"file"}><i>file</i></ClLinks> being loaded. 



At other times, the <ClLinks  term={"value"}><i>value</i></ClLinks> of these <ClLinks  term={"variable"}><i>variables</i></ClLinks> is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



If a <GlossaryTerm styled={true} term={"break loop"}><i>break loop</i></GlossaryTerm> is entered while <ClLinks  term={"load"}><b>load</b></ClLinks> is ongoing, it is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether these <ClLinks  term={"variable"}><i>variables</i></ClLinks> retain the <ClLinks  term={"value"}><i>values</i></ClLinks> they had just prior to entering the <GlossaryTerm styled={true} term={"break loop"}><i>break loop</i></GlossaryTerm> or whether they are <ClLinks  term={"bound"}><i>bound</i></ClLinks> to <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



The consequences are unspecified if an attempt is made to <ClLinks  term={"assign"}><i>assign</i></ClLinks> or <ClLinks  term={"bind"}><i>bind</i></ClLinks> either of these <ClLinks  term={"variable"}><i>variables</i></ClLinks>. 



**Affected By:** 



The <GlossaryTerm styled={true} term={"file system"}><i>file system</i></GlossaryTerm>. 



**See Also:** 



<ClLinks  term={"load"}><b>load</b></ClLinks> 



*∗***compile-print***∗***,** 