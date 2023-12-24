**compiler-macro-function** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></ClLinks> <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> &amp;optional *environment → function* 



<!-- **(setf (compiler-macro-function** <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> &amp;optional *environment<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-function***)**  -->
**(setf (compiler-macro-function** *name* &amp;optional *environment***)** *new-function***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"name"}><i>name</i></ClLinks>—a *function name*. 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>—an *environment object*. 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, *new-function*—a *compiler macro function*, or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



*Accesses* the *compiler macro function* named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>, if any, in the <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>.  







A value of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> denotes the absence of a *compiler macro function* named <ClLinks styled={true} term={"name"}><i>name</i></ClLinks>. 



**Exceptional Situations:** 



The consequences are undefined if <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks> in a use of <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"compiler-macro-function"}><b>compiler-macro-function</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"define-compiler-macro"}><b>define-compiler-macro</b></ClLinks>, Section 3.2.2.1 (Compiler Macros) 



