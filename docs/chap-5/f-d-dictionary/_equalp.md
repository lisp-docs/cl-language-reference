**equalp** *Function* 



**Syntax:** 



**equalp** *x y → generalized-boolean* 



**Arguments and Values:** 



*x*—an *object*. 



*y*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



Returns *true* if *x* and *y* are **equal**, or if they have components that are of the same *type* as each other and if those components are **equalp**; specifically, **equalp** returns *true* in the following cases: 



*Characters* 



If two *characters* are **char-equal**. 



*Numbers* 



If two *numbers* are the *same* under **=**. 



*Conses* 



If the two *cars* in the *conses* are **equalp** and the two *cdrs* in the *conses* are **equalp**. 



*Arrays* 



If two *arrays* have the same number of dimensions, the dimensions match, and the corresponding *active elements* are **equalp**. The *types* for which the *arrays* are *specialized* need not match; for example, a *string* and a general *array* that happens to contain the same *characters* are **equalp**. Because **equalp** performs *element*-by-*element* comparisons of *strings* and ignores the *case* of *characters*, *case* distinctions are ignored when **equalp** compares *strings*. 















**equalp** 



*Structures* 



If two *structures S*<sub>1</sub> and *S*<sub>2</sub> have the same *class* and the value of each *slot* in *S*<sub>1</sub> is the *same* under **equalp** as the value of the corresponding *slot* in *S*<sub>2</sub>. 



*Hash Tables* 



**equalp** descends *hash-tables* by first comparing the count of entries and the :test function; if those are the same, it compares the keys of the tables using the :test function and then the values of the matching keys using **equalp** recursively. 



**equalp** does not descend any *objects* other than the ones explicitly specified above. Figure 5–13 summarizes the information given in the previous list. In addition, the figure specifies the priority of the behavior of **equalp**, with upper entries taking priority over lower ones. 



|**Type Behavior**|

| :- |

|<p>*number* uses **=** </p><p>*character* uses **char-equal** </p><p>*cons* descends </p><p>*bit vector* descends </p><p>*string* descends </p><p>*pathname* same as **equal** </p><p>*structure* descends, as described above </p><p>Other *array* descends </p><p>*hash table* descends, as described above </p><p>Other *object* uses **eq**</p>|





**Figure 5–13. Summary and priorities of behavior of equalp** 



**Examples:**
```lisp
 

(equalp ’a ’b) *→ false* 

(equalp ’a ’a) *→ true* 

(equalp 3 3) *→ true* 

(equalp 3 3.0) *→ true* 

(equalp 3.0 3.0) *→ true* 

(equalp #c(3 -4) #c(3 -4)) *→ true* 

(equalp #c(3 -4.0) #c(3 -4)) *→ true* 

(equalp (cons ’a ’b) (cons ’a ’c)) *→ false* 

(equalp (cons ’a ’b) (cons ’a ’b)) *→ true* 

(equalp #\A #\A) *→ true* 

(equalp #\A #\a) *→ true* 

(equalp "Foo" "Foo") *→ true* 

(equalp "Foo" (copy-seq "Foo")) *→ true* 

Data and Control 





(equalp "FOO" "foo") *→ true* 

(setq array1 (make-array 6 :element-type ’integer 

:initial-contents ’(1 1 1 3 5 7))) 

*→* #(1 1 1 3 5 7) 

(setq array2 (make-array 8 :element-type ’integer 

:initial-contents ’(1 1 1 3 5 7 2 6) 

:fill-pointer 6)) 

*→* #(1 1 1 3 5 7) 

(equalp array1 array2) *→ true* 

(setq vector1 (vector 1 1 1 3 5 7)) *→* #(1 1 1 3 5 7) 

(equalp array1 vector1) *→ true* 


```
**See Also:** 



**eq**, **eql**, **equal**, **=**, **string=**, **string-equal**, **char=**, **char-equal** 



**Notes:** 



*Object* equality is not a concept for which there is a uniquely determined correct algorithm. The appropriateness of an equality predicate can be judged only in the context of the needs of some particular program. Although these functions take any type of argument and their names sound very generic, **equal** and **equalp** are not appropriate for every application. 



