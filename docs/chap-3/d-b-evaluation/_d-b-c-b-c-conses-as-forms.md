 



A <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks> that is used as a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is called a *compound form*. 



If the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of that *compound form* is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, that <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of an <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> , and the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is either a *special form*, a *macro form*, or a *function form*, depending on the *function binding* of the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> in the current *lexical environment*. If the <ClLinks styled={true} term={"operator"}><i>operator</i></ClLinks> is neither a *special operator*  







nor a *macro name*, it is assumed to be a *function name* (even if there is no definition for such a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>). 



If the <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> of the *compound form* is not a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, then that <ClLinks styled={true} term={"car"}><i>car</i></ClLinks> must be a *lambda expression*, in which case the *compound form* is a *lambda form*. 



How a *compound form* is processed depends on whether it is classified as a *special form*, a *macro form*, a *function form*, or a *lambda form*. 



