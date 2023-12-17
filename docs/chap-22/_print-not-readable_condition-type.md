**print-not-readable** *Condition Type* 



**Class Precedence List:** 



**print-not-readable**, **error**, **serious-condition**, **condition**, **t** 



**Description:** 



The *type* **print-not-readable** consists of error conditions that occur during output while **\*print-readably\*** is *true*, as a result of attempting to write a printed representation with the *Lisp printer* that would not be correctly read back with the *Lisp reader* . The object which could not be printed is initialized by the :object initialization argument to **make-condition**, and is *accessed* by the *function* **print-not-readable-object**. 



**See Also:** 



**print-not-readable-object** 



