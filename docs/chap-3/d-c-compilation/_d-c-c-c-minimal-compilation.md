 



*Minimal compilation* is defined as follows: 



*•* All *compiler macro* calls appearing in the *source code* being compiled are expanded, if at all, at compile time; they will not be expanded at run time. 



*•* All <ClLinks styled={true} term={"macro"}><i>macro</i></ClLinks> and *symbol macro* calls appearing in the source code being compiled are expanded at compile time in such a way that they will not be expanded again at run time. <ClLinks styled={true} term={"macrolet"}><b>macrolet</b></ClLinks> and <ClLinks styled={true} term={"symbol-macrolet"}><b>symbol-macrolet</b></ClLinks> are effectively replaced by <ClLinks styled={true} term={"form"}><i>forms</i></ClLinks> corresponding to their bodies in which calls to <ClLinks styled={true} term={"macro"}><i>macros</i></ClLinks> are replaced by their expansions. 



*•* The first <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks> in a <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> in *source code* processed by <ClLinks styled={true} term={"compile"}><b>compile</b></ClLinks> is *evaluated* at *compile time*; in *source code* processed by <ClLinks styled={true} term={"compile-file"}><b>compile-file</b></ClLinks>, the compiler arranges for it to be *evaluated* at *load time*. In either case, the result of the <ClLinks styled={true} term={"evaluation"}><i>evaluation</i></ClLinks> is remembered and used later as the value of the <ClLinks styled={true} term={"load-time-value"}><b>load-time-value</b></ClLinks> <ClLinks styled={true} term={"form"}><i>form</i></ClLinks> at *execution time*. 



