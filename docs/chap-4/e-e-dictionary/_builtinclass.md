**built-in-class** *System Class* 



**Class Precedence List:** 



**built-in-class**, **class**, **standard-object**, **t** 



**Description:** 



A *built-in class* is a *class* whose *instances* have restricted capabilities or special representations. Attempting to use **defclass** to define *subclasses* of a *built-in class* signals an error of *type* **error**. Calling **make-instance** to create an *instance* of a *built-in class* signals an error of *type* **error**. Calling **slot-value** on an *instance* of a *built-in class* signals an error of *type* **error**. Redefining a *built-in class* or using **change-class** to change the *class* of an *instance* to or from a *built-in class* signals an error of *type* **error**. However, *built-in classes* can be used as *parameter specializers* in *methods*.  







