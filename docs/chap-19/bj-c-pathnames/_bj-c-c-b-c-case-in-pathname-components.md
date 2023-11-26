**19.2.2.1.2 Case in Pathname Components** 

*Namestrings* always use local file system *case* conventions, but Common Lisp *functions* that manipulate *pathname* components allow the caller to select either of two conventions for representing *case* in component values by supplying a value for the :case keyword argument. Figure 19–2 lists the functions relating to *pathnames* that permit a :case argument: 

|**make-pathname pathname-directory pathname-name pathname-device pathname-host pathname-type**|
| :- |


**Figure 19–2. Pathname functions using a :CASE argument** 

