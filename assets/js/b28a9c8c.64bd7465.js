"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[72579],{27774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var s=r(85893),n=r(11151);function i(e){const t={em:"em",p:"p",strong:"strong",...(0,n.a)(),...e.components},{ClLinks:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ClLinks",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"broadcast-stream"})," ",(0,s.jsx)(t.em,{children:"System Class"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Class Precedence List:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(r,{styled:!0,term:"broadcast-stream",children:(0,s.jsx)("b",{children:"broadcast-stream"})}),", ",(0,s.jsx)(r,{styled:!0,term:"stream",children:(0,s.jsx)("b",{children:"stream"})}),", ",(0,s.jsx)(r,{styled:!0,term:"t",children:(0,s.jsx)("b",{children:"t"})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.em,{children:"broadcast stream"})," is an ",(0,s.jsx)(t.em,{children:"output stream"})," which has associated with it a set of zero or more ",(0,s.jsx)(t.em,{children:"output streams"})," such that any output sent to the ",(0,s.jsx)(t.em,{children:"broadcast stream"})," gets passed on as output to each of the associated ",(0,s.jsx)(t.em,{children:"output streams"}),". (If a ",(0,s.jsx)(t.em,{children:"broadcast stream"})," has no ",(0,s.jsx)(t.em,{children:"component streams"}),", then all output to the ",(0,s.jsx)(t.em,{children:"broadcast stream"})," is discarded.)"]}),"\n",(0,s.jsxs)(t.p,{children:["The set of operations that may be performed on a ",(0,s.jsx)(t.em,{children:"broadcast stream"})," is the intersection of those for its associated ",(0,s.jsx)(t.em,{children:"output streams"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Some output operations (",(0,s.jsx)(t.em,{children:"e.g."}),", ",(0,s.jsx)(r,{styled:!0,term:"fresh-line",children:(0,s.jsx)("b",{children:"fresh-line"})}),") return ",(0,s.jsx)(r,{styled:!0,term:"value",children:(0,s.jsx)("i",{children:"values"})})," based on the state of the ",(0,s.jsx)(r,{styled:!0,term:"stream",children:(0,s.jsx)("i",{children:"stream"})})," at the time of the operation. Since these ",(0,s.jsx)(r,{styled:!0,term:"value",children:(0,s.jsx)("i",{children:"values"})})," might differ for each of the ",(0,s.jsx)(t.em,{children:"component streams"}),", it is necessary to describe their return value specifically:"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"\u2022"})," ",(0,s.jsx)(r,{styled:!0,term:"stream-element-type",children:(0,s.jsx)("b",{children:"stream-element-type"})})," returns the value from the last component stream, or ",(0,s.jsx)(r,{styled:!0,term:"t",children:(0,s.jsx)("b",{children:"t"})})," if there are no component streams."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"\u2022"})," ",(0,s.jsx)(r,{styled:!0,term:"fresh-line",children:(0,s.jsx)("b",{children:"fresh-line"})})," returns the value from the last component stream, or ",(0,s.jsx)(r,{styled:!0,term:"nil",children:(0,s.jsx)("b",{children:"nil"})})," if there are no component streams."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"\u2022"})," The functions ",(0,s.jsx)(r,{styled:!0,term:"file-length",children:(0,s.jsx)("b",{children:"file-length"})}),", ",(0,s.jsx)(r,{styled:!0,term:"file-position",children:(0,s.jsx)("b",{children:"file-position"})}),", ",(0,s.jsx)(r,{styled:!0,term:"file-string-length",children:(0,s.jsx)("b",{children:"file-string-length"})}),", and ",(0,s.jsx)(r,{styled:!0,term:"stream-external-format",children:(0,s.jsx)("b",{children:"stream-external-format"})})," return the value from the last component stream; if there are no component"]}),"\n",(0,s.jsxs)(t.p,{children:["streams, ",(0,s.jsx)(r,{styled:!0,term:"file-length",children:(0,s.jsx)("b",{children:"file-length"})})," and ",(0,s.jsx)(r,{styled:!0,term:"file-position",children:(0,s.jsx)("b",{children:"file-position"})})," return 0, ",(0,s.jsx)(r,{styled:!0,term:"file-string-length",children:(0,s.jsx)("b",{children:"file-string-length"})})," returns 1, and ",(0,s.jsx)(r,{styled:!0,term:"stream-external-format",children:(0,s.jsx)("b",{children:"stream-external-format"})})," returns ",":default","."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"\u2022"})," The functions ",(0,s.jsx)(r,{styled:!0,term:"streamp",children:(0,s.jsx)("b",{children:"streamp"})})," and ",(0,s.jsx)(t.strong,{children:"output-stream-p"})," always return ",(0,s.jsx)(r,{styled:!0,term:"true",children:(0,s.jsx)("i",{children:"true"})})," for ",(0,s.jsx)(t.em,{children:"broadcast streams"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"\u2022"})," The functions ",(0,s.jsx)(r,{styled:!0,term:"open-stream-p",children:(0,s.jsx)("b",{children:"open-stream-p"})})," tests whether the ",(0,s.jsx)(t.em,{children:"broadcast stream"})," is ",(0,s.jsx)(r,{styled:!0,term:"open",children:(0,s.jsx)("i",{children:"open"})}),(0,s.jsx)("sub",{children:"2"}),", not whether its component streams are ",(0,s.jsx)(r,{styled:!0,term:"open",children:(0,s.jsx)("i",{children:"open"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"\u2022"})," The functions ",(0,s.jsx)(t.strong,{children:"input-stream-p"})," and ",(0,s.jsx)(t.em,{children:"interactive-stream-p"})," return an ",(0,s.jsx)(r,{styled:!0,term:"implementation-defined",children:(0,s.jsx)("i",{children:"implementation-defined"})}),", ",(0,s.jsx)(t.em,{children:"generalized boolean"})," value."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"\u2022"})," For the input operations ",(0,s.jsx)(t.strong,{children:"clear-input listen"}),", ",(0,s.jsx)(t.strong,{children:"peek-char"}),", ",(0,s.jsx)(t.strong,{children:"read-byte"}),", ",(0,s.jsx)(t.strong,{children:"read-char-no-hang"}),", ",(0,s.jsx)(t.strong,{children:"read-char"}),", ",(0,s.jsx)(t.strong,{children:"read-line"}),", and ",(0,s.jsx)(r,{styled:!0,term:"unread-char",children:(0,s.jsx)("b",{children:"unread-char"})}),", the consequences are undefined if the indicated operation is performed. However, an ",(0,s.jsx)(r,{styled:!0,term:"implementation",children:(0,s.jsx)("i",{children:"implementation"})})," is permitted to define such a behavior as an ",(0,s.jsx)(r,{styled:!0,term:"implementation-dependent",children:(0,s.jsx)("i",{children:"implementation-dependent"})})," extension."]}),"\n",(0,s.jsxs)(t.p,{children:["For any output operations not having their return values explicitly specified above or elsewhere in this document, it is defined that the ",(0,s.jsx)(r,{styled:!0,term:"value",children:(0,s.jsx)("i",{children:"values"})})," returned by such an operation are the ",(0,s.jsx)(r,{styled:!0,term:"value",children:(0,s.jsx)("i",{children:"values"})})," resulting from performing the operation on the last of its ",(0,s.jsx)(t.em,{children:"component streams"}),"; the ",(0,s.jsx)(r,{styled:!0,term:"value",children:(0,s.jsx)("i",{children:"values"})})," resulting from performing the operation on all preceding ",(0,s.jsx)(r,{styled:!0,term:"stream",children:(0,s.jsx)("i",{children:"streams"})})," are discarded. If there are no ",(0,s.jsx)(t.em,{children:"component streams"}),", the value is ",(0,s.jsx)(r,{styled:!0,term:"implementation-dependent",children:(0,s.jsx)("i",{children:"implementation-dependent"})}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(r,{styled:!0,term:"broadcast-stream-streams",children:(0,s.jsx)("b",{children:"broadcast-stream-streams"})}),", ",(0,s.jsx)(r,{styled:!0,term:"make-broadcast-stream",children:(0,s.jsx)("b",{children:"make-broadcast-stream"})})]})]})}function a(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const c={title:"broadcast-stream"},d="broadcast-stream",l={id:"chap-21/cb-c-dictionary/broadcast-stream_system-class",title:"broadcast-stream",description:"Expanded Reference: broadcast-stream",source:"@site/docs/chap-21/cb-c-dictionary/broadcast-stream_system-class.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/broadcast-stream_system-class",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/broadcast-stream_system-class",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/broadcast-stream_system-class.md",tags:[],version:"current",frontMatter:{title:"broadcast-stream"},sidebar:"tutorialSidebar",previous:{title:"broadcast-stream-streams",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/broadcast-stream-streams_function"},next:{title:"clear-input",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/clear-input_function"}},o={},h=[{value:"Expanded Reference: broadcast-stream",id:"expanded-reference-broadcast-stream",level:2}];function m(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"broadcast-stream",children:"broadcast-stream"}),"\n","\n","\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(t.h2,{id:"expanded-reference-broadcast-stream",children:"Expanded Reference: broadcast-stream"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lisp",children:"(broadcast-stream )\n"})})]})}function x(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>a});var s=r(67294);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);