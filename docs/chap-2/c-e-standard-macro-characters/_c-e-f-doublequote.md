 

**Syntax:** "&#10216;text&#10217;" 

The *double-quote* is used to begin and end a *string*. When a *double-quote* is encountered, *characters* are read from the *input stream* and accumulated until another *double-quote* is encountered. If a *single escape character* is seen, the *single escape character* is discarded, the next *character* is accumulated, and accumulation continues. The accumulated *characters* up to but not including the matching *double-quote* are made into a *simple string* and returned. It is *implementation-dependent* which *attributes* of the accumulated characters are removed in this process. 

Examples of the use of the *double-quote* character are in Figure 2–18. 

|&#60;p&#62;"Foo" ;A string with three characters in it "" ;An empty string &#60;/p&#62;&#60;p&#62;"\"APL\\360?\" he cried." ;A string with twenty characters &#60;/p&#62;&#60;p&#62;"|x| = |-x|" ;A ten-character string&#60;/p&#62;|
| :- |


**Figure 2–18. Examples of the use of double-quote** 

Note that to place a single escape character or a *double-quote* into a string, such a character must be preceded by a single escape character. Note, too, that a multiple escape character need not be quoted by a single escape character within a string. 

For information on how the *Lisp printer* prints *strings*, see Section 22.1.3.4 (Printing Strings).

 