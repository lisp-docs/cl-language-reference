 



This spaces over to a given column. &#126;*colnum*,*colinc*T will output sufficient spaces to move the cursor to column *colnum*. If the cursor is already at or beyond column *colnum*, it will output spaces to move it to column *colnum*+*k*\**colinc* for the smallest positive integer *k* possible, unless *colinc* is zero, in which case no spaces are output if the cursor is already at or beyond column *colnum*. *colnum* and *colinc* default to 1. 



If for some reason the current absolute column position cannot be determined by direct inquiry, **format** may be able to deduce the current column position by noting that certain directives (such as &#126;%, or &#126;&amp;, or &#126;A with the argument being a string containing a newline) cause the column position to be reset to zero, and counting the number of characters emitted since that point. If that fails, **format** may attempt a similar deduction on the riskier assumption that the destination was at column zero when **format** was invoked. If even this heuristic fails or is implementationally inconvenient, at worst the &#126;T operation will simply output two spaces. 



&#126;@T performs relative tabulation. &#126;*colrel*,*colinc*@T outputs *colrel* spaces and then outputs the smallest non-negative number of additional spaces necessary to move the cursor to a column that is a multiple of *colinc*. For example, the directive &#126;3,8@T outputs three spaces and then moves the cursor to a “standard multiple-of-eight tab stop” if not at one already. If the current output column cannot be determined, however, then *colinc* is ignored, and exactly *colrel* spaces are output. 



If the *colon* modifier is used with the &#126;T directive, the tabbing computation is done relative to the horizontal position where the section immediately containing the directive begins, rather than with respect to a horizontal position of zero. The numerical parameters are both interpreted as being in units of *ems* and both default to 1. &#126;*n*,*m*:T is the same as (pprint-tab :section *n m*). &#126;*n*,*m*:@T 



is the same as (pprint-tab :section-relative *n m*). 



