 



The function <ClLinks styled={true} term={"make-condition"}><b>make-condition</b></ClLinks> can be used to construct a *condition object* explicitly. Functions such as <ClLinks styled={true} term={"error"}><b>error</b></ClLinks>, <ClLinks styled={true} term={"cerror"}><b>cerror</b></ClLinks>, <ClLinks styled={true} term={"signal"}><b>signal</b></ClLinks>, and <ClLinks styled={true} term={"warn"}><b>warn</b></ClLinks> operate on <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> and might create *condition objects* implicitly. Macros such as <ClLinks styled={true} term={"ccase"}><b>ccase</b></ClLinks>, <ClLinks styled={true} term={"ctypecase"}><b>ctypecase</b></ClLinks>, <ClLinks styled={true} term={"ecase"}><b>ecase</b></ClLinks>, <ClLinks styled={true} term={"etypecase"}><b>etypecase</b></ClLinks>, <ClLinks styled={true} term={"check-type"}><b>check-type</b></ClLinks>, and <ClLinks styled={true} term={"assert"}><b>assert</b></ClLinks> might also implicitly create (and <ClLinks styled={true} term={"signal"}><i>signal</i></ClLinks>) <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks>. 



