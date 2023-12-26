"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[5598],{95554:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>x});var c=n(85893),i=n(11151);function s(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{ClLinks:n,GlossaryTerm:s}=r;return n||t("ClLinks",!0),s||t("GlossaryTerm",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"read-char"})," ",(0,c.jsx)(n,{term:"function",children:(0,c.jsx)("i",{children:"Function"})})]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(n,{term:"read-char",children:(0,c.jsx)("b",{children:"read-char"})})," &optional ",(0,c.jsx)(r.em,{children:"input-stream eof-error-p eof-value recursive-p \u2192 char"})]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"input-stream"}),"\u2014an ",(0,c.jsx)(r.em,{children:"input stream designator"})," . The default is ",(0,c.jsx)(s,{styled:!0,term:"standard input",children:(0,c.jsx)("i",{children:"standard input"})}),"."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"eof-error-p"}),"\u2014a ",(0,c.jsx)(s,{styled:!0,term:"generalized boolean",children:(0,c.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,c.jsx)(n,{term:"true",children:(0,c.jsx)("i",{children:"true"})}),"."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"eof-value"}),"\u2014an ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})}),". The default is ",(0,c.jsx)(n,{term:"nil",children:(0,c.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"recursive-p"}),"\u2014a ",(0,c.jsx)(s,{styled:!0,term:"generalized boolean",children:(0,c.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,c.jsx)(n,{term:"false",children:(0,c.jsx)("i",{children:"false"})}),"."]}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.em,{children:"char"}),"\u2014a ",(0,c.jsx)(n,{term:"character",children:(0,c.jsx)("i",{children:"character"})})," or the ",(0,c.jsx)(r.em,{children:"eof-value"}),"."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(n,{term:"read-char",children:(0,c.jsx)("b",{children:"read-char"})})," returns the next ",(0,c.jsx)(n,{term:"character",children:(0,c.jsx)("i",{children:"character"})})," from ",(0,c.jsx)(r.em,{children:"input-stream"}),"."]}),"\n",(0,c.jsxs)(r.p,{children:["When ",(0,c.jsx)(r.em,{children:"input-stream"})," is an ",(0,c.jsx)(s,{styled:!0,term:"echo stream",children:(0,c.jsx)("i",{children:"echo stream"})}),", the character is echoed on ",(0,c.jsx)(r.em,{children:"input-stream"})," the first time the character is seen. Characters that are not echoed by ",(0,c.jsx)(n,{term:"read-char",children:(0,c.jsx)("b",{children:"read-char"})})," are those that were put there by ",(0,c.jsx)(n,{term:"unread-char",children:(0,c.jsx)("b",{children:"unread-char"})})," and hence are assumed to have been echoed already by a previous call to ",(0,c.jsx)(n,{term:"read-char",children:(0,c.jsx)("b",{children:"read-char"})}),"."]}),"\n",(0,c.jsxs)(r.p,{children:["If ",(0,c.jsx)(r.em,{children:"recursive-p"})," is ",(0,c.jsx)(n,{term:"true",children:(0,c.jsx)("i",{children:"true"})}),", this call is expected to be embedded in a higher-level call to ",(0,c.jsx)(n,{term:"read",children:(0,c.jsx)("b",{children:"read"})})," or a similar ",(0,c.jsx)(n,{term:"function",children:(0,c.jsx)("i",{children:"function"})})," used by the ",(0,c.jsx)(r.em,{children:"Lisp reader"})," ."]}),"\n",(0,c.jsxs)(r.p,{children:["If an ",(0,c.jsx)(s,{styled:!0,term:"end of file",children:(0,c.jsx)("i",{children:"end of file"})}),(0,c.jsx)("sub",{children:"2"})," occurs and ",(0,c.jsx)(r.em,{children:"eof-error-p"})," is ",(0,c.jsx)(n,{term:"false",children:(0,c.jsx)("i",{children:"false"})}),", ",(0,c.jsx)(r.em,{children:"eof-value"})," is returned."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-lisp",children:'(with-input-from-string (is "0123") \n  (do ((c (read-char is) (read-char is nil \u2019the-end))) \n      ((not (characterp c))) \n    (format t "~S " c))) \n\u25b7 #\\0 #\\1 #\\2 #\\3 \n\u2192 NIL \n'})}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Affected By:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"*standard-input*"}),", ",(0,c.jsx)(n,{term:"terminal-io",children:(0,c.jsx)("b",{children:"*terminal-io*"})}),"."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,c.jsxs)(r.p,{children:["If an ",(0,c.jsx)(s,{styled:!0,term:"end of file",children:(0,c.jsx)("i",{children:"end of file"})}),(0,c.jsx)("sub",{children:"2"})," occurs before a character can be read, and ",(0,c.jsx)(r.em,{children:"eof-error-p"})," is ",(0,c.jsx)(n,{term:"true",children:(0,c.jsx)("i",{children:"true"})}),", an error of ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," ",(0,c.jsx)(n,{term:"end-of-file",children:(0,c.jsx)("b",{children:"end-of-file"})})," is signaled."]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(n,{term:"read-byte",children:(0,c.jsx)("b",{children:"read-byte"})}),", ",(0,c.jsx)(n,{term:"read-sequence",children:(0,c.jsx)("b",{children:"read-sequence"})}),", ",(0,c.jsx)(n,{term:"write-char",children:(0,c.jsx)("b",{children:"write-char"})}),", ",(0,c.jsx)(n,{term:"read",children:(0,c.jsx)("b",{children:"read"})})]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,c.jsxs)(r.p,{children:["The corresponding output function is ",(0,c.jsx)(n,{term:"write-char",children:(0,c.jsx)("b",{children:"write-char"})}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(s,{...e})}):s(e)}function t(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const a={title:"read-char"},l="read-char",h={id:"chap-21/cb-c-dictionary/read-char_function",title:"read-char",description:"Expanded Reference: read-char",source:"@site/docs/chap-21/cb-c-dictionary/read-char_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/read-char_function",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-char_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/read-char_function.md",tags:[],version:"current",frontMatter:{title:"read-char"},sidebar:"tutorialSidebar",previous:{title:"read-char-no-hang",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-char-no-hang_function"},next:{title:"read-line",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-line_function"}},o={},x=[{value:"Expanded Reference: read-char",id:"expanded-reference-read-char",level:2}];function j(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h1,{id:"read-char",children:"read-char"}),"\n","\n","\n",(0,c.jsx)(d,{}),"\n",(0,c.jsx)(r.h2,{id:"expanded-reference-read-char",children:"Expanded Reference: read-char"}),"\n",(0,c.jsx)(r.admonition,{type:"tip",children:(0,c.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-lisp",children:"(read-char )\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>t,a:()=>d});var c=n(67294);const i={},s=c.createContext(i);function d(e){const r=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),c.createElement(s.Provider,{value:r},e.children)}}}]);