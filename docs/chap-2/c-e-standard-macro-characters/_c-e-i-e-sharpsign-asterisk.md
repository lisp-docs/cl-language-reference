 

**Syntax:** #\*&#10216;bits&#10217; 

A *simple bit vector* is constructed containing the indicated *bits* (0’s and 1’s), where the leftmost *bit* has index zero and the subsequent *bits* have increasing indices. 

**Syntax:** #&#10216;n&#10217;\*&#10216;bits&#10217; 

With an argument *n*, the *vector* to be created is of *length n*. If the number of *bits* is less than *n* but greater than zero, the last bit is used to fill all remaining bits of the *bit vector* . 

The notations #\* and #0\* each denote an empty *bit vector* . 

Regardless of whether the optional numeric argument *n* is provided, the *token* that follows the *asterisk* is delimited by a normal *token* delimiter. However, (unless the *value* of **\*read-suppress\*** is *true*) an error of *type* **reader-error** is signaled if that *token* is not composed entirely of 0’s and 1’s, or if *n* was supplied and the *token* is composed of more than *n bits*, or if *n* is greater than one, but no *bits* were specified. Neither a *single escape* nor a *multiple escape* is permitted in this *token*. 

For information on how the *Lisp printer* prints *bit vectors*, see Section 22.1.3.6 (Printing Bit Vectors). 

