**values** *Type Specifier* 



**Compound Type Specifier Kind:** 



Specializing. 



**Compound Type Specifier Syntax:** 



(values *↓value-typespec*) 



*value-typespec::*=*\{typespec\}*\* [&amp;optional *\{typespec\}*\*] [&amp;rest *typespec*] [**&amp;allow-other-keys**] 



**Compound Type Specifier Arguments:** 



*typespec*—a *type specifier* . 



**Compound Type Specifier Description:** 



This *type specifier* can be used only as the *value-type* in a **function** *type specifier* or a **the** *special form*. It is used to specify individual *types* when *multiple values* are involved. The **&amp;optional** and **&amp;rest** markers can appear in the *value-type* list; they indicate the parameter list of a *function* that, when given to **multiple-value-call** along with the values, would correctly receive those values. 



The symbol **\*** may not be among the *value-types*. 



The symbol **values** is not valid as a *type specifier* ; and, specifically, it is not an abbreviation for (values).  







