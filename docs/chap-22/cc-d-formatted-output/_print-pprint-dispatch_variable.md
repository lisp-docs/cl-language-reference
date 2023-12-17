*∗***print-pprint-dispatch***∗ Variable* 



**Value Type:** 



a *pprint dispatch table*. 



**Initial Value:** 



*implementation-dependent*, but the initial entries all use a special class of priorities that have the property that they are less than every priority that can be specified using **set-pprint-dispatch**, so that the initial contents of any entry can be overridden. 



**Description:** 



The *pprint dispatch table* which currently controls the *pretty printer* . 



**See Also:** 



**\*print-pretty\***, Section 22.2.1.4 (Pretty Print Dispatch Tables) 



**Notes:** 



The intent is that the initial *value* of this *variable* should cause ‘traditional’ *pretty printing* of *code*. In general, however, you can put a value in **\*print-pprint-dispatch\*** that makes pretty-printed output look exactly like non-pretty-printed output. Setting **\*print-pretty\*** to *true* just causes the functions contained in the *current pprint dispatch table* to have priority over normal **print-object** methods; it has no magic way of enforcing that those functions actually produce pretty output. For details, see Section 22.2.1.4 (Pretty Print Dispatch Tables). 



