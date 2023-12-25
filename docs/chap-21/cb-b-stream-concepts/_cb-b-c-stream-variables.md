 



<ClLinks  term={"variable"}><i>Variables</i></ClLinks> whose <ClLinks  term={"value"}><i>values</i></ClLinks> must be <ClLinks  term={"stream"}><i>streams</i></ClLinks> are sometimes called *stream variables*. 



Certain *stream variables* are defined by this specification to be the proper source of input or output in various <ClLinks  term={"situation"}><i>situations</i></ClLinks> where no specific <ClLinks  term={"stream"}><i>stream</i></ClLinks> has been specified instead. A complete list of such *standardized stream variables* appears in Figure 21–6. The consequences are undefined if at any time the <ClLinks  term={"value"}><i>value</i></ClLinks> of any of these <ClLinks  term={"variable"}><i>variables</i></ClLinks> is not an *open stream*. 



|**Glossary Term Variable Name**|

| :- |

|<p>*debug I/O* **\*debug-io\*** </p><p>*error output<ClLinks  term={"t"}><i> </i></ClLinks>*\*error-output\*** </p><p>*query I/O* **\*query-io\*** </p><p>*standard input<ClLinks  term={"t"}><i> </i></ClLinks>*\*standard-input\*** </p><p>*standard output<ClLinks  term={"t"}><i> </i></ClLinks>*\*standard-output\*** </p><p>*terminal I/O* <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks> </p><p>*trace output<ClLinks  term={"t"}><i> </i></ClLinks>*\*trace-output\***</p>|





**Figure 21–6. Standardized Stream Variables** 



Note that, by convention, *standardized stream variables* have names ending in “-input\*” if they must be *input streams*, ending in “-output\*” if they must be *output streams*, or ending in “-io\*” if they must be *bidirectional streams*. 







 



 



User programs may <ClLinks  term={"assign"}><i>assign</i></ClLinks> or <ClLinks  term={"bind"}><i>bind</i></ClLinks> any *standardized stream variable* except <ClLinks  term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>.
 