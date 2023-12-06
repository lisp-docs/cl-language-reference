**defpackage** *Macro* 



**Syntax:** 



**defpackage** *defined-package-name* [[ *↓option* ]] *→ package* 



*option::*=*\{*(:nicknames *\{nickname\}*\*)*\}*\* *|* 



(:documentation *string*) *|* 



*\{*(:use *\{package-name\}*\*)*\}*\* *|* 



*\{*(:shadow *\{↓symbol-name\}*\*)*\}*\* *|* 



*\{*(:shadowing-import-from *package-name \{↓symbol-name\}*\*)*\}*\* *|* 



*\{*(:import-from *package-name \{↓symbol-name\}*\*)*\}*\* *|* 



*\{*(:export *\{↓symbol-name\}*\*)*\}*\* *|* 



*\{*(:intern *\{↓symbol-name\}*\*)*\}*\* *|* 



(:size *integer* ) 



**Arguments and Values:** 



*defined-package-name*—a *string designator* . 



*package-name*—a *package designator* . 



*nickname*—a *string designator* . 



*symbol-name*—a *string designator* . 



*package*—the *package* named *package-name*. 



**Description:** 



**defpackage** creates a *package* as specified and returns the *package*. 



If *defined-package-name* already refers to an existing *package*, the name-to-package mapping for that name is not changed. If the new definition is at variance with the current state of that *package*, the consequences are undefined; an implementation might choose to modify the existing *package* to reflect the new definition. If *defined-package-name* is a *symbol*, its *name* is used. 



The standard *options* are described below. 



:nicknames 



The arguments to :nicknames set the *package*’s nicknames to the supplied names. 



:documentation 



The argument to :documentation specifies a *documentation string*; it is attached as a 



 



 



**defpackage** 



*documentation string* to the *package*. At most one :documentation option can appear in a single **defpackage** *form*. 



:use 



The arguments to :use set the *packages* that the *package* named by *package-name* will inherit from. If :use is not supplied, it defaults to the same *implementation-dependent* value as the :use *argument* to **make-package**. 



:shadow 



The arguments to :shadow, *symbol-names*, name *symbols* that are to be created in the *package* being defined. These *symbols* are added to the list of shadowing *symbols* effectively as if by **shadow**. 



:shadowing-import-from 



The *symbols* named by the argument *symbol-names* are found (involving a lookup as if by **find-symbol**) in the specified *package-name*. The resulting *symbols* are *imported* into the *package* being defined, and placed on the shadowing symbols list as if by **shadowing-import**. In no case are *symbols* created in any *package* other than the one being defined. 



:import-from 



The *symbols* named by the argument *symbol-names* are found in the *package* named by *package-name* and they are *imported* into the *package* being defined. In no case are *symbols* created in any *package* other than the one being defined. 



:export 



The *symbols* named by the argument *symbol-names* are found or created in the *package* being defined and *exported*. The :export option interacts with the :use option, since inherited *symbols* can be used rather than new ones created. The :export option interacts with the :import-from and :shadowing-import-from options, since *imported* symbols can be used rather than new ones created. If an argument to the :export option is *accessible* as an (inherited) *internal symbol* via **use-package**, that the *symbol* named by *symbol-name* is first *imported* into the *package* being defined, and is then *exported* from that *package*. 



:intern 



The *symbols* named by the argument *symbol-names* are found or created in the *package* being defined. The :intern option interacts with the :use option, since inherited *symbols* can be used rather than new ones created. 



:size 



The argument to the :size option declares the approximate number of *symbols* expected in the *package*. This is an efficiency hint only and might be ignored by an implementation. 







 



 



**defpackage** 



The order in which the options appear in a **defpackage** form is irrelevant. The order in which they are executed is as follows: 



1\. :shadow and :shadowing-import-from. 



2\. :use. 



3\. :import-from and :intern. 



4\. :export. 



Shadows are established first, since they might be necessary to block spurious name conflicts when the :use option is processed. The :use option is executed next so that :intern and :export options can refer to normally inherited *symbols*. The :export option is executed last so that it can refer to *symbols* created by any of the other options; in particular, *shadowing symbols* and *imported symbols* can be made external. 



If a defpackage *form* appears as a *top level form*, all of the actions normally performed by this *macro* at load time must also be performed at compile time. 



**Examples:**
```lisp
 

(defpackage "MY-PACKAGE" 

(:nicknames "MYPKG" "MY-PKG") 

(:use "COMMON-LISP") 

(:shadow "CAR" "CDR") 

(:shadowing-import-from "VENDOR-COMMON-LISP" "CONS") 

(:import-from "VENDOR-COMMON-LISP" "GC") 

(:export "EQ" "CONS" "FROBOLA") 

) 

(defpackage my-package 

(:nicknames mypkg :MY-PKG) ; remember Common Lisp conventions for case 

(:use common-lisp) ; conversion on symbols 

(:shadow CAR :cdr #:cons) 

(:export "CONS") ; this is the shadowed one. 

) 


```
**Affected By:** 



Existing *packages*. 



**Exceptional Situations:** 



If one of the supplied :nicknames already refers to an existing *package*, an error of *type* **package-error** is signaled. 



An error of *type* **program-error** should be signaled if :size or :documentation appears more than once. 







 



 



**defpackage** 



Since *implementations* might allow extended *options* an error of *type* **program-error** should be signaled if an *option* is present that is not actually supported in the host *implementation*. 



The collection of *symbol-name* arguments given to the options :shadow, :intern, :import-from, and :shadowing-import-from must all be disjoint; additionally, the *symbol-name* arguments given to :export and :intern must be disjoint. Disjoint in this context is defined as no two of the *symbol-names* being **string=** with each other. If either condition is violated, an error of *type* **program-error** should be signaled. 



For the :shadowing-import-from and :import-from options, a *correctable error* of *type* **package-error** is signaled if no *symbol* is *accessible* in the *package* named by *package-name* for one of the argument *symbol-names*. 



Name conflict errors are handled by the underlying calls to **make-package**, **use-package**, **import**, and **export**. See Section 11.1 (Package Concepts). 



**See Also:** 



**documentation**, Section 11.1 (Package Concepts), Section 3.2 (Compilation) 



**Notes:** 



The :intern option is useful if an :import-from or a :shadowing-import-from option in a subsequent call to **defpackage** (for some other *package*) expects to find these *symbols accessible* but not necessarily external. 



It is recommended that the entire *package* definition is put in a single place, and that all the *package* definitions of a program are in a single file. This file can be *loaded* before *loading* or compiling anything else that depends on those *packages*. Such a file can be read in the COMMON-LISP-USER *package*, avoiding any initial state issues. 



**defpackage** cannot be used to create two “mutually recursive” packages, such as: 



(defpackage my-package 



(:use common-lisp your-package) ;requires your-package to exist first 



(:export "MY-FUN")) 



(defpackage your-package 



(:use common-lisp) 



(:import-from my-package "MY-FUN") ;requires my-package to exist first 



(:export "MY-FUN")) 



However, nothing prevents the user from using the *package*-affecting functions such as **use-package**, **import**, and **export** to establish such links after a more standard use of **defpackage**. 



The macroexpansion of **defpackage** could usefully canonicalize the names into *strings*, so that even if a source file has random *symbols* in the **defpackage** form, the compiled file would only contain *strings*. 



Frequently additional *implementation-dependent* options take the form of a *keyword* standing by itself as an abbreviation for a list (keyword T); this syntax should be properly reported as an 







 



 



unrecognized option in implementations that do not support it. 



