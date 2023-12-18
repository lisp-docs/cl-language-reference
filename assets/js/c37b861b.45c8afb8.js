"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[95191],{34302:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var a=r(85893),c=r(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"read-char-no-hang"})," ",(0,a.jsx)(n.em,{children:"Function"})," ",(0,a.jsx)(n.strong,{children:"Syntax:"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"read-char-no-hang"})," &optional ",(0,a.jsx)(n.em,{children:"input-stream eof-error-p eof-value recursive-p"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,a.jsx)(n.p,{children:"\u2192 char"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"input-stream"})," \u2013 an ",(0,a.jsx)(n.em,{children:"input stream designator"})," . The default is ",(0,a.jsx)(n.em,{children:"standard input"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"eof-error-p"}),"\u2014a ",(0,a.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,a.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"eof-value"}),"\u2014an ",(0,a.jsx)(n.em,{children:"object"}),". The default is ",(0,a.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"recursive-p"}),"\u2014a ",(0,a.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,a.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"char"}),"\u2014a ",(0,a.jsx)(n.em,{children:"character"})," or ",(0,a.jsx)(n.strong,{children:"nil"})," or the ",(0,a.jsx)(n.em,{children:"eof-value"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"read-char-no-hang"})," returns a character from ",(0,a.jsx)(n.em,{children:"input-stream"})," if such a character is available. If no character is available, ",(0,a.jsx)(n.strong,{children:"read-char-no-hang"})," returns ",(0,a.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.em,{children:"recursive-p"})," is ",(0,a.jsx)(n.em,{children:"true"}),", this call is expected to be embedded in a higher-level call to ",(0,a.jsx)(n.strong,{children:"read"})," or a similar ",(0,a.jsx)(n.em,{children:"function"})," used by the ",(0,a.jsx)(n.em,{children:"Lisp reader"})," ."]}),"\n",(0,a.jsxs)(n.p,{children:["If an ",(0,a.jsx)(n.em,{children:"end of file"}),(0,a.jsx)("sub",{children:"2"})," occurs and ",(0,a.jsx)(n.em,{children:"eof-error-p"})," is ",(0,a.jsx)(n.em,{children:"false"}),", ",(0,a.jsx)(n.em,{children:"eof-value"})," is returned."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:";; This code assumes an implementation in which a newline is not \n;; required to terminate input from the console. \n(defun test-it () \n  (unread-char (read-char)) \n  (list (read-char-no-hang) \n\t(read-char-no-hang) \n\t(read-char-no-hang))) \n\u2192 TEST-IT \n;; Implementation A, where a Newline is not required to terminate \n;; interactive input on the console. \n(test-it) \n\u25b7 a \n\u2192 (#\\a NIL NIL) \n;; Implementation B, where a Newline is required to terminate \n;; interactive input on the console, and where that Newline remains \n;; on the input stream. \n(test-it) \n\u25b7 a*\u2190-* \n\u2192 (#\\a #\\Newline NIL) \n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"*standard-input*"}),", ",(0,a.jsx)(n.strong,{children:"*terminal-io*"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,a.jsxs)(n.p,{children:["If an ",(0,a.jsx)(n.em,{children:"end of file"}),(0,a.jsx)("sub",{children:"2"})," occurs when ",(0,a.jsx)(n.em,{children:"eof-error-p"})," is ",(0,a.jsx)(n.em,{children:"true"}),", an error of ",(0,a.jsx)(n.em,{children:"type"})," ",(0,a.jsx)(n.strong,{children:"end-of-file"})," is signaled . ",(0,a.jsx)(n.strong,{children:"See Also:"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"listen"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"read-char-no-hang"})," is exactly like ",(0,a.jsx)(n.strong,{children:"read-char"}),", except that if it would be necessary to wait in order to get a character (as from a keyboard), ",(0,a.jsx)(n.strong,{children:"nil"})," is immediately returned without waiting."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"terpri, fresh-line"})})]})}function s(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}const t={},d="read-char-no-hang",o={id:"chap-21/cb-c-dictionary/read-char-no-hang_function",title:"read-char-no-hang",description:"Expanded Reference: read-char-no-hang",source:"@site/docs/chap-21/cb-c-dictionary/read-char-no-hang_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/read-char-no-hang_function",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/read-char-no-hang_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/read-char-no-hang_function.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"peek-char",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/peekchar"},next:{title:"read-char",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/read-char_function"}},h={},l=[{value:"Expanded Reference: read-char-no-hang",id:"expanded-reference-read-char-no-hang",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"read-char-no-hang",children:"read-char-no-hang"}),"\n","\n","\n",(0,a.jsx)(s,{}),"\n",(0,a.jsx)(n.h2,{id:"expanded-reference-read-char-no-hang",children:"Expanded Reference: read-char-no-hang"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:"(read-char-no-hang )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>s});var a=r(67294);const c={},i=a.createContext(c);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);