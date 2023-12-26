 



<ClLinks  term={"sharpsign"}><i>Sharpsign</i></ClLinks> is a *non-terminating dispatching macro character* . It reads an optional sequence of digits and then one more character, and uses that character to select a <ClLinks  term={"function"}><i>function</i></ClLinks> to run as a <GlossaryTerm styled={true} term={"reader macro function"}><i>reader macro function</i></GlossaryTerm>. 



The <GlossaryTerm styled={true} term={"standard syntax"}><i>standard syntax</i></GlossaryTerm> includes constructs introduced by the # character. The syntax of these constructs is as follows: a character that identifies the type of construct is followed by arguments in some form. If the character is a letter, its <ClLinks  term={"case"}><i>case</i></ClLinks> is not important; #O and #o are considered to be equivalent, for example. 



Certain # constructs allow an unsigned decimal number to appear between the # and the character. 



The <GlossaryTerm styled={true} term={"reader macro"}><i>reader macros</i></GlossaryTerm> associated with the <GlossaryTerm styled={true} term={"dispatching macro character"}><i>dispatching macro character</i></GlossaryTerm> # are described later in this section and summarized in Figure 2–19.  







|**dispatch char purpose dispatch char purpose**|

| :- |

|<p>Backspace signals error \{ undefined\* Tab signals error \} undefined\* Newline signals error + read-time conditional Linefeed signals error - read-time conditional Page signals error . read-time evaluation Return signals error / undefined Space signals error A, a array </p><p>! undefined* B, b binary rational " undefined C, c complex number # reference to = label D, d undefined $ undefined E, e undefined % undefined F, f undefined &amp; undefined G, g undefined ’ function abbreviation H, h undefined ( simple vector I, i undefined ) signals error J, j undefined * bit vector K, k undefined , undefined L, l undefined : uninterned symbol M, m undefined ; undefined N, n undefined &lt; signals error O, o octal rational = labels following object P, p pathname &gt; undefined Q, q undefined ? undefined* R, r radix-<i>n</i> rational @ undefined S, s structure [ undefined* T, t undefined \ character object U, u undefined ] undefined* V, v undefined <i><sup>∧</sup></i> undefined W, w undefined undefined X, x hexadecimal rational </p><p>‘ undefined Y, y undefined | balanced comment Z, z undefined &#126; undefined Rubout undefined</p>|





**Figure 2–19. Standard # Dispatching Macro Character Syntax** 



The combinations marked by an asterisk (\*) are explicitly reserved to the user. No <GlossaryTerm styled={true} term={"conforming implementation"}><i>conforming implementation</i></GlossaryTerm> defines them. 



Note also that <ClLinks  term={"digit"}><i>digits</i></ClLinks> do not appear in the preceding table. This is because the notations #0, #1, ..., #9 are reserved for another purpose which occupies the same syntactic space. When a <ClLinks  term={"digit"}><i>digit</i></ClLinks> follows a <ClLinks  term={"sharpsign"}><i>sharpsign</i></ClLinks>, it is not treated as a dispatch character. Instead, an unsigned integer argument is  







accumulated and passed as an <ClLinks  term={"argument"}><i>argument</i></ClLinks> to the <GlossaryTerm styled={true} term={"reader macro"}><i>reader macro</i></GlossaryTerm> for the <ClLinks  term={"character"}><i>character</i></ClLinks> that follows the digits. For example, #2A((1 2) (3 4)) is a use of #A with an argument of 2. 



