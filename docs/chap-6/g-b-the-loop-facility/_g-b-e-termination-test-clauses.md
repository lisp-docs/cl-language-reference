 

The repeat construct causes iteration to terminate after a specified number of times. The loop body executes *n* times, where *n* is the value of the expression *form*. The *form* argument is evaluated one time in the loop prologue. If the expression evaluates to 0 or to a negative *number* , the loop body is not evaluated. 

The constructs always, never, thereis, while, until, and the macro **loop-finish** allow conditional termination of iteration within a **loop**. 

The constructs always, never, and thereis provide specific values to be returned when a **loop** terminates. Using always, never, or thereis in a loop with value accumulation clauses that are not into causes an error of *type* **program-error** to be signaled (at macro expansion time). Since always, never, and thereis use the **return-from** *special operator* to terminate iteration, any finally clause that is supplied is not evaluated when exit occurs due to any of these constructs. In all other respects these constructs behave like the while and until constructs. 

The always construct takes one *form* and terminates the **loop** if the *form* ever evaluates to **nil**; in this case, it returns **nil**. Otherwise, it provides a default return value of **t**. If the value of the supplied *form* is never **nil**, some other construct can terminate the iteration. 

The never construct terminates iteration the first time that the value of the supplied *form* is *non-nil*; the **loop** returns **nil**. If the value of the supplied *form* is always **nil**, some other construct can terminate the iteration. Unless some other clause contributes a return value, the default value returned is **t**. 

The thereis construct terminates iteration the first time that the value of the supplied *form* is *non-nil*; the **loop** returns the value of the supplied *form*. If the value of the supplied *form* is always **nil**, some other construct can terminate the iteration. Unless some other clause contributes a return value, the default value returned is **nil**. 

There are two differences between the thereis and until constructs: 

*•* The until construct does not return a value or **nil** based on the value of the supplied *form*. Iteration **6–21**

 

 

*•* The until construct executes any finally clause. Since thereis uses the **return-from** *special operator* to terminate iteration, any finally clause that is supplied is not evaluated when exit occurs due to thereis. 

The while construct allows iteration to continue until the supplied *form* evaluates to *false*. The supplied *form* is reevaluated at the location of the while clause. 

The until construct is equivalent to while (not *form*)*. . .* . If the value of the supplied *form* is *non-nil*, iteration terminates. 

Termination-test control constructs can be used anywhere within the loop body. The termination tests are used in the order in which they appear. If an until or while clause causes termination, any clauses that precede it in the source are still evaluated. If the until and while constructs cause termination, control is passed to the loop epilogue, where any finally clauses will be executed. 

There are two differences between the never and until constructs: 

*•* The until construct does not return **t** or **nil** based on the value of the supplied *form*. 

*•* The until construct does not bypass any finally clauses. Since never uses the **return-from** *special operator* to terminate iteration, any finally clause that is supplied is not evaluated when exit occurs due to never. 

In most cases it is not necessary to use **loop-finish** because other loop control clauses terminate the **loop**. The macro **loop-finish** is used to provide a normal exit from a nested conditional inside a **loop**. Since **loop-finish** transfers control to the loop epilogue, using **loop-finish** within a finally expression can cause infinite looping. 

