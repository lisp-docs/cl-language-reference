 



If a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>, then it is either a *symbol macro* or a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>. 



The <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> names a *symbol macro* if there is a <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> as a *symbol macro* in the current *lexical environment* (see <ClLinks styled={true} term={"define-symbol-macro"}><b>define-symbol-macro</b></ClLinks> and <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks>). If the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> is a *symbol macro*, its expansion function is obtained. The expansion function is a function of two arguments, and is invoked by calling the *macroexpand hook* with the expansion function as its 



first argument, the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> as its second argument, and an *environment object* (corresponding to the current *lexical environment*) as its third argument. The *macroexpand hook*, in turn, calls the expansion function with the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> as its first argument and the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> as its second argument. The <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the expansion function, which is passed through by the *macroexpand hook*, is a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. This resulting <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is processed in place of the original <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



If a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is not a *symbol macro*, then it is the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks>, and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of that <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> is returned. There are three kinds of variables: *lexical variables*, *dynamic variables*,  







and *constant variables*. A <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> can store one <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>. The main operations on a <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> are to <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> <sub>1</sub> and to <ClLinks styled={true} term={"write"}><i>write</i></ClLinks><sub>1</sub> its <ClLinks styled={true} term={"value"}><i>value</i></ClLinks>. 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"unbound-variable"}><b>unbound-variable</b></ClLinks> should be signaled if an *unbound variable* is referenced. 



*Non-constant variables* can be *assigned* by using <ClLinks styled={true} term={"setq"}><b>setq</b></ClLinks> or <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> <sub>3</sub> by using <ClLinks styled={true} term={"let"}><b>let</b></ClLinks>. Figure 3–1 lists some *defined names* that are applicable to assigning, binding, and defining <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks>. 



|<p>**boundp let progv** </p><p>**defconstant let\* psetq** </p><p>**defparameter makunbound set** </p><p>**defvar multiple-value-bind setq** </p><p>**lambda multiple-value-setq symbol-value**</p>|

| :- |





**Figure 3–1. Some Defined Names Applicable to Variables** 



The following is a description of each kind of variable. 



