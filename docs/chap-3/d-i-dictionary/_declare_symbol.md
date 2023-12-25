**declare** <GlossaryTerm styled={true} term={"symbol"}><i>Symbol</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> *\{declaration-specifier\}*\* 



**Arguments:** 



*declaration-specifier*—a *declaration specifier* ; not evaluated. 



**Description:** 



A <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>, sometimes called a <GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>, can occur only at the beginning of the bodies of certain <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>; that is, it may be preceded only by other <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm>, or by a *documentation string* if the context permits. 



A <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> can occur in a *lambda expression* or in any of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> listed in Figure 3–23. 



 



 



<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> 




```lisp title="Figure 3–23. Standardized Forms In Which Declarations Can Occur"
<p>**defgeneric do-external-symbols prog** </p><p>**define-compiler-macro do-symbols prog\*** </p><p>**define-method-combination dolist restart-case define-setf-expander dotimes symbol-macrolet defmacro flet with-accessors defmethod handler-case with-hash-table-iterator defsetf labels with-input-from-string deftype let with-open-file defun let\* with-open-stream destructuring-bind locally with-output-to-string do macrolet with-package-iterator do\* multiple-value-bind with-slots** </p><p>**do-all-symbols pprint-logical-block**</p>
```
 



A <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> can only occur where specified by the syntax of these <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. The consequences of attempting to evaluate a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> are undefined. In situations where such <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm> can appear, explicit checks are made for their presence and they are never actually evaluated; it is for this reason that they are called “<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm>” rather than “<DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>.” 



*Macro forms* cannot expand into declarations; <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expressions</i></GlossaryTerm> must appear as actual <GlossaryTerm styled={true} term={"subexpression"}><i>subexpressions</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to which they refer. 



Figure 3–24 shows a list of *declaration identifiers* that can be used with <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink>. 




```lisp title="Figure 3–24. Local Declaration Specifiers"
<p>**dynamic-extent ignore optimize** </p><p>**ftype inline special** </p><p>**ignorable notinline type**</p>
```
 



An implementation is free to support other (<GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>) *declaration identifiers* as well. **Examples:**
```lisp

(defun nonsense (k x z) 
  (foo z x) ;First call to foo 
  (let ((j (foo k x)) ;Second call to foo 
	(x (\* k k))) 
    (declare (inline foo) (special x z)) 
    (foo x j z))) ;Third call to foo 
In this example, the **inline** declaration applies only to the third call to foo, but not to the first or second ones. The **special** declaration of x causes **let** to make a dynamic *binding* for x, and 
Evaluation and 


causes the reference to x in the body of **let** to be a dynamic reference. The reference to x in the second call to foo is a local reference to the second parameter of nonsense. The reference to x in the first call to foo is a local reference, not a **special** one. The **special** declaration of z causes the 
reference to z in the third call to foo to be a dynamic reference; it does not refer to the parameter to nonsense named z, because that parameter *binding* has not been declared to be **special**. (The **special** declaration of z does not appear in the body of **defun**, but in an inner *form*, and therefore does not a↵ect the *binding* of the *parameter* .) 

```
**Exceptional Situations:** 



The consequences of trying to use a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> as a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> to be *evaluated* are undefined. 



**See Also:** 



<DictionaryLink styled={true} term={"proclaim"}><b>proclaim</b></DictionaryLink>, Section 4.2.3 (Type Specifiers), <DictionaryLink styled={true} term={"declaration"}><b>declaration</b></DictionaryLink>, <DictionaryLink styled={true} term={"dynamic-extent"}><b>dynamic-extent</b></DictionaryLink>, <DictionaryLink styled={true} term={"ftype"}><b>ftype</b></DictionaryLink>, <DictionaryLink styled={true} term={"ignorable"}><b>ignorable</b></DictionaryLink>, <DictionaryLink styled={true} term={"ignore"}><b>ignore</b></DictionaryLink>, <DictionaryLink styled={true} term={"inline"}><b>inline</b></DictionaryLink>, <DictionaryLink styled={true} term={"notinline"}><b>notinline</b></DictionaryLink>, <DictionaryLink styled={true} term={"optimize"}><b>optimize</b></DictionaryLink>, <DictionaryLink styled={true} term={"type"}><b>type</b></DictionaryLink> 



