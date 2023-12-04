**describe** *Function* 



**Syntax:** 



**describe** *object* &optional *stream → hno valuesi* 



**Arguments and Values:** 



*object*—an *object*. 



*stream*—an *output stream designator* . The default is *standard output*. 



**Description:** 



**describe** displays information about *object* to *stream*. 



For example, **describe** of a *symbol* might show the *symbol*’s value, its definition, and each of its properties. **describe** of a *float* might show the number’s internal representation in a way that is useful for tracking down round-off errors. In all cases, however, the nature and format of the output of **describe** is *implementation-dependent*. 



**describe** can describe something that it finds inside the *object*; in such cases, a notational device such as increased indentation or positioning in a table is typically used in order to visually distinguish such recursive descriptions from descriptions of the argument *object*. 







 



 



The actual act of describing the object is implemented by **describe-object**. **describe** exists as an interface primarily to manage argument defaulting (including conversion of arguments **t** and **nil** into *stream objects*) and to inhibit any return values from **describe-object**. 



**describe** is not intended to be an interactive function. In a *conforming implementation*, **describe** must not, by default, prompt for user input. User-defined methods for **describe-object** are likewise restricted. 



**Side Effects:** 



Output to *standard output* or *terminal I/O*. 



**Affected By:** 



**\*standard-output\*** and **\*terminal-io\***, methods on **describe-object** and **print-object** for *objects* having user-defined *classes*. 



**See Also:** 



**inspect**, **describe-object** 



