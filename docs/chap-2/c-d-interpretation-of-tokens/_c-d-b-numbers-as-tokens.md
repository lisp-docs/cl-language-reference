 

When a *token* is read, it is interpreted as a *number* or *symbol*. The *token* is interpreted as a *number* if it satisfies the syntax for numbers specified in Figure 2–9. 

|&#60;p&#62;*numeric-token* ::= *↓integer | ↓ratio | ↓float* &#60;/p&#62;&#60;p&#62;*integer* ::= [*sign*] *&#123;decimal-digit&#125;*&#60;sup&#62;+&#60;/sup&#62;*decimal-point |* [*sign*] *&#123;digit&#125;*&#60;sup&#62;+&#60;/sup&#62; &#60;/p&#62;&#60;p&#62;*ratio* ::= [*sign*] *&#123;digit&#125;*&#60;sup&#62;+&#60;/sup&#62;*slash &#123;digit&#125;*&#60;sup&#62;+&#60;/sup&#62; &#60;/p&#62;&#60;p&#62;*float* ::= [*sign*] *&#123;decimal-digit&#125;*\* *decimal-point &#123;decimal-digit&#125;*&#60;sup&#62;+&#60;/sup&#62;[*↓exponent*] *|* [*sign*] *&#123;decimal-digit&#125;*&#60;sup&#62;+&#60;/sup&#62;[*decimal-point &#123;decimal-digit&#125;*\*] *↓exponent* &#60;/p&#62;&#60;p&#62;*exponent* ::= *exponent-marker* [*sign*] *&#123;digit&#125;*&#60;sup&#62;+&#60;/sup&#62; &#60;/p&#62;&#60;p&#62;*sign*—a *sign*. &#60;/p&#62;&#60;p&#62;*slash*—a *slash* &#60;/p&#62;&#60;p&#62;*decimal-point*—a *dot*. &#60;/p&#62;&#60;p&#62;*exponent-marker*—an *exponent marker* . &#60;/p&#62;&#60;p&#62;*decimal-digit*—a *digit* in *radix* 10. &#60;/p&#62;&#60;p&#62;*digit*—a *digit* in the *current input radix* .&#60;/p&#62;|
| :- |


**Figure 2–9. Syntax for Numeric Tokens** 

