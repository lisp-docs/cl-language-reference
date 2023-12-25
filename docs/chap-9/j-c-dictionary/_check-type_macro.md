**check-type** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink> *place typespec* [<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>] *→* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



*typespec*—a *type specifier* . 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; evaluated. 







 



 



<DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink> 



**Description:** 



<DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink> signals a *correctable error* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> if the contents of <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> are not of the type *typespec*. 



<DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink> can return only if the **store-value** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is invoked, either explicitly from a handler or implicitly as one of the options offered by the debugger. If the **store-value** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is invoked, <DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink> stores the new value that is the argument to the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> invocation (or that is prompted for interactively by the debugger) in <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> and starts over, checking the type of the new value and signaling another error if it is still not of the desired <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>. 



The first time <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is *evaluated*, it is *evaluated* by normal evaluation rules. It is later *evaluated* as a <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> if the type check fails and the **store-value** <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is used; see Section 5.1.1.1 (Evaluation of Subforms to Places). 



<GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> should be an English description of the type, starting with an indefinite article (“a” or “an”). If <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is not supplied, it is computed automatically from *typespec*. The automatically generated message mentions <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, its contents, and the desired type. An implementation may choose to generate a somewhat differently worded error message if it recognizes that <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> is of a particular form, such as one of the arguments to the function that called <DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink>. <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm> is allowed because some applications of <DictionaryLink styled={true} term={"check-type"}><b>check-type</b></DictionaryLink> may require a more specific description of what is wanted than can be generated automatically from *typespec*. 



**Examples:**
```lisp

(setq aardvarks ’(sam harry fred)) 
*→* (SAM HARRY FRED) 
(check-type aardvarks (array \* (3))) 
▷ Error: The value of AARDVARKS, (SAM HARRY FRED), 
▷ is not a 3-long array. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Specify a value to use instead. 
▷ 2: Return to Lisp Toplevel. 
▷ Debug> :CONTINUE 1 
▷ Use Value: #(SAM FRED HARRY) 
*→* NIL 
aardvarks 
*→* #<ARRAY-T-3 13571> 
(map ’list #’identity aardvarks) 
*→* (SAM FRED HARRY) 
(setq aardvark-count ’foo) 
*→* FOO 
(check-type aardvark-count (integer 0 \*) "A positive integer") 
▷ Error: The value of AARDVARK-COUNT, FOO, is not a positive integer. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Specify a value to use instead. 
▷ 2: Top level. 



**check-type** 
▷ Debug> :CONTINUE 2 
(defmacro define-adder (name amount) 
  (check-type name (and symbol (not null)) "a name for an adder function") (check-type amount integer) 
  ‘(defun ,name (x) (+ x ,amount))) 
(macroexpand ’(define-adder add3 3)) 
*→* (defun add3 (x) (+ x 3)) 
(macroexpand ’(define-adder 7 7)) 
▷ Error: The value of NAME, 7, is not a name for an adder function. ▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Specify a value to use instead. 
▷ 2: Top level. 
▷ Debug> :Continue 1 
▷ Specify a value to use instead. 
▷ Type a form to be evaluated and used instead: ’ADD7 
*→* (defun add7 (x) (+ x 7)) 
(macroexpand ’(define-adder add5 something)) 
▷ Error: The value of AMOUNT, SOMETHING, is not an integer. 
▷ To continue, type :CONTINUE followed by an option number: 
▷ 1: Specify a value to use instead. 
▷ 2: Top level. 
▷ Debug> :Continue 1 
▷ Type a form to be evaluated and used instead: 5 
*→* (defun add5 (x) (+ x 5)) 
Control is transferred to a handler. 

```
**Side Effects:** 



The debugger might be entered. 



**Affected By:** 



<DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> 



The implementation. 



**See Also:** 



Section 9.1 (Condition System Concepts) 



**Notes:** 



(check-type *place typespec*) 







 



 



*≡* (assert (typep <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> ’*typespec*) (<GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>) 



’type-error :datum <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> :expected-type ’*typespec*) 



