 



For each of the “read-modify-write” <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> in Figure 5–9, and for any additional <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> defined by the <ClLinks styled={true} term={"programmer"}><i>programmer</i></ClLinks> using <ClLinks styled={true} term={"define-modify-macro"}><b>define-modify-macro</b></ClLinks>, an exception is made to the normal rule of left-to-right evaluation of arguments. Evaluation of *argument forms* occurs in left-to-right order, with the exception that for the *place argument*, the actual <ClLinks styled={true} term={"read"}><i>read</i></ClLinks> of the “old value” from that <ClLinks styled={true} term={"place"}><i>place</i></ClLinks> happens after all of the *argument form evaluations*, and just before a “new value” is computed and *written* back into the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



Specifically, each of these <ClLinks styled={true} term={"operator"}><i>operators</i></ClLinks> can be viewed as involving a <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> with the following general syntax: 



(*operator \{preceding-form\}*\* *place \{following-form\}*\*) 



The evaluation of each such <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> proceeds like this: 



1\. <ClLinks styled={true} term={"evaluate"}><i>Evaluate</i></ClLinks> each of the *preceding-forms*, in left-to-right order. 



2\. <ClLinks styled={true} term={"evaluate"}><i>Evaluate</i></ClLinks> the <ClLinks styled={true} term={"subform"}><i>subforms</i></ClLinks> of the <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>, in the order specified by the second value of the *setf expansion* for that <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



3\. <ClLinks styled={true} term={"evaluate"}><i>Evaluate</i></ClLinks> each of the *following-forms*, in left-to-right order. 



4\. <ClLinks styled={true} term={"read"}><i>Read</i></ClLinks> the old value from <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



5\. Compute the new value. 



6\. Store the new value into <ClLinks styled={true} term={"place"}><i>place</i></ClLinks>. 



Data and Control 











|<p>**decf pop pushnew** </p><p>**incf push remf**</p>|

| :- |





**Figure 5–9. Read-Modify-Write Macros** 















