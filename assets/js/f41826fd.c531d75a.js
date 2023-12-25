"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[90586],{73192:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=i(85893),s=i(11151);const t={title:"O",sidebar_position:111},c=void 0,l={id:"chap-26/o",title:"O",description:"O",source:"@site/docs/chap-26/o.md",sourceDirName:"chap-26",slug:"/chap-26/o",permalink:"/cl-language-reference/chap-26/o",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-26/o.md",tags:[],version:"current",sidebarPosition:111,frontMatter:{title:"O",sidebar_position:111},sidebar:"tutorialSidebar",previous:{title:"N",permalink:"/cl-language-reference/chap-26/n"},next:{title:"P",permalink:"/cl-language-reference/chap-26/p"}},o={},d=[];function a(e){const n={em:"em",p:"p",strong:"strong",...(0,s.a)(),...e.components},{ClLinks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"O"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"object"})," ",(0,r.jsx)(n.em,{children:"n."})," 1. any Lisp datum. \u201cThe function ",(0,r.jsx)(i,{term:"cons",children:(0,r.jsx)("b",{children:"cons"})})," creates an object which refers to two other objects.\u201d 2. (immediately following the name of a ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})}),") an ",(0,r.jsx)(i,{term:"object",children:(0,r.jsx)("i",{children:"object"})})," which is of that ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})}),", used to emphasize that the ",(0,r.jsx)(i,{term:"object",children:(0,r.jsx)("i",{children:"object"})})," is not just a ",(0,r.jsx)(i,{term:"name",children:(0,r.jsx)("i",{children:"name"})})," for an object of that ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," but really an ",(0,r.jsx)(i,{term:"element",children:(0,r.jsx)("i",{children:"element"})})," of the ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," in cases where ",(0,r.jsx)(i,{term:"object",children:(0,r.jsx)("i",{children:"objects"})})," of that ",(0,r.jsx)(i,{term:"type",children:(0,r.jsx)("i",{children:"type"})})," (such as ",(0,r.jsx)(i,{term:"function",children:(0,r.jsx)("b",{children:"function"})})," or ",(0,r.jsx)(i,{term:"class",children:(0,r.jsx)("b",{children:"class"})}),") are commonly referred to by ",(0,r.jsx)(i,{term:"name",children:(0,r.jsx)("i",{children:"name"})}),". \u201cThe function ",(0,r.jsx)(i,{term:"symbol-function",children:(0,r.jsx)("b",{children:"symbol-function"})})," takes a function name and returns a function object.\u201d"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"object-traversing"})," ",(0,r.jsx)(n.em,{children:"adj."})," operating in succession on components of an ",(0,r.jsx)(i,{term:"object",children:(0,r.jsx)("i",{children:"object"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u201cThe operators ",(0,r.jsx)(i,{term:"mapcar",children:(0,r.jsx)("b",{children:"mapcar"})}),", ",(0,r.jsx)(i,{term:"maphash",children:(0,r.jsx)("b",{children:"maphash"})}),", ",(0,r.jsx)(i,{term:"with-package-iterator",children:(0,r.jsx)("b",{children:"with-package-iterator"})})," and ",(0,r.jsx)(i,{term:"count",children:(0,r.jsx)("b",{children:"count"})})," perform"]}),"\n",(0,r.jsx)(n.p,{children:"object-traversing operations.\u201d"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i,{term:"open",children:(0,r.jsx)("b",{children:"open"})})," ",(0,r.jsx)(n.em,{children:"adj."}),", ",(0,r.jsx)(n.em,{children:"v.t."})," (a ",(0,r.jsx)(i,{term:"file",children:(0,r.jsx)("i",{children:"file"})}),") 1. ",(0,r.jsx)(n.em,{children:"v.t."})," to create and return a ",(0,r.jsx)(i,{term:"stream",children:(0,r.jsx)("i",{children:"stream"})})," to the ",(0,r.jsx)(i,{term:"file",children:(0,r.jsx)("i",{children:"file"})}),". 2. ",(0,r.jsx)(n.em,{children:"adj."})," (of a ",(0,r.jsx)(i,{term:"stream",children:(0,r.jsx)("i",{children:"stream"})}),") having been ",(0,r.jsx)(n.em,{children:"opened"})," ",(0,r.jsx)("sub",{children:"1"}),", but not yet ",(0,r.jsx)(i,{term:"closed",children:(0,r.jsx)("i",{children:"closed"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"operator"})," ",(0,r.jsx)(n.em,{children:"n."})," 1. a ",(0,r.jsx)(i,{term:"function",children:(0,r.jsx)("i",{children:"function"})}),", ",(0,r.jsx)(i,{term:"macro",children:(0,r.jsx)("i",{children:"macro"})}),", or ",(0,r.jsx)(n.em,{children:"special operator"})," . 2. a ",(0,r.jsx)(i,{term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})})," that names such a ",(0,r.jsx)(i,{term:"function",children:(0,r.jsx)("i",{children:"function"})}),", ",(0,r.jsx)(i,{term:"macro",children:(0,r.jsx)("i",{children:"macro"})}),", or ",(0,r.jsx)(n.em,{children:"special operator"})," . 3. (in a ",(0,r.jsx)(i,{term:"function",children:(0,r.jsx)("b",{children:"function"})})," ",(0,r.jsx)(n.em,{children:"special form"}),") the ",(0,r.jsx)(i,{term:"cadr",children:(0,r.jsx)("i",{children:"cadr"})})," of the ",(0,r.jsx)(i,{term:"function",children:(0,r.jsx)("b",{children:"function"})})," ",(0,r.jsx)(n.em,{children:"special form"}),", which might be either an ",(0,r.jsx)(i,{term:"operator",children:(0,r.jsx)("i",{children:"operator"})})," ",(0,r.jsx)("sub",{children:"2"})," or a ",(0,r.jsx)(n.em,{children:"lambda expression"}),". 4. (of a ",(0,r.jsx)(n.em,{children:"compound form"}),") the ",(0,r.jsx)(i,{term:"car",children:(0,r.jsx)("i",{children:"car"})})," of the ",(0,r.jsx)(n.em,{children:"compound form"}),", which might be either an ",(0,r.jsx)(i,{term:"operator",children:(0,r.jsx)("i",{children:"operator"})})," ",(0,r.jsx)("sub",{children:"2"})," or a ",(0,r.jsx)(n.em,{children:"lambda expression"}),", and which is never (setf ",(0,r.jsx)(i,{term:"symbol",children:(0,r.jsx)("i",{children:"symbol"})}),")."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"optimize quality"})," ",(0,r.jsx)(n.em,{children:"n."})," one of several aspects of a program that might be optimizable by certain compilers. Since optimizing one such quality might conflict with optimizing another, relative priorities for qualities can be established in an ",(0,r.jsx)(i,{term:"optimize",children:(0,r.jsx)("b",{children:"optimize"})})," ",(0,r.jsx)(i,{term:"declaration",children:(0,r.jsx)("i",{children:"declaration"})}),". The ",(0,r.jsx)(n.em,{children:"standardized optimize qualities"})," are compilation-speed (speed of the compilation process), debug (ease of debugging), safety (run-time error checking), space (both code size and run-time space), and speed (of the object code). ",(0,r.jsx)(i,{term:"implementation",children:(0,r.jsx)("i",{children:"Implementations"})})," may define additional ",(0,r.jsx)(n.em,{children:"optimize qualities"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"optional parameter"})," ",(0,r.jsx)(n.em,{children:"n."})," A ",(0,r.jsx)(i,{term:"parameter",children:(0,r.jsx)("i",{children:"parameter"})})," for which a corresponding positional ",(0,r.jsx)(i,{term:"argument",children:(0,r.jsx)("i",{children:"argument"})})," is optional. If the ",(0,r.jsx)(i,{term:"argument",children:(0,r.jsx)("i",{children:"argument"})})," is not supplied, a default value is used. See also ",(0,r.jsx)(n.em,{children:"supplied-p parameter"})," ."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ordinary function"})," ",(0,r.jsx)(n.em,{children:"n."})," a ",(0,r.jsx)(i,{term:"function",children:(0,r.jsx)("i",{children:"function"})})," that is not a ",(0,r.jsx)(n.em,{children:"generic function"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ordinary lambda list"})," ",(0,r.jsx)(n.em,{children:"n."})," the kind of ",(0,r.jsx)(n.em,{children:"lambda list"})," used by ",(0,r.jsx)(i,{term:"lambda",children:(0,r.jsx)("b",{children:"lambda"})}),". See ",(0,r.jsx)(n.em,{children:"modified lambda list"})," and ",(0,r.jsx)(n.em,{children:"extended lambda list"}),". \u201c",(0,r.jsx)(i,{term:"defun",children:(0,r.jsx)("b",{children:"defun"})})," uses an ordinary lambda list.\u201d"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"otherwise inaccessible part"})," ",(0,r.jsx)(n.em,{children:"n."})," (of an ",(0,r.jsx)(i,{term:"object",children:(0,r.jsx)("i",{children:"object"})}),", ",(0,r.jsx)(n.em,{children:"O"}),(0,r.jsx)("sub",{children:"1"}),") an ",(0,r.jsx)(i,{term:"object",children:(0,r.jsx)("i",{children:"object"})}),", ",(0,r.jsx)(n.em,{children:"O"}),(0,r.jsx)("sub",{children:"2"}),", which would"]}),"\n",(0,r.jsxs)(n.p,{children:["be made ",(0,r.jsx)(i,{term:"inaccessible",children:(0,r.jsx)("i",{children:"inaccessible"})})," if ",(0,r.jsx)(n.em,{children:"O"}),(0,r.jsx)("sub",{children:"1"})," were made ",(0,r.jsx)(i,{term:"inaccessible",children:(0,r.jsx)("i",{children:"inaccessible"})}),". (Every ",(0,r.jsx)(i,{term:"object",children:(0,r.jsx)("i",{children:"object"})})," is an ",(0,r.jsx)(n.em,{children:"otherwise inaccessible part"})," of itself.)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"output"})," ",(0,r.jsx)(n.em,{children:"adj."})," (of a ",(0,r.jsx)(i,{term:"stream",children:(0,r.jsx)("i",{children:"stream"})}),") supporting output operations (",(0,r.jsx)(n.em,{children:"i.e."}),", being a \u201cdata sink\u201d). An ",(0,r.jsx)(n.em,{children:"output stream"})," might also be an ",(0,r.jsx)(n.em,{children:"input stream"}),", in which case it is sometimes called a ",(0,r.jsx)(n.em,{children:"bidirectional stream"}),". See the ",(0,r.jsx)(i,{term:"function",children:(0,r.jsx)("i",{children:"function"})})," ",(0,r.jsx)(n.strong,{children:"output-stream-p"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>c});var r=i(67294);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);