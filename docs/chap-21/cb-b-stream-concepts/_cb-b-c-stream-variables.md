 



<GlossaryTerm  term={"variable"}><i>Variables</i></GlossaryTerm> whose <GlossaryTerm  term={"value"}><i>values</i></GlossaryTerm> must be <GlossaryTerm  term={"stream"}><i>streams</i></GlossaryTerm> are sometimes called <GlossaryTerm term={"stream variable"}><i>stream variables</i></GlossaryTerm>. 



Certain <GlossaryTerm term={"stream variable"}><i>stream variables</i></GlossaryTerm> are defined by this specification to be the proper source of input or output in various <GlossaryTerm  term={"situation"}><i>situations</i></GlossaryTerm> where no specific <GlossaryTerm  term={"stream"}><i>stream</i></GlossaryTerm> has been specified instead. A complete list of such *standardized stream variables* appears in Figure 21–6. The consequences are undefined if at any time the <GlossaryTerm  term={"value"}><i>value</i></GlossaryTerm> of any of these <GlossaryTerm  term={"variable"}><i>variables</i></GlossaryTerm> is not an *open stream*. 



|**Glossary Term Variable Name**|

| :- |

|<p>*debug I/O* **\*debug-io\*** </p><p>*error output<GlossaryTerm  term={"t"}><i> </i></GlossaryTerm>*\*error-output\*** </p><p>*query I/O* **\*query-io\*** </p><p>*standard input<GlossaryTerm  term={"t"}><i> </i></GlossaryTerm>*\*standard-input\*** </p><p>*standard output<GlossaryTerm  term={"t"}><i> </i></GlossaryTerm>*\*standard-output\*** </p><p>*terminal I/O* <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink> </p><p>*trace output<GlossaryTerm  term={"t"}><i> </i></GlossaryTerm>*\*trace-output\***</p>|





**Figure 21–6. Standardized Stream Variables** 



Note that, by convention, *standardized stream variables* have names ending in “-input\*” if they must be *input streams*, ending in “-output\*” if they must be *output streams*, or ending in “-io\*” if they must be *bidirectional streams*. 







 



 



User programs may <GlossaryTerm  term={"assign"}><i>assign</i></GlossaryTerm> or <GlossaryTerm  term={"bind"}><i>bind</i></GlossaryTerm> any *standardized stream variable* except <DictionaryLink  term={"terminal-io"}><b>\*terminal-io\*</b></DictionaryLink>.
 