**declare** *Symbol* 



**Syntax:** 



**declare** *\{declaration-specifier\}*\* 



**Arguments:** 



*declaration-specifier*—a *declaration specifier* ; not evaluated. 



**Description:** 



A **declare** *expression*, sometimes called a *declaration*, can occur only at the beginning of the bodies of certain *forms*; that is, it may be preceded only by other **declare** *expressions*, or by a *documentation string* if the context permits. 



A **declare** *expression* can occur in a *lambda expression* or in any of the *forms* listed in Figure 3–23. 



 



 



**declare** 



|<p>**defgeneric do-external-symbols prog** </p><p>**define-compiler-macro do-symbols prog\*** </p><p>**define-method-combination dolist restart-case define-setf-expander dotimes symbol-macrolet defmacro flet with-accessors defmethod handler-case with-hash-table-iterator defsetf labels with-input-from-string deftype let with-open-file defun let\* with-open-stream destructuring-bind locally with-output-to-string do macrolet with-package-iterator do\* multiple-value-bind with-slots** </p><p>**do-all-symbols pprint-logical-block**</p>|

| :- |





**Figure 3–23. Standardized Forms In Which Declarations Can Occur** 



A **declare** *expression* can only occur where specified by the syntax of these *forms*. The consequences of attempting to evaluate a **declare** *expression* are undefined. In situations where such *expressions* can appear, explicit checks are made for their presence and they are never actually evaluated; it is for this reason that they are called “**declare** *expressions*” rather than “**declare** *forms*.” 



*Macro forms* cannot expand into declarations; **declare** *expressions* must appear as actual *subexpressions* of the *form* to which they refer. 



Figure 3–24 shows a list of *declaration identifiers* that can be used with **declare**. 



|<p>**dynamic-extent ignore optimize** </p><p>**ftype inline special** </p><p>**ignorable notinline type**</p>|

| :- |





**Figure 3–24. Local Declaration Specifiers** 



An implementation is free to support other (*implementation-defined*) *declaration identifiers* as well. **Examples:**
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



The consequences of trying to use a **declare** *expression* as a *form* to be *evaluated* are undefined. 



**See Also:** 



**proclaim**, Section 4.2.3 (Type Specifiers), **declaration**, **dynamic-extent**, **ftype**, **ignorable**, **ignore**, **inline**, **notinline**, **optimize**, **type** 



