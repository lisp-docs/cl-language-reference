 



Except where explicitly allowed, the consequences are undefined if any of the following actions are performed on an <GlossaryTerm styled={true} term={"external symbol"}><i>external symbol</i></GlossaryTerm> of the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>: 



1\. <GlossaryTerm  term={"binding"}><i>Binding</i></GlossaryTerm> or altering its value (lexically or dynamically). (Some exceptions are noted below.) 2. Defining, undefining, or <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> it as a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>. (Some exceptions are noted below.) 



3\. Defining, undefining, or <GlossaryTerm  term={"binding"}><i>binding</i></GlossaryTerm> it as a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"compiler macro"}><i>compiler macro</i></GlossaryTerm>. (Some exceptions are noted below.) 



4\. Defining it as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> (via <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink>, <DictionaryLink  term={"defclass"}><b>defclass</b></DictionaryLink>, <DictionaryLink  term={"deftype"}><b>deftype</b></DictionaryLink>, <DictionaryLink  term={"define-condition"}><b>define-condition</b></DictionaryLink>). 5. Defining it as a structure (via <DictionaryLink  term={"defstruct"}><b>defstruct</b></DictionaryLink>). 



6\. Defining it as a <GlossaryTerm  term={"declaration"}><i>declaration</i></GlossaryTerm> with a <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink> <GlossaryTerm  term={"proclamation"}><i>proclamation</i></GlossaryTerm>. 



7\. Defining it as a <GlossaryTerm styled={true} term={"symbol macro"}><i>symbol macro</i></GlossaryTerm>. 



8\. Altering its <GlossaryTerm styled={true} term={"home package"}><i>home package</i></GlossaryTerm>. 







 



 



9\. Tracing it (via <DictionaryLink  term={"trace"}><b>trace</b></DictionaryLink>). 



10\. Declaring or proclaiming it <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> (via <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, or <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink>). 



11\. Declaring or proclaiming its <DictionaryLink  term={"type"}><b>type</b></DictionaryLink> or <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink> (via <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>, <DictionaryLink  term={"declaim"}><b>declaim</b></DictionaryLink>, or <DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink>). (Some exceptions are noted below.) 



12\. Removing it from the COMMON-LISP <GlossaryTerm  term={"package"}><i>package</i></GlossaryTerm>. 



13\. Defining a <GlossaryTerm styled={true} term={"setf expander"}><i>setf expander</i></GlossaryTerm> for it (via <DictionaryLink  term={"defsetf"}><b>defsetf</b></DictionaryLink> or **define-setf-method**). 



14\. Defining, undefining, or binding its <GlossaryTerm styled={true} term={"setf function name"}><i>setf function name</i></GlossaryTerm>. 



15\. Defining it as a <GlossaryTerm styled={true} term={"method combination"}><i>method combination</i></GlossaryTerm> type (via <DictionaryLink  term={"define-method-combination"}><b>define-method-combination</b></DictionaryLink>). 



16\. Using it as the class-name argument to <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink>. 



17\. Binding it as a <GlossaryTerm styled={true} term={"catch tag"}><i>catch tag</i></GlossaryTerm>. 



18\. Binding it as a *restart name*. 



19\. Defining a <GlossaryTerm  term={"method"}><i>method</i></GlossaryTerm> for a *standardized generic function* which is <GlossaryTerm  term={"applicable"}><i>applicable</i></GlossaryTerm> when all of the <GlossaryTerm  term={"argument"}><i>arguments</i></GlossaryTerm> are <GlossaryTerm styled={true} term={"direct instance"}><i>direct instances</i></GlossaryTerm> of *standardized classes*. 



