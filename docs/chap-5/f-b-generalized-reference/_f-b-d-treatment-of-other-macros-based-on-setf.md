 

For each of the “read-modify-write” *operators* in Figure 5–9, and for any additional *macros* defined by the *programmer* using **define-modify-macro**, an exception is made to the normal rule of left-to-right evaluation of arguments. Evaluation of *argument forms* occurs in left-to-right order, with the exception that for the *place argument*, the actual *read* of the “old value” from that *place* happens after all of the *argument form evaluations*, and just before a “new value” is computed and *written* back into the *place*. 

Specifically, each of these *operators* can be viewed as involving a *form* with the following general syntax: 

(*operator \{preceding-form\}*\* *place \{following-form\}*\*) 

The evaluation of each such *form* proceeds like this: 

1\. *Evaluate* each of the *preceding-forms*, in left-to-right order. 

2\. *Evaluate* the *subforms* of the *place*, in the order specified by the second value of the *setf expansion* for that *place*. 

3\. *Evaluate* each of the *following-forms*, in left-to-right order. 

4\. *Read* the old value from *place*. 

5\. Compute the new value. 

6\. Store the new value into *place*. 

Data and Control Flow **5–11**





|\<p\>**decf pop pushnew** \</p\>\<p\>**incf push remf**\</p\>|
| :- |


**Figure 5–9. Read-Modify-Write Macros** 







