**9.1.4.2.4 Associating a Restart with a Condition** 

A *restart* can be “associated with” a *condition* explicitly by **with-condition-restarts**, or implicitly by **restart-case**. Such an assocation has *dynamic extent*. 

A single *restart* may be associated with several *conditions* at the same time. A single *condition* may have several associated *restarts* at the same time. 

Active restarts associated with a particular *condition* can be detected by *calling* a *function* such as **find-restart**, supplying that *condition* as the *condition argument*. Active restarts can also be detected without regard to any associated *condition* by calling such a function without a *condition argument*, or by supplying a value of **nil** for such an *argument*. 

