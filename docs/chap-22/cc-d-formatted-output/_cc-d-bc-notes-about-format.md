 



Formatted output is performed not only by **format**, but by certain other functions that accept a *format control* the way **format** does. For example, error-signaling functions such as **cerror** accept *format controls*. 



Note that the meaning of **nil** and **t** as destinations to **format** are different than those of **nil** and **t** as *stream designators*. 



The ~<i><sup>∧</sup></i> should appear only at the beginning of a ~&lt; clause, because it aborts the entire clause in which it appears (as well as all following clauses). 







 



 



**copy-pprint-dispatch** *Function* 



**Syntax:** 



**copy-pprint-dispatch** &amp;optional *table → new-table* 



**Arguments and Values:** 



*table*—a *pprint dispatch table*, or **nil**. 



*new-table*—a *fresh pprint dispatch table*. 



**Description:** 



Creates and returns a copy of the specified *table*, or of the *value* of **\*print-pprint-dispatch\*** if no *table* is specified, or of the initial *value* of **\*print-pprint-dispatch\*** if **nil** is specified. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *table* is not a *pprint dispatch table*. 



**formatter** *Macro* 



**Syntax:** 



**formatter** *control-string → function* 



**Arguments and Values:** 



*control-string*—a *format string*; not evaluated. 



*function*—a *function*. 



**Description:** 



Returns a *function* which has behavior equivalent to: 



#’(lambda (\*standard-output\* &amp;rest arguments) 



(apply #’format t *control-string* arguments) 



*arguments-tail*) 



where *arguments-tail* is either the tail of *arguments* which has as its *car* the argument that would be processed next if there were more format directives in the *control-string*, or else **nil** if no more *arguments* follow the most recently processed argument. 



**Examples:** 



(funcall (formatter "~&amp;~A~A") \*standard-output\* ’a ’b ’c) 



▷ AB 



*→* (C) 







 



 



(format t (formatter "~&amp;~A~A") ’a ’b ’c) 



▷ AB 



*→* NIL 



**Exceptional Situations:** 



Might signal an error (at macro expansion time or at run time) if the argument is not a valid *format string*. 



**See Also:** 



**format** 



**pprint-dispatch** *Function* 



**Syntax:** 



**pprint-dispatch** *object* &amp;optional *table → function, found-p* 



**Arguments and Values:** 



*object*—an *object*. 



*table*—a *pprint dispatch table*, or **nil**. The default is the *value* of **\*print-pprint-dispatch\***. *function*—a *function designator* . 



*found-p*—a *generalized boolean*. 



**Description:** 



Retrieves the highest priority function in *table* that is associated with a *type specifier* that matches *object*. The function is chosen by finding all of the *type specifiers* in *table* that match the *object* and selecting the highest priority function associated with any of these *type specifiers*. If there is more than one highest priority function, an arbitrary choice is made. If no *type specifiers* match the *object*, a function is returned that prints *object* using **print-object**. 



The *secondary value*, *found-p*, is *true* if a matching *type specifier* was found in *table*, or *false* otherwise. 



If *table* is **nil**, retrieval is done in the *initial pprint dispatch table*. 



**Affected By:** 



The state of the *table*. 



**Exceptional Situations:** 



Should signal an error of *type* **type-error** if *table* is neither a *pprint-dispatch-table* nor **nil**. 



 



 



**Notes:** 



(let ((\*print-pretty\* t)) 



(write object :stream s)) 



*≡* (funcall (pprint-dispatch object) s object) 



**pprint-exit-if-list-exhausted** *Local Macro* 



**Syntax:** 



**pprint-exit-if-list-exhausted** *hno argumentsi →* **nil** 



**Description:** 



Tests whether or not the *list* passed to the *lexically current logical block* has been exhausted; see Section 22.2.1.1 (Dynamic Control of the Arrangement of Output). If this *list* has been reduced to **nil**, **pprint-exit-if-list-exhausted** terminates the execution of the *lexically current logical block* except for the printing of the suffix. Otherwise **pprint-exit-if-list-exhausted** returns **nil**. 



Whether or not **pprint-exit-if-list-exhausted** is *fbound* in the *global environment* is *implementation dependent*; however, the restrictions on redefinition and *shadowing* of **pprint-exit-if-list-exhausted** are the same as for *symbols* in the COMMON-LISP *package* which are *fbound* in the *global environment*. The consequences of attempting to use **pprint-exit-if-list-exhausted** outside of **pprint-logical-block** are undefined. 



**Exceptional Situations:** 



An error is signaled (at macro expansion time or at run time) if **pprint-exit-if-list-exhausted** is used anywhere other than lexically within a call on **pprint-logical-block**. Also, the consequences of executing **pprint-if-list-exhausted** outside of the dynamic extent of the **pprint-logical-block** which lexically contains it are undefined. 



**See Also:** 



**pprint-logical-block**, **pprint-pop**. 







 



 



**pprint-fill, pprint-linear, pprint-tabular** 



**pprint-fill, pprint-linear, pprint-tabular** *Function* 



**Syntax:** 



**pprint-fill** *stream object* &amp;optional *colon-p at-sign-p →* **nil** 



**pprint-linear** *stream object* &amp;optional *colon-p at-sign-p →* **nil** 



**pprint-tabular** *stream object* &amp;optional *colon-p at-sign-p tabsize →* **nil** 



**Arguments and Values:** 



*stream*—an *output stream designator* . 



*object*—an *object*. 



*colon-p*—a *generalized boolean*. The default is *true*. 



*at-sign-p*—a *generalized boolean*. The default is *implementation-dependent*. 



*tabsize*—a non-negative *integer* . The default is 16. 



**Description:** 



The functions **pprint-fill**, **pprint-linear**, and **pprint-tabular** specify particular ways of *pretty printing* a *list* to *stream*. Each function prints parentheses around the output if and only if *colon-p* is *true*. Each function ignores its *at-sign-p* argument. (Both arguments are included even though only one is needed so that these functions can be used via ~/.../ and as **set-pprint-dispatch** functions, as well as directly.) Each function handles abbreviation and the detection of circularity and sharing correctly, and uses **write** to print *object* when it is a *non-list*. 



If *object* is a *list* and if the *value* of **\*print-pretty\*** is *false*, each of these functions prints *object* using a minimum of *whitespace*, as described in Section 22.1.3.5 (Printing Lists and Conses). Otherwise (if *object* is a *list* and if the *value* of **\*print-pretty\*** is *true*): 



*•* The *function* **pprint-linear** prints a *list* either all on one line, or with each *element* on a separate line. 



*•* The *function* **pprint-fill** prints a *list* with as many *elements* as possible on each line. 



*•* The *function* **pprint-tabular** is the same as **pprint-fill** except that it prints the *elements* so that they line up in columns. The *tabsize* specifies the column spacing in *ems*, which is the total spacing from the leading edge of one column to the leading edge of the next. 



**Examples:** 



Evaluating the following with a line length of 25 produces the output shown. 



(progn (princ "Roads ") 







 



 



(pprint-tabular \*standard-output\* ’(elm main maple center) nil nil 8)) 



Roads ELM MAIN 



MAPLE CENTER 



**Side Effects:** 



Performs output to the indicated *stream*. 



**Affected By:** 



The cursor position on the indicated *stream*, if it can be determined. 



**Notes:** 



The *function* **pprint-tabular** could be defined as follows: 



(defun pprint-tabular (s list &amp;optional (colon-p t) at-sign-p (tabsize nil)) 



(declare (ignore at-sign-p)) 



(when (null tabsize) (setq tabsize 16)) 



(pprint-logical-block (s list :prefix (if colon-p "(" "") 



:suffix (if colon-p ")" "")) 



(pprint-exit-if-list-exhausted) 



(loop (write (pprint-pop) :stream s) 



(pprint-exit-if-list-exhausted) 



(write-char #\Space s) 



(pprint-tab :section-relative 0 tabsize s) 



(pprint-newline :fill s)))) 



Note that it would have been inconvenient to specify this function using **format**, because of the need to pass its *tabsize* argument through to a ~:T format directive nested within an iteration over a list. 



**pprint-indent** *Function* 



**Syntax:** 



**pprint-indent** *relative-to n* &amp;optional *stream →* **nil** 



**Arguments and Values:** 



*relative-to*—either :block or :current. 



*n*—a *real*. 



*stream*—an *output stream designator* . The default is *standard output*. 







 



 



**Description:** 



**pprint-indent** specifies the indentation to use in a logical block on *stream*. If *stream* is a *pretty printing stream* and the *value* of **\*print-pretty\*** is *true*, **pprint-indent** sets the indentation in the innermost dynamically enclosing logical block; otherwise, **pprint-indent** has no effect. 



*N* specifies the indentation in *ems*. If *relative-to* is :block, the indentation is set to the horizontal position of the first character in the *dynamically current logical block* plus *n ems*. If *relative-to* is :current, the indentation is set to the current output position plus *n ems*. (For robustness in the face of variable-width fonts, it is advisable to use :current with an *n* of zero whenever possible.) 



*N* can be negative; however, the total indentation cannot be moved left of the beginning of the line or left of the end of the rightmost per-line prefix—an attempt to move beyond one of these limits is treated the same as an attempt to move to that limit. Changes in indentation caused by *pprint-indent* do not take effect until after the next line break. In addition, in miser mode all calls to **pprint-indent** are ignored, forcing the lines corresponding to the logical block to line up under the first character in the block. 



**Exceptional Situations:** 



An error is signaled if *relative-to* is any *object* other than :block or :current. 



**See Also:** 



Section 22.3.5.3 (Tilde I: Indent) 



**pprint-logical-block** *Macro* 



**Syntax:** 



**pprint-logical-block** (*stream-symbol object* &amp;key *prefix per-line-prefix suffix*) 



*\{declaration\}*\* *\{form\}*\* 



*→* **nil** 



**Arguments and Values:** 



*stream-symbol*—a *stream variable designator* . 



*object*—an *object*; evaluated. 



:prefix—a *string*; evaluated. Complicated defaulting behavior; see below. 



:per-line-prefix—a *string*; evaluated. Complicated defaulting behavior; see below. :suffix—a *string*; evaluated. The default is the *null string*. 



*declaration*—a **declare** *expression*; not evaluated. 



*forms*—an *implicit progn*. 







 



 



**pprint-logical-block** 



**Description:** 



Causes printing to be grouped into a logical block. 



The logical block is printed to the *stream* that is the *value* of the *variable* denoted by *stream-symbol*. During the execution of the *forms*, that *variable* is *bound* to a *pretty printing stream* that supports decisions about the arrangement of output and then forwards the output to the destination stream. All the standard printing functions (*e.g.*, **write**, **princ**, and **terpri**) can be used to print output to the *pretty printing stream*. All and only the output sent to this *pretty printing stream* is treated as being in the logical block. 



The *prefix* specifies a prefix to be printed before the beginning of the logical block. The *per-line-prefix* specifies a prefix that is printed before the block and at the beginning of each new line in the block. The :prefix and :pre-line-prefix *arguments* are mutually exclusive. If neither :prefix nor :per-line-prefix is specified, a *prefix* of the *null string* is assumed. 



The *suffix* specifies a suffix that is printed just after the logical block. 



The *object* is normally a *list* that the body *forms* are responsible for printing. If *object* is not a *list*, it is printed using **write**. (This makes it easier to write printing functions that are robust in the face of malformed arguments.) If **\*print-circle\*** is *non-nil* and *object* is a circular (or shared) reference to a *cons*, then an appropriate “#*n*#” marker is printed. (This makes it easy to write printing 



functions that provide full support for circularity and sharing abbreviation.) If **\*print-level\*** is not **nil** and the logical block is at a dynamic nesting depth of greater than **\*print-level\*** in logical blocks, “#” is printed. (This makes easy to write printing functions that provide full support for depth abbreviation.) 



If either of the three conditions above occurs, the indicated output is printed on *stream-symbol* and the body *forms* are skipped along with the printing of the :prefix and :suffix. (If the body *forms* are not to be responsible for printing a list, then the first two tests above can be turned off by supplying **nil** for the *object* argument.) 



In addition to the *object* argument of **pprint-logical-block**, the arguments of the standard printing functions (such as **write**, **print**, **prin1**, and **pprint**, as well as the arguments of the standard *format directives* such as ~A, ~S, (and ~W) are all checked (when necessary) for circularity and sharing. However, such checking is not applied to the arguments of the functions **write-line**, **write-string**, and **write-char** or to the literal text output by **format**. A consequence of this is that you must use one of the latter functions if you want to print some literal text in the output that is not supposed to be checked for circularity or sharing. 



The body *forms* of a **pprint-logical-block** *form* must not perform any side-effects on the surrounding environment; for example, no *variables* must be assigned which have not been *bound* within its scope. 



The **pprint-logical-block** *macro* may be used regardless of the *value* of **\*print-pretty\***. 



**Affected By:** 



**\*print-circle\***, **\*print-level\***. 







 



 



**Exceptional Situations:** 



An error of *type* **type-error** is signaled if any of the :suffix, :prefix, or :per-line-prefix is supplied but does not evaluate to a *string*. 



An error is signaled if :prefix and :pre-line-prefix are both used. 



**pprint-logical-block** and the *pretty printing stream* it creates have *dynamic extent*. The consequences are undefined if, outside of this extent, output is attempted to the *pretty printing stream* it creates. 



It is also unspecified what happens if, within this extent, any output is sent directly to the underlying destination stream. 



**See Also:** 



**pprint-pop**, **pprint-exit-if-list-exhausted**, Section 22.3.5.2 (Tilde Less-Than-Sign: Logical Block) 



**Notes:** 



One reason for using the **pprint-logical-block** *macro* when the *value* of **\*print-pretty\*** is **nil** would be to allow it to perform checking for *dotted lists*, as well as (in conjunction with **pprint-pop**) checking for **\*print-level\*** or **\*print-length\*** being exceeded. 



Detection of circularity and sharing is supported by the *pretty printer* by in essence performing requested output twice. On the first pass, circularities and sharing are detected and the actual outputting of characters is suppressed. On the second pass, the appropriate “#*n*=” and “#*n*#” markers are inserted and characters are output. This is why the restriction on side-effects is necessary. Obeying this restriction is facilitated by using **pprint-pop**, instead of an ordinary **pop** when traversing a list being printed by the body *forms* of the **pprint-logical-block** *form*.) 



**pprint-newline** *Function* 



**Syntax:** 



**pprint-newline** *kind* &amp;optional *stream →* **nil** 



**Arguments and Values:** 



*kind*—one of :linear, :fill, :miser, or :mandatory. 



*stream*—a *stream designator* . The default is *standard output*. 



**Description:** 



If *stream* is a *pretty printing stream* and the *value* of **\*print-pretty\*** is *true*, a line break is inserted in the output when the appropriate condition below is satisfied; otherwise, **pprint-newline** has no effect. 



*Kind* specifies the style of conditional newline. This *parameter* is treated as follows: 



 



 



**pprint-newline** 



:linear 



This specifies a “linear-style” *conditional newline*. A line break is inserted if and only if the immediately containing *section* cannot be printed on one line. The effect of this is that line breaks are either inserted at every linear-style conditional newline in a logical block or at none of them. 



:miser 



This specifies a “miser-style” *conditional newline*. A line break is inserted if and only if the immediately containing *section* cannot be printed on one line and miser style is in effect in the immediately containing logical block. The effect of this is that miser-style conditional newlines act like linear-style conditional newlines, but only when miser style is in effect. Miser style is in effect for a logical block if and only if the starting position of the logical block is less than or equal to **\*print-miser-width\*** *ems* from the right margin. 



:fill 



This specifies a “fill-style” *conditional newline*. A line break is inserted if and only if either (a) the following *section* cannot be printed on the end of the current line, (b) the preceding *section* was not printed on a single line, or (c) the immediately containing *section* cannot be printed on one line and miser style is in effect in the immediately containing logical block. If a logical block is broken up into a number of subsections by fill-style conditional newlines, the basic effect is that the logical block is printed with as many subsections as possible on each line. However, if miser style is in effect, fill-style conditional newlines act like linear-style conditional newlines. 



:mandatory 



This specifies a “mandatory-style” *conditional newline*. A line break is always inserted. This implies that none of the containing *sections* can be printed on a single line and will therefore trigger the insertion of line breaks at linear-style conditional newlines in these *sections*. 



When a line break is inserted by any type of conditional newline, any blanks that immediately precede the conditional newline are omitted from the output and indentation is introduced at the beginning of the next line. By default, the indentation causes the following line to begin in the same horizontal position as the first character in the immediately containing logical block. (The indentation can be changed via **pprint-indent**.) 



There are a variety of ways unconditional newlines can be introduced into the output (*i.e.*, via **terpri** or by printing a string containing a newline character). As with mandatory conditional newlines, this prevents any of the containing *sections* from being printed on one line. In general, when an unconditional newline is encountered, it is printed out without suppression of the preceding blanks and without any indentation following it. However, if a per-line prefix has been specified (see **pprint-logical-block**), this prefix will always be printed no matter how a newline originates. 







 



 



**Examples:** 



See Section 22.2.2 (Examples of using the Pretty Printer). 



**Side Effects:** 



Output to *stream*. 



**Affected By:** 



**\*print-pretty\***, **\*print-miser\***. The presence of containing logical blocks. The placement of newlines and conditional newlines. 



**Exceptional Situations:** 



An error of *type* **type-error** is signaled if *kind* is not one of :linear, :fill, :miser, or :mandatory. 



**See Also:** 



Section 22.3.5.1 (Tilde Underscore: Conditional Newline), Section 22.2.2 (Examples of using the Pretty Printer) 



**pprint-pop** *Local Macro* 



**Syntax:** 



**pprint-pop** *hno argumentsi → object* 



**Arguments and Values:** 



*object*—an *element* of the *list* being printed in the *lexically current logical block* , or **nil**. 



**Description:** 



Pops one *element* from the *list* being printed in the *lexically current logical block* , obeying **\*print-length\*** and **\*print-circle\*** as described below. 



Each time **pprint-pop** is called, it pops the next value off the *list* passed to the *lexically current logical block* and returns it. However, before doing this, it performs three tests: 



*•* If the remaining ‘list’ is not a *list*, “. ” is printed followed by the remaining ‘list.’ (This makes it easier to write printing functions that are robust in the face of malformed arguments.) 



*•* If **\*print-length\*** is *non-nil*, and **pprint-pop** has already been called **\*print-length\*** times within the immediately containing logical block, “...” is printed. (This makes it easy to write printing functions that properly handle **\*print-length\***.) 







 



 



*•* If **\*print-circle\*** is *non-nil*, and the remaining list is a circular (or shared) reference, then “. ” is printed followed by an appropriate “#*n*#” marker. (This catches instances of *cdr* circularity and sharing in lists.) 



If either of the three conditions above occurs, the indicated output is printed on the *pretty printing stream* created by the immediately containing **pprint-logical-block** and the execution of the immediately containing **pprint-logical-block** is terminated except for the printing of the suffix. 



If **pprint-logical-block** is given a ‘list’ argument of **nil**—because it is not processing a list— **pprint-pop** can still be used to obtain support for **\*print-length\***. In this situation, the first and third tests above are disabled and **pprint-pop** always returns **nil**. See Section 22.2.2 (Examples of using the Pretty Printer)—specifically, the **pprint-vector** example. 



Whether or not **pprint-pop** is *fbound* in the *global environment* is *implementation-dependent*; however, the restrictions on redefinition and *shadowing* of **pprint-pop** are the same as for *symbols* in the COMMON-LISP *package* which are *fbound* in the *global environment*. The consequences of attempting to use **pprint-pop** outside of **pprint-logical-block** are undefined. 



**Side Effects:** 



Might cause output to the *pretty printing stream* associated with the lexically current logical block. 



**Affected By:** 



**\*print-length\***, **\*print-circle\***. 



**Exceptional Situations:** 



An error is signaled (either at macro expansion time or at run time) if a usage of **pprint-pop** occurs where there is no lexically containing **pprint-logical-block** *form*. 



The consequences are undefined if **pprint-pop** is executed outside of the *dynamic extent* of this **pprint-logical-block**. 



**See Also:** 



**pprint-exit-if-list-exhausted**, **pprint-logical-block**. 



**Notes:** 



It is frequently a good idea to call **pprint-exit-if-list-exhausted** before calling **pprint-pop**. **pprint-tab** *Function* 



**Syntax:** 



**pprint-tab** *kind colnum colinc* &amp;optional *stream →* **nil** 







 



 



**Arguments and Values:** 



*kind*—one of :line, :section, :line-relative, or :section-relative. 



*colnum*—a non-negative *integer* . 



*colinc*—a non-negative *integer* . 



*stream*—an *output stream designator* . 



**Description:** 



Specifies tabbing to *stream* as performed by the standard ~T format directive. If *stream* is a *pretty printing stream* and the *value* of **\*print-pretty\*** is *true*, tabbing is performed; otherwise, **pprint-tab** has no effect. 



The arguments *colnum* and *colinc* correspond to the two *parameters* to ~T and are in terms of *ems*. The *kind* argument specifies the style of tabbing. It must be one of :line (tab as by ~T), :section (tab as by ~:T, but measuring horizontal positions relative to the start of the dynamically enclosing section), :line-relative (tab as by ~@T), or :section-relative (tab as by ~:@T, but measuring 



horizontal positions relative to the start of the dynamically enclosing section). 



**Exceptional Situations:** 



An error is signaled if *kind* is not one of :line, :section, :line-relative, or :section-relative. 



**See Also:** 



**pprint-logical-block** 



**print-object** *Standard Generic Function* 



**Syntax:** 



**print-object** *object stream → object* 



**Method Signatures:** 



**print-object** (*object standard-object*) *stream* 



**print-object** (*object structure-object*) *stream* 



**Arguments and Values:** 



*object*—an *object*. 



*stream*—a *stream*. 







 



 



**print-object** 



**Description:** 



The *generic function* **print-object** writes the printed representation of *object* to *stream*. The *function* **print-object** is called by the *Lisp printer* ; it should not be called by the user. 



Each implementation is required to provide a *method* on the *class* **standard-object** and on the *class* **structure-object**. In addition, each *implementation* must provide *methods* on enough other *classes* so as to ensure that there is always an applicable *method*. Implementations are free to add *methods* for other *classes*. Users may write *methods* for **print-object** for their own *classes* if they do not wish to inherit an *implementation-dependent method*. 



The *method* on the *class* **structure-object** prints the object in the default #S notation; see Section 22.1.3.12 (Printing Structures). 



*Methods* on **print-object** are responsible for implementing their part of the semantics of the *printer control variables*, as follows: 



**\*print-readably\*** 



All methods for **print-object** must obey **\*print-readably\***. This includes both user-defined methods and *implementation-defined* methods. Readable printing of *structures* and *standard objects* is controlled by their **print-object** method, not by their **make-load-form** *method*. *Similarity* for these *objects* is application dependent and hence is defined to be whatever these *methods* do; see Section 3.2.4.2 (Similarity of Literal Objects). 



**\*print-escape\*** 



Each *method* must implement **\*print-escape\***. 



**\*print-pretty\*** 



The *method* may wish to perform specialized line breaking or other output conditional on the *value* of **\*print-pretty\***. For further information, see (for example) the *macro* **pprint-fill**. See also Section 22.2.1.4 (Pretty Print Dispatch Tables) and Section 22.2.2 (Examples of using the Pretty Printer). 



**\*print-length\*** 



*Methods* that produce output of indefinite length must obey **\*print-length\***. For further information, see (for example) the *macros* **pprint-logical-block** and **pprint-pop**. See also Section 22.2.1.4 (Pretty Print Dispatch Tables) and Section 22.2.2 (Examples of using the Pretty Printer). 



**\*print-level\*** 



The printer takes care of **\*print-level\*** automatically, provided that each *method* handles exactly one level of structure and calls **write** (or an equivalent *function*) recursively if there are more structural levels. The printer’s decision of whether an *object* has components (and 







 



 



therefore should not be printed when the printing depth is not less than **\*print-level\***) is *implementation-dependent*. In some implementations its **print-object** *method* is not called; in others the *method* is called, and the determination that the *object* has components is based on what it tries to write to the *stream*. 



**\*print-circle\*** 



When the *value* of **\*print-circle\*** is *true*, a user-defined **print-object** *method* can print *objects* to the supplied *stream* using **write**, **prin1**, **princ**, or **format** and expect circularities to be detected and printed using the #*n*# syntax. If a user-defined **print-object** *method* prints to a *stream* other than the one that was supplied, then circularity detection starts over for that *stream*. See **\*print-circle\***. 



**\*print-base\***, **\*print-radix\***, **\*print-case\***, **\*print-gensym\***, and **\*print-array\*** 



These *printer control variables* apply to specific types of *objects* and are handled by the *methods* for those *objects*. 



If these rules are not obeyed, the results are undefined. 



In general, the printer and the **print-object** methods should not rebind the print control variables as they operate recursively through the structure, but this is *implementation-dependent*. 



In some implementations the *stream* argument passed to a **print-object** *method* is not the original *stream*, but is an intermediate *stream* that implements part of the printer. *methods* should therefore not depend on the identity of this *stream*. 



**See Also:** 



**pprint-fill**, **pprint-logical-block**, **pprint-pop**, **write**, **\*print-readably\***, **\*print-escape\***, **\*print-pretty\***, **\*print-length\***, Section 22.1.3 (Default Print-Object Methods), Section 22.1.3.12 (Printing Structures), Section 22.2.1.4 (Pretty Print Dispatch Tables), Section 22.2.2 (Examples of using the Pretty Printer) 



**print-unreadable-object** *Macro* 



**Syntax:** 



**print-unreadable-object** (*object stream* &amp;key *type identity*) *\{form\}*\* *→* **nil** 



**Arguments and Values:** 



*object*—an *object*; evaluated. 



*stream*—a *stream designator* ; evaluated. 



*type*—a *generalized boolean*; evaluated. 







 



 



*identity*—a *generalized boolean*; evaluated. 



*forms*—an *implicit progn*. 



**Description:** 



Outputs a printed representation of *object* on *stream*, beginning with “#&lt;” and ending with “&gt;”. Everything output to *stream* by the body *forms* is enclosed in the the angle brackets. If *type* is *true*, the output from *forms* is preceded by a brief description of the *object*’s *type* and a space character. If *identity* is *true*, the output from *forms* is followed by a space character and a representation of the *object*’s identity, typically a storage address. 



If either *type* or *identity* is not supplied, its value is *false*. It is valid to omit the body *forms*. If *type* and *identity* are both true and there are no body *forms*, only one space character separates the type and the identity. 



**Examples:** 



;; Note that in this example, the precise form of the output ;; is *implementation-dependent*. 



(defmethod print-object ((obj airplane) stream) 



(print-unreadable-object (obj stream :type t :identity t) 



(princ (tail-number obj) stream))) 



(prin1-to-string my-airplane) 



*→* "#<Airplane NW0773 36000123135>" 



<i><sup>or</sup>→</i> "#<FAA:AIRPLANE NW0773 17>" 



**Exceptional Situations:** 



If **\*print-readably\*** is *true*, **print-unreadable-object** signals an error of *type* **print-not-readable** without printing anything. 



**set-pprint-dispatch** *Function* 



**Syntax:** 



**set-pprint-dispatch** *type-specifier function* &optional *priority table →* **nil** 



**Arguments and Values:** 



*type-specifier*—a *type specifier* . 



*function*—a *function*, a *function name*, or **nil**. 



*priority*—a *real*. The default is 0. 



*table*—a *pprint dispatch table*. The default is the *value* of **\*print-pprint-dispatch\***. 



 



 



**Description:** 



Installs an entry into the *pprint dispatch table* which is *table*. 



*Type-specifier* is the *key* of the entry. The first action of **set-pprint-dispatch** is to remove any pre-existing entry associated with *type-specifier*. This guarantees that there will never be two entries associated with the same *type specifier* in a given *pprint dispatch table*. Equality of *type specifiers* is tested by **equal**. 



Two values are associated with each *type specifier* in a *pprint dispatch table*: a *function* and a *priority*. The *function* must accept two arguments: the *stream* to which output is sent and the *object* to be printed. The *function* should *pretty print* the *object* to the *stream*. The *function* can assume that object satisfies the *type* given by *type-specifier* . The *function* must obey **\*print-readably\***. Any values returned by the *function* are ignored. 



*Priority* is a priority to resolve conflicts when an object matches more than one entry. 



It is permissible for *function* to be **nil**. In this situation, there will be no *type-specifier* entry in *table* after **set-pprint-dispatch** returns. 



**Exceptional Situations:** 



An error is signaled if *priority* is not a *real*. 



**Notes:** 



Since *pprint dispatch tables* are often used to control the pretty printing of Lisp code, it is common for the *type-specifier* to be an *expression* of the form 



(cons *car-type cdr-type*) 



This signifies that the corresponding object must be a cons cell whose *car* matches the *type specifier car-type* and whose *cdr* matches the *type specifier cdr-type*. The *cdr-type* can be omitted in which case it defaults to **t**. 



**write, prin1, print, pprint, princ** *Function* 



**Syntax:** 



**write** *object* &key *array base case circle escape gensym* 



*length level lines miser-width pprint-dispatch* 



*pretty radix readably right-margin stream* 



*→ object* 



**prin1** *object* &optional *output-stream → object* 



**princ** *object* &optional *output-stream → object* 







 



 



**write, prin1, print, pprint, princ** 



**print** *object* &optional *output-stream → object* 



**pprint** *object* &optional *output-stream → hno valuesi* 



**Arguments and Values:** 



*object*—an *object*. 



*output-stream*—an *output stream designator* . The default is *standard output*. 



*array*—a *generalized boolean*. 



*base*—a *radix* . 



*case*—a *symbol* of *type* (member :upcase :downcase :capitalize). 



*circle*—a *generalized boolean*. 



*escape*—a *generalized boolean*. 



*gensym*—a *generalized boolean*. 



*length*—a non-negative *integer* , or **nil**. 



*level*—a non-negative *integer* , or **nil**. 



*lines*—a non-negative *integer* , or **nil**. 



*miser-width*—a non-negative *integer* , or **nil**. 



*pprint-dispatch*—a *pprint dispatch table*. 



*pretty*—a *generalized boolean*. 



*radix*—a *generalized boolean*. 



*readably*—a *generalized boolean*. 



*right-margin*—a non-negative *integer* , or **nil**. 



*stream*—an *output stream designator* . The default is *standard output*. 



**Description:** 



**write**, **prin1**, **princ**, **print**, and **pprint** write the printed representation of *object* to *output-stream*. 



**write** is the general entry point to the *Lisp printer* . For each explicitly supplied *keyword parameter* named in Figure 22–7, the corresponding *printer control variable* is dynamically bound to its *value* while printing goes on; for each *keyword parameter* in Figure 22–7 that is not explicitly supplied, the value of the corresponding *printer control variable* is the same as it was at the time **write** was invoked. Once the appropriate *bindings* are *established*, the *object* is output by the *Lisp printer* . 







 



 



**write, prin1, print, pprint, princ** 



|**Parameter Corresponding Dynamic Variable**|

| :- |

|<p>*array* **\*print-array\*** </p><p>*base* **\*print-base\*** </p><p>*case* **\*print-case\*** </p><p>*circle* **\*print-circle\*** </p><p>*escape* **\*print-escape\*** </p><p>*gensym* **\*print-gensym\*** </p><p>*length* **\*print-length\*** </p><p>*level* **\*print-level\*** </p><p>*lines* **\*print-lines\*** </p><p>*miser-width* **\*print-miser-width\*** </p><p>*pprint-dispatch* **\*print-pprint-dispatch\*** </p><p>*pretty* **\*print-pretty\*** </p><p>*radix* **\*print-radix\*** </p><p>*readably* **\*print-readably\*** </p><p>*right-margin* **\*print-right-margin\***</p>|





**Figure 22–7. Argument correspondences for the WRITE function.** 



**prin1**, **princ**, **print**, and **pprint** implicitly *bind* certain print parameters to particu lar values. The remaining parameter values are taken from **\*print-array\***, **\*print-base\***, **\*print-case\***, **\*print-circle\***, **\*print-escape\***, **\*print-gensym\***, **\*print-length\***, **\*print-level\***, **\*print-lines\***, **\*print-miser-width\***, **\*print-pprint-dispatch\***, **\*print-pretty\***, **\*print-radix\***, and **\*print-right-margin\***. 



**prin1** produces output suitable for input to **read**. It binds **\*print-escape\*** to *true*. 



**princ** is just like **prin1** except that the output has no *escape characters*. It binds **\*print-escape\*** to *false* and **\*print-readably\*** to *false*. The general rule is that output from **princ** is intended to look good to people, while output from **prin1** is intended to be acceptable to **read**. 



**print** is just like **prin1** except that the printed representation of *object* is preceded by a newline and followed by a space. 



**pprint** is just like **print** except that the trailing space is omitted and *object* is printed with the **\*print-pretty\*** flag *non-nil* to produce pretty output. 



*Output-stream* specifies the *stream* to which output is to be sent. 



**Affected By:** 



**\*standard-output\***, **\*terminal-io\***, **\*print-escape\***, **\*print-radix\***, **\*print-base\***, **\*print-circle\***, **\*print-pretty\***, **\*print-level\***, **\*print-length\***, **\*print-case\***, **\*print-gensym\***, **\*print-array\***, **\*read-default-float-format\***. 







 



 



**See Also:** 



**readtable-case**, Section 22.3.4 (FORMAT Printer Operations) 



**Notes:** 



The *functions* **prin1** and **print** do not bind **\*print-readably\***. 



(prin1 object output-stream) 



*≡* (write object :stream output-stream :escape t) 



(princ object output-stream) 



*≡* (write object stream output-stream :escape nil :readably nil) 



(print object output-stream) 



*≡* (progn (terpri output-stream) 



(write object :stream output-stream 



:escape t) 



(write-char #\space output-stream)) 



(pprint object output-stream) 



*≡* (write object :stream output-stream :escape t :pretty t) 



**write-to-string, prin1-to-string, princ-to-string** *Function* 



**Syntax:** 



**write-to-string** *object* &key *array base case circle escape gensym* 



*length level lines miser-width pprint-dispatch* 



*pretty radix readably right-margin* 



*→ string* 



**prin1-to-string** *object → string* 



**princ-to-string** *object → string* 



**Arguments and Values:** 



*object*—an *object*. 



*array*—a *generalized boolean*. 



*base*—a *radix* . 







 



 



**write-to-string, prin1-to-string, princ-to-string** 



*case*—a *symbol* of *type* (member :upcase :downcase :capitalize). 



*circle*—a *generalized boolean*. 



*escape*—a *generalized boolean*. 



*gensym*—a *generalized boolean*. 



*length*—a non-negative *integer* , or **nil**. 



*level*—a non-negative *integer* , or **nil**. 



*lines*—a non-negative *integer* , or **nil**. 



*miser-width*—a non-negative *integer* , or **nil**. 



*pprint-dispatch*—a *pprint dispatch table*. 



*pretty*—a *generalized boolean*. 



*radix*—a *generalized boolean*. 



*readably*—a *generalized boolean*. 



*right-margin*—a non-negative *integer* , or **nil**. 



*string*—a *string*. 



**Description:** 



**write-to-string**, **prin1-to-string**, and **princ-to-string** are used to create a *string* consisting of the printed representation of *object*. *Object* is effectively printed as if by **write**, **prin1**, or **princ**, respectively, and the *characters* that would be output are made into a *string*. 



**write-to-string** is the general output function. It has the ability to specify all the parameters applicable to the printing of *object*. 



**prin1-to-string** acts like **write-to-string** with :escape t, that is, escape characters are written where appropriate. 



**princ-to-string** acts like **write-to-string** with :escape nil :readably nil. Thus no *escape characters* are written. 



All other keywords that would be specified to **write-to-string** are default values when **prin1-to-string** or **princ-to-string** is invoked. 



The meanings and defaults for the keyword arguments to **write-to-string** are the same as those for **write**. 



**Examples:** 



(prin1-to-string "abc") *→* "\"abc\"" 







 



 



(princ-to-string "abc") *→* "abc" 



**Affected By:** 



**\*print-escape\***, **\*print-radix\***, **\*print-base\***, **\*print-circle\***, **\*print-pretty\***, **\*print-level\***, **\*print-length\***, **\*print-case\***, **\*print-gensym\***, **\*print-array\***, **\*read-default-float-format\***. 



**See Also:** 



**write** 



**Notes:** 



(write-to-string *object \&#123;key argument\&#125;*\*) 



*≡* (with-output-to-string (#1=#:string-stream) 



(write object :stream #1# *\&#123;key argument\&#125;*\*)) 



(princ-to-string *object*) 



*≡* (with-output-to-string (string-stream) 



(princ *object* string-stream)) 



(prin1-to-string *object*) 



*≡* (with-output-to-string (string-stream) 



(prin1 *object* string-stream)) 



*∗***print-array***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*implementation-dependent*. 



**Description:** 



Controls the format in which *arrays* are printed. If it is *false*, the contents of *arrays* other than *strings* are never printed. Instead, *arrays* are printed in a concise form using #< that gives enough information for the user to be able to identify the *array*, but does not include the entire *array* contents. If it is *true*, non-*string arrays* are printed using #(...), #\*, or #nA syntax. 



**Affected By:** 



The *implementation*. 







 



 



**See Also:** 



Section 2.4.8.3 (Sharpsign Left-Parenthesis), Section 2.4.8.20 (Sharpsign Less-Than-Sign) *∗***print-base***∗***,** *∗***print-radix***∗ Variable* 



**Value Type:** 



**\*print-base\***—a *radix* . **\*print-radix\***—a *generalized boolean*. 



**Initial Value:** 



The initial *value* of **\*print-base\*** is 10. The initial *value* of **\*print-radix\*** is *false*. 



**Description:** 



**\*print-base\*** and **\*print-radix\*** control the printing of *rationals*. The *value* of **\*print-base\*** is called the *current output base*. 



The *value* of **\*print-base\*** is the *radix* in which the printer will print *rationals*. For radices above 10, letters of the alphabet are used to represent digits above 9. 



If the *value* of **\*print-radix\*** is *true*, the printer will print a radix specifier to indicate the *radix* in which it is printing a *rational* number. The radix specifier is always printed using lowercase letters. If **\*print-base\*** is 2, 8, or 16, then the radix specifier used is #b, #o, or #x, respectively. For *integers*, base ten is indicated by a trailing decimal point instead of a leading radix specifier; for *ratios*, #10r is used. 



**Examples:** 



(let ((\*print-base\* 24.) (\*print-radix\* t)) 



(print 23.)) 



▷ #24rN 



*→* 23 



(setq \*print-base\* 10) *→* 10 



(setq \*print-radix\* nil) *→* NIL 



(dotimes (i 35) 



(let ((\*print-base\* (+ i 2))) ;print the decimal number 40 



(write 40) ;in each base from 2 to 36 



(if (zerop (mod i 10)) (terpri) (format t " ")))) 



▷ 101000 



▷ 1111 220 130 104 55 50 44 40 37 34 



▷ 31 2C 2A 28 26 24 22 20 1J 1I 



▷ 1H 1G 1F 1E 1D 1C 1B 1A 19 18 



▷ 17 16 15 14 



*→* NIL 



(dolist (pb ’(2 3 8 10 16)) 







 



 



(let ((\*print-radix\* t) ;print the integer 10 and 



(\*print-base\* pb)) ;the ratio 1/10 in bases 2, 



(format t "~&~S ~S~%" 10 1/10))) ;3, 8, 10, 16 



▷ #b1010 #b1/1010 



▷ #3r101 #3r1/101 



▷ #o12 #o1/12 



▷ 10. #10r1/10 



▷ #xA #x1/A 



*→* NIL 



**Affected By:** 



Might be *bound* by **format**, and **write**, **write-to-string**. 



**See Also:** 



**format**, **write**, **write-to-string** 



*∗***print-case***∗ Variable* 



**Value Type:** 



One of the *symbols* :upcase, :downcase, or :capitalize. 



**Initial Value:** 



The *symbol* :upcase. 



**Description:** 



The *value* of **\*print-case\*** controls the case (upper, lower, or mixed) in which to print any uppercase characters in the names of *symbols* when vertical-bar syntax is not used. 



**\*print-case\*** has an effect at all times when the *value* of **\*print-escape\*** is *false*. **\*print-case\*** also has an effect when the *value* of **\*print-escape\*** is *true* unless inside an escape context (*i.e.*, unless between *vertical-bars* or after a *slash*). 



**Examples:** 



(defun test-print-case () 



(dolist (\*print-case\* ’(:upcase :downcase :capitalize)) 



(format t "~&~S ~S~%" ’this-and-that ’|And-something-elSE|))) 



*→* TEST-PC 



;; Although the choice of which characters to escape is specified by 



;; \*PRINT-CASE\*, the choice of how to escape those characters 



;; (i.e., whether single escapes or multiple escapes are used) 



;; is implementation-dependent. The examples here show two of the 



;; many valid ways in which escaping might appear. 







 



 



(test-print-case) ;Implementation A 



▷ THIS-AND-THAT |And-something-elSE| 



▷ this-and-that a\n\d-\s\o\m\e\t\h\i\n\g-\e\lse 



▷ This-And-That A\n\d-\s\o\m\e\t\h\i\n\g-\e\lse 



*→* NIL 



(test-print-case) ;Implementation B 



▷ THIS-AND-THAT |And-something-elSE| 



▷ this-and-that a|nd-something-el|se 



▷ This-And-That A|nd-something-el|se 



*→* NIL 



**See Also:** 



**write** 



**Notes:** 



**read** normally converts lowercase characters appearing in *symbols* to corresponding uppercase characters, so that internally print names normally contain only uppercase characters. 



If **\*print-escape\*** is *true*, lowercase characters in the *name* of a *symbol* are always printed in lowercase, and are preceded by a single escape character or enclosed by multiple escape characters; uppercase characters in the *name* of a *symbol* are printed in upper case, in lower case, or in mixed case so as to capitalize words, according to the value of **\*print-case\***. The convention for what constitutes a “word” is the same as for **string-capitalize**. 



*∗***print-circle***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*false*. 



**Description:** 



Controls the attempt to detect circularity and sharing in an *object* being printed. 



If *false*, the printing process merely proceeds by recursive descent without attempting to detect circularity and sharing. 



If *true*, the printer will endeavor to detect cycles and sharing in the structure to be printed, and to use #*n*= and #*n*# syntax to indicate the circularities or shared components. 



If *true*, a user-defined **print-object** *method* can print *objects* to the supplied *stream* using **write**, **prin1**, **princ**, or **format** and expect circularities and sharing to be detected and printed using the 







 



 



#*n*# syntax. If a user-defined **print-object** *method* prints to a *stream* other than the one that was supplied, then circularity detection starts over for that *stream*. 



Note that implementations should not use #*n*# notation when the *Lisp reader* would automatically assure sharing without it (*e.g.*, as happens with *interned symbols*). 



**Examples:** 



(let ((a (list 1 2 3))) 



(setf (cdddr a) a) 



(let ((\*print-circle\* t)) 



(write a) 



:done)) 



▷ #1=(1 2 3 . #1#) 



*→* :DONE 



**See Also:** 



**write** 



**Notes:** 



An attempt to print a circular structure with **\*print-circle\*** set to **nil** may lead to looping behavior and failure to terminate. 



*∗***print-escape***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*true*. 



**Description:** 



If *false*, escape characters and *package prefixes* are not output when an expression is printed. 



If *true*, an attempt is made to print an *expression* in such a way that it can be read again to produce an **equal** *expression*. (This is only a guideline; not a requirement. See **\*print-readably\***.) 



For more specific details of how the *value* of **\*print-escape\*** affects the printing of certain *types*, see Section 22.1.3 (Default Print-Object Methods). 



**Examples:** 



(let ((\*print-escape\* t)) (write #\a)) 







 



 



▷ #\a 



*→* #\a 



(let ((\*print-escape\* nil)) (write #\a)) 



▷ a 



*→* #\a 



**Affected By:** 



**princ**, **prin1**, **format** 



**See Also:** 



**write**, **readtable-case** 



**Notes:** 



**princ** effectively binds **\*print-escape\*** to *false*. **prin1** effectively binds **\*print-escape\*** to *true*. *∗***print-gensym***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*true*. 



**Description:** 



Controls whether the prefix “#:” is printed before *apparently uninterned symbols*. The prefix is printed before such *symbols* if and only if the *value* of **\*print-gensym\*** is *true*. 



**Examples:** 



(let ((\*print-gensym\* nil)) 



(print (gensym))) 



▷ G6040 



*→* #:G6040 



**See Also:** 



**write**, **\*print-escape\*** 







 



 



*∗***print-level***∗***,** *∗***print-length***∗* 



*∗***print-level***∗***,** *∗***print-length***∗ Variable* 



**Value Type:** 



a non-negative *integer* , or **nil**. 



**Initial Value:** 



**nil**. 



**Description:** 



**\*print-level\*** controls how many levels deep a nested *object* will print. If it is *false*, then no control is exercised. Otherwise, it is an *integer* indicating the maximum level to be printed. An *object* to be printed is at level 0; its components (as of a *list* or *vector* ) are at level 1; and so on. If an *object* 



to be recursively printed has components and is at a level equal to or greater than the *value* of **\*print-level\***, then the *object* is printed as “#”. 



**\*print-length\*** controls how many elements at a given level are printed. If it is *false*, there is no limit to the number of components printed. Otherwise, it is an *integer* indicating the maximum number of *elements* of an *object* to be printed. If exceeded, the printer will print “...” in place of the other *elements*. In the case of a *dotted list*, if the *list* contains exactly as many *elements* as the *value* of **\*print-length\***, the terminating *atom* is printed rather than printing “...” 



**\*print-level\*** and **\*print-length\*** affect the printing of an any *object* printed with a list-like syntax. They do not affect the printing of *symbols*, *strings*, and *bit vectors*. 



**Examples:** 



(setq a ’(1 (2 (3 (4 (5 (6))))))) *→* (1 (2 (3 (4 (5 (6)))))) 



(dotimes (i 8) 



(let ((\*print-level\* i)) 



(format t "~&~D – ~S~%" i a))) 



▷ 0 – # 



▷ 1 – (1 #) 



▷ 2 – (1 (2 #)) 



▷ 3 – (1 (2 (3 #))) 



▷ 4 – (1 (2 (3 (4 #)))) 



▷ 5 – (1 (2 (3 (4 (5 #))))) 



▷ 6 – (1 (2 (3 (4 (5 (6)))))) 



▷ 7 – (1 (2 (3 (4 (5 (6)))))) 



*→* NIL 



(setq a ’(1 2 3 4 5 6)) *→* (1 2 3 4 5 6) 



(dotimes (i 7) 



(let ((\*print-length\* i)) 







 



 



(format t "~&~D – ~S~%" i a))) 



▷ 0 – (...) 



▷ 1 – (1 ...) 



▷ 2 – (1 2 ...) 



▷ 3 – (1 2 3 ...) 



▷ 4 – (1 2 3 4 ...) 



▷ 5 – (1 2 3 4 5 6) 



▷ 6 – (1 2 3 4 5 6) 



*→* NIL 



(dolist (level-length ’((0 1) (1 1) (1 2) (1 3) (1 4) 



(2 1) (2 2) (2 3) (3 2) (3 3) (3 4))) 



(let ((\*print-level\* (first level-length)) 



(\*print-length\* (second level-length))) 



(format t "~&~D ~D – ~S~%" 



\*print-level\* \*print-length\* 



’(if (member x y) (+ (car x) 3) ’(foo . #(a b c d "Baz")))))) 



▷ 0 1 – # 



▷ 1 1 – (IF ...) 



▷ 1 2 – (IF # ...) 



▷ 1 3 – (IF # # ...) 



▷ 1 4 – (IF # # #) 



▷ 2 1 – (IF ...) 



▷ 2 2 – (IF (MEMBER X ...) ...) 



▷ 2 3 – (IF (MEMBER X Y) (+ # 3) ...) 



▷ 3 2 – (IF (MEMBER X ...) ...) 



▷ 3 3 – (IF (MEMBER X Y) (+ (CAR X) 3) ...) 



▷ 3 4 – (IF (MEMBER X Y) (+ (CAR X) 3) ’(FOO . #(A B C D ...))) 



*→* NIL 



**See Also:** 



**write** 



*∗***print-lines***∗ Variable* 



**Value Type:** 



a non-negative *integer* , or **nil**. 



**Initial Value:** 



**nil**. 







 



 



**Description:** 



When the *value* of **\*print-lines\*** is other than **nil**, it is a limit on the number of output lines produced when something is pretty printed. If an attempt is made to go beyond that many lines, “..” is printed at the end of the last line followed by all of the suffixes (closing delimiters) that are pending to be printed. 



**Examples:** 



(let ((\*print-right-margin\* 25) (\*print-lines\* 3)) 



(pprint ’(progn (setq a 1 b 2 c 3 d 4)))) 



▷ (PROGN (SETQ A 1 



▷ B 2 



▷ C 3 ..)) 



*→ hno valuesi* 



**Notes:** 



The “..” notation is intentionally different than the “...” notation used for level abbreviation, so that the two different situations can be visually distinguished. 



This notation is used to increase the likelihood that the *Lisp reader* will signal an error if an attempt is later made to read the abbreviated output. Note however that if the truncation occurs in a *string*, as in "This string has been trunc..", the problem situation cannot be detected later and no such error will be signaled. 



*∗***print-miser-width***∗ Variable* 



**Value Type:** 



a non-negative *integer* , or **nil**. 



**Initial Value:** 



*implementation-dependent* 



**Description:** 



If it is not **nil**, the *pretty printer* switches to a compact style of output (called miser style) whenever the width available for printing a substructure is less than or equal to this many *ems*. 







 



 



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



*∗***print-pretty***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 



**Initial Value:** 



*implementation-dependent*. 



**Description:** 



Controls whether the *Lisp printer* calls the *pretty printer* . 



If it is *false*, the *pretty printer* is not used and a minimum of *whitespace*<sub>1</sub> is output when printing an expression. 



If it is *true*, the *pretty printer* is used, and the *Lisp printer* will endeavor to insert extra *whitespace*<sub>1</sub> where appropriate to make *expressions* more readable. 



**\*print-pretty\*** has an effect even when the *value* of **\*print-escape\*** is *false*. 







 



 



**Examples:** 



(setq \*print-pretty\* ’nil) *→* NIL 



(progn (write ’(let ((a 1) (b 2) (c 3)) (+ a b c))) nil) 



▷ (LET ((A 1) (B 2) (C 3)) (+ A B C)) 



*→* NIL 



(let ((\*print-pretty\* t)) 



(progn (write ’(let ((a 1) (b 2) (c 3)) (+ a b c))) nil)) 



▷ (LET ((A 1) 



▷ (B 2) 



▷ (C 3)) 



▷ (+ A B C)) 



*→* NIL 



;; Note that the first two expressions printed by this next form 



;; differ from the second two only in whether escape characters are printed. ;; In all four cases, extra whitespace is inserted by the pretty printer. 



(flet ((test (x) 



(let ((\*print-pretty\* t)) 



(print x) 



(format t "~%~S " x) 



(terpri) (princ x) (princ " ") 



(format t "~%~A " x)))) 



(test ’#’(lambda () (list "a" # ’c #’d)))) 



▷ #’(LAMBDA () 



▷ (LIST "a" # ’C #’D)) 



▷ #’(LAMBDA () 



▷ (LIST "a" # ’C #’D)) 



▷ #’(LAMBDA () 



▷ (LIST a b ’C #’D)) 



▷ #’(LAMBDA () 



▷ (LIST a b ’C #’D)) 



*→* NIL 



**See Also:** 



**write** 



*∗***print-readably***∗ Variable* 



**Value Type:** 



a *generalized boolean*. 







 



 



*∗***print-readably***∗* 



**Initial Value:** 



*false*. 



**Description:** 



If **\*print-readably\*** is *true*, some special rules for printing *objects* go into effect. Specifically, printing any *object O*<sub>1</sub> produces a printed representation that, when seen by the *Lisp reader* while the *standard readtable* is in effect, will produce an *object O*<sub>2</sub> that is *similar* to *O*<sub>1</sub>. The printed representation produced might or might not be the same as the printed representation produced when **\*print-readably\*** is *false*. If printing an *object readably* is not possible, an error of *type* **print-not-readable** is signaled rather than using a syntax (*e.g.*, the “#<” syntax) that would not be readable by the same *implementation*. If the *value* of some other *printer control variable* is such that these requirements would be violated, the *value* of that other *variable* is ignored. 



Specifically, if **\*print-readably\*** is *true*, printing proceeds as if **\*print-escape\***, **\*print-array\***, and **\*print-gensym\*** were also *true*, and as if **\*print-length\***, **\*print-level\***, and **\*print-lines\*** were *false*. 



If **\*print-readably\*** is *false*, the normal rules for printing and the normal interpretations of other *printer control variables* are in effect. 



Individual *methods* for **print-object**, including user-defined *methods*, are responsible for implementing these requirements. 



If **\*read-eval\*** is *false* and **\*print-readably\*** is *true*, any such method that would output a reference to the “#.” *reader macro* will either output something else or will signal an error (as described above). 



**Examples:** 



(let ((x (list "a" ’\a (gensym) ’((a (b (c))) d e f g))) 



(\*print-escape\* nil) 



(\*print-gensym\* nil) 



(\*print-level\* 3) 



(\*print-length\* 3)) 



(write x) 



(let ((\*print-readably\* t)) 



(terpri) 



(write x) 



:done)) 



▷ (a a G4581 ((A #) D E ...)) 



▷ ("a" |a| #:G4581 ((A (B (C))) D E F G)) 



*→* :DONE 



;; This is setup code is shared between the examples 



;; of three hypothetical implementations which follow. 



(setq table (make-hash-table)) *→* #<HASH-TABLE EQL 0/120 32005763> 







 



 



(setf (gethash table 1) ’one) *→* ONE 



(setf (gethash table 2) ’two) *→* TWO 



;; Implementation A 



(let ((\*print-readably\* t)) (print table)) 



Error: Can’t print #<HASH-TABLE EQL 0/120 32005763> readably. 



;; Implementation B 



;; No standardized #S notation for hash tables is defined, 



;; but there might be an implementation-defined notation. 



(let ((\*print-readably\* t)) (print table)) 



▷ #S(HASH-TABLE :TEST EQL :SIZE 120 :CONTENTS (1 ONE 2 TWO)) 



*→* #<HASH-TABLE EQL 0/120 32005763> 



;; Implementation C 



;; Note that #. notation can only be used if \*READ-EVAL\* is true. 



;; If \*READ-EVAL\* were false, this same implementation might have to 



;; signal an error unless it had yet another printing strategy to fall 



;; back on. 



(let ((\*print-readably\* t)) (print table)) 



▷ #.(LET ((HASH-TABLE (MAKE-HASH-TABLE))) 



▷ (SETF (GETHASH 1 HASH-TABLE) ONE) 



▷ (SETF (GETHASH 2 HASH-TABLE) TWO) 



▷ HASH-TABLE) 



*→* #<HASH-TABLE EQL 0/120 32005763> 



**See Also:** 



**write**, **print-unreadable-object** 



**Notes:** 



The rules for “*similarity*” imply that #A or #( syntax cannot be used for *arrays* of *element type* other than **t**. An implementation will have to use another syntax or signal an error of *type* **print-not-readable**. 



*∗***print-right-margin***∗ Variable* 



**Value Type:** 



a non-negative *integer* , or **nil**. 



**Initial Value:** 



**nil**. 





