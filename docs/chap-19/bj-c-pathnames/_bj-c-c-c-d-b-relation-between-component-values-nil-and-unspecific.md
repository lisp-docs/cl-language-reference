 



If a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> is converted to a <ClLinks  term={"namestring"}><i>namestring</i></ClLinks>, the <ClLinks  term={"symbol"}><i>symbols</i></ClLinks> <ClLinks  term={"nil"}><b>nil</b></ClLinks> and :unspecific cause the field to be treated as if it were empty. That is, both <ClLinks  term={"nil"}><b>nil</b></ClLinks> and :unspecific cause the component not to appear in the <ClLinks  term={"namestring"}><i>namestring</i></ClLinks>. 



However, when merging a <ClLinks  term={"pathname"}><i>pathname</i></ClLinks> with a set of defaults, only a <ClLinks  term={"nil"}><b>nil</b></ClLinks> value for a component will be replaced with the default for that component, while a value of :unspecific will be left alone as if the field were “filled”; see the <ClLinks  term={"function"}><i>function</i></ClLinks> <ClLinks  term={"merge-pathnames"}><b>merge-pathnames</b></ClLinks> and Section 19.2.3 (Merging Pathnames). 



