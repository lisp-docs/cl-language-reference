 



If a <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> consists solely of dots (with no escape characters), then an error of <ClLinks styled={true} term={"type"}><i>type</i></ClLinks> <ClLinks styled={true} term={"reader-error"}><b>reader-error</b></ClLinks> is signaled, except in one circumstance: if the <ClLinks styled={true} term={"token"}><i>token</i></ClLinks> is a single <ClLinks styled={true} term={"dot"}><i>dot</i></ClLinks> and appears in a situation where *dotted pair* notation permits a <ClLinks styled={true} term={"dot"}><i>dot</i></ClLinks>, then it is accepted as part of such syntax and no error is signaled. See Section 2.4.1 (Left-Parenthesis). 











