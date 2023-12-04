 



When a *token* is read, it is interpreted as a *number* or *symbol*. The *token* is interpreted as a *number* if it satisfies the syntax for numbers specified in Figure 2–9. 



|<p>*numeric-token* ::= *↓integer | ↓ratio | ↓float* </p><p>*integer* ::= [*sign*] *\&#123;decimal-digit\&#125;*<sup>+</sup>*decimal-point |* [*sign*] *\&#123;digit\&#125;*<sup>+</sup> </p><p>*ratio* ::= [*sign*] *\&#123;digit\&#125;*<sup>+</sup>*slash \&#123;digit\&#125;*<sup>+</sup> </p><p>*float* ::= [*sign*] *\&#123;decimal-digit\&#125;*\* *decimal-point \&#123;decimal-digit\&#125;*<sup>+</sup>[*↓exponent*] *|* [*sign*] *\&#123;decimal-digit\&#125;*<sup>+</sup>[*decimal-point \&#123;decimal-digit\&#125;*\*] *↓exponent* </p><p>*exponent* ::= *exponent-marker* [*sign*] *\&#123;digit\&#125;*<sup>+</sup> </p><p>*sign*—a *sign*. </p><p>*slash*—a *slash* </p><p>*decimal-point*—a *dot*. </p><p>*exponent-marker*—an *exponent marker* . </p><p>*decimal-digit*—a *digit* in *radix* 10. </p><p>*digit*—a *digit* in the *current input radix* .</p>|

| :- |





**Figure 2–9. Syntax for Numeric Tokens** 



