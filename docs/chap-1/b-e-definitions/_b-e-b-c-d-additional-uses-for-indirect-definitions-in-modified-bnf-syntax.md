 

In some cases, an auxiliary definition in the BNF might appear to be unused within the BNF, but might still be useful elsewhere. For example, consider the following definitions: 

**case** *keyform &#123;↓normal-clause&#125;*\* [*↓otherwise-clause*] *→ &#123;result&#125;*\* 

**ccase** *keyplace &#123;↓normal-clause&#125;*\* *→ &#123;result&#125;*\* 

**ecase** *keyform &#123;↓normal-clause&#125;*\* *→ &#123;result&#125;*\* 

*normal-clause::*=(*keys &#123;form&#125;*\*) 

*otherwise-clause::*=(*&#123;otherwise | t&#125; &#123;form&#125;*\*) 

*clause::*=*normal-clause | otherwise-clause* 

Here the term “*clause*” might appear to be “dead” in that it is not used in the BNF. However, the purpose of the BNF is not just to guide parsing, but also to define useful terms for reference in the descriptive text which follows. As such, the term “*clause*” might appear in text that follows, as shorthand for “*normal-clause* or *otherwise-clause*.” 

