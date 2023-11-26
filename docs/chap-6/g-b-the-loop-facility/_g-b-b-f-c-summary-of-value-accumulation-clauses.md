

 

The collect (or collecting) construct takes one *form* in its clause and adds the value of that *form* to the end of a *list* of values. By default, the *list* of values is returned when the **loop** finishes. 

The append (or appending) construct takes one *form* in its clause and appends the value of that *form* to the end of a *list* of values. By default, the *list* of values is returned when the **loop** finishes. 

The nconc (or nconcing) construct is similar to the append construct, but its *list* values are concatenated as if by the function nconc. By default, the *list* of values is returned when the **loop** finishes. 

Iteration **6–3**

 

 

The sum (or summing) construct takes one *form* in its clause that must evaluate to a *number* and accumulates the sum of all these *numbers*. By default, the cumulative sum is returned when the **loop** finishes. 

The count (or counting) construct takes one *form* in its clause and counts the number of times that the *form* evaluates to *true*. By default, the count is returned when the **loop** finishes. 

The minimize (or minimizing) construct takes one *form* in its clause and determines the minimum value obtained by evaluating that *form*. By default, the minimum value is returned when the **loop** finishes. 

The maximize (or maximizing) construct takes one *form* in its clause and determines the maximum value obtained by evaluating that *form*. By default, the maximum value is returned when the **loop** finishes. 

For more information, see Section 6.1.3 (Value Accumulation Clauses). 

