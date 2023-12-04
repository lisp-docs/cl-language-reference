 



Most *objects* have more than one possible textual representation. For example, the positive *integer* with a magnitude of twenty-seven can be textually expressed in any of these ways: 



27 27. #o33 #x1B #b11011 #.(\* 3 3 3) 81/3 



A list containing the two symbols A and B can also be textually expressed in a variety of ways: 



(A B) (a b) ( a b ) (\A |B|) 



(|\A| 



B 



) 



In general, from the point of view of the *Lisp reader* , wherever *whitespace* is permissible in a textual representation, any number of *spaces* and *newlines* can appear in *standard syntax* . 



When a function such as **print** produces a printed representation, it must choose from among many possible textual representations. In most cases, it chooses a program readable representation, but in certain cases it might use a more compact notation that is not program-readable. 



A number of option variables, called *printer control variables*, are provided to permit control of individual aspects of the printed representation of *objects*. Figure 22–1 shows the *standardized printer control variables*; there might also be *implementation-defined printer control variables*. 



|<p>**\*print-array\* \*print-gensym\* \*print-pprint-dispatch\* \*print-base\* \*print-length\* \*print-pretty\*** </p><p>**\*print-case\* \*print-level\* \*print-radix\*** </p><p>**\*print-circle\* \*print-lines\* \*print-readably\* \*print-escape\* \*print-miser-width\* \*print-right-margin\***</p>|

| :- |





**Figure 22–1. Standardized Printer Control Variables** 







 



 



In addition to the *printer control variables*, the following additional *defined names* relate to or affect the behavior of the *Lisp printer* : 



|**\*package\* \*read-eval\* readtable-case \*read-default-float-format\* \*readtable\***|

| :- |





**Figure 22–2. Additional Influences on the Lisp printer.** 



