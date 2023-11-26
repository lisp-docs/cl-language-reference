**6.1.6 Conditional Execution Clauses** 

The if, when, and unless constructs establish conditional control in a **loop**. If the test passes, the succeeding loop clause is executed. If the test does not pass, the succeeding clause is skipped, and program control moves to the clause that follows the *loop keyword* else. If the test does not pass and no else clause is supplied, control is transferred to the clause or construct following the entire 

conditional clause. 

If conditional clauses are nested, each else is paired with the closest preceding conditional clause that has no associated else or end. 

In the if and when clauses, which are synonymous, the test passes if the value of *form* is *true*. In the unless clause, the test passes if the value of *form* is *false*. 

Clauses that follow the test expression can be grouped by using the *loop keyword* and to produce a conditional block consisting of a compound clause. 

The *loop keyword* it can be used to refer to the result of the test expression in a clause. Use the *loop keyword* it in place of the form in a return clause or an *accumulation* clause that is inside a conditional execution clause. If multiple clauses are connected with and, the it construct must be in the first clause in the block. 

The optional *loop keyword* end marks the end of the clause. If this keyword is not supplied, the next *loop keyword* marks the end. The construct end can be used to distinguish the scoping of compound clauses. 

Iteration **6–25**

 

 

