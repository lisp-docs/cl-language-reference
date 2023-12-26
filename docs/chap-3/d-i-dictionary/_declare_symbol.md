**declare** <ClLinks  term={"symbol"}><i>Symbol</i></ClLinks> 



**Syntax:** 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> *\{declaration-specifier\}*\* 



**Arguments:** 



*declaration-specifier*—a <GlossaryTerm styled={true} term={"declaration specifier"}><i>declaration specifier</i></GlossaryTerm> ; not evaluated. 



**Description:** 



A <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks>, sometimes called a <ClLinks  term={"declaration"}><i>declaration</i></ClLinks>, can occur only at the beginning of the bodies of certain <ClLinks  term={"form"}><i>forms</i></ClLinks>; that is, it may be preceded only by other <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expressions</i></ClLinks>, or by a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> if the context permits. 



A <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks> can occur in a <GlossaryTerm styled={true} term={"lambda expression"}><i>lambda expression</i></GlossaryTerm> or in any of the <ClLinks  term={"form"}><i>forms</i></ClLinks> listed in Figure 3–23. 



 



 



<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> 




```lisp title="Figure 3–23. Standardized Forms In Which Declarations Can Occur"
<p>**defgeneric do-external-symbols prog** </p><p>**define-compiler-macro do-symbols prog\*** </p><p>**define-method-combination dolist restart-case define-setf-expander dotimes symbol-macrolet defmacro flet with-accessors defmethod handler-case with-hash-table-iterator defsetf labels with-input-from-string deftype let with-open-file defun let\* with-open-stream destructuring-bind locally with-output-to-string do macrolet with-package-iterator do\* multiple-value-bind with-slots** </p><p>**do-all-symbols pprint-logical-block**</p>
```
 



A <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks> can only occur where specified by the syntax of these <ClLinks  term={"form"}><i>forms</i></ClLinks>. The consequences of attempting to evaluate a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks> are undefined. In situations where such <ClLinks  term={"expression"}><i>expressions</i></ClLinks> can appear, explicit checks are made for their presence and they are never actually evaluated; it is for this reason that they are called “<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expressions</i></ClLinks>” rather than “<DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"form"}><i>forms</i></ClLinks>.” 



<GlossaryTerm styled={true} term={"macro form"}><i>Macro forms</i></GlossaryTerm> cannot expand into declarations; <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expressions</i></ClLinks> must appear as actual <ClLinks  term={"subexpression"}><i>subexpressions</i></ClLinks> of the <ClLinks  term={"form"}><i>form</i></ClLinks> to which they refer. 



Figure 3–24 shows a list of <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifiers</i></GlossaryTerm> that can be used with <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink>. 




```lisp title="Figure 3–24. Local Declaration Specifiers"
<p>**dynamic-extent ignore optimize** </p><p>**ftype inline special** </p><p>**ignorable notinline type**</p>
```
 



An implementation is free to support other (<ClLinks  term={"implementation-defined"}><i>implementation-defined</i></ClLinks>) <GlossaryTerm styled={true} term={"declaration identifier"}><i>declaration identifiers</i></GlossaryTerm> as well. 

**Examples:**
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



The consequences of trying to use a <DictionaryLink  term={"declare"}><b>declare</b></DictionaryLink> <ClLinks  term={"expression"}><i>expression</i></ClLinks> as a <ClLinks  term={"form"}><i>form</i></ClLinks> to be *evaluated* are undefined. 



**See Also:** 



<DictionaryLink  term={"proclaim"}><b>proclaim</b></DictionaryLink>, Section 4.2.3 (Type Specifiers), <DictionaryLink  term={"declaration"}><b>declaration</b></DictionaryLink>, <DictionaryLink  term={"dynamic-extent"}><b>dynamic-extent</b></DictionaryLink>, <DictionaryLink  term={"ftype"}><b>ftype</b></DictionaryLink>, <DictionaryLink  term={"ignorable"}><b>ignorable</b></DictionaryLink>, <DictionaryLink  term={"ignore"}><b>ignore</b></DictionaryLink>, <DictionaryLink  term={"inline"}><b>inline</b></DictionaryLink>, <DictionaryLink  term={"notinline"}><b>notinline</b></DictionaryLink>, <DictionaryLink  term={"optimize"}><b>optimize</b></DictionaryLink>, <DictionaryLink  term={"type"}><b>type</b></DictionaryLink> 



