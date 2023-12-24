
 



The collect (or collecting) construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in its clause and adds the value of that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to the end of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of values. By default, the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of values is returned when the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> finishes. 



The append (or appending) construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in its clause and appends the value of that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> to the end of a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of values. By default, the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of values is returned when the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> finishes. 



The nconc (or nconcing) construct is similar to the append construct, but its <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> values are concatenated as if by the function nconc. By default, the <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of values is returned when the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> finishes. 







 



 



The sum (or summing) construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in its clause that must evaluate to a <ClLinks styled={true} term={"number"}><i>number</i></ClLinks> and accumulates the sum of all these <ClLinks styled={true} term={"number"}><i>numbers</i></ClLinks>. By default, the cumulative sum is returned when the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> finishes. 



The count (or counting) construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in its clause and counts the number of times that the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> evaluates to <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>. By default, the count is returned when the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> finishes. 



The minimize (or minimizing) construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in its clause and determines the minimum value obtained by evaluating that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. By default, the minimum value is returned when the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> finishes. 



The maximize (or maximizing) construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in its clause and determines the maximum value obtained by evaluating that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. By default, the maximum value is returned when the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> finishes. 



For more information, see Section 6.1.3 (Value Accumulation Clauses). 



