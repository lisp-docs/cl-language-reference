 



Except where explicitly allowed, the consequences are undefined if any of the following actions are performed on an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks>: 



1\. <ClLinks  term={"binding"}><i>Binding</i></ClLinks> or altering its value (lexically or dynamically). (Some exceptions are noted below.) 2. Defining, undefining, or <ClLinks  term={"binding"}><i>binding</i></ClLinks> it as a <ClLinks  term={"function"}><i>function</i></ClLinks>. (Some exceptions are noted below.) 



3\. Defining, undefining, or <ClLinks  term={"binding"}><i>binding</i></ClLinks> it as a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>. (Some exceptions are noted below.) 



4\. Defining it as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> (via <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks>, <ClLinks  term={"defclass"}><b>defclass</b></ClLinks>, <ClLinks  term={"deftype"}><b>deftype</b></ClLinks>, <ClLinks  term={"define-condition"}><b>define-condition</b></ClLinks>). 5. Defining it as a structure (via <ClLinks  term={"defstruct"}><b>defstruct</b></ClLinks>). 



6\. Defining it as a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks> with a <ClLinks  term={"declaration"}><b>declaration</b></ClLinks> <ClLinks  term={"proclamation"}><i>proclamation</i></ClLinks>. 



7\. Defining it as a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm>. 



8\. Altering its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. 







 



 



9\. Tracing it (via <ClLinks  term={"trace"}><b>trace</b></ClLinks>). 



10\. Declaring or proclaiming it <ClLinks  term={"special"}><b>special</b></ClLinks> (via <ClLinks  term={"declare"}><b>declare</b></ClLinks>, <ClLinks  term={"declaim"}><b>declaim</b></ClLinks>, or <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks>). 



11\. Declaring or proclaiming its <ClLinks  term={"type"}><b>type</b></ClLinks> or <ClLinks  term={"ftype"}><b>ftype</b></ClLinks> (via <ClLinks  term={"declare"}><b>declare</b></ClLinks>, <ClLinks  term={"declaim"}><b>declaim</b></ClLinks>, or <ClLinks  term={"proclaim"}><b>proclaim</b></ClLinks>). (Some exceptions are noted below.) 



12\. Removing it from the COMMON-LISP <ClLinks  term={"package"}><i>package</i></ClLinks>. 



13\. Defining a <GlossaryTerm styled={true} term={"setf expander"}><i>setf expander</i></GlossaryTerm> for it (via <ClLinks  term={"defsetf"}><b>defsetf</b></ClLinks> or **define-setf-method**). 



14\. Defining, undefining, or binding its <GlossaryTerm styled={true} term={"setf function name"}><i>setf function name</i></GlossaryTerm>. 



15\. Defining it as a <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm> type (via <ClLinks  term={"define-method-combination"}><b>define-method-combination</b></ClLinks>). 



16\. Using it as the class-name argument to <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"find-class"}><b>find-class</b></ClLinks>. 



17\. Binding it as a <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>. 



18\. Binding it as a *restart name*. 



19\. Defining a <ClLinks  term={"method"}><i>method</i></ClLinks> for a *standardized generic function* which is <ClLinks  term={"applicable"}><i>applicable</i></ClLinks> when all of the <ClLinks  term={"argument"}><i>arguments</i></ClLinks> are <GlossaryTerm styled={true} term={"direct instance"}><i>direct instances</i></GlossaryTerm> of *standardized classes*. 



