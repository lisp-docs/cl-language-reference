 



A *deftype lambda list* is used by <ClLinks styled={true} term={"deftype"}><b>deftype</b></ClLinks>. 



A *deftype lambda list* has the same syntax as a *macro lambda list*, and can therefore contain the *lambda list keywords* as a *macro lambda list*. 



A *deftype lambda list* differs from a *macro lambda list* only in that if no *init-form* is supplied for an *optional parameter* or *keyword parameter* in the *lambda-list*, the default <ClLinks styled={true} term={"value"}><i>value</i></ClLinks> for that <ClLinks styled={true} term={"parameter"}><i>parameter</i></ClLinks> is the <ClLinks styled={true} term={"symbol"}><i>symbol</i></ClLinks> **\*** (rather than <ClLinks styled={true} term={"nil"}><b>nil</b></ClLinks>).  







