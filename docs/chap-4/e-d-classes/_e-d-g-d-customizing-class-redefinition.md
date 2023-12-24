 



<ClLinks styled={true} term={"method"}><i>Methods</i></ClLinks> for **update-instance-for-redefined-class** may be defined to specify actions to be taken when an <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> is updated. If only *after methods* for **update-instance-for-redefined-class** are defined, they will be run after the system-supplied primary <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for initialization and therefore will not interfere with the default behavior of **update-instance-for-redefined-class**. Because no initialization arguments are passed to **update-instance-for-redefined-class** when it is called by the system, the *initialization forms* for <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> that are filled by *before methods* for **update-instance-for-redefined-class** will not be evaluated by <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks>. 



<ClLinks styled={true} term={"method"}><i>Methods</i></ClLinks> for <ClLinks styled={true} term={"shared-initialize"}><b>shared-initialize</b></ClLinks> may be defined to customize <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> redefinition. For more information, see Section 7.1.5 (Shared-Initialize). 



