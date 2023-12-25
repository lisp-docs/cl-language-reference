**declare** <ClLinks styled={true} term={"symbol"}><i>Symbol</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> *\{declaration-specifier\}*\* 



**Arguments:** 



*declaration-specifier*—a *declaration specifier* ; not evaluated. 



**Description:** 



A <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>, sometimes called a <ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>, can occur only at the beginning of the bodies of certain <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>; that is, it may be preceded only by other <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks>, or by a *documentation string* if the context permits. 



A <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> can occur in a *lambda expression* or in any of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> listed in Figure 3–23. 



 



 



<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> 




```lisp title="Figure 3–23. Standardized Forms In Which Declarations Can Occur"
<p>**defgeneric do-external-symbols prog** </p><p>**define-compiler-macro do-symbols prog\*** </p><p>**define-method-combination dolist restart-case define-setf-expander dotimes symbol-macrolet defmacro flet with-accessors defmethod handler-case with-hash-table-iterator defsetf labels with-input-from-string deftype let with-open-file defun let\* with-open-stream destructuring-bind locally with-output-to-string do macrolet with-package-iterator do\* multiple-value-bind with-slots** </p><p>**do-all-symbols pprint-logical-block**</p>
```
 



A <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> can only occur where specified by the syntax of these <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>. The consequences of attempting to evaluate a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> are undefined. In situations where such <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks> can appear, explicit checks are made for their presence and they are never actually evaluated; it is for this reason that they are called “<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks>” rather than “<ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>.” 



*Macro forms* cannot expand into declarations; <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expressions</i></ClLinks> must appear as actual <ClLinks styled={true} term={"subexpression"}><i>subexpressions</i></ClLinks> of the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to which they refer. 



Figure 3–24 shows a list of *declaration identifiers* that can be used with <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks>. 




```lisp title="Figure 3–24. Local Declaration Specifiers"
<p>**dynamic-extent ignore optimize** </p><p>**ftype inline special** </p><p>**ignorable notinline type**</p>
```
 



An implementation is free to support other (<ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>) *declaration identifiers* as well. 

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



The consequences of trying to use a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks> as a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to be *evaluated* are undefined. 



**See Also:** 



<ClLinks styled={true} term={"proclaim"}><b>proclaim</b></ClLinks>, Section 4.2.3 (Type Specifiers), <ClLinks styled={true} term={"declaration"}><b>declaration</b></ClLinks>, <ClLinks styled={true} term={"dynamic-extent"}><b>dynamic-extent</b></ClLinks>, <ClLinks styled={true} term={"ftype"}><b>ftype</b></ClLinks>, <ClLinks styled={true} term={"ignorable"}><b>ignorable</b></ClLinks>, <ClLinks styled={true} term={"ignore"}><b>ignore</b></ClLinks>, <ClLinks styled={true} term={"inline"}><b>inline</b></ClLinks>, <ClLinks styled={true} term={"notinline"}><b>notinline</b></ClLinks>, <ClLinks styled={true} term={"optimize"}><b>optimize</b></ClLinks>, <ClLinks styled={true} term={"type"}><b>type</b></ClLinks> 



