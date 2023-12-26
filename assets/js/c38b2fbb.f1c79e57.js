"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[21106],{22039:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>a,toc:()=>m});var r=i(85893),c=i(11151);function t(e){const n={em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components},{DictionaryLink:i,GlossaryTerm:t}=n;return i||o("DictionaryLink",!0),t||o("GlossaryTerm",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ensure-generic-function"})," ",(0,r.jsx)(t,{term:"function",children:(0,r.jsx)("i",{children:"Function"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"ensure-generic-function",children:(0,r.jsx)("b",{children:"ensure-generic-function"})})," ",(0,r.jsx)(n.em,{children:"function-name"})," &key ",(0,r.jsx)(n.em,{children:"argument-precedence-order declare"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"documentation environment"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"generic-function-class lambda-list"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"method-class method-combination"})}),"\n",(0,r.jsx)(n.p,{children:"\u2192 generic-function"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"function-name"}),"\u2014a ",(0,r.jsx)(n.em,{children:"function name"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The keyword arguments correspond to the ",(0,r.jsx)(n.em,{children:"option"})," arguments of ",(0,r.jsx)(i,{term:"defgeneric",children:(0,r.jsx)("b",{children:"defgeneric"})}),", except that the ",":method-class"," and ",":generic-function-class"," arguments can be ",(0,r.jsx)(n.em,{children:"class object"}),"s as well as names."]}),"\n",(0,r.jsx)(n.p,{children:"Method-combination \u2013 method combination object."}),"\n",(0,r.jsxs)(n.p,{children:["Environment \u2013 the same as the ",(0,r.jsx)(n.strong,{children:"&environment"})," argument to macro expansion functions and is used to distinguish between compile-time and run-time environments."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"generic-function"}),"\u2014a ",(0,r.jsx)(n.em,{children:"generic function object"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(t,{term:"function",children:(0,r.jsx)("i",{children:"function"})})," ",(0,r.jsx)(i,{term:"ensure-generic-function",children:(0,r.jsx)("b",{children:"ensure-generic-function"})})," is used to define a globally named ",(0,r.jsx)(n.em,{children:"generic function"})," with no ",(0,r.jsx)(t,{term:"method",children:(0,r.jsx)("i",{children:"methods"})})," or to specify or modify options and declarations that pertain to a globally named ",(0,r.jsx)(n.em,{children:"generic function"})," as a whole."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"function-name"})," is not ",(0,r.jsx)(t,{term:"fbound",children:(0,r.jsx)("i",{children:"fbound"})})," in the ",(0,r.jsx)(n.em,{children:"global environment"}),", a new ",(0,r.jsx)(n.em,{children:"generic function"})," is created. If (fdefinition ",(0,r.jsx)(n.em,{children:"function-name"}),") is an ",(0,r.jsx)(n.em,{children:"ordinary function"}),", a ",(0,r.jsx)(t,{term:"macro",children:(0,r.jsx)("i",{children:"macro"})}),", or a ",(0,r.jsx)(n.em,{children:"special operator"})," , an error is signaled."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"function-name"})," is a ",(0,r.jsx)(t,{term:"list",children:(0,r.jsx)("i",{children:"list"})}),", it must be of the form (setf ",(0,r.jsx)(t,{term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})}),"). If ",(0,r.jsx)(n.em,{children:"function-name"})," specifies a ",(0,r.jsx)(n.em,{children:"generic function"})," that has a different value for any of the following arguments, the ",(0,r.jsx)(n.em,{children:"generic function"})," is modified to have the new value: ",":argument-precedence-order",", ",":declare",", ",":documentation",", ",":method-combination","."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"function-name"})," specifies a ",(0,r.jsx)(t,{styled:!0,term:"generic function",children:(0,r.jsx)("i",{children:"generic function"})})," that has a different value for the ",":lambda-list"," argument, and the new value is congruent with the ",(0,r.jsx)(t,{styled:!0,term:"lambda list",children:(0,r.jsx)("i",{children:"lambda lists"})})," of all existing ",(0,r.jsx)(t,{term:"method",children:(0,r.jsx)("i",{children:"methods"})})," or there are no ",(0,r.jsx)(t,{term:"method",children:(0,r.jsx)("i",{children:"methods"})}),", the value is changed; otherwise an error is signaled."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"function-name"})," specifies a ",(0,r.jsx)(t,{styled:!0,term:"generic function",children:(0,r.jsx)("i",{children:"generic function"})})," that has a different value for the ",":generic-function-class"," argument and if the new generic function class is compatible with the old, ",(0,r.jsx)(i,{term:"change-class",children:(0,r.jsx)("b",{children:"change-class"})})," is called to change the ",(0,r.jsx)(t,{term:"class",children:(0,r.jsx)("i",{children:"class"})})," of the ",(0,r.jsx)(t,{styled:!0,term:"generic function",children:(0,r.jsx)("i",{children:"generic function"})}),"; otherwise an error is signaled."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"function-name"})," specifies a ",(0,r.jsx)(t,{styled:!0,term:"generic function",children:(0,r.jsx)("i",{children:"generic function"})})," that has a different value for the ",":method-class"," argument, the value is changed, but any existing ",(0,r.jsx)(t,{term:"method",children:(0,r.jsx)("i",{children:"methods"})})," are not changed."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsxs)(n.p,{children:["Existing function binding of ",(0,r.jsx)(n.em,{children:"function-name"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["If (fdefinition ",(0,r.jsx)(n.em,{children:"function-name"}),") is an ",(0,r.jsx)(t,{styled:!0,term:"ordinary function",children:(0,r.jsx)("i",{children:"ordinary function"})}),", a ",(0,r.jsx)(t,{term:"macro",children:(0,r.jsx)("i",{children:"macro"})}),", or a ",(0,r.jsx)(t,{styled:!0,term:"special operator",children:(0,r.jsx)("i",{children:"special operator"})})," , an error of ",(0,r.jsx)(t,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{term:"error",children:(0,r.jsx)("b",{children:"error"})})," is signaled."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"function-name"})," specifies a ",(0,r.jsx)(t,{styled:!0,term:"generic function",children:(0,r.jsx)("i",{children:"generic function"})})," that has a different value for the ",":lambda-list"," argument, and the new value is not congruent with the ",(0,r.jsx)(t,{styled:!0,term:"lambda list",children:(0,r.jsx)("i",{children:"lambda list"})})," of any existing ",(0,r.jsx)(t,{term:"method",children:(0,r.jsx)("i",{children:"method"})}),", an error of ",(0,r.jsx)(t,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{term:"error",children:(0,r.jsx)("b",{children:"error"})})," is signaled."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"function-name"})," specifies a ",(0,r.jsx)(t,{styled:!0,term:"generic function",children:(0,r.jsx)("i",{children:"generic function"})})," that has a different value for the ",":generic-function-class"," argument and if the new generic function class not is compatible with the old, an error of ",(0,r.jsx)(t,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," ",(0,r.jsx)(i,{term:"error",children:(0,r.jsx)("b",{children:"error"})})," is signaled."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(i,{term:"defgeneric",children:(0,r.jsx)("b",{children:"defgeneric"})})]})}function s(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"ensure-generic-function"},l="ensure-generic-function",a={id:"chap-7/h-h-dictionary/ensure-generic-function_function",title:"ensure-generic-function",description:"Expanded Reference: ensure-generic-function",source:"@site/docs/chap-7/h-h-dictionary/ensure-generic-function_function.md",sourceDirName:"chap-7/h-h-dictionary",slug:"/chap-7/h-h-dictionary/ensure-generic-function_function",permalink:"/cl-language-reference/chap-7/h-h-dictionary/ensure-generic-function_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-7/h-h-dictionary/ensure-generic-function_function.md",tags:[],version:"current",frontMatter:{title:"ensure-generic-function"},sidebar:"tutorialSidebar",previous:{title:"defmethod",permalink:"/cl-language-reference/chap-7/h-h-dictionary/defmethod_macro"},next:{title:"find-class",permalink:"/cl-language-reference/chap-7/h-h-dictionary/find-class_accessor"}},h={},m=[{value:"Expanded Reference: ensure-generic-function",id:"expanded-reference-ensure-generic-function",level:2}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"ensure-generic-function",children:"ensure-generic-function"}),"\n","\n","\n",(0,r.jsx)(s,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-ensure-generic-function",children:"Expanded Reference: ensure-generic-function"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(ensure-generic-function )\n"})})]})}function f(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var r=i(67294);const c={},t=r.createContext(c);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);