**macro-function** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks> <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *environment → function* 



<!-- **(setf (macro-function** <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *environment<ClLinks  term={"t"}><b>*)</b></ClLinks> *new-function***)**  -->
**(setf (macro-function** *symbol* &amp;optional *environment***)** *new-function***)** 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



<ClLinks  term={"function"}><i>function</i></ClLinks>—a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> or <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



*new-function*—a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>. 



**Description:** 



Determines whether <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> has a function definition as a macro in the specified <ClLinks  term={"environment"}><i>environment</i></ClLinks>. 











If so, the macro expansion function, a function of two arguments, is returned. If <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> has no function definition in the lexical environment <ClLinks  term={"environment"}><i>environment</i></ClLinks>, or its definition is not a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks> returns <ClLinks  term={"nil"}><b>nil</b></ClLinks>. 



It is possible for both <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks> and <ClLinks  term={"special-operator-p"}><b>special-operator-p</b></ClLinks> to return <ClLinks  term={"true"}><i>true</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. The <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition must be available for use by programs that understand only the standard Common Lisp <GlossaryTerm styled={true} term={"special form"}><i>special forms</i></GlossaryTerm>. 



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



(setf macro-function), <ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks>, and <ClLinks  term={"macrolet"}><b>macrolet</b></ClLinks>. 



**Exceptional Situations:** 



The consequences are undefined if <ClLinks  term={"environment"}><i>environment</i></ClLinks> is <ClLinks  term={"non-nil"}><i>non-nil</i></ClLinks> in a use of <ClLinks  term={"setf"}><b>setf</b></ClLinks> of <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks>. 



**See Also:** 



<ClLinks  term={"defmacro"}><b>defmacro</b></ClLinks>, Section 3.1 (Evaluation) 



**Notes:** 



<ClLinks  term={"setf"}><b>setf</b></ClLinks> can be used with <ClLinks  term={"macro-function"}><b>macro-function</b></ClLinks> to install a <ClLinks  term={"macro"}><i>macro</i></ClLinks> as a symbol’s global function definition: (setf (macro-function symbol) fn) 



The value installed must be a <ClLinks  term={"function"}><i>function</i></ClLinks> that accepts two arguments, the entire macro call and an <ClLinks  term={"environment"}><i>environment</i></ClLinks>, and computes the expansion for that call. Performing this operation causes <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> to have only that macro definition as its global function definition; any previous definition, whether as a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or as a <ClLinks  term={"function"}><i>function</i></ClLinks>, is lost.  







<DictionaryLink styled={true} term={"macroexpand, macroexpand-1"}><b>macroexpand, macroexpand-1</b></DictionaryLink> 



