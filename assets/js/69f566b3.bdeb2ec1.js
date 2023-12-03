"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[49342],{46742:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>j,contentTitle:()=>f,default:()=>y,frontMatter:()=>p,metadata:()=>x,toc:()=>u});var t=s(85893),i=s(11151);function a(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["There are many kinds of ",(0,t.jsx)(n.em,{children:"file systems"}),", varying widely both in their superficial syntactic details, and in their underlying power and structure. The facilities provided by Common Lisp for referring to and manipulating ",(0,t.jsx)(n.em,{children:"files"})," has been chosen to be compatible with many kinds of ",(0,t.jsx)(n.em,{children:"file systems"}),", while at the same time minimizing the program-visible differences between kinds of ",(0,t.jsx)(n.em,{children:"file systems"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Since ",(0,t.jsx)(n.em,{children:"file systems"})," vary in their conventions for naming ",(0,t.jsx)(n.em,{children:"files"}),", there are two distinct ways to represent ",(0,t.jsx)(n.em,{children:"filenames"}),": as ",(0,t.jsx)(n.em,{children:"namestrings"})," and as ",(0,t.jsx)(n.em,{children:"pathnames"}),"."]})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function m(e){const n={em:"em",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"namestring"})," is a ",(0,t.jsx)(n.em,{children:"string"})," that represents a ",(0,t.jsx)(n.em,{children:"filename"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In general, the syntax of ",(0,t.jsx)(n.em,{children:"namestrings"})," involves the use of ",(0,t.jsx)(n.em,{children:"implementation-defined"})," conventions, usually those customary for the ",(0,t.jsx)(n.em,{children:"file system"})," in which the named ",(0,t.jsx)(n.em,{children:"file"})," resides. The only exception is the syntax of a ",(0,t.jsx)(n.em,{children:"logical pathname namestring"}),", which is defined in this specification; see Section 19.3.1 (Syntax of Logical Pathname Namestrings)."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"conforming program"})," must never unconditionally use a ",(0,t.jsx)(n.em,{children:"literal namestring"})," other than a ",(0,t.jsx)(n.em,{children:"logical pathname namestring"})," because Common Lisp does not define any ",(0,t.jsx)(n.em,{children:"namestring"})," syntax other than that for ",(0,t.jsx)(n.em,{children:"logical pathnames"})," that would be guaranteed to be portable. However, a ",(0,t.jsx)(n.em,{children:"conforming program"})," can, if it is careful, successfully manipulate user-supplied data which contains or refers to non-portable ",(0,t.jsx)(n.em,{children:"namestrings"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"namestring"})," can be ",(0,t.jsx)(n.em,{children:"coerced"})," to a ",(0,t.jsx)(n.em,{children:"pathname"})," by the ",(0,t.jsx)(n.em,{children:"functions"})," ",(0,t.jsx)(n.strong,{children:"pathname"})," or ",(0,t.jsx)(n.strong,{children:"parse-namestring"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function c(e){const n={em:"em",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Pathnames"})," are structured ",(0,t.jsx)(n.em,{children:"objects"})," that can represent, in an ",(0,t.jsx)(n.em,{children:"implementation-independent"})," way, the ",(0,t.jsx)(n.em,{children:"filenames"})," that are used natively by an underlying ",(0,t.jsx)(n.em,{children:"file system"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, ",(0,t.jsx)(n.em,{children:"pathnames"})," can also represent certain partially composed ",(0,t.jsx)(n.em,{children:"filenames"})," for which an underlying ",(0,t.jsx)(n.em,{children:"file system"})," might not have a specific ",(0,t.jsx)(n.em,{children:"namestring"})," representation."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"pathname"})," need not correspond to any file that actually exists, and more than one ",(0,t.jsx)(n.em,{children:"pathname"})," can refer to the same file. For example, the ",(0,t.jsx)(n.em,{children:"pathname"})," with a version of ",":newest"," might refer to the same file as a ",(0,t.jsx)(n.em,{children:"pathname"})," with the same components except a certain number as the version. Indeed, a ",(0,t.jsx)(n.em,{children:"pathname"})," with version ",":newest"," might refer to different files as time passes, because the meaning of such a ",(0,t.jsx)(n.em,{children:"pathname"})," depends on the state of the file system."]}),"\n",(0,t.jsxs)(n.p,{children:["Some ",(0,t.jsx)(n.em,{children:"file systems"})," naturally use a structural model for their ",(0,t.jsx)(n.em,{children:"filenames"}),", while others do not. Within the Common Lisp ",(0,t.jsx)(n.em,{children:"pathname"})," model, all ",(0,t.jsx)(n.em,{children:"filenames"})," are seen as having a particular structure, even if that structure is not reflected in the underlying ",(0,t.jsx)(n.em,{children:"file system"}),". The nature of the mapping between structure imposed by ",(0,t.jsx)(n.em,{children:"pathnames"})," and the structure, if any, that is used by the underlying ",(0,t.jsx)(n.em,{children:"file system"})," is ",(0,t.jsx)(n.em,{children:"implementation-defined"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Every ",(0,t.jsx)(n.em,{children:"pathname"})," has six components: a host, a device, a directory, a name, a type, and a version. By naming ",(0,t.jsx)(n.em,{children:"files"})," with ",(0,t.jsx)(n.em,{children:"pathnames"}),", Common Lisp programs can work in essentially the same way even in ",(0,t.jsx)(n.em,{children:"file systems"})," that seem superficially quite different. For a detailed description of these components, see Section 19.2.1 (Pathname Components)."]}),"\n",(0,t.jsxs)(n.p,{children:["The mapping of the ",(0,t.jsx)(n.em,{children:"pathname"})," components into the concepts peculiar to each ",(0,t.jsx)(n.em,{children:"file system"})," is ",(0,t.jsx)(n.em,{children:"implementation-defined"}),". There exist conceivable ",(0,t.jsx)(n.em,{children:"pathnames"})," for which there is no mapping to a syntactically valid ",(0,t.jsx)(n.em,{children:"filename"})," in a particular ",(0,t.jsx)(n.em,{children:"implementation"}),". An ",(0,t.jsx)(n.em,{children:"implementation"})," may use various strategies in an attempt to find a mapping; for example, an ",(0,t.jsx)(n.em,{children:"implementation"})," may quietly truncate ",(0,t.jsx)(n.em,{children:"filenames"})," that exceed length limitations imposed by the underlying ",(0,t.jsx)(n.em,{children:"file system"}),", or ignore certain ",(0,t.jsx)(n.em,{children:"pathname"})," components for which the ",(0,t.jsx)(n.em,{children:"file system"})," provides no support. If such a mapping cannot be found, an error of ",(0,t.jsx)(n.em,{children:"type"})," ",(0,t.jsx)(n.strong,{children:"file-error"})," is signaled."]}),"\n",(0,t.jsxs)(n.p,{children:["The time at which this mapping and associated error signaling occurs is ",(0,t.jsx)(n.em,{children:"implementation-dependent"}),". Specifically, it may occur at the time the ",(0,t.jsx)(n.em,{children:"pathname"})," is constructed, when coercing a ",(0,t.jsx)(n.em,{children:"pathname"})," to a ",(0,t.jsx)(n.em,{children:"namestring"}),", or when an attempt is made to ",(0,t.jsx)(n.em,{children:"open"})," or otherwise access the ",(0,t.jsx)(n.em,{children:"file"})," designated by the ",(0,t.jsx)(n.em,{children:"pathname"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Figure 19\u20131 lists some ",(0,t.jsx)(n.em,{children:"defined names"})," that are applicable to ",(0,t.jsx)(n.em,{children:"pathnames"}),"."]}),"\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsxs)(n.th,{style:{textAlign:"left"},children:["<p>",(0,t.jsx)(n.strong,{children:"*default-pathname-defaults* namestring pathname-name directory-namestring open pathname-type enough-namestring parse-namestring pathname-version file-namestring pathname pathnamep file-string-length pathname-device translate-pathname host-namestring pathname-directory truename"})," </p><p>",(0,t.jsx)(n.strong,{children:"make-pathname pathname-host user-homedir-pathname merge-pathnames pathname-match-p wild-pathname-p"}),"</p>"]})})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Figure 19\u20131. Pathname Operations"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function o(e){const n={em:"em",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Parsing is the operation used to convert a ",(0,t.jsx)(n.em,{children:"namestring"})," into a ",(0,t.jsx)(n.em,{children:"pathname"}),". Except in the case of parsing ",(0,t.jsx)(n.em,{children:"logical pathname namestrings"}),", this operation is ",(0,t.jsx)(n.em,{children:"implementation-dependent"}),", because the format of ",(0,t.jsx)(n.em,{children:"namestrings"})," is ",(0,t.jsx)(n.em,{children:"implementation-dependent"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"conforming implementation"})," is free to accommodate other ",(0,t.jsx)(n.em,{children:"file system"})," features in its ",(0,t.jsx)(n.em,{children:"pathname"})," representation and provides a parser that can process such specifications in ",(0,t.jsx)(n.em,{children:"namestrings"}),". ",(0,t.jsx)(n.em,{children:"Conforming programs"})," must not depend on any such features, since those features will not be portable."]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}const p={title:"19.1 Overview of Filenames"},f="19.1 Overview of Filenames",x={id:"chap-19/bj-b-overview-of-filenames",title:"19.1 Overview of Filenames",description:"19.1.1 Namestrings as Filenames",source:"@site/docs/chap-19/bj-b-overview-of-filenames.md",sourceDirName:"chap-19",slug:"/chap-19/bj-b-overview-of-filenames",permalink:"/cl-language-reference/docs/chap-19/bj-b-overview-of-filenames",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-19/bj-b-overview-of-filenames.md",tags:[],version:"current",frontMatter:{title:"19.1 Overview of Filenames"},sidebar:"tutorialSidebar",previous:{title:"19. Filenames",permalink:"/cl-language-reference/docs/category/19-filenames"},next:{title:"19.2 Pathnames",permalink:"/cl-language-reference/docs/chap-19/bj-c-pathnames"}},j={},u=[{value:"19.1.1 Namestrings as Filenames",id:"1911-namestrings-as-filenames",level:2},{value:"19.1.2 Pathnames as Filenames",id:"1912-pathnames-as-filenames",level:2},{value:"19.1.3 Parsing Namestrings Into Pathnames",id:"1913-parsing-namestrings-into-pathnames",level:2}];function g(e){const n={h1:"h1",h2:"h2",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"191-overview-of-filenames",children:"19.1 Overview of Filenames"}),"\n","\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(n.h2,{id:"1911-namestrings-as-filenames",children:"19.1.1 Namestrings as Filenames"}),"\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(n.h2,{id:"1912-pathnames-as-filenames",children:"19.1.2 Pathnames as Filenames"}),"\n","\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h2,{id:"1913-parsing-namestrings-into-pathnames",children:"19.1.3 Parsing Namestrings Into Pathnames"}),"\n","\n","\n",(0,t.jsx)(d,{})]})}function y(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>m,a:()=>r});var t=s(67294);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);