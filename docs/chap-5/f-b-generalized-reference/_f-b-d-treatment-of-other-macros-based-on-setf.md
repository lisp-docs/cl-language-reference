 



For each of the “read-modify-write” <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> in Figure 5–9, and for any additional <GlossaryTerm  term={"macro"}><i>macros</i></GlossaryTerm> defined by the <GlossaryTerm  term={"programmer"}><i>programmer</i></GlossaryTerm> using <DictionaryLink  term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>, an exception is made to the normal rule of left-to-right evaluation of arguments. Evaluation of *argument forms* occurs in left-to-right order, with the exception that for the *place argument*, the actual <GlossaryTerm  term={"read"}><i>read</i></GlossaryTerm> of the “old value” from that <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm> happens after all of the *argument form evaluations*, and just before a “new value” is computed and *written* back into the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. 



Specifically, each of these <GlossaryTerm  term={"operator"}><i>operators</i></GlossaryTerm> can be viewed as involving a <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> with the following general syntax: 

"""lisp
(*operator \{preceding-form\}*\* *place \{following-form\}*\*)
"""

The evaluation of each such <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> proceeds like this: 



1\. <GlossaryTerm  term={"evaluate"}><i>Evaluate</i></GlossaryTerm> each of the *preceding-forms*, in left-to-right order. 



2\. <GlossaryTerm  term={"evaluate"}><i>Evaluate</i></GlossaryTerm> the <GlossaryTerm  term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>, in the order specified by the second value of the <GlossaryTerm styled={true} term={"setf expansion"}><i>setf expansion</i></GlossaryTerm> for that <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. 



3\. <GlossaryTerm  term={"evaluate"}><i>Evaluate</i></GlossaryTerm> each of the *following-forms*, in left-to-right order. 



4\. <GlossaryTerm  term={"read"}><i>Read</i></GlossaryTerm> the old value from <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. 



5\. Compute the new value. 



6\. Store the new value into <GlossaryTerm  term={"place"}><i>place</i></GlossaryTerm>. 



Data and Control 











| **Operators**                                               |
| :---------------------------------------------------------- |
| <p>**decf pop pushnew** </p><p>**incf push remf**</p> |





**Figure 5–9. Read-Modify-Write Macros** 















