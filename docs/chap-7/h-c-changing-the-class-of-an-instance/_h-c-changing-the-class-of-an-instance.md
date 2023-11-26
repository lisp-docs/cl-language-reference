 

The *function* **change-class** can be used to change the *class* of an *instance* from its current class, *C*\<sub\>from\</sub\>, to a different class, *C*\<sub\>to\</sub\>; it changes the structure of the *instance* to conform to the definition of the class *C*\<sub\>to\</sub\>. 

Note that changing the *class* of an *instance* may cause *slots* to be added or deleted. Changing the *class* of an *instance* does not change its identity as defined by the **eq** function. 

When **change-class** is invoked on an *instance*, a two-step updating process takes place. The first step modifies the structure of the *instance* by adding new *local slots* and discarding *local slots* that are not specified in the new version of the *instance*. The second step initializes the newly added *local slots* and performs any other user-defined actions. These two steps are further described in the two following sections. 

