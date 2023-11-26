**22.3.4.1 Tilde A: Aesthetic** 

An *arg*, any *object*, is printed without escape characters (as by **princ**). If *arg* is a *string*, its *characters* will be output verbatim. If *arg* is **nil** it will be printed as **nil**; the *colon* modifier (~:A) will cause an *arg* of **nil** to be printed as (), but if *arg* is a composite structure, such as a *list* or *vector* , any contained occurrences of **nil** will still be printed as **nil**. 

~*mincol*A inserts spaces on the right, if necessary, to make the width at least *mincol* columns. The @ modifier causes the spaces to be inserted on the left rather than the right. 

~*mincol*,*colinc*,*minpad*,*padchar*A is the full form of ~A, which allows control of the padding. The *string* is padded on the right (or on the left if the @ modifier is used) with at least *minpad* copies of *padchar* ; padding characters are then inserted *colinc* characters at a time until the total width is at least *mincol*. The defaults are 0 for *mincol* and *minpad*, 1 for *colinc*, and the space character 

for *padchar* . 

~A binds **\*print-escape\*** to *false*, and **\*print-readably\*** to *false*. 

