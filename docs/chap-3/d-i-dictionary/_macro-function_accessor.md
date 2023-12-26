**macro-function** <ClLinks  term={"accessor"}><i>Accessor</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *environment → function* 



<!-- **(setf (macro-function** <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> &amp;optional *environment<ClLinks  term={"t"}><b>*)</b></ClLinks> *new-function***)**  -->
**(setf (macro-function** *symbol* &amp;optional *environment***)** *new-function***)** 



**Arguments and Values:** 



<ClLinks  term={"symbol"}><i>symbol</i></ClLinks>—a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



<ClLinks  term={"environment"}><i>environment</i></ClLinks>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



<ClLinks  term={"function"}><i>function</i></ClLinks>—a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*new-function*—a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>. 



**Description:** 



Determines whether <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> has a function definition as a macro in the specified <ClLinks  term={"environment"}><i>environment</i></ClLinks>. 











If so, the macro expansion function, a function of two arguments, is returned. If <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> has no function definition in the lexical environment <ClLinks  term={"environment"}><i>environment</i></ClLinks>, or its definition is not a <ClLinks  term={"macro"}><i>macro</i></ClLinks>, <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



It is possible for both <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> and <DictionaryLink  term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink> to return <ClLinks  term={"true"}><i>true</i></ClLinks> of <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. The <ClLinks  term={"macro"}><i>macro</i></ClLinks> definition must be available for use by programs that understand only the standard Common Lisp <GlossaryTerm styled={true} term={"special form"}><i>special forms</i></GlossaryTerm>. 



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



(setf macro-function), <DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink>, and <DictionaryLink  term={"macrolet"}><b>macrolet</b></DictionaryLink>. 



**Exceptional Situations:** 



The consequences are undefined if <ClLinks  term={"environment"}><i>environment</i></ClLinks> is <ClLinks  term={"non-nil"}><i>non-nil</i></ClLinks> in a use of <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> to install a <ClLinks  term={"macro"}><i>macro</i></ClLinks> as a symbol’s global function definition: (setf (macro-function symbol) fn) 



The value installed must be a <ClLinks  term={"function"}><i>function</i></ClLinks> that accepts two arguments, the entire macro call and an <ClLinks  term={"environment"}><i>environment</i></ClLinks>, and computes the expansion for that call. Performing this operation causes <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> to have only that macro definition as its global function definition; any previous definition, whether as a <ClLinks  term={"macro"}><i>macro</i></ClLinks> or as a <ClLinks  term={"function"}><i>function</i></ClLinks>, is lost.  







<DictionaryLink styled={true} term={"macroexpand, macroexpand-1"}><b>macroexpand, macroexpand-1</b></DictionaryLink> 



