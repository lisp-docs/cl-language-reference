 

The primary extension used is the following: 

[[ *O* ]] 

An expression of this form appears whenever a list of elements is to be spliced into a larger structure and the elements can appear in any order. The symbol *O* represents a description of the syntax of some number of syntactic elements to be spliced; that description must be of the form 

&#60;i&#62;O&#60;/i&#62;&#60;sub&#62;1&#60;/sub&#62; &#60;i&#62;| . . . | O&#60;sub&#62;l&#60;/sub&#62;&#60;/i&#62; 

where each &#60;i&#62;O&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62; can be of the form &#60;i&#62;S&#60;/i&#62; or of the form &#60;i&#62;S&#60;/i&#62;* or of the form &#60;i&#62;S&#60;/i&#62;&#60;sup&#62;1&#60;/sup&#62;. The expression [[ &#60;i&#62;O&#60;/i&#62; ]] means that a list of the form 

(&#60;i&#62;O&#60;sub&#62;i&#60;/sub&#62;&#60;/i&#62;1&#60;/sub&#62;&#60;i&#62;. . . O&#60;sub&#62;ij&#60;/sub&#62;&#60;/i&#62;) 1 &#60;i&#62;≤ j&#60;/i&#62; 

is spliced into the enclosing expression, such that if &#60;i&#62;n 6&#60;/i&#62;= &#60;i&#62;m&#60;/i&#62; and 1 &#60;i&#62;≤ n, m ≤ j&#60;/i&#62;, then either &#60;i&#62;O&#60;sub&#62;in&#60;/sub&#62;6&#60;/i&#62;= &#60;i&#62;O&#60;sub&#62;im&#60;/sub&#62;&#60;/i&#62; or &#60;i&#62;O&#60;sub&#62;in&#60;/sub&#62;&#60;/i&#62; = &#60;i&#62;O&#60;sub&#62;im&#60;/sub&#62;&#60;/i&#62; = &#60;i&#62;Q&#60;sub&#62;k&#60;/sub&#62;&#60;/i&#62;, where for some 1 &#60;i&#62;≤ k ≤ n&#60;/i&#62;, &#60;i&#62;O&#60;sub&#62;k&#60;/sub&#62;&#60;/i&#62; is of the form &#60;i&#62;Q&#60;sub&#62;k&#60;/sub&#62;&#60;/i&#62;*. Furthermore, for each &#60;i&#62;O&#60;sub&#62;in&#60;/sub&#62;&#60;/i&#62; that is of the form &#60;i&#62;Q&#60;sub&#62;k&#60;/sub&#62;&#60;/i&#62;&#60;sup&#62;1&#60;/sup&#62;, that element is required to appear somewhere in the list to be spliced. 

For example, the expression 

(x [[ A | B\* | C ]] y) 

means that at most one A, any number of B’s, and at most one C can occur in any order. It is a description of any of these: 

(x y) 

(x B A C y) 

(x A B B B B B C y) 

(x C B A B B B y) 

but not any of these: 

(x B B A A C C y) 

(x C B C y) 

In the first case, both A and C appear too often, and in the second case C appears too often. 

The notation [[ *O*&#60;sub&#62;1&#60;/sub&#62; *| O*&#60;sub&#62;2&#60;/sub&#62; *| . . .* ]]&#60;sup&#62;+&#60;/sup&#62;adds the additional restriction that at least one item from among the possible choices must be used. For example: 





(x [[ A | B\* | C ]]&#60;sup&#62;+&#60;/sup&#62;y) 

means that at most one A, any number of B’s, and at most one C can occur in any order, but that in any case at least one of these options must be selected. It is a description of any of these: 

(x B y) 

(x B A C y) 

(x A B B B B B C y) 

(x C B A B B B y) 

but not any of these: 

(x y) 

(x B B A A C C y) 

(x C B C y) 

In the first case, no item was used; in the second case, both A and C appear too often; and in the third case C appears too often. 

Also, the expression: 

(x [[ A&#60;sup&#62;1&#60;/sup&#62;| B&#60;sup&#62;1&#60;/sup&#62;| C ]] y) 

can generate exactly these and no others: 

(x A B C y) 

(x A C B y) 

(x A B y) 

(x B A C y) 

(x B C A y) 

(x B A y) 

(x C A B y) 

(x C B A y) 

