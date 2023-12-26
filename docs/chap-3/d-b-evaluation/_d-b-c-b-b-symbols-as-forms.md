 



If a <ClLinks  term={"form"}><i>form</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, then it is either a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> or a <ClLinks  term={"variable"}><i>variable</i></ClLinks>. 



The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> names a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> if there is a <ClLinks  term={"binding"}><i>binding</i></ClLinks> of the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> as a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> in the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> (see <DictionaryLink  term={"define-symbol-macro"}><b>define-symbol-macro</b></DictionaryLink> and <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>). If the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm>, its expansion function is obtained. The expansion function is a function of two arguments, and is invoked by calling the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm> with the expansion function as its 



first argument, the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> as its second argument, and an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> (corresponding to the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>) as its third argument. The <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, in turn, calls the expansion function with the <ClLinks  term={"form"}><i>form</i></ClLinks> as its first argument and the <ClLinks  term={"environment"}><i>environment</i></ClLinks> as its second argument. The <ClLinks  term={"value"}><i>value</i></ClLinks> of the expansion function, which is passed through by the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, is a <ClLinks  term={"form"}><i>form</i></ClLinks>. This resulting <ClLinks  term={"form"}><i>form</i></ClLinks> is processed in place of the original <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



If a <ClLinks  term={"form"}><i>form</i></ClLinks> is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is not a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm>, then it is the <ClLinks  term={"name"}><i>name</i></ClLinks> of a <ClLinks  term={"variable"}><i>variable</i></ClLinks>, and the <ClLinks  term={"value"}><i>value</i></ClLinks> of that <ClLinks  term={"variable"}><i>variable</i></ClLinks> is returned. There are three kinds of variables: <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variables</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm>,  







and <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm>. A <ClLinks  term={"variable"}><i>variable</i></ClLinks> can store one <ClLinks  term={"object"}><i>object</i></ClLinks>. The main operations on a <ClLinks  term={"variable"}><i>variable</i></ClLinks> are to <ClLinks  term={"read"}><i>read</i></ClLinks> <sub>1</sub> and to <ClLinks  term={"write"}><i>write</i></ClLinks><sub>1</sub> its <ClLinks  term={"value"}><i>value</i></ClLinks>. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <DictionaryLink  term={"unbound-variable"}><b>unbound-variable</b></DictionaryLink> should be signaled if an <GlossaryTerm styled={true} term={"unbound variable"}><i>unbound variable</i></GlossaryTerm> is referenced. 



<GlossaryTerm styled={true} term={"non-constant variable"}><i>Non-constant variables</i></GlossaryTerm> can be *assigned* by using <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> or <ClLinks  term={"bound"}><i>bound</i></ClLinks> <sub>3</sub> by using <DictionaryLink  term={"let"}><b>let</b></DictionaryLink>. Figure 3–1 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to assigning, binding, and defining <ClLinks  term={"variable"}><i>variables</i></ClLinks>. 



|<p>**boundp let progv** </p><p>**defconstant let\* psetq** </p><p>**defparameter makunbound set** </p><p>**defvar multiple-value-bind setq** </p><p>**lambda multiple-value-setq symbol-value**</p>|

| :- |





**Figure 3–1. Some Defined Names Applicable to Variables** 



The following is a description of each kind of variable. 



