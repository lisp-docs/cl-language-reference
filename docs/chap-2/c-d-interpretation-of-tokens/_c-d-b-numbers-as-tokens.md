 



When a <ClLinks  term={"token"}><i>token</i></ClLinks> is read, it is interpreted as a <ClLinks  term={"number"}><i>number</i></ClLinks> or <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. The <ClLinks  term={"token"}><i>token</i></ClLinks> is interpreted as a <ClLinks  term={"number"}><i>number</i></ClLinks> if it satisfies the syntax for numbers specified in Figure 2–9. 



|<p>*numeric-token* ::= *↓integer | ↓ratio | ↓float* </p><p>*integer* ::= [<ClLinks  term={"sign"}><i>sign</i></ClLinks>] *\{decimal-digit\}*<sup>+</sup>*decimal-point |* [<ClLinks  term={"sign"}><i>sign</i></ClLinks>] <ClLinks  term={"digit"}><i>\{digit\}</i></ClLinks><sup>+</sup> </p><p><ClLinks  term={"ratio"}><i>ratio</i></ClLinks> ::= [<ClLinks  term={"sign"}><i>sign</i></ClLinks>] <ClLinks  term={"digit"}><i>\{digit\}</i></ClLinks><sup>+</sup>*slash \{digit\}*<sup>+</sup> </p><p><ClLinks  term={"float"}><i>float</i></ClLinks> ::= [<ClLinks  term={"sign"}><i>sign</i></ClLinks>] *\{decimal-digit\}*\* *decimal-point \{decimal-digit\}*<sup>+</sup>[*↓exponent<ClLinks  term={"t"}><i>] </i></ClLinks>|* [<ClLinks  term={"sign"}><i>sign</i></ClLinks>] *\{decimal-digit\}*<sup>+</sup>[*decimal-point \{decimal-digit\}*\*] *↓exponent* </p><p>*exponent* ::= *exponent-marker* [<ClLinks  term={"sign"}><i>sign</i></ClLinks>] <ClLinks  term={"digit"}><i>\{digit\}</i></ClLinks><sup>+</sup> </p><p><ClLinks  term={"sign"}><i>sign</i></ClLinks>—a <ClLinks  term={"sign"}><i>sign</i></ClLinks>. </p><p><ClLinks  term={"slash"}><i>slash</i></ClLinks>—a <ClLinks  term={"slash"}><i>slash</i></ClLinks> </p><p>*decimal-point*—a <ClLinks  term={"dot"}><i>dot</i></ClLinks>. </p><p>*exponent-marker*—an *exponent marker* . </p><p>*decimal-digit*—a <ClLinks  term={"digit"}><i>digit</i></ClLinks> in <ClLinks  term={"radix"}><i>radix</i></ClLinks> 10. </p><p><ClLinks  term={"digit"}><i>digit</i></ClLinks>—a <ClLinks  term={"digit"}><i>digit</i></ClLinks> in the *current input radix* .</p>|

| :- |





**Figure 2–9. Syntax for Numeric Tokens** 



