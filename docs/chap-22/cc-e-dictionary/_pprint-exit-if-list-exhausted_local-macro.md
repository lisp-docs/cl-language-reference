**pprint-exit-if-list-exhausted** *Local Macro* 



**Syntax:** 



**pprint-exit-if-list-exhausted** *⟨no arguments⟩ →* **nil** 



**Description:** 



Tests whether or not the *list* passed to the *lexically current logical block* has been exhausted; see Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). If this *list* has been reduced to **nil**, **pprint-exit-if-list-exhausted** terminates the execution of the *lexically current logical block* except for the printing of the suffix. Otherwise **pprint-exit-if-list-exhausted** returns **nil**. 



Whether or not **pprint-exit-if-list-exhausted** is *fbound* in the *global environment* is *implementation dependent*; however, the restrictions on redefinition and *shadowing* of **pprint-exit-if-list-exhausted** are the same as for *symbols* in the COMMON-LISP *package* which are *fbound* in the *global environment*. The consequences of attempting to use **pprint-exit-if-list-exhausted** outside of **pprint-logical-block** are undefined. 



**Exceptional Situations:** 



An error is signaled (at macro expansion time or at run time) if **pprint-exit-if-list-exhausted** is used anywhere other than lexically within a call on **pprint-logical-block**. Also, the consequences of executing **pprint-if-list-exhausted** outside of the dynamic extent of the **pprint-logical-block** which lexically contains it are undefined. 



**See Also:** 



**pprint-logical-block**, **pprint-pop**. 







 



 



**pprint-fill, pprint-linear, pprint-tabular** 



