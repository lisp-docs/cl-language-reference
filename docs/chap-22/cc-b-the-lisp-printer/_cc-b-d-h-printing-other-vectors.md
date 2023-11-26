**22.1.3.7 Printing Other Vectors** 

If **\*print-array\*** is *true* and **\*print-readably\*** is *false*, any *vector* other than a *string* or *bit vector* is printed using general-vector syntax; this means that information about specialized vector representations does not appear. The printed representation of a zero-length *vector* is #(). The printed representation of a non-zero-length *vector* begins with #(. Following that, the first element of the *vector* is printed. If there are any other elements, they are printed in turn, with each such additional element preceded by a *space* if **\*print-pretty\*** is *false*, or *whitespace*\<sub\>1\</sub\> if **\*print-pretty\*** is *true*. A *right-parenthesis* after the last element terminates the printed representation of the *vector* . The printing of *vectors* is affected by **\*print-level\*** and **\*print-length\***. If the *vector* has a *fill pointer* , then only those elements below the *fill pointer* are printed. 

If both **\*print-array\*** and **\*print-readably\*** are *false*, the *vector* is not printed as described above, but in a format (using #\<) that is concise but not readable. 

If **\*print-readably\*** is *true*, the *vector* prints in an *implementation-defined* manner; see the *variable* **\*print-readably\***. 

For information on how the *Lisp reader* parses these “other *vectors*,” see Section 2.4.8.3 (Sharpsign Left-Parenthesis). 

Printer **22–9**

 

 

