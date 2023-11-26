 

*Variables* whose *values* must be *streams* are sometimes called *stream variables*. 

Certain *stream variables* are defined by this specification to be the proper source of input or output in various *situations* where no specific *stream* has been specified instead. A complete list of such *standardized stream variables* appears in Figure 21–6. The consequences are undefined if at any time the *value* of any of these *variables* is not an *open stream*. 

|**Glossary Term Variable Name**|
| :- |
|\<p\>*debug I/O* **\*debug-io\*** \</p\>\<p\>*error output* **\*error-output\*** \</p\>\<p\>*query I/O* **\*query-io\*** \</p\>\<p\>*standard input* **\*standard-input\*** \</p\>\<p\>*standard output* **\*standard-output\*** \</p\>\<p\>*terminal I/O* **\*terminal-io\*** \</p\>\<p\>*trace output* **\*trace-output\***\</p\>|


**Figure 21–6. Standardized Stream Variables** 

Note that, by convention, *standardized stream variables* have names ending in “-input\*” if they must be *input streams*, ending in “-output\*” if they must be *output streams*, or ending in “-io\*” if they must be *bidirectional streams*. 



 

 

User programs may *assign* or *bind* any *standardized stream variable* except **\*terminal-io\***.

 