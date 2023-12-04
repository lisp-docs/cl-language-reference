 



A *class* that is a *direct instance* of **standard-class** can be redefined if the new *class* is also a *direct instance* of **standard-class**. Redefining a *class* modifies the existing *class object* to reflect the new *class* definition; it does not create a new *class object* for the *class*. Any *method object* created by a :reader, :writer, or :accessor option specified by the old **defclass** form is removed from the corresponding *generic function*. *Methods* specified by the new **defclass** form are added.  







When the class *C* is redefined, changes are propagated to its *instances* and to *instances* of any of its *subclasses*. Updating such an *instance* occurs at an *implementation-dependent* time, but no later than the next time a *slot* of that *instance* is read or written. Updating an *instance* does not change its identity as defined by the *function* **eq**. The updating process may change the *slots* of that particular *instance*, but it does not create a new *instance*. Whether updating an *instance* consumes storage is *implementation-dependent*. 



Note that redefining a *class* may cause *slots* to be added or deleted. If a *class* is redefined in a way that changes the set of *local slots accessible* in *instances*, the *instances* are updated. It is *implementation-dependent* whether *instances* are updated if a *class* is redefined in a way that does not change the set of *local slots accessible* in *instances*. 



The value of a *slot* that is specified as shared both in the old *class* and in the new *class* is retained. If such a *shared slot* was unbound in the old *class*, it is unbound in the new *class*. *Slots* that were local in the old *class* and that are shared in the new *class* are initialized. Newly added *shared slots* are initialized. 



Each newly added *shared slot* is set to the result of evaluating the *captured initialization form* for the *slot* that was specified in the **defclass** *form* for the new *class*. If there was no *initialization form*, the *slot* is unbound. 



If a *class* is redefined in such a way that the set of *local slots accessible* in an *instance* of the *class* is changed, a two-step process of updating the *instances* of the *class* takes place. The process may be explicitly started by invoking the generic function **make-instances-obsolete**. This two-step process can happen in other circumstances in some implementations. For example, in some implementations this two-step process is triggered if the order of *slots* in storage is changed. 



The first step modifies the structure of the *instance* by adding new *local slots* and discarding *local slots* that are not defined in the new version of the *class*. The second step initializes the newly-added *local slots* and performs any other user-defined actions. These two steps are further specified in the next two sections. 



