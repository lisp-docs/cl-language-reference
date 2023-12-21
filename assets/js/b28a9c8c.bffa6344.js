"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[72579],{27774:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=n(85893),t=n(11151);function a(e){const s={em:"em",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"broadcast-stream"})," ",(0,r.jsx)(s.em,{children:"System Class"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Class Precedence List:"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"broadcast-stream"}),", ",(0,r.jsx)(s.strong,{children:"stream"}),", ",(0,r.jsx)(s.strong,{children:"t"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(s.p,{children:["A ",(0,r.jsx)(s.em,{children:"broadcast stream"})," is an ",(0,r.jsx)(s.em,{children:"output stream"})," which has associated with it a set of zero or more ",(0,r.jsx)(s.em,{children:"output streams"})," such that any output sent to the ",(0,r.jsx)(s.em,{children:"broadcast stream"})," gets passed on as output to each of the associated ",(0,r.jsx)(s.em,{children:"output streams"}),". (If a ",(0,r.jsx)(s.em,{children:"broadcast stream"})," has no ",(0,r.jsx)(s.em,{children:"component streams"}),", then all output to the ",(0,r.jsx)(s.em,{children:"broadcast stream"})," is discarded.)"]}),"\n",(0,r.jsxs)(s.p,{children:["The set of operations that may be performed on a ",(0,r.jsx)(s.em,{children:"broadcast stream"})," is the intersection of those for its associated ",(0,r.jsx)(s.em,{children:"output streams"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Some output operations (",(0,r.jsx)(s.em,{children:"e.g."}),", ",(0,r.jsx)(s.strong,{children:"fresh-line"}),") return ",(0,r.jsx)(s.em,{children:"values"})," based on the state of the ",(0,r.jsx)(s.em,{children:"stream"})," at the time of the operation. Since these ",(0,r.jsx)(s.em,{children:"values"})," might differ for each of the ",(0,r.jsx)(s.em,{children:"component streams"}),", it is necessary to describe their return value specifically:"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"\u2022"})," ",(0,r.jsx)(s.strong,{children:"stream-element-type"})," returns the value from the last component stream, or ",(0,r.jsx)(s.strong,{children:"t"})," if there are no component streams."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"\u2022"})," ",(0,r.jsx)(s.strong,{children:"fresh-line"})," returns the value from the last component stream, or ",(0,r.jsx)(s.strong,{children:"nil"})," if there are no component streams."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"\u2022"})," The functions ",(0,r.jsx)(s.strong,{children:"file-length"}),", ",(0,r.jsx)(s.strong,{children:"file-position"}),", ",(0,r.jsx)(s.strong,{children:"file-string-length"}),", and ",(0,r.jsx)(s.strong,{children:"stream-external-format"})," return the value from the last component stream; if there are no component"]}),"\n",(0,r.jsxs)(s.p,{children:["streams, ",(0,r.jsx)(s.strong,{children:"file-length"})," and ",(0,r.jsx)(s.strong,{children:"file-position"})," return 0, ",(0,r.jsx)(s.strong,{children:"file-string-length"})," returns 1, and ",(0,r.jsx)(s.strong,{children:"stream-external-format"})," returns ",":default","."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"\u2022"})," The functions ",(0,r.jsx)(s.strong,{children:"streamp"})," and ",(0,r.jsx)(s.strong,{children:"output-stream-p"})," always return ",(0,r.jsx)(s.em,{children:"true"})," for ",(0,r.jsx)(s.em,{children:"broadcast streams"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"\u2022"})," The functions ",(0,r.jsx)(s.strong,{children:"open-stream-p"})," tests whether the ",(0,r.jsx)(s.em,{children:"broadcast stream"})," is ",(0,r.jsx)(s.em,{children:"open"}),(0,r.jsx)("sub",{children:"2"}),", not whether its component streams are ",(0,r.jsx)(s.em,{children:"open"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"\u2022"})," The functions ",(0,r.jsx)(s.strong,{children:"input-stream-p"})," and ",(0,r.jsx)(s.em,{children:"interactive-stream-p"})," return an ",(0,r.jsx)(s.em,{children:"implementation-defined"}),", ",(0,r.jsx)(s.em,{children:"generalized boolean"})," value."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"\u2022"})," For the input operations ",(0,r.jsx)(s.strong,{children:"clear-input listen"}),", ",(0,r.jsx)(s.strong,{children:"peek-char"}),", ",(0,r.jsx)(s.strong,{children:"read-byte"}),", ",(0,r.jsx)(s.strong,{children:"read-char-no-hang"}),", ",(0,r.jsx)(s.strong,{children:"read-char"}),", ",(0,r.jsx)(s.strong,{children:"read-line"}),", and ",(0,r.jsx)(s.strong,{children:"unread-char"}),", the consequences are undefined if the indicated operation is performed. However, an ",(0,r.jsx)(s.em,{children:"implementation"})," is permitted to define such a behavior as an ",(0,r.jsx)(s.em,{children:"implementation-dependent"})," extension."]}),"\n",(0,r.jsxs)(s.p,{children:["For any output operations not having their return values explicitly specified above or elsewhere in this document, it is defined that the ",(0,r.jsx)(s.em,{children:"values"})," returned by such an operation are the ",(0,r.jsx)(s.em,{children:"values"})," resulting from performing the operation on the last of its ",(0,r.jsx)(s.em,{children:"component streams"}),"; the ",(0,r.jsx)(s.em,{children:"values"})," resulting from performing the operation on all preceding ",(0,r.jsx)(s.em,{children:"streams"})," are discarded. If there are no ",(0,r.jsx)(s.em,{children:"component streams"}),", the value is ",(0,r.jsx)(s.em,{children:"implementation-dependent"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"broadcast-stream-streams"}),", ",(0,r.jsx)(s.strong,{children:"make-broadcast-stream"})]})]})}function c(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}const i={title:"broadcast-stream"},o="broadcast-stream",d={id:"chap-21/cb-c-dictionary/broadcast-stream_system-class",title:"broadcast-stream",description:"Expanded Reference: broadcast-stream",source:"@site/docs/chap-21/cb-c-dictionary/broadcast-stream_system-class.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/broadcast-stream_system-class",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/broadcast-stream_system-class",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/broadcast-stream_system-class.md",tags:[],version:"current",frontMatter:{title:"broadcast-stream"},sidebar:"tutorialSidebar",previous:{title:"broadcast-stream-streams",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/broadcast-stream-streams_function"},next:{title:"clear-input",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/clear-input_function"}},l={},h=[{value:"Expanded Reference: broadcast-stream",id:"expanded-reference-broadcast-stream",level:2}];function m(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"broadcast-stream",children:"broadcast-stream"}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(s.h2,{id:"expanded-reference-broadcast-stream",children:"Expanded Reference: broadcast-stream"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-lisp",children:"(broadcast-stream )\n"})})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>c});var r=n(67294);const t={},a=r.createContext(t);function c(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);