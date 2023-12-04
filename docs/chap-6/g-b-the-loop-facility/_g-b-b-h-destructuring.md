 



The *d-type-spec* argument is used for destructuring. If the *d-type-spec* argument consists solely of the *type* **fixnum**, **float**, **t**, or **nil**, the of-type keyword is optional. The of-type construct is optional in these cases to provide backwards compatibility; thus, the following two expressions are the same: 



;;; This expression uses the old syntax for type specifiers. 



(loop for i fixnum upfrom 3 ...) 



;;; This expression uses the new syntax for type specifiers. 



(loop for i of-type fixnum upfrom 3 ...) 



;; Declare X and Y to be of type VECTOR and FIXNUM respectively. 



(loop for (x y) of-type (vector fixnum) 



in l do ...) 



A *type specifier* for a destructuring pattern is a *tree* of *type specifiers* with the same shape as the *tree* of *variable names*, with the following exceptions: 



*•* When aligning the *trees*, an *atom* in the *tree* of *type specifiers* that matches a *cons* in the variable tree declares the same *type* for each variable in the subtree rooted at the *cons*. 



*•* A *cons* in the *tree* of *type specifiers* that matches an *atom* in the *tree* of *variable names* is a *compound type specifer* . 



Destructuring allows *binding* of a set of variables to a corresponding set of values anywhere that a value can normally be bound to a single variable. During **loop** expansion, each variable in the 







 



 



variable list is matched with the values in the values list. If there are more variables in the variable list than there are values in the values list, the remaining variables are given a value of **nil**. If there are more values than variables listed, the extra values are discarded. 



To assign values from a list to the variables a, b, and c, the for clause could be used to bind the variable numlist to the *car* of the supplied *form*, and then another for clause could be used to bind the variables a, b, and c *sequentially*. 



;; Collect values by using FOR constructs. 



(loop for numlist in ’((1 2 4.0) (5 6 8.3) (8 9 10.4)) 



for a of-type integer = (first numlist) 



and b of-type integer = (second numlist) 



and c of-type float = (third numlist) 



collect (list c b a)) 



*→* ((4.0 2 1) (8.3 6 5) (10.4 9 8)) 



Destructuring makes this process easier by allowing the variables to be bound in each loop iteration. *Types* can be declared by using a list of *type-spec* arguments. If all the *types* are the same, a shorthand destructuring syntax can be used, as the second example illustrates. 



;; Destructuring simplifies the process. 



(loop for (a b c) of-type (integer integer float) in 



’((1 2 4.0) (5 6 8.3) (8 9 10.4)) 



collect (list c b a)) 



*→* ((4.0 2 1) (8.3 6 5) (10.4 9 8)) 



;; If all the types are the same, this way is even simpler. 



(loop for (a b c) of-type float in 



’((1.0 2.0 4.0) (5.0 6.0 8.3) (8.0 9.0 10.4)) 



collect (list c b a)) 



*→* ((4.0 2.0 1.0) (8.3 6.0 5.0) (10.4 9.0 8.0)) 



If destructuring is used to declare or initialize a number of groups of variables into *types*, the *loop keyword* and can be used to simplify the process further. ;; Initialize and declare variables in parallel by using the AND construct. 



(loop with (a b) of-type float = ’(1.0 2.0) 



and (c d) of-type integer = ’(3 4) 



and (e f) 



return (list a b c d e f)) 



*→* (1.0 2.0 3 4 NIL NIL) 



If **nil** is used in a destructuring list, no variable is provided for its place. 



(loop for (a nil b) = ’(1 2 3) 



do (return (list a b))) 



*→* (1 3) 







 



 



Note that *dotted lists* can specify destructuring. 



(loop for (x . y) = ’(1 . 2) 



do (return y)) 



*→* 2 



(loop for ((a . b) (c . d)) of-type ((float . float) (integer . integer)) in 



’(((1.2 . 2.4) (3 . 4)) ((3.4 . 4.6) (5 . 6))) 



collect (list a b c d)) 



*→* ((1.2 2.4 3 4) (3.4 4.6 5 6)) 



An error of *type* **program-error** is signaled (at macro expansion time) if the same variable is bound twice in any variable-binding clause of a single **loop** expression. Such variables include local variables, iteration control variables, and variables found by destructuring. 



