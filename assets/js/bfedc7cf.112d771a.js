"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[34810],{40569:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var s=i(85893),t=i(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"file-position"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"file-position"})," ",(0,s.jsx)(n.em,{children:"stream \u2192 position"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"file-position"})," ",(0,s.jsx)(n.em,{children:"stream position-spec \u2192 success-p"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"stream"}),"\u2014a ",(0,s.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"position-spec"}),"\u2014a ",(0,s.jsx)(n.em,{children:"file position designator"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"position"}),"\u2014a ",(0,s.jsx)(n.em,{children:"file position"})," or ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"success-p"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns or changes the current position within a ",(0,s.jsx)(n.em,{children:"stream"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.em,{children:"position-spec"})," is not supplied, ",(0,s.jsx)(n.strong,{children:"file-position"})," returns the current ",(0,s.jsx)(n.em,{children:"file position"})," in the ",(0,s.jsx)(n.em,{children:"stream"}),", or ",(0,s.jsx)(n.strong,{children:"nil"})," if this cannot be determined."]}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.em,{children:"position-spec"})," is supplied, the ",(0,s.jsx)(n.em,{children:"file position"})," in ",(0,s.jsx)(n.em,{children:"stream"})," is set to that ",(0,s.jsx)(n.em,{children:"file position"})," (if possible). ",(0,s.jsx)(n.strong,{children:"file-position"})," returns ",(0,s.jsx)(n.em,{children:"true"})," if the repositioning is performed successfully, or ",(0,s.jsx)(n.em,{children:"false"})," if it is not."]}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.em,{children:"integer"})," returned by ",(0,s.jsx)(n.strong,{children:"file-position"})," of one argument should be acceptable as ",(0,s.jsx)(n.em,{children:"position-spec"})," for use with the same file."]}),"\n",(0,s.jsxs)(n.p,{children:["For a character file, performing a single ",(0,s.jsx)(n.strong,{children:"read-char"})," or ",(0,s.jsx)(n.strong,{children:"write-char"})," operation may cause the file position to be increased by more than 1 because of character-set translations (such as translating between the Common Lisp #\\Newline character and an external ASCII carriage-return/line-feed"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"file-position"})}),"\n",(0,s.jsxs)(n.p,{children:["sequence) and other aspects of the implementation. For a binary file, every ",(0,s.jsx)(n.strong,{children:"read-byte"})," or ",(0,s.jsx)(n.strong,{children:"write-byte"})," operation increases the file position by 1."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(defun tester () \n\n\n\n(let ((noticed \u2019()) file-written) \n\n\n\n(flet ((notice (x) (push x noticed) x)) \n\n\n\n(with-open-file (s "test.bin" \n\n\n\n:element-type \u2019(unsigned-byte 8) \n\n\n\n:direction :output \n\n\n\n:if-exists :error) \n\n\n\n(notice (file-position s)) ;1 \n\n\n\n(write-byte 5 s) \n\n\n\n(write-byte 6 s) \n\n\n\n(let ((p (file-position s))) \n\n\n\n(notice p) ;2 \n\n\n\n(notice (when p (file-position s (1- p))))) ;3 \n\n\n\n(write-byte 7 s) \n\n\n\n(notice (file-position s)) ;4 \n\n\n\n(setq file-written (truename s))) \n\n\n\n(with-open-file (s file-written \n\n\n\n:element-type \u2019(unsigned-byte 8) \n\n\n\n:direction :input) \n\n\n\n(notice (file-position s)) ;5 \n\n\n\n(let ((length (file-length s))) \n\n\n\n(notice length) ;6 \n\n\n\n(when length \n\n\n\n(dotimes (i length) \n\n\n\n(notice (read-byte s)))))) ;7,... \n\n\n\n(nreverse noticed)))) \n\n\n\n*\u2192* tester \n\n\n\n(tester) \n\n\n\n*\u2192* (0 2 T 2 0 2 5 7) \n\n\n\n<i><sup>or</sup>\u2192</i> (0 2 NIL 3 0 3 5 6 7) \n\n\n\n<i><sup>or</sup>\u2192</i> (NIL NIL NIL NIL NIL NIL) \n\n\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.em,{children:"position-spec"})," argument is supplied, the ",(0,s.jsx)(n.em,{children:"file position"})," in the ",(0,s.jsx)(n.em,{children:"stream"})," might be moved."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,s.jsxs)(n.p,{children:["The value returned by ",(0,s.jsx)(n.strong,{children:"file-position"})," increases monotonically as input or output operations are performed."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"position-spec"})," is supplied, but is too large or otherwise inappropriate, an error is signaled."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"file-length"}),", ",(0,s.jsx)(n.strong,{children:"file-string-length"}),", ",(0,s.jsx)(n.strong,{children:"open"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.p,{children:["Implementations that have character files represented as a sequence of records of bounded size might choose to encode the file position as, for example, \u27e8record-number \u27e9*\u27e8max-record size\u27e9+\u27e8character-within-record\u27e9. This is a valid encoding because it increases monotonically as each character is read or written, though not necessarily by 1 at each step. An ",(0,s.jsx)(n.em,{children:"integer"})," might then be considered \u201cinappropriate\u201d as ",(0,s.jsx)(n.em,{children:"position-spec"})," to ",(0,s.jsx)(n.strong,{children:"file-position"})," if, when decoded into record number and character number, it turned out that the supplied record was too short for the specified character number."]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}const c={},l="file-position",d={id:"chap-21/cb-c-dictionary/fileposition",title:"file-position",description:"Expanded Reference: file-position",source:"@site/docs/chap-21/cb-c-dictionary/fileposition.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/fileposition",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/fileposition",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/fileposition.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"file-length",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/filelength"},next:{title:"file-stream",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/filestream"}},a={},p=[{value:"Expanded Reference: file-position",id:"expanded-reference-file-position",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"file-position",children:"file-position"}),"\n","\n","\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-file-position",children:"Expanded Reference: file-position"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(file-position )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>o});var s=i(67294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);