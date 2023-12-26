**find-class** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm>

**Syntax:**

<DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink> <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *errorp environment → class*

<!-- **(setf (find-class** <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *errorp environment<ClLinks  term={"t"}><b>*)</b></ClLinks> *new-class***)**  -->
**(setf (find-class** *symbol* &amp;optional *errorp environment***)** *new-class***)**

**Arguments and Values:**

<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>.

*errorp*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>.

<GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> – same as the **&amp;environment** argument to macro expansion functions and is used to distinguish between compile-time and run-time environments. The **&amp;environment** argument has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; the consequences are undefined if the **&amp;environment** argument is referred to outside the <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> of the macro expansion function.

<GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>—a *class object*, or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>.

**Description:**

Returns the *class object* named by the <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> in the <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>. If there is no such <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm>, <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink> is returned if *errorp* is <GlossaryTerm  term={"false"}><i>false</i></GlossaryTerm>; otherwise, if *errorp* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, an error is signaled.

The <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> associated with a particular <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> can be changed by using <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> with <DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink>; or, if the new <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> given to <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> is <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>, the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> association is removed (but the *class object* itself is not affected). The results are undefined if the user attempts to change or remove the <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> associated with a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> that is defined as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> in this standard. See Section 4.3.7 (Integrating Types and Classes).

When using <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink>, any *errorp* argument is *evaluated* for effect, but any <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> it returns are ignored; the *errorp parameter* is permitted primarily so that the <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameter</i></GlossaryTerm> can be used.

The <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> might be used to distinguish between a compile-time and a run-time environment.

**Exceptional Situations:**

If there is no such <GlossaryTerm  term={"class"}><i>class</i></GlossaryTerm> and *errorp* is <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm>, <DictionaryLink  term={"find-class"}><b>find-class</b></DictionaryLink> signals an error of <GlossaryTerm  term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink  term={"error"}><b>error</b></DictionaryLink>.

**See Also:**

<DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink>, Section 4.3.7 (Integrating Types and Classes)
