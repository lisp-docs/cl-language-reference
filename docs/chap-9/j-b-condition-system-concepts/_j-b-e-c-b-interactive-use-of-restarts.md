 



For interactive handling, two pieces of information are needed from a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks>: a report function and an interactive function. 



The report function is used by a program such as the debugger to present a description of the action the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> will take. The report function is specified and established by the :report-function keyword to <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> or the :report keyword to <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks>. 



The interactive function, which can be specified using the :interactive-function keyword to <ClLinks styled={true} term={"restart-bind"}><b>restart-bind</b></ClLinks> or :interactive keyword to <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks>, is used when the <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is invoked interactively, such as from the debugger, to produce a suitable list of arguments. 



<ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks> invokes the most recently *established restart* whose name is the same as the first argument to <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks>. If a <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> is invoked interactively by the debugger and does not transfer control but rather returns values, the precise action of the debugger on those values is <ClLinks styled={true} term={"implementation-defined"}><i>implementation-defined</i></ClLinks>. 



