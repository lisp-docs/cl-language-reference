The *Lisp reader* constructs an <GlossaryTerm  term={"object"}><i>object</i></GlossaryTerm> from the input text by interpreting each <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> according to its <GlossaryTerm styled={true} term={"syntax type"}><i>syntax type</i></GlossaryTerm>. The *Lisp reader* cannot accept as input everything that the *Lisp printer* produces, and the *Lisp reader* has features that are not used by the *Lisp printer*. The *Lisp reader* can be used as a lexical analyzer for a more general user-written parser.

When the *Lisp reader* is invoked, it reads a single character from the *input stream* and dispatches according to the <GlossaryTerm styled={true} term={"syntax type"}><i>syntax type</i></GlossaryTerm> of that <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> . Every <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> that can appear in the *input stream* is of one of the <GlossaryTerm styled={true} term={"syntax type"}><i>syntax types</i></GlossaryTerm> shown in Figure 2–6.

<br />

**Figure 2–6. Possible Character Syntax Types**

<br />

| Syntax Type |
|---|---|
| constituent |
| macro character |
| single escape |
| multiple escape |
| whitespace<sub>2</sub> |
| invalid |

<br />

The <GlossaryTerm styled={true} term={"syntax type"}><i>syntax type</i></GlossaryTerm> of a <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> in a <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> determines how that character is interpreted by the *Lisp reader* while that <GlossaryTerm  term={"readtable"}><i>readtable</i></GlossaryTerm> is the <GlossaryTerm styled={true} term={"current readtable"}><i>current readtable</i></GlossaryTerm>. At any given time, every character has exactly one <GlossaryTerm styled={true} term={"syntax type"}><i>syntax type</i></GlossaryTerm>. 

<br />

Figure 2–7 lists the <GlossaryTerm styled={true} term={"syntax type"}><i>syntax type</i></GlossaryTerm> of each <GlossaryTerm  term={"character"}><i>character</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"standard syntax"}><i>standard syntax</i></GlossaryTerm>.

<br />

| Character | Syntax Type |
|---|---|
| Backspace | constituent |
| 0–9 | constituent |
| Tab | whitespace<sub>2</sub> |
| : | constituent |
| Newline | whitespace<sub>2</sub> |
| ; | terminating macro char |
| Linefeed | whitespace<sub>2</sub> |
| < | constituent |
| = | constituent |
| > | constituent |
| ? | constituent |
| ! | constituent |
| @ | constituent |
| " | terminating macro char |
| A–Z | constituent |
| # | non-terminating macro char |
| [ | constituent |
| $ | constituent |
| \ | single escape |
| % | constituent |
| ] | constituent |
| & | constituent |
| ’ | terminating macro char |
| ( | terminating macro char |
| ‘ | terminating macro char |
| ) | terminating macro char |
| a–z | constituent |
| * | constituent |
| { | constituent |
| + | constituent |
| | | multiple escape |
| , | terminating macro char |
| } | constituent |
| - | constituent |
| ~ | constituent |
| . | constituent |
| Rubout | constituent |
| / | constituent |

|**character syntax type character syntax type**|
| :- |
|Backspace <i>constituent</i> 0–9 <i>constituent</i> Tab <i>whitespace</i><sub>2</sub> : <i>constituent</i> Newline <i>whitespace</i><sub>2</sub> ; <i>terminating macro char</i> Linefeed <i>whitespace</i><sub>2</sub> &lt; <i>constituent</i> Page <i>whitespace</i><sub>2</sub> = <i>constituent</i> Return <i>whitespace</i><sub>2</sub> &gt; <i>constituent</i> Space <i>whitespace</i><sub>2</sub> ? <i>constituent</i>* ! <i>constituent</i>* @ <i>constituent</i> " <i>terminating macro char</i> A–Z <i>constituent</i> # <i>non-terminating macro char</i> [ <i>constituent</i>* $ <i>constituent</i> \ <i>single escape</i> % <i>constituent</i> ] <i>constituent</i>* &amp; <i>constituent <sup>∧</sup> constituent</i> ’ <i>terminating macro char constituent</i> ( <i>terminating macro char</i> ‘ <i>terminating macro char</i> ) <i>terminating macro char</i> a–z <i>constituent</i> * <i>constituent</i> \{ <i>constituent</i>* + <i>constituent</i> | <i>multiple escape</i> , <i>terminating macro char</i> \} <i>constituent</i>* - <i>constituent</i> &#126; <i>constituent</i> . <i>constituent</i> Rubout <i>constituent</i> / <i>constituent</i>|

<br />

**Figure 2–7. Character Syntax Types in Standard Syntax**

<br />

The characters marked with an asterisk (\*) are initially <GlossaryTerm  term={"constituent"}><i>constituents</i></GlossaryTerm>, but they are not used in any standard Common Lisp notations. These characters are explicitly reserved to the <GlossaryTerm  term={"programmer"}><i>programmer</i></GlossaryTerm> . `~` is not used in Common Lisp, and reserved to implementors. `$` and `%` are <GlossaryTerm  term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub> <GlossaryTerm  term={"character"}><i>characters</i></GlossaryTerm>, but are not used in the names of any standard Common Lisp <GlossaryTerm styled={true} term={"defined name"}><i>defined names</i></GlossaryTerm>. 



<GlossaryTerm  term={"whitespace"}><i>Whitespace</i></GlossaryTerm><sub>2</sub> characters serve as separators but are otherwise ignored. <GlossaryTerm  term={"constituent"}><i>Constituent</i></GlossaryTerm> and *escape characters* are accumulated to make a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>, which is then interpreted as a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> or <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. <GlossaryTerm styled={true} term={"macro character"}><i>Macro characters</i></GlossaryTerm> trigger the invocation of <GlossaryTerm  term={"function"}><i>functions</i></GlossaryTerm> (possibly user-supplied) that can perform arbitrary parsing actions. <GlossaryTerm styled={true} term={"macro character"}><i>Macro characters</i></GlossaryTerm> are divided into two kinds, <GlossaryTerm  term={"terminating"}><i>terminating</i></GlossaryTerm> and *non* <GlossaryTerm  term={"terminating"}><i>terminating</i></GlossaryTerm>, depending on whether or not they terminate a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm>. The following are descriptions of each kind of <GlossaryTerm styled={true} term={"syntax type"}><i>syntax type</i></GlossaryTerm>. 

<br />
