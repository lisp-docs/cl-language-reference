 

With the exceptions listed below, clauses are executed in the loop body in the order in which they appear in the source. Execution is repeated until a clause terminates the **loop** or until a **return**, **go**, or **throw** form is encountered which transfers control to a point outside of the loop. The following actions are exceptions to the linear order of execution: 

*•* All variables are initialized first, regardless of where the establishing clauses appear in the source. The order of initialization follows the order of these clauses. 

Iteration **6–5**

 

 

*•* The code for any initially clauses is collected into one **progn** in the order in which the clauses appear in the source. The collected code is executed once in the loop prologue after any implicit variable initializations. 

*•* The code for any finally clauses is collected into one **progn** in the order in which the clauses appear in the source. The collected code is executed once in the loop epilogue before any implicit values from the accumulation clauses are returned. Explicit returns anywhere in the source, however, will exit the **loop** without executing the epilogue code. 

*•* A with clause introduces a variable *binding* and an optional initial value. The initial values are calculated in the order in which the with clauses occur. 

*•* Iteration control clauses implicitly perform the following actions: 

– initialize variables; 

– *step* variables, generally between each execution of the loop body; 

– perform termination tests, generally just before the execution of the loop body. 

