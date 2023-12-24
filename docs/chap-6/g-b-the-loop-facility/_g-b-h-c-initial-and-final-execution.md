 



The initially and finally constructs evaluate forms that occur before and after the loop body. 



The initially construct causes the supplied *compound-forms* to be evaluated in the loop prologue, which precedes all loop code except for initial settings supplied by constructs with, for, or as. The code for any initially clauses is executed in the order in which the clauses appeared in the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. 



The finally construct causes the supplied *compound-forms* to be evaluated in the loop epilogue after normal iteration terminates. The code for any finally clauses is executed in the order in which the clauses appeared in the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. The collected code is executed once in the loop epilogue before any implicit values are returned from the accumulation clauses. An explicit transfer of control (*e.g.*, by <ClLinks styled={true} term={"return"}><b>return</b></ClLinks>, <ClLinks styled={true} term={"go"}><b>go</b></ClLinks>, or <ClLinks styled={true} term={"throw"}><b>throw</b></ClLinks>) from the loop body, however, will exit the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> without executing the epilogue code. 



Clauses such as return, always, never, and thereis can bypass the finally clause. <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> (or <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks>, if the named option was supplied) can be used after finally to return values from a <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. Such an *explicit return* inside the finally clause takes precedence over returning the accumulation from clauses supplied by such keywords as collect, nconc, append, sum, count, maximize, and minimize; the accumulation values for these preempted clauses are not returned by <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> if <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> or <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> is used. 







 



 



