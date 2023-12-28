**macro-function** <GlossaryTerm  term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *environment → function* 



<!-- **(setf (macro-function** <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *environment<DictionaryLink  term={"t"}><b>*)</b></DictionaryLink> *new-function***)**  -->
**(setf (macro-function** *symbol* &amp;optional *environment***)** *new-function***)** 



**Arguments and Values:** 



<GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"environment object"}><i>environment object</i></GlossaryTerm>. 



<GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm> or <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



*new-function*—a <GlossaryTerm styled={true} term={"macro function"}><i>macro function</i></GlossaryTerm>. 



**Description:** 



Determines whether <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> has a function definition as a macro in the specified <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>. 











If so, the macro expansion function, a function of two arguments, is returned. If <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> has no function definition in the lexical environment <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, or its definition is not a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm>, <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> returns <DictionaryLink  term={"nil"}><b>nil</b></DictionaryLink>. 



It is possible for both <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> and <DictionaryLink  term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink> to return <GlossaryTerm  term={"true"}><i>true</i></GlossaryTerm> of <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. The <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> definition must be available for use by programs that understand only the standard Common Lisp <GlossaryTerm styled={true} term={"special form"}><i>special forms</i></GlossaryTerm>. 



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



The consequences are undefined if <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm> is <GlossaryTerm  term={"non-nil"}><i>non-nil</i></GlossaryTerm> in a use of <DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink  term={"defmacro"}><b>defmacro</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



<DictionaryLink  term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink  term={"macro-function"}><b>macro-function</b></DictionaryLink> to install a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> as a symbol’s global function definition: (setf (macro-function symbol) fn) 



The value installed must be a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm> that accepts two arguments, the entire macro call and an <GlossaryTerm  term={"environment"}><i>environment</i></GlossaryTerm>, and computes the expansion for that call. Performing this operation causes <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm> to have only that macro definition as its global function definition; any previous definition, whether as a <GlossaryTerm  term={"macro"}><i>macro</i></GlossaryTerm> or as a <GlossaryTerm  term={"function"}><i>function</i></GlossaryTerm>, is lost.  







<DictionaryLink styled={true} term={"macroexpand, macroexpand-1"}><b>macroexpand, macroexpand-1</b></DictionaryLink> 



