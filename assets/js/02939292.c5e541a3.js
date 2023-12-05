"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[88517],{45478:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var c=a(85893),s=a(11151);function r(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"delete-package"})," ",(0,c.jsx)(n.em,{children:"Function"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"delete-package"})," ",(0,c.jsx)(n.em,{children:"package \u2192 generalized-boolean"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"package"}),"\u2014a ",(0,c.jsx)(n.em,{children:"package designator"})," ."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,c.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"delete-package"})," deletes ",(0,c.jsx)(n.em,{children:"package"})," from all package system data structures. If the operation is successful, ",(0,c.jsx)(n.strong,{children:"delete-package"})," returns true, otherwise ",(0,c.jsx)(n.strong,{children:"nil"}),". The effect of ",(0,c.jsx)(n.strong,{children:"delete-package"})," is that the name and nicknames of ",(0,c.jsx)(n.em,{children:"package"})," cease to be recognized package names. The package ",(0,c.jsx)(n.em,{children:"object"})," is still a ",(0,c.jsx)(n.em,{children:"package"})," (",(0,c.jsx)(n.em,{children:"i.e."}),", ",(0,c.jsx)(n.strong,{children:"packagep"})," is ",(0,c.jsx)(n.em,{children:"true"})," of it) but ",(0,c.jsx)(n.strong,{children:"package-name"})," returns ",(0,c.jsx)(n.strong,{children:"nil"}),". The consequences of deleting the COMMON-LISP ",(0,c.jsx)(n.em,{children:"package"})," or the KEYWORD ",(0,c.jsx)(n.em,{children:"package"})," are undefined. The consequences of invoking any other package operation on ",(0,c.jsx)(n.em,{children:"package"})," once it has been deleted are unspecified. In particular, the consequences of invoking ",(0,c.jsx)(n.strong,{children:"find-symbol"}),", ",(0,c.jsx)(n.strong,{children:"intern"})," and other functions that look for a symbol name in"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"delete-package"})}),"\n",(0,c.jsxs)(n.p,{children:["a ",(0,c.jsx)(n.em,{children:"package"})," are unspecified if they are called with ",(0,c.jsx)(n.strong,{children:"*package*"})," bound to the deleted ",(0,c.jsx)(n.em,{children:"package"})," or with the deleted ",(0,c.jsx)(n.em,{children:"package"})," as an argument."]}),"\n",(0,c.jsxs)(n.p,{children:["If ",(0,c.jsx)(n.em,{children:"package"})," is a ",(0,c.jsx)(n.em,{children:"package object"})," that has already been deleted, ",(0,c.jsx)(n.strong,{children:"delete-package"})," immediately returns ",(0,c.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["After this operation completes, the ",(0,c.jsx)(n.em,{children:"home package"})," of any ",(0,c.jsx)(n.em,{children:"symbol"})," whose ",(0,c.jsx)(n.em,{children:"home package"})," had previously been ",(0,c.jsx)(n.em,{children:"package"})," is ",(0,c.jsx)(n.em,{children:"implementation-dependent"}),". Except for this, ",(0,c.jsx)(n.em,{children:"symbols accessible"})," in ",(0,c.jsx)(n.em,{children:"package"})," are not modified in any other way; ",(0,c.jsx)(n.em,{children:"symbols"})," whose ",(0,c.jsx)(n.em,{children:"home package"})," is not ",(0,c.jsx)(n.em,{children:"package"})," remain unchanged."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:' \n\n\n\n(setq \\*foo-package\\* (make-package "FOO" :use nil)) \n\n\n\n(setq \\*foo-symbol\\* (intern "FOO" \\*foo-package\\*)) \n\n\n\n(export \\*foo-symbol\\* \\*foo-package\\*) \n\n\n\n(setq \\*bar-package\\* (make-package "BAR" :use \u2019("FOO"))) \n\n\n\n(setq \\*bar-symbol\\* (intern "BAR" \\*bar-package\\*)) \n\n\n\n(export \\*foo-symbol\\* \\*bar-package\\*) \n\n\n\n(export \\*bar-symbol\\* \\*bar-package\\*) \n\n\n\n(setq \\*baz-package\\* (make-package "BAZ" :use \u2019("BAR"))) \n\n\n\n(symbol-package \\*foo-symbol\\*) *\u2192* #<PACKAGE "FOO"> \n\n\n\n(symbol-package \\*bar-symbol\\*) *\u2192* #<PACKAGE "BAR"> \n\n\n\n(prin1-to-string \\*foo-symbol\\*) *\u2192* "FOO:FOO" \n\n\n\n(prin1-to-string \\*bar-symbol\\*) *\u2192* "BAR:BAR" \n\n\n\n(find-symbol "FOO" \\*bar-package\\*) *\u2192* FOO:FOO, :EXTERNAL \n\n\n\n(find-symbol "FOO" \\*baz-package\\*) *\u2192* FOO:FOO, :INHERITED \n\n\n\n(find-symbol "BAR" \\*baz-package\\*) *\u2192* BAR:BAR, :INHERITED \n\n\n\n(packagep \\*foo-package\\*) *\u2192 true* \n\n\n\n(packagep \\*bar-package\\*) *\u2192 true* \n\n\n\n(packagep \\*baz-package\\*) *\u2192 true* \n\n\n\n(package-name \\*foo-package\\*) *\u2192* "FOO" \n\n\n\n(package-name \\*bar-package\\*) *\u2192* "BAR" \n\n\n\n(package-name \\*baz-package\\*) *\u2192* "BAZ" \n\n\n\n(package-use-list \\*foo-package\\*) *\u2192* () \n\n\n\n(package-use-list \\*bar-package\\*) *\u2192* (#<PACKAGE "FOO">) \n\n\n\n(package-use-list \\*baz-package\\*) *\u2192* (#<PACKAGE "BAR">) \n\n\n\n\n\n\n\n \n\n\n\n \n\n\n\n**delete-package** \n\n\n\n(package-used-by-list \\*foo-package\\*) *\u2192* (#<PACKAGE "BAR">) \n\n\n\n(package-used-by-list \\*bar-package\\*) *\u2192* (#<PACKAGE "BAZ">) \n\n\n\n(package-used-by-list \\*baz-package\\*) *\u2192* () \n\n\n\n(delete-package \\*bar-package\\*) \n\n\n\n\u25b7 Error: Package BAZ uses package BAR. \n\n\n\n\u25b7 If continued, BAZ will be made to unuse-package BAR, \n\n\n\n\u25b7 and then BAR will be deleted. \n\n\n\n\u25b7 Type :CONTINUE to continue. \n\n\n\n\u25b7 Debug&gt; :CONTINUE \n\n\n\n*\u2192* T \n\n\n\n(symbol-package \\*foo-symbol\\*) *\u2192* #<PACKAGE "FOO"> \n\n\n\n(symbol-package \\*bar-symbol\\*) is unspecified \n\n\n\n(prin1-to-string \\*foo-symbol\\*) *\u2192* "FOO:FOO" \n\n\n\n(prin1-to-string \\*bar-symbol\\*) is unspecified \n\n\n\n(find-symbol "FOO" \\*bar-package\\*) is unspecified \n\n\n\n(find-symbol "FOO" \\*baz-package\\*) *\u2192* NIL, NIL \n\n\n\n(find-symbol "BAR" \\*baz-package\\*) *\u2192* NIL, NIL \n\n\n\n(packagep \\*foo-package\\*) *\u2192* T \n\n\n\n(packagep \\*bar-package\\*) *\u2192* T \n\n\n\n(packagep \\*baz-package\\*) *\u2192* T \n\n\n\n(package-name \\*foo-package\\*) *\u2192* "FOO" \n\n\n\n(package-name \\*bar-package\\*) *\u2192* NIL \n\n\n\n(package-name \\*baz-package\\*) *\u2192* "BAZ" \n\n\n\n(package-use-list \\*foo-package\\*) *\u2192* () \n\n\n\n(package-use-list \\*bar-package\\*) is unspecified \n\n\n\n(package-use-list \\*baz-package\\*) *\u2192* () \n\n\n\n(package-used-by-list \\*foo-package\\*) *\u2192* () \n\n\n\n(package-used-by-list \\*bar-package\\*) is unspecified \n\n\n\n(package-used-by-list \\*baz-package\\*) *\u2192* () \n\n\n\n\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,c.jsxs)(n.p,{children:["If the ",(0,c.jsx)(n.em,{children:"package designator"})," is a ",(0,c.jsx)(n.em,{children:"name"})," that does not currently name a ",(0,c.jsx)(n.em,{children:"package"}),", a ",(0,c.jsx)(n.em,{children:"correctable"})," error of ",(0,c.jsx)(n.em,{children:"type"})," ",(0,c.jsx)(n.strong,{children:"package-error"})," is signaled. If correction is attempted, no deletion action is attempted; instead, ",(0,c.jsx)(n.strong,{children:"delete-package"})," immediately returns ",(0,c.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["If ",(0,c.jsx)(n.em,{children:"package"})," is used by other ",(0,c.jsx)(n.em,{children:"packages"}),", a ",(0,c.jsx)(n.em,{children:"correctable"})," error of ",(0,c.jsx)(n.em,{children:"type"})," ",(0,c.jsx)(n.strong,{children:"package-error"})," is signaled."]}),"\n",(0,c.jsxs)(n.p,{children:["If correction is attempted, ",(0,c.jsx)(n.strong,{children:"unuse-package"})," is effectively called to remove any dependencies, causing ",(0,c.jsx)(n.em,{children:"package"}),"\u2019s ",(0,c.jsx)(n.em,{children:"external symbols"})," to cease being ",(0,c.jsx)(n.em,{children:"accessible"})," to those ",(0,c.jsx)(n.em,{children:"packages"})," that use ",(0,c.jsx)(n.em,{children:"package"}),". ",(0,c.jsx)(n.strong,{children:"delete-package"})," then deletes ",(0,c.jsx)(n.em,{children:"package"})," just as it would have had there been no ",(0,c.jsx)(n.em,{children:"packages"})," that used it."]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"unuse-package"})})]})}function t(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}const i={},o="delete-package",l={id:"chap-11/bb-c-dictionary/deletepackage",title:"delete-package",description:"Expanded Reference: delete-package",source:"@site/docs/chap-11/bb-c-dictionary/deletepackage.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/deletepackage",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/deletepackage",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/deletepackage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"defpackage",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/defpackage"},next:{title:"do-symbols, do-external-symbols, do-all-symbols",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/dosymbols"}},d={},p=[{value:"Expanded Reference: delete-package",id:"expanded-reference-delete-package",level:2}];function g(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"delete-package",children:"delete-package"}),"\n","\n","\n",(0,c.jsx)(t,{}),"\n",(0,c.jsx)(n.h2,{id:"expanded-reference-delete-package",children:"Expanded Reference: delete-package"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lisp",children:"(delete-package )\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(g,{...e})}):g(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>t});var c=a(67294);const s={},r=c.createContext(s);function t(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);