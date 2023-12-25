 



When a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is signaled, the most recent applicable *active handler* is invoked. Sometimes a handler will decline by simply returning without a transfer of control. In such cases, the next most recent applicable active handler is invoked. 



If there are no applicable handlers for a <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> that has been signaled, or if all applicable handlers decline, the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> is unhandled. 



The functions <DictionaryLink styled={true} term={"cerror"}><b>cerror</b></DictionaryLink> and <DictionaryLink styled={true} term={"error"}><b>error</b></DictionaryLink> invoke the interactive <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> handler (the debugger) rather than return if the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> being signaled, regardless of its <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, is unhandled. In contrast, <DictionaryLink styled={true} term={"signal"}><b>signal</b></DictionaryLink> returns <DictionaryLink styled={true} term={"nil"}><b>nil</b></DictionaryLink> if the <GlossaryTerm styled={true} term={"condition"}><i>condition</i></GlossaryTerm> being signaled, regardless of its <GlossaryTerm styled={true} term={"type"}><i>type</i></GlossaryTerm>, is unhandled. 



The <GlossaryTerm styled={true} term={"variable"}><i>variable</i></GlossaryTerm> <DictionaryLink styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></DictionaryLink> can be used to cause the debugger to be entered before the signaling process begins. 



Figure 9–5 shows *defined names* relating to the *signaling* of <GlossaryTerm styled={true} term={"condition"}><i>conditions</i></GlossaryTerm>. 



|<p>**\*break-on-signals\* error warn** </p><p>**cerror signal**</p>|

| :- |





**Figure 9–5. Defined names relating to signaling conditions.** 







 



 



