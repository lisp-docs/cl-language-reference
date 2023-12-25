 



Except where explicitly allowed, the consequences are undefined if any of the following actions are performed on an *external symbol* of the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>: 



1\. <GlossaryTerm styled={true} term={"binding"}><i>Binding</i></GlossaryTerm> or altering its value (lexically or dynamically). (Some exceptions are noted below.) 2. Defining, undefining, or <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> it as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>. (Some exceptions are noted below.) 



3\. Defining, undefining, or <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> it as a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or *compiler macro*. (Some exceptions are noted below.) 



4\. Defining it as a *type specifier* (via <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink styled={true} term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink styled={true} term={"deftype"}><b>deftype</b></DictionaryLink>, <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink>). 5. Defining it as a structure (via <DictionaryLink styled={true} term={"defstruct"}><b>defstruct</b></DictionaryLink>). 



6\. Defining it as a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm> with a <DictionaryLink styled={true} term={"declaration"}><b>declaration</b></DictionaryLink> <GlossaryTerm styled={true} term={"proclamation"}><i>proclamation</i></GlossaryTerm>. 



7\. Defining it as a *symbol macro*. 



8\. Altering its *home package*. 







 



 



9\. Tracing it (via <DictionaryLink styled={true} term={"trace"}><b>trace</b></DictionaryLink>). 



10\. Declaring or proclaiming it <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> (via <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink>, or <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink>). 



11\. Declaring or proclaiming its <DictionaryLink styled={true} term={"type"}><b>type</b></DictionaryLink> or <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink> (via <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink styled={true} term={"declaim"}><b>declaim</b></DictionaryLink>, or <DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink>). (Some exceptions are noted below.) 



12\. Removing it from the COMMON-LISP <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



13\. Defining a *setf expander* for it (via <DictionaryLink styled={true} term={"defsetf"}><b>defsetf</b></DictionaryLink> or **define-setf-method**). 



14\. Defining, undefining, or binding its *setf function name*. 



15\. Defining it as a *method combination* type (via <DictionaryLink styled={true} term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>). 



16\. Using it as the class-name argument to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink>. 



17\. Binding it as a *catch tag*. 



18\. Binding it as a *restart name*. 



19\. Defining a <GlossaryTerm styled={true} term={"method"}><i>method</i></GlossaryTerm> for a *standardized generic function* which is <GlossaryTerm styled={true} term={"applicable"}><i>applicable</i></GlossaryTerm> when all of the <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> are *direct instances* of *standardized classes*. 



