"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[78468],{90211:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var i=n(85893),s=n(11151);function t(e){const r={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components},{DictionaryLink:n,GlossaryTerm:t}=r;return n||d("DictionaryLink",!0),t||d("GlossaryTerm",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"provide, require"})," ",(0,i.jsx)(t,{styled:!0,term:"function",children:(0,i.jsx)("i",{children:"Function"})})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{styled:!0,term:"provide",children:(0,i.jsx)("b",{children:"provide"})})," ",(0,i.jsx)(r.em,{children:"module-name \u2192 implementation-dependent"})]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{styled:!0,term:"require",children:(0,i.jsx)("b",{children:"require"})})," ",(0,i.jsx)(r.em,{children:"module-name"})," &optional ",(0,i.jsx)(r.em,{children:"pathname-list \u2192 implementation-dependent"})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"module-name"}),"\u2014a ",(0,i.jsx)(t,{styled:!0,term:"string designator",children:(0,i.jsx)("i",{children:"string designator"})})," ."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"pathname-list"}),"\u2014",(0,i.jsx)(n,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", or a ",(0,i.jsx)(t,{styled:!0,term:"designator",children:(0,i.jsx)("i",{children:"designator"})})," for a ",(0,i.jsx)(r.em,{children:"non-empty list"})," of ",(0,i.jsx)(t,{styled:!0,term:"pathname designator",children:(0,i.jsx)("i",{children:"pathname designators"})}),". The default is ",(0,i.jsx)(n,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{styled:!0,term:"provide",children:(0,i.jsx)("b",{children:"provide"})})," adds the ",(0,i.jsx)(r.em,{children:"module-name"})," to the ",(0,i.jsx)(t,{styled:!0,term:"list",children:(0,i.jsx)("i",{children:"list"})})," held by ",(0,i.jsx)(n,{styled:!0,term:"modules",children:(0,i.jsx)("b",{children:"*modules*"})}),", if such a name is not already present."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{styled:!0,term:"require",children:(0,i.jsx)("b",{children:"require"})})," tests for the presence of the ",(0,i.jsx)(r.em,{children:"module-name"})," in the ",(0,i.jsx)(t,{styled:!0,term:"list",children:(0,i.jsx)("i",{children:"list"})})," held by ",(0,i.jsx)(n,{styled:!0,term:"modules",children:(0,i.jsx)("b",{children:"*modules*"})}),". If it is present, ",(0,i.jsx)(n,{styled:!0,term:"require",children:(0,i.jsx)("b",{children:"require"})})," immediately returns. Otherwise, an attempt is made to load an appropriate set of ",(0,i.jsx)(t,{styled:!0,term:"file",children:(0,i.jsx)("i",{children:"files"})})," as follows: The ",(0,i.jsx)(r.em,{children:"pathname-list"})," argument, if ",(0,i.jsx)(t,{styled:!0,term:"non-nil",children:(0,i.jsx)("i",{children:"non-nil"})}),", specifies a list of ",(0,i.jsx)(t,{styled:!0,term:"pathname",children:(0,i.jsx)("i",{children:"pathnames"})})," to be loaded in order,"]}),"\n",(0,i.jsxs)(r.p,{children:["from left to right. If the ",(0,i.jsx)(r.em,{children:"pathname-list"})," is ",(0,i.jsx)(n,{styled:!0,term:"nil",children:(0,i.jsx)("b",{children:"nil"})}),", an ",(0,i.jsx)(t,{styled:!0,term:"implementation-dependent",children:(0,i.jsx)("i",{children:"implementation-dependent"})})," mechanism will be invoked in an attempt to load the module named ",(0,i.jsx)(r.em,{children:"module-name"}),"; if no such module can be loaded, an error of ",(0,i.jsx)(t,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{styled:!0,term:"error",children:(0,i.jsx)("b",{children:"error"})})," is signaled."]}),"\n",(0,i.jsxs)(r.p,{children:["Both functions use ",(0,i.jsx)(n,{styled:!0,term:"string",children:(0,i.jsx)("b",{children:"string="})})," to test for the presence of a ",(0,i.jsx)(r.em,{children:"module-name"}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:';;; This illustrates a nonportable use of REQUIRE, because it \n;;; depends on the implementation-dependent file-loading mechanism. \n(require "CALCULUS") \n;;; This use of REQUIRE is nonportable because of the literal \n;;; physical pathname. \n(require "CALCULUS" "/usr/lib/lisp/calculus") \n;;; One form of portable usage involves supplying a logical pathname, \n;;; with appropriate translations defined elsewhere. \n(require "CALCULUS" "lib:calculus") \n;;; Another form of portable usage involves using a variable or \n;;; table lookup function to determine the pathname, which again \nSystem \n\n**provide, require** \n;;; must be initialized elsewhere. \n(require "CALCULUS" \\*calculus-module-pathname\\*) \n'})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Side Effects:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{styled:!0,term:"provide",children:(0,i.jsx)("b",{children:"provide"})})," modifies ",(0,i.jsx)(n,{styled:!0,term:"modules",children:(0,i.jsx)("b",{children:"*modules*"})}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(r.p,{children:["The specific action taken by ",(0,i.jsx)(n,{styled:!0,term:"require",children:(0,i.jsx)("b",{children:"require"})})," is affected by calls to ",(0,i.jsx)(n,{styled:!0,term:"provide",children:(0,i.jsx)("b",{children:"provide"})})," (or, in general, any changes to the ",(0,i.jsx)(t,{styled:!0,term:"value",children:(0,i.jsx)("i",{children:"value"})})," of ",(0,i.jsx)(n,{styled:!0,term:"modules",children:(0,i.jsx)("b",{children:"*modules*"})}),")."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(r.p,{children:["Should signal an error of ",(0,i.jsx)(t,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{styled:!0,term:"type-error",children:(0,i.jsx)("b",{children:"type-error"})})," if ",(0,i.jsx)(r.em,{children:"module-name"})," is not a ",(0,i.jsx)(t,{styled:!0,term:"string designator",children:(0,i.jsx)("i",{children:"string designator"})})," ."]}),"\n",(0,i.jsxs)(r.p,{children:["If ",(0,i.jsx)(n,{styled:!0,term:"require",children:(0,i.jsx)("b",{children:"require"})})," fails to perform the requested operation due to a problem while interacting with the ",(0,i.jsx)(t,{styled:!0,term:"file system",children:(0,i.jsx)("i",{children:"file system"})}),", an error of ",(0,i.jsx)(t,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{styled:!0,term:"file-error",children:(0,i.jsx)("b",{children:"file-error"})})," is signaled."]}),"\n",(0,i.jsxs)(r.p,{children:["An error of ",(0,i.jsx)(t,{styled:!0,term:"type",children:(0,i.jsx)("i",{children:"type"})})," ",(0,i.jsx)(n,{styled:!0,term:"file-error",children:(0,i.jsx)("b",{children:"file-error"})})," might be signaled if any ",(0,i.jsx)(t,{styled:!0,term:"pathname",children:(0,i.jsx)("i",{children:"pathname"})})," in ",(0,i.jsx)(r.em,{children:"pathname-list"})," is a ",(0,i.jsx)(t,{styled:!0,term:"designator",children:(0,i.jsx)("i",{children:"designator"})})," for a ",(0,i.jsx)(r.em,{children:"wild pathname"}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(n,{styled:!0,term:"modules",children:(0,i.jsx)("b",{children:"*modules*"})}),", Section 19.1.2 (Pathnames as Filenames)"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(r.p,{children:["The functions ",(0,i.jsx)(n,{styled:!0,term:"provide",children:(0,i.jsx)("b",{children:"provide"})})," and ",(0,i.jsx)(n,{styled:!0,term:"require",children:(0,i.jsx)("b",{children:"require"})})," are deprecated."]}),"\n",(0,i.jsxs)(r.p,{children:["If a module consists of a single ",(0,i.jsx)(t,{styled:!0,term:"package",children:(0,i.jsx)("i",{children:"package"})}),", it is customary for the package and module names to be the same."]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}function d(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const c={title:"provide, require"},o="provide, require",a={id:"chap-24/ce-c-dictionary/provide_require_function",title:"provide, require",description:"Expanded Reference: provide, require",source:"@site/docs/chap-24/ce-c-dictionary/provide_require_function.md",sourceDirName:"chap-24/ce-c-dictionary",slug:"/chap-24/ce-c-dictionary/provide_require_function",permalink:"/cl-language-reference/chap-24/ce-c-dictionary/provide_require_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-24/ce-c-dictionary/provide_require_function.md",tags:[],version:"current",frontMatter:{title:"provide, require"},sidebar:"tutorialSidebar",previous:{title:"modules",permalink:"/cl-language-reference/chap-24/ce-c-dictionary/modules_variable"},next:{title:"with-compilation-unit",permalink:"/cl-language-reference/chap-24/ce-c-dictionary/with-compilation-unit_macro"}},h={},p=[{value:"Expanded Reference: provide, require",id:"expanded-reference-provide-require",level:2}];function m(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"provide-require",children:"provide, require"}),"\n","\n","\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(r.h2,{id:"expanded-reference-provide-require",children:"Expanded Reference: provide, require"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-lisp",children:"(provide, require )\n"})})]})}function x(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>l});var i=n(67294);const s={},t=i.createContext(s);function l(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);