 



When a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is read, it is interpreted as a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> or <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. The <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is interpreted as a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> if it satisfies the syntax for numbers specified in Figure 2–9. 



|<p>*numeric-token* ::= *↓integer | ↓ratio | ↓float* </p><p>*integer* ::= [<GlossaryTerm styled={true} term={"sign"}><i>sign</i></GlossaryTerm>] *\{decimal-digit\}*<sup>+</sup>*decimal-point |* [<GlossaryTerm styled={true} term={"sign"}><i>sign</i></GlossaryTerm>] <GlossaryTerm styled={true} term={"digit"}><i>\{digit\}</i></GlossaryTerm><sup>+</sup> </p><p><GlossaryTerm styled={true} term={"ratio"}><i>ratio</i></GlossaryTerm> ::= [<GlossaryTerm styled={true} term={"sign"}><i>sign</i></GlossaryTerm>] <GlossaryTerm styled={true} term={"digit"}><i>\{digit\}</i></GlossaryTerm><sup>+</sup>*slash \{digit\}*<sup>+</sup> </p><p><GlossaryTerm styled={true} term={"float"}><i>float</i></GlossaryTerm> ::= [<GlossaryTerm styled={true} term={"sign"}><i>sign</i></GlossaryTerm>] *\{decimal-digit\}*\* *decimal-point \{decimal-digit\}*<sup>+</sup>[*↓exponent<GlossaryTerm styled={true} term={"t"}><i>] </i></GlossaryTerm>|* [<GlossaryTerm styled={true} term={"sign"}><i>sign</i></GlossaryTerm>] *\{decimal-digit\}*<sup>+</sup>[*decimal-point \{decimal-digit\}*\*] *↓exponent* </p><p>*exponent* ::= *exponent-marker* [<GlossaryTerm styled={true} term={"sign"}><i>sign</i></GlossaryTerm>] <GlossaryTerm styled={true} term={"digit"}><i>\{digit\}</i></GlossaryTerm><sup>+</sup> </p><p><GlossaryTerm styled={true} term={"sign"}><i>sign</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"sign"}><i>sign</i></GlossaryTerm>. </p><p><GlossaryTerm styled={true} term={"slash"}><i>slash</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"slash"}><i>slash</i></GlossaryTerm> </p><p>*decimal-point*—a <GlossaryTerm styled={true} term={"dot"}><i>dot</i></GlossaryTerm>. </p><p>*exponent-marker*—an *exponent marker* . </p><p>*decimal-digit*—a <GlossaryTerm styled={true} term={"digit"}><i>digit</i></GlossaryTerm> in <GlossaryTerm styled={true} term={"radix"}><i>radix</i></GlossaryTerm> 10. </p><p><GlossaryTerm styled={true} term={"digit"}><i>digit</i></GlossaryTerm>—a <GlossaryTerm styled={true} term={"digit"}><i>digit</i></GlossaryTerm> in the *current input radix* .</p>|

| :- |





**Figure 2–9. Syntax for Numeric Tokens** 



