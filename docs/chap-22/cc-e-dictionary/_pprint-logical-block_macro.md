**pprint-logical-block** <GlossaryTerm styled={true} term={"macro"}><i>Macro</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> (*stream-symbol object* &amp;key *prefix per-line-prefix suffix*) 



<GlossaryTerm styled={true} term={"declaration"}><i>\{declaration\}</i></GlossaryTerm>\* <GlossaryTerm styled={true} term={"form"}><i>\{form\}</i></GlossaryTerm>\* 



*→* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*stream-symbol*—a *stream variable designator* . 



<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>—an <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>; evaluated. 



:prefix—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; evaluated. Complicated defaulting behavior; see below. 



:per-line-prefix—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; evaluated. Complicated defaulting behavior; see below. :suffix—a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>; evaluated. The default is the *null string*. 



<GlossaryTerm styled={true} term={"declaration"}><i>declaration</i></GlossaryTerm>—a <DictionaryLink styled={true} term={"declare"}><b>declare</b></DictionaryLink> <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm>; not evaluated. 



<GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>—an *implicit progn*. 







 



 



<DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> 



**Description:** 



Causes printing to be grouped into a logical block. 



The logical block is printed to the <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> that is the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> denoted by *stream-symbol*. During the execution of the <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm>, that <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> is <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> to a *pretty printing stream* that supports decisions about the arrangement of output and then forwards the output to the destination stream. All the standard printing functions (*e.g.*, <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, <DictionaryLink styled={true} term={"princ"}><b>princ</b></DictionaryLink>, and <DictionaryLink styled={true} term={"terpri"}><b>terpri</b></DictionaryLink>) can be used to print output to the *pretty printing stream*. All and only the output sent to this *pretty printing stream* is treated as being in the logical block. 



The *prefix* specifies a prefix to be printed before the beginning of the logical block. The *per-line-prefix* specifies a prefix that is printed before the block and at the beginning of each new line in the block. The :prefix and :pre-line-prefix <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm> are mutually exclusive. If neither :prefix nor :per-line-prefix is specified, a *prefix* of the *null string* is assumed. 



The *suffix* specifies a suffix that is printed just after the logical block. 



The <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is normally a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm> that the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are responsible for printing. If <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is not a <GlossaryTerm styled={true} term={"list"}><i>list</i></GlossaryTerm>, it is printed using <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>. (This makes it easier to write printing functions that are robust in the face of malformed arguments.) If <DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"non-nil"}><i>non-nil</i></GlossaryTerm> and <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is a circular (or shared) reference to a <GlossaryTerm styled={true} term={"cons"}><i>cons</i></GlossaryTerm>, then an appropriate “#*n*#” marker is printed. (This makes it easy to write printing 



functions that provide full support for circularity and sharing abbreviation.) If **\*print-level\*** is not <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> and the logical block is at a dynamic nesting depth of greater than **\*print-level\*** in logical blocks, “#” is printed. (This makes easy to write printing functions that provide full support for depth abbreviation.) 



If either of the three conditions above occurs, the indicated output is printed on *stream-symbol* and the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are skipped along with the printing of the :prefix and :suffix. (If the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> are not to be responsible for printing a list, then the first two tests above can be turned off by supplying <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> for the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> argument.) 



In addition to the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> argument of <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>, the arguments of the standard printing functions (such as <DictionaryLink styled={true} term={"write"}><b>write</b></DictionaryLink>, <DictionaryLink styled={true} term={"print"}><b>print</b></DictionaryLink>, <DictionaryLink styled={true} term={"prin1"}><b>prin1</b></DictionaryLink>, and <DictionaryLink styled={true} term={"pprint"}><b>pprint</b></DictionaryLink>, as well as the arguments of the standard *format directives* such as &#126;A, &#126;S, (and &#126;W) are all checked (when necessary) for circularity and sharing. However, such checking is not applied to the arguments of the functions <DictionaryLink styled={true} term={"write-line"}><b>write-line</b></DictionaryLink>, <DictionaryLink styled={true} term={"write-string"}><b>write-string</b></DictionaryLink>, and <DictionaryLink styled={true} term={"write-char"}><b>write-char</b></DictionaryLink> or to the literal text output by <DictionaryLink styled={true} term={"format"}><b>format</b></DictionaryLink>. A consequence of this is that you must use one of the latter functions if you want to print some literal text in the output that is not supposed to be checked for circularity or sharing. 



The body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> of a <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> must not perform any side-effects on the surrounding environment; for example, no <GlossaryTerm styled={true} term={"variable"}><i>variables</i></GlossaryTerm> must be assigned which have not been <GlossaryTerm styled={true} term={"bound"}><i>bound</i></GlossaryTerm> within its scope. 



The <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> may be used regardless of the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink>. 



**Affected By:** 



<DictionaryLink styled={true} term={"print-circle"}><b>\*print-circle\*</b></DictionaryLink>, **\*print-level\***. 







 



 



**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled if any of the :suffix, :prefix, or :per-line-prefix is supplied but does not evaluate to a <GlossaryTerm styled={true} term={"string"}><i>string</i></GlossaryTerm>. 



An error is signaled if :prefix and :pre-line-prefix are both used. 



<DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> and the *pretty printing stream* it creates have *dynamic extent*. The consequences are undefined if, outside of this extent, output is attempted to the *pretty printing stream* it creates. 



It is also unspecified what happens if, within this extent, any output is sent directly to the underlying destination stream. 



**See Also:** 



<DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink>, <DictionaryLink styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></DictionaryLink>, Section 22.3.5.2 (Tilde Less-Than-Sign: Logical Block) 



**Notes:** 



One reason for using the <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> <GlossaryTerm styled={true} term={"macro"}><i>macro</i></GlossaryTerm> when the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> would be to allow it to perform checking for *dotted lists*, as well as (in conjunction with <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink>) checking for **\*print-level\*** or <DictionaryLink styled={true} term={"print-length"}><b>\*print-length\*</b></DictionaryLink> being exceeded. 



Detection of circularity and sharing is supported by the *pretty printer* by in essence performing requested output twice. On the first pass, circularities and sharing are detected and the actual outputting of characters is suppressed. On the second pass, the appropriate “#*n*=” and “#*n*#” markers are inserted and characters are output. This is why the restriction on side-effects is necessary. Obeying this restriction is facilitated by using <DictionaryLink styled={true} term={"pprint-pop"}><b>pprint-pop</b></DictionaryLink>, instead of an ordinary <DictionaryLink styled={true} term={"pop"}><b>pop</b></DictionaryLink> when traversing a list being printed by the body <GlossaryTerm styled={true} term={"form"}><i>forms</i></GlossaryTerm> of the <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>.) 



