"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[18573],{90046:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var s=r(85893),i=r(11151);function a(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled. ",(0,s.jsx)(n.strong,{children:"read-char"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-char"})," &optional ",(0,s.jsx)(n.em,{children:"input-stream eof-error-p eof-value recursive-p \u2192 char"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"input-stream"}),"\u2014an ",(0,s.jsx)(n.em,{children:"input stream designator"})," . The default is ",(0,s.jsx)(n.em,{children:"standard input"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"eof-error-p"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"eof-value"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),". The default is ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"recursive-p"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"char"}),"\u2014a ",(0,s.jsx)(n.em,{children:"character"})," or the ",(0,s.jsx)(n.em,{children:"eof-value"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-char"})," returns the next ",(0,s.jsx)(n.em,{children:"character"})," from ",(0,s.jsx)(n.em,{children:"input-stream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.em,{children:"input-stream"})," is an ",(0,s.jsx)(n.em,{children:"echo stream"}),", the character is echoed on ",(0,s.jsx)(n.em,{children:"input-stream"})," the first time the character is seen. Characters that are not echoed by ",(0,s.jsx)(n.strong,{children:"read-char"})," are those that were put there by ",(0,s.jsx)(n.strong,{children:"unread-char"})," and hence are assumed to have been echoed already by a previous call to ",(0,s.jsx)(n.strong,{children:"read-char"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"recursive-p"})," is ",(0,s.jsx)(n.em,{children:"true"}),", this call is expected to be embedded in a higher-level call to ",(0,s.jsx)(n.strong,{children:"read"})," or a similar ",(0,s.jsx)(n.em,{children:"function"})," used by the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:["If an ",(0,s.jsx)(n.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"2"})," occurs and ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"false"}),", ",(0,s.jsx)(n.em,{children:"eof-value"})," is returned."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(with-input-from-string (is "0123") \n\n\n\n(do ((c (read-char is) (read-char is nil \u2019the-end))) \n\n\n\n((not (characterp c))) \n\n\n\n(format t "~S " c))) \n\n\n\n\u25b7 #\\0 #\\1 #\\2 #\\3 \n\n\n\n*\u2192* NIL \n\n\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"*standard-input*"}),", ",(0,s.jsx)(n.strong,{children:"*terminal-io*"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["If an ",(0,s.jsx)(n.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"2"})," occurs before a character can be read, and ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"true"}),", an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-byte"}),", ",(0,s.jsx)(n.strong,{children:"read-sequence"}),", ",(0,s.jsx)(n.strong,{children:"write-char"}),", ",(0,s.jsx)(n.strong,{children:"read"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["The corresponding output function is ",(0,s.jsx)(n.strong,{children:"write-char"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-char-no-hang"})," ",(0,s.jsx)(n.em,{children:"Function"})," ",(0,s.jsx)(n.strong,{children:"Syntax:"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-char-no-hang"})," &optional ",(0,s.jsx)(n.em,{children:"input-stream eof-error-p eof-value recursive-p"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u2192 char"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"input-stream"})," \u2013 an ",(0,s.jsx)(n.em,{children:"input stream designator"})," . The default is ",(0,s.jsx)(n.em,{children:"standard input"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"eof-error-p"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(n.em,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"eof-value"}),"\u2014an ",(0,s.jsx)(n.em,{children:"object"}),". The default is ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"recursive-p"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),". The default is ",(0,s.jsx)(n.em,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"char"}),"\u2014a ",(0,s.jsx)(n.em,{children:"character"})," or ",(0,s.jsx)(n.strong,{children:"nil"})," or the ",(0,s.jsx)(n.em,{children:"eof-value"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-char-no-hang"})," returns a character from ",(0,s.jsx)(n.em,{children:"input-stream"})," if such a character is available. If no character is available, ",(0,s.jsx)(n.strong,{children:"read-char-no-hang"})," returns ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"recursive-p"})," is ",(0,s.jsx)(n.em,{children:"true"}),", this call is expected to be embedded in a higher-level call to ",(0,s.jsx)(n.strong,{children:"read"})," or a similar ",(0,s.jsx)(n.em,{children:"function"})," used by the ",(0,s.jsx)(n.em,{children:"Lisp reader"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:["If an ",(0,s.jsx)(n.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"2"})," occurs and ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"false"}),", ",(0,s.jsx)(n.em,{children:"eof-value"})," is returned."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:" \n\n\n\n;; This code assumes an implementation in which a newline is not \n\n\n\n;; required to terminate input from the console. \n\n\n\n(defun test-it () \n\n\n\n(unread-char (read-char)) \n\n\n\n(list (read-char-no-hang) \n\n\n\n(read-char-no-hang) \n\n\n\n(read-char-no-hang))) \n\n\n\n*\u2192* TEST-IT \n\n\n\n;; Implementation A, where a Newline is not required to terminate \n\n\n\n;; interactive input on the console. \n\n\n\n(test-it) \n\n\n\n\u25b7 a \n\n\n\n*\u2192* (#\\a NIL NIL) \n\n\n\n;; Implementation B, where a Newline is required to terminate \n\n\n\n;; interactive input on the console, and where that Newline remains \n\n\n\n;; on the input stream. \n\n\n\n(test-it) \n\n\n\n\u25b7 a*\u2190-* \n\n\n\n*\u2192* (#\\a #\\Newline NIL) \n\n\n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"*standard-input*"}),", ",(0,s.jsx)(n.strong,{children:"*terminal-io*"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["If an ",(0,s.jsx)(n.em,{children:"end of file"}),(0,s.jsx)("sub",{children:"2"})," occurs when ",(0,s.jsx)(n.em,{children:"eof-error-p"})," is ",(0,s.jsx)(n.em,{children:"true"}),", an error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"end-of-file"})," is signaled . ",(0,s.jsx)(n.strong,{children:"See Also:"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"listen"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"read-char-no-hang"})," is exactly like ",(0,s.jsx)(n.strong,{children:"read-char"}),", except that if it would be necessary to wait in order to get a character (as from a keyboard), ",(0,s.jsx)(n.strong,{children:"nil"})," is immediately returned without waiting."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"terpri, fresh-line"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}const d={},l="end-of-file** is signaled. **read-char",t={id:"chap-21/cb-c-dictionary/endoffileaaaisasignaledaaaareadchar",title:"end-of-file** is signaled. **read-char",description:"Expanded Reference: end-of-file is signaled. read-char",source:"@site/docs/chap-21/cb-c-dictionary/endoffileaaaisasignaledaaaareadchar.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/endoffileaaaisasignaledaaaareadchar",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/endoffileaaaisasignaledaaaareadchar",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/endoffileaaaisasignaledaaaareadchar.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"end-of-file",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/endoffile"},next:{title:"file-length",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/filelength"}},h={},o=[{value:"Expanded Reference: end-of-file** is signaled. **read-char",id:"expanded-reference-end-of-file-is-signaled-read-char",level:2}];function x(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"end-of-file-is-signaled-read-char",children:"end-of-file** is signaled. **read-char"}),"\n","\n","\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-end-of-file-is-signaled-read-char",children:"Expanded Reference: end-of-file** is signaled. **read-char"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(end-of-file** is signaled. **read-char )\n"})})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var s=r(67294);const i={},a=s.createContext(i);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);