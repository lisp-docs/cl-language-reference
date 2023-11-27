 

The *Lisp reader* constructs an *object* from the input text by interpreting each *character* according to its *syntax type*. The *Lisp reader* cannot accept as input everything that the *Lisp printer*  



produces, and the *Lisp reader* has features that are not used by the *Lisp printer* . The *Lisp reader* can be used as a lexical analyzer for a more general user-written parser. 

When the *Lisp reader* is invoked, it reads a single character from the *input stream* and dispatches according to the *syntax type* of that *character* . Every *character* that can appear in the *input stream* is of one of the *syntax types* shown in Figure 2–6. 

|&#60;p&#62;*constituent macro character single escape* &#60;/p&#62;&#60;p&#62;*invalid multiple escape whitespace*&#60;sub&#62;2&#60;/sub&#62;&#60;/p&#62;|
| :- |


**Figure 2–6. Possible Character Syntax Types** 

The *syntax type* of a *character* in a *readtable* determines how that character is interpreted by the *Lisp reader* while that *readtable* is the *current readtable*. At any given time, every character has exactly one *syntax type*. 

Figure 2–7 lists the *syntax type* of each *character* in *standard syntax* . 

|**character syntax type character syntax type**|
| :- |
|Backspace &#60;i&#62;constituent&#60;/i&#62; 0–9 &#60;i&#62;constituent&#60;/i&#62; Tab &#60;i&#62;whitespace&#60;/i&#62;&#60;sub&#62;2&#60;/sub&#62; : &#60;i&#62;constituent&#60;/i&#62; Newline &#60;i&#62;whitespace&#60;/i&#62;&#60;sub&#62;2&#60;/sub&#62; ; &#60;i&#62;terminating macro char&#60;/i&#62; Linefeed &#60;i&#62;whitespace&#60;/i&#62;&#60;sub&#62;2&#60;/sub&#62; &#60; &#60;i&#62;constituent&#60;/i&#62; Page &#60;i&#62;whitespace&#60;/i&#62;&#60;sub&#62;2&#60;/sub&#62; = &#60;i&#62;constituent&#60;/i&#62; Return &#60;i&#62;whitespace&#60;/i&#62;&#60;sub&#62;2&#60;/sub&#62; &#62; &#60;i&#62;constituent&#60;/i&#62; Space &#60;i&#62;whitespace&#60;/i&#62;&#60;sub&#62;2&#60;/sub&#62; ? &#60;i&#62;constituent&#60;/i&#62;* ! &#60;i&#62;constituent&#60;/i&#62;* @ &#60;i&#62;constituent&#60;/i&#62; " &#60;i&#62;terminating macro char&#60;/i&#62; A–Z &#60;i&#62;constituent&#60;/i&#62; # &#60;i&#62;non-terminating macro char&#60;/i&#62; [ &#60;i&#62;constituent&#60;/i&#62;* $ &#60;i&#62;constituent&#60;/i&#62; \ &#60;i&#62;single escape&#60;/i&#62; % &#60;i&#62;constituent&#60;/i&#62; ] &#60;i&#62;constituent&#60;/i&#62;* & &#60;i&#62;constituent &#60;sup&#62;∧&#60;/sup&#62; constituent&#60;/i&#62; ’ &#60;i&#62;terminating macro char constituent&#60;/i&#62; ( &#60;i&#62;terminating macro char&#60;/i&#62; ‘ &#60;i&#62;terminating macro char&#60;/i&#62; ) &#60;i&#62;terminating macro char&#60;/i&#62; a–z &#60;i&#62;constituent&#60;/i&#62; * &#60;i&#62;constituent&#60;/i&#62; &#123; &#60;i&#62;constituent&#60;/i&#62;* + &#60;i&#62;constituent&#60;/i&#62; | &#60;i&#62;multiple escape&#60;/i&#62; , &#60;i&#62;terminating macro char&#60;/i&#62; &#125; &#60;i&#62;constituent&#60;/i&#62;* - &#60;i&#62;constituent&#60;/i&#62; ~ &#60;i&#62;constituent&#60;/i&#62; . &#60;i&#62;constituent&#60;/i&#62; Rubout &#60;i&#62;constituent&#60;/i&#62; / &#60;i&#62;constituent&#60;/i&#62;|


**Figure 2–7. Character Syntax Types in Standard Syntax**  



The characters marked with an asterisk (\*) are initially *constituents*, but they are not used in any standard Common Lisp notations. These characters are explicitly reserved to the *programmer* . ~ is not used in Common Lisp, and reserved to implementors. $ and % are *alphabetic*&#60;sub&#62;2&#60;/sub&#62; *characters*, but are not used in the names of any standard Common Lisp *defined names*. 

*Whitespace*&#60;sub&#62;2&#60;/sub&#62; characters serve as separators but are otherwise ignored. *Constituent* and *escape characters* are accumulated to make a *token*, which is then interpreted as a *number* or *symbol*. *Macro characters* trigger the invocation of *functions* (possibly user-supplied) that can perform arbitrary parsing actions. *Macro characters* are divided into two kinds, *terminating* and *non* 

*terminating*, depending on whether or not they terminate a *token*. The following are descriptions of each kind of *syntax type*. 

