 



When a transfer of control is initiated by <ClLinks  term={"go"}><b>go</b></ClLinks>, <ClLinks  term={"return-from"}><b>return-from</b></ClLinks>, or <ClLinks  term={"throw"}><b>throw</b></ClLinks> the following events occur in order to accomplish the transfer of control. Note that for <ClLinks  term={"go"}><b>go</b></ClLinks>, the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> is the <ClLinks  term={"form"}><i>form</i></ClLinks> within the <ClLinks  term={"tagbody"}><b>tagbody</b></ClLinks> that is being executed at the time the <ClLinks  term={"go"}><b>go</b></ClLinks> is performed; for <ClLinks  term={"return-from"}><b>return-from</b></ClLinks>, the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> is the corresponding <ClLinks  term={"block"}><b>block</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>; and for <ClLinks  term={"throw"}><b>throw</b></ClLinks>, the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> is the corresponding <ClLinks  term={"catch"}><b>catch</b></ClLinks> <ClLinks  term={"form"}><i>form</i></ClLinks>. 



1\. Intervening <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> are “abandoned” (*i.e.*, their <ClLinks  term={"extent"}><i>extent</i></ClLinks> ends and it is no longer valid to attempt to transfer control through them). 



2\. The cleanup clauses of any intervening <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks> clauses are evaluated. 



3\. Intervening dynamic <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of <ClLinks  term={"special"}><b>special</b></ClLinks> variables, <GlossaryTerm styled={true} term={"catch tag"}><i>catch tags</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"condition handler"}><i>condition handlers</i></GlossaryTerm>, and <ClLinks  term={"restart"}><i>restarts</i></ClLinks> are undone. 



4\. The <ClLinks  term={"extent"}><i>extent</i></ClLinks> of the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> being invoked ends, and control is passed to the target. 



The extent of an exit being “abandoned” because it is being passed over ends as soon as the transfer of control is initiated. That is, event 1 occurs at the beginning of the initiation of the transfer of control. The consequences are undefined if an attempt is made to transfer control to an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> has ended. 



Events 2 and 3 are actually performed interleaved, in the order corresponding to the reverse order in which they were established. The effect of this is that the cleanup clauses of an <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks> see the same dynamic <ClLinks  term={"binding"}><i>bindings</i></ClLinks> of variables and <GlossaryTerm styled={true} term={"catch tag"}><i>catch tags</i></GlossaryTerm> as were visible when the <ClLinks  term={"unwind-protect"}><b>unwind-protect</b></ClLinks> was entered. 



Event 4 occurs at the end of the transfer of control. 



Data and Control 











