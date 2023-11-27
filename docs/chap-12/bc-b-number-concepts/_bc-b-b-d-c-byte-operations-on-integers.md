 

The byte-manipulation *functions* use *objects* called *byte specifiers* to designate the size and position of a specific *byte* within an *integer* . The representation of a *byte specifier* is *implementation dependent*; it might or might not be a *number* . The *function* **byte** will construct a *byte specifier* , which various other byte-manipulation *functions* will accept. 

Figure 12–6 shows *defined names* relating to manipulating *bytes* of *numbers*. 

|&#60;p&#62;**byte deposit-field ldb-test** &#60;/p&#62;&#60;p&#62;**byte-position dpb mask-field** &#60;/p&#62;&#60;p&#62;**byte-size ldb**&#60;/p&#62;|
| :- |


**Figure 12–6. Defined names relating to byte manipulation.** 

