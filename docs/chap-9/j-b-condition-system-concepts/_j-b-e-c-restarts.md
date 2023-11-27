 

The interactive condition handler returns only through non-local transfer of control to specially defined *restarts* that can be set up either by the system or by user code. Transferring control to a restart is called “invoking” the restart. Like handlers, active *restarts* are *established* dynamically, and only active *restarts* can be invoked. An active *restart* can be invoked by the user from the debugger or by a program by using **invoke-restart**. 

A *restart* contains a *function* to be *called* when the *restart* is invoked, an optional name that can be used to find or invoke the *restart*, and an optional set of interaction information for the debugger to use to enable the user to manually invoke a *restart*. 

The name of a *restart* is used by **invoke-restart**. *Restarts* that can be invoked only within the debugger do not need names. 

*Restarts* can be established by using **restart-bind**, **restart-case**, and **with-simple-restart**. A *restart* function can itself invoke any other *restart* that was active at the time of establishment of the *restart* of which the *function* is part. 

The *restarts established* by a **restart-bind** *form*, a **restart-case** *form*, or a **with-simple-restart** *form* have *dynamic extent* which extends for the duration of that *form*’s execution. 

*Restarts* of the same name can be ordered from least recent to most recent according to the following two rules: 

1\. Each *restart* in a set of active restarts *R*&#60;sub&#62;1&#60;/sub&#62; is more recent than every *restart* in a set *R*&#60;sub&#62;2&#60;/sub&#62; if the *restarts* in *R*&#60;sub&#62;2&#60;/sub&#62; were active when the *restarts* in *R*&#60;sub&#62;1&#60;/sub&#62; were established. 

2\. Let *r*&#60;sub&#62;1&#60;/sub&#62; and *r*&#60;sub&#62;2&#60;/sub&#62; be two active *restarts* with the same name established by the same *form*. Then *r*&#60;sub&#62;1&#60;/sub&#62; is more recent than *r*&#60;sub&#62;2&#60;/sub&#62; if *r*&#60;sub&#62;1&#60;/sub&#62; was defined to the left of *r*&#60;sub&#62;2&#60;/sub&#62; in the *form* that established them. 



 

 

If a *restart* is invoked but does not transfer control, the values resulting from the *restart* function are returned by the function that invoked the restart, either **invoke-restart** or **invoke-restart-interactively**. 

