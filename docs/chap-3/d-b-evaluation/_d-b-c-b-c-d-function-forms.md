**3.1.2.1.2.3 Function Forms** 

If the *operator* is a *symbol* naming a *function*, the *form* represents a *function form*, and the *cdr* of the list contains the *forms* which when evaluated will supply the arguments passed to the *function*. 

When a *function name* is not defined, an error of *type* **undefined-function** should be signaled at run time; see Section 3.2.2.3 (Semantic Constraints). 

A *function form* is evaluated as follows: 

The *subforms* in the *cdr* of the original *form* are evaluated in left-to-right order in the current lexical and dynamic *environments*. The *primary value* of each such *evaluation* becomes an *argument* to the named *function*; any additional *values* returned by the *subforms* are discarded. 

The *functional value* of the *operator* is retrieved from the *lexical environment*, and that *function* is invoked with the indicated arguments. 

Although the order of *evaluation* of the *argument subforms* themselves is strictly left-to-right, it is not specified whether the definition of the *operator* in a *function form* is looked up before the *evaluation* of the *argument subforms*, after the *evaluation* of the *argument subforms*, or between the *evaluation* of any two *argument subforms* if there is more than one such *argument subform*. For example, the following might return 23 or 24. 

(defun foo (x) (+ x 3))  



(defun bar () (setf (symbol-function ’foo) #’(lambda (x) (+ x 4)))) 

(foo (progn (bar) 20)) 

A *binding* for a *function name* can be *established* in one of several ways. A *bind ing* for a *function name* in the *global environment* can be *established* by **defun**, **setf** of **fdefinition**, **setf** of **symbol-function**, **ensure-generic-function**, **defmethod** (implicitly, due to **ensure-generic-function**), or **defgeneric**. A *binding* for a *function name* in the *lexical environment* can be *established* by **flet** or **labels**. 

Figure 3–4 lists some *defined names* that are applicable to *functions*. 

|\<p\>**apply fdefinition mapcan** \</p\>\<p\>**call-arguments-limit flet mapcar** \</p\>\<p\>**complement fmakunbound mapcon** \</p\>\<p\>**constantly funcall mapl** \</p\>\<p\>**defgeneric function maplist** \</p\>\<p\>**defmethod functionp multiple-value-call defun labels reduce** \</p\>\<p\>**fboundp map symbol-function**\</p\>|
| :- |


**Figure 3–4. Some function-related defined names** 

