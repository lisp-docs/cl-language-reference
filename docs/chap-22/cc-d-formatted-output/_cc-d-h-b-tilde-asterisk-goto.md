 



The next *arg* is ignored. ~*n*\* ignores the next *n* arguments. 



~:\* backs up in the list of arguments so that the argument last processed will be processed again. ~*n*:\* backs up *n* arguments. 



When within a ~\{ construct (see below), the ignoring (in either direction) is relative to the list of arguments being processed by the iteration. 







 



 



~*n*@\* goes to the *n*th *arg*, where 0 means the first one; *n* defaults to 0, so ~@\* goes back to the first *arg*. Directives after a ~*n*@\* will take arguments in sequence beginning with the one gone to. When within a ~\{ construct, the “goto” is relative to the list of arguments being processed by the iteration. 



