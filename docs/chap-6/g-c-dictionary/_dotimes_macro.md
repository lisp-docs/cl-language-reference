**dotimes** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"dotimes"}><b>dotimes</b></ClLinks> (*var count-form* [*result-form*]) <ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* *\{tag | statement\}*\* 



→ \{result\}\* 



**Arguments and Values:** 



*var*—a <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks>. 



*count-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*result-form*—a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



*results*—if a <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> or <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> form is executed, the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> passed from that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; otherwise, the <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the *result-form* or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if there is no *result-form*. 



**Description:** 



<ClLinks styled={true} term={"dotimes"}><b>dotimes</b></ClLinks> iterates over a series of *integers*. 



<ClLinks styled={true} term={"dotimes"}><b>dotimes</b></ClLinks> evaluates *count-form*, which should produce an *integer* . If *count-form* is zero or negative, the body is not executed. <ClLinks styled={true} term={"dotimes"}><b>dotimes</b></ClLinks> then executes the body once for each *integer* from 0 up to but not including the value of *count-form*, in the order in which the <ClLinks styled={true} term={"tag"}><i>tags</i></ClLinks> and *statements* occur, with *var* 



bound to each *integer* . Then *result-form* is evaluated. At the time *result-form* is processed, *var* is bound to the number of times the body was executed. <ClLinks styled={true} term={"tag"}><i>Tags</i></ClLinks> label *statements*. 



An *implicit block* named <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> surrounds <ClLinks styled={true} term={"dotimes"}><b>dotimes</b></ClLinks>. <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> may be used to terminate the loop immediately without performing any further iterations, returning zero or more <ClLinks styled={true} term={"value"}><i>values</i></ClLinks>. 



The body of the loop is an *implicit tagbody*; it may contain tags to serve as the targets of <ClLinks styled={true} term={"go"}><b>go</b></ClLinks> statements. Declarations may appear before the body of the loop. 



The <ClLinks styled={true} term={"scope"}><i>scope</i></ClLinks> of the binding of *var* does not include the *count-form*, but the *result-form* is included. 



It is <ClLinks styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> whether <ClLinks styled={true} term={"dotimes"}><b>dotimes</b></ClLinks> *establishes* a new <ClLinks styled={true} term={"binding"}><i>binding</i></ClLinks> of *var* on each iteration or whether it *establishes* a binding for *var* once at the beginning and then <ClLinks styled={true} term={"assign"}><i>assigns</i></ClLinks> it on any subsequent iterations. 







 



 



**Examples:**
```lisp
(dotimes (temp-one 10 temp-one)) → 10 
(setq temp-two 0) → 0 
(dotimes (temp-one 10 t) (incf temp-two)) → T 
temp-two → 10 
Here is an example of the use of dotimes in processing strings: 
;;; True if the specified subsequence of the string is a 
;;; palindrome (reads the same forwards and backwards). 
(defun palindromep (string &optional 
			     (start 0) 
			     (end (length string))) 
  (dotimes (k (floor (- end start) 2) t) 
    (unless (char-equal (char string (+ start k)) 
			(char string (- end k 1))) 
      (return nil)))) 
(palindromep "Able was I ere I saw Elba") → T 
(palindromep "A man, a plan, a canal–Panama!") → NIL 
(remove-if-not #’alpha-char-p ;Remove punctuation. 
		 "A man, a plan, a canal–Panama!") 
→ "AmanaplanacanalPanama" 
(palindromep 
 (remove-if-not #’alpha-char-p 
		  "A man, a plan, a canal–Panama!")) → T 
(palindromep 
 (remove-if-not 
  #’alpha-char-p 
  "Unremarkable was I ere I saw Elba Kramer, nu?")) → T 
(palindromep 
 (remove-if-not 
  #’alpha-char-p 
  "A man, a plan, a cat, a ham, a yak, 
a yam, a hat, a canal–Panama!")) → T 
```
**See Also:** 



<ClLinks styled={true} term={"do"}><b>do</b></ClLinks>, <ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks>, <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> 



**Notes:** 



<ClLinks styled={true} term={"go"}><b>go</b></ClLinks> may be used within the body of <ClLinks styled={true} term={"dotimes"}><b>dotimes</b></ClLinks> to transfer control to a statement labeled by a <ClLinks styled={true} term={"tag"}><i>tag</i></ClLinks>. 



 



 



<ClLinks styled={true} term={"dolist"}><b>dolist</b></ClLinks> 



