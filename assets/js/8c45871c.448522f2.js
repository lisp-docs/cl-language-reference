"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[39246],{16184:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>x});var i=n(85893),c=n(11151);function t(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components},{DictionaryLink:n,GlossaryTerm:t}=r;return n||a("DictionaryLink",!0),t||a("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"peek-char"})," ",(0,i.jsx)(t,{term:"function",children:(0,i.jsx)("i",{children:"Function"})})," ",(0,i.jsx)(r.strong,{children:"Syntax:"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{term:"peek-char",children:(0,i.jsx)("b",{children:"peek-char"})})," &optional ",(0,i.jsx)(r.em,{children:"peek-type input-stream eof-error-p eof-value recursive-p"})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"peek-type"}),"\u2014a ",(0,i.jsx)(t,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," or ",(0,i.jsx)(n,{term:"t",children:(0,i.jsx)("b",{children:"t"})})," or ",(0,i.jsx)(n,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:"\u2192 char"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"input-stream"}),"\u2014",(0,i.jsx)(r.em,{children:"input stream designator"})," . The default is ",(0,i.jsx)(t,{styled:!0,term:"standard input",children:(0,i.jsx)("i",{children:"standard input"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"eof-error-p"}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"generalized boolean",children:(0,i.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,i.jsx)(t,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"eof-value"}),"\u2014an ",(0,i.jsx)(t,{term:"object",children:(0,i.jsx)("i",{children:"object"})}),". The default is ",(0,i.jsx)(n,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"recursive-p"}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"generalized boolean",children:(0,i.jsx)("i",{children:"generalized boolean"})}),". The default is ",(0,i.jsx)(t,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),"."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"char"}),"\u2014a ",(0,i.jsx)(t,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," or the ",(0,i.jsx)(r.em,{children:"eof-value"}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{term:"peek-char",children:(0,i.jsx)("b",{children:"peek-char"})})," obtains the next character in ",(0,i.jsx)(r.em,{children:"input-stream"})," without actually reading it, thus leaving the character to be read at a later time. It can also be used to skip over and discard intervening characters in the ",(0,i.jsx)(r.em,{children:"input-stream"})," until a particular character is found."]}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(r.em,{children:"peek-type"})," is not supplied or ",(0,i.jsx)(n,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", ",(0,i.jsx)(n,{term:"peek-char",children:(0,i.jsx)("b",{children:"peek-char"})})," returns the next character to be read from ",(0,i.jsx)(r.em,{children:"input-stream"}),", without actually removing it from ",(0,i.jsx)(r.em,{children:"input-stream"}),". The next time input is done from ",(0,i.jsx)(r.em,{children:"input-stream"}),", the character will still be there. If ",(0,i.jsx)(r.em,{children:"peek-type"})," is ",(0,i.jsx)(n,{term:"t",children:(0,i.jsx)("b",{children:"t"})}),", then ",(0,i.jsx)(n,{term:"peek-char",children:(0,i.jsx)("b",{children:"peek-char"})})," skips over ",(0,i.jsx)(t,{term:"whitespace",children:(0,i.jsx)("i",{children:"whitespace"})}),(0,i.jsx)("sub",{children:"2"})," ",(0,i.jsx)(t,{term:"character",children:(0,i.jsx)("i",{children:"characters"})}),", but not comments, and then performs the peeking operation on the next character. The last character examined, the one that starts an ",(0,i.jsx)(t,{term:"object",children:(0,i.jsx)("i",{children:"object"})}),", is not removed from ",(0,i.jsx)(r.em,{children:"input-stream"}),". If ",(0,i.jsx)(r.em,{children:"peek-type"})," is a ",(0,i.jsx)(t,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," , then ",(0,i.jsx)(n,{term:"peek-char",children:(0,i.jsx)("b",{children:"peek-char"})})," skips over input characters until a character that is ",(0,i.jsx)(n,{term:"char=",children:(0,i.jsx)("b",{children:"char="})})," to that ",(0,i.jsx)(t,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," is found; that character is left in ",(0,i.jsx)(r.em,{children:"input-stream"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["If an ",(0,i.jsx)(t,{styled:!0,term:"end of file",children:(0,i.jsx)("i",{children:"end of file"})}),(0,i.jsx)("sub",{children:"2"})," occurs and ",(0,i.jsx)(r.em,{children:"eof-error-p"})," is ",(0,i.jsx)(t,{term:"false",children:(0,i.jsx)("i",{children:"false"})}),", ",(0,i.jsx)(r.em,{children:"eof-value"})," is returned."]}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(r.em,{children:"recursive-p"})," is ",(0,i.jsx)(t,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),", this call is expected to be embedded in a higher-level call to ",(0,i.jsx)(n,{term:"read",children:(0,i.jsx)("b",{children:"read"})})," or a similar ",(0,i.jsx)(t,{term:"function",children:(0,i.jsx)("i",{children:"function"})})," used by the ",(0,i.jsx)(r.em,{children:"Lisp reader"})," ."]}),"\n",(0,i.jsxs)(r.p,{children:["When ",(0,i.jsx)(r.em,{children:"input-stream"})," is an ",(0,i.jsx)(t,{styled:!0,term:"echo stream",children:(0,i.jsx)("i",{children:"echo stream"})}),", characters that are only peeked at are not echoed. In the case that ",(0,i.jsx)(r.em,{children:"peek-type"})," is not ",(0,i.jsx)(n,{term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", the characters that are passed by ",(0,i.jsx)(n,{term:"peek-char",children:(0,i.jsx)("b",{children:"peek-char"})})," are treated as if by ",(0,i.jsx)(n,{term:"read-char",children:(0,i.jsx)("b",{children:"read-char"})}),", and so are echoed unless they have been marked otherwise by ",(0,i.jsx)(n,{term:"unread-char",children:(0,i.jsx)("b",{children:"unread-char"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:'(with-input-from-string (input-stream " 1 2 3 4 5") \n  (format t "~S ~S ~S" \n\t  (peek-char t input-stream) \n\t  \n\t  \n\t  (peek-char #\\4 input-stream) \n\t  (peek-char nil input-stream))) \n\u25b7 #\\1 #\\4 #\\4 \n\u2192 NIL \n'})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{term:"readtable",children:(0,i.jsx)("b",{children:"*readtable*"})}),", ",(0,i.jsx)(r.strong,{children:"*standard-input*"}),", ",(0,i.jsx)(n,{term:"terminal-io",children:(0,i.jsx)("b",{children:"*terminal-io*"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(r.em,{children:"eof-error-p"})," is ",(0,i.jsx)(t,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," and an ",(0,i.jsx)(t,{styled:!0,term:"end of file",children:(0,i.jsx)("i",{children:"end of file"})}),(0,i.jsx)("sub",{children:"2"})," occurs an error of ",(0,i.jsx)(t,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{term:"end-of-file",children:(0,i.jsx)("b",{children:"end-of-file"})})," is signaled."]}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(r.em,{children:"peek-type"})," is a ",(0,i.jsx)(t,{term:"character",children:(0,i.jsx)("i",{children:"character"})})," , an ",(0,i.jsx)(t,{styled:!0,term:"end of file",children:(0,i.jsx)("i",{children:"end of file"})}),(0,i.jsx)("sub",{children:"2"})," occurs, and ",(0,i.jsx)(r.em,{children:"eof-error-p"})," is ",(0,i.jsx)(t,{term:"true",children:(0,i.jsx)("i",{children:"true"})}),", an error of ",(0,i.jsx)(t,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{term:"end-of-file",children:(0,i.jsx)("b",{children:"end-of-file"})})," is signaled."]}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(r.em,{children:"recursive-p"})," is ",(0,i.jsx)(t,{term:"true",children:(0,i.jsx)("i",{children:"true"})})," and an ",(0,i.jsx)(t,{styled:!0,term:"end of file",children:(0,i.jsx)("i",{children:"end of file"})}),(0,i.jsx)("sub",{children:"2"})," occurs, an error of ",(0,i.jsx)(t,{term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{term:"end-of-file",children:(0,i.jsx)("b",{children:"end-of-file"})})," is signaled."]})]})}function s(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}function a(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const d={title:"peek-char"},l="peek-char",h={id:"chap-21/cb-c-dictionary/peek-char_function",title:"peek-char",description:"Expanded Reference: peek-char",source:"@site/docs/chap-21/cb-c-dictionary/peek-char_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/peek-char_function",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/peek-char_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/peek-char_function.md",tags:[],version:"current",frontMatter:{title:"peek-char"},sidebar:"tutorialSidebar",previous:{title:"open",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/open_function"},next:{title:"read-byte",permalink:"/cl-language-reference/chap-21/cb-c-dictionary/read-byte_function"}},o={},x=[{value:"Expanded Reference: peek-char",id:"expanded-reference-peek-char",level:2}];function p(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"peek-char",children:"peek-char"}),"\n","\n","\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(r.h2,{id:"expanded-reference-peek-char",children:"Expanded Reference: peek-char"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:"(peek-char )\n"})})]})}function j(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>s});var i=n(67294);const c={},t=i.createContext(c);function s(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);