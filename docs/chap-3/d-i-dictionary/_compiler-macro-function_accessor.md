**compiler-macro-function** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"compiler-macro-function"}><b>compiler-macro-function</b></ClLinks> <ClLinks  term={"name"}><i>name</i></ClLinks> &amp;optional *environment → function* 



<!-- **(setf (compiler-macro-function** <ClLinks  term={"name"}><i>name</i></ClLinks> &amp;optional *environment<ClLinks  term={"t"}><b>*)</b></ClLinks> *new-function***)**  -->
**(setf (compiler-macro-function** *name* &amp;optional *environment***)** *new-function***)** 



**Arguments and Values:** 



<ClLinks  term={"name"}><i>name</i></ClLinks>—a *function name*. 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an *environment object*. 



<ClLinks  term={"function"}><i>function</i></ClLinks>, *new-function*—a *compiler macro function*, or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



**Description:** 



*Accesses* the *compiler macro function* named <ClLinks  term={"name"}><i>name</i></ClLinks>, if any, in the <ClLinks  term={"environment"}><i>environment</i></ClLinks>.  







A value of <ClLinks  term={"nil"}><b>nil</b></ClLinks> denotes the absence of a *compiler macro function* named <ClLinks  term={"name"}><i>name</i></ClLinks>. 



**Exceptional Situations:** 



The consequences are undefined if <ClLinks  term={"environment"}><i>environment</i></ClLinks> is <ClLinks  term={"non-nil"}><i>non-nil</i></ClLinks> in a use of <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"compiler-macro-function"}><b>compiler-macro-function</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"define-compiler-macro"}><b>define-compiler-macro</b></ClLinks>, Section 3.2.2.1 (Compiler Macros) 



