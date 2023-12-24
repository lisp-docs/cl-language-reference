*∗<ClLinks styled={true} term={"load-truename"}><b>*load-truename*</b></ClLinks>∗ Variable* 



**Value Type:** 



The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of **\*load-pathname\*** must always be a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"load-truename"}><b>\*load-truename\*</b></ClLinks> must always be a *physical pathname* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Initial Value:** 



<ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



During a call to <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>, **\*load-pathname\*** is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> to the <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> denoted by the the first argument to <ClLinks styled={true} term={"load"}><b>load</b></ClLinks>, merged against the defaults; that is, it is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> to (pathname (merge-pathnames *filespec*)). During the same time interval, <ClLinks styled={true} term={"load-truename"}><b>\*load-truename\*</b></ClLinks> is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> to the <ClLinks styled={true} term={"truename"}><i>truename</i></ClLinks> of the <ClLinks styled={true} term={"file"}><i>file</i></ClLinks> being loaded. 



At other times, the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of these <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



If a *break loop* is entered while <ClLinks styled={true} term={"load"}><b>load</b></ClLinks> is ongoing, it is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether these <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> retain the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> they had just prior to entering the *break loop* or whether they are <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



The consequences are unspecified if an attempt is made to <ClLinks styled={true} term={"assign"}><i>assign</i></ClLinks> or <ClLinks styled={true} term={"bind"}><i>bind</i></ClLinks> either of these <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks>. 



**Affected By:** 



The *file system*. 



**See Also:** 



<ClLinks styled={true} term={"load"}><b>load</b></ClLinks> 



*∗***compile-print***∗***,** 