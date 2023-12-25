 



This section describes the algorithm used by the *Lisp reader* to parse <GlossaryTerm styled={true} term={"object"}><i>objects</i></GlossaryTerm> from an *input character stream*, including how the *Lisp reader* processes *macro characters*. 



When dealing with <GlossaryTerm styled={true} term={"token"}><i>tokens</i></GlossaryTerm>, the reader’s basic function is to distinguish representations of <GlossaryTerm styled={true} term={"symbol"}><i>symbols</i></GlossaryTerm> from those of <GlossaryTerm styled={true} term={"number"}><i>numbers</i></GlossaryTerm>. When a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is accumulated, it is assumed to represent a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> if it satisfies the syntax for numbers listed in Figure 2–9. If it does not represent a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> , it is then assumed to be a *potential number* if it satisfies the rules governing the syntax for a *potential number* . If a valid <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is neither a representation of a <GlossaryTerm styled={true} term={"number"}><i>number</i></GlossaryTerm> nor a *potential number* , it represents a <GlossaryTerm styled={true} term={"symbol"}><i>symbol</i></GlossaryTerm>. 



The algorithm performed by the *Lisp reader* is as follows: 



1\. If at end of file, end-of-file processing is performed as specified in <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink>. Otherwise, one <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , *x*, is read from the *input stream*, and dispatched according to the *syntax type* of *x* to one of steps 2 to 7. 



2\. If *x* is an *invalid character* , an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled. 



3\. If *x* is a <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , then it is discarded and step 1 is re-entered. 



4\. If *x* is a <GlossaryTerm styled={true} term={"terminating"}><i>terminating</i></GlossaryTerm> or *non-terminating macro character* then its associated *reader macro function* is called with two <GlossaryTerm styled={true} term={"argument"}><i>arguments</i></GlossaryTerm>, the *input stream* and *x*. 



The *reader macro function* may read <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> from the *input stream*; if it does, it will see those <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm> following the *macro character* . The *Lisp reader* may be invoked recursively from the *reader macro function*. 



The *reader macro function* must not have any side effects other than on the *input stream*; because of backtracking and restarting of the <DictionaryLink styled={true} term={"read"}><b>read</b></DictionaryLink> operation, front ends to the *Lisp reader* (*e.g.*, “editors” and “rubout handlers”) may cause the *reader macro function* to be called repeatedly during the reading of a single <GlossaryTerm styled={true} term={"expression"}><i>expression</i></GlossaryTerm> in which *x* only appears once. 



The *reader macro function* may return zero values or one value. If one value is returned, then that value is returned as the result of the read operation; the algorithm is done. If zero values are returned, then step 1 is re-entered. 



5\. If *x* is a *single escape character* then the next <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , *y*, is read, or an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled if at the end of file. *y* is treated as if it is a <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm> whose only *constituent trait* is <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub>. *y* is used to begin a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>, and step 8 is entered. 



6\. If *x* is a *multiple escape character* then a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> (initially containing no <GlossaryTerm styled={true} term={"character"}><i>characters</i></GlossaryTerm>) is begun and step 9 is entered. 



7\. If *x* is a *constituent character* , then it begins a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>. After the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is read in, it will be interpreted either as a Lisp <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> or as being of invalid syntax. If the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> represents an  







<GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm>, that <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> is returned as the result of the read operation. If the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is of invalid syntax, an error is signaled. If *x* is a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>, it might be replaced with the corresponding <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> of the opposite <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>, depending on the *readtable case* of the *current readtable*, as outlined in Section 23.1.2 (Effect of Readtable Case on the Lisp Reader). *X* is used to begin a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>, and step 8 is entered. 



8\. At this point a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is being accumulated, and an even number of *multiple escape characters* have been encountered. If at end of file, step 10 is entered. Otherwise, a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , *y*, is read, and one of the following actions is performed according to its *syntax type*: 



*•* If *y* is a <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm> or *non-terminating macro character* : 



– If *y* is a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> with <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>, it might be replaced with the corresponding 



<GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> of the opposite <GlossaryTerm styled={true} term={"case"}><i>case</i></GlossaryTerm>, depending on the *readtable case* of the *current* 



<GlossaryTerm styled={true} term={"readtable"}><i>readtable</i></GlossaryTerm>, as outlined in Section 23.1.2 (Effect of Readtable Case on the Lisp 



Reader). 



– *Y* is appended to the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> being built. 



– Step 8 is repeated. 



*•* If *y* is a *single escape character* , then the next <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , *z*, is read, or an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled if at end of file. *Z* is treated as if it is a <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm> whose only *constituent trait* is <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub>. *Z* is appended to the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> being built, and step 8 is repeated. 



*•* If *y* is a *multiple escape character* , then step 9 is entered. 



*•* If *y* is an *invalid character* , an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled. 



*•* If *y* is a *terminating macro character* , then it terminates the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>. First the *character y* is unread (see <DictionaryLink styled={true} term={"unread-char"}><b>unread-char</b></DictionaryLink>), and then step 10 is entered. 



*•* If *y* is a <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , then it terminates the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm>. First the *character y* is unread if appropriate (see <DictionaryLink styled={true} term={"read-preserving-whitespace"}><b>read-preserving-whitespace</b></DictionaryLink>), and then step 10 is entered. 



9\. At this point a <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is being accumulated, and an odd number of *multiple escape characters* have been encountered. If at end of file, an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled. Otherwise, a <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , *y*, is read, and one of the following actions is performed according to its *syntax type*: 



*•* If *y* is a <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm>, macro, or <GlossaryTerm styled={true} term={"whitespace"}><i>whitespace</i></GlossaryTerm><sub>2</sub> <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , *y* is treated as a <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm> whose only *constituent trait* is <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub>. *Y* is appended to the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> being built, and step 9 is repeated. 



*•* If *y* is a *single escape character* , then the next <GlossaryTerm styled={true} term={"character"}><i>character</i></GlossaryTerm> , *z*, is read, or an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"end-of-file"}><b>end-of-file</b></DictionaryLink> is signaled if at end of file. *Z* is treated as a <GlossaryTerm styled={true} term={"constituent"}><i>constituent</i></GlossaryTerm> whose only *constituent trait* is <GlossaryTerm styled={true} term={"alphabetic"}><i>alphabetic</i></GlossaryTerm><sub>2</sub>. *Z* is appended to the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> being built, and step 9 is repeated.  







*•* If *y* is a *multiple escape character* , then step 8 is entered. 



*•* If *y* is an *invalid character* , an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled. 



10\. An entire <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> has been accumulated. The <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> represented by the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is returned as the result of the read operation, or an error of <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm> <DictionaryLink styled={true} term={"reader-error"}><b>reader-error</b></DictionaryLink> is signaled if the <GlossaryTerm styled={true} term={"token"}><i>token</i></GlossaryTerm> is not of valid syntax.  







