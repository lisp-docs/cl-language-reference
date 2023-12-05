"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[25654],{39230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=t(85893),o=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"finish-output, force-output, clear-output"})," ",(0,r.jsx)(n.em,{children:"Function"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"finish-output"})," &optional ",(0,r.jsx)(n.em,{children:"output-stream \u2192"})," ",(0,r.jsx)(n.strong,{children:"nil"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"force-output"})," &optional ",(0,r.jsx)(n.em,{children:"output-stream \u2192"})," ",(0,r.jsx)(n.strong,{children:"nil"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"clear-output"})," &optional ",(0,r.jsx)(n.em,{children:"output-stream \u2192"})," ",(0,r.jsx)(n.strong,{children:"nil"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"output-stream"}),"\u2014an ",(0,r.jsx)(n.em,{children:"output stream designator"})," . The default is ",(0,r.jsx)(n.em,{children:"standard output"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"finish-output"}),", ",(0,r.jsx)(n.strong,{children:"force-output"}),", and ",(0,r.jsx)(n.strong,{children:"clear-output"})," exercise control over the internal handling of buffered stream output."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"finish-output"})," attempts to ensure that any buffered output sent to ",(0,r.jsx)(n.em,{children:"output-stream"})," has reached its destination, and then returns."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"force-output"})," initiates the emptying of any internal buffers but does not wait for completion or acknowledgment to return."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"clear-output"})," attempts to abort any outstanding output operation in progress in order to allow as little output as possible to continue to the destination."]}),"\n",(0,r.jsxs)(n.p,{children:["If any of these operations does not make sense for ",(0,r.jsx)(n.em,{children:"output-stream"}),", then it does nothing. The precise actions of these ",(0,r.jsx)(n.em,{children:"functions"})," are ",(0,r.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n;; Implementation A \n\n\n\n(progn (princ "am i seen?") (clear-output)) \n\n\n\n*\u2192* NIL \n\n\n\n;; Implementation B \n\n\n\n(progn (princ "am i seen?") (clear-output)) \n\n\n\n\u25b7 am i seen? \n\n\n\n*\u2192* NIL \n\n\n\n\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"*standard-output*"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,r.jsxs)(n.p,{children:["Should signal an error of ",(0,r.jsx)(n.em,{children:"type"})," ",(0,r.jsx)(n.strong,{children:"type-error"})," if ",(0,r.jsx)(n.em,{children:"output-stream"})," is not a ",(0,r.jsx)(n.em,{children:"stream designator"})," ."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"clear-input"})})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const c={},u="finish-output, force-output, clear-output",a={id:"chap-21/cb-c-dictionary/finishoutput",title:"finish-output, force-output, clear-output",description:"Expanded Reference: finish-output, force-output, clear-output",source:"@site/docs/chap-21/cb-c-dictionary/finishoutput.md",sourceDirName:"chap-21/cb-c-dictionary",slug:"/chap-21/cb-c-dictionary/finishoutput",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/finishoutput",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-21/cb-c-dictionary/finishoutput.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"file-string-length",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/filestringlength"},next:{title:"get-output-stream-string",permalink:"/cl-language-reference/docs/chap-21/cb-c-dictionary/getoutputstreamstring"}},p={},l=[{value:"Expanded Reference: finish-output, force-output, clear-output",id:"expanded-reference-finish-output-force-output-clear-output",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"finish-output-force-output-clear-output",children:"finish-output, force-output, clear-output"}),"\n","\n","\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"expanded-reference-finish-output-force-output-clear-output",children:"Expanded Reference: finish-output, force-output, clear-output"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lisp",children:"(finish-output, force-output, clear-output )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(67294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);