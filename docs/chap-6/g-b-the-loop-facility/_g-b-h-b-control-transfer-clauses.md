 



The named construct establishes a name for an *implicit block* surrounding the entire <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> so that the <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> *special operator* can be used to return values from or to exit <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks>. Only one name per <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> can be assigned. If used, the named construct must be the first clause in the loop expression. 



The return construct takes one <ClLinks styled={true} term={"form"}><i>form</i></ClLinks>. Any <ClLinks styled={true} term={"value"}><i>values</i></ClLinks> returned by the <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> are immediately returned by the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> form. This construct is similar to the <ClLinks styled={true} term={"return-from"}><b>return-from</b></ClLinks> *special operator* and the <ClLinks styled={true} term={"return"}><b>return</b></ClLinks> <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks>. The return construct does not execute any finally clause that the <ClLinks styled={true} term={"loop"}><b>loop</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> is given. 



