 

Many *functions* that perform *file* operations accept either *open* or *closed streams* as *arguments*; see Section 21.1.3 (Stream Arguments to Standardized Functions). 

Of these, the *functions* in Figure 20–2 treat *open* and *closed streams* differently. 

|&#60;p&#62;**delete-file file-author probe-file** &#60;/p&#62;&#60;p&#62;**directory file-write-date truename**&#60;/p&#62;|
| :- |


**Figure 20–2. File Functions that Treat Open and Closed Streams Differently** 

Files **20–1**

 

 

Since treatment of *open streams* by the *file system* may vary considerably between *implementations*, however, a *closed stream* might be the most reliable kind of *argument* for some of these functions—in particular, those in Figure 20–3. For example, in some *file systems*, *open files* are written under temporary names and not renamed until *closed* and/or are held invisible until *closed*. In general, any code that is intended to be portable should use such *functions* carefully. 

|**directory probe-file truename**|
| :- |


**Figure 20–3. File Functions where Closed Streams Might Work Best** 

