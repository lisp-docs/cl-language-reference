 



If a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> is converted to a <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks>, the <ClLinks styled={true} term={"symbol"}><i>symbols</i></ClLinks> <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and :unspecific cause the field to be treated as if it were empty. That is, both <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> and :unspecific cause the component not to appear in the <ClLinks styled={true} term={"namestring"}><i>namestring</i></ClLinks>. 



However, when merging a <ClLinks styled={true} term={"pathname"}><i>pathname</i></ClLinks> with a set of defaults, only a <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> value for a component will be replaced with the default for that component, while a value of :unspecific will be left alone as if the field were “filled”; see the <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> and Section 19.2.3 (Merging Pathnames). 



