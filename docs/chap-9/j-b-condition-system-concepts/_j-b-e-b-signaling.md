**9.1.4.1 Signaling** 

When a *condition* is signaled, the most recent applicable *active handler* is invoked. Sometimes a handler will decline by simply returning without a transfer of control. In such cases, the next most recent applicable active handler is invoked. 

If there are no applicable handlers for a *condition* that has been signaled, or if all applicable handlers decline, the *condition* is unhandled. 

The functions **cerror** and **error** invoke the interactive *condition* handler (the debugger) rather than return if the *condition* being signaled, regardless of its *type*, is unhandled. In contrast, **signal** returns **nil** if the *condition* being signaled, regardless of its *type*, is unhandled. 

The *variable* **\*break-on-signals\*** can be used to cause the debugger to be entered before the signaling process begins. 

Figure 9–5 shows *defined names* relating to the *signaling* of *conditions*. 

|\<p\>**\*break-on-signals\* error warn** \</p\>\<p\>**cerror signal**\</p\>|
| :- |


**Figure 9–5. Defined names relating to signaling conditions.** 

Conditions **9–7**

 

 

