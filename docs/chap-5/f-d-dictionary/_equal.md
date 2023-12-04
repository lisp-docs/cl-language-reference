**equal** *Function* 



**Syntax:** 



**equal** *x y → generalized-boolean* 



Data and Control 











**equal** 



**Arguments and Values:** 



*x*—an *object*. 



*y*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *x* and *y* are structurally similar (isomorphic) *objects*. *Objects* are treated as follows by **equal**. 



*Symbols*, *Numbers*, and *Characters* 



**equal** is *true* of two *objects* if they are *symbols* that are **eq**, if they are *numbers* that are **eql**, or if they are *characters* that are **eql**. 



*Conses* 



For *conses*, **equal** is defined recursively as the two *cars* being **equal** and the two *cdrs* being **equal**. 



*Arrays* 



Two *arrays* are **equal** only if they are **eq**, with one exception: *strings* and *bit vectors* are compared element-by-element (using **eql**). If either *x* or *y* has a *fill pointer* , the *fill pointer* limits the number of elements examined by **equal**. Uppercase and lowercase letters in *strings* are considered by **equal** to be different. 



*Pathnames* 



Two *pathnames* are **equal** if and only if all the corresponding components (host, device, and so on) are equivalent. Whether or not uppercase and lowercase letters are considered equivalent in *strings* appearing in components is *implementation-dependent*. *pathnames* that are **equal** should be functionally equivalent. 



**Other (Structures, hash-tables, instances,** *. . .***)** 



Two other *objects* are **equal** only if they are **eq**. 



**equal** does not descend any *objects* other than the ones explicitly specified above. Figure 5–12 summarizes the information given in the previous list. In addition, the figure specifies the priority of the behavior of **equal**, with upper entries taking priority over lower ones. 















**equal** 



|**Type Behavior**|

| :- |

|<p>*number* uses **eql** </p><p>*character* uses **eql** </p><p>*cons* descends </p><p>*bit vector* descends </p><p>*string* descends </p><p>*pathname* “functionally equivalent” </p><p>*structure* uses **eq** </p><p>Other *array* uses **eq** </p><p>*hash table* uses **eq** </p><p>Other *object* uses **eq**</p>|





**Figure 5–12. Summary and priorities of behavior of equal** 



Any two *objects* that are **eql** are also **equal**. 



**equal** may fail to terminate if *x* or *y* is circular. 



**Examples:**
```lisp
 



(equal ’a ’b) *→ false* 



(equal ’a ’a) *→ true* 



(equal 3 3) *→ true* 



(equal 3 3.0) *→ false* 



(equal 3.0 3.0) *→ true* 



(equal #c(3 -4) #c(3 -4)) *→ true* 



(equal #c(3 -4.0) #c(3 -4)) *→ false* 



(equal (cons ’a ’b) (cons ’a ’c)) *→ false* 



(equal (cons ’a ’b) (cons ’a ’b)) *→ true* 



(equal #\A #\A) *→ true* 



(equal #\A #\a) *→ false* 



(equal "Foo" "Foo") *→ true* 



(equal "Foo" (copy-seq "Foo")) *→ true* 



(equal "FOO" "foo") *→ false* 



(equal "This-string" "This-string") *→ true* 



(equal "This-string" "this-string") *→ false* 




```
**See Also:** 



**eq**, **eql**, **equalp**, **=**, **string=**, **string-equal**, **char=**, **char-equal**, **tree-equal** 



**Notes:** 



*Object* equality is not a concept for which there is a uniquely determined correct algorithm. The appropriateness of an equality predicate can be judged only in the context of the needs of some particular program. Although these functions take any type of argument and their names sound 



Data and Control 











very generic, **equal** and **equalp** are not appropriate for every application. 



A rough rule of thumb is that two *objects* are **equal** if and only if their printed representations are the same. 



