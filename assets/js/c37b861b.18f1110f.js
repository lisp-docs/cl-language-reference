"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[95191],{34302:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>h,toc:()=>x});var i=r(85893),c=r(11151);function a(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components},{DictionaryLink:r,GlossaryTerm:a}=n;return r||s("DictionaryLink",!0),a||s("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"read-char-no-hang"})," ",(0,i.jsx)(a,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})," ",(0,i.jsx)(n.strong,{children:"Syntax:"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"read-char-no-hang",children:(0,i.jsx)("b",{children:"read-char-no-hang"})})," &optional ",(0,i.jsx)(n.em,{children:"input-stream eof-error-p eof-value recursive-p"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsx)(n.p,{children:"\u2192 char"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"input-stream"})," \u2013 an ",(0,i.jsx)(n.em,{children:"input stream designator"})," . The default is ",(0,i.jsx)(a,{styled:!0,term:"standard input",children:(0,i.jsx)("i",{children:"standard input"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"eof-error-p"}),"\u2014a ",(0,i.jsx)(a,{styled:!0,term:"generalized boolean",children:(0,i.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,i.jsx)(a,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"eof-value"}),"\u2014an ",(0,i.jsx)(a,{term:"object",children:(0,i.jsx)("i",{children:"object"})}),". The default is ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"recursive-p"}),"\u2014a ",(0,i.jsx)(a,{styled:!0,term:"generalized boolean",children:(0,i.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,i.jsx)(a,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"char"}),"\u2014a ",(0,i.jsx)(a,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," or ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," or the ",(0,i.jsx)(n.em,{children:"eof-value"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"read-char-no-hang",children:(0,i.jsx)("b",{children:"read-char-no-hang"})})," returns a character from ",(0,i.jsx)(n.em,{children:"input-stream"})," if such a character is available. If no character is available, ",(0,i.jsx)(r,{term:"read-char-no-hang",children:(0,i.jsx)("b",{children:"read-char-no-hang"})})," returns ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"recursive-p"})," is ",(0,i.jsx)(a,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),", this call is expected to be embedded in a higher-level call to ",(0,i.jsx)(r,{term:"read",children:(0,i.jsx)("b",{children:"read"})})," or a similar ",(0,i.jsx)(a,{term:"function",children:(0,i.jsx)("i",{children:"function"})})," used by the ",(0,i.jsx)(n.em,{children:"Lisp reader"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:["If an ",(0,i.jsx)(a,{styled:!0,term:"end of file",children:(0,i.jsx)("i",{children:"end of file"})}),(0,i.jsx)("sub",{children:"2"})," occurs and ",(0,i.jsx)(n.em,{children:"eof-error-p"})," is ",(0,i.jsx)(a,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),", ",(0,i.jsx)(n.em,{children:"eof-value"})," is returned."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:";; This code assumes an implementation in which a newline is not \n;; required to terminate input from the console. \n(defun test-it () \n  (unread-char (read-char)) \n  (list (read-char-no-hang) \n\t(read-char-no-hang) \n\t(read-char-no-hang))) \n\u2192 TEST-IT \n;; Implementation A, where a Newline is not required to terminate \n;; interactive input on the console. \n(test-it) \n\u25b7 a \n\u2192 (#\\a NIL NIL) \n;; Implementation B, where a Newline is required to terminate \n;; interactive input on the console, and where that Newline remains \n;; on the input stream. \n(test-it) \n\u25b7 a\u2190 \n\u2192 (#\\a #\\Newline NIL) \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"*standard-input*"}),", ",(0,i.jsx)(r,{term:"terminal-io",children:(0,i.jsx)("b",{children:"*terminal-io*"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["If an ",(0,i.jsx)(a,{styled:!0,term:"end of file",children:(0,i.jsx)("i",{children:"end of file"})}),(0,i.jsx)("sub",{children:"2"})," occurs when ",(0,i.jsx)(n.em,{children:"eof-error-p"})," is ",(0,i.jsx)(a,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),", an error of ",(0,i.jsx)(a,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(r,{term:"end-of-file",children:(0,i.jsx)("b",{children:"end-of-file"})})," is signaled . ",(0,i.jsx)(n.strong,{children:"See Also:"})]}),"\n",(0,i.jsx)(r,{term:"listen",children:(0,i.jsx)("b",{children:"listen"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(r,{term:"read-char-no-hang",children:(0,i.jsx)("b",{children:"read-char-no-hang"})})," is exactly like ",(0,i.jsx)(r,{term:"read-char",children:(0,i.jsx)("b",{children:"read-char"})}),", except that if it would be necessary to wait in order to get a character (as from a keyboard), ",(0,i.jsx)(r,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})})," is immediately returned without waiting."]}),"\n",(0,i.jsx)(r,{styled:!0,term:"terpri, fresh-line",children:(0,i.jsx)("b",{children:"terpri, fresh-line"})})]})}function t(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"read-char-no-hang"},l="read-char-no-hang",h={id:"chap-21/cb-c-dictionary/read-char-no-hang_function",title:"read-char-no-hang",description:"Expanded Reference: read-char-no-hang",source:"@site/docs/chap-21/cb-c-dictionary/read-char-no-hang_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/read-char-no-hang_function",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-char-no-hang_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/read-char-no-hang_function.md",tags:[],version:"current",frontMatter:{title:"read-char-no-hang"},sidebar:"tutorialSidebar",previous:{title:"read-byte",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-byte_function"},next:{title:"read-char",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-char_function"}},o={},x=[{value:"Expanded Reference: read-char-no-hang",id:"expanded-reference-read-char-no-hang",level:2}];function j(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"read-char-no-hang",children:"read-char-no-hang"}),"\n","\n","\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-read-char-no-hang",children:"Expanded Reference: read-char-no-hang"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(read-char-no-hang )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>t});var i=r(67294);const c={},a=i.createContext(c);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);