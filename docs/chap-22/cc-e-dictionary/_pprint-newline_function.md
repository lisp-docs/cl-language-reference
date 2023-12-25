**pprint-newline** <ClLinks styled={true} term={"function"}><i>Function</i></ClLinks> 



**Syntax:** 



<ClLinks styled={true} term={"pprint-newline"}><b>pprint-newline</b></ClLinks> *kind* &amp;optional *stream →* <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> 



**Arguments and Values:** 



*kind*—one of :linear, :fill, :miser, or :mandatory. 



<ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>—a *stream designator* . The default is *standard output*. 



**Description:** 



If <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks> is a *pretty printing stream* and the <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> of <ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks> is <ClLinks styled={true} term={"true"}><i>true</i></ClLinks>, a line break is inserted in the output when the appropriate condition below is satisfied; otherwise, <ClLinks styled={true} term={"pprint-newline"}><b>pprint-newline</b></ClLinks> has no effect. 



*Kind* specifies the style of conditional newline. This <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> is treated as follows: 



 



 



<ClLinks styled={true} term={"pprint-newline"}><b>pprint-newline</b></ClLinks> 



:linear 



This specifies a “linear-style” *conditional newline*. A line break is inserted if and only if the immediately containing <ClLinks styled={true} term={"section"}><i>section</i></ClLinks> cannot be printed on one line. The effect of this is that line breaks are either inserted at every linear-style conditional newline in a logical block or at none of them. 



:miser 



This specifies a “miser-style” *conditional newline*. A line break is inserted if and only if the immediately containing <ClLinks styled={true} term={"section"}><i>section</i></ClLinks> cannot be printed on one line and miser style is in effect in the immediately containing logical block. The effect of this is that miser-style conditional newlines act like linear-style conditional newlines, but only when miser style is in effect. Miser style is in effect for a logical block if and only if the starting position of the logical block is less than or equal to <ClLinks styled={true} term={"print-miser-width"}><b>\*print-miser-width\*</b></ClLinks> <ClLinks styled={true} term={"em"}><i>ems</i></ClLinks> from the right margin. 



:fill 



This specifies a “fill-style” *conditional newline*. A line break is inserted if and only if either (a) the following <ClLinks styled={true} term={"section"}><i>section</i></ClLinks> cannot be printed on the end of the current line, (b) the preceding <ClLinks styled={true} term={"section"}><i>section</i></ClLinks> was not printed on a single line, or (c) the immediately containing <ClLinks styled={true} term={"section"}><i>section</i></ClLinks> cannot be printed on one line and miser style is in effect in the immediately containing logical block. If a logical block is broken up into a number of subsections by fill-style conditional newlines, the basic effect is that the logical block is printed with as many subsections as possible on each line. However, if miser style is in effect, fill-style conditional newlines act like linear-style conditional newlines. 



:mandatory 



This specifies a “mandatory-style” *conditional newline*. A line break is always inserted. This implies that none of the containing <ClLinks styled={true} term={"section"}><i>sections</i></ClLinks> can be printed on a single line and will therefore trigger the insertion of line breaks at linear-style conditional newlines in these <ClLinks styled={true} term={"section"}><i>sections</i></ClLinks>. 



When a line break is inserted by any type of conditional newline, any blanks that immediately precede the conditional newline are omitted from the output and indentation is introduced at the beginning of the next line. By default, the indentation causes the following line to begin in the same horizontal position as the first character in the immediately containing logical block. (The indentation can be changed via <ClLinks styled={true} term={"pprint-indent"}><b>pprint-indent</b></ClLinks>.) 



There are a variety of ways unconditional newlines can be introduced into the output (*i.e.*, via <ClLinks styled={true} term={"terpri"}><b>terpri</b></ClLinks> or by printing a string containing a newline character). As with mandatory conditional newlines, this prevents any of the containing <ClLinks styled={true} term={"section"}><i>sections</i></ClLinks> from being printed on one line. In general, when an unconditional newline is encountered, it is printed out without suppression of the preceding blanks and without any indentation following it. However, if a per-line prefix has been specified (see <ClLinks styled={true} term={"pprint-logical-block"}><b>pprint-logical-block</b></ClLinks>), this prefix will always be printed no matter how a newline originates. 







 



 



**Examples:**
```lisp
See Section 22.2.2 (Examples of using the Pretty Printer). 
```
**Side Effects:** 



Output to <ClLinks styled={true} term={"stream"}><i>stream</i></ClLinks>. 



**Affected By:** 



<ClLinks styled={true} term={"print-pretty"}><b>\*print-pretty\*</b></ClLinks>, **\*print-miser\***. The presence of containing logical blocks. The placement of newlines and conditional newlines. 



**Exceptional Situations:** 



An error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"type-error"}><b>type-error</b></ClLinks> is signaled if *kind* is not one of :linear, :fill, :miser, or :mandatory. 



**See Also:** 



Section 22.3.5.1 (Tilde Underscore: Conditional Newline), Section 22.2.2 (Examples of using the Pretty Printer) 



