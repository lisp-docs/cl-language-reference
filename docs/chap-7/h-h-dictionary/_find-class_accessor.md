**find-class** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks>

**Syntax:**

<ClLinks  term={"find-class"}><b>find-class</b></ClLinks> <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *errorp environment → class*

<!-- **(setf (find-class** <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *errorp environment<ClLinks  term={"t"}><b>*)</b></ClLinks> *new-class***)**  -->
**(setf (find-class** *symbol* &amp;optional *errorp environment***)** *new-class***)**

**Arguments and Values:**

<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>.

*errorp*—a <GlossaryTerm styled={true} term={"generalized boolean"}><i>generalized boolean</i></GlossaryTerm>. The default is <ClLinks  term={"true"}><i>true</i></ClLinks>.

<ClLinks  term={"environment"}><i>environment</i></ClLinks> – same as the **&amp;environment** argument to macro expansion functions and is used to distinguish between compile-time and run-time environments. The **&amp;environment** argument has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>; the consequences are undefined if the **&amp;environment** argument is referred to outside the <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> of the macro expansion function.

<ClLinks  term={"class"}><i>class</i></ClLinks>—a *class object*, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>.

**Description:**

Returns the *class object* named by the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks  term={"environment"}><i>environment</i></ClLinks>. If there is no such <ClLinks  term={"class"}><i>class</i></ClLinks>, <ClLinks  term={"nil"}><b>nil</b></ClLinks> is returned if *errorp* is <ClLinks  term={"false"}><i>false</i></ClLinks>; otherwise, if *errorp* is <ClLinks  term={"true"}><i>true</i></ClLinks>, an error is signaled.

The <ClLinks  term={"class"}><i>class</i></ClLinks> associated with a particular <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> can be changed by using <ClLinks  term={"setf"}><b>setf</b></ClLinks> with <ClLinks  term={"find-class"}><b>find-class</b></ClLinks>; or, if the new <ClLinks  term={"class"}><i>class</i></ClLinks> given to <ClLinks  term={"setf"}><b>setf</b></ClLinks> is <ClLinks  term={"nil"}><b>nil</b></ClLinks>, the <ClLinks  term={"class"}><i>class</i></ClLinks> association is removed (but the *class object* itself is not affected). The results are undefined if the user attempts to change or remove the <ClLinks  term={"class"}><i>class</i></ClLinks> associated with a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> that is defined as a <GlossaryTerm styled={true} term={"type specifier"}><i>type specifier</i></GlossaryTerm> in this standard. See Section 4.3.7 (Integrating Types and Classes).

When using <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"find-class"}><b>find-class</b></ClLinks>, any *errorp* argument is *evaluated* for effect, but any <ClLinks  term={"value"}><i>values</i></ClLinks> it returns are ignored; the *errorp parameter* is permitted primarily so that the <GlossaryTerm styled={true} term={"environment parameter"}><i>environment parameter</i></GlossaryTerm> can be used.

The <ClLinks  term={"environment"}><i>environment</i></ClLinks> might be used to distinguish between a compile-time and a run-time environment.

**Exceptional Situations:**

If there is no such <ClLinks  term={"class"}><i>class</i></ClLinks> and *errorp* is <ClLinks  term={"true"}><i>true</i></ClLinks>, <ClLinks  term={"find-class"}><b>find-class</b></ClLinks> signals an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"error"}><b>error</b></ClLinks>.

**See Also:**

<ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks>, Section 4.3.7 (Integrating Types and Classes)
