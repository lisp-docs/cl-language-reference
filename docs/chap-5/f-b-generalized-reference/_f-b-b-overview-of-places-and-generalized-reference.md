 

A *generalized reference* is the use of a *form*, sometimes called a *place*, as if it were a *variable* that could be read and written. The *value* of a *place* is the *object* to which the *place form* evaluates. The *value* of a *place* can be changed by using **setf**. The concept of binding a *place* is not defined 

in Common Lisp, but an *implementation* is permitted to extend the language by defining this concept. 

Figure 5–1 contains examples of the use of **setf**. Note that the values returned by evaluating the *forms* in column two are not necessarily the same as those obtained by evaluating the *forms* in column three. In general, the exact *macro expansion* of a **setf** *form* is not guaranteed and can even be *implementation-dependent*; all that is guaranteed is that the expansion is an update form that works for that particular *implementation*, that the left-to-right evaluation of *subforms* is preserved, and that the ultimate result of evaluating **setf** is the value or values being stored. 

|**Access function Update Function Update using setf**|
| :- |
|\<p\>x (setq x datum) (setf x datum) \</p\>\<p\>(car x) (rplaca x datum) (setf (car x) datum) (symbol-value x) (set x datum) (setf (symbol-value x) datum)\</p\>|


**Figure 5–1. Examples of setf** 

Figure 5–2 shows *operators* relating to *places* and *generalized reference*. 

|\<p\>**assert defsetf push** \</p\>\<p\>**ccase get-setf-expansion remf** \</p\>\<p\>**ctypecase getf rotatef decf incf setf** \</p\>\<p\>**define-modify-macro pop shiftf define-setf-expander psetf**\</p\>|
| :- |


**Figure 5–2. Operators relating to places and generalized reference.** 

Some of the *operators* above manipulate *places* and some manipulate *setf expanders*. A *setf expansion* can be derived from any *place*. New *setf expanders* can be defined by using **defsetf** and **define-setf-expander**. 

Data and Control Flow **5–1**





