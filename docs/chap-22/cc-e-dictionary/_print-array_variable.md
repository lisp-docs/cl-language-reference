*∗<ClLinks styled={true} term={"print-array"}><b>*print-array*</b></ClLinks>∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



<ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks>. 



**Description:** 



Controls the format in which <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> are printed. If it is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>, the contents of <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> other than <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks> are never printed. Instead, <ClLinks styled={true} term={"array"}><i>arrays</i></ClLinks> are printed in a concise form using #&lt; that gives enough information for the user to be able to identify the <ClLinks styled={true} term={"array"}><i>array</i></ClLinks>, but does not include the entire <ClLinks styled={true} term={"array"}><i>array</i></ClLinks> contents. If it is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, non-*string arrays* are printed using #(...), #\*, or #nA syntax. 



**Affected By:** 



The <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>. 







 



 



**See Also:** 



Section 2.4.8.3 (Sharpsign Left-Parenthesis), Section 2.4.8.20 (Sharpsign Less-Than-Sign) *∗***print-base***∗***,** 