 



With the exceptions listed below, clauses are executed in the loop body in the order in which they appear in the source. Execution is repeated until a clause terminates the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> or until a <DictionaryLink styled={true} term={"return"}><b>return</b></DictionaryLink>, <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>, or <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> form is encountered which transfers control to a point outside of the loop. The following actions are exceptions to the linear order of execution: 



*•* All variables are initialized first, regardless of where the establishing clauses appear in the source. The order of initialization follows the order of these clauses. 







 



 



*•* The code for any initially clauses is collected into one <DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink> in the order in which the clauses appear in the source. The collected code is executed once in the loop prologue after any implicit variable initializations. 



*•* The code for any finally clauses is collected into one <DictionaryLink styled={true} term={"progn"}><b>progn</b></DictionaryLink> in the order in which the clauses appear in the source. The collected code is executed once in the loop epilogue before any implicit values from the accumulation clauses are returned. Explicit returns anywhere in the source, however, will exit the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> without executing the epilogue code. 



*•* A with clause introduces a variable <GlossaryTerm styled={true} term={"binding"}><i>binding</i></GlossaryTerm> and an optional initial value. The initial values are calculated in the order in which the with clauses occur. 



*•* Iteration control clauses implicitly perform the following actions: 



– initialize variables; 



– <GlossaryTerm styled={true} term={"step"}><i>step</i></GlossaryTerm> variables, generally between each execution of the loop body; 



– perform termination tests, generally just before the execution of the loop body. 



