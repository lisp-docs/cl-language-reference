**with-compilation-unit** *Macro* 



**Syntax:** 



**with-compilation-unit** ([[ *↓option* ]]) *\&#123;form\&#125;*\* *→ \&#123;result\&#125;*\* 



*option::*=:override *override* 



**Arguments and Values:** 



*override*—a *generalized boolean*; evaluated. The default is **nil**. 



*forms*—an *implicit progn*. 



*results*—the *values* returned by the *forms*. 







 



 



**Description:** 



Executes *forms* from left to right. Within the *dynamic environment* of **with-compilation-unit**, actions deferred by the compiler until the end of compilation will be deferred until the end of the outermost call to **with-compilation-unit**. 



The set of *options* permitted may be extended by the implementation, but the only *standardized* keyword is :override. 



If nested dynamically only the outer call to **with-compilation-unit** has any effect unless the value associated with :override is *true*, in which case warnings are deferred only to the end of the innermost call for which *override* is *true*. 



The function **compile-file** provides the effect of 



(with-compilation-unit (:override nil) ...) 



around its *code*. 



Any *implementation-dependent* extensions can only be provided as the result of an explicit programmer request by use of an *implementation-dependent* keyword. *Implementations* are forbidden from attaching additional meaning to a use of this macro which involves either no keywords or just the keyword :override. 



**Examples:**
```lisp
 



If an *implementation* would normally defer certain kinds of warnings, such as warnings about undefined functions, to the end of a compilation unit (such as a *file*), the following example shows how to cause those warnings to be deferred to the end of the compilation of several files. 



(defun compile-files (&rest files) 



(with-compilation-unit () 



(mapcar #’(lambda (file) (compile-file file)) files))) 



(compile-files "A" "B" "C") 



Note however that if the implementation does not normally defer any warnings, use of *with-compilation-unit* might not have any effect. 




```
**See Also:** 



**compile**, **compile-file** 



System 



 



 



*∗***features***∗* 



*∗***features***∗ Variable* 



**Value Type:** 



a *proper list*. 



**Initial Value:** 



*implementation-dependent*. 



**Description:** 



The *value* of **\*features\*** is called the *features list*. It is a *list* of *symbols*, called *features*, that correspond to some aspect of the *implementation* or *environment*. 



Most *features* have *implementation-dependent* meanings; The following meanings have been assigned to feature names: 



:cltl1 



If present, indicates that the LISP *package purports to conform* to the 1984 specification *Common Lisp: The Language*. It is possible, but not required, for a *conforming implementation* to have this feature because this specification specifies that its *symbols* are to be in the COMMON-LISP *package*, not the LISP package. 



:cltl2 



If present, indicates that the implementation *purports to conform* to *Common Lisp: The Language, Second Edition*. This feature must not be present in any *conforming implementation*, since conformance to that document is not compatible with conformance to this specification. The name, however, is reserved by this specification in order to help programs distinguish implementations which conform to that document from implementations which conform to this specification. 



:ieee-floating-point 



If present, indicates that the implementation *purports to conform* to the requirements of *IEEE Standard for Binary Floating-Point Arithmetic*. 



:x3j13 



If present, indicates that the implementation conforms to some particular working draft of this specification, or to some subset of features that approximates a belief about what this specification might turn out to contain. A *conforming implementation* might or might not contain such a feature. (This feature is intended primarily as a stopgap in order to provide implementors something to use prior to the availability of a draft standard, in order to 



discourage them from introducing the :draft-ansi-cl and :ansi-cl *features* prematurely.) :draft-ansi-cl 







 



 



*∗***features***∗* 



If present, indicates that the *implementation purports to conform* to the first full draft of this specification, which went to public review in 1992. A *conforming implementation* which has the :draft-ansi-cl-2 or :ansi-cl *feature* is not permitted to retain the :draft-ansi-cl *feature* since incompatible changes were made subsequent to the first draft. 



:draft-ansi-cl-2 



If present, indicates that a second full draft of this specification has gone to public review, and that the *implementation purports to conform* to that specification. (If additional public review drafts are produced, this keyword will continue to refer to the second draft, and additional keywords will be added to identify conformance with such later drafts. As such, the meaning of this keyword can be relied upon not to change over time.) A *conforming implementation* which has the :ansi-cl *feature* is only permitted to retain the :draft-ansi-cl *feature* if the finally approved standard is not incompatible with the draft standard. 



:ansi-cl 



If present, indicates that this specification has been adopted by ANSI as an official standard, and that the *implementation purports to conform*. 



:common-lisp 



This feature must appear in **\*features\*** for any implementation that has one or more of the features :x3j13, :draft-ansi-cl, or :ansi-cl. It is intended that it should also appear in implementations which have the features :cltl1 or :cltl2, but this specification cannot force such behavior. The intent is that this feature should identify the language family named “Common Lisp,” rather than some specific dialect within that family. 



**See Also:** 



Section 1.5.2.1.1 (Use of Read-Time Conditionals), Section 2.4 (Standard Macro Characters) 



**Notes:** 



The *value* of **\*features\*** is used by the #+ and #- reader syntax. 



*Symbols* in the *features list* may be in any *package*, but in practice they are generally in the KEYWORD *package*. This is because KEYWORD is the *package* used by default when *reading*<sub>2</sub> *feature expressions* in the #+ and #- *reader macros*. *Code* that needs to name a *feature*<sub>2</sub> in a *package P* (other than KEYWORD) can do so by making explicit use of a *package prefix* for *P*, but note that such *code* must also assure that the *package P* exists in order for the *feature expression* to be *read* <sub>2</sub>—even in cases where the *feature expression* is expected to fail. 



It is generally considered wise for an *implementation* to include one or more *features* identifying the specific *implementation*, so that conditional expressions can be written which distinguish idiosyncrasies of one *implementation* from those of another. Since features are normally *symbols* in the KEYWORD *package* where name collisions might easily result, and since no uniquely defined 



System 



 



 



mechanism is designated for deciding who has the right to use which *symbol* for what reason, a conservative strategy is to prefer names derived from one’s own company or product name, since those names are often trademarked and are hence less likely to be used unwittingly by another *implementation*. 



*∗***compile-file-pathname***∗***,** *∗***compile-file-truename***∗ Variable* 



**Value Type:** 



The *value* of **\*compile-file-pathname\*** must always be a *pathname* or **nil**. The *value* of **\*compile-file-truename\*** must always be a *physical pathname* or **nil**. 



**Initial Value:** 



**nil**. 



**Description:** 



During a call to **compile-file**, **\*compile-file-pathname\*** is *bound* to the *pathname* denoted by the first argument to **compile-file**, merged against the defaults; that is, it is *bound* to (pathname (merge-pathnames *input-file*)). During the same time interval, **\*compile-file-truename\*** is *bound* to the *truename* of the *file* being *compiled*. 



At other times, the *value* of these *variables* is **nil**. 



If a *break loop* is entered while **compile-file** is ongoing, it is *implementation-dependent* whether these *variables* retain the *values* they had just prior to entering the *break loop* or whether they are *bound* to **nil**. 



The consequences are unspecified if an attempt is made to *assign* or *bind* either of these *variables*. 



**Affected By:** 



The *file system*. 



**See Also:** 



**compile-file** 







 



 



*∗***load-pathname***∗***,** *∗***load-truename***∗ Variable* 



**Value Type:** 



The *value* of **\*load-pathname\*** must always be a *pathname* or **nil**. The *value* of **\*load-truename\*** must always be a *physical pathname* or **nil**. 



**Initial Value:** 



**nil**. 



**Description:** 



During a call to **load**, **\*load-pathname\*** is *bound* to the *pathname* denoted by the the first argument to **load**, merged against the defaults; that is, it is *bound* to (pathname (merge-pathnames *filespec*)). During the same time interval, **\*load-truename\*** is *bound* to the *truename* of the *file* being loaded. 



At other times, the *value* of these *variables* is **nil**. 



If a *break loop* is entered while **load** is ongoing, it is *implementation-dependent* whether these *variables* retain the *values* they had just prior to entering the *break loop* or whether they are *bound* to **nil**. 



The consequences are unspecified if an attempt is made to *assign* or *bind* either of these *variables*. 



**Affected By:** 



The *file system*. 



**See Also:** 



**load** 



*∗***compile-print***∗***,** *∗***compile-verbose***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*implementation-dependent*. 



**Description:** 



The *value* of **\*compile-print\*** is the default value of the :print *argument* to **compile-file**. The *value* of **\*compile-verbose\*** is the default value of the :verbose *argument* to **compile-file**. 



**See Also:** 



**compile-file** 



System 



 



 



*∗***load-print***∗***,** *∗***load-verbose***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



The initial *value* of **\*load-print\*** is *false*. The initial *value* of **\*load-verbose\*** is *implementation dependent*. 



**Description:** 



The *value* of **\*load-print\*** is the default value of the :print *argument* to **load**. The *value* of **\*load-verbose\*** is the default value of the :verbose *argument* to **load**. 



**See Also:** 



**load** 



*∗***modules***∗ Variable* 



**Value Type:** 



a *list* of *strings*. 



**Initial Value:** 



*implementation-dependent*. 



**Description:** 



The *value* of **\*modules\*** is a list of names of the modules that have been loaded into the current *Lisp image*. 



**Affected By:** 



**provide** 



**See Also:** 



**provide**, **require** 



**Notes:** 



The variable **\*modules\*** is deprecated. 







 



 



**provide, require** 



