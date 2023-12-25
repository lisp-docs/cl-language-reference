**copy-structure** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"copy-structure"}><b>copy-structure</b></ClLinks> *structure → copy* 







 



 



<ClLinks styled={true} term={"copy-structure"}><b>copy-structure</b></ClLinks> 



**Arguments and Values:** 



<ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks>—a <ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks>. 



<ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks>—a copy of the <ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks>. 



**Description:** 



Returns a <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks><sub>6</sub> of the <ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks>. 



Only the <ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks> itself is copied; not the values of the slots. 



**See Also:** 



the :copier option to <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks> 



**Notes:** 



The <ClLinks styled={true} term={"copy"}><i>copy</i></ClLinks> is the <ClLinks styled={true} term={"same"}><i>same</i></ClLinks> as the given <ClLinks styled={true} term={"structure"}><i>structure</i></ClLinks> under <ClLinks styled={true} term={"equalp"}><b>equalp</b></ClLinks>, but not under <ClLinks styled={true} term={"equal"}><b>equal</b></ClLinks>. 

