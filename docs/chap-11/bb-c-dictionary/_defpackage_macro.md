**defpackage** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> *defined-package-name* [[ *↓option* ]] *→ package* 



*option::*=*\{*(:nicknames <GlossaryTerm styled={true} term={"nickname"}><i>\{nickname\}</i></GlossaryTerm>\*)*\}*\* *|* 



(:documentation <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>) *|* 



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



<GlossaryTerm styled={true} term={"nickname"}><i>nickname</i></GlossaryTerm>—a *string designator* . 



*symbol-name*—a *string designator* . 



<GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>—the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> named *package-name*. 



**Description:** 



<DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> creates a <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> as specified and returns the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



If *defined-package-name* already refers to an existing <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, the name-to-package mapping for that name is not changed. If the new definition is at variance with the current state of that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, the consequences are undefined; an implementation might choose to modify the existing <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> to reflect the new definition. If *defined-package-name* is a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>, its <GlossaryTerm styled={true} term={"name"}><i>name</i></GlossaryTerm> is used. 



The standard *options* are described below. 



:nicknames 



The arguments to :nicknames set the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>’s nicknames to the supplied names. 



:documentation 



The argument to :documentation specifies a *documentation string*; it is attached as a 



 



 



<DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> 



*documentation string* to the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. At most one :documentation option can appear in a single <DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



:use 



The arguments to :use set the <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm> that the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> named by *package-name* will inherit from. If :use is not supplied, it defaults to the same <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> value as the :use <GlossaryTerm styled={true} term={"argument"}><i>argument</i></GlossaryTerm> to <DictionaryLink styled={true} term={"make-package"}><b>make-package</b></DictionaryLink>. 



:shadow 



The arguments to :shadow, *symbol-names*, name <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> that are to be created in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> being defined. These <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> are added to the list of shadowing <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> effectively as if by <DictionaryLink styled={true} term={"shadow"}><b>shadow</b></DictionaryLink>. 



:shadowing-import-from 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> named by the argument *symbol-names* are found (involving a lookup as if by <DictionaryLink styled={true} term={"find-symbol"}><b>find-symbol</b></DictionaryLink>) in the specified *package-name*. The resulting <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> are *imported* into the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> being defined, and placed on the shadowing symbols list as if by <DictionaryLink styled={true} term={"shadowing-import"}><b>shadowing-import</b></DictionaryLink>. In no case are <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> created in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> other than the one being defined. 



:import-from 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> named by the argument *symbol-names* are found in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> named by *package-name* and they are *imported* into the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> being defined. In no case are <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> created in any <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> other than the one being defined. 



:export 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> named by the argument *symbol-names* are found or created in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> being defined and <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm>. The :export option interacts with the :use option, since inherited <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> can be used rather than new ones created. The :export option interacts with the :import-from and :shadowing-import-from options, since *imported* symbols can be used rather than new ones created. If an argument to the :export option is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> as an (inherited) *internal symbol* via <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>, that the <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> named by *symbol-name* is first *imported* into the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> being defined, and is then <GlossaryTerm styled={true} term={"exported"}><i>exported</i></GlossaryTerm> from that <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. 



:intern 



The <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> named by the argument *symbol-names* are found or created in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> being defined. The :intern option interacts with the :use option, since inherited <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> can be used rather than new ones created. 



:size 



The argument to the :size option declares the approximate number of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> expected in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>. This is an efficiency hint only and might be ignored by an implementation. 







 



 



<DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> 



The order in which the options appear in a <DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> form is irrelevant. The order in which they are executed is as follows: 



1\. :shadow and :shadowing-import-from. 



2\. :use. 



3\. :import-from and :intern. 



4\. :export. 



Shadows are established first, since they might be necessary to block spurious name conflicts when the :use option is processed. The :use option is executed next so that :intern and :export options can refer to normally inherited <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm>. The :export option is executed last so that it can refer to <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> created by any of the other options; in particular, *shadowing symbols* and *imported symbols* can be made external. 



If a defpackage <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> appears as a *top level form*, all of the actions normally performed by this <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> at load time must also be performed at compile time. 



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



Existing <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>. 



**Exceptional Situations:** 



If one of the supplied :nicknames already refers to an existing <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled. 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> should be signaled if :size or :documentation appears more than once. 







 



 



<DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> 



Since <GlossaryTerm styled={true} term={"implementation"}><i>implementations</i></GlossaryTerm> might allow extended *options* an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> should be signaled if an *option* is present that is not actually supported in the host <GlossaryTerm styled={true} term={"implementation"}><i>implementation</i></GlossaryTerm>. 



The collection of *symbol-name* arguments given to the options :shadow, :intern, :import-from, and :shadowing-import-from must all be disjoint; additionally, the *symbol-name* arguments given to :export and :intern must be disjoint. Disjoint in this context is defined as no two of the *symbol-names* being <DictionaryLink styled={true} term={"string"}><b>string=</b></DictionaryLink> with each other. If either condition is violated, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"program-error"}><b>program-error</b></DictionaryLink> should be signaled. 



For the :shadowing-import-from and :import-from options, a *correctable error* of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"package-error"}><b>package-error</b></DictionaryLink> is signaled if no <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"accessible"}><i>accessible</i></GlossaryTerm> in the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> named by *package-name* for one of the argument *symbol-names*. 



Name conflict errors are handled by the underlying calls to <DictionaryLink styled={true} term={"make-package"}><b>make-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>, and <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink>. See Section 11.1 (Package Concepts). 



**See Also:** 



**documentation**, Section 11.1 (Package Concepts), Section 3.2 (Compilation) 



**Notes:** 



The :intern option is useful if an :import-from or a :shadowing-import-from option in a subsequent call to <DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> (for some other <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>) expects to find these *symbols accessible* but not necessarily external. 



It is recommended that the entire <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> definition is put in a single place, and that all the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm> definitions of a program are in a single file. This file can be *loaded* before *loading* or compiling anything else that depends on those <GlossaryTerm styled={true} term={"package"}><i>packages</i></GlossaryTerm>. Such a file can be read in the COMMON-LISP-USER <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>, avoiding any initial state issues. 



<DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> cannot be used to create two “mutually recursive” packages, such as: 



(defpackage my-package 



(:use common-lisp your-package) ;requires your-package to exist first 



(:export "MY-FUN")) 



(defpackage your-package 



(:use common-lisp) 



(:import-from my-package "MY-FUN") ;requires my-package to exist first 



(:export "MY-FUN")) 



However, nothing prevents the user from using the <GlossaryTerm styled={true} term={"package"}><i>package</i></GlossaryTerm>-affecting functions such as <DictionaryLink styled={true} term={"use-package"}><b>use-package</b></DictionaryLink>, <DictionaryLink styled={true} term={"import"}><b>import</b></DictionaryLink>, and <DictionaryLink styled={true} term={"export"}><b>export</b></DictionaryLink> to establish such links after a more standard use of <DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink>. 



The macroexpansion of <DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> could usefully canonicalize the names into <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>, so that even if a source file has random <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> in the <DictionaryLink styled={true} term={"defpackage"}><b>defpackage</b></DictionaryLink> form, the compiled file would only contain <GlossaryTerm styled={true} term={"string"}><i>strings</i></GlossaryTerm>. 



Frequently additional <GlossaryTerm styled={true} term={"implementation-dependent"}><i>implementation-dependent</i></GlossaryTerm> options take the form of a <GlossaryTerm styled={true} term={"keyword"}><i>keyword</i></GlossaryTerm> standing by itself as an abbreviation for a list (keyword T); this syntax should be properly reported as an 







 



 



unrecognized option in implementations that do not support it. 



