"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[15246],{69337:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var i=r(85893),s=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dribble"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dribble"})," &optional ",(0,i.jsx)(n.em,{children:"pathname \u2192 implementation-dependent"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"pathname"}),"\u2014a ",(0,i.jsx)(n.em,{children:"pathname designator"})," ."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Either ",(0,i.jsx)(n.em,{children:"binds"})," ",(0,i.jsx)(n.strong,{children:"*standard-input*"})," and ",(0,i.jsx)(n.strong,{children:"*standard-output*"})," or takes other appropriate action, so as to send a record of the input/output interaction to a file named by ",(0,i.jsx)(n.em,{children:"pathname"}),". ",(0,i.jsx)(n.strong,{children:"dribble"})," is intended to create a readable record of an interactive session."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"pathname"})," is a ",(0,i.jsx)(n.em,{children:"logical pathname"}),", it is translated into a physical pathname as if by calling ",(0,i.jsx)(n.strong,{children:"translate-logical-pathname"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"(dribble) terminates the recording of input and output and closes the dribble file."}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.strong,{children:"dribble"})," is ",(0,i.jsx)(n.em,{children:"called"})," while a ",(0,i.jsx)(n.em,{children:"stream"})," to a \u201cdribble file\u201d is still open from a previous ",(0,i.jsx)(n.em,{children:"call"})," to ",(0,i.jsx)(n.strong,{children:"dribble"}),", the effect is ",(0,i.jsx)(n.em,{children:"implementation-defined"}),". For example, the already-",(0,i.jsx)(n.em,{children:"open stream"})," might be ",(0,i.jsx)(n.em,{children:"closed"}),", or dribbling might occur both to the old ",(0,i.jsx)(n.em,{children:"stream"})," and to a new one, or the old ",(0,i.jsx)(n.em,{children:"stream"})," might stay open but not receive any further output, or the new request might be ignored, or some other action might be taken."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"implementation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["If a failure occurs when performing some operation on the ",(0,i.jsx)(n.em,{children:"file system"})," while creating the dribble file, an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"file-error"})," is signaled."]}),"\n",(0,i.jsxs)(n.p,{children:["An error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"file-error"})," might be signaled if ",(0,i.jsx)(n.em,{children:"pathname"})," is a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"wild pathname"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsx)(n.p,{children:"Section 19.1.2 (Pathnames as Filenames)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dribble"})," can return before subsequent ",(0,i.jsx)(n.em,{children:"forms"})," are executed. It also can enter a recursive interaction loop, returning only when (dribble) is done."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dribble"})," is intended primarily for interactive debugging; its effect cannot be relied upon when used in a program."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"\u2212 Variable"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Value Type:"})}),"\n",(0,i.jsxs)(n.p,{children:["a ",(0,i.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Initial Value:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"value"})," of ",(0,i.jsx)(n.strong,{children:"-"})," is the ",(0,i.jsx)(n.em,{children:"form"})," that is currently being evaluated by the ",(0,i.jsx)(n.em,{children:"Lisp read-eval-print loop"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:'\n(format t "~&Evaluating ~S~%" -) \n\u25b7 Evaluating (FORMAT T "~&Evaluating ~S~%" -) \n\u2192 NIL \n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Lisp read-eval-print loop"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"+"})," (",(0,i.jsx)(n.em,{children:"variable"}),"), ",(0,i.jsx)(n.strong,{children:"*"})," (",(0,i.jsx)(n.em,{children:"variable"}),"), ",(0,i.jsx)(n.strong,{children:"/"})," (",(0,i.jsx)(n.em,{children:"variable"}),"), Section 25.1.1 (Top level loop)"]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const c={title:"dribble"},d="dribble",a={id:"chap-25/cf-c-dictionary/dribble_function",title:"dribble",description:"Expanded Reference: dribble",source:"@site/docs/chap-25/cf-c-dictionary/dribble_function.md",sourceDirName:"chap-25/cf-c-dictionary",slug:"/chap-25/cf-c-dictionary/dribble_function",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/dribble_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-25/cf-c-dictionary/dribble_function.md",tags:[],version:"current",frontMatter:{title:"dribble"},sidebar:"tutorialSidebar",previous:{title:"disassemble",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/disassemble_function"},next:{title:"ed",permalink:"/cl-language-reference/docs/chap-25/cf-c-dictionary/ed_function"}},o={},h=[{value:"Expanded Reference: dribble",id:"expanded-reference-dribble",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dribble",children:"dribble"}),"\n","\n","\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-dribble",children:"Expanded Reference: dribble"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(dribble )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>l});var i=r(67294);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);