 



The if and when constructs take one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> as a test and a clause that is executed when the test *yields true*. The clause can be a value accumulation, unconditional, or another conditional clause; it can also be any combination of such clauses connected by the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> and keyword. 



The <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> unless construct is similar to the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> when construct except that it complements the test result. 



The <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> else construct provides an optional component of if, when, and unless clauses that is executed when an if or when test *yields false* or when an unless test *yields true*. The component is one of the clauses described under if. 



The <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> end construct provides an optional component to mark the end of a conditional clause. For more information, see Section 6.1.6 (Conditional Execution Clauses). 



