 

*Variables* whose *values* must be *streams* are sometimes called *stream variables*. 

Certain *stream variables* are defined by this specification to be the proper source of input or output in various *situations* where no specific *stream* has been specified instead. A complete list of such *standardized stream variables* appears in Figure 21–6. The consequences are undefined if at any time the *value* of any of these *variables* is not an *open stream*. 

|**Glossary Term Variable Name**|
| :- |
|&#60;p&#62;*debug I/O* **\*debug-io\*** &#60;/p&#62;&#60;p&#62;*error output* **\*error-output\*** &#60;/p&#62;&#60;p&#62;*query I/O* **\*query-io\*** &#60;/p&#62;&#60;p&#62;*standard input* **\*standard-input\*** &#60;/p&#62;&#60;p&#62;*standard output* **\*standard-output\*** &#60;/p&#62;&#60;p&#62;*terminal I/O* **\*terminal-io\*** &#60;/p&#62;&#60;p&#62;*trace output* **\*trace-output\***&#60;/p&#62;|


**Figure 21–6. Standardized Stream Variables** 

Note that, by convention, *standardized stream variables* have names ending in “-input\*” if they must be *input streams*, ending in “-output\*” if they must be *output streams*, or ending in “-io\*” if they must be *bidirectional streams*. 



 

 

User programs may *assign* or *bind* any *standardized stream variable* except **\*terminal-io\***.

 