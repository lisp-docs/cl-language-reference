 

Some *restarts* have functional interfaces, such as **abort**, **continue**, **muffle-warning**, **store-value**, and **use-value**. They are ordinary functions that use **find-restart** and **invoke-restart** internally, that have the same name as the *restarts* they manipulate, and that are provided simply for notational convenience. 

Figure 9–6 shows *defined names* relating to *restarts*. 

|&#60;p&#62;**abort invoke-restart-interactively store-value compute-restarts muffle-warning use-value** &#60;/p&#62;&#60;p&#62;**continue restart-bind with-simple-restart find-restart restart-case** &#60;/p&#62;&#60;p&#62;**invoke-restart restart-name**&#60;/p&#62;|
| :- |


**Figure 9–6. Defined names relating to restarts.** 

