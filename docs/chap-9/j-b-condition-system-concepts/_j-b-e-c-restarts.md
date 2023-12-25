 



The interactive condition handler returns only through non-local transfer of control to specially defined <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> that can be set up either by the system or by user code. Transferring control to a restart is called “invoking” the restart. Like handlers, active <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> are *established* dynamically, and only active <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> can be invoked. An active <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> can be invoked by the user from the debugger or by a program by using <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>. 



A <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> contains a <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> to be *called* when the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is invoked, an optional name that can be used to find or invoke the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>, and an optional set of interaction information for the debugger to use to enable the user to manually invoke a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>. 



The name of a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is used by <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>. <GlossaryTerm styled={true} term={"restart"}><i>Restarts</i></GlossaryTerm> that can be invoked only within the debugger do not need names. 



<GlossaryTerm styled={true} term={"restart"}><i>Restarts</i></GlossaryTerm> can be established by using <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink>, <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>, and <DictionaryLink styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></DictionaryLink>. A <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> function can itself invoke any other <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> that was active at the time of establishment of the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> of which the <GlossaryTerm styled={true} term={"function"}><i>function</i></GlossaryTerm> is part. 



The *restarts established* by a <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, a <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>, or a <DictionaryLink styled={true} term={"with-simple-restart"}><b>with-simple-restart</b></DictionaryLink> <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> have *dynamic extent* which extends for the duration of that <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>’s execution. 



<GlossaryTerm styled={true} term={"restart"}><i>Restarts</i></GlossaryTerm> of the same name can be ordered from least recent to most recent according to the following two rules: 



1\. Each <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> in a set of active restarts *R*<sub>1</sub> is more recent than every <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> in a set *R*<sub>2</sub> if the <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> in *R*<sub>2</sub> were active when the <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> in *R*<sub>1</sub> were established. 



2\. Let *r*<sub>1</sub> and *r*<sub>2</sub> be two active <GlossaryTerm styled={true} term={"restart"}><i>restarts</i></GlossaryTerm> with the same name established by the same <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm>. Then *r*<sub>1</sub> is more recent than *r*<sub>2</sub> if *r*<sub>1</sub> was defined to the left of *r*<sub>2</sub> in the <GlossaryTerm styled={true} term={"form"}><i>form</i></GlossaryTerm> that established them. 







 



 



If a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is invoked but does not transfer control, the values resulting from the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> function are returned by the function that invoked the restart, either <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink> or <DictionaryLink styled={true} term={"invoke-restart-interactively"}><b>invoke-restart-interactively</b></DictionaryLink>. 



