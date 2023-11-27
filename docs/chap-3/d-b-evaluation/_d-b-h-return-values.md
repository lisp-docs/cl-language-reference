 

Ordinarily the result of calling a *function* is a single *object*. Sometimes, however, it is convenient for a function to compute several *objects* and return them. 

In order to receive other than exactly one value from a *form*, one of several *special forms* or *macros* must be used to request those values. If a *form* produces *multiple values* which were not requested in this way, then the first value is given to the caller and all others are discarded; if the *form* produces zero values, then the caller receives **nil** as a value. 

Figure 3–5 lists some *operators* for receiving *multiple values*&#60;sub&#62;2&#60;/sub&#62;. These *operators* can be used to specify one or more *forms* to *evaluate* and where to put the *values* returned by those *forms*. 

|&#60;p&#62;**multiple-value-bind multiple-value-prog1 return-from multiple-value-call multiple-value-setq throw** &#60;/p&#62;&#60;p&#62;**multiple-value-list return**&#60;/p&#62;|
| :- |


**Figure 3–5. Some operators applicable to receiving multiple values** 

The *function* **values** can produce *multiple values*&#60;sub&#62;2&#60;/sub&#62;. (values) returns zero values; (values *form*) returns the *primary value* returned by *form*; (values *form1 form2*) returns two values, the *primary value* of *form1* and the *primary value* of *form2*; and so on. 

See **multiple-values-limit** and **values-list**.  



