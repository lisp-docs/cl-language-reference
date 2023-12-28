 



For interactive handling, two pieces of information are needed from a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm>: a report function and an interactive function. 



The report function is used by a program such as the debugger to present a description of the action the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> will take. The report function is specified and established by the :report-function keyword to <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> or the :report keyword to <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>. 



The interactive function, which can be specified using the :interactive-function keyword to <DictionaryLink styled={true} term={"restart-bind"}><b>restart-bind</b></DictionaryLink> or :interactive keyword to <DictionaryLink styled={true} term={"restart-case"}><b>restart-case</b></DictionaryLink>, is used when the <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is invoked interactively, such as from the debugger, to produce a suitable list of arguments. 



<DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink> invokes the most recently *established restart* whose name is the same as the first argument to <DictionaryLink styled={true} term={"invoke-restart"}><b>invoke-restart</b></DictionaryLink>. If a <GlossaryTerm styled={true} term={"restart"}><i>restart</i></GlossaryTerm> is invoked interactively by the debugger and does not transfer control but rather returns values, the precise action of the debugger on those values is <GlossaryTerm styled={true} term={"implementation-defined"}><i>implementation-defined</i></GlossaryTerm>. 



