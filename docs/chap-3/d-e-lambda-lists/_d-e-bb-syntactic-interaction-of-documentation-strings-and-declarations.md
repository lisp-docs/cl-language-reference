 



In a number of situations, a *documentation string* can appear amidst a series of <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expressions</i></ClLinks> prior to a series of <ClLinks  term={"form"}><i>forms</i></ClLinks>. 



In that case, if a *string S* appears where a *documentation string* is permissible and is not followed by either a <ClLinks  term={"declare"}><b>declare</b></ClLinks> <ClLinks  term={"expression"}><i>expression</i></ClLinks> or a <ClLinks  term={"form"}><i>form</i></ClLinks> then *S* is taken to be a <ClLinks  term={"form"}><i>form</i></ClLinks>; otherwise, *S* is taken as a *documentation string*. The consequences are unspecified if more than one such *documentation string* is present.  







