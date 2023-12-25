**restart-case** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> *restartable-form \{↓clause\} → \{result\}*\* 



*clause::*=(*case-name lambda-list* 



[[ :interactive *interactive-expression |* :report *report-expression |* :test *test-expression* ]] <GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\*) 



**Arguments and Values:** 



*restartable-form*—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*case-name*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



*lambda-list*—an *ordinary lambda list*. 



*interactive-expression*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or a *lambda expression*. 



*report-expression*—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, or a *lambda expression*. 



*test-expression*—a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> or a *lambda expression*. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*results*—the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> resulting from the <GlossaryTerm styled={true} term={"evaluation"}><i>evaluation</i></GlossaryTerm> of *restartable-form*, or the <GlossaryTerm styled={true} term={"value"}><i>values</i></GlossaryTerm> returned by the last <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> executed in a chosen *clause*, or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



**Description:** 



<DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> evaluates *restartable-form* in a *dynamic environment* where the clauses have special meanings as points to which control may be transferred. If *restartable-form* finishes executing and returns any values, all values returned are returned by <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> and processing has completed. While *restartable-form* is executing, any code may transfer control to one of the clauses (see 







 



 



<DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> 



<DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>). If a transfer occurs, the forms in the body of that clause is evaluated and any values returned by the last such form are returned by <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>. In this case, the dynamic state is unwound appropriately (so that the restarts established around the *restartable-form* are no longer active) prior to execution of the clause. 



If there are no <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> in a selected clause, <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



If *case-name* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, it names this restart. 



It is possible to have more than one clause use the same *case-name*. In this case, the first clause with that name is found by <DictionaryLink styled={true} term={"find-restart"}><b>find-restart</b></DictionaryLink>. The other clauses are accessible using <DictionaryLink styled={true} term={"compute-restarts"}><b>compute-restarts</b></DictionaryLink>. 



Each *arglist* is an *ordinary lambda list* to be bound during the execution of its corresponding <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>. These parameters are used by the <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> clause to receive any necessary data from a call to <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>. 



By default, <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> passes no arguments and all arguments must be optional in order to accomodate interactive restarting. However, the arguments need not be optional if the :interactive keyword has been used to inform <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> about how to compute a proper argument list. 



<GlossaryTerm styled={true} term={"keyword"}><i>Keyword</i></GlossaryTerm> options have the following meaning. 



:interactive 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> supplied by :interactive <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> must be a suitable argument to <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>. (function <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>) is evaluated in the current lexical environment. It should return a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of no arguments which returns arguments to be used by <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> when it is invoked. <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink> is called in the dynamic environment available prior to any restart attempt, and uses *query I/O* for user interaction. 



If a restart is invoked interactively but no :interactive option was supplied, the argument list used in the invocation is the empty list. 



:report 



If the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> supplied by :report <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is a *lambda expression* or a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, it must be acceptable to <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>. (function <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>) is evaluated in the current lexical environment. It should return a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one argument, a <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>, which prints on the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> a description of the restart. This <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is called whenever the restart is printed while <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



If <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> is a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>, it is a shorthand for 



(lambda (stream) (write-string value stream)) 



If a named restart is asked to report but no report information has been supplied, the name of the restart is used in generating default report text. 







 



 



<DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> 



When <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, the printer uses the report information for a restart. For example, a debugger might announce the action of typing a “continue” command by: 



(format t "&#126;&amp;&#126;S – &#126;A&#126;%" ’:continue some-restart) 



which might then display as something like: 



:CONTINUE – Return to command level 



The consequences are unspecified if an unnamed restart is specified but no :report option is provided. 



:test 



The <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> supplied by :test <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> must be a suitable argument to <DictionaryLink styled={true} term={"function"}><b>function</b></DictionaryLink>. 



(function <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm>) is evaluated in the current lexical environment. It should return a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> of one <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm>, that returns <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm> if the restart is to be considered visible. 



The default for this option is equivalent to (lambda (c) (declare (ignore c)) t). 



If the *restartable-form* is a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"car"}><i>car</i></GlossaryTerm> is any of the <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink>, <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink>, <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink>, or <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink> (or is a *macro form* which macroexpands into such a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>), then <DictionaryLink styled={true} term={"with-condition-restarts"}><b>with-condition-restarts</b></DictionaryLink> is used implicitly to associate the indicated <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> with the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> to be signaled. 



**Examples:**
```lisp

(restart-case 
    (handler-bind ((error #’(lambda (c) 
			      (declare (ignore condition)) 
			      (invoke-restart ’my-restart 7)))) 
      (error "Foo.")) 
  (my-restart (&optional v) v)) 
*→* 7 
(define-condition food-error (error) ()) 
*→* FOOD-ERROR 
(define-condition bad-tasting-sundae (food-error) 
  ((ice-cream :initarg :ice-cream :reader bad-tasting-sundae-ice-cream) 
   (sauce :initarg :sauce :reader bad-tasting-sundae-sauce) 
   (topping :initarg :topping :reader bad-tasting-sundae-topping)) 
  (:report (lambda (condition stream) 
	     (format stream "Bad tasting sundae with ~S, ~S, and ~S" 
		     (bad-tasting-sundae-ice-cream condition) 
		     (bad-tasting-sundae-sauce condition) 
		     (bad-tasting-sundae-topping condition))))) 
*→* BAD-TASTING-SUNDAE 
(defun all-start-with-same-letter (symbol1 symbol2 symbol3) 

  
  
  **restart-case** 
  (let ((first-letter (char (symbol-name symbol1) 0))) 
    (and (eql first-letter (char (symbol-name symbol2) 0)) 
	 (eql first-letter (char (symbol-name symbol3) 0))))) 
*→* ALL-START-WITH-SAME-LETTER 
(defun read-new-value () 
  (format t "Enter a new value: ") 
  (multiple-value-list (eval (read)))) 
*→* READ-NEW-VALUE 



**restart-case** 
(defun verify-or-fix-perfect-sundae (ice-cream sauce topping) (do () 
								  ((all-start-with-same-letter ice-cream sauce topping)) 
								(restart-case 
								    (error ’bad-tasting-sundae 
									    :ice-cream ice-cream 
									    :sauce sauce 
									    :topping topping) 
								  (use-new-ice-cream (new-ice-cream) 
								    :report "Use a new ice cream." 
								    :interactive read-new-value 
								    (setq ice-cream new-ice-cream)) 
								  (use-new-sauce (new-sauce) 
								    :report "Use a new sauce." 
								    :interactive read-new-value 
								    (setq sauce new-sauce)) 
								  (use-new-topping (new-topping) 
								    :report "Use a new topping." 
								    :interactive read-new-value 
								    (setq topping new-topping)))) 
       (values ice-cream sauce topping)) 
*→* VERIFY-OR-FIX-PERFECT-SUNDAE 
(verify-or-fix-perfect-sundae ’vanilla ’caramel ’cherry) ▷ Error: Bad tasting sundae with VANILLA, CARAMEL, and CHERRY. ▷ To continue, type :CONTINUE followed by an option number: ▷ 1: Use a new ice cream. 
▷ 2: Use a new sauce. 
▷ 3: Use a new topping. 
▷ 4: Return to Lisp Toplevel. 
▷ Debug> :continue 1 
▷ Use a new ice cream. 
▷ Enter a new ice cream: ’chocolate 
*→* CHOCOLATE, CARAMEL, CHERRY 

```
**See Also:** 



<DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink>, <DictionaryLink styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></DictionaryLink>. 



**Notes:** 



(restart-case <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> 



(*name1 arglist1* ...*options1*... . *body1*) 



(*name2 arglist2* ...*options2*... . *body2*)) 



is essentially equivalent to 







 



 



(block #1=#:g0001 



(let ((#2=#:g0002 nil)) 



(tagbody 



(restart-bind ((name1 #’(lambda (&amp;rest temp) 



(setq #2# temp) 



(go #3=#:g0003)) 



...*slightly-transformed-options1*...) 



(name2 #’(lambda (&amp;rest temp) 



(setq #2# temp) 



(go #4=#:g0004)) 



...*slightly-transformed-options2*...)) 



(return-from #1# <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>)) 



#3# (return-from #1# 



(apply #’(lambda *arglist1* . *body1*) #2#)) 



#4# (return-from #1# 



(apply #’(lambda *arglist2* . *body2*) #2#))))) 



Unnamed restarts are generally only useful interactively and an interactive option which has no description is of little value. Implementations are encouraged to warn if an unnamed restart is used and no report information is provided at compilation time. At runtime, this error might be noticed when entering the debugger. Since signaling an error would probably cause recursive entry into the debugger (causing yet another recursive error, etc.) it is suggested that the debugger print some indication of such problems when they occur but not actually signal errors. 



(restart-case (signal fred) 



(a ...) 



(b ...)) 



*≡* 



(restart-case 



(with-condition-restarts fred 



(list (find-restart ’a) 



(find-restart ’b)) 



(signal fred)) 



(a ...) 



(b ...)) 



