**ignore, ignorable** *Declaration* 



**Syntax:** 



(ignore *\{var* | (**function** *fn*)*\}*\*) 



(ignorable *\{var* | (**function** *fn*)*\}*\*) 



**Arguments:** 



*var*—a *variable name*. 



*fn*—a *function name*. 



**Valid Context:** 



*declaration* 



**Binding Types Aected:** 



*variable*, *function* 



**Description:** 



The **ignore** and **ignorable** declarations refer to *for-value references* to *variable bindings* for the *vars* and to *function bindings* for the *fns*. 



An **ignore** *declaration* specifies that *for-value references* to the indicated *bindings* will not occur within the scope of the *declaration*. Within the *scope* of such a *declaration*, it is desirable for a compiler to issue a warning about the presence of either a *for-value reference* to any *var* or *fn*, or a **special** *declaration* for any *var*. 







 



 



An **ignorable** *declaration* specifies that *for-value references* to the indicated *bindings* might or might not occur within the scope of the *declaration*. Within the *scope* of such a *declaration*, it is not desirable for a compiler to issue a warning about the presence or absence of either a *for-value reference* to any *var* or *fn*, or a **special** *declaration* for any *var*. 



When not within the *scope* of a **ignore** or **ignorable** *declaration*, it is desirable for a compiler to issue a warning about any *var* for which there is neither a *for-value reference* nor a **special** *declaration*, or about any *fn* for which there is no *for-value reference*. 



Any warning about a “used” or “unused” *binding* must be of *type* **style-warning**, and may not a↵ect program semantics. 



The *stream variables* established by **with-open-file**, **with-open-stream**, **with-input-from-string**, and **with-output-to-string**, and all *iteration variables* are, by definition, always “used”. Using (declare (ignore *v*)), for such a *variable v* has unspecified consequences. 



**See Also:** 



**declare** 



