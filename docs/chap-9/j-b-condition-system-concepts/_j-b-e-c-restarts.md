 



The interactive condition handler returns only through non-local transfer of control to specially defined <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> that can be set up either by the system or by user code. Transferring control to a restart is called “invoking” the restart. Like handlers, active <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> are *established* dynamically, and only active <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> can be invoked. An active <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> can be invoked by the user from the debugger or by a program by using <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>. 



A <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> contains a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> to be *called* when the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is invoked, an optional name that can be used to find or invoke the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>, and an optional set of interaction information for the debugger to use to enable the user to manually invoke a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>. 



The name of a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is used by <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>. <ClLinks styled={true} term={"restart"}><i>Restarts</i></ClLinks> that can be invoked only within the debugger do not need names. 



<ClLinks styled={true} term={"restart"}><i>Restarts</i></ClLinks> can be established by using <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks>, <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks>, and <ClLinks styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></ClLinks>. A <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> function can itself invoke any other <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> that was active at the time of establishment of the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> of which the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> is part. 



The *restarts established* by a <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, a <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>, or a <ClLinks styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> have <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm> which extends for the duration of that <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>’s execution. 



<ClLinks styled={true} term={"restart"}><i>Restarts</i></ClLinks> of the same name can be ordered from least recent to most recent according to the following two rules: 



1\. Each <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> in a set of active restarts *R*<sub>1</sub> is more recent than every <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> in a set *R*<sub>2</sub> if the <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> in *R*<sub>2</sub> were active when the <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> in *R*<sub>1</sub> were established. 



2\. Let *r*<sub>1</sub> and *r*<sub>2</sub> be two active <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> with the same name established by the same <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Then *r*<sub>1</sub> is more recent than *r*<sub>2</sub> if *r*<sub>1</sub> was defined to the left of *r*<sub>2</sub> in the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> that established them. 







 



 



If a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is invoked but does not transfer control, the values resulting from the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> function are returned by the function that invoked the restart, either <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks> or <ClLinks styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></ClLinks>. 



