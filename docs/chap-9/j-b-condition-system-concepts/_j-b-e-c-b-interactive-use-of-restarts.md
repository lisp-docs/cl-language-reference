 

For interactive handling, two pieces of information are needed from a *restart*: a report function and an interactive function. 

The report function is used by a program such as the debugger to present a description of the action the *restart* will take. The report function is specified and established by the :report-function keyword to **restart-bind** or the :report keyword to **restart-case**. 

The interactive function, which can be specified using the :interactive-function keyword to **restart-bind** or :interactive keyword to **restart-case**, is used when the *restart* is invoked interactively, such as from the debugger, to produce a suitable list of arguments. 

**invoke-restart** invokes the most recently *established restart* whose name is the same as the first argument to **invoke-restart**. If a *restart* is invoked interactively by the debugger and does not transfer control but rather returns values, the precise action of the debugger on those values is *implementation-defined*. 

