 



Wildcard <ClLinks  term={"pathname"}><i>pathnames</i></ClLinks> can be used with <ClLinks  term={"directory"}><b>directory</b></ClLinks> but not with <ClLinks  term={"open"}><b>open</b></ClLinks>, and return true from <ClLinks  term={"wild-pathname-p"}><b>wild-pathname-p</b></ClLinks>. When examining wildcard components of a wildcard <ClLinks  term={"pathname"}><i>pathname</i></ClLinks>, conforming programs must be prepared to encounter any of the following additional values in any component or any element of a <ClLinks  term={"list"}><i>list</i></ClLinks> that is the directory component: 



*•* The <ClLinks  term={"symbol"}><i>symbol</i></ClLinks> :wild, which matches anything. 



*•* A <ClLinks  term={"string"}><i>string</i></ClLinks> containing <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> special wildcard <ClLinks  term={"character"}><i>characters</i></ClLinks>. 



*•* Any <ClLinks  term={"object"}><i>object</i></ClLinks>, representing an <ClLinks  term={"implementation-dependent"}><i>implementation-dependent</i></ClLinks> wildcard pattern. 







 



 



