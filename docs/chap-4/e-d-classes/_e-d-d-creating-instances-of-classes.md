 



The generic function <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> creates and returns a new <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> of a <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>. The object system provides several mechanisms for specifying how a new <ClLinks styled={true} term={"instance"}><i>instance</i></ClLinks> is to be initialized. For example, it is possible to specify the initial values for <ClLinks styled={true} term={"slot"}><i>slots</i></ClLinks> in newly created <ClLinks styled={true} term={"instance"}><i>instances</i></ClLinks> either by giving arguments to <ClLinks styled={true} term={"make-instance"}><b>make-instance</b></ClLinks> or by providing default initial values. Further initialization 



activities can be performed by <ClLinks styled={true} term={"method"}><i>methods</i></ClLinks> written for *generic functions* that are part of the initialization protocol. The complete initialization protocol is described in Section 7.1 (Object Creation and Initialization). 



