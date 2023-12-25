**macro-function** <ClLinks styled={true} term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks> <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *environment → function* 



<!-- **(setf (macro-function** <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *environment<ClLinks styled={true} term={"t"}><b>*)</b></ClLinks> *new-function***)**  -->
**(setf (macro-function** *symbol* &amp;optional *environment***)** *new-function***)** 



**Arguments and Values:** 



<ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>—an *environment object*. 



<ClLinks styled={true} term={"function"}><i>function</i></ClLinks>—a *macro function* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



*new-function*—a *macro function*. 



**Description:** 



Determines whether <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> has a function definition as a macro in the specified <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>. 











If so, the macro expansion function, a function of two arguments, is returned. If <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> has no function definition in the lexical environment <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, or its definition is not a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>, <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



It is possible for both <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks> and <ClLinks styled={true} term={"special-operator-p"}><b>special-operator-p</b></ClLinks> to return <ClLinks styled={true} term={"true"}><i>true</i></ClLinks> of <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. The <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> definition must be available for use by programs that understand only the standard Common Lisp *special forms*. 



**Examples:**
```lisp
(defmacro macfun (x) ’(macro-function ’macfun)) → MACFUN 
(not (macro-function ’macfun)) → false 
(macrolet ((foo (&environment env) 
	     (if (macro-function ’bar env) 
		 ”yes 
		  ”no))) 
  (list (foo) 
	(macrolet ((bar () :beep)) 
	  (foo)))) 
→ (NO YES) 
```
**Affected By:** 



(setf macro-function), <ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks>, and <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks>. 



**Exceptional Situations:** 



The consequences are undefined if <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks> in a use of <ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> of <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks>. 



**See Also:** 



<ClLinks styled={true} term={"defmacro"}><b>defmacro</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



<ClLinks styled={true} term={"setf"}><b>setf</b></ClLinks> can be used with <ClLinks styled={true} term={"macro-function"}><b>macro-function</b></ClLinks> to install a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> as a symbol’s global function definition: (setf (macro-function symbol) fn) 



The value installed must be a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> that accepts two arguments, the entire macro call and an <ClLinks styled={true} term={"environment"}><i>environment</i></ClLinks>, and computes the expansion for that call. Performing this operation causes <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> to have only that macro definition as its global function definition; any previous definition, whether as a <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> or as a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks>, is lost.  







**macroexpand, macroexpand-1** 



