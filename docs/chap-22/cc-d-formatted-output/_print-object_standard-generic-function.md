**print-object** *Standard Generic Function* 



**Syntax:** 



**print-object** *object stream → object* 



**Method Signatures:** 



**print-object** (*object standard-object*) *stream* 



**print-object** (*object structure-object*) *stream* 



**Arguments and Values:** 



*object*—an *object*. 



*stream*—a *stream*. 







 



 



**print-object** 



**Description:** 



The *generic function* **print-object** writes the printed representation of *object* to *stream*. The *function* **print-object** is called by the *Lisp printer* ; it should not be called by the user. 



Each implementation is required to provide a *method* on the *class* **standard-object** and on the *class* **structure-object**. In addition, each *implementation* must provide *methods* on enough other *classes* so as to ensure that there is always an applicable *method*. Implementations are free to add *methods* for other *classes*. Users may write *methods* for **print-object** for their own *classes* if they do not wish to inherit an *implementation-dependent method*. 



The *method* on the *class* **structure-object** prints the object in the default #S notation; see Section 22.1.3.12 (Printing Structures). 



*Methods* on **print-object** are responsible for implementing their part of the semantics of the *printer control variables*, as follows: 



**\*print-readably\*** 



All methods for **print-object** must obey **\*print-readably\***. This includes both user-defined methods and *implementation-defined* methods. Readable printing of *structures* and *standard objects* is controlled by their **print-object** method, not by their **make-load-form** *method*. *Similarity* for these *objects* is application dependent and hence is defined to be whatever these *methods* do; see Section 3.2.4.2 (Similarity of Literal Objects). 



**\*print-escape\*** 



Each *method* must implement **\*print-escape\***. 



**\*print-pretty\*** 



The *method* may wish to perform specialized line breaking or other output conditional on the *value* of **\*print-pretty\***. For further information, see (for example) the *macro* **pprint-fill**. See also Section 22.2.1.4 (Pretty Print Dispatch Tables) and Section 22.2.2 (Examples of using the Pretty Printer). 



**\*print-length\*** 



*Methods* that produce output of indefinite length must obey **\*print-length\***. For further information, see (for example) the *macros* **pprint-logical-block** and **pprint-pop**. See also Section 22.2.1.4 (Pretty Print Dispatch Tables) and Section 22.2.2 (Examples of using the Pretty Printer). 



**\*print-level\*** 



The printer takes care of **\*print-level\*** automatically, provided that each *method* handles exactly one level of structure and calls **write** (or an equivalent *function*) recursively if there are more structural levels. The printer’s decision of whether an *object* has components (and 







 



 



therefore should not be printed when the printing depth is not less than **\*print-level\***) is *implementation-dependent*. In some implementations its **print-object** *method* is not called; in others the *method* is called, and the determination that the *object* has components is based on what it tries to write to the *stream*. 



**\*print-circle\*** 



When the *value* of **\*print-circle\*** is *true*, a user-defined **print-object** *method* can print *objects* to the supplied *stream* using **write**, **prin1**, **princ**, or **format** and expect circularities to be detected and printed using the #*n*# syntax. If a user-defined **print-object** *method* prints to a *stream* other than the one that was supplied, then circularity detection starts over for that *stream*. See **\*print-circle\***. 



**\*print-base\***, **\*print-radix\***, **\*print-case\***, **\*print-gensym\***, and **\*print-array\*** 



These *printer control variables* apply to specific types of *objects* and are handled by the *methods* for those *objects*. 



If these rules are not obeyed, the results are undefined. 



In general, the printer and the **print-object** methods should not rebind the print control variables as they operate recursively through the structure, but this is *implementation-dependent*. 



In some implementations the *stream* argument passed to a **print-object** *method* is not the original *stream*, but is an intermediate *stream* that implements part of the printer. *methods* should therefore not depend on the identity of this *stream*. 



**See Also:** 



**pprint-fill**, **pprint-logical-block**, **pprint-pop**, **write**, **\*print-readably\***, **\*print-escape\***, **\*print-pretty\***, **\*print-length\***, Section 22.1.3 (Default Print-Object Methods), Section 22.1.3.12 (Printing Structures), Section 22.2.1.4 (Pretty Print Dispatch Tables), Section 22.2.2 (Examples of using the Pretty Printer) 



