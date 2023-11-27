 

The operation of the condition system depends on the ordering of active *applicable handlers* from most recent to least recent. 

Each *handler* is associated with a *type specifier* that must designate a *subtype* of *type* **condition**. A *handler* is said to be *applicable* to a *condition* if that *condition* is of the *type* designated by the associated *type specifier* . 

*Active handlers* are *established* by using **handler-bind** (or an abstraction based on **handler-bind**, such as **handler-case** or **ignore-errors**). 

*Active handlers* can be *established* within the dynamic scope of other *active handlers*. At any point during program execution, there is a set of *active handlers*. When a *condition* is signaled, the *most* 



 

 

*recent* active *applicable handler* for that *condition* is selected from this set. Given a *condition*, the order of recentness of active *applicable handlers* is defined by the following two rules: 

1\. Each handler in a set of active handlers *H*&#60;sub&#62;1&#60;/sub&#62; is more recent than every handler in a set *H*&#60;sub&#62;2&#60;/sub&#62; if the handlers in *H*&#60;sub&#62;2&#60;/sub&#62; were active when the handlers in *H*&#60;sub&#62;1&#60;/sub&#62; were established. 

2\. Let *h*&#60;sub&#62;1&#60;/sub&#62; and *h*&#60;sub&#62;2&#60;/sub&#62; be two applicable active handlers established by the same *form*. Then *h*&#60;sub&#62;1&#60;/sub&#62; is more recent than *h*&#60;sub&#62;2&#60;/sub&#62; if *h*&#60;sub&#62;1&#60;/sub&#62; was defined to the left of *h*&#60;sub&#62;2&#60;/sub&#62; in the *form* that established them. 

Once a handler in a handler binding *form* (such as **handler-bind** or **handler-case**) has been selected, all handlers in that *form* become inactive for the remainder of the signaling process. While the selected *handler* runs, no other *handler* established by that *form* is active. That is, if the *handler* declines, no other handler established by that *form* will be considered for possible invocation. 

Figure 9–4 shows *operators* relating to the *handling* of *conditions*. 

|**handler-bind handler-case ignore-errors**|
| :- |


**Figure 9–4. Operators relating to handling conditions.** 

