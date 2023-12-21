"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[39246],{16184:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>h,toc:()=>o});var s=r(85893),c=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"peek-char"})," ",(0,s.jsx)(n.em,{children:"Function"})," ",(0,s.jsx)(n.strong,{children:"Syntax:"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"peek-char"})," &optional ",(0,s.jsx)(n.em,{children:"peek-type input-stream eof-error-p eof-value recursive-p"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"peek-type"}),"\u2014a ",(0,s.jsx)(n.em,{children:"character"})," or ",(0,s.jsx)(n.strong,{children:"t"})," or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"\u2192 char"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"input-stream"}),"\u2014",(0,s.jsx)(n.em,{children:"input stream designator"})," . The default is ",(0,s.jsx)(n.em,{children:"standard input"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"eof-error-p"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"eof-value"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),". The default is ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"recursive-p"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"char"}),"\u2014a ",(0,s.jsx)(n.em,{children:"character"})," or the ",(0,s.jsx)(n.em,{children:"eof-value"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"peek-char"})," obtains the next character in ",(0,s.jsx)(n.em,{children:"input-stream"})," without actually reading it, thus leaving the character to be read at a later time. It can also be used to skip over and discard intervening characters in the ",(0,s.jsx)(n.em,{children:"input-stream"})," until a particular character is found."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"peek-type"})," is not supplied or ",(0,s.jsx)(n.strong,{children:"nil"}),", ",(0,s.jsx)(n.strong,{children:"peek-char"})," returns the next character to be read from ",(0,s.jsx)(n.em,{children:"input-stream"}),", without actually removing it from ",(0,s.jsx)(n.em,{children:"input-stream"}),". The next time input is done from ",(0,s.jsx)(n.em,{children:"input-stream"}),", the character will still be there. If ",(0,s.jsx)(n.em,{children:"peek-type"})," is ",(0,s.jsx)(n.strong,{children:"t"}),", then ",(0,s.jsx)(n.strong,{children:"peek-char"})," skips over ",(0,s.jsx)(n.em,{children:"whitespace"}),(0,s.jsx)("sub",{children:"2"})," ",(0,s.jsx)(n.em,{children:"characters"}),", but not comments, and then performs the peeking operation on the next character. The last character examined, the one that starts an ",(0,s.jsx)(n.em,{children:"object"}),", is not removed from ",(0,s.jsx)(n.em,{children:"input-stream"}),". If ",(0,s.jsx)(n.em,{children:"peek-type"})," is a ",(0,s.jsx)(n.em,{children:"character"})," , then ",(0,s.jsx)(n.strong,{children:"peek-char"})," skips over input characters until a character that is ",(0,s.jsx)(n.strong,{children:"char="})," to that ",(0,s.jsx)(n.em,{children:"character"})," is found; that character is left in ",(0,s.jsx)(n.em,{children:"input-stream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If an ",(0,s.jsx)(n.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"2"})," occurs and ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"false"}),", ",(0,s.jsx)(n.em,{children:"eof-value"})," is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"recursive-p"})," is ",(0,s.jsx)(n.em,{children:"true"}),", this call is expected to be embedded in a higher-level call to ",(0,s.jsx)(n.strong,{children:"read"})," or a similar ",(0,s.jsx)(n.em,{children:"function"})," used by the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.em,{children:"input-stream"})," is an ",(0,s.jsx)(n.em,{children:"echo stream"}),", characters that are only peeked at are not echoed. In the case that ",(0,s.jsx)(n.em,{children:"peek-type"})," is not ",(0,s.jsx)(n.strong,{children:"nil"}),", the characters that are passed by ",(0,s.jsx)(n.strong,{children:"peek-char"})," are treated as if by ",(0,s.jsx)(n.strong,{children:"read-char"}),", and so are echoed unless they have been marked otherwise by ",(0,s.jsx)(n.strong,{children:"unread-char"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:'\n(with-input-from-string (input-stream " 1 2 3 4 5") \n  (format t "~S ~S ~S" \n\t  (peek-char t input-stream) \n\n\t  \n\t  \n\t  (peek-char #\\4 input-stream) \n\t  (peek-char nil input-stream))) \n\u25b7 #\\1 #\\4 #\\4 \n\u2192 NIL \n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"*readtable*"}),", ",(0,s.jsx)(n.strong,{children:"*standard-input*"}),", ",(0,s.jsx)(n.strong,{children:"*terminal-io*"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"true"})," and an ",(0,s.jsx)(n.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"2"})," occurs an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"peek-type"})," is a ",(0,s.jsx)(n.em,{children:"character"})," , an ",(0,s.jsx)(n.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"2"})," occurs, and ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"true"}),", an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"recursive-p"})," is ",(0,s.jsx)(n.em,{children:"true"})," and an ",(0,s.jsx)(n.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"2"})," occurs, an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled."]})]})}function i(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}const a={title:"peek-char"},d="peek-char",h={id:"chap-21/cb-c-dictionary/peek-char_function",title:"peek-char",description:"Expanded Reference: peek-char",source:"@site/docs/chap-21/cb-c-dictionary/peek-char_function.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/peek-char_function",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/peek-char_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/peek-char_function.md",tags:[],version:"current",frontMatter:{title:"peek-char"},sidebar:"tutorialSidebar",previous:{title:"open",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/open_function"},next:{title:"read-byte",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/read-byte_function"}},l={},o=[{value:"Expanded Reference: peek-char",id:"expanded-reference-peek-char",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"peek-char",children:"peek-char"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-peek-char",children:"Expanded Reference: peek-char"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(peek-char )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var s=r(67294);const c={},t=s.createContext(c);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);