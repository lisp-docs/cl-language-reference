 



The *Lisp reader* constructs an *object* from the input text by interpreting each *character* according to its *syntax type*. The *Lisp reader* cannot accept as input everything that the *Lisp printer*  







produces, and the *Lisp reader* has features that are not used by the *Lisp printer* . The *Lisp reader* can be used as a lexical analyzer for a more general user-written parser. 



When the *Lisp reader* is invoked, it reads a single character from the *input stream* and dispatches according to the *syntax type* of that *character* . Every *character* that can appear in the *input stream* is of one of the *syntax types* shown in Figure 2–6. 



|<p>*constituent macro character single escape* </p><p>*invalid multiple escape whitespace*<sub>2</sub></p>|

| :- |





**Figure 2–6. Possible Character Syntax Types** 



The *syntax type* of a *character* in a *readtable* determines how that character is interpreted by the *Lisp reader* while that *readtable* is the *current readtable*. At any given time, every character has exactly one *syntax type*. 



Figure 2–7 lists the *syntax type* of each *character* in *standard syntax* . 



|**character syntax type character syntax type**|

| :- |

|Backspace <i>constituent</i> 0–9 <i>constituent</i> Tab <i>whitespace</i><sub>2</sub> : <i>constituent</i> Newline <i>whitespace</i><sub>2</sub> ; <i>terminating macro char</i> Linefeed <i>whitespace</i><sub>2</sub> &lt; <i>constituent</i> Page <i>whitespace</i><sub>2</sub> = <i>constituent</i> Return <i>whitespace</i><sub>2</sub> &gt; <i>constituent</i> Space <i>whitespace</i><sub>2</sub> ? <i>constituent</i>* ! <i>constituent</i>* @ <i>constituent</i> " <i>terminating macro char</i> A–Z <i>constituent</i> # <i>non-terminating macro char</i> [ <i>constituent</i>* $ <i>constituent</i> \ <i>single escape</i> % <i>constituent</i> ] <i>constituent</i>* &amp; <i>constituent <sup>∧</sup> constituent</i> ’ <i>terminating macro char constituent</i> ( <i>terminating macro char</i> ‘ <i>terminating macro char</i> ) <i>terminating macro char</i> a–z <i>constituent</i> * <i>constituent</i> \{ <i>constituent</i>* + <i>constituent</i> | <i>multiple escape</i> , <i>terminating macro char</i> \} <i>constituent</i>* - <i>constituent</i> &#126; <i>constituent</i> . <i>constituent</i> Rubout <i>constituent</i> / <i>constituent</i>|





**Figure 2–7. Character Syntax Types in Standard Syntax**  







The characters marked with an asterisk (\*) are initially *constituents*, but they are not used in any standard Common Lisp notations. These characters are explicitly reserved to the *programmer* . &#126; is not used in Common Lisp, and reserved to implementors. $ and % are *alphabetic*<sub>2</sub> *characters*, but are not used in the names of any standard Common Lisp *defined names*. 



*Whitespace*<sub>2</sub> characters serve as separators but are otherwise ignored. *Constituent* and *escape characters* are accumulated to make a *token*, which is then interpreted as a *number* or *symbol*. *Macro characters* trigger the invocation of *functions* (possibly user-supplied) that can perform arbitrary parsing actions. *Macro characters* are divided into two kinds, *terminating* and *non* 



*terminating*, depending on whether or not they terminate a *token*. The following are descriptions of each kind of *syntax type*. 



