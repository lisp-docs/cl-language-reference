 



Every <ClLinks  term={"character"}><i>character</i></ClLinks> has one or more *constituent traits* that define how the <ClLinks  term={"character"}><i>character</i></ClLinks> is to be interpreted by the *Lisp reader* when the <ClLinks  term={"character"}><i>character</i></ClLinks> is a *constituent character* . These *constituent traits* are <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>, digit, *package marker* , plus sign, minus sign, dot, decimal point, *ratio marker* , *exponent marker* , and <ClLinks  term={"invalid"}><i>invalid</i></ClLinks>. Figure 2–8 shows the *constituent traits* of the *standard characters* and of certain *semi-standard characters*; no mechanism is provided for changing the *constituent trait* of a <ClLinks  term={"character"}><i>character</i></ClLinks> . Any <ClLinks  term={"character"}><i>character</i></ClLinks> with the alphadigit *constituent trait* in that figure is a digit if the *current input base* is greater than that character’s digit value, otherwise the <ClLinks  term={"character"}><i>character</i></ClLinks> is <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>. Any <ClLinks  term={"character"}><i>character</i></ClLinks> quoted by a *single escape* is treated as an <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> constituent, regardless of its normal syntax.  







|<p>**constituent traits constituent traits** </p><p>**character character**</p>|

| :- |

|<p>Backspace <ClLinks  term={"invalid"}><i>invalid</i></ClLinks> \{ <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> </p><p>Tab <ClLinks  term={"invalid"}><i>invalid</i></ClLinks>\* \} <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> </p><p>Newline <ClLinks  term={"invalid"}><i>invalid</i></ClLinks>\* + <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>, plus sign Linefeed <ClLinks  term={"invalid"}><i>invalid</i></ClLinks>\* - <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>, minus sign Page <ClLinks  term={"invalid"}><i>invalid</i></ClLinks>\* . <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>, dot, decimal point Return <ClLinks  term={"invalid"}><i>invalid</i></ClLinks>\* / <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>, *ratio marker* Space <ClLinks  term={"invalid"}><i>invalid</i></ClLinks>\* A, a alphadigit </p><p>! <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> B, b alphadigit </p><p>" <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>\* C, c alphadigit </p><p># <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>\* D, d alphadigit, double-float *exponent marker* $ <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> E, e alphadigit, float *exponent marker* % <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> F, f alphadigit, single-float *exponent marker* &amp; <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> G, g alphadigit </p><p>’ <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>\* H, h alphadigit </p><p>( <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>\* I, i alphadigit </p><p>) <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>\* J, j alphadigit </p><p>\* <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> K, k alphadigit </p><p>, <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>\* L, l alphadigit, long-float *exponent marker* 0-9 alphadigit M, m alphadigit </p><p>: *package marker* N, n alphadigit </p><p>; <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>\* O, o alphadigit </p><p>&lt; <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> P, p alphadigit </p><p>= <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> Q, q alphadigit </p><p>&gt; <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> R, r alphadigit </p><p>? <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> S, s alphadigit, short-float *exponent marker* @ <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> T, t alphadigit </p><p>[ <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> U, u alphadigit </p><p>\ <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>\* V, v alphadigit </p><p>] <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> W, w alphadigit </p><p><i><sup>∧</sup> alphabetic</i><sub>2</sub> X, x alphadigit </p><p><ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub> Y, y alphadigit </p><p>‘ <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>\* Z, z alphadigit </p><p>| <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>\* Rubout <ClLinks  term={"invalid"}><i>invalid</i></ClLinks> </p><p>&#126; <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub></p>|





**Figure 2–8. Constituent Traits of Standard Characters and Semi-Standard Characters** 



The interpretations in this table apply only to <ClLinks  term={"character"}><i>characters</i></ClLinks> whose *syntax type* is <ClLinks  term={"constituent"}><i>constituent</i></ClLinks>. Entries marked with an asterisk (\*) are normally *shadowed* <sub>2</sub> because the indicated <ClLinks  term={"character"}><i>characters</i></ClLinks> are of *syntax type whitespace*<sub>2</sub>, *macro character* , *single escape*, or *multiple escape*; these *constituent traits* apply to them only if their *syntax types* are changed to <ClLinks  term={"constituent"}><i>constituent</i></ClLinks>.  







