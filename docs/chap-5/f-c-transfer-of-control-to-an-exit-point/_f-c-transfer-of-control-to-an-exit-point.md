 



When a transfer of control is initiated by <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>, <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, or <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks> the following events occur in order to accomplish the transfer of control. Note that for <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>, the *exit point* is the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> within the <ClLinks styled={true} term={"tagbody"}><b>tagbody</b></ClLinks> that is being executed at the time the <ClLinks styled={true} term={"go"}><b>go</b></ClLinks> is performed; for <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, the *exit point* is the corresponding <ClLinks styled={true} term={"block"}><b>block</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>; and for <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>, the *exit point* is the corresponding <ClLinks styled={true} term={"catch"}><b>catch</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. 



1\. Intervening *exit points* are “abandoned” (*i.e.*, their <ClLinks styled={true} term={"extent"}><i>extent</i></ClLinks> ends and it is no longer valid to attempt to transfer control through them). 



2\. The cleanup clauses of any intervening <ClLinks styled={true} term={"unwind-protect"}><b>unwind-protect</b></ClLinks> clauses are evaluated. 



3\. Intervening dynamic <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of <ClLinks styled={true} term={"special"}><b>special</b></ClLinks> variables, *catch tags*, *condition handlers*, and <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are undone. 



4\. The <ClLinks styled={true} term={"extent"}><i>extent</i></ClLinks> of the *exit point* being invoked ends, and control is passed to the target. 



The extent of an exit being “abandoned” because it is being passed over ends as soon as the transfer of control is initiated. That is, event 1 occurs at the beginning of the initiation of the transfer of control. The consequences are undefined if an attempt is made to transfer control to an *exit point* whose *dynamic extent* has ended. 



Events 2 and 3 are actually performed interleaved, in the order corresponding to the reverse order in which they were established. The effect of this is that the cleanup clauses of an <ClLinks styled={true} term={"unwind-protect"}><b>unwind-protect</b></ClLinks> see the same dynamic <ClLinks styled={true} term={"binding"}><i>bindings</i></ClLinks> of variables and *catch tags* as were visible when the <ClLinks styled={true} term={"unwind-protect"}><b>unwind-protect</b></ClLinks> was entered. 



Event 4 occurs at the end of the transfer of control. 



Data and Control 











