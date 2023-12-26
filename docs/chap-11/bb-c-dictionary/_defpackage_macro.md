**defpackage** <ClLinks  term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> *defined-package-name* [[ *↓option* ]] → package 



*option::*=*\{*(:nicknames <ClLinks  term={"nickname"}><i>\{nickname\}</i></ClLinks>\*)*\}*\* *|* 



(:documentation <ClLinks  term={"string"}><i>string</i></ClLinks>) *|* 



*\{*(:use *\{package-name\}*\*)*\}*\* *|* 



*\{*(:shadow *\{↓symbol-name\}*\*)*\}*\* *|* 



*\{*(:shadowing-import-from *package-name \{↓symbol-name\}*\*)*\}*\* *|* 



*\{*(:import-from *package-name \{↓symbol-name\}*\*)*\}*\* *|* 



*\{*(:export *\{↓symbol-name\}*\*)*\}*\* *|* 



*\{*(:intern *\{↓symbol-name\}*\*)*\}*\* *|* 



(:size *integer* ) 



**Arguments and Values:** 



*defined-package-name*—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . 



*package-name*—a <GlossaryTerm styled={true} term={"package designator"}><i>package designator</i></GlossaryTerm> . 



<ClLinks  term={"nickname"}><i>nickname</i></ClLinks>—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . 



*symbol-name*—a <GlossaryTerm styled={true} term={"string designator"}><i>string designator</i></GlossaryTerm> . 



<ClLinks  term={"package"}><i>package</i></ClLinks>—the <ClLinks  term={"package"}><i>package</i></ClLinks> named *package-name*. 



**Description:** 



<ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> creates a <ClLinks  term={"package"}><i>package</i></ClLinks> as specified and returns the <ClLinks  term={"package"}><i>package</i></ClLinks>. 



If *defined-package-name* already refers to an existing <ClLinks  term={"package"}><i>package</i></ClLinks>, the name-to-package mapping for that name is not changed. If the new definition is at variance with the current state of that <ClLinks  term={"package"}><i>package</i></ClLinks>, the consequences are undefined; an implementation might choose to modify the existing <ClLinks  term={"package"}><i>package</i></ClLinks> to reflect the new definition. If *defined-package-name* is a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>, its <ClLinks  term={"name"}><i>name</i></ClLinks> is used. 



The standard *options* are described below. 



:nicknames 



The arguments to :nicknames set the <ClLinks  term={"package"}><i>package</i></ClLinks>’s nicknames to the supplied names. 



:documentation 



The argument to :documentation specifies a <GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm>; it is attached as a 



 



 



<ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> 



<GlossaryTerm styled={true} term={"documentation string"}><i>documentation string</i></GlossaryTerm> to the <ClLinks  term={"package"}><i>package</i></ClLinks>. At most one :documentation option can appear in a single <ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. 



:use 



The arguments to :use set the <ClLinks  term={"package"}><i>packages</i></ClLinks> that the <ClLinks  term={"package"}><i>package</i></ClLinks> named by *package-name* will inherit from. If :use is not supplied, it defaults to the same <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> value as the :use <ClLinks  term={"argument"}><i>argument</i></ClLinks> to <ClLinks  term={"make-package"}><b>make-package</b></ClLinks>. 



:shadow 



The arguments to :shadow, *symbol-names*, name <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> that are to be created in the <ClLinks  term={"package"}><i>package</i></ClLinks> being defined. These <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are added to the list of shadowing <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> effectively as if by <ClLinks  term={"shadow"}><b>shadow</b></ClLinks>. 



:shadowing-import-from 



The <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> named by the argument *symbol-names* are found (involving a lookup as if by <ClLinks  term={"find-symbol"}><b>find-symbol</b></ClLinks>) in the specified *package-name*. The resulting <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> are *imported* into the <ClLinks  term={"package"}><i>package</i></ClLinks> being defined, and placed on the shadowing symbols list as if by <ClLinks  term={"shadowing-import"}><b>shadowing-import</b></ClLinks>. In no case are <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> created in any <ClLinks  term={"package"}><i>package</i></ClLinks> other than the one being defined. 



:import-from 



The <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> named by the argument *symbol-names* are found in the <ClLinks  term={"package"}><i>package</i></ClLinks> named by *package-name* and they are *imported* into the <ClLinks  term={"package"}><i>package</i></ClLinks> being defined. In no case are <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> created in any <ClLinks  term={"package"}><i>package</i></ClLinks> other than the one being defined. 



:export 



The <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> named by the argument *symbol-names* are found or created in the <ClLinks  term={"package"}><i>package</i></ClLinks> being defined and <ClLinks  term={"exported"}><i>exported</i></ClLinks>. The :export option interacts with the :use option, since inherited <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> can be used rather than new ones created. The :export option interacts with the :import-from and :shadowing-import-from options, since *imported* symbols can be used rather than new ones created. If an argument to the :export option is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> as an (inherited) <GlossaryTerm styled={true} term={"internal symbol"}><i>internal symbol</i></GlossaryTerm> via <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>, that the <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> named by *symbol-name* is first *imported* into the <ClLinks  term={"package"}><i>package</i></ClLinks> being defined, and is then <ClLinks  term={"exported"}><i>exported</i></ClLinks> from that <ClLinks  term={"package"}><i>package</i></ClLinks>. 



:intern 



The <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> named by the argument *symbol-names* are found or created in the <ClLinks  term={"package"}><i>package</i></ClLinks> being defined. The :intern option interacts with the :use option, since inherited <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> can be used rather than new ones created. 



:size 



The argument to the :size option declares the approximate number of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> expected in the <ClLinks  term={"package"}><i>package</i></ClLinks>. This is an efficiency hint only and might be ignored by an implementation. 







 



 



<ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> 



The order in which the options appear in a <ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> form is irrelevant. The order in which they are executed is as follows: 



1\. :shadow and :shadowing-import-from. 



2\. :use. 



3\. :import-from and :intern. 



4\. :export. 



Shadows are established first, since they might be necessary to block spurious name conflicts when the :use option is processed. The :use option is executed next so that :intern and :export options can refer to normally inherited <ClLinks  term={"symbol"}><i>symbols</i></ClLinks>. The :export option is executed last so that it can refer to <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> created by any of the other options; in particular, <GlossaryTerm styled={true} term={"shadowing symbol"}><i>shadowing symbols</i></GlossaryTerm> and *imported symbols* can be made external. 



If a defpackage <ClLinks  term={"form"}><i>form</i></ClLinks> appears as a <GlossaryTerm styled={true} term={"top level form"}><i>top level form</i></GlossaryTerm>, all of the actions normally performed by this <ClLinks  term={"macro"}><i>macro</i></ClLinks> at load time must also be performed at compile time. 



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



Existing <ClLinks  term={"package"}><i>packages</i></ClLinks>. 



**Exceptional Situations:** 



If one of the supplied :nicknames already refers to an existing <ClLinks  term={"package"}><i>package</i></ClLinks>, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package-error"}><b>package-error</b></ClLinks> is signaled. 



An error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> should be signaled if :size or :documentation appears more than once. 







 



 



<ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> 



Since <ClLinks  term={"implementation"}><i>implementations</i></ClLinks> might allow extended *options* an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> should be signaled if an *option* is present that is not actually supported in the host <ClLinks  term={"implementation"}><i>implementation</i></ClLinks>. 



The collection of *symbol-name* arguments given to the options :shadow, :intern, :import-from, and :shadowing-import-from must all be disjoint; additionally, the *symbol-name* arguments given to :export and :intern must be disjoint. Disjoint in this context is defined as no two of the *symbol-names* being <ClLinks  term={"string"}><b>string=</b></ClLinks> with each other. If either condition is violated, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"program-error"}><b>program-error</b></ClLinks> should be signaled. 



For the :shadowing-import-from and :import-from options, a *correctable error* of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"package-error"}><b>package-error</b></ClLinks> is signaled if no <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> is <ClLinks  term={"accessible"}><i>accessible</i></ClLinks> in the <ClLinks  term={"package"}><i>package</i></ClLinks> named by *package-name* for one of the argument *symbol-names*. 



Name conflict errors are handled by the underlying calls to <ClLinks  term={"make-package"}><b>make-package</b></ClLinks>, <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>, <ClLinks  term={"import"}><b>import</b></ClLinks>, and <ClLinks  term={"export"}><b>export</b></ClLinks>. See Section 11.1 (Package Concepts). 



**See Also:** 



**documentation**, Section 11.1 (Package Concepts), Section 3.2 (Compilation) 



**Notes:** 



The :intern option is useful if an :import-from or a :shadowing-import-from option in a subsequent call to <ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> (for some other <ClLinks  term={"package"}><i>package</i></ClLinks>) expects to find these *symbols accessible* but not necessarily external. 



It is recommended that the entire <ClLinks  term={"package"}><i>package</i></ClLinks> definition is put in a single place, and that all the <ClLinks  term={"package"}><i>package</i></ClLinks> definitions of a program are in a single file. This file can be *loaded* before *loading* or compiling anything else that depends on those <ClLinks  term={"package"}><i>packages</i></ClLinks>. Such a file can be read in the COMMON-LISP-USER <ClLinks  term={"package"}><i>package</i></ClLinks>, avoiding any initial state issues. 



<ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> cannot be used to create two “mutually recursive” packages, such as: 



(defpackage my-package 



(:use common-lisp your-package) ;requires your-package to exist first 



(:export "MY-FUN")) 



(defpackage your-package 



(:use common-lisp) 



(:import-from my-package "MY-FUN") ;requires my-package to exist first 



(:export "MY-FUN")) 



However, nothing prevents the user from using the <ClLinks  term={"package"}><i>package</i></ClLinks>-affecting functions such as <ClLinks  term={"use-package"}><b>use-package</b></ClLinks>, <ClLinks  term={"import"}><b>import</b></ClLinks>, and <ClLinks  term={"export"}><b>export</b></ClLinks> to establish such links after a more standard use of <ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks>. 



The macroexpansion of <ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> could usefully canonicalize the names into <ClLinks  term={"string"}><i>strings</i></ClLinks>, so that even if a source file has random <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> in the <ClLinks  term={"defpackage"}><b>defpackage</b></ClLinks> form, the compiled file would only contain <ClLinks  term={"string"}><i>strings</i></ClLinks>. 



Frequently additional <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> options take the form of a <ClLinks  term={"keyword"}><i>keyword</i></ClLinks> standing by itself as an abbreviation for a list (keyword T); this syntax should be properly reported as an 







 



 



unrecognized option in implementations that do not support it. 



