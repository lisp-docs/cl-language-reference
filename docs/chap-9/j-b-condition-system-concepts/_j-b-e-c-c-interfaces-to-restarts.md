 

Some *restarts* have functional interfaces, such as **abort**, **continue**, **muffle-warning**, **store-value**, and **use-value**. They are ordinary functions that use **find-restart** and **invoke-restart** internally, that have the same name as the *restarts* they manipulate, and that are provided simply for notational convenience. 

Figure 9–6 shows *defined names* relating to *restarts*. 

|\<p\>**abort invoke-restart-interactively store-value compute-restarts muffle-warning use-value** \</p\>\<p\>**continue restart-bind with-simple-restart find-restart restart-case** \</p\>\<p\>**invoke-restart restart-name**\</p\>|
| :- |


**Figure 9–6. Defined names relating to restarts.** 

