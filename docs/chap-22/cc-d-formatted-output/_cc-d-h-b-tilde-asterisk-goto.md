 



The next *arg* is ignored. &#126;*n*\* ignores the next *n* arguments. 



&#126;:\* backs up in the list of arguments so that the argument last processed will be processed again. &#126;*n*:\* backs up *n* arguments. 



When within a &#126;\{ construct (see below), the ignoring (in either direction) is relative to the list of arguments being processed by the iteration. 







 



 



&#126;*n*@\* goes to the *n*th *arg*, where 0 means the first one; *n* defaults to 0, so &#126;@\* goes back to the first *arg*. Directives after a &#126;*n*@\* will take arguments in sequence beginning with the one gone to. When within a &#126;\{ construct, the “goto” is relative to the list of arguments being processed by the iteration. 



