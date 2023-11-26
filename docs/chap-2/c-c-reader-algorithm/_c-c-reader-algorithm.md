 

This section describes the algorithm used by the *Lisp reader* to parse *objects* from an *input character stream*, including how the *Lisp reader* processes *macro characters*. 

When dealing with *tokens*, the reader’s basic function is to distinguish representations of *symbols* from those of *numbers*. When a *token* is accumulated, it is assumed to represent a *number* if it satisfies the syntax for numbers listed in Figure 2–9. If it does not represent a *number* , it is then assumed to be a *potential number* if it satisfies the rules governing the syntax for a *potential number* . If a valid *token* is neither a representation of a *number* nor a *potential number* , it represents a *symbol*. 

The algorithm performed by the *Lisp reader* is as follows: 

1\. If at end of file, end-of-file processing is performed as specified in **read**. Otherwise, one *character* , *x*, is read from the *input stream*, and dispatched according to the *syntax type* of *x* to one of steps 2 to 7. 

2\. If *x* is an *invalid character* , an error of *type* **reader-error** is signaled. 

3\. If *x* is a *whitespace*\<sub\>2\</sub\> *character* , then it is discarded and step 1 is re-entered. 

4\. If *x* is a *terminating* or *non-terminating macro character* then its associated *reader macro function* is called with two *arguments*, the *input stream* and *x*. 

The *reader macro function* may read *characters* from the *input stream*; if it does, it will see those *characters* following the *macro character* . The *Lisp reader* may be invoked recursively from the *reader macro function*. 

The *reader macro function* must not have any side effects other than on the *input stream*; because of backtracking and restarting of the **read** operation, front ends to the *Lisp reader* (*e.g.*, “editors” and “rubout handlers”) may cause the *reader macro function* to be called repeatedly during the reading of a single *expression* in which *x* only appears once. 

The *reader macro function* may return zero values or one value. If one value is returned, then that value is returned as the result of the read operation; the algorithm is done. If zero values are returned, then step 1 is re-entered. 

5\. If *x* is a *single escape character* then the next *character* , *y*, is read, or an error of *type* **end-of-file** is signaled if at the end of file. *y* is treated as if it is a *constituent* whose only *constituent trait* is *alphabetic*\<sub\>2\</sub\>. *y* is used to begin a *token*, and step 8 is entered. 

6\. If *x* is a *multiple escape character* then a *token* (initially containing no *characters*) is begun and step 9 is entered. 

7\. If *x* is a *constituent character* , then it begins a *token*. After the *token* is read in, it will be interpreted either as a Lisp *object* or as being of invalid syntax. If the *token* represents an  



*object*, that *object* is returned as the result of the read operation. If the *token* is of invalid syntax, an error is signaled. If *x* is a *character* with *case*, it might be replaced with the corresponding *character* of the opposite *case*, depending on the *readtable case* of the *current readtable*, as outlined in Section 23.1.2 (Effect of Readtable Case on the Lisp Reader). *X* is used to begin a *token*, and step 8 is entered. 

8\. At this point a *token* is being accumulated, and an even number of *multiple escape characters* have been encountered. If at end of file, step 10 is entered. Otherwise, a *character* , *y*, is read, and one of the following actions is performed according to its *syntax type*: 

*•* If *y* is a *constituent* or *non-terminating macro character* : 

– If *y* is a *character* with *case*, it might be replaced with the corresponding 

*character* of the opposite *case*, depending on the *readtable case* of the *current* 

*readtable*, as outlined in Section 23.1.2 (Effect of Readtable Case on the Lisp 

Reader). 

– *Y* is appended to the *token* being built. 

– Step 8 is repeated. 

*•* If *y* is a *single escape character* , then the next *character* , *z*, is read, or an error of *type* **end-of-file** is signaled if at end of file. *Z* is treated as if it is a *constituent* whose only *constituent trait* is *alphabetic*\<sub\>2\</sub\>. *Z* is appended to the *token* being built, and step 8 is repeated. 

*•* If *y* is a *multiple escape character* , then step 9 is entered. 

*•* If *y* is an *invalid character* , an error of *type* **reader-error** is signaled. 

*•* If *y* is a *terminating macro character* , then it terminates the *token*. First the *character y* is unread (see **unread-char**), and then step 10 is entered. 

*•* If *y* is a *whitespace*\<sub\>2\</sub\> *character* , then it terminates the *token*. First the *character y* is unread if appropriate (see **read-preserving-whitespace**), and then step 10 is entered. 

9\. At this point a *token* is being accumulated, and an odd number of *multiple escape characters* have been encountered. If at end of file, an error of *type* **end-of-file** is signaled. Otherwise, a *character* , *y*, is read, and one of the following actions is performed according to its *syntax type*: 

*•* If *y* is a *constituent*, macro, or *whitespace*\<sub\>2\</sub\> *character* , *y* is treated as a *constituent* whose only *constituent trait* is *alphabetic*\<sub\>2\</sub\>. *Y* is appended to the *token* being built, and step 9 is repeated. 

*•* If *y* is a *single escape character* , then the next *character* , *z*, is read, or an error of *type* **end-of-file** is signaled if at end of file. *Z* is treated as a *constituent* whose only *constituent trait* is *alphabetic*\<sub\>2\</sub\>. *Z* is appended to the *token* being built, and step 9 is repeated.  



*•* If *y* is a *multiple escape character* , then step 8 is entered. 

*•* If *y* is an *invalid character* , an error of *type* **reader-error** is signaled. 

10\. An entire *token* has been accumulated. The *object* represented by the *token* is returned as the result of the read operation, or an error of *type* **reader-error** is signaled if the *token* is not of valid syntax.  



