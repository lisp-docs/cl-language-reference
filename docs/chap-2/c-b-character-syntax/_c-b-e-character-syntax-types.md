 



The *Lisp reader* constructs an <ClLinks  term={"object"}><i>object</i></ClLinks> from the input text by interpreting each <ClLinks  term={"character"}><i>character</i></ClLinks> according to its *syntax type*. The *Lisp reader* cannot accept as input everything that the *Lisp printer*  







produces, and the *Lisp reader* has features that are not used by the *Lisp printer* . The *Lisp reader* can be used as a lexical analyzer for a more general user-written parser. 



When the *Lisp reader* is invoked, it reads a single character from the *input stream* and dispatches according to the *syntax type* of that <ClLinks  term={"character"}><i>character</i></ClLinks> . Every <ClLinks  term={"character"}><i>character</i></ClLinks> that can appear in the *input stream* is of one of the *syntax types* shown in Figure 2–6. 



|<p>*constituent macro character single escape* </p><p>*invalid multiple escape whitespace*<sub>2</sub></p>|

| :- |





**Figure 2–6. Possible Character Syntax Types** 



The *syntax type* of a <ClLinks  term={"character"}><i>character</i></ClLinks> in a <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> determines how that character is interpreted by the *Lisp reader* while that <ClLinks  term={"readtable"}><i>readtable</i></ClLinks> is the *current readtable*. At any given time, every character has exactly one *syntax type*. 



Figure 2–7 lists the *syntax type* of each <ClLinks  term={"character"}><i>character</i></ClLinks> in *standard syntax* . 



|**character syntax type character syntax type**|

| :- |

|Backspace <i>constituent</i> 0–9 <i>constituent</i> Tab <i>whitespace</i><sub>2</sub> : <i>constituent</i> Newline <i>whitespace</i><sub>2</sub> ; <i>terminating macro char</i> Linefeed <i>whitespace</i><sub>2</sub> &lt; <i>constituent</i> Page <i>whitespace</i><sub>2</sub> = <i>constituent</i> Return <i>whitespace</i><sub>2</sub> &gt; <i>constituent</i> Space <i>whitespace</i><sub>2</sub> ? <i>constituent</i>* ! <i>constituent</i>* @ <i>constituent</i> " <i>terminating macro char</i> A–Z <i>constituent</i> # <i>non-terminating macro char</i> [ <i>constituent</i>* $ <i>constituent</i> \ <i>single escape</i> % <i>constituent</i> ] <i>constituent</i>* &amp; <i>constituent <sup>∧</sup> constituent</i> ’ <i>terminating macro char constituent</i> ( <i>terminating macro char</i> ‘ <i>terminating macro char</i> ) <i>terminating macro char</i> a–z <i>constituent</i> * <i>constituent</i> \{ <i>constituent</i>* + <i>constituent</i> | <i>multiple escape</i> , <i>terminating macro char</i> \} <i>constituent</i>* - <i>constituent</i> &#126; <i>constituent</i> . <i>constituent</i> Rubout <i>constituent</i> / <i>constituent</i>|





**Figure 2–7. Character Syntax Types in Standard Syntax**  







The characters marked with an asterisk (\*) are initially <ClLinks  term={"constituent"}><i>constituents</i></ClLinks>, but they are not used in any standard Common Lisp notations. These characters are explicitly reserved to the <ClLinks  term={"programmer"}><i>programmer</i></ClLinks> . &#126; is not used in Common Lisp, and reserved to implementors. $ and % are <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>characters</i></ClLinks>, but are not used in the names of any standard Common Lisp *defined names*. 



<ClLinks  term={"whitespace"}><i>Whitespace</i></ClLinks><sub>2</sub> characters serve as separators but are otherwise ignored. <ClLinks  term={"constituent"}><i>Constituent</i></ClLinks> and *escape characters* are accumulated to make a <ClLinks  term={"token"}><i>token</i></ClLinks>, which is then interpreted as a <ClLinks  term={"number"}><i>number</i></ClLinks> or <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. *Macro characters* trigger the invocation of <ClLinks  term={"function"}><i>functions</i></ClLinks> (possibly user-supplied) that can perform arbitrary parsing actions. *Macro characters* are divided into two kinds, <ClLinks  term={"terminating"}><i>terminating</i></ClLinks> and *non* 



<ClLinks  term={"terminating"}><i>terminating</i></ClLinks>, depending on whether or not they terminate a <ClLinks  term={"token"}><i>token</i></ClLinks>. The following are descriptions of each kind of *syntax type*. 



