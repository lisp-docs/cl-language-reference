 



<ClLinks styled={true} term={"variable"}><i>Variables</i></ClLinks> whose <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> must be <ClLinks styled={true} term={"stream"}><i>streams</i></ClLinks> are sometimes called *stream variables*. 



Certain *stream variables* are defined by this specification to be the proper source of input or output in various <ClLinks styled={true} term={"situation"}><i>situations</i></ClLinks> where no specific <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> has been specified instead. A complete list of such *standardized stream variables* appears in Figure 21–6. The consequences are undefined if at any time the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of any of these <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> is not an *open stream*. 



|**Glossary Term Variable Name**|

| :- |

|<p>*debug I/O* **\*debug-io\*** </p><p>*error output<ClLinks styled={true} term={"t"}><i> </i></ClLinks>*\*error-output\*** </p><p>*query I/O* **\*query-io\*** </p><p>*standard input<ClLinks styled={true} term={"t"}><i> </i></ClLinks>*\*standard-input\*** </p><p>*standard output<ClLinks styled={true} term={"t"}><i> </i></ClLinks>*\*standard-output\*** </p><p>*terminal I/O* <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks> </p><p>*trace output<ClLinks styled={true} term={"t"}><i> </i></ClLinks>*\*trace-output\***</p>|





**Figure 21–6. Standardized Stream Variables** 



Note that, by convention, *standardized stream variables* have names ending in “-input\*” if they must be *input streams*, ending in “-output\*” if they must be *output streams*, or ending in “-io\*” if they must be *bidirectional streams*. 







 



 



User programs may <ClLinks styled={true} term={"assign"}><i>assign</i></ClLinks> or <ClLinks styled={true} term={"bind"}><i>bind</i></ClLinks> any *standardized stream variable* except <ClLinks styled={true} term={"terminal-io"}><b>\*terminal-io\*</b></ClLinks>.
 