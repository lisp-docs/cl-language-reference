 

If **call-next-method** is called with *arguments*, the ordered set of *applicable methods* for the changed set of *arguments* for **call-next-method** must be the same as the ordered set of *applicable methods* for the original *arguments* to the *generic function*, or else an error should be signaled. 

The comparison between the set of methods applicable to the new arguments and the set applicable to the original arguments is insensitive to order differences among methods with the same specializers. 

If **call-next-method** is called with *arguments* that specify a different ordered set of *applicable* methods and there is no *next method* available, the test for different methods and the associated error signaling (when present) takes precedence over calling **no-next-method**.  



