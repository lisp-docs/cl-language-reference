 



A <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> can be “associated with” a <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> explicitly by <ClLinks styled={true} term={"with-condition-restarts"}><b>with-condition-restarts</b></ClLinks>, or implicitly by <ClLinks styled={true} term={"restart-case"}><b>restart-case</b></ClLinks>. Such an assocation has <GlossaryTerm styled={true} term={"dynamic extent"}><i>dynamic extent</i></GlossaryTerm>. 



A single <ClLinks styled={true} term={"restart"}><i>restart</i></ClLinks> may be associated with several <ClLinks styled={true} term={"condition"}><i>conditions</i></ClLinks> at the same time. A single <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> may have several associated <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> at the same time. 



Active restarts associated with a particular <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> can be detected by *calling* a <ClLinks styled={true} term={"function"}><i>function</i></ClLinks> such as <ClLinks styled={true} term={"find-restart"}><b>find-restart</b></ClLinks>, supplying that <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> as the *condition argument*. Active restarts can also be detected without regard to any associated <ClLinks styled={true} term={"condition"}><i>condition</i></ClLinks> by calling such a function without a *condition argument*, or by supplying a value of <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks> for such an <ClLinks styled={true} term={"argument"}><i>argument</i></ClLinks>. 



