**3.4.4.1 Destructuring by Lambda Lists** 

Anywhere in a *macro lambda list* where a parameter name can appear, and where *ordinary lambda list* syntax (as described in Section 3.4.1 (Ordinary Lambda Lists)) does not otherwise allow a *list*, a *destructuring lambda list* can appear in place of the parameter name. When this is done, then  



the argument that would match the parameter is treated as a (possibly dotted) *list*, to be used as an argument list for satisfying the parameters in the embedded *lambda list*. This is known as destructuring. 

Destructuring is the process of decomposing a compound *object* into its component parts, using an abbreviated, declarative syntax, rather than writing it out by hand using the primitive component-accessing functions. Each component part is bound to a variable. 

A destructuring operation requires an *object* to be decomposed, a pattern that specifies what components are to be extracted, and the names of the variables whose values are to be the components. 

