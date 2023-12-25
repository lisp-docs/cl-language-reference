 



Some <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> have functional interfaces, such as **abort**, **continue**, **muffle-warning**, **store-value**, and **use-value**. They are ordinary functions that use <ClLinks styled={true} term={"find-restart"}><b>find-restart</b></ClLinks> and <ClLinks styled={true} term={"invoke-restart"}><b>invoke-restart</b></ClLinks> internally, that have the same name as the <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks> they manipulate, and that are provided simply for notational convenience. 



Figure 9–6 shows *defined names* relating to <ClLinks styled={true} term={"restart"}><i>restarts</i></ClLinks>. 



|<p>**abort invoke-restart-interactively store-value compute-restarts muffle-warning use-value** </p><p>**continue restart-bind with-simple-restart find-restart restart-case** </p><p>**invoke-restart restart-name**</p>|

| :- |





**Figure 9–6. Defined names relating to restarts.** 



