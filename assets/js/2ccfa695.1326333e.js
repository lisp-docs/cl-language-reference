"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[95346],{34707:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var c=n(85893),r=n(11151);function s(e){const a={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{ClLinks:n,GlossaryTerm:s}=a;return n||t("ClLinks",!0),s||t("GlossaryTerm",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.strong,{children:"delete-package"})," ",(0,c.jsx)(n,{term:"function",children:(0,c.jsx)("i",{children:"Function"})})]}),"\n",(0,c.jsx)(a.p,{children:(0,c.jsx)(a.strong,{children:"Syntax:"})}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(n,{term:"delete-package",children:(0,c.jsx)("b",{children:"delete-package"})})," ",(0,c.jsx)(a.em,{children:"package \u2192 generalized-boolean"})]}),"\n",(0,c.jsx)(a.p,{children:(0,c.jsx)(a.strong,{children:"Arguments and Values:"})}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})}),"\u2014a ",(0,c.jsx)(s,{styled:!0,term:"package designator",children:(0,c.jsx)("i",{children:"package designator"})})," ."]}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.em,{children:"generalized-boolean"}),"\u2014a ",(0,c.jsx)(s,{styled:!0,term:"generalized boolean",children:(0,c.jsx)("i",{children:"generalized boolean"})}),"."]}),"\n",(0,c.jsx)(a.p,{children:(0,c.jsx)(a.strong,{children:"Description:"})}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(n,{term:"delete-package",children:(0,c.jsx)("b",{children:"delete-package"})})," deletes ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," from all package system data structures. If the operation is successful, ",(0,c.jsx)(n,{term:"delete-package",children:(0,c.jsx)("b",{children:"delete-package"})})," returns true, otherwise ",(0,c.jsx)(n,{term:"nil",children:(0,c.jsx)("b",{children:"nil"})}),". The effect of ",(0,c.jsx)(n,{term:"delete-package",children:(0,c.jsx)("b",{children:"delete-package"})})," is that the name and nicknames of ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," cease to be recognized package names. The package ",(0,c.jsx)(n,{term:"object",children:(0,c.jsx)("i",{children:"object"})})," is still a ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," (",(0,c.jsx)(a.em,{children:"i.e."}),", ",(0,c.jsx)(n,{term:"packagep",children:(0,c.jsx)("b",{children:"packagep"})})," is ",(0,c.jsx)(n,{term:"true",children:(0,c.jsx)("i",{children:"true"})})," of it) but ",(0,c.jsx)(n,{term:"package-name",children:(0,c.jsx)("b",{children:"package-name"})})," returns ",(0,c.jsx)(n,{term:"nil",children:(0,c.jsx)("b",{children:"nil"})}),". The consequences of deleting the COMMON-LISP ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," or the KEYWORD ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," are undefined. The consequences of invoking any other package operation on ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," once it has been deleted are unspecified. In particular, the consequences of invoking ",(0,c.jsx)(n,{term:"find-symbol",children:(0,c.jsx)("b",{children:"find-symbol"})}),", ",(0,c.jsx)(n,{term:"intern",children:(0,c.jsx)("b",{children:"intern"})})," and other functions that look for a symbol name in"]}),"\n",(0,c.jsx)(n,{term:"delete-package",children:(0,c.jsx)("b",{children:"delete-package"})}),"\n",(0,c.jsxs)(a.p,{children:["a ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," are unspecified if they are called with ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("b",{children:"*package*"})})," bound to the deleted ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," or with the deleted ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," as an argument."]}),"\n",(0,c.jsxs)(a.p,{children:["If ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," is a ",(0,c.jsx)(a.em,{children:"package object"})," that has already been deleted, ",(0,c.jsx)(n,{term:"delete-package",children:(0,c.jsx)("b",{children:"delete-package"})})," immediately returns ",(0,c.jsx)(n,{term:"nil",children:(0,c.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,c.jsxs)(a.p,{children:["After this operation completes, the ",(0,c.jsx)(s,{styled:!0,term:"home package",children:(0,c.jsx)("i",{children:"home package"})})," of any ",(0,c.jsx)(n,{term:"symbol",children:(0,c.jsx)("i",{children:"symbol"})})," whose ",(0,c.jsx)(s,{styled:!0,term:"home package",children:(0,c.jsx)("i",{children:"home package"})})," had previously been ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," is ",(0,c.jsx)(n,{term:"implementation-dependent",children:(0,c.jsx)("i",{children:"implementation-dependent"})}),". Except for this, ",(0,c.jsx)(a.em,{children:"symbols accessible"})," in ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," are not modified in any other way; ",(0,c.jsx)(n,{term:"symbol",children:(0,c.jsx)("i",{children:"symbols"})})," whose ",(0,c.jsx)(s,{styled:!0,term:"home package",children:(0,c.jsx)("i",{children:"home package"})})," is not ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," remain unchanged."]}),"\n",(0,c.jsx)(a.p,{children:(0,c.jsx)(a.strong,{children:"Examples:"})}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-lisp",children:'(setq \\*foo-package\\* (make-package "FOO" :use nil)) \n(setq \\*foo-symbol\\* (intern "FOO" \\*foo-package\\*)) \n(export \\*foo-symbol\\* \\*foo-package\\*) \n(setq \\*bar-package\\* (make-package "BAR" :use \u2019("FOO"))) \n(setq \\*bar-symbol\\* (intern "BAR" \\*bar-package\\*)) \n(export \\*foo-symbol\\* \\*bar-package\\*) \n(export \\*bar-symbol\\* \\*bar-package\\*) \n(setq \\*baz-package\\* (make-package "BAZ" :use \u2019("BAR"))) \n(symbol-package \\*foo-symbol\\*) \u2192 #<PACKAGE "FOO"> \n(symbol-package \\*bar-symbol\\*) \u2192 #<PACKAGE "BAR"> \n(prin1-to-string \\*foo-symbol\\*) \u2192 "FOO:FOO" \n(prin1-to-string \\*bar-symbol\\*) \u2192 "BAR:BAR" \n(find-symbol "FOO" \\*bar-package\\*) \u2192 FOO:FOO, :EXTERNAL \n(find-symbol "FOO" \\*baz-package\\*) \u2192 FOO:FOO, :INHERITED \n(find-symbol "BAR" \\*baz-package\\*) \u2192 BAR:BAR, :INHERITED \n(packagep \\*foo-package\\*) \u2192 true \n(packagep \\*bar-package\\*) \u2192 true \n(packagep \\*baz-package\\*) \u2192 true \n(package-name \\*foo-package\\*) \u2192 "FOO" \n(package-name \\*bar-package\\*) \u2192 "BAR" \n(package-name \\*baz-package\\*) \u2192 "BAZ" \n(package-use-list \\*foo-package\\*) \u2192 () \n(package-use-list \\*bar-package\\*) \u2192 (#<PACKAGE "FOO">) \n(package-use-list \\*baz-package\\*) \u2192 (#<PACKAGE "BAR">) \n\n**delete-package** \n(package-used-by-list \\*foo-package\\*) \u2192 (#<PACKAGE "BAR">) \n(package-used-by-list \\*bar-package\\*) \u2192 (#<PACKAGE "BAZ">) \n(package-used-by-list \\*baz-package\\*) \u2192 () \n(delete-package \\*bar-package\\*) \n\u25b7 Error: Package BAZ uses package BAR. \n\u25b7 If continued, BAZ will be made to unuse-package BAR, \n\u25b7 and then BAR will be deleted. \n\u25b7 Type :CONTINUE to continue. \n\u25b7 Debug> :CONTINUE \n\u2192 T \n(symbol-package \\*foo-symbol\\*) \u2192 #<PACKAGE "FOO"> \n(symbol-package \\*bar-symbol\\*) is unspecified \n(prin1-to-string \\*foo-symbol\\*) \u2192 "FOO:FOO" \n(prin1-to-string \\*bar-symbol\\*) is unspecified \n(find-symbol "FOO" \\*bar-package\\*) is unspecified \n(find-symbol "FOO" \\*baz-package\\*) \u2192 NIL, NIL \n(find-symbol "BAR" \\*baz-package\\*) \u2192 NIL, NIL \n(packagep \\*foo-package\\*) \u2192 T \n(packagep \\*bar-package\\*) \u2192 T \n(packagep \\*baz-package\\*) \u2192 T \n(package-name \\*foo-package\\*) \u2192 "FOO" \n(package-name \\*bar-package\\*) \u2192 NIL \n(package-name \\*baz-package\\*) \u2192 "BAZ" \n(package-use-list \\*foo-package\\*) \u2192 () \n(package-use-list \\*bar-package\\*) is unspecified \n(package-use-list \\*baz-package\\*) \u2192 () \n(package-used-by-list \\*foo-package\\*) \u2192 () \n(package-used-by-list \\*bar-package\\*) is unspecified \n(package-used-by-list \\*baz-package\\*) \u2192 () \n'})}),"\n",(0,c.jsx)(a.p,{children:(0,c.jsx)(a.strong,{children:"Exceptional Situations:"})}),"\n",(0,c.jsxs)(a.p,{children:["If the ",(0,c.jsx)(s,{styled:!0,term:"package designator",children:(0,c.jsx)("i",{children:"package designator"})})," is a ",(0,c.jsx)(n,{term:"name",children:(0,c.jsx)("i",{children:"name"})})," that does not currently name a ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})}),", a ",(0,c.jsx)(n,{term:"correctable",children:(0,c.jsx)("i",{children:"correctable"})})," error of ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," ",(0,c.jsx)(n,{term:"package-error",children:(0,c.jsx)("b",{children:"package-error"})})," is signaled. If correction is attempted, no deletion action is attempted; instead, ",(0,c.jsx)(n,{term:"delete-package",children:(0,c.jsx)("b",{children:"delete-package"})})," immediately returns ",(0,c.jsx)(n,{term:"nil",children:(0,c.jsx)("b",{children:"nil"})}),"."]}),"\n",(0,c.jsxs)(a.p,{children:["If ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," is used by other ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"packages"})}),", a ",(0,c.jsx)(n,{term:"correctable",children:(0,c.jsx)("i",{children:"correctable"})})," error of ",(0,c.jsx)(n,{term:"type",children:(0,c.jsx)("i",{children:"type"})})," ",(0,c.jsx)(n,{term:"package-error",children:(0,c.jsx)("b",{children:"package-error"})})," is signaled."]}),"\n",(0,c.jsxs)(a.p,{children:["If correction is attempted, ",(0,c.jsx)(n,{term:"unuse-package",children:(0,c.jsx)("b",{children:"unuse-package"})})," is effectively called to remove any dependencies, causing ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})}),"\u2019s ",(0,c.jsx)(s,{styled:!0,term:"external symbol",children:(0,c.jsx)("i",{children:"external symbols"})})," to cease being ",(0,c.jsx)(n,{term:"accessible",children:(0,c.jsx)("i",{children:"accessible"})})," to those ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"packages"})})," that use ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})}),". ",(0,c.jsx)(n,{term:"delete-package",children:(0,c.jsx)("b",{children:"delete-package"})})," then deletes ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"package"})})," just as it would have had there been no ",(0,c.jsx)(n,{term:"package",children:(0,c.jsx)("i",{children:"packages"})})," that used it."]}),"\n",(0,c.jsx)(a.p,{children:(0,c.jsx)(a.strong,{children:"See Also:"})}),"\n",(0,c.jsx)(n,{term:"unuse-package",children:(0,c.jsx)("b",{children:"unuse-package"})})]})}function i(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(s,{...e})}):s(e)}function t(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const l={title:"delete-package"},d="delete-package",p={id:"chap-11/bb-c-dictionary/delete-package_function",title:"delete-package",description:"Expanded Reference: delete-package",source:"@site/docs/chap-11/bb-c-dictionary/delete-package_function.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/delete-package_function",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/delete-package_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/delete-package_function.md",tags:[],version:"current",frontMatter:{title:"delete-package"},sidebar:"tutorialSidebar",previous:{title:"defpackage",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/defpackage_macro"},next:{title:"do-symbols, do-external-symbols, do-all-symbols",permalink:"/cl-language-reference/chap-11/bb-c-dictionary/do-symbols_do-external-symbols_do-all-symbols_macro"}},o={},g=[{value:"Expanded Reference: delete-package",id:"expanded-reference-delete-package",level:2}];function h(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.h1,{id:"delete-package",children:"delete-package"}),"\n","\n","\n",(0,c.jsx)(i,{}),"\n",(0,c.jsx)(a.h2,{id:"expanded-reference-delete-package",children:"Expanded Reference: delete-package"}),"\n",(0,c.jsx)(a.admonition,{type:"tip",children:(0,c.jsx)(a.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-lisp",children:"(delete-package )\n"})})]})}function k(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>t,a:()=>i});var c=n(67294);const r={},s=c.createContext(r);function i(e){const a=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(s.Provider,{value:a},e.children)}}}]);