 



Iteration control clauses allow direction of <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink> iteration. The *loop keywords* for and as designate iteration control clauses. Iteration control clauses differ with respect to the specification of termination tests and to the initialization and *stepping*<sub>1</sub> of loop variables. Iteration clauses by themselves do not cause the Loop Facility to return values, but they can be used in conjunction with value-accumulation clauses to return values. 



All variables are initialized in the loop prologue. A *variable binding* has *lexical scope* unless it is proclaimed <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink>; thus, by default, the variable can be *accessed* only by <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> that lie textually within the <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>. Stepping assignments are made in the loop body before any other <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are evaluated in the body. 



The variable argument in iteration control clauses can be a destructuring list. A destructuring list is a <GlossaryTerm styled={true} term={"tree"}><i>tree</i></GlossaryTerm> whose *non-nil atoms* are *variable names*. See Section 6.1.1.7 (Destructuring). 



The iteration control clauses for, as, and repeat must precede any other loop clauses, except initially, with, and named, since they establish variable <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm>. When iteration control clauses are used in a <DictionaryLink styled={true} term={"loop"}><b>loop</b></DictionaryLink>, the corresponding termination tests in the loop body are evaluated before any other loop body code is executed. 



If multiple iteration clauses are used to control iteration, variable initialization and *stepping*<sub>1</sub> occur <GlossaryTerm styled={true} term={"sequentially"}><i>sequentially</i></GlossaryTerm> by default. The and construct can be used to connect two or more iteration clauses when *sequential binding* and *stepping*<sub>1</sub> are not necessary. The iteration behavior of clauses joined by and is analogous to the behavior of the macro <DictionaryLink styled={true} term={"do"}><b>do</b></DictionaryLink> with respect to <DictionaryLink styled={true} term={"do"}><b>do\*</b></DictionaryLink>. 







 



 



The for and as clauses iterate by using one or more local loop variables that are initialized to some value and that can be modified or *stepped* <sub>1</sub> after each iteration. For these clauses, iteration terminates when a local variable reaches some supplied value or when some other loop clause terminates iteration. At each iteration, variables can be *stepped* <sub>1</sub> by an increment or a decrement or can be assigned a new value by the evaluation of a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>). Destructuring can be used to assign values to variables during iteration. 



The for and as keywords are synonyms; they can be used interchangeably. There are seven syntactic formats for these constructs. In each syntactic format, the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> of *var* can be supplied by the optional *type-spec* argument. If *var* is a destructuring list, the <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> supplied by the *type-spec* argument must appropriately match the elements of the list. By convention, for introduces new iterations and as introduces iterations that depend on a previous iteration specification. 



