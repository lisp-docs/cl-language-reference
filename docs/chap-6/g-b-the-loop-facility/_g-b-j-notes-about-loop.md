 



<ClLinks styled={true} term={"type"}><i>Types</i></ClLinks> can be supplied for loop variables. It is not necessary to supply a <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> for any variable, but supplying the <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> can ensure that the variable has a correctly typed initial value, and it can also enable compiler optimizations (depending on the <ClLinks styled={true} term={"implementation"}><i>implementation</i></ClLinks>). 



The clause repeat *n* ... is roughly equivalent to a clause such as 



(loop for *internal-variable* downfrom (- *n* 1) to 0 ...) 



but in some <ClLinks styled={true} term={"implementation"}><i>implementations</i></ClLinks>, the repeat construct might be more efficient. 



Within the executable parts of the loop clauses and around the entire <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> form, variables can be bound by using <ClLinks styled={true} term={"let"}><b>let</b></ClLinks>. 



Use caution when using a variable named IT (in any <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>) in connection with <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>, since it is a *loop keyword* that can be used in place of a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in certain contexts. 



There is no <ClLinks styled={true} term={"standardized"}><i>standardized</i></ClLinks> mechanism for users to add extensions to <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. 







 



 



