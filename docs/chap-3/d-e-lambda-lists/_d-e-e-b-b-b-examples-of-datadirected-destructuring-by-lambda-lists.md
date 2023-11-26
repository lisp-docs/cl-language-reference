**3.4.4.1.1.1 Examples of Data-directed Destructuring by Lambda Lists** 

An example pattern is 

(a b c) 

which destructures a list of three elements. The variable a is assigned to the first element, b to the second, etc. A more complex example is 

((first . rest) . more) 

The important features of data-directed destructuring are its syntactic simplicity and the ability to extend it to lambda-list-directed destructuring. 

