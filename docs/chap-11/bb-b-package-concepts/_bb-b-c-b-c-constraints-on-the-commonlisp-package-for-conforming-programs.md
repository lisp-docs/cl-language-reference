 



Except where explicitly allowed, the consequences are undefined if any of the following actions are performed on an *external symbol* of the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>: 



1\. <ClLinks styled={true} term={"binding"}><i>Binding</i></ClLinks> or altering its value (lexically or dynamically). (Some exceptions are noted below.) 2. Defining, undefining, or <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> it as a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>. (Some exceptions are noted below.) 



3\. Defining, undefining, or <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> it as a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or *compiler macro*. (Some exceptions are noted below.) 



4\. Defining it as a *type specifier* (via <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks>, <ClLinks styled={true} term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks>, <ClLinks styled={true} term={"define-condition"}><b>define-condition</b></ClLinks>). 5. Defining it as a structure (via <ClLinks styled={true} term={"defstruct"}><b>defstruct</b></ClLinks>). 



6\. Defining it as a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks> with a <ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks> <ClLinks styled={true} term={"proclamation"}><i>proclamation</i></ClLinks>. 



7\. Defining it as a *symbol macro*. 



8\. Altering its *home package*. 







 



 



9\. Tracing it (via <ClLinks styled={true} term={"trace"}><b>trace</b></ClLinks>). 



10\. Declaring or proclaiming it <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> (via <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>, <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks>, or <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks>). 



11\. Declaring or proclaiming its <ClLinks styled={true} term={"type"}><b>type</b></ClLinks> or <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks> (via <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>, <ClLinks styled={true} term={"declaim"}><b>declaim</b></ClLinks>, or <ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks>). (Some exceptions are noted below.) 



12\. Removing it from the COMMON-LISP <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. 



13\. Defining a *setf expander* for it (via <ClLinks styled={true} term={"defsetf"}><b>defsetf</b></ClLinks> or **define-setf-method**). 



14\. Defining, undefining, or binding its *setf function name*. 



15\. Defining it as a *method combination* type (via <ClLinks styled={true} term={"define-method-combination"}><b>define-method-combination</b></ClLinks>). 



16\. Using it as the class-name argument to <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks>. 



17\. Binding it as a *catch tag*. 



18\. Binding it as a *restart name*. 



19\. Defining a <ClLinks styled={true} term={"method"}><i>method</i></ClLinks> for a *standardized generic function* which is <ClLinks styled={true} term={"applicable"}><i>applicable</i></ClLinks> when all of the <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> are *direct instances* of *standardized classes*. 



