**every, some, notevery, notany** *Function* 



**Syntax:** 



**every** *predicate* &rest *sequences*<sup>+</sup> *→ generalized-boolean* 



**some** *predicate* &rest *sequences*<sup>+</sup> *→ result* 



**notevery** *predicate* &rest *sequences*<sup>+</sup> *→ generalized-boolean* 



**notany** *predicate* &rest *sequences*<sup>+</sup> *→ generalized-boolean* 



**Arguments and Values:** 



*predicate*—a *designator* for a *function* of as many *arguments* as there are *sequences*. *sequence*—a *sequence*. 



*result*—an *object*. 



*generalized-boolean*—a *generalized boolean*. 



**Description:** 



**every**, **some**, **notevery**, and **notany** test *elements* of *sequences* for satisfaction of a given *predicate*. The first argument to *predicate* is an *element* of the first *sequence*; each succeeding argument is an *element* of a succeeding *sequence*. 



*Predicate* is first applied to the elements with index 0 in each of the *sequences*, and possibly then to the elements with index 1, and so on, until a termination criterion is met or the end of the shortest of the *sequences* is reached. 



**every** returns *false* as soon as any invocation of *predicate* returns *false*. If the end of a *sequence* is reached, **every** returns *true*. Thus, **every** returns *true* if and only if every invocation of *predicate* returns *true*. 



**some** returns the first *non-nil* value which is returned by an invocation of *predicate*. If the end of a *sequence* is reached without any invocation of the *predicate* returning *true*, **some** returns *false*. Thus, **some** returns *true* if and only if some invocation of *predicate* returns *true*. 



**notany** returns *false* as soon as any invocation of *predicate* returns *true*. If the end of a *sequence* is reached, **notany** returns *true*. Thus, **notany** returns *true* if and only if it is not the case that any invocation of *predicate* returns *true*. 



**notevery** returns *true* as soon as any invocation of *predicate* returns *false*. If the end of a *sequence* is reached, **notevery** returns *false*. Thus, **notevery** returns *true* if and only if it is not the case that every invocation of *predicate* returns *true*. 



Data and Control 











**Examples:**
```lisp
 



(every #’characterp "abc") *→ true* 



(some #’= ’(1 2 3 4 5) ’(5 4 3 2 1)) *→ true* 



(notevery #’< ’(1 2 3 4) ’(5 6 7 8) ’(9 10 11 12)) *→ false* 



(notany #’> ’(1 2 3 4) ’(5 6 7 8) ’(9 10 11 12)) *→ true* 




```
**Exceptional Situations:** 



Should signal **type-error** if its first argument is neither a *symbol* nor a *function* or if any subsequent argument is not a *proper sequence*. 



Other exceptional situations are possible, depending on the nature of the *predicate*. 



**See Also:** 



**and**, **or**, Section 3.6 (Traversal Rules and Side Effects) 



**Notes:** 



(notany *predicate \&#123;sequence\&#125;*\*) *≡* (not (some *predicate \&#123;sequence\&#125;*\*)) 



(notevery *predicate \&#123;sequence\&#125;*\*) *≡* (not (every *predicate \&#123;sequence\&#125;*\*)) 



