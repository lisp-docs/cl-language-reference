 



The repeat construct causes iteration to terminate after a specified number of times. The loop body executes *n* times, where *n* is the value of the expression <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> argument is evaluated one time in the loop prologue. If the expression evaluates to 0 or to a negative <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> , the loop body is not evaluated. 



The constructs always, never, thereis, while, until, and the macro <DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> allow conditional termination of iteration within a <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>. 



The constructs always, never, and thereis provide specific values to be returned when a <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> terminates. Using always, never, or thereis in a loop with value accumulation clauses that are not into causes an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> to be signaled (at macro expansion time). Since always, never, and thereis use the <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> *special operator* to terminate iteration, any finally clause that is supplied is not evaluated when exit occurs due to any of these constructs. In all other respects these constructs behave like the while and until constructs. 



The always construct takes one <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> and terminates the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> ever evaluates to <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>; in this case, it returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. Otherwise, it provides a default return value of <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. If the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is never <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, some other construct can terminate the iteration. 



The never construct terminates iteration the first time that the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>; the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. If the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is always <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, some other construct can terminate the iteration. Unless some other clause contributes a return value, the default value returned is <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink>. 



The thereis construct terminates iteration the first time that the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>; the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> returns the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. If the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is always <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>, some other construct can terminate the iteration. Unless some other clause contributes a return value, the default value returned is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink>. 



There are two differences between the thereis and until constructs: 



*•* The until construct does not return a value or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> based on the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



 



 



*•* The until construct executes any finally clause. Since thereis uses the <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> *special operator* to terminate iteration, any finally clause that is supplied is not evaluated when exit occurs due to thereis. 



The while construct allows iteration to continue until the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> evaluates to <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. The supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is reevaluated at the location of the while clause. 



The until construct is equivalent to while (not <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>)*. . .* . If the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm>, iteration terminates. 



Termination-test control constructs can be used anywhere within the loop body. The termination tests are used in the order in which they appear. If an until or while clause causes termination, any clauses that precede it in the source are still evaluated. If the until and while constructs cause termination, control is passed to the loop epilogue, where any finally clauses will be executed. 



There are two differences between the never and until constructs: 



*•* The until construct does not return <DictionaryLink styled={true} term={"t"}><b>t</b></DictionaryLink> or <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> based on the value of the supplied <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



*•* The until construct does not bypass any finally clauses. Since never uses the <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink> *special operator* to terminate iteration, any finally clause that is supplied is not evaluated when exit occurs due to never. 



In most cases it is not necessary to use <DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> because other loop control clauses terminate the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>. The macro <DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> is used to provide a normal exit from a nested conditional inside a <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>. Since <DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> transfers control to the loop epilogue, using <DictionaryLink styled={true} term={"loop-finish"}><b>loop-finish</b></DictionaryLink> within a finally expression can cause infinite looping. 



