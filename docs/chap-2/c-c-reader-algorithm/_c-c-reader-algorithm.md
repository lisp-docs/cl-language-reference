 



This section describes the algorithm used by the *Lisp reader* to parse <ClLinks  term={"object"}><i>objects</i></ClLinks> from an *input character stream*, including how the *Lisp reader* processes *macro characters*. 



When dealing with <ClLinks  term={"token"}><i>tokens</i></ClLinks>, the reader’s basic function is to distinguish representations of <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> from those of <ClLinks  term={"number"}><i>numbers</i></ClLinks>. When a <ClLinks  term={"token"}><i>token</i></ClLinks> is accumulated, it is assumed to represent a <ClLinks  term={"number"}><i>number</i></ClLinks> if it satisfies the syntax for numbers listed in Figure 2–9. If it does not represent a <ClLinks  term={"number"}><i>number</i></ClLinks> , it is then assumed to be a *potential number* if it satisfies the rules governing the syntax for a *potential number* . If a valid <ClLinks  term={"token"}><i>token</i></ClLinks> is neither a representation of a <ClLinks  term={"number"}><i>number</i></ClLinks> nor a *potential number* , it represents a <ClLinks  term={"symbol"}><i>symbol</i></ClLinks>. 



The algorithm performed by the *Lisp reader* is as follows: 



1\. If at end of file, end-of-file processing is performed as specified in <ClLinks  term={"read"}><b>read</b></ClLinks>. Otherwise, one <ClLinks  term={"character"}><i>character</i></ClLinks> , *x*, is read from the *input stream*, and dispatched according to the *syntax type* of *x* to one of steps 2 to 7. 



2\. If *x* is an *invalid character* , an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"reader-error"}><b>reader-error</b></ClLinks> is signaled. 



3\. If *x* is a <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>character</i></ClLinks> , then it is discarded and step 1 is re-entered. 



4\. If *x* is a <ClLinks  term={"terminating"}><i>terminating</i></ClLinks> or *non-terminating macro character* then its associated *reader macro function* is called with two <ClLinks  term={"argument"}><i>arguments</i></ClLinks>, the *input stream* and *x*. 



The *reader macro function* may read <ClLinks  term={"character"}><i>characters</i></ClLinks> from the *input stream*; if it does, it will see those <ClLinks  term={"character"}><i>characters</i></ClLinks> following the *macro character* . The *Lisp reader* may be invoked recursively from the *reader macro function*. 



The *reader macro function* must not have any side effects other than on the *input stream*; because of backtracking and restarting of the <ClLinks  term={"read"}><b>read</b></ClLinks> operation, front ends to the *Lisp reader* (*e.g.*, “editors” and “rubout handlers”) may cause the *reader macro function* to be called repeatedly during the reading of a single <ClLinks  term={"expression"}><i>expression</i></ClLinks> in which *x* only appears once. 



The *reader macro function* may return zero values or one value. If one value is returned, then that value is returned as the result of the read operation; the algorithm is done. If zero values are returned, then step 1 is re-entered. 



5\. If *x* is a *single escape character* then the next <ClLinks  term={"character"}><i>character</i></ClLinks> , *y*, is read, or an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled if at the end of file. *y* is treated as if it is a <ClLinks  term={"constituent"}><i>constituent</i></ClLinks> whose only *constituent trait* is <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>. *y* is used to begin a <ClLinks  term={"token"}><i>token</i></ClLinks>, and step 8 is entered. 



6\. If *x* is a *multiple escape character* then a <ClLinks  term={"token"}><i>token</i></ClLinks> (initially containing no <ClLinks  term={"character"}><i>characters</i></ClLinks>) is begun and step 9 is entered. 



7\. If *x* is a *constituent character* , then it begins a <ClLinks  term={"token"}><i>token</i></ClLinks>. After the <ClLinks  term={"token"}><i>token</i></ClLinks> is read in, it will be interpreted either as a Lisp <ClLinks  term={"object"}><i>object</i></ClLinks> or as being of invalid syntax. If the <ClLinks  term={"token"}><i>token</i></ClLinks> represents an  







<ClLinks  term={"object"}><i>object</i></ClLinks>, that <ClLinks  term={"object"}><i>object</i></ClLinks> is returned as the result of the read operation. If the <ClLinks  term={"token"}><i>token</i></ClLinks> is of invalid syntax, an error is signaled. If *x* is a <ClLinks  term={"character"}><i>character</i></ClLinks> with <ClLinks  term={"case"}><i>case</i></ClLinks>, it might be replaced with the corresponding <ClLinks  term={"character"}><i>character</i></ClLinks> of the opposite <ClLinks  term={"case"}><i>case</i></ClLinks>, depending on the *readtable case* of the *current readtable*, as outlined in Section 23.1.2 (Effect of Readtable Case on the Lisp Reader). *X* is used to begin a <ClLinks  term={"token"}><i>token</i></ClLinks>, and step 8 is entered. 



8\. At this point a <ClLinks  term={"token"}><i>token</i></ClLinks> is being accumulated, and an even number of *multiple escape characters* have been encountered. If at end of file, step 10 is entered. Otherwise, a <ClLinks  term={"character"}><i>character</i></ClLinks> , *y*, is read, and one of the following actions is performed according to its *syntax type*: 



*•* If *y* is a <ClLinks  term={"constituent"}><i>constituent</i></ClLinks> or *non-terminating macro character* : 



– If *y* is a <ClLinks  term={"character"}><i>character</i></ClLinks> with <ClLinks  term={"case"}><i>case</i></ClLinks>, it might be replaced with the corresponding 



<ClLinks  term={"character"}><i>character</i></ClLinks> of the opposite <ClLinks  term={"case"}><i>case</i></ClLinks>, depending on the *readtable case* of the *current* 



<ClLinks  term={"readtable"}><i>readtable</i></ClLinks>, as outlined in Section 23.1.2 (Effect of Readtable Case on the Lisp 



Reader). 



– *Y* is appended to the <ClLinks  term={"token"}><i>token</i></ClLinks> being built. 



– Step 8 is repeated. 



*•* If *y* is a *single escape character* , then the next <ClLinks  term={"character"}><i>character</i></ClLinks> , *z*, is read, or an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled if at end of file. *Z* is treated as if it is a <ClLinks  term={"constituent"}><i>constituent</i></ClLinks> whose only *constituent trait* is <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>. *Z* is appended to the <ClLinks  term={"token"}><i>token</i></ClLinks> being built, and step 8 is repeated. 



*•* If *y* is a *multiple escape character* , then step 9 is entered. 



*•* If *y* is an *invalid character* , an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"reader-error"}><b>reader-error</b></ClLinks> is signaled. 



*•* If *y* is a *terminating macro character* , then it terminates the <ClLinks  term={"token"}><i>token</i></ClLinks>. First the *character y* is unread (see <ClLinks  term={"unread-char"}><b>unread-char</b></ClLinks>), and then step 10 is entered. 



*•* If *y* is a <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>character</i></ClLinks> , then it terminates the <ClLinks  term={"token"}><i>token</i></ClLinks>. First the *character y* is unread if appropriate (see <ClLinks  term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></ClLinks>), and then step 10 is entered. 



9\. At this point a <ClLinks  term={"token"}><i>token</i></ClLinks> is being accumulated, and an odd number of *multiple escape characters* have been encountered. If at end of file, an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled. Otherwise, a <ClLinks  term={"character"}><i>character</i></ClLinks> , *y*, is read, and one of the following actions is performed according to its *syntax type*: 



*•* If *y* is a <ClLinks  term={"constituent"}><i>constituent</i></ClLinks>, macro, or <ClLinks  term={"whitespace"}><i>whitespace</i></ClLinks><sub>2</sub> <ClLinks  term={"character"}><i>character</i></ClLinks> , *y* is treated as a <ClLinks  term={"constituent"}><i>constituent</i></ClLinks> whose only *constituent trait* is <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>. *Y* is appended to the <ClLinks  term={"token"}><i>token</i></ClLinks> being built, and step 9 is repeated. 



*•* If *y* is a *single escape character* , then the next <ClLinks  term={"character"}><i>character</i></ClLinks> , *z*, is read, or an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"end-of-file"}><b>end-of-file</b></ClLinks> is signaled if at end of file. *Z* is treated as a <ClLinks  term={"constituent"}><i>constituent</i></ClLinks> whose only *constituent trait* is <ClLinks  term={"alphabetic"}><i>alphabetic</i></ClLinks><sub>2</sub>. *Z* is appended to the <ClLinks  term={"token"}><i>token</i></ClLinks> being built, and step 9 is repeated.  







*•* If *y* is a *multiple escape character* , then step 8 is entered. 



*•* If *y* is an *invalid character* , an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"reader-error"}><b>reader-error</b></ClLinks> is signaled. 



10\. An entire <ClLinks  term={"token"}><i>token</i></ClLinks> has been accumulated. The <ClLinks  term={"object"}><i>object</i></ClLinks> represented by the <ClLinks  term={"token"}><i>token</i></ClLinks> is returned as the result of the read operation, or an error of <ClLinks  term={"type"}><i>type</i></ClLinks> <ClLinks  term={"reader-error"}><b>reader-error</b></ClLinks> is signaled if the <ClLinks  term={"token"}><i>token</i></ClLinks> is not of valid syntax.  







