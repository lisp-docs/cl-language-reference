"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[61331],{43888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=t(85893),a=t(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"compile-file-pathname"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"compile-file-pathname"})," ",(0,i.jsx)(n.em,{children:"input-file"})," &key ",(0,i.jsx)(n.em,{children:"output-file"})," &allow-other-keys \u2192 pathname"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"input-file"}),"\u2014a ",(0,i.jsx)(n.em,{children:"pathname designator"})," . (Default fillers for unspecified components are taken from ",(0,i.jsx)(n.strong,{children:"*default-pathname-defaults*"}),".)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"output-file"}),"\u2014a ",(0,i.jsx)(n.em,{children:"pathname designator"})," . The default is ",(0,i.jsx)(n.em,{children:"implementation-defined"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"pathname"}),"\u2014a ",(0,i.jsx)(n.em,{children:"pathname"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns the ",(0,i.jsx)(n.em,{children:"pathname"})," that ",(0,i.jsx)(n.strong,{children:"compile-file"})," would write into, if given the same arguments."]}),"\n",(0,i.jsxs)(n.p,{children:["The defaults for the ",(0,i.jsx)(n.em,{children:"output-file"})," are taken from the ",(0,i.jsx)(n.em,{children:"pathname"})," that results from merging the ",(0,i.jsx)(n.em,{children:"input-file"})," with the ",(0,i.jsx)(n.em,{children:"value"})," of ",(0,i.jsx)(n.strong,{children:"*default-pathname-defaults*"}),", except that the type component should default to the appropriate ",(0,i.jsx)(n.em,{children:"implementation-defined"})," default type for ",(0,i.jsx)(n.em,{children:"compiled files"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"input-file"})," is a ",(0,i.jsx)(n.em,{children:"logical pathname"})," and ",(0,i.jsx)(n.em,{children:"output-file"})," is unsupplied, the result is a ",(0,i.jsx)(n.em,{children:"logical pathname"}),". If ",(0,i.jsx)(n.em,{children:"input-file"})," is a ",(0,i.jsx)(n.em,{children:"logical pathname"}),", it is translated into a physical pathname as if by calling ",(0,i.jsx)(n.strong,{children:"translate-logical-pathname"}),". If ",(0,i.jsx)(n.em,{children:"input-file"})," is a ",(0,i.jsx)(n.em,{children:"stream"}),", the ",(0,i.jsx)(n.em,{children:"stream"})," can be either open or closed. ",(0,i.jsx)(n.strong,{children:"compile-file-pathname"})," returns the same ",(0,i.jsx)(n.em,{children:"pathname"})," after a file is closed as it did when the file was open. It is an error if ",(0,i.jsx)(n.em,{children:"input-file"})," is a ",(0,i.jsx)(n.em,{children:"stream"})," that is created with ",(0,i.jsx)(n.strong,{children:"make-two-way-stream"}),", ",(0,i.jsx)(n.strong,{children:"make-echo-stream"}),", ",(0,i.jsx)(n.strong,{children:"make-broadcast-stream"}),", ",(0,i.jsx)(n.strong,{children:"make-concatenated-stream"}),", ",(0,i.jsx)(n.strong,{children:"make-string-input-stream"}),", ",(0,i.jsx)(n.strong,{children:"make-string-output-stream"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If an implementation supports additional keyword arguments to ",(0,i.jsx)(n.strong,{children:"compile-file"}),", ",(0,i.jsx)(n.strong,{children:"compile-file-pathname"})," must accept the same arguments."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"\nSee **logical-pathname-translations**. \n\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["An error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"file-error"})," might be signaled if either ",(0,i.jsx)(n.em,{children:"input-file"})," or ",(0,i.jsx)(n.em,{children:"output-file"})," is ",(0,i.jsx)(n.em,{children:"wild"}),". ",(0,i.jsx)(n.strong,{children:"See Also:"})]}),"\n",(0,i.jsx)(n.p,{children:"System"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"compile-file"}),", ",(0,i.jsx)(n.strong,{children:"pathname"}),", ",(0,i.jsx)(n.strong,{children:"logical-pathname"}),", Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames)"]})]})}function s(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}const l={title:"compile-file-pathname"},c="compile-file-pathname",o={id:"chap-24/ce-c-dictionary/compile-file-pathname_function",title:"compile-file-pathname",description:"Expanded Reference: compile-file-pathname",source:"@site/docs/chap-24/ce-c-dictionary/compile-file-pathname_function.md",sourceDirName:"chap-24/ce-c-dictionary",slug:"/chap-24/ce-c-dictionary/compile-file-pathname_function",permalink:"/cl-language-reference/docs/chap-24/ce-c-dictionary/compile-file-pathname_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-24/ce-c-dictionary/compile-file-pathname_function.md",tags:[],version:"current",frontMatter:{title:"compile-file-pathname"},sidebar:"tutorialSidebar",previous:{title:"24.2 System Construction Dictionary",permalink:"/cl-language-reference/docs/category/242-system-construction-dictionary"},next:{title:"compile-file-truename",permalink:"/cl-language-reference/docs/chap-24/ce-c-dictionary/compile-file-truename_variable"}},p={},d=[{value:"Expanded Reference: compile-file-pathname",id:"expanded-reference-compile-file-pathname",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"compile-file-pathname",children:"compile-file-pathname"}),"\n","\n","\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-compile-file-pathname",children:"Expanded Reference: compile-file-pathname"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(compile-file-pathname )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(67294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);