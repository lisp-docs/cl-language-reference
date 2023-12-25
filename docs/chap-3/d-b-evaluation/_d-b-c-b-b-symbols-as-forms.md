 



If a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, then it is either a *symbol macro* or a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> names a *symbol macro* if there is a <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> as a *symbol macro* in the current *lexical environment* (see <DictionaryLink styled={true} term={"define-symbol-macro"}><b>define-symbol-macro</b></DictionaryLink> and <DictionaryLink styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></DictionaryLink>). If the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is a *symbol macro*, its expansion function is obtained. The expansion function is a function of two arguments, and is invoked by calling the *macroexpand hook* with the expansion function as its 



first argument, the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> as its second argument, and an *environment object* (corresponding to the current *lexical environment*) as its third argument. The *macroexpand hook*, in turn, calls the expansion function with the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> as its first argument and the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> as its second argument. The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the expansion function, which is passed through by the *macroexpand hook*, is a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. This resulting <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is processed in place of the original <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



If a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is not a *symbol macro*, then it is the <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> of a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm>, and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of that <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> is returned. There are three kinds of variables: *lexical variables*, *dynamic variables*,  







and *constant variables*. A <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> can store one <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>. The main operations on a <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> are to <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> <sub>1</sub> and to <GlossaryTerm styled={true} term={"write"}><i>write</i></GlossaryTerm><sub>1</sub> its <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"unbound-variable"}><b>unbound-variable</b></DictionaryLink> should be signaled if an *unbound variable* is referenced. 



*Non-constant variables* can be *assigned* by using <DictionaryLink styled={true} term={"setq"}><b>setq</b></DictionaryLink> or <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> <sub>3</sub> by using <DictionaryLink styled={true} term={"let"}><b>let</b></DictionaryLink>. Figure 3–1 lists some *defined names* that are applicable to assigning, binding, and defining <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm>. 



|<p>**boundp let progv** </p><p>**defconstant let\* psetq** </p><p>**defparameter makunbound set** </p><p>**defvar multiple-value-bind setq** </p><p>**lambda multiple-value-setq symbol-value**</p>|

| :- |





**Figure 3–1. Some Defined Names Applicable to Variables** 



The following is a description of each kind of variable. 



