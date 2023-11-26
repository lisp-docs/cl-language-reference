**5.1.1.1 Evaluation of Subforms to Places** 

The following rules apply to the *evaluation* of *subforms* in a *place*: 

1\. The evaluation ordering of *subforms* within a *place* is determined by the order specified by the second value returned by **get-setf-expansion**. For all *places* defined by this specification (*e.g.*, **getf**, **ldb**, *. . .*), this order of evaluation is left-to-right. When a *place* is derived from a macro expansion, this rule is applied after the macro is expanded to find the appropriate *place*. 

*Places* defined by using **defmacro** or **define-setf-expander** use the evaluation order defined by those definitions. For example, consider the following: 

(defmacro wrong-order (x y) ‘(getf ,y ,x)) 

This following *form* evaluates place2 first and then place1 because that is the order they are evaluated in the macro expansion: 

(push value (wrong-order place1 place2)) 

2\. For the *macros* that manipulate *places* (**push**, **pushnew**, **remf**, **incf**, **decf**, **shiftf**, **rotatef**, **psetf**, **setf**, **pop**, and those defined by **define-modify-macro**) the *subforms* of the macro call are evaluated exactly once in left-to-right order, with the *subforms* of the *places* evaluated in the order specified in (1). 

**push**, **pushnew**, **remf**, **incf**, **decf**, **shiftf**, **rotatef**, **psetf**, **pop** evaluate all *subforms* before modifying any of the *place* locations. **setf** (in the case when **setf** has more than two arguments) performs its operation on each pair in sequence. For example, in 

(setf place1 value1 place2 value2 ...) 

the *subforms* of place1 and value1 are evaluated, the location specified by place1 is modified to contain the value returned by value1, and then the rest of the **setf** form is processed in a like manner. 

3\. For **check-type**, **ctypecase**, and **ccase**, *subforms* of the *place* are evaluated once as in (1), but might be evaluated again if the type check fails in the case of **check-type** or none of the cases hold in **ctypecase** and **ccase**. 

4\. For **assert**, the order of evaluation of the generalized references is not specified. Rules 2, 3 and 4 cover all *standardized macros* that manipulate *places*. 

