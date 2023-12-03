"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[88517],{45478:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var s=a(85893),c=a(11151);function r(e){const n={em:"em",p:"p",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"delete-package"})," ",(0,s.jsx)(n.em,{children:"Function"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"delete-package"})," ",(0,s.jsx)(n.em,{children:"package \u2192 generalized-boolean"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"package"}),"\u2014a ",(0,s.jsx)(n.em,{children:"package designator"})," ."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"generalized-boolean"}),"\u2014a ",(0,s.jsx)(n.em,{children:"generalized boolean"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"delete-package"})," deletes ",(0,s.jsx)(n.em,{children:"package"})," from all package system data structures. If the operation is successful, ",(0,s.jsx)(n.strong,{children:"delete-package"})," returns true, otherwise ",(0,s.jsx)(n.strong,{children:"nil"}),". The effect of ",(0,s.jsx)(n.strong,{children:"delete-package"})," is that the name and nicknames of ",(0,s.jsx)(n.em,{children:"package"})," cease to be recognized package names. The package ",(0,s.jsx)(n.em,{children:"object"})," is still a ",(0,s.jsx)(n.em,{children:"package"})," (",(0,s.jsx)(n.em,{children:"i.e."}),", ",(0,s.jsx)(n.strong,{children:"packagep"})," is ",(0,s.jsx)(n.em,{children:"true"})," of it) but ",(0,s.jsx)(n.strong,{children:"package-name"})," returns ",(0,s.jsx)(n.strong,{children:"nil"}),". The consequences of deleting the COMMON-LISP ",(0,s.jsx)(n.em,{children:"package"})," or the KEYWORD ",(0,s.jsx)(n.em,{children:"package"})," are undefined. The consequences of invoking any other package operation on ",(0,s.jsx)(n.em,{children:"package"})," once it has been deleted are unspecified. In particular, the consequences of invoking ",(0,s.jsx)(n.strong,{children:"find-symbol"}),", ",(0,s.jsx)(n.strong,{children:"intern"})," and other functions that look for a symbol name in"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"delete-package"})}),"\n",(0,s.jsxs)(n.p,{children:["a ",(0,s.jsx)(n.em,{children:"package"})," are unspecified if they are called with ",(0,s.jsx)(n.strong,{children:"*package*"})," bound to the deleted ",(0,s.jsx)(n.em,{children:"package"})," or with the deleted ",(0,s.jsx)(n.em,{children:"package"})," as an argument."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"package"})," is a ",(0,s.jsx)(n.em,{children:"package object"})," that has already been deleted, ",(0,s.jsx)(n.strong,{children:"delete-package"})," immediately returns ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["After this operation completes, the ",(0,s.jsx)(n.em,{children:"home package"})," of any ",(0,s.jsx)(n.em,{children:"symbol"})," whose ",(0,s.jsx)(n.em,{children:"home package"})," had previously been ",(0,s.jsx)(n.em,{children:"package"})," is ",(0,s.jsx)(n.em,{children:"implementation-dependent"}),". Except for this, ",(0,s.jsx)(n.em,{children:"symbols accessible"})," in ",(0,s.jsx)(n.em,{children:"package"})," are not modified in any other way; ",(0,s.jsx)(n.em,{children:"symbols"})," whose ",(0,s.jsx)(n.em,{children:"home package"})," is not ",(0,s.jsx)(n.em,{children:"package"})," remain unchanged."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,s.jsxs)(n.p,{children:['(setq *foo-package* (make-package "FOO" ',":use"," nil))"]}),"\n",(0,s.jsx)(n.p,{children:'(setq *foo-symbol* (intern "FOO" *foo-package*))'}),"\n",(0,s.jsx)(n.p,{children:"(export *foo-symbol* *foo-package*)"}),"\n",(0,s.jsxs)(n.p,{children:['(setq *bar-package* (make-package "BAR" ',":use",' \u2019("FOO")))']}),"\n",(0,s.jsx)(n.p,{children:'(setq *bar-symbol* (intern "BAR" *bar-package*))'}),"\n",(0,s.jsx)(n.p,{children:"(export *foo-symbol* *bar-package*)"}),"\n",(0,s.jsx)(n.p,{children:"(export *bar-symbol* *bar-package*)"}),"\n",(0,s.jsxs)(n.p,{children:['(setq *baz-package* (make-package "BAZ" ',":use",' \u2019("BAR")))']}),"\n",(0,s.jsxs)(n.p,{children:["(symbol-package *foo-symbol*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' #<PACKAGE "FOO">']}),"\n",(0,s.jsxs)(n.p,{children:["(symbol-package *bar-symbol*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' #<PACKAGE "BAR">']}),"\n",(0,s.jsxs)(n.p,{children:["(prin1-to-string *foo-symbol*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' "FOO',":FOO",'"']}),"\n",(0,s.jsxs)(n.p,{children:["(prin1-to-string *bar-symbol*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' "BAR',":BAR",'"']}),"\n",(0,s.jsxs)(n.p,{children:['(find-symbol "FOO" *bar-package*) ',(0,s.jsx)(n.em,{children:"\u2192"})," FOO",":FOO",", ",":EXTERNAL"]}),"\n",(0,s.jsxs)(n.p,{children:['(find-symbol "FOO" *baz-package*) ',(0,s.jsx)(n.em,{children:"\u2192"})," FOO",":FOO",", ",":INHERITED"]}),"\n",(0,s.jsxs)(n.p,{children:['(find-symbol "BAR" *baz-package*) ',(0,s.jsx)(n.em,{children:"\u2192"})," BAR",":BAR",", ",":INHERITED"]}),"\n",(0,s.jsxs)(n.p,{children:["(packagep *foo-package*) ",(0,s.jsx)(n.em,{children:"\u2192 true"})]}),"\n",(0,s.jsxs)(n.p,{children:["(packagep *bar-package*) ",(0,s.jsx)(n.em,{children:"\u2192 true"})]}),"\n",(0,s.jsxs)(n.p,{children:["(packagep *baz-package*) ",(0,s.jsx)(n.em,{children:"\u2192 true"})]}),"\n",(0,s.jsxs)(n.p,{children:["(package-name *foo-package*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' "FOO"']}),"\n",(0,s.jsxs)(n.p,{children:["(package-name *bar-package*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' "BAR"']}),"\n",(0,s.jsxs)(n.p,{children:["(package-name *baz-package*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' "BAZ"']}),"\n",(0,s.jsxs)(n.p,{children:["(package-use-list *foo-package*) ",(0,s.jsx)(n.em,{children:"\u2192"})," ()"]}),"\n",(0,s.jsxs)(n.p,{children:["(package-use-list *bar-package*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' (#<PACKAGE "FOO">)']}),"\n",(0,s.jsxs)(n.p,{children:["(package-use-list *baz-package*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' (#<PACKAGE "BAR">)']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"delete-package"})}),"\n",(0,s.jsxs)(n.p,{children:["(package-used-by-list *foo-package*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' (#<PACKAGE "BAR">)']}),"\n",(0,s.jsxs)(n.p,{children:["(package-used-by-list *bar-package*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' (#<PACKAGE "BAZ">)']}),"\n",(0,s.jsxs)(n.p,{children:["(package-used-by-list *baz-package*) ",(0,s.jsx)(n.em,{children:"\u2192"})," ()"]}),"\n",(0,s.jsx)(n.p,{children:"(delete-package *bar-package*)"}),"\n",(0,s.jsx)(n.p,{children:"\u25b7 Error: Package BAZ uses package BAR."}),"\n",(0,s.jsx)(n.p,{children:"\u25b7 If continued, BAZ will be made to unuse-package BAR,"}),"\n",(0,s.jsx)(n.p,{children:"\u25b7 and then BAR will be deleted."}),"\n",(0,s.jsxs)(n.p,{children:["\u25b7 Type ",":CONTINUE"," to continue."]}),"\n",(0,s.jsxs)(n.p,{children:["\u25b7 Debug> ",":CONTINUE"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u2192"})," T"]}),"\n",(0,s.jsxs)(n.p,{children:["(symbol-package *foo-symbol*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' #<PACKAGE "FOO">']}),"\n",(0,s.jsx)(n.p,{children:"(symbol-package *bar-symbol*) is unspecified"}),"\n",(0,s.jsxs)(n.p,{children:["(prin1-to-string *foo-symbol*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' "FOO',":FOO",'"']}),"\n",(0,s.jsx)(n.p,{children:"(prin1-to-string *bar-symbol*) is unspecified"}),"\n",(0,s.jsx)(n.p,{children:'(find-symbol "FOO" *bar-package*) is unspecified'}),"\n",(0,s.jsxs)(n.p,{children:['(find-symbol "FOO" *baz-package*) ',(0,s.jsx)(n.em,{children:"\u2192"})," NIL, NIL"]}),"\n",(0,s.jsxs)(n.p,{children:['(find-symbol "BAR" *baz-package*) ',(0,s.jsx)(n.em,{children:"\u2192"})," NIL, NIL"]}),"\n",(0,s.jsxs)(n.p,{children:["(packagep *foo-package*) ",(0,s.jsx)(n.em,{children:"\u2192"})," T"]}),"\n",(0,s.jsxs)(n.p,{children:["(packagep *bar-package*) ",(0,s.jsx)(n.em,{children:"\u2192"})," T"]}),"\n",(0,s.jsxs)(n.p,{children:["(packagep *baz-package*) ",(0,s.jsx)(n.em,{children:"\u2192"})," T"]}),"\n",(0,s.jsxs)(n.p,{children:["(package-name *foo-package*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' "FOO"']}),"\n",(0,s.jsxs)(n.p,{children:["(package-name *bar-package*) ",(0,s.jsx)(n.em,{children:"\u2192"})," NIL"]}),"\n",(0,s.jsxs)(n.p,{children:["(package-name *baz-package*) ",(0,s.jsx)(n.em,{children:"\u2192"}),' "BAZ"']}),"\n",(0,s.jsxs)(n.p,{children:["(package-use-list *foo-package*) ",(0,s.jsx)(n.em,{children:"\u2192"})," ()"]}),"\n",(0,s.jsx)(n.p,{children:"(package-use-list *bar-package*) is unspecified"}),"\n",(0,s.jsxs)(n.p,{children:["(package-use-list *baz-package*) ",(0,s.jsx)(n.em,{children:"\u2192"})," ()"]}),"\n",(0,s.jsxs)(n.p,{children:["(package-used-by-list *foo-package*) ",(0,s.jsx)(n.em,{children:"\u2192"})," ()"]}),"\n",(0,s.jsx)(n.p,{children:"(package-used-by-list *bar-package*) is unspecified"}),"\n",(0,s.jsxs)(n.p,{children:["(package-used-by-list *baz-package*) ",(0,s.jsx)(n.em,{children:"\u2192"})," ()"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"package designator"})," is a ",(0,s.jsx)(n.em,{children:"name"})," that does not currently name a ",(0,s.jsx)(n.em,{children:"package"}),", a ",(0,s.jsx)(n.em,{children:"correctable"})," error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"package-error"})," is signaled. If correction is attempted, no deletion action is attempted; instead, ",(0,s.jsx)(n.strong,{children:"delete-package"})," immediately returns ",(0,s.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"package"})," is used by other ",(0,s.jsx)(n.em,{children:"packages"}),", a ",(0,s.jsx)(n.em,{children:"correctable"})," error of ",(0,s.jsx)(n.em,{children:"type"})," ",(0,s.jsx)(n.strong,{children:"package-error"})," is signaled."]}),"\n",(0,s.jsxs)(n.p,{children:["If correction is attempted, ",(0,s.jsx)(n.strong,{children:"unuse-package"})," is effectively called to remove any dependencies, causing ",(0,s.jsx)(n.em,{children:"package"}),"\u2019s ",(0,s.jsx)(n.em,{children:"external symbols"})," to cease being ",(0,s.jsx)(n.em,{children:"accessible"})," to those ",(0,s.jsx)(n.em,{children:"packages"})," that use ",(0,s.jsx)(n.em,{children:"package"}),". ",(0,s.jsx)(n.strong,{children:"delete-package"})," then deletes ",(0,s.jsx)(n.em,{children:"package"})," just as it would have had there been no ",(0,s.jsx)(n.em,{children:"packages"})," that used it."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"unuse-package"})})]})}function i(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}const l={},d="delete-package",t={id:"chap-11/bb-c-dictionary/deletepackage",title:"delete-package",description:"Expanded Reference: delete-package",source:"@site/docs/chap-11/bb-c-dictionary/deletepackage.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/deletepackage",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/deletepackage",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/deletepackage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"defpackage",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/defpackage"},next:{title:"do-symbols, do-external-symbols, do-all-symbols",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/dosymbolsaadoexternalsymbolsaadoallsymbols"}},p={},o=[{value:"Expanded Reference: delete-package",id:"expanded-reference-delete-package",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"delete-package",children:"delete-package"}),"\n","\n","\n",(0,s.jsx)(i,{}),"\n",(0,s.jsx)(n.h2,{id:"expanded-reference-delete-package",children:"Expanded Reference: delete-package"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lisp",children:"(delete-package )\n"})})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>i});var s=a(67294);const c={},r=s.createContext(c);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);