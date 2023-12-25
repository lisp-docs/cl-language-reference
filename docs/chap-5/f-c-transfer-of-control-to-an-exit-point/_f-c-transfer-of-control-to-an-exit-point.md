 



When a transfer of control is initiated by <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>, <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>, or <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink> the following events occur in order to accomplish the transfer of control. Note that for <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink>, the *exit point* is the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> within the <DictionaryLink styled={true} term={"tagbody"}><b>tagbody</b></DictionaryLink> that is being executed at the time the <DictionaryLink styled={true} term={"go"}><b>go</b></DictionaryLink> is performed; for <DictionaryLink styled={true} term={"return-from"}><b>return-from</b></DictionaryLink>, the *exit point* is the corresponding <DictionaryLink styled={true} term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>; and for <DictionaryLink styled={true} term={"throw"}><b>throw</b></DictionaryLink>, the *exit point* is the corresponding <DictionaryLink styled={true} term={"catch"}><b>catch</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. 



1\. Intervening *exit points* are “abandoned” (*i.e.*, their <GlossaryTerm styled={true} term={"extent"}><i>extent</i></GlossaryTerm> ends and it is no longer valid to attempt to transfer control through them). 



2\. The cleanup clauses of any intervening <DictionaryLink styled={true} term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink> clauses are evaluated. 



3\. Intervening dynamic <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of <DictionaryLink styled={true} term={"special"}><b>special</b></DictionaryLink> variables, *catch tags*, *condition handlers*, and <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are undone. 



4\. The <GlossaryTerm styled={true} term={"extent"}><i>extent</i></GlossaryTerm> of the *exit point* being invoked ends, and control is passed to the target. 



The extent of an exit being “abandoned” because it is being passed over ends as soon as the transfer of control is initiated. That is, event 1 occurs at the beginning of the initiation of the transfer of control. The consequences are undefined if an attempt is made to transfer control to an *exit point* whose *dynamic extent* has ended. 



Events 2 and 3 are actually performed interleaved, in the order corresponding to the reverse order in which they were established. The effect of this is that the cleanup clauses of an <DictionaryLink styled={true} term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink> see the same dynamic <GlossaryTerm styled={true} term={"binding"}><i>bindings</i></GlossaryTerm> of variables and *catch tags* as were visible when the <DictionaryLink styled={true} term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink> was entered. 



Event 4 occurs at the end of the transfer of control. 



Data and Control 











