 



The primary extension used is the following: 



[[ *O* ]] 



An expression of this form appears whenever a list of elements is to be spliced into a larger structure and the elements can appear in any order. The symbol *O* represents a description of the syntax of some number of syntactic elements to be spliced; that description must be of the form 



<i>O</i><sub>1</sub> <i>| . . . | O<sub>l</sub></i> 



where each <i>O<sub>i</sub></i> can be of the form <i>S</i> or of the form <i>S</i>* or of the form <i>S</i><sup>1</sup>. The expression [[ <i>O</i> ]] means that a list of the form 



(<i>O<sub>i</sub></i>1<i>. . . O<sub>ij</sub></i>) 1 <i>≤ j</i> 



is spliced into the enclosing expression, such that if <i>n 6</i>= <i>m</i> and 1 <i>≤ n, m ≤ j</i>, then either <i>O<sub>in</sub>6</i>= <i>O<sub>im</sub></i> or <i>O<sub>in</sub></i> = <i>O<sub>im</sub></i> = <i>Q<sub>k</sub></i>, where for some 1 <i>≤ k ≤ n</i>, <i>O<sub>k</sub></i> is of the form <i>Q<sub>k</sub></i>*. Furthermore, for each <i>O<sub>in</sub></i> that is of the form <i>Q<sub>k</sub></i><sup>1</sup>, that element is required to appear somewhere in the list to be spliced. 



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



The notation [[ *O*<sub>1</sub> *| O*<sub>2</sub> *| . . .* ]]<sup>+</sup>adds the additional restriction that at least one item from among the possible choices must be used. For example: 











(x [[ A | B\* | C ]]<sup>+</sup>y) 



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



(x [[ A<sup>1</sup>| B<sup>1</sup>| C ]] y) 



can generate exactly these and no others: 



(x A B C y) 



(x A C B y) 



(x A B y) 



(x B A C y) 



(x B C A y) 



(x B A y) 



(x C A B y) 



(x C B A y) 



