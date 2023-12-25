*∗<ClLinks  term={"compile-file-truename"}><b>*compile-file-truename*</b></ClLinks>∗ Variable* 



**Value Type:** 



The <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"compile-file-pathname"}><b>\*compile-file-pathname\*</b></ClLinks> must always be a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. The <ClLinks  term={"value"}><i>value</i></ClLinks> of <ClLinks  term={"compile-file-truename"}><b>\*compile-file-truename\*</b></ClLinks> must always be a *physical pathname* or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Initial Value:** 



<ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



During a call to <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, <ClLinks  term={"compile-file-pathname"}><b>\*compile-file-pathname\*</b></ClLinks> is <ClLinks  term={"bound"}><i>bound</i></ClLinks> to the <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> denoted by the first argument to <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks>, merged against the defaults; that is, it is <ClLinks  term={"bound"}><i>bound</i></ClLinks> to (pathname (merge-pathnames *input-file*)). During the same time interval, <ClLinks  term={"compile-file-truename"}><b>\*compile-file-truename\*</b></ClLinks> is <ClLinks  term={"bound"}><i>bound</i></ClLinks> to the <ClLinks  term={"truename"}><i>truename</i></ClLinks> of the <ClLinks  term={"file"}><i>file</i></ClLinks> being *compiled*. 



At other times, the <ClLinks  term={"value"}><i>value</i></ClLinks> of these <ClLinks  term={"variable"}><i>variables</i></ClLinks> is <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



If a *break loop* is entered while <ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> is ongoing, it is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether these <ClLinks  term={"variable"}><i>variables</i></ClLinks> retain the <ClLinks  term={"value"}><i>values</i></ClLinks> they had just prior to entering the *break loop* or whether they are <ClLinks  term={"bound"}><i>bound</i></ClLinks> to <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



The consequences are unspecified if an attempt is made to <ClLinks  term={"assign"}><i>assign</i></ClLinks> or <ClLinks  term={"bind"}><i>bind</i></ClLinks> either of these <ClLinks  term={"variable"}><i>variables</i></ClLinks>. 



**Affected By:** 



The *file system*. 



**See Also:** 



<ClLinks  term={"compile-file"}><b>compile-file</b></ClLinks> 







 



 



*∗***load-pathname***∗***,** 