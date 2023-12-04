 



A *package* establishes a mapping from names to *symbols*. At any given time, one *package* is current. The *current package* is the one that is the *value* of **\*package\***. When using the *Lisp reader* , it is possible to refer to *symbols* in *packages* other than the current one through the use of *package prefixes* in the printed representation of the *symbol*. 



Figure 11–1 lists some *defined names* that are applicable to *packages*. Where an *operator* takes an argument that is either a *symbol* or a *list* of *symbols*, an argument of **nil** is treated as an empty *list* of *symbols*. Any *package* argument may be either a *string*, a *symbol*, or a *package*. If a *symbol* is supplied, its name will be used as the *package* name. 



|**\*modules\* import provide \*package\* in-package rename-package defpackage intern require do-all-symbols list-all-packages shadow do-external-symbols make-package shadowing-import do-symbols package-name unexport export package-nicknames unintern find-all-symbols package-shadowing-symbols unuse-package find-package package-use-list use-package find-symbol package-used-by-list**|

| :- |





**Figure 11–1. Some Defined Names related to Packages** 



