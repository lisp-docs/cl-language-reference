"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[14355],{82185:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var i=s(85893),r=s(11151);function a(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"defpackage"})," ",(0,i.jsx)(n.em,{children:"Macro"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"defpackage"})," ",(0,i.jsx)(n.em,{children:"defined-package-name"})," [[ ",(0,i.jsx)(n.em,{children:"\u2193option"})," ]] \u2192 package"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"option::"}),"=",(0,i.jsx)(n.em,{children:"{"}),"(",":nicknames"," ",(0,i.jsx)(n.em,{children:"{nickname}"}),"*)",(0,i.jsx)(n.em,{children:"}"}),"* ",(0,i.jsx)(n.em,{children:"|"})]}),"\n",(0,i.jsxs)(n.p,{children:["(",":documentation"," ",(0,i.jsx)(n.em,{children:"string"}),") ",(0,i.jsx)(n.em,{children:"|"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"{"}),"(",":use"," ",(0,i.jsx)(n.em,{children:"{package-name}"}),"*)",(0,i.jsx)(n.em,{children:"}"}),"* ",(0,i.jsx)(n.em,{children:"|"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"{"}),"(",":shadow"," ",(0,i.jsx)(n.em,{children:"{\u2193symbol-name}"}),"*)",(0,i.jsx)(n.em,{children:"}"}),"* ",(0,i.jsx)(n.em,{children:"|"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"{"}),"(",":shadowing-import-from"," ",(0,i.jsx)(n.em,{children:"package-name {\u2193symbol-name}"}),"*)",(0,i.jsx)(n.em,{children:"}"}),"* ",(0,i.jsx)(n.em,{children:"|"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"{"}),"(",":import-from"," ",(0,i.jsx)(n.em,{children:"package-name {\u2193symbol-name}"}),"*)",(0,i.jsx)(n.em,{children:"}"}),"* ",(0,i.jsx)(n.em,{children:"|"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"{"}),"(",":export"," ",(0,i.jsx)(n.em,{children:"{\u2193symbol-name}"}),"*)",(0,i.jsx)(n.em,{children:"}"}),"* ",(0,i.jsx)(n.em,{children:"|"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"{"}),"(",":intern"," ",(0,i.jsx)(n.em,{children:"{\u2193symbol-name}"}),"*)",(0,i.jsx)(n.em,{children:"}"}),"* ",(0,i.jsx)(n.em,{children:"|"})]}),"\n",(0,i.jsxs)(n.p,{children:["(",":size"," ",(0,i.jsx)(n.em,{children:"integer"})," )"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"defined-package-name"}),"\u2014a ",(0,i.jsx)(n.em,{children:"string designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"package-name"}),"\u2014a ",(0,i.jsx)(n.em,{children:"package designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"nickname"}),"\u2014a ",(0,i.jsx)(n.em,{children:"string designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"symbol-name"}),"\u2014a ",(0,i.jsx)(n.em,{children:"string designator"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"package"}),"\u2014the ",(0,i.jsx)(n.em,{children:"package"})," named ",(0,i.jsx)(n.em,{children:"package-name"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"defpackage"})," creates a ",(0,i.jsx)(n.em,{children:"package"})," as specified and returns the ",(0,i.jsx)(n.em,{children:"package"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"defined-package-name"})," already refers to an existing ",(0,i.jsx)(n.em,{children:"package"}),", the name-to-package mapping for that name is not changed. If the new definition is at variance with the current state of that ",(0,i.jsx)(n.em,{children:"package"}),", the consequences are undefined; an implementation might choose to modify the existing ",(0,i.jsx)(n.em,{children:"package"})," to reflect the new definition. If ",(0,i.jsx)(n.em,{children:"defined-package-name"})," is a ",(0,i.jsx)(n.em,{children:"symbol"}),", its ",(0,i.jsx)(n.em,{children:"name"})," is used."]}),"\n",(0,i.jsxs)(n.p,{children:["The standard ",(0,i.jsx)(n.em,{children:"options"})," are described below."]}),"\n",(0,i.jsx)(n.p,{children:":nicknames"}),"\n",(0,i.jsxs)(n.p,{children:["The arguments to ",":nicknames"," set the ",(0,i.jsx)(n.em,{children:"package"}),"\u2019s nicknames to the supplied names."]}),"\n",(0,i.jsx)(n.p,{children:":documentation"}),"\n",(0,i.jsxs)(n.p,{children:["The argument to ",":documentation"," specifies a ",(0,i.jsx)(n.em,{children:"documentation string"}),"; it is attached as a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"defpackage"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"documentation string"})," to the ",(0,i.jsx)(n.em,{children:"package"}),". At most one ",":documentation"," option can appear in a single ",(0,i.jsx)(n.strong,{children:"defpackage"})," ",(0,i.jsx)(n.em,{children:"form"}),"."]}),"\n",(0,i.jsx)(n.p,{children:":use"}),"\n",(0,i.jsxs)(n.p,{children:["The arguments to ",":use"," set the ",(0,i.jsx)(n.em,{children:"packages"})," that the ",(0,i.jsx)(n.em,{children:"package"})," named by ",(0,i.jsx)(n.em,{children:"package-name"})," will inherit from. If ",":use"," is not supplied, it defaults to the same ",(0,i.jsx)(n.em,{children:"implementation-dependent"})," value as the ",":use"," ",(0,i.jsx)(n.em,{children:"argument"})," to ",(0,i.jsx)(n.strong,{children:"make-package"}),"."]}),"\n",(0,i.jsx)(n.p,{children:":shadow"}),"\n",(0,i.jsxs)(n.p,{children:["The arguments to ",":shadow",", ",(0,i.jsx)(n.em,{children:"symbol-names"}),", name ",(0,i.jsx)(n.em,{children:"symbols"})," that are to be created in the ",(0,i.jsx)(n.em,{children:"package"})," being defined. These ",(0,i.jsx)(n.em,{children:"symbols"})," are added to the list of shadowing ",(0,i.jsx)(n.em,{children:"symbols"})," effectively as if by ",(0,i.jsx)(n.strong,{children:"shadow"}),"."]}),"\n",(0,i.jsx)(n.p,{children:":shadowing-import-from"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"symbols"})," named by the argument ",(0,i.jsx)(n.em,{children:"symbol-names"})," are found (involving a lookup as if by ",(0,i.jsx)(n.strong,{children:"find-symbol"}),") in the specified ",(0,i.jsx)(n.em,{children:"package-name"}),". The resulting ",(0,i.jsx)(n.em,{children:"symbols"})," are ",(0,i.jsx)(n.em,{children:"imported"})," into the ",(0,i.jsx)(n.em,{children:"package"})," being defined, and placed on the shadowing symbols list as if by ",(0,i.jsx)(n.strong,{children:"shadowing-import"}),". In no case are ",(0,i.jsx)(n.em,{children:"symbols"})," created in any ",(0,i.jsx)(n.em,{children:"package"})," other than the one being defined."]}),"\n",(0,i.jsx)(n.p,{children:":import-from"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"symbols"})," named by the argument ",(0,i.jsx)(n.em,{children:"symbol-names"})," are found in the ",(0,i.jsx)(n.em,{children:"package"})," named by ",(0,i.jsx)(n.em,{children:"package-name"})," and they are ",(0,i.jsx)(n.em,{children:"imported"})," into the ",(0,i.jsx)(n.em,{children:"package"})," being defined. In no case are ",(0,i.jsx)(n.em,{children:"symbols"})," created in any ",(0,i.jsx)(n.em,{children:"package"})," other than the one being defined."]}),"\n",(0,i.jsx)(n.p,{children:":export"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"symbols"})," named by the argument ",(0,i.jsx)(n.em,{children:"symbol-names"})," are found or created in the ",(0,i.jsx)(n.em,{children:"package"})," being defined and ",(0,i.jsx)(n.em,{children:"exported"}),". The ",":export"," option interacts with the ",":use"," option, since inherited ",(0,i.jsx)(n.em,{children:"symbols"})," can be used rather than new ones created. The ",":export"," option interacts with the ",":import-from"," and ",":shadowing-import-from"," options, since ",(0,i.jsx)(n.em,{children:"imported"})," symbols can be used rather than new ones created. If an argument to the ",":export"," option is ",(0,i.jsx)(n.em,{children:"accessible"})," as an (inherited) ",(0,i.jsx)(n.em,{children:"internal symbol"})," via ",(0,i.jsx)(n.strong,{children:"use-package"}),", that the ",(0,i.jsx)(n.em,{children:"symbol"})," named by ",(0,i.jsx)(n.em,{children:"symbol-name"})," is first ",(0,i.jsx)(n.em,{children:"imported"})," into the ",(0,i.jsx)(n.em,{children:"package"})," being defined, and is then ",(0,i.jsx)(n.em,{children:"exported"})," from that ",(0,i.jsx)(n.em,{children:"package"}),"."]}),"\n",(0,i.jsx)(n.p,{children:":intern"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"symbols"})," named by the argument ",(0,i.jsx)(n.em,{children:"symbol-names"})," are found or created in the ",(0,i.jsx)(n.em,{children:"package"})," being defined. The ",":intern"," option interacts with the ",":use"," option, since inherited ",(0,i.jsx)(n.em,{children:"symbols"})," can be used rather than new ones created."]}),"\n",(0,i.jsx)(n.p,{children:":size"}),"\n",(0,i.jsxs)(n.p,{children:["The argument to the ",":size"," option declares the approximate number of ",(0,i.jsx)(n.em,{children:"symbols"})," expected in the ",(0,i.jsx)(n.em,{children:"package"}),". This is an efficiency hint only and might be ignored by an implementation."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"defpackage"})}),"\n",(0,i.jsxs)(n.p,{children:["The order in which the options appear in a ",(0,i.jsx)(n.strong,{children:"defpackage"})," form is irrelevant. The order in which they are executed is as follows:"]}),"\n",(0,i.jsxs)(n.p,{children:["1. ",":shadow"," and ",":shadowing-import-from","."]}),"\n",(0,i.jsxs)(n.p,{children:["2. ",":use","."]}),"\n",(0,i.jsxs)(n.p,{children:["3. ",":import-from"," and ",":intern","."]}),"\n",(0,i.jsxs)(n.p,{children:["4. ",":export","."]}),"\n",(0,i.jsxs)(n.p,{children:["Shadows are established first, since they might be necessary to block spurious name conflicts when the ",":use"," option is processed. The ",":use"," option is executed next so that ",":intern"," and ",":export"," options can refer to normally inherited ",(0,i.jsx)(n.em,{children:"symbols"}),". The ",":export"," option is executed last so that it can refer to ",(0,i.jsx)(n.em,{children:"symbols"})," created by any of the other options; in particular, ",(0,i.jsx)(n.em,{children:"shadowing symbols"})," and ",(0,i.jsx)(n.em,{children:"imported symbols"})," can be made external."]}),"\n",(0,i.jsxs)(n.p,{children:["If a defpackage ",(0,i.jsx)(n.em,{children:"form"})," appears as a ",(0,i.jsx)(n.em,{children:"top level form"}),", all of the actions normally performed by this ",(0,i.jsx)(n.em,{children:"macro"})," at load time must also be performed at compile time."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:' \n\n(defpackage "MY-PACKAGE" \n\n(:nicknames "MYPKG" "MY-PKG") \n\n(:use "COMMON-LISP") \n\n(:shadow "CAR" "CDR") \n\n(:shadowing-import-from "VENDOR-COMMON-LISP" "CONS") \n\n(:import-from "VENDOR-COMMON-LISP" "GC") \n\n(:export "EQ" "CONS" "FROBOLA") \n\n) \n\n(defpackage my-package \n\n(:nicknames mypkg :MY-PKG) ; remember Common Lisp conventions for case \n\n(:use common-lisp) ; conversion on symbols \n\n(:shadow CAR :cdr #:cons) \n\n(:export "CONS") ; this is the shadowed one. \n\n) \n\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,i.jsxs)(n.p,{children:["Existing ",(0,i.jsx)(n.em,{children:"packages"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,i.jsxs)(n.p,{children:["If one of the supplied ",":nicknames"," already refers to an existing ",(0,i.jsx)(n.em,{children:"package"}),", an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"package-error"})," is signaled."]}),"\n",(0,i.jsxs)(n.p,{children:["An error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"program-error"})," should be signaled if ",":size"," or ",":documentation"," appears more than once."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"defpackage"})}),"\n",(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.em,{children:"implementations"})," might allow extended ",(0,i.jsx)(n.em,{children:"options"})," an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"program-error"})," should be signaled if an ",(0,i.jsx)(n.em,{children:"option"})," is present that is not actually supported in the host ",(0,i.jsx)(n.em,{children:"implementation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The collection of ",(0,i.jsx)(n.em,{children:"symbol-name"})," arguments given to the options ",":shadow",", ",":intern",", ",":import-from",", and ",":shadowing-import-from"," must all be disjoint; additionally, the ",(0,i.jsx)(n.em,{children:"symbol-name"})," arguments given to ",":export"," and ",":intern"," must be disjoint. Disjoint in this context is defined as no two of the ",(0,i.jsx)(n.em,{children:"symbol-names"})," being ",(0,i.jsx)(n.strong,{children:"string="})," with each other. If either condition is violated, an error of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"program-error"})," should be signaled."]}),"\n",(0,i.jsxs)(n.p,{children:["For the ",":shadowing-import-from"," and ",":import-from"," options, a ",(0,i.jsx)(n.em,{children:"correctable error"})," of ",(0,i.jsx)(n.em,{children:"type"})," ",(0,i.jsx)(n.strong,{children:"package-error"})," is signaled if no ",(0,i.jsx)(n.em,{children:"symbol"})," is ",(0,i.jsx)(n.em,{children:"accessible"})," in the ",(0,i.jsx)(n.em,{children:"package"})," named by ",(0,i.jsx)(n.em,{children:"package-name"})," for one of the argument ",(0,i.jsx)(n.em,{children:"symbol-names"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Name conflict errors are handled by the underlying calls to ",(0,i.jsx)(n.strong,{children:"make-package"}),", ",(0,i.jsx)(n.strong,{children:"use-package"}),", ",(0,i.jsx)(n.strong,{children:"import"}),", and ",(0,i.jsx)(n.strong,{children:"export"}),". See Section 11.1 (Package Concepts)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"documentation"}),", Section 11.1 (Package Concepts), Section 3.2 (Compilation)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",":intern"," option is useful if an ",":import-from"," or a ",":shadowing-import-from"," option in a subsequent call to ",(0,i.jsx)(n.strong,{children:"defpackage"})," (for some other ",(0,i.jsx)(n.em,{children:"package"}),") expects to find these ",(0,i.jsx)(n.em,{children:"symbols accessible"})," but not necessarily external."]}),"\n",(0,i.jsxs)(n.p,{children:["It is recommended that the entire ",(0,i.jsx)(n.em,{children:"package"})," definition is put in a single place, and that all the ",(0,i.jsx)(n.em,{children:"package"})," definitions of a program are in a single file. This file can be ",(0,i.jsx)(n.em,{children:"loaded"})," before ",(0,i.jsx)(n.em,{children:"loading"})," or compiling anything else that depends on those ",(0,i.jsx)(n.em,{children:"packages"}),". Such a file can be read in the COMMON-LISP-USER ",(0,i.jsx)(n.em,{children:"package"}),", avoiding any initial state issues."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"defpackage"})," cannot be used to create two \u201cmutually recursive\u201d packages, such as:"]}),"\n",(0,i.jsx)(n.p,{children:"(defpackage my-package"}),"\n",(0,i.jsxs)(n.p,{children:["(",":use"," common-lisp your-package) ;requires your-package to exist first"]}),"\n",(0,i.jsxs)(n.p,{children:["(",":export",' "MY-FUN"))']}),"\n",(0,i.jsx)(n.p,{children:"(defpackage your-package"}),"\n",(0,i.jsxs)(n.p,{children:["(",":use"," common-lisp)"]}),"\n",(0,i.jsxs)(n.p,{children:["(",":import-from",' my-package "MY-FUN") ;requires my-package to exist first']}),"\n",(0,i.jsxs)(n.p,{children:["(",":export",' "MY-FUN"))']}),"\n",(0,i.jsxs)(n.p,{children:["However, nothing prevents the user from using the ",(0,i.jsx)(n.em,{children:"package"}),"-affecting functions such as ",(0,i.jsx)(n.strong,{children:"use-package"}),", ",(0,i.jsx)(n.strong,{children:"import"}),", and ",(0,i.jsx)(n.strong,{children:"export"})," to establish such links after a more standard use of ",(0,i.jsx)(n.strong,{children:"defpackage"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The macroexpansion of ",(0,i.jsx)(n.strong,{children:"defpackage"})," could usefully canonicalize the names into ",(0,i.jsx)(n.em,{children:"strings"}),", so that even if a source file has random ",(0,i.jsx)(n.em,{children:"symbols"})," in the ",(0,i.jsx)(n.strong,{children:"defpackage"})," form, the compiled file would only contain ",(0,i.jsx)(n.em,{children:"strings"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Frequently additional ",(0,i.jsx)(n.em,{children:"implementation-dependent"})," options take the form of a ",(0,i.jsx)(n.em,{children:"keyword"})," standing by itself as an abbreviation for a list (keyword T); this syntax should be properly reported as an"]}),"\n",(0,i.jsx)(n.p,{children:"unrecognized option in implementations that do not support it."})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}const t={},d="defpackage",o={id:"chap-11/bb-c-dictionary/defpackage",title:"defpackage",description:"Expanded Reference: defpackage",source:"@site/docs/chap-11/bb-c-dictionary/defpackage.md",sourceDirName:"chap-11/bb-c-dictionary",slug:"/chap-11/bb-c-dictionary/defpackage",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/defpackage",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-11/bb-c-dictionary/defpackage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"11.2 Packages Dictionary",permalink:"/cl-language-reference/docs/category/112-packages-dictionary"},next:{title:"delete-package",permalink:"/cl-language-reference/docs/chap-11/bb-c-dictionary/deletepackage"}},l={},h=[{value:"Expanded Reference: defpackage",id:"expanded-reference-defpackage",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"defpackage",children:"defpackage"}),"\n","\n","\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"expanded-reference-defpackage",children:"Expanded Reference: defpackage"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lisp",children:"(defpackage )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var i=s(67294);const r={},a=i.createContext(r);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);