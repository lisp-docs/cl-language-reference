**number** *System Class* 



**Class Precedence List:** 



**number**, **t** 



**Description:** 



The *type* **number** contains *objects* which represent mathematical numbers. The *types* **real** and **complex** are *disjoint subtypes* of **number**. 



The *function* **=** tests for numerical equality. The *function* **eql**, when its arguments are both *numbers*, tests that they have both the same *type* and numerical value. Two *numbers* that are the *same* under **eql** or **=** are not necessarily the *same* under **eq**. 



**Notes:** 



Common Lisp differs from mathematics on some naming issues. In mathematics, the set of real numbers is traditionally described as a subset of the complex numbers, but in Common Lisp, the *type* **real** and the *type* **complex** are disjoint. The Common Lisp type which includes all mathematical complex numbers is called **number**. The reasons for these differences include historical precedent, compatibility with most other popular computer languages, and various issues of time and space efficiency. 



