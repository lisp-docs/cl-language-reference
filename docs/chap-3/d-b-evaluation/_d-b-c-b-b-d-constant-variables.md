 



Certain variables, called *constant variables*, are reserved as “named constants.” The consequences are undefined if an attempt is made to assign a value to, or create a <ClLinks  term={"binding"}><i>binding</i></ClLinks> for a *constant variable*, except that a ‘compatible’ redefinition of a *constant variable* using <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> is permitted; see the <ClLinks  term={"macro"}><i>macro</i></ClLinks> <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks>. 



<ClLinks  term={"keyword"}><i>Keywords</i></ClLinks>, <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> defined by Common Lisp or the <ClLinks  term={"implementation"}><i>implementation</i></ClLinks> as constant (such as <ClLinks  term={"nil"}><b>nil</b></ClLinks>, <ClLinks  term={"t"}><b>t</b></ClLinks>, and **pi**), and <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> declared as constant using <ClLinks  term={"defconstant"}><b>defconstant</b></ClLinks> are *constant variables*. 



