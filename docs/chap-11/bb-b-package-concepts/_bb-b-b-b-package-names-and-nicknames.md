 



Each <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> has a <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> (a <ClLinks styled={true} term={"string"}><i>string</i></ClLinks>) and perhaps some <ClLinks styled={true} term={"nickname"}><i>nicknames</i></ClLinks> (also <ClLinks styled={true} term={"string"}><i>strings</i></ClLinks>). These are assigned when the <ClLinks styled={true} term={"package"}><i>package</i></ClLinks> is created and can be changed later. 



There is a single namespace for <ClLinks styled={true} term={"package"}><i>packages</i></ClLinks>. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"find-package"}><b>find-package</b></ClLinks> translates a package <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> or <ClLinks styled={true} term={"nickname"}><i>nickname</i></ClLinks> into the associated <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"package-name"}><b>package-name</b></ClLinks> returns the <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> of a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. The <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> <ClLinks styled={true} term={"package-nicknames"}><b>package-nicknames</b></ClLinks> returns a <ClLinks styled={true} term={"list"}><i>list</i></ClLinks> of all <ClLinks styled={true} term={"nickname"}><i>nicknames</i></ClLinks> for a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>. <ClLinks styled={true} term={"rename-package"}><b>rename-package</b></ClLinks> 



removes a <ClLinks styled={true} term={"package"}><i>package</i></ClLinks>’s current <ClLinks styled={true} term={"name"}><i>name</i></ClLinks> and <ClLinks styled={true} term={"nickname"}><i>nicknames</i></ClLinks> and replaces them with new ones specified by the caller. 



