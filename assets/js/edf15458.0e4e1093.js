"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[32829],{41380:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=r(85893),s=r(11151);function t(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"provide, require"})," ",(0,i.jsx)(n.em,{children:"Function"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"provide"})," ",(0,i.jsx)(n.em,{children:"module-name \u2192 implementation-dependent"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"require"})," ",(0,i.jsx)(n.em,{children:"module-name"})," &optional ",(0,i.jsx)(n.em,{children:"pathname-list \u2192 implementation-dependent"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"module-name"}),"\u2014a ",(0,i.jsx)(n.em,{children:"string designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"pathname-list"}),"\u2014",(0,i.jsx)(n.strong,{children:"nil"}),", or a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"non-empty list"})," of ",(0,i.jsx)(n.em,{children:"pathname designators"}),". The default is ",(0,i.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"provide"})," adds the ",(0,i.jsx)(n.em,{children:"module-name"})," to the ",(0,i.jsx)(n.em,{children:"list"})," held by ",(0,i.jsx)(n.strong,{children:"*modules*"}),", if such a name is not already present."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"require"})," tests for the presence of the ",(0,i.jsx)(n.em,{children:"module-name"})," in the ",(0,i.jsx)(n.em,{children:"list"})," held by ",(0,i.jsx)(n.strong,{children:"*modules*"}),". If it is present, ",(0,i.jsx)(n.strong,{children:"require"})," immediately returns. Otherwise, an attempt is made to load an appropriate set of ",(0,i.jsx)(n.em,{children:"files"})," as follows: The ",(0,i.jsx)(n.em,{children:"pathname-list"})," argument, if ",(0,i.jsx)(n.em,{children:"non-nil"}),", specifies a list of ",(0,i.jsx)(n.em,{children:"pathnames"})," to be loaded in order,"]}),"\n",(0,i.jsxs)(n.p,{children:["from left to right. If the ",(0,i.jsx)(n.em,{children:"pathname-list"})," is ",(0,i.jsx)(n.strong,{children:"nil"}),", an ",(0,i.jsx)(n.em,{children:"implementation-dependent"})," mechanism will be invoked in an attempt to load the module named ",(0,i.jsx)(n.em,{children:"module-name"}),"; if no such module can be loaded, an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"error"})," is signaled."]}),"\n",(0,i.jsxs)(n.p,{children:["Both functions use ",(0,i.jsx)(n.strong,{children:"string="})," to test for the presence of a ",(0,i.jsx)(n.em,{children:"module-name"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n;;; This illustrates a nonportable use of REQUIRE, because it \n\n\n\n;;; depends on the implementation-dependent file-loading mechanism. \n\n\n\n(require "CALCULUS") \n\n\n\n;;; This use of REQUIRE is nonportable because of the literal \n\n\n\n;;; physical pathname. \n\n\n\n(require "CALCULUS" "/usr/lib/lisp/calculus") \n\n\n\n;;; One form of portable usage involves supplying a logical pathname, \n\n\n\n;;; with appropriate translations defined elsewhere. \n\n\n\n(require "CALCULUS" "lib:calculus") \n\n\n\n;;; Another form of portable usage involves using a variable or \n\n\n\n;;; table lookup function to determine the pathname, which again \n\n\n\nSystem \n\n\n\n \n\n\n\n \n\n\n\n**provide, require** \n\n\n\n;;; must be initialized elsewhere. \n\n\n\n(require "CALCULUS" \\*calculus-module-pathname\\*) \n\n\n\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Side Effects:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"provide"})," modifies ",(0,i.jsx)(n.strong,{children:"*modules*"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:["The specific action taken by ",(0,i.jsx)(n.strong,{children:"require"})," is affected by calls to ",(0,i.jsx)(n.strong,{children:"provide"})," (or, in general, any changes to the ",(0,i.jsx)(n.em,{children:"value"})," of ",(0,i.jsx)(n.strong,{children:"*modules*"}),")."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["Should signal an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"type-error"})," if ",(0,i.jsx)(n.em,{children:"module-name"})," is not a ",(0,i.jsx)(n.em,{children:"string designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.strong,{children:"require"})," fails to perform the requested operation due to a problem while interacting with the ",(0,i.jsx)(n.em,{children:"file system"}),", an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"file-error"})," is signaled."]}),"\n",(0,i.jsxs)(n.p,{children:["An error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"file-error"})," might be signaled if any ",(0,i.jsx)(n.em,{children:"pathname"})," in ",(0,i.jsx)(n.em,{children:"pathname-list"})," is a ",(0,i.jsx)(n.em,{children:"designator"})," for a ",(0,i.jsx)(n.em,{children:"wild pathname"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"*modules*"}),", Section 19.1.2 (Pathnames as Filenames)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["The functions ",(0,i.jsx)(n.strong,{children:"provide"})," and ",(0,i.jsx)(n.strong,{children:"require"})," are deprecated."]}),"\n",(0,i.jsxs)(n.p,{children:["If a module consists of a single ",(0,i.jsx)(n.em,{children:"package"}),", it is customary for the package and module names to be the same."]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}const l={},d="provide, require",c={id:"chap-24/ce-c-dictionary/provide",title:"provide, require",description:"Expanded Reference: provide, require",source:"@site/docs/chap-24/ce-c-dictionary/provide.md",sourceDirName:"chap-24/ce-c-dictionary",slug:"/chap-24/ce-c-dictionary/provide",permalink:"/cl-language-reference/docs/chap-24/ce-c-dictionary/provide",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-24/ce-c-dictionary/provide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/cl-language-reference/docs/chap-24/ce-c-dictionary/load"},next:{title:"with-compilation-unit",permalink:"/cl-language-reference/docs/chap-24/ce-c-dictionary/withcompilationunit"}},a={},h=[{value:"Expanded Reference: provide, require",id:"expanded-reference-provide-require",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"provide-require",children:"provide, require"}),"\n","\n","\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-provide-require",children:"Expanded Reference: provide, require"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(provide, require )\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var i=r(67294);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);