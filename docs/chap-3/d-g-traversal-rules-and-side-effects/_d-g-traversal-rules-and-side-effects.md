**3.6 Traversal Rules and Side Effects** 

The consequences are undefined when *code* executed during an *object-traversing* operation destructively modifies the *object* in a way that might affect the ongoing traversal operation. In particular, the following rules apply. 

**List traversal** 

For *list* traversal operations, the *cdr* chain of the *list* is not allowed to be destructively modified. 

**Array traversal** 

For *array* traversal operations, the *array* is not allowed to be adjusted and its *fill pointer* , if any, is not allowed to be changed. 

**Hash-table traversal** 

For *hash table* traversal operations, new elements may not be added or deleted except that the element corresponding to the current hash key may be changed or removed. 

**Package traversal** 

For *package* traversal operations (*e.g.*, **do-symbols**), new *symbols* may not be *interned* in or *uninterned* from the *package* being traversed or any *package* that it uses except that the current *symbol* may be *uninterned* from the *package* being traversed.  



