 



If a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>, then it is either a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> or a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>. 



The <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> names a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> if there is a <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> of the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm> in the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm> (see <DictionaryLink  term={"define-symbol-macro"}><b>define-symbol-macro</b></DictionaryLink> and <DictionaryLink  term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>). If the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm>, its expansion function is obtained. The expansion function is a function of two arguments, and is invoked by calling the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm> with the expansion function as its 



first argument, the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> as its second argument, and an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm> (corresponding to the current <GlossaryTerm styled={true} term={"lexical environment"}><i>lexical environment</i></GlossaryTerm>) as its third argument. The <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, in turn, calls the expansion function with the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> as its first argument and the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> as its second argument. The <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of the expansion function, which is passed through by the <GlossaryTerm styled={true} term={"macroexpand hook"}><i>macroexpand hook</i></GlossaryTerm>, is a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. This resulting <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is processed in place of the original <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



If a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> is a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that is not a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm>, then it is the <GlossaryTerm  term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm>, and the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of that <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> is returned. There are three kinds of variables: <GlossaryTerm styled={true} term={"lexical variable"}><i>lexical variables</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"dynamic variable"}><i>dynamic variables</i></GlossaryTerm>,  







and <GlossaryTerm styled={true} term={"constant variable"}><i>constant variables</i></GlossaryTerm>. A <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> can store one <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm>. The main operations on a <GlossaryTerm  term={"variable"}><i>variable</i></GlossaryTerm> are to <GlossaryTerm  term={"read"}><i>read</i></GlossaryTerm> <sub>1</sub> and to <GlossaryTerm  term={"write"}><i>write</i></GlossaryTerm><sub>1</sub> its <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm>. 



An error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"unbound-variable"}><b>unbound-variable</b></DictionaryLink> should be signaled if an <GlossaryTerm styled={true} term={"unbound variable"}><i>unbound variable</i></GlossaryTerm> is referenced. 



<GlossaryTerm styled={true} term={"non-constant variable"}><i>Non-constant variables</i></GlossaryTerm> can be *assigned* by using <DictionaryLink  term={"setq"}><b>setq</b></DictionaryLink> or <GlossaryTerm  term={"bound"}><i>bound</i></GlossaryTerm> <sub>3</sub> by using <DictionaryLink  term={"let"}><b>let</b></DictionaryLink>. Figure 3–1 lists some <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm> that are applicable to assigning, binding, and defining <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm>. 



|<p>**boundp let progv** </p><p>**defconstant let\* psetq** </p><p>**defparameter makunbound set** </p><p>**defvar multiple-value-bind setq** </p><p>**lambda multiple-value-setq symbol-value**</p>|

| :- |





**Figure 3–1. Some Defined Names Applicable to Variables** 



The following is a description of each kind of variable. 



