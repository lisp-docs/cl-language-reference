 



The repeat construct causes iteration to terminate after a specified number of times. The loop body executes *n* times, where *n* is the value of the expression <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. The <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> argument is evaluated one time in the loop prologue. If the expression evaluates to 0 or to a negative <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> , the loop body is not evaluated. 



The constructs always, never, thereis, while, until, and the macro <ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> allow conditional termination of iteration within a <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. 



The constructs always, never, and thereis provide specific values to be returned when a <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> terminates. Using always, never, or thereis in a loop with value accumulation clauses that are not into causes an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"program-error"}><b>program-error</b></ClLinks> to be signaled (at macro expansion time). Since always, never, and thereis use the <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> to terminate iteration, any finally clause that is supplied is not evaluated when exit occurs due to any of these constructs. In all other respects these constructs behave like the while and until constructs. 



The always construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> and terminates the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> if the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> ever evaluates to <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>; in this case, it returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. Otherwise, it provides a default return value of <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. If the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is never <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, some other construct can terminate the iteration. 



The never construct terminates iteration the first time that the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>; the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. If the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is always <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, some other construct can terminate the iteration. Unless some other clause contributes a return value, the default value returned is <ClLinks styled={true} term={"t"}><b>t</b></ClLinks>. 



The thereis construct terminates iteration the first time that the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>; the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> returns the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. If the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is always <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>, some other construct can terminate the iteration. Unless some other clause contributes a return value, the default value returned is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>. 



There are two differences between the thereis and until constructs: 



*•* The until construct does not return a value or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> based on the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



 



 



*•* The until construct executes any finally clause. Since thereis uses the <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> to terminate iteration, any finally clause that is supplied is not evaluated when exit occurs due to thereis. 



The while construct allows iteration to continue until the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> evaluates to <ClLinks styled={true} term={"false"}><i>false</i></ClLinks>. The supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is reevaluated at the location of the while clause. 



The until construct is equivalent to while (not <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>)*. . .* . If the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks>, iteration terminates. 



Termination-test control constructs can be used anywhere within the loop body. The termination tests are used in the order in which they appear. If an until or while clause causes termination, any clauses that precede it in the source are still evaluated. If the until and while constructs cause termination, control is passed to the loop epilogue, where any finally clauses will be executed. 



There are two differences between the never and until constructs: 



*•* The until construct does not return <ClLinks styled={true} term={"t"}><b>t</b></ClLinks> or <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> based on the value of the supplied <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



*•* The until construct does not bypass any finally clauses. Since never uses the <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> <GlossaryTerm styled={true} term={"special operator"}><i>special operator</i></GlossaryTerm> to terminate iteration, any finally clause that is supplied is not evaluated when exit occurs due to never. 



In most cases it is not necessary to use <ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> because other loop control clauses terminate the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. The macro <ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> is used to provide a normal exit from a nested conditional inside a <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. Since <ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> transfers control to the loop epilogue, using <ClLinks styled={true} term={"loop-finish"}><b>loop-finish</b></ClLinks> within a finally expression can cause infinite looping. 



