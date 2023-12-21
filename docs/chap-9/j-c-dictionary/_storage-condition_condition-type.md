**storage-condition** *Condition Type* 



**Class Precedence List:** 



**storage-condition**, **serious-condition**, **condition**, **t** 



**Description:** 



The *type* **storage-condition** consists of serious conditions that relate to problems with memory management that are potentially due to *implementation-dependent* limits rather than semantic errors in *conforming programs*, and that typically warrant entry to the debugger if not handled. 



Depending on the details of the *implementation*, these might include such problems as stack overflow, memory region overflow, and storage exhausted. 



**Notes:** 



While some Common Lisp operations might signal *storage-condition* because they are defined to create *objects*, it is unspecified whether operations that are not defined to create *objects* create them anyway and so might also signal **storage-condition**. Likewise, the evaluator itself might create *objects* and so might signal **storage-condition**. (The natural assumption might be that such *object* creation is naturally inefficient, but even that is *implementation-dependent*.) In general, the entire question of how storage allocation is done is *implementation-dependent*, and so any operation might signal **storage-condition** at any time. Because such a *condition* is indicative of a limitation of the *implementation* or of the *image* rather than an error in a *program*, *objects* of *type* **storage-condition** are not of *type* **error**. 



