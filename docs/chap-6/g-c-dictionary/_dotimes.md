**dotimes** *Macro* 



**Syntax:** 



**dotimes** (*var count-form* [*result-form*]) *\{declaration\}*\* *\{tag | statement\}*\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*var*—a *symbol*. 



*count-form*—a *form*. 



*result-form*—a *form*. 



*declaration*—a **declare** *expression*; not evaluated. 



*tag*—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



*results*—if a **return** or **return-from** form is executed, the *values* passed from that *form*; otherwise, the *values* returned by the *result-form* or **nil** if there is no *result-form*. 



**Description:** 



**dotimes** iterates over a series of *integers*. 



**dotimes** evaluates *count-form*, which should produce an *integer* . If *count-form* is zero or negative, the body is not executed. **dotimes** then executes the body once for each *integer* from 0 up to but not including the value of *count-form*, in the order in which the *tags* and *statements* occur, with *var* 



bound to each *integer* . Then *result-form* is evaluated. At the time *result-form* is processed, *var* is bound to the number of times the body was executed. *Tags* label *statements*. 



An *implicit block* named **nil** surrounds **dotimes**. **return** may be used to terminate the loop immediately without performing any further iterations, returning zero or more *values*. 



The body of the loop is an *implicit tagbody*; it may contain tags to serve as the targets of **go** statements. Declarations may appear before the body of the loop. 



The *scope* of the binding of *var* does not include the *count-form*, but the *result-form* is included. 



It is *implementation-dependent* whether **dotimes** *establishes* a new *binding* of *var* on each iteration or whether it *establishes* a binding for *var* once at the beginning and then *assigns* it on any subsequent iterations. 







 



 



**Examples:**
```lisp
 

(dotimes (temp-one 10 temp-one)) *→* 10 

(setq temp-two 0) *→* 0 

(dotimes (temp-one 10 t) (incf temp-two)) *→* T 

temp-two *→* 10 

Here is an example of the use of dotimes in processing strings: 

;;; True if the specified subsequence of the string is a 

;;; palindrome (reads the same forwards and backwards). 

(defun palindromep (string &amp;optional 

(start 0) 

(end (length string))) 

(dotimes (k (floor (- end start) 2) t) 

(unless (char-equal (char string (+ start k)) 

(char string (- end k 1))) 

(return nil)))) 

(palindromep "Able was I ere I saw Elba") *→* T 

(palindromep "A man, a plan, a canal–Panama!") *→* NIL 

(remove-if-not #’alpha-char-p ;Remove punctuation. 

"A man, a plan, a canal–Panama!") 

*→* "AmanaplanacanalPanama" 

(palindromep 

(remove-if-not #’alpha-char-p 

"A man, a plan, a canal–Panama!")) *→* T 

(palindromep 

(remove-if-not 

#’alpha-char-p 

"Unremarkable was I ere I saw Elba Kramer, nu?")) *→* T 

(palindromep 

(remove-if-not 

#’alpha-char-p 

"A man, a plan, a cat, a ham, a yak, 

a yam, a hat, a canal–Panama!")) *→* T 


```
**See Also:** 



**do**, **dolist**, **tagbody** 



**Notes:** 



**go** may be used within the body of **dotimes** to transfer control to a statement labeled by a *tag*. 



 



 



**dolist** 



