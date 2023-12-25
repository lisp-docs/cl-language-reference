 



The object system provides a number of predefined *metaclasses*. These include the *classes* <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks>, <ClLinks  term={"built-in-class"}><b>built-in-class</b></ClLinks>, and <ClLinks  term={"structure-class"}><b>structure-class</b></ClLinks>: 



*•* The <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"standard-class"}><b>standard-class</b></ClLinks> is the default <ClLinks  term={"class"}><i>class</i></ClLinks> of *classes* defined by <ClLinks  term={"defclass"}><b>defclass</b></ClLinks>. 



*•* The <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"built-in-class"}><b>built-in-class</b></ClLinks> is the <ClLinks  term={"class"}><i>class</i></ClLinks> whose <ClLinks  term={"instance"}><i>instances</i></ClLinks> are *classes* that have special implementations with restricted capabilities. Any <ClLinks  term={"class"}><i>class</i></ClLinks> that corresponds to a standard <ClLinks  term={"type"}><i>type</i></ClLinks> might be an <ClLinks  term={"instance"}><i>instance</i></ClLinks> of <ClLinks  term={"built-in-class"}><b>built-in-class</b></ClLinks>. The predefined <ClLinks  term={"type"}><i>type</i></ClLinks> specifiers that are required to have corresponding *classes* are listed in Figure 4–8. It is <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether each of these *classes* is implemented as a *built-in class*. 



*•* All *classes* defined by means of <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks> are <ClLinks  term={"instance"}><i>instances</i></ClLinks> of the <ClLinks  term={"class"}><i>class</i></ClLinks> <ClLinks  term={"structure-class"}><b>structure-class</b></ClLinks>. 











