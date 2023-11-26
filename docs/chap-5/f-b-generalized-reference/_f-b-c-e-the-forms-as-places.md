 

A **the** *form* can be used as a *place*, in which case the declaration is transferred to the *newvalue* form, and the resulting **setf** is analyzed. For example, 

(setf (the integer (cadr x)) (+ y 3)) 

is processed as if it were 

(setf (cadr x) (the integer (+ y 3))) 

Data and Control Flow **5–9**





