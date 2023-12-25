"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[19473],{56558:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>q,contentTitle:()=>A,default:()=>T,frontMatter:()=>L,metadata:()=>I,toc:()=>M});var t=r(85893),i=r(11151);function s(e){return(0,t.jsx)(t.Fragment,{})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s()}function c(e){return(0,t.jsx)(t.Fragment,{})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c()}function d(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(r,{styled:!0,term:"call",children:(0,t.jsx)("i",{children:"call"})})," is a ",(0,t.jsx)(n.em,{children:"safe call"})," if each of the following is either ",(0,t.jsx)(n.em,{children:"safe code"})," or ",(0,t.jsx)(n.em,{children:"system code"})," (other than ",(0,t.jsx)(n.em,{children:"system code"})," that results from ",(0,t.jsx)(n.em,{children:"macro expansion"})," of ",(0,t.jsx)(n.em,{children:"programmer code"}),"):"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," the ",(0,t.jsx)(r,{styled:!0,term:"call",children:(0,t.jsx)("i",{children:"call"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," the definition of the ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," being ",(0,t.jsx)(n.em,{children:"called"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," the point of ",(0,t.jsx)(n.em,{children:"functional evaluation"})]}),"\n",(0,t.jsx)(n.p,{children:"The following special cases require some elaboration:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," If the ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," being called is a ",(0,t.jsx)(n.em,{children:"generic function"}),", it is considered ",(0,t.jsx)(r,{styled:!0,term:"safe",children:(0,t.jsx)("i",{children:"safe"})})," if all of the following are ",(0,t.jsx)(n.em,{children:"safe code"})," or ",(0,t.jsx)(n.em,{children:"system code"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"\u2013 its definition (if it was defined explicitly)."}),"\n",(0,t.jsxs)(n.p,{children:["\u2013 the ",(0,t.jsx)(r,{styled:!0,term:"method",children:(0,t.jsx)("i",{children:"method"})})," definitions for all ",(0,t.jsx)(n.em,{children:"applicable methods"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2013 the definition of its ",(0,t.jsx)(n.em,{children:"method combination"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," For the form (coerce ",(0,t.jsx)(n.em,{children:"x"})," \u2019function), where ",(0,t.jsx)(n.em,{children:"x"})," is a ",(0,t.jsx)(n.em,{children:"lambda expression"}),", the value of the ",(0,t.jsx)(n.em,{children:"optimize quality"})," ",(0,t.jsx)(n.strong,{children:"safety"})," in the global environment at the time the ",(0,t.jsx)(r,{styled:!0,term:"coerce",children:(0,t.jsx)("b",{children:"coerce"})})," is ",(0,t.jsx)(n.em,{children:"executed"})," applies to the resulting ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," For a call to the ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," ",(0,t.jsx)(r,{styled:!0,term:"ensure-generic-function",children:(0,t.jsx)("b",{children:"ensure-generic-function"})}),", the value of the ",(0,t.jsx)(n.em,{children:"optimize quality"})," ",(0,t.jsx)(n.strong,{children:"safety"})," in the ",(0,t.jsx)(n.em,{children:"environment object"})," passed as the ",":environment"," ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"argument"})})," applies to the resulting ",(0,t.jsx)(n.em,{children:"generic function"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," For a call to ",(0,t.jsx)(r,{styled:!0,term:"compile",children:(0,t.jsx)("b",{children:"compile"})})," with a ",(0,t.jsx)(n.em,{children:"lambda expression"})," as the ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"argument"})}),", the value of the ",(0,t.jsx)(n.em,{children:"optimize quality"})," ",(0,t.jsx)(n.strong,{children:"safety"})," in the ",(0,t.jsx)(n.em,{children:"global environment"})," at the time ",(0,t.jsx)(r,{styled:!0,term:"compile",children:(0,t.jsx)("b",{children:"compile"})})," is ",(0,t.jsx)(n.em,{children:"called"})," applies to the resulting ",(0,t.jsx)(n.em,{children:"compiled function"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," For a call to ",(0,t.jsx)(r,{styled:!0,term:"compile",children:(0,t.jsx)("b",{children:"compile"})})," with only one argument, if the original definition of the ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," was ",(0,t.jsx)(r,{styled:!0,term:"safe",children:(0,t.jsx)("i",{children:"safe"})}),", then the resulting ",(0,t.jsx)(n.em,{children:"compiled function"})," must also be ",(0,t.jsx)(r,{styled:!0,term:"safe",children:(0,t.jsx)("i",{children:"safe"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u2022"})," A ",(0,t.jsx)(r,{styled:!0,term:"call",children:(0,t.jsx)("i",{children:"call"})})," to a ",(0,t.jsx)(r,{styled:!0,term:"method",children:(0,t.jsx)("i",{children:"method"})})," by ",(0,t.jsx)(r,{styled:!0,term:"call-next-method",children:(0,t.jsx)("b",{children:"call-next-method"})})," must be considered ",(0,t.jsx)(r,{styled:!0,term:"safe",children:(0,t.jsx)("i",{children:"safe"})})," if each of the following is ",(0,t.jsx)(n.em,{children:"safe code"})," or ",(0,t.jsx)(n.em,{children:"system code"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["\u2013 the definition of the ",(0,t.jsx)(n.em,{children:"generic function"})," (if it was defined explicitly)."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2013 the ",(0,t.jsx)(r,{styled:!0,term:"method",children:(0,t.jsx)("i",{children:"method"})})," definitions for all ",(0,t.jsx)(n.em,{children:"applicable methods"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2013 the definition of the ",(0,t.jsx)(n.em,{children:"method combination"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2013 the point of entry into the body of the ",(0,t.jsx)(n.em,{children:"method defining form"}),", where the ",(0,t.jsx)(r,{styled:!0,term:"binding",children:(0,t.jsx)("i",{children:"binding"})})," of ",(0,t.jsx)(r,{styled:!0,term:"call-next-method",children:(0,t.jsx)("b",{children:"call-next-method"})})," is established."]}),"\n",(0,t.jsxs)(n.p,{children:["\u2013 the point of ",(0,t.jsx)(n.em,{children:"functional evaluation"})," of the name ",(0,t.jsx)(r,{styled:!0,term:"call-next-method",children:(0,t.jsx)("b",{children:"call-next-method"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.em,{children:"unsafe call"})," is a ",(0,t.jsx)(r,{styled:!0,term:"call",children:(0,t.jsx)("i",{children:"call"})})," that is not a ",(0,t.jsx)(n.em,{children:"safe call"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The informal intent is that the ",(0,t.jsx)(r,{styled:!0,term:"programmer",children:(0,t.jsx)("i",{children:"programmer"})})," can rely on a ",(0,t.jsx)(r,{styled:!0,term:"call",children:(0,t.jsx)("i",{children:"call"})})," to be ",(0,t.jsx)(r,{styled:!0,term:"safe",children:(0,t.jsx)("i",{children:"safe"})}),", even when ",(0,t.jsx)(n.em,{children:"system code"})," is involved, if all reasonable steps have been taken to ensure that the ",(0,t.jsx)(r,{styled:!0,term:"call",children:(0,t.jsx)("i",{children:"call"})})," is ",(0,t.jsx)(r,{styled:!0,term:"safe",children:(0,t.jsx)("i",{children:"safe"})}),". For example, if a ",(0,t.jsx)(r,{styled:!0,term:"programmer",children:(0,t.jsx)("i",{children:"programmer"})})," calls ",(0,t.jsx)(r,{styled:!0,term:"mapcar",children:(0,t.jsx)("b",{children:"mapcar"})})," from ",(0,t.jsx)(n.em,{children:"safe code"})," and supplies a ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," that was ",(0,t.jsx)(n.em,{children:"compiled"})," as ",(0,t.jsx)(r,{styled:!0,term:"safe",children:(0,t.jsx)("i",{children:"safe"})}),", the ",(0,t.jsx)(r,{styled:!0,term:"implementation",children:(0,t.jsx)("i",{children:"implementation"})})," is required to ensure that ",(0,t.jsx)(r,{styled:!0,term:"mapcar",children:(0,t.jsx)("b",{children:"mapcar"})})," makes a ",(0,t.jsx)(n.em,{children:"safe call"})," as well."]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function h(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(n.p,{children:["If an error is signaled in a ",(0,t.jsx)(n.em,{children:"safe call"}),", the exact point of the ",(0,t.jsx)(r,{styled:!0,term:"signal",children:(0,t.jsx)("i",{children:"signal"})})," is ",(0,t.jsx)(r,{styled:!0,term:"implementation-dependent",children:(0,t.jsx)("i",{children:"implementation-dependent"})}),". In particular, it might be signaled at compile time or at run time, and if signaled at run time, it might be prior to, during, or after ",(0,t.jsx)(n.em,{children:"executing"})," the ",(0,t.jsx)(r,{styled:!0,term:"call",children:(0,t.jsx)("i",{children:"call"})}),". However, it is always prior to the execution of the body of the ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," being ",(0,t.jsx)(n.em,{children:"called"}),"."]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}function x(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["It is not permitted to supply too few ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"arguments"})})," to a ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})}),". Too few arguments means fewer ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"arguments"})})," than the number of ",(0,t.jsx)(n.em,{children:"required parameters"})," for the ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If this ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," occurs in a ",(0,t.jsx)(n.em,{children:"safe call"}),", an error of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"program-error",children:(0,t.jsx)("b",{children:"program-error"})})," must be signaled; and in an ",(0,t.jsx)(n.em,{children:"unsafe call"})," the ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," has undefined consequences."]})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}function u(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["It is not permitted to supply too many ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"arguments"})})," to a ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})}),". Too many arguments means more ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"arguments"})})," than the number of ",(0,t.jsx)(n.em,{children:"required parameters"})," plus the number of ",(0,t.jsx)(n.em,{children:"optional parameters"}),"; however, if the ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," uses ",(0,t.jsx)(n.strong,{children:"&rest"})," or ",(0,t.jsx)(n.strong,{children:"&key"}),", it is not possible for it to receive too many arguments."]}),"\n",(0,t.jsxs)(n.p,{children:["If this ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," occurs in a ",(0,t.jsx)(n.em,{children:"safe call"}),", an error of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"program-error",children:(0,t.jsx)("b",{children:"program-error"})})," must be signaled; and in an ",(0,t.jsx)(n.em,{children:"unsafe call"})," the ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," has undefined consequences."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function f(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["It is not permitted to supply a keyword argument to a ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," using a name that is not recognized by that ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," unless keyword argument checking is suppressed as described in Section 3.4.1.4.1 (Suppressing Keyword Argument Checking)."]}),"\n",(0,t.jsxs)(n.p,{children:["If this ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," occurs in a ",(0,t.jsx)(n.em,{children:"safe call"}),", an error of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"program-error",children:(0,t.jsx)("b",{children:"program-error"})})," must be signaled; and in an ",(0,t.jsx)(n.em,{children:"unsafe call"})," the ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," has undefined consequences."]})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}function y(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["It is not permitted to supply a keyword argument to a ",(0,t.jsx)(r,{styled:!0,term:"function",children:(0,t.jsx)("i",{children:"function"})})," using a name that is not a ",(0,t.jsx)(r,{styled:!0,term:"symbol",children:(0,t.jsx)("i",{children:"symbol"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If this ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," occurs in a ",(0,t.jsx)(n.em,{children:"safe call"}),", an error of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"program-error",children:(0,t.jsx)("b",{children:"program-error"})})," must be signaled unless keyword argument checking is suppressed as described in Section 3.4.1.4.1 (Suppressing Keyword Argument Checking); and in an ",(0,t.jsx)(n.em,{children:"unsafe call"})," the ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," has undefined consequences."]})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}function w(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["An odd number of ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"arguments"})})," must not be supplied for the ",(0,t.jsx)(n.em,{children:"keyword parameters"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If this ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," occurs in a ",(0,t.jsx)(n.em,{children:"safe call"}),", an error of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"program-error",children:(0,t.jsx)("b",{children:"program-error"})})," must be signaled unless keyword argument checking is suppressed as described in Section 3.4.1.4.1 (Suppressing Keyword Argument Checking); and in an ",(0,t.jsx)(n.em,{children:"unsafe call"})," the ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," has undefined consequences."]})]})}function k(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(w,{...e})}):w(e)}function v(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["When matching a ",(0,t.jsx)(n.em,{children:"destructuring lambda list"})," against a ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})}),", the pattern and the ",(0,t.jsx)(r,{styled:!0,term:"form",children:(0,t.jsx)("i",{children:"form"})})," must have compatible ",(0,t.jsx)(n.em,{children:"tree structure"}),", as described in Section 3.4.4 (Macro Lambda Lists)."]}),"\n",(0,t.jsxs)(n.p,{children:["Otherwise, in a ",(0,t.jsx)(n.em,{children:"safe call"}),", an error of ",(0,t.jsx)(r,{styled:!0,term:"type",children:(0,t.jsx)("i",{children:"type"})})," ",(0,t.jsx)(r,{styled:!0,term:"program-error",children:(0,t.jsx)("b",{children:"program-error"})})," must be signaled; and in an ",(0,t.jsx)(n.em,{children:"unsafe call"})," the ",(0,t.jsx)(r,{styled:!0,term:"situation",children:(0,t.jsx)("i",{children:"situation"})})," has undefined consequences."]})]})}function C(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}function E(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components},{ClLinks:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(r,{styled:!0,term:"call-next-method",children:(0,t.jsx)("b",{children:"call-next-method"})})," is called with ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"arguments"})}),", the ordered set of ",(0,t.jsx)(n.em,{children:"applicable methods"})," for the changed set of ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"arguments"})})," for ",(0,t.jsx)(r,{styled:!0,term:"call-next-method",children:(0,t.jsx)("b",{children:"call-next-method"})})," must be the same as the ordered set of ",(0,t.jsx)(n.em,{children:"applicable methods"})," for the original ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"arguments"})})," to the ",(0,t.jsx)(n.em,{children:"generic function"}),", or else an error should be signaled."]}),"\n",(0,t.jsx)(n.p,{children:"The comparison between the set of methods applicable to the new arguments and the set applicable to the original arguments is insensitive to order differences among methods with the same specializers."}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(r,{styled:!0,term:"call-next-method",children:(0,t.jsx)("b",{children:"call-next-method"})})," is called with ",(0,t.jsx)(r,{styled:!0,term:"argument",children:(0,t.jsx)("i",{children:"arguments"})})," that specify a different ordered set of ",(0,t.jsx)(r,{styled:!0,term:"applicable",children:(0,t.jsx)("i",{children:"applicable"})})," methods and there is no ",(0,t.jsx)(n.em,{children:"next method"})," available, the test for different methods and the associated error signaling (when present) takes precedence over calling ",(0,t.jsx)(r,{styled:!0,term:"no-next-method",children:(0,t.jsx)("b",{children:"no-next-method"})}),"."]})]})}function F(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(E,{...e})}):E(e)}const L={title:"3.5 Error Checking in Function Calls"},A="3.5 Error Checking in Function Calls",I={id:"chap-3/d-f-error-checking-in-function-calls",title:"3.5 Error Checking in Function Calls",description:"3.5.1 Argument Mismatch Detection",source:"@site/docs/chap-3/d-f-error-checking-in-function-calls.md",sourceDirName:"chap-3",slug:"/chap-3/d-f-error-checking-in-function-calls",permalink:"/cl-language-reference/chap-3/d-f-error-checking-in-function-calls",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-3/d-f-error-checking-in-function-calls.md",tags:[],version:"current",frontMatter:{title:"3.5 Error Checking in Function Calls"},sidebar:"tutorialSidebar",previous:{title:"3.4 Lambda Lists",permalink:"/cl-language-reference/chap-3/d-e-lambda-lists"},next:{title:"3.6 Traversal Rules and Side Effects",permalink:"/cl-language-reference/chap-3/d-g-traversal-rules-and-side-effects"}},q={},M=[{value:"3.5.1 Argument Mismatch Detection",id:"351-argument-mismatch-detection",level:2},{value:"3.5.1.1 Safe and Unsafe Calls",id:"3511-safe-and-unsafe-calls",level:3},{value:"3.5.1.1.1 Error Detection Time in Safe Calls",id:"35111-error-detection-time-in-safe-calls",level:4},{value:"3.5.1.2 Too Few Arguments",id:"3512-too-few-arguments",level:3},{value:"3.5.1.3 Too Many Arguments",id:"3513-too-many-arguments",level:3},{value:"3.5.1.4 Unrecognized Keyword Arguments",id:"3514-unrecognized-keyword-arguments",level:3},{value:"3.5.1.5 Invalid Keyword Arguments",id:"3515-invalid-keyword-arguments",level:3},{value:"3.5.1.6 Odd Number of Keyword Arguments",id:"3516-odd-number-of-keyword-arguments",level:3},{value:"3.5.1.7 Destructuring Mismatch",id:"3517-destructuring-mismatch",level:3},{value:"3.5.1.8 Errors When Calling a Next Method",id:"3518-errors-when-calling-a-next-method",level:3}];function S(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"35-error-checking-in-function-calls",children:"3.5 Error Checking in Function Calls"}),"\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"351-argument-mismatch-detection",children:"3.5.1 Argument Mismatch Detection"}),"\n","\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(n.h3,{id:"3511-safe-and-unsafe-calls",children:"3.5.1.1 Safe and Unsafe Calls"}),"\n","\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(n.h4,{id:"35111-error-detection-time-in-safe-calls",children:"3.5.1.1.1 Error Detection Time in Safe Calls"}),"\n","\n",(0,t.jsx)(m,{}),"\n",(0,t.jsx)(n.h3,{id:"3512-too-few-arguments",children:"3.5.1.2 Too Few Arguments"}),"\n","\n",(0,t.jsx)(j,{}),"\n",(0,t.jsx)(n.h3,{id:"3513-too-many-arguments",children:"3.5.1.3 Too Many Arguments"}),"\n","\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(n.h3,{id:"3514-unrecognized-keyword-arguments",children:"3.5.1.4 Unrecognized Keyword Arguments"}),"\n","\n",(0,t.jsx)(g,{}),"\n",(0,t.jsx)(n.h3,{id:"3515-invalid-keyword-arguments",children:"3.5.1.5 Invalid Keyword Arguments"}),"\n","\n",(0,t.jsx)(b,{}),"\n",(0,t.jsx)(n.h3,{id:"3516-odd-number-of-keyword-arguments",children:"3.5.1.6 Odd Number of Keyword Arguments"}),"\n","\n",(0,t.jsx)(k,{}),"\n",(0,t.jsx)(n.h3,{id:"3517-destructuring-mismatch",children:"3.5.1.7 Destructuring Mismatch"}),"\n","\n",(0,t.jsx)(C,{}),"\n",(0,t.jsx)(n.h3,{id:"3518-errors-when-calling-a-next-method",children:"3.5.1.8 Errors When Calling a Next Method"}),"\n","\n","\n",(0,t.jsx)(F,{})]})}function T(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(S,{...e})}):S(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var t=r(67294);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);