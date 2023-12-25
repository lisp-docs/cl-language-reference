**find-class** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink> <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *errorp environment → class* 



**(setf (find-class** <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *errorp environment<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-class***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*errorp*—a *generalized boolean*. The default is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> – same as the **&amp;environment** argument to macro expansion functions and is used to distinguish between compile-time and run-time environments. The **&amp;environment** argument has *dynamic extent*; the consequences are undefined if the **&amp;environment** argument is referred to outside the *dynamic extent* of the macro expansion function. 



<GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>—a *class object*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 







 



 



**Description:** 



Returns the *class object* named by the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. If there is no such <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is returned if *errorp* is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>; otherwise, if *errorp* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, an error is signaled. 



The <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> associated with a particular <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> can be changed by using <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> with <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink>; or, if the new <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> given to <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> association is removed (but the *class object* itself is not affected). The results are undefined if the user attempts to change or remove the <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> associated 



with a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> that is defined as a *type specifier* in this standard. See Section 4.3.7 (Integrating Types and Classes). 



When using <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink>, any *errorp* argument is *evaluated* for effect, but any <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> it returns are ignored; the *errorp parameter* is permitted primarily so that the *environment parameter* can be used. 



The <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> might be used to distinguish between a compile-time and a run-time environment. 



**Exceptional Situations:** 



If there is no such <GlossaryTerm styled={true} term={"class"}><i>class</i></GlossaryTerm> and *errorp* is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink styled={true} term={"find-class"}><b>find-class</b></DictionaryLink> signals an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink>, Section 4.3.7 (Integrating Types and Classes) 



