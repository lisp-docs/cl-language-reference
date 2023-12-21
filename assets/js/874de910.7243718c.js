"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[60698],{66802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=t(85893),s=t(11151);function i(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"make-pathname"})," ",(0,a.jsx)(n.em,{children:"Function"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"make-pathname"})," &key ",(0,a.jsx)(n.em,{children:"host device directory name type version defaults case"})]}),"\n",(0,a.jsx)(n.p,{children:"\u2192 pathname"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"host"}),"\u2014a ",(0,a.jsx)(n.em,{children:"valid physical pathname host"}),". Complicated defaulting behavior; see below. ",(0,a.jsx)(n.em,{children:"device"}),"\u2014a ",(0,a.jsx)(n.em,{children:"valid pathname device"}),". Complicated defaulting behavior; see below."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"directory"}),"\u2014a ",(0,a.jsx)(n.em,{children:"valid pathname directory"}),". Complicated defaulting behavior; see below. ",(0,a.jsx)(n.em,{children:"name"}),"\u2014a ",(0,a.jsx)(n.em,{children:"valid pathname name"}),". Complicated defaulting behavior; see below."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"type"}),"\u2014a ",(0,a.jsx)(n.em,{children:"valid pathname type"}),". Complicated defaulting behavior; see below."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"version"}),"\u2014a ",(0,a.jsx)(n.em,{children:"valid pathname version"}),". Complicated defaulting behavior; see below."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"defaults"}),"\u2014a ",(0,a.jsx)(n.em,{children:"pathname designator"})," . The default is a ",(0,a.jsx)(n.em,{children:"pathname"})," whose host component is the same as the host component of the ",(0,a.jsx)(n.em,{children:"value"})," of ",(0,a.jsx)(n.strong,{children:"*default-pathname-defaults*"}),", and whose other components are all ",(0,a.jsx)(n.strong,{children:"nil"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"case"}),"\u2014one of ",":common"," or ",":local",". The default is ",":local","."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"pathname"}),"\u2014a ",(0,a.jsx)(n.em,{children:"pathname"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(n.p,{children:["Constructs and returns a ",(0,a.jsx)(n.em,{children:"pathname"})," from the supplied keyword arguments."]}),"\n",(0,a.jsxs)(n.p,{children:["After the components supplied explicitly by ",(0,a.jsx)(n.em,{children:"host"}),", ",(0,a.jsx)(n.em,{children:"device"}),", ",(0,a.jsx)(n.em,{children:"directory"}),", ",(0,a.jsx)(n.em,{children:"name"}),", ",(0,a.jsx)(n.em,{children:"type"}),", and ",(0,a.jsx)(n.em,{children:"version"})," are filled in, the merging rules used by ",(0,a.jsx)(n.strong,{children:"merge-pathnames"})," are used to fill in any unsupplied components from the defaults supplied by ",(0,a.jsx)(n.em,{children:"defaults"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Whenever a ",(0,a.jsx)(n.em,{children:"pathname"})," is constructed the components may be canonicalized if appropriate. For the explanation of the arguments that can be supplied for each component, see Section 19.2.1 (Pathname Components)."]}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.em,{children:"case"})," is supplied, it is treated as described in Section 19.2.2.1.2 (Case in Pathname Components)."]}),"\n",(0,a.jsxs)(n.p,{children:["The resulting ",(0,a.jsx)(n.em,{children:"pathname"})," is a ",(0,a.jsx)(n.em,{children:"logical pathname"})," if and only its host component is a ",(0,a.jsx)(n.em,{children:"logical host"})," or a ",(0,a.jsx)(n.em,{children:"string"})," that names a defined ",(0,a.jsx)(n.em,{children:"logical host"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"make-pathname"})}),"\n",(0,a.jsxs)(n.p,{children:["If the ",(0,a.jsx)(n.em,{children:"directory"})," is a ",(0,a.jsx)(n.em,{children:"string"}),", it should be the name of a top level directory, and should not contain any punctuation characters; that is, specifying a ",(0,a.jsx)(n.em,{children:"string"}),", ",(0,a.jsx)(n.em,{children:"str"}),", is equivalent to specifying the list (",":absolute"," ",(0,a.jsx)(n.em,{children:"str"}),"). Specifying the symbol ",":wild"," is equivalent to specifying the list (",":absolute"," ",":wild-inferiors","), or (",":absolute"," ",":wild",") in a file system that does not support ",":wild-inferiors","."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:'\n;; Implementation A \u2013 an implementation with access to a single \n;; Unix file system. This implementation happens to never display \n;; the \u2018host\u2019 information in a namestring, since there is only one host. \n(make-pathname :directory \u2019(:absolute "public" "games") \n\t       :name "chess" :type "db") \n\u2192 #P"/public/games/chess.db" \n;; Implementation B \u2013 an implementation with access to one or more \n;; VMS file systems. This implementation displays \u2018host\u2019 information \n;; in the namestring only when the host is not the local host. \n;; It uses a double colon to separate a host name from the host\u2019s local \n;; file name. \n(make-pathname :directory \u2019(:absolute "PUBLIC" "GAMES") \n\t       :name "CHESS" :type "DB") \n\u2192 #P"SYS$DISK:[PUBLIC.GAMES]CHESS.DB" \n(make-pathname :host "BOBBY" \n\t       :directory \u2019(:absolute "PUBLIC" "GAMES") \n\t       :name "CHESS" :type "DB") \n\u2192 #P"BOBBY::SYS$DISK:[PUBLIC.GAMES]CHESS.DB" \n;; Implementation C \u2013 an implementation with simultaneous access to \n;; multiple file systems from the same Lisp image. In this \n;; implementation, there is a convention that any text preceding the \n;; first colon in a pathname namestring is a host name. \n(dolist (case \u2019(:common :local)) \n  (dolist (host \u2019("MY-LISPM" "MY-VAX" "MY-UNIX")) \n    (print (make-pathname :host host :case case \n\t\t\t  :directory \u2019(:absolute "PUBLIC" "GAMES") \n\t\t\t  :name "CHESS" :type "DB")))) \n\u25b7 #P"MY-LISPM:>public>games>chess.db" \n\u25b7 #P"MY-VAX:SYS$DISK:[PUBLIC.GAMES]CHESS.DB" \n\u25b7 #P"MY-UNIX:/public/games/chess.db" \n\u25b7 #P"MY-LISPM:>public>games>chess.db" \n\u25b7 #P"MY-VAX:SYS$DISK:[PUBLIC.GAMES]CHESS.DB" \n\n\n\n\u25b7 #P"MY-UNIX:/PUBLIC/GAMES/CHESS.DB" \n\u2192 NIL \n\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Affected By:"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.em,{children:"file system"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"merge-pathnames"}),", ",(0,a.jsx)(n.strong,{children:"pathname"}),", ",(0,a.jsx)(n.strong,{children:"logical-pathname"}),", Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames)"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,a.jsxs)(n.p,{children:["Portable programs should not supply ",":unspecific"," for any component. See Section 19.2.2.2.3 (",":UNSPECIFIC"," as a Component Value)."]})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}const o={title:"make-pathname"},c="make-pathname",l={id:"chap-19/bj-e-dictionary/make-pathname_function",title:"make-pathname",description:"Expanded Reference: make-pathname",source:"@site/docs/chap-19/bj-e-dictionary/make-pathname_function.md",sourceDirName:"chap-19/bj-e-dictionary",slug:"/chap-19/bj-e-dictionary/make-pathname_function",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/make-pathname_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-19/bj-e-dictionary/make-pathname_function.md",tags:[],version:"current",frontMatter:{title:"make-pathname"},sidebar:"tutorialSidebar",previous:{title:"logical-pathname",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/logical-pathname_system-class"},next:{title:"merge-pathnames",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/merge-pathnames_function"}},h={},m=[{value:"Expanded Reference: make-pathname",id:"expanded-reference-make-pathname",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"make-pathname",children:"make-pathname"}),"\n","\n","\n",(0,a.jsx)(r,{}),"\n",(0,a.jsx)(n.h2,{id:"expanded-reference-make-pathname",children:"Expanded Reference: make-pathname"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:"(make-pathname )\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);