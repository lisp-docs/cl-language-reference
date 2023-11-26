 

An indirection extension is introduced in order to make this new syntax more readable: *↓O* 

If *O* is a non-terminal symbol, the right-hand side of its definition is substituted for the entire expression *↓O*. For example, the following BNF is equivalent to the BNF in the previous example: 

(x [[ *↓O* ]] y) 

*O::*=A *|* B\* *|* C  



