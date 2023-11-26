 

These rules define the congruence of a set of *lambda lists*, including the *lambda list* of each method for a given generic function and the *lambda list* specified for the generic function itself, if given. 

1\. Each *lambda list* must have the same number of required parameters. 

2\. Each *lambda list* must have the same number of optional parameters. Each method can supply its own default for an optional parameter. 

3\. If any *lambda list* mentions **&rest** or **&key**, each *lambda list* must mention one or both of them. 

Objects **7–19**

 

 

4\. If the *generic function lambda list* mentions **&key**, each method must accept all of the keyword names mentioned after **&key**, either by accepting them explicitly, by specifying **&allow-other-keys**, or by specifying **&rest** but not **&key**. Each method can accept additional keyword arguments of its own. The checking of the validity of keyword names is done in the generic function, not in each method. A method is invoked as if the keyword argument pair whose name is :allow-other-keys and whose value is *true* were supplied, though no such argument pair will be passed. 

5\. The use of **&allow-other-keys** need not be consistent across *lambda lists*. If **&allow-other-keys** is mentioned in the *lambda list* of any applicable *method* or of the *generic function*, any keyword arguments may be mentioned in the call to the *generic function*. 

6\. The use of **&aux** need not be consistent across methods. 

If a *method-defining operator* that cannot specify *generic function* options creates a *generic function*, and if the *lambda list* for the method mentions keyword arguments, the *lambda list* of the generic function will mention **&key** (but no keyword arguments). 

