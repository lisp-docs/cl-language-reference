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

(write-to-string *object &#123;key argument&#125;*\*) 

*≡* (with-output-to-string (#1=#:string-stream) 

(write object :stream #1# *&#123;key argument&#125;*\*)) 

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

Controls the format in which *arrays* are printed. If it is *false*, the contents of *arrays* other than *strings* are never printed. Instead, *arrays* are printed in a concise form using #&#60; that gives enough information for the user to be able to identify the *array*, but does not include the entire *array* contents. If it is *true*, non-*string arrays* are printed using #(...), #\*, or #nA syntax. 

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

&#9655; #24rN 

*→* 23 

(setq \*print-base\* 10) *→* 10 

(setq \*print-radix\* nil) *→* NIL 

(dotimes (i 35) 

(let ((\*print-base\* (+ i 2))) ;print the decimal number 40 

(write 40) ;in each base from 2 to 36 

(if (zerop (mod i 10)) (terpri) (format t " ")))) 

&#9655; 101000 

&#9655; 1111 220 130 104 55 50 44 40 37 34 

&#9655; 31 2C 2A 28 26 24 22 20 1J 1I 

&#9655; 1H 1G 1F 1E 1D 1C 1B 1A 19 18 

&#9655; 17 16 15 14 

*→* NIL 

(dolist (pb ’(2 3 8 10 16)) 



 

 

(let ((\*print-radix\* t) ;print the integer 10 and 

(\*print-base\* pb)) ;the ratio 1/10 in bases 2, 

(format t "~&~S ~S~%" 10 1/10))) ;3, 8, 10, 16 

&#9655; #b1010 #b1/1010 

&#9655; #3r101 #3r1/101 

&#9655; #o12 #o1/12 

&#9655; 10. #10r1/10 

&#9655; #xA #x1/A 

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

&#9655; THIS-AND-THAT |And-something-elSE| 

&#9655; this-and-that a\n\d-\s\o\m\e\t\h\i\n\g-\e\lse 

&#9655; This-And-That A\n\d-\s\o\m\e\t\h\i\n\g-\e\lse 

*→* NIL 

(test-print-case) ;Implementation B 

&#9655; THIS-AND-THAT |And-something-elSE| 

&#9655; this-and-that a|nd-something-el|se 

&#9655; This-And-That A|nd-something-el|se 

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

&#9655; #1=(1 2 3 . #1#) 

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



 

 

&#9655; #\a 

*→* #\a 

(let ((\*print-escape\* nil)) (write #\a)) 

&#9655; a 

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

&#9655; G6040 

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

&#9655; 0 – # 

&#9655; 1 – (1 #) 

&#9655; 2 – (1 (2 #)) 

&#9655; 3 – (1 (2 (3 #))) 

&#9655; 4 – (1 (2 (3 (4 #)))) 

&#9655; 5 – (1 (2 (3 (4 (5 #))))) 

&#9655; 6 – (1 (2 (3 (4 (5 (6)))))) 

&#9655; 7 – (1 (2 (3 (4 (5 (6)))))) 

*→* NIL 

(setq a ’(1 2 3 4 5 6)) *→* (1 2 3 4 5 6) 

(dotimes (i 7) 

(let ((\*print-length\* i)) 



 

 

(format t "~&~D – ~S~%" i a))) 

&#9655; 0 – (...) 

&#9655; 1 – (1 ...) 

&#9655; 2 – (1 2 ...) 

&#9655; 3 – (1 2 3 ...) 

&#9655; 4 – (1 2 3 4 ...) 

&#9655; 5 – (1 2 3 4 5 6) 

&#9655; 6 – (1 2 3 4 5 6) 

*→* NIL 

(dolist (level-length ’((0 1) (1 1) (1 2) (1 3) (1 4) 

(2 1) (2 2) (2 3) (3 2) (3 3) (3 4))) 

(let ((\*print-level\* (first level-length)) 

(\*print-length\* (second level-length))) 

(format t "~&~D ~D – ~S~%" 

\*print-level\* \*print-length\* 

’(if (member x y) (+ (car x) 3) ’(foo . #(a b c d "Baz")))))) 

&#9655; 0 1 – # 

&#9655; 1 1 – (IF ...) 

&#9655; 1 2 – (IF # ...) 

&#9655; 1 3 – (IF # # ...) 

&#9655; 1 4 – (IF # # #) 

&#9655; 2 1 – (IF ...) 

&#9655; 2 2 – (IF (MEMBER X ...) ...) 

&#9655; 2 3 – (IF (MEMBER X Y) (+ # 3) ...) 

&#9655; 3 2 – (IF (MEMBER X ...) ...) 

&#9655; 3 3 – (IF (MEMBER X Y) (+ (CAR X) 3) ...) 

&#9655; 3 4 – (IF (MEMBER X Y) (+ (CAR X) 3) ’(FOO . #(A B C D ...))) 

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

&#9655; (PROGN (SETQ A 1 

&#9655; B 2 

&#9655; C 3 ..)) 

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

If it is *false*, the *pretty printer* is not used and a minimum of *whitespace*&#60;sub&#62;1&#60;/sub&#62; is output when printing an expression. 

If it is *true*, the *pretty printer* is used, and the *Lisp printer* will endeavor to insert extra *whitespace*&#60;sub&#62;1&#60;/sub&#62; where appropriate to make *expressions* more readable. 

**\*print-pretty\*** has an effect even when the *value* of **\*print-escape\*** is *false*. 



 

 

**Examples:** 

(setq \*print-pretty\* ’nil) *→* NIL 

(progn (write ’(let ((a 1) (b 2) (c 3)) (+ a b c))) nil) 

&#9655; (LET ((A 1) (B 2) (C 3)) (+ A B C)) 

*→* NIL 

(let ((\*print-pretty\* t)) 

(progn (write ’(let ((a 1) (b 2) (c 3)) (+ a b c))) nil)) 

&#9655; (LET ((A 1) 

&#9655; (B 2) 

&#9655; (C 3)) 

&#9655; (+ A B C)) 

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

&#9655; #’(LAMBDA () 

&#9655; (LIST "a" # ’C #’D)) 

&#9655; #’(LAMBDA () 

&#9655; (LIST "a" # ’C #’D)) 

&#9655; #’(LAMBDA () 

&#9655; (LIST a b ’C #’D)) 

&#9655; #’(LAMBDA () 

&#9655; (LIST a b ’C #’D)) 

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

If **\*print-readably\*** is *true*, some special rules for printing *objects* go into effect. Specifically, printing any *object O*&#60;sub&#62;1&#60;/sub&#62; produces a printed representation that, when seen by the *Lisp reader* while the *standard readtable* is in effect, will produce an *object O*&#60;sub&#62;2&#60;/sub&#62; that is *similar* to *O*&#60;sub&#62;1&#60;/sub&#62;. The printed representation produced might or might not be the same as the printed representation produced when **\*print-readably\*** is *false*. If printing an *object readably* is not possible, an error of *type* **print-not-readable** is signaled rather than using a syntax (*e.g.*, the “#&#60;” syntax) that would not be readable by the same *implementation*. If the *value* of some other *printer control variable* is such that these requirements would be violated, the *value* of that other *variable* is ignored. 

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

&#9655; (a a G4581 ((A #) D E ...)) 

&#9655; ("a" |a| #:G4581 ((A (B (C))) D E F G)) 

*→* :DONE 

;; This is setup code is shared between the examples 

;; of three hypothetical implementations which follow. 

(setq table (make-hash-table)) *→* #&#60;HASH-TABLE EQL 0/120 32005763&#62; 



 

 

(setf (gethash table 1) ’one) *→* ONE 

(setf (gethash table 2) ’two) *→* TWO 

;; Implementation A 

(let ((\*print-readably\* t)) (print table)) 

Error: Can’t print #&#60;HASH-TABLE EQL 0/120 32005763&#62; readably. 

;; Implementation B 

;; No standardized #S notation for hash tables is defined, 

;; but there might be an implementation-defined notation. 

(let ((\*print-readably\* t)) (print table)) 

&#9655; #S(HASH-TABLE :TEST EQL :SIZE 120 :CONTENTS (1 ONE 2 TWO)) 

*→* #&#60;HASH-TABLE EQL 0/120 32005763&#62; 

;; Implementation C 

;; Note that #. notation can only be used if \*READ-EVAL\* is true. 

;; If \*READ-EVAL\* were false, this same implementation might have to 

;; signal an error unless it had yet another printing strategy to fall 

;; back on. 

(let ((\*print-readably\* t)) (print table)) 

&#9655; #.(LET ((HASH-TABLE (MAKE-HASH-TABLE))) 

&#9655; (SETF (GETHASH 1 HASH-TABLE) ONE) 

&#9655; (SETF (GETHASH 2 HASH-TABLE) TWO) 

&#9655; HASH-TABLE) 

*→* #&#60;HASH-TABLE EQL 0/120 32005763&#62; 

**See Also:** 

**write**, **print-unreadable-object** 

**Notes:** 

The rules for “*similarity*” imply that #A or #( syntax cannot be used for *arrays* of *element type* other than **t**. An implementation will have to use another syntax or signal an error of *type* **print-not-readable**. 

*∗***print-right-margin***∗ Variable* 

**Value Type:** 

a non-negative *integer* , or **nil**. 

**Initial Value:** 

**nil**. 


