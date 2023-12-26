 



When a transfer of control is initiated by <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>, <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>, or <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink> the following events occur in order to accomplish the transfer of control. Note that for <DictionaryLink  term={"go"}><b>go</b></DictionaryLink>, the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> is the <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm> within the <DictionaryLink  term={"tagbody"}><b>tagbody</b></DictionaryLink> that is being executed at the time the <DictionaryLink  term={"go"}><b>go</b></DictionaryLink> is performed; for <DictionaryLink  term={"return-from"}><b>return-from</b></DictionaryLink>, the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> is the corresponding <DictionaryLink  term={"block"}><b>block</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>; and for <DictionaryLink  term={"throw"}><b>throw</b></DictionaryLink>, the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> is the corresponding <DictionaryLink  term={"catch"}><b>catch</b></DictionaryLink> <GlossaryTerm  term={"form"}><i>form</i></GlossaryTerm>. 



1\. Intervening <GlossaryTerm styled={true} term={"exit point"}><i>exit points</i></GlossaryTerm> are “abandoned” (*i.e.*, their <GlossaryTerm  term={"extent"}><i>extent</i></GlossaryTerm> ends and it is no longer valid to attempt to transfer control through them). 



2\. The cleanup clauses of any intervening <DictionaryLink  term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink> clauses are evaluated. 



3\. Intervening dynamic <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of <DictionaryLink  term={"special"}><b>special</b></DictionaryLink> variables, <GlossaryTerm styled={true} term={"catch tag"}><i>catch tags</i></GlossaryTerm>, <GlossaryTerm styled={true} term={"condition handler"}><i>condition handlers</i></GlossaryTerm>, and <GlossaryTerm  term={"restart"}><i>restarts</i></GlossaryTerm> are undone. 



4\. The <GlossaryTerm  term={"extent"}><i>extent</i></GlossaryTerm> of the <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> being invoked ends, and control is passed to the target. 



The extent of an exit being “abandoned” because it is being passed over ends as soon as the transfer of control is initiated. That is, event 1 occurs at the beginning of the initiation of the transfer of control. The consequences are undefined if an attempt is made to transfer control to an <GlossaryTerm styled={true} term={"exit point"}><i>exit point</i></GlossaryTerm> whose <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> has ended. 



Events 2 and 3 are actually performed interleaved, in the order corresponding to the reverse order in which they were established. The effect of this is that the cleanup clauses of an <DictionaryLink  term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink> see the same dynamic <GlossaryTerm  term={"binding"}><i>bindings</i></GlossaryTerm> of variables and <GlossaryTerm styled={true} term={"catch tag"}><i>catch tags</i></GlossaryTerm> as were visible when the <DictionaryLink  term={"unwind-protect"}><b>unwind-protect</b></DictionaryLink> was entered. 



Event 4 occurs at the end of the transfer of control. 



Data and Control 











