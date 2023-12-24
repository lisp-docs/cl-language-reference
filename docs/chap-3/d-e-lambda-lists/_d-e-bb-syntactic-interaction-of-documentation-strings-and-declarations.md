 



In a number of situations, a *documentation string* can appear amidst a series of <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks> prior to a series of <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. 



In that case, if a *string S* appears where a *documentation string* is permissible and is not followed by either a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> or a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> then *S* is taken to be a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; otherwise, *S* is taken as a *documentation string*. The consequences are unspecified if more than one such *documentation string* is present.  







