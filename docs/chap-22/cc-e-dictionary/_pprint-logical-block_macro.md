**pprint-logical-block** <ClLinks styled={true} term={"macro"}><i>Macro</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> (*stream-symbol object* &amp;key *prefix per-line-prefix suffix*) 



<ClLinks styled={true} term={"declaration"}><i>\{declaration\}</i></ClLinks>\* <ClLinks styled={true} term={"form"}><i>\{form\}</i></ClLinks>\* 



→ <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*stream-symbol*—a <GlossaryTerm styled={true} term={"stream variable designator"}><i>stream variable designator</i></GlossaryTerm> . 



<ClLinks styled={true} term={"object"}><i>object</i></ClLinks>—an <ClLinks styled={true} term={"object"}><i>object</i></ClLinks>; evaluated. 



:prefix—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; evaluated. Complicated defaulting behavior; see below. 



:per-line-prefix—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; evaluated. Complicated defaulting behavior; see below. :suffix—a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>; evaluated. The default is the *null string*. 



<ClLinks styled={true} term={"declaration"}><i>declaration</i></ClLinks>—a <ClLinks styled={true} term={"declare"}><b>declare</b></ClLinks> <ClLinks styled={true} term={"expression"}><i>expression</i></ClLinks>; not evaluated. 



<ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>—an <GlossaryTerm styled={true} term={"implicit progn"}><i>implicit progn</i></GlossaryTerm>. 







 



 



<ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> 



**Description:** 



Causes printing to be grouped into a logical block. 



The logical block is printed to the <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> that is the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of the <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> denoted by *stream-symbol*. During the execution of the <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks>, that <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> is <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> to a <GlossaryTerm styled={true} term={"pretty printing stream"}><i>pretty printing stream</i></GlossaryTerm> that supports decisions about the arrangement of output and then forwards the output to the destination stream. All the standard printing functions (*e.g.*, <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"princ"}><b>princ</b></ClLinks>, and <ClLinks styled={true} term={"terpri"}><b>terpri</b></ClLinks>) can be used to print output to the <GlossaryTerm styled={true} term={"pretty printing stream"}><i>pretty printing stream</i></GlossaryTerm>. All and only the output sent to this <GlossaryTerm styled={true} term={"pretty printing stream"}><i>pretty printing stream</i></GlossaryTerm> is treated as being in the logical block. 



The *prefix* specifies a prefix to be printed before the beginning of the logical block. The *per-line-prefix* specifies a prefix that is printed before the block and at the beginning of each new line in the block. The :prefix and :pre-line-prefix <ClLinks styled={true} term={"argument"}><i>arguments</i></ClLinks> are mutually exclusive. If neither :prefix nor :per-line-prefix is specified, a *prefix* of the *null string* is assumed. 



The *suffix* specifies a suffix that is printed just after the logical block. 



The <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is normally a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> that the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are responsible for printing. If <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is not a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks>, it is printed using <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>. (This makes it easier to write printing functions that are robust in the face of malformed arguments.) If <ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks> is <ClLinks styled={true} term={"non-nil"}><i>non-nil</i></ClLinks> and <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> is a circular (or shared) reference to a <ClLinks styled={true} term={"cons"}><i>cons</i></ClLinks>, then an appropriate “#*n*#” marker is printed. (This makes it easy to write printing 



functions that provide full support for circularity and sharing abbreviation.) If **\*print-level\*** is not <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and the logical block is at a dynamic nesting depth of greater than **\*print-level\*** in logical blocks, “#” is printed. (This makes easy to write printing functions that provide full support for depth abbreviation.) 



If either of the three conditions above occurs, the indicated output is printed on *stream-symbol* and the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are skipped along with the printing of the :prefix and :suffix. (If the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> are not to be responsible for printing a list, then the first two tests above can be turned off by supplying <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> for the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> argument.) 



In addition to the <ClLinks styled={true} term={"object"}><i>object</i></ClLinks> argument of <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>, the arguments of the standard printing functions (such as <ClLinks styled={true} term={"write"}><b>write</b></ClLinks>, <ClLinks styled={true} term={"print"}><b>print</b></ClLinks>, <ClLinks styled={true} term={"prin1"}><b>prin1</b></ClLinks>, and <ClLinks styled={true} term={"pprint"}><b>pprint</b></ClLinks>, as well as the arguments of the standard <GlossaryTerm styled={true} term={"format directive"}><i>format directives</i></GlossaryTerm> such as &#126;A, &#126;S, (and &#126;W) are all checked (when necessary) for circularity and sharing. However, such checking is not applied to the arguments of the functions <ClLinks styled={true} term={"write-line"}><b>write-line</b></ClLinks>, <ClLinks styled={true} term={"write-string"}><b>write-string</b></ClLinks>, and <ClLinks styled={true} term={"write-char"}><b>write-char</b></ClLinks> or to the literal text output by <ClLinks styled={true} term={"format"}><b>format</b></ClLinks>. A consequence of this is that you must use one of the latter functions if you want to print some literal text in the output that is not supposed to be checked for circularity or sharing. 



The body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> of a <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> must not perform any side-effects on the surrounding environment; for example, no <ClLinks styled={true} term={"variable"}><i>variables</i></ClLinks> must be assigned which have not been <ClLinks styled={true} term={"bound"}><i>bound</i></ClLinks> within its scope. 



The <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> may be used regardless of the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks>. 



**Affected By:** 



<ClLinks styled={true} term={"print-circle"}><b>\*print-circle\*</b></ClLinks>, **\*print-level\***. 







 



 



**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> is signaled if any of the :suffix, :prefix, or :per-line-prefix is supplied but does not evaluate to a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>. 



An error is signaled if :prefix and :pre-line-prefix are both used. 



<ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> and the <GlossaryTerm styled={true} term={"pretty printing stream"}><i>pretty printing stream</i></GlossaryTerm> it creates have <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. The consequences are undefined if, outside of this extent, output is attempted to the <GlossaryTerm styled={true} term={"pretty printing stream"}><i>pretty printing stream</i></GlossaryTerm> it creates. 



It is also unspecified what happens if, within this extent, any output is sent directly to the underlying destination stream. 



**See Also:** 



<ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks>, <ClLinks styled={true} term={"pprint-exit-if-list-exhausted"}><b>pprint-exit-if-list-exhausted</b></ClLinks>, Section 22.3.5.2 (Tilde Less-Than-Sign: Logical Block) 



**Notes:** 



One reason for using the <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> when the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> would be to allow it to perform checking for <GlossaryTerm styled={true} term={"dotted list"}><i>dotted lists</i></GlossaryTerm>, as well as (in conjunction with <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks>) checking for **\*print-level\*** or <ClLinks styled={true} term={"print-length"}><b>\*print-length\*</b></ClLinks> being exceeded. 



Detection of circularity and sharing is supported by the <GlossaryTerm styled={true} term={"pretty printer"}><i>pretty printer</i></GlossaryTerm> by in essence performing requested output twice. On the first pass, circularities and sharing are detected and the actual outputting of characters is suppressed. On the second pass, the appropriate “#*n*=” and “#*n*#” markers are inserted and characters are output. This is why the restriction on side-effects is necessary. Obeying this restriction is facilitated by using <ClLinks styled={true} term={"pprint-pop"}><b>pprint-pop</b></ClLinks>, instead of an ordinary <ClLinks styled={true} term={"pop"}><b>pop</b></ClLinks> when traversing a list being printed by the body <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> of the <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>.) 



