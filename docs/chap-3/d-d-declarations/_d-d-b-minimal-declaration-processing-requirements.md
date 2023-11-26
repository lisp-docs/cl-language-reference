

 

In general, an *implementation* is free to ignore *declaration specifiers* except for the **declaration**, **notinline**, **safety**, and **special** *declaration specifiers*. 

A **declaration** *declaration* must suppress warnings about unrecognized *declarations* of the kind that it declares. If an *implementation* does not produce warnings about unrecognized declarations, it may safely ignore this *declaration*. 

A **notinline** *declaration* must be recognized by any *implementation* that supports inline functions or *compiler macros* in order to disable those facilities. An *implementation* that does not use inline functions or *compiler macros* may safely ignore this *declaration*. 

A **safety** *declaration* that increases the current safety level must always be recognized. An *implementation* that always processes code as if safety were high may safely ignore this *declaration*. 

A **special** *declaration* must be processed by all *implementations*. 

