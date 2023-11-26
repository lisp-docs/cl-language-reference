 

A **values** *form* can be used as a *place*, provided that each of its *subforms* is also a *place* form. A form such as 

(setf (values *place-1 . . . place-n*) *values-form*) 

does the following: 

1\. The *subforms* of each nested *place* are evaluated in left-to-right order. 

2\. The *values-form* is evaluated, and the first store variable from each *place* is bound to its return values as if by **multiple-value-bind**. 

3\. If the *setf expansion* for any *place* involves more than one store variable, then the additional store variables are bound to **nil**. 

4\. The storing forms for each *place* are evaluated in left-to-right order. 

The storing form in the *setf expansion* of **values** returns as *multiple values*\<sub\>2\</sub\> the values of the store variables in step 2. That is, the number of values returned is the same as the number of *place* forms. This may be more or fewer values than are produced by the *values-form*. 

