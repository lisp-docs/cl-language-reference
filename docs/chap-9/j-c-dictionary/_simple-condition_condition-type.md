**simple-condition** *Condition Type* 



**Class Precedence List:** 



<DictionaryLink styled={true} term={"simple-condition"}><b>simple-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"condition"}><b>condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> 



**Description:** 



The <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-condition"}><b>simple-condition</b></DictionaryLink> represents <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm> that are signaled by <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> whenever a *format control* is supplied as the function’s first argument. The *format control* and *format arguments* are initialized with the initialization arguments named :format-control and :format-arguments to <DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink>, and are *accessed* by the <GlossaryTerm styled={true} term={"function"}><i>functions</i></GlossaryTerm> **simple-condition-format-control** and **simple-condition-format-arguments**. If format arguments are not supplied to <DictionaryLink styled={true} term={"make-condition"}><b>make-condition</b></DictionaryLink>, <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> is used as a default. 



**See Also:** 



**simple-condition-format-control**, **simple-condition-format-arguments** 







 



 



<b><sup>simple-condition-format-control, simple</sup> condition-format-arguments</b> <i>Function</i> 



**Syntax:** 



**simple-condition-format-control** *condition → format-control* 



**simple-condition-format-arguments** *condition → format-arguments* 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"simple-condition"}><b>simple-condition</b></DictionaryLink>. 



*format-control*—a *format control*. 



*format-arguments*—a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>. 



**Description:** 



**simple-condition-format-control** returns the *format control* needed to process the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>’s *format arguments*. 



**simple-condition-format-arguments** returns a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> of *format arguments* needed to process the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>’s *format control*. 



**Examples:**
```lisp

(setq foo (make-condition ’simple-condition 
			   :format-control "Hi ~S" 
			   :format-arguments ’(ho))) 
*→* #<SIMPLE-CONDITION 26223553> 
(apply #’format nil (simple-condition-format-control foo) 
	 (simple-condition-format-arguments foo)) 
*→* "Hi HO" 

```
**See Also:** 



<DictionaryLink styled={true} term={"simple-condition"}><b>simple-condition</b></DictionaryLink>, Section 9.1 (Condition System Concepts) 



