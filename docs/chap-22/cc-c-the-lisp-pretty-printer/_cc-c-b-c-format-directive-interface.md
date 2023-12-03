 

The primary interface to operations for dynamically determining the arrangement of output is provided through the functions and macros of the pretty printer. Figure 22–4 shows the defined names related to *pretty printing*. 

|&#60;p&#62;**\*print-lines\* pprint-dispatch pprint-pop \*print-miser-width\* pprint-exit-if-list-exhausted pprint-tab \*print-pprint-dispatch\* pprint-fill pprint-tabular \*print-right-margin\* pprint-indent set-pprint-dispatch copy-pprint-dispatch pprint-linear write** &#60;/p&#62;&#60;p&#62;**format pprint-logical-block** &#60;/p&#62;&#60;p&#62;**formatter pprint-newline**&#60;/p&#62;|
| :- |


**Figure 22–4. Defined names related to pretty printing.** 

Figure 22–5 identifies a set of *format directives* which serve as an alternate interface to the same pretty printing operations in a more textually compact form. 

|&#60;p&#62;~I ~W ~&#60;...~:&#62; &#60;/p&#62;&#60;p&#62;~:T ~/.../ ~&#60;/p&#62;|
| :- |


**Figure 22–5. Format directives related to Pretty Printing** 



 

 

