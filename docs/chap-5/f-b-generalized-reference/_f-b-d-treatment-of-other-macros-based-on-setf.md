 



For each of the “read-modify-write” <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> in Figure 5–9, and for any additional <GlossaryTerm styled={true} term={"macro"}><i>macros</i></GlossaryTerm> defined by the <GlossaryTerm styled={true} term={"programmer"}><i>programmer</i></GlossaryTerm> using <DictionaryLink styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></DictionaryLink>, an exception is made to the normal rule of left-to-right evaluation of arguments. Evaluation of *argument forms* occurs in left-to-right order, with the exception that for the *place argument*, the actual <GlossaryTerm styled={true} term={"read"}><i>read</i></GlossaryTerm> of the “old value” from that <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm> happens after all of the *argument form evaluations*, and just before a “new value” is computed and *written* back into the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



Specifically, each of these <GlossaryTerm styled={true} term={"operator"}><i>operators</i></GlossaryTerm> can be viewed as involving a <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> with the following general syntax: 



(*operator \{preceding-form\}*\* *place \{following-form\}*\*) 



The evaluation of each such <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> proceeds like this: 



1\. <GlossaryTerm styled={true} term={"evaluate"}><i>Evaluate</i></GlossaryTerm> each of the *preceding-forms*, in left-to-right order. 



2\. <GlossaryTerm styled={true} term={"evaluate"}><i>Evaluate</i></GlossaryTerm> the <GlossaryTerm styled={true} term={"subform"}><i>subforms</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>, in the order specified by the second value of the *setf expansion* for that <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



3\. <GlossaryTerm styled={true} term={"evaluate"}><i>Evaluate</i></GlossaryTerm> each of the *following-forms*, in left-to-right order. 



4\. <GlossaryTerm styled={true} term={"read"}><i>Read</i></GlossaryTerm> the old value from <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



5\. Compute the new value. 



6\. Store the new value into <GlossaryTerm styled={true} term={"place"}><i>place</i></GlossaryTerm>. 



Data and Control 











|<p>**decf pop pushnew** </p><p>**incf push remf**</p>|

| :- |





**Figure 5–9. Read-Modify-Write Macros** 















