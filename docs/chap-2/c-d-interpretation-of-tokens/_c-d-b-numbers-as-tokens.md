 



When a <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> is read, it is interpreted as a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> or <GlossaryTerm  term={"symbol"}><i>symbol</i></GlossaryTerm>. The <GlossaryTerm  term={"token"}><i>token</i></GlossaryTerm> is interpreted as a <GlossaryTerm  term={"number"}><i>number</i></GlossaryTerm> if it satisfies the syntax for numbers specified in Figure 2–9. 



|<p>*numeric-token* ::= *↓integer | ↓ratio | ↓float* </p><p>*integer* ::= [<GlossaryTerm  term={"sign"}><i>sign</i></GlossaryTerm>] *\{decimal-digit\}*<sup>+</sup>*decimal-point |* [<GlossaryTerm  term={"sign"}><i>sign</i></GlossaryTerm>] <GlossaryTerm  term={"digit"}><i>\{digit\}</i></GlossaryTerm><sup>+</sup> </p><p><GlossaryTerm  term={"ratio"}><i>ratio</i></GlossaryTerm> ::= [<GlossaryTerm  term={"sign"}><i>sign</i></GlossaryTerm>] <GlossaryTerm  term={"digit"}><i>\{digit\}</i></GlossaryTerm><sup>+</sup>*slash \{digit\}*<sup>+</sup> </p><p><GlossaryTerm  term={"float"}><i>float</i></GlossaryTerm> ::= [<GlossaryTerm  term={"sign"}><i>sign</i></GlossaryTerm>] *\{decimal-digit\}*\* *decimal-point \{decimal-digit\}*<sup>+</sup>[*↓exponent<ClLinks  term={"t"}><i>] </i></ClLinks>|* [<GlossaryTerm  term={"sign"}><i>sign</i></GlossaryTerm>] *\{decimal-digit\}*<sup>+</sup>[*decimal-point \{decimal-digit\}*\*] *↓exponent* </p><p>*exponent* ::= *exponent-marker* [<GlossaryTerm  term={"sign"}><i>sign</i></GlossaryTerm>] <GlossaryTerm  term={"digit"}><i>\{digit\}</i></GlossaryTerm><sup>+</sup> </p><p><GlossaryTerm  term={"sign"}><i>sign</i></GlossaryTerm>—a <GlossaryTerm  term={"sign"}><i>sign</i></GlossaryTerm>. </p><p><GlossaryTerm  term={"slash"}><i>slash</i></GlossaryTerm>—a <GlossaryTerm  term={"slash"}><i>slash</i></GlossaryTerm> </p><p>*decimal-point*—a <GlossaryTerm  term={"dot"}><i>dot</i></GlossaryTerm>. </p><p>*exponent-marker*—an <GlossaryTerm styled={true} term={"exponent marker"}><i>exponent marker</i></GlossaryTerm> . </p><p>*decimal-digit*—a <GlossaryTerm  term={"digit"}><i>digit</i></GlossaryTerm> in <GlossaryTerm  term={"radix"}><i>radix</i></GlossaryTerm> 10. </p><p><GlossaryTerm  term={"digit"}><i>digit</i></GlossaryTerm>—a <GlossaryTerm  term={"digit"}><i>digit</i></GlossaryTerm> in the *current input radix* .</p>|

| :- |





**Figure 2–9. Syntax for Numeric Tokens** 



