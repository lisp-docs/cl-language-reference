**9.1.4.2 Restarts** 

The interactive condition handler returns only through non-local transfer of control to specially defined *restarts* that can be set up either by the system or by user code. Transferring control to a restart is called “invoking” the restart. Like handlers, active *restarts* are *established* dynamically, and only active *restarts* can be invoked. An active *restart* can be invoked by the user from the debugger or by a program by using **invoke-restart**. 

A *restart* contains a *function* to be *called* when the *restart* is invoked, an optional name that can be used to find or invoke the *restart*, and an optional set of interaction information for the debugger to use to enable the user to manually invoke a *restart*. 

The name of a *restart* is used by **invoke-restart**. *Restarts* that can be invoked only within the debugger do not need names. 

*Restarts* can be established by using **restart-bind**, **restart-case**, and **with-simple-restart**. A *restart* function can itself invoke any other *restart* that was active at the time of establishment of the *restart* of which the *function* is part. 

The *restarts established* by a **restart-bind** *form*, a **restart-case** *form*, or a **with-simple-restart** *form* have *dynamic extent* which extends for the duration of that *form*’s execution. 

*Restarts* of the same name can be ordered from least recent to most recent according to the following two rules: 

1\. Each *restart* in a set of active restarts *R*\<sub\>1\</sub\> is more recent than every *restart* in a set *R*\<sub\>2\</sub\> if the *restarts* in *R*\<sub\>2\</sub\> were active when the *restarts* in *R*\<sub\>1\</sub\> were established. 

2\. Let *r*\<sub\>1\</sub\> and *r*\<sub\>2\</sub\> be two active *restarts* with the same name established by the same *form*. Then *r*\<sub\>1\</sub\> is more recent than *r*\<sub\>2\</sub\> if *r*\<sub\>1\</sub\> was defined to the left of *r*\<sub\>2\</sub\> in the *form* that established them. 



 

 

If a *restart* is invoked but does not transfer control, the values resulting from the *restart* function are returned by the function that invoked the restart, either **invoke-restart** or **invoke-restart-interactively**. 

