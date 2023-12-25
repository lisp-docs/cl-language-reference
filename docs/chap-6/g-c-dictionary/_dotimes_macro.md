**dotimes** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink> (*var count-form* [*result-form*]) <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* *\{tag | statement\}*\* 



*→ \{result\}*\* 



**Arguments and Values:** 



*var*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



*count-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*result-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>—a *go tag*; not evaluated. 



*statement*—a *compound form*; evaluated as described below. 



*results*—if a <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> or <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> form is executed, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> passed from that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; otherwise, the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the *result-form* or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if there is no *result-form*. 



**Description:** 



<DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink> iterates over a series of *integers*. 



<DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink> evaluates *count-form*, which should produce an *integer* . If *count-form* is zero or negative, the body is not executed. <DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink> then executes the body once for each *integer* from 0 up to but not including the value of *count-form*, in the order in which the <GlossaryTerm styled={true} term={"tag"}><i>tags</i></GlossaryTerm> and *statements* occur, with *var* 



bound to each *integer* . Then *result-form* is evaluated. At the time *result-form* is processed, *var* is bound to the number of times the body was executed. <GlossaryTerm styled={true} term={"tag"}><i>Tags</i></GlossaryTerm> label *statements*. 



An *implicit block* named <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> surrounds <DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink>. <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink> may be used to terminate the loop immediately without performing any further iterations, returning zero or more <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm>. 



The body of the loop is an *implicit tagbody*; it may contain tags to serve as the targets of <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> statements. Declarations may appear before the body of the loop. 



The <GlossaryTerm styled={true} term={"scope"}><i>scope</i></GlossaryTerm> of the binding of *var* does not include the *count-form*, but the *result-form* is included. 



It is <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> whether <DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink> *establishes* a new <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> of *var* on each iteration or whether it *establishes* a binding for *var* once at the beginning and then <GlossaryTerm styled={true} term={"assign"}><i>assigns</i></GlossaryTerm> it on any subsequent iterations. 







 



 



**Examples:**
```lisp

(dotimes (temp-one 10 temp-one)) *→* 10 
(setq temp-two 0) *→* 0 
(dotimes (temp-one 10 t) (incf temp-two)) *→* T 
temp-two *→* 10 
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



<DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink>, <DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink>, <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> 



**Notes:** 



<DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> may be used within the body of <DictionaryLink styled={true} term={"dotimes"}><b>dotimes</b></DictionaryLink> to transfer control to a statement labeled by a <GlossaryTerm styled={true} term={"tag"}><i>tag</i></GlossaryTerm>. 



 



 



<DictionaryLink styled={true} term={"dolist"}><b>dolist</b></DictionaryLink> 



