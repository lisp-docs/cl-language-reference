**synonym-stream** *System Class* 



**Class Precedence List:** 



**synonym-stream**, **stream**, **t** 



**Description:** 



A *stream* that is an alias for another *stream*, which is the *value* of a *dynamic variable* whose *name* is the *synonym stream symbol* of the *synonym stream*. 



Any operations on a *synonym stream* will be performed on the *stream* that is then the *value* of the *dynamic variable* named by the *synonym stream symbol*. If the *value* of the *variable* should change, or if the *variable* should be *bound*, then the *stream* will operate on the new *value* of the *variable*. 



**See Also:** 



**make-synonym-stream**, **synonym-stream-symbol** 







 



 



