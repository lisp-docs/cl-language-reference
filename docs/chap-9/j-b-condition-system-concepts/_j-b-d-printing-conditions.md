 



If the :report argument to <DictionaryLink styled={true} term={"define-condition"}><b>define-condition</b></DictionaryLink> is used, a print function is defined that is called whenever the defined <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is printed while the <GlossaryTerm styled={true} term={"value"}><i>value</i></GlossaryTerm> of <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>. This function is called the *condition reporter*; the text which it outputs is called a *report message*. 



When a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is printed and <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"false"}><i>false</i></GlossaryTerm>, the *condition reporter* for the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is invoked. <GlossaryTerm styled={true} term={"condition"}><i>Conditions</i></GlossaryTerm> are printed automatically by functions such as <DictionaryLink styled={true} term={"invoke-debugger"}><b>invoke-debugger</b></DictionaryLink>, <DictionaryLink styled={true} term={"break"}><b>break</b></DictionaryLink>, and <DictionaryLink styled={true} term={"warn"}><b>warn</b></DictionaryLink>. 



When <DictionaryLink styled={true} term={"print-escape"}><b>\*print-escape\*</b></DictionaryLink> is <GlossaryTerm styled={true} term={"true"}><i>true</i></GlossaryTerm>, the <GlossaryTerm styled={true} term={"object"}><i>object</i></GlossaryTerm> should print in an abbreviated fashion according to the style of the implementation (*e.g.*, by <DictionaryLink styled={true} term={"print-unreadable-object"}><b>print-unreadable-object</b></DictionaryLink>). It is not required that a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> can be recreated by reading its printed representation. 



No <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is provided for directly *accessing* or invoking *condition reporters*. 







 



 



