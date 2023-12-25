**macro-function** <GlossaryTerm styled={true} term={"accessor"}><i>Accessor</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink> <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *environment → function* 



**(setf (macro-function** <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> &amp;optional *environment<DictionaryLink styled={true} term={"t"}><b>*)</b></DictionaryLink> *new-function***)** 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>—an *environment object*. 



<GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>—a *macro function* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*new-function*—a *macro function*. 



**Description:** 



Determines whether <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> has a function definition as a macro in the specified <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>. 











If so, the macro expansion function, a function of two arguments, is returned. If <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> has no function definition in the lexical environment <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, or its definition is not a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm>, <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



It is possible for both <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink> and <DictionaryLink styled={true} term={"special-operator-p"}><b>special-operator-p</b></DictionaryLink> to return <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> definition must be available for use by programs that understand only the standard Common Lisp *special forms*. 



**Examples:**
```lisp

(defmacro macfun (x) ’(macro-function ’macfun)) *→* MACFUN 
(not (macro-function ’macfun)) *→ false* 
(macrolet ((foo (&environment env) 
	     (if (macro-function ’bar env) 
		 ”yes 
		  ”no))) 
  (list (foo) 
	(macrolet ((bar () :beep)) 
	  (foo)))) 
*→* (NO YES) 

```
**Affected By:** 



(setf macro-function), <DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink>, and <DictionaryLink styled={true} term={"macrolet"}><b>macrolet</b></DictionaryLink>. 



**Exceptional Situations:** 



The consequences are undefined if <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm> in a use of <DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> of <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink>. 



**See Also:** 



<DictionaryLink styled={true} term={"defmacro"}><b>defmacro</b></DictionaryLink>, Section 3.1 (Evaluation) 



**Notes:** 



<DictionaryLink styled={true} term={"setf"}><b>setf</b></DictionaryLink> can be used with <DictionaryLink styled={true} term={"macro-function"}><b>macro-function</b></DictionaryLink> to install a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> as a symbol’s global function definition: (setf (macro-function symbol) fn) 



The value installed must be a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> that accepts two arguments, the entire macro call and an <GlossaryTerm styled={true} term={"environment"}><i>environment</i></GlossaryTerm>, and computes the expansion for that call. Performing this operation causes <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> to have only that macro definition as its global function definition; any previous definition, whether as a <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> or as a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm>, is lost.  







**macroexpand, macroexpand-1** 



