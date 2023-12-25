**pprint-newline** <GlossaryTerm styled={true} term={"function"}><i>Function</i></GlossaryTerm> 



**Syntax:** 



<DictionaryLink styled={true} term={"pprint-newline"}><b>pprint-newline</b></DictionaryLink> *kind* &amp;optional *stream →* <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> 



**Arguments and Values:** 



*kind*—one of :linear, :fill, :miser, or :mandatory. 



<GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>—a *stream designator* . The default is *standard output*. 



**Description:** 



If <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm> is a *pretty printing stream* and the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, a line break is inserted in the output when the appropriate condition below is satisfied; otherwise, <DictionaryLink styled={true} term={"pprint-newline"}><b>pprint-newline</b></DictionaryLink> has no effect. 



*Kind* specifies the style of conditional newline. This <GlossaryTerm styled={true} term={"parameter"}><i>parameter</i></GlossaryTerm> is treated as follows: 



 



 



<DictionaryLink styled={true} term={"pprint-newline"}><b>pprint-newline</b></DictionaryLink> 



:linear 



This specifies a “linear-style” *conditional newline*. A line break is inserted if and only if the immediately containing <GlossaryTerm styled={true} term={"section"}><i>section</i></GlossaryTerm> cannot be printed on one line. The effect of this is that line breaks are either inserted at every linear-style conditional newline in a logical block or at none of them. 



:miser 



This specifies a “miser-style” *conditional newline*. A line break is inserted if and only if the immediately containing <GlossaryTerm styled={true} term={"section"}><i>section</i></GlossaryTerm> cannot be printed on one line and miser style is in effect in the immediately containing logical block. The effect of this is that miser-style conditional newlines act like linear-style conditional newlines, but only when miser style is in effect. Miser style is in effect for a logical block if and only if the starting position of the logical block is less than or equal to <DictionaryLink styled={true} term={"print-miser-width"}><b>\*print-miser-width\*</b></DictionaryLink> <GlossaryTerm styled={true} term={"em"}><i>ems</i></GlossaryTerm> from the right margin. 



:fill 



This specifies a “fill-style” *conditional newline*. A line break is inserted if and only if either (a) the following <GlossaryTerm styled={true} term={"section"}><i>section</i></GlossaryTerm> cannot be printed on the end of the current line, (b) the preceding <GlossaryTerm styled={true} term={"section"}><i>section</i></GlossaryTerm> was not printed on a single line, or (c) the immediately containing <GlossaryTerm styled={true} term={"section"}><i>section</i></GlossaryTerm> cannot be printed on one line and miser style is in effect in the immediately containing logical block. If a logical block is broken up into a number of subsections by fill-style conditional newlines, the basic effect is that the logical block is printed with as many subsections as possible on each line. However, if miser style is in effect, fill-style conditional newlines act like linear-style conditional newlines. 



:mandatory 



This specifies a “mandatory-style” *conditional newline*. A line break is always inserted. This implies that none of the containing <GlossaryTerm styled={true} term={"section"}><i>sections</i></GlossaryTerm> can be printed on a single line and will therefore trigger the insertion of line breaks at linear-style conditional newlines in these <GlossaryTerm styled={true} term={"section"}><i>sections</i></GlossaryTerm>. 



When a line break is inserted by any type of conditional newline, any blanks that immediately precede the conditional newline are omitted from the output and indentation is introduced at the beginning of the next line. By default, the indentation causes the following line to begin in the same horizontal position as the first character in the immediately containing logical block. (The indentation can be changed via <DictionaryLink styled={true} term={"pprint-indent"}><b>pprint-indent</b></DictionaryLink>.) 



There are a variety of ways unconditional newlines can be introduced into the output (*i.e.*, via <DictionaryLink styled={true} term={"terpri"}><b>terpri</b></DictionaryLink> or by printing a string containing a newline character). As with mandatory conditional newlines, this prevents any of the containing <GlossaryTerm styled={true} term={"section"}><i>sections</i></GlossaryTerm> from being printed on one line. In general, when an unconditional newline is encountered, it is printed out without suppression of the preceding blanks and without any indentation following it. However, if a per-line prefix has been specified (see <DictionaryLink styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></DictionaryLink>), this prefix will always be printed no matter how a newline originates. 







 



 



**Examples:**
```lisp

See Section 22.2.2 (Examples of using the Pretty Printer). 

```
**Side Effects:** 



Output to <GlossaryTerm styled={true} term={"stream"}><i>stream</i></GlossaryTerm>. 



**Affected By:** 



<DictionaryLink styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></DictionaryLink>, **\*print-miser\***. The presence of containing logical blocks. The placement of newlines and conditional newlines. 



**Exceptional Situations:** 



An error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"type-error"}><b>type-error</b></DictionaryLink> is signaled if *kind* is not one of :linear, :fill, :miser, or :mandatory. 



**See Also:** 



Section 22.3.5.1 (Tilde Underscore: Conditional Newline), Section 22.2.2 (Examples of using the Pretty Printer) 



