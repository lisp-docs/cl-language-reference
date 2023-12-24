**find-class** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks> <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *errorp environment → class* 



<!-- **(setf (find-class** <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *errorp environment<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-class***)**  -->
**(setf (find-class** *symbol* &amp;optional *errorp environment***)** *new-class***)** 


**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*errorp*—a *generalized boolean*. The default is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> – same as the **&amp;environment** argument to macro expansion functions and is used to distinguish between compile-time and run-time environments. The **&amp;environment** argument has *dynamic extent*; the consequences are undefined if the **&amp;environment** argument is referred to outside the *dynamic extent* of the macro expansion function. 



<ClLinks styled={true} term={"class"}><i>class</i></ClLinks>—a *class object*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 







 



 



**Description:** 



Returns the *class object* named by the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> in the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. If there is no such <ClLinks styled={true} term={"class"}><i>class</i></ClLinks>, <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> is returned if *errorp* is <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>; otherwise, if *errorp* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, an error is signaled. 



The <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> associated with a particular <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> can be changed by using <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> with <ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks>; or, if the new <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> given to <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> association is removed (but the *class object* itself is not affected). The results are undefined if the user attempts to change or remove the <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> associated 



with a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> that is defined as a *type specifier* in this standard. See Section 4.3.7 (Integrating Types and Classes). 



When using <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks>, any *errorp* argument is *evaluated* for effect, but any <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> it returns are ignored; the *errorp parameter* is permitted primarily so that the *environment parameter* can be used. 



The <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> might be used to distinguish between a compile-time and a run-time environment. 



**Exceptional Situations:** 



If there is no such <ClLinks styled={true} term={"class"}><i>class</i></ClLinks> and *errorp* is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, <ClLinks styled={true} term={"find-class"}><b>find-class</b></ClLinks> signals an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks>, Section 4.3.7 (Integrating Types and Classes) 



