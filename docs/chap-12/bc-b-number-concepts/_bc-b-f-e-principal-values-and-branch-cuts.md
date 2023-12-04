 



Many of the irrational and transcendental functions are multiply defined in the complex domain; for example, there are in general an infinite number of complex values for the logarithm function. In each such case, a *principal value* must be chosen for the function to return. In general, such values cannot be chosen so as to make the range continuous; lines in the domain called branch cuts must be defined, which in turn define the discontinuities in the range. Common Lisp defines the branch cuts, *principal values*, and boundary conditions for the complex functions following “Principal Values and Branch Cuts in Complex APL.” The branch cut rules that apply to each function are located with the description of that function. 



Figure 12–9 lists the identities that are obeyed throughout the applicable portion of the complex domain, even on the branch cuts: 



|sin i z = i sinh z sinh i z = i sin z arctan i z = i arctanh z cos i z = cosh z cosh i z = cos z arcsinh i z = i arcsin z tan i z = i tanh z arcsin i z = i arcsinh z arctanh i z = i arctan z|

| :- |





**Figure 12–9. Trigonometric Identities for Complex Domain** 



The quadrant numbers referred to in the discussions of branch cuts are as illustrated in Figure 12–10. 



Positive 



Imaginary Axis 



<sup>..</sup>. 



<sub>II</sub><sup>..</sup>. I 



Negative Real Axis *· · · · · · · · · · · · · · · · · ·* Positive Real Axis 



<sub>III</sub><sup>..</sup>. IV 



<sup>..</sup>. 



Negative 



Imaginary Axis 



**Figure 12–10. Quadrant Numbering for Branch Cuts** 



