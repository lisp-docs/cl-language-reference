 



When a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is signaled, the most recent applicable *active handler* is invoked. Sometimes a handler will decline by simply returning without a transfer of control. In such cases, the next most recent applicable active handler is invoked. 



If there are no applicable handlers for a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> that has been signaled, or if all applicable handlers decline, the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> is unhandled. 



The functions <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks> and <ClLinks styled={true} term={"error"}><b>error</b></ClLinks> invoke the interactive <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> handler (the debugger) rather than return if the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> being signaled, regardless of its <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, is unhandled. In contrast, <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks> returns <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> if the <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> being signaled, regardless of its <ClLinks styled={true} term={"type"}><i>type</i></ClLinks>, is unhandled. 



The <ClLinks styled={true} term={"variable"}><i>variable</i></ClLinks> <ClLinks styled={true} term={"break-on-signals"}><b>\*break-on-signals\*</b></ClLinks> can be used to cause the debugger to be entered before the signaling process begins. 



Figure 9–5 shows *defined names* relating to the *signaling* of <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks>. 



|<p>**\*break-on-signals\* error warn** </p><p>**cerror signal**</p>|

| :- |





**Figure 9–5. Defined names relating to signaling conditions.** 







 



 



