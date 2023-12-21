"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[99042],{29877:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var r=t(85893),s=t(11151);function i(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"namestring, file-namestring, directory-namestring, host-namestring, enough-namestring"})," ",(0,r.jsx)(e.em,{children:"Function"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"namestring"})," ",(0,r.jsx)(e.em,{children:"pathname \u2192 namestring"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"file-namestring"})," ",(0,r.jsx)(e.em,{children:"pathname \u2192 namestring"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"directory-namestring"})," ",(0,r.jsx)(e.em,{children:"pathname \u2192 namestring"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"host-namestring"})," ",(0,r.jsx)(e.em,{children:"pathname \u2192 namestring"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"enough-namestring"})," ",(0,r.jsx)(e.em,{children:"pathname"})," &optional ",(0,r.jsx)(e.em,{children:"defaults \u2192 namestring"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"namestring, file-namestring, directory-namestring,"})," ",(0,r.jsx)(e.em,{children:". . ."})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"pathname"}),"\u2014a ",(0,r.jsx)(e.em,{children:"pathname designator"})," ."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"defaults"}),"\u2014a ",(0,r.jsx)(e.em,{children:"pathname designator"})," . The default is the ",(0,r.jsx)(e.em,{children:"value"})," of ",(0,r.jsx)(e.strong,{children:"*default-pathname-defaults*"}),". ",(0,r.jsx)(e.em,{children:"namestring"}),"\u2014a ",(0,r.jsx)(e.em,{children:"string"})," or ",(0,r.jsx)(e.strong,{children:"nil"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Description:"})}),"\n",(0,r.jsxs)(e.p,{children:["These functions convert ",(0,r.jsx)(e.em,{children:"pathname"})," into a namestring. The name represented by ",(0,r.jsx)(e.em,{children:"pathname"})," is returned as a ",(0,r.jsx)(e.em,{children:"namestring"})," in an ",(0,r.jsx)(e.em,{children:"implementation-dependent"})," canonical form."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"namestring"})," returns the full form of ",(0,r.jsx)(e.em,{children:"pathname"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"file-namestring"})," returns just the name, type, and version components of ",(0,r.jsx)(e.em,{children:"pathname"}),". ",(0,r.jsx)(e.strong,{children:"directory-namestring"})," returns the directory name portion."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"host-namestring"})," returns the host name."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"enough-namestring"})," returns an abbreviated namestring that is just sufficient to identify the file named by ",(0,r.jsx)(e.em,{children:"pathname"})," when considered relative to the ",(0,r.jsx)(e.em,{children:"defaults"}),". It is required that"]}),"\n",(0,r.jsx)(e.p,{children:"(merge-pathnames (enough-namestring pathname defaults) defaults)"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"\u2261"})," (merge-pathnames (parse-namestring pathname nil defaults) defaults)"]}),"\n",(0,r.jsxs)(e.p,{children:["in all cases, and the result of ",(0,r.jsx)(e.strong,{children:"enough-namestring"})," is the shortest reasonable ",(0,r.jsx)(e.em,{children:"string"})," that will satisfy this criterion."]}),"\n",(0,r.jsxs)(e.p,{children:["It is not necessarily possible to construct a valid ",(0,r.jsx)(e.em,{children:"namestring"})," by concatenating some of the three shorter ",(0,r.jsx)(e.em,{children:"namestrings"})," in some order."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lisp",children:'\n(namestring "getty") \n\u2192 "getty" \n(setq q (make-pathname :host "kathy" \n\t\t       :directory \n\t\t       (pathname-directory \\*default-pathname-defaults\\*) \n\t\t       :name "getty")) \n\u2192 #S(PATHNAME :HOST "kathy" :DEVICE NIL :DIRECTORY *directory-name* \n\t\t:NAME "getty" :TYPE NIL :VERSION NIL) \n(file-namestring q) \u2192 "getty" \n(directory-namestring q) \u2192 directory-name \n(host-namestring q) \u2192 "kathy" \n;;;Using Unix syntax and the wildcard conventions used by the \n;;;particular version of Unix on which this example was created: \n\n\n\n(namestring \n (translate-pathname "/usr/dmr/hacks/frob.l" \n\t\t     "/usr/d\\*/hacks/\\*.l" \n\t\t     "/usr/d\\*/backup/hacks/backup-\\*.\\*")) \n\u2192 "/usr/dmr/backup/hacks/backup-frob.l" \n(namestring \n (translate-pathname "/usr/dmr/hacks/frob.l" \n\t\t     "/usr/d\\*/hacks/fr\\*.l" \n\t\t     "/usr/d\\*/backup/hacks/backup-\\*.\\*")) \n\u2192 "/usr/dmr/backup/hacks/backup-ob.l" \n;;;This is similar to the above example but uses two different hosts, \n;;;U: which is a Unix and V: which is a VMS. Note the translation \n;;;of file type and alphabetic case conventions. \n(namestring \n (translate-pathname "U:/usr/dmr/hacks/frob.l" \n\t\t     "U:/usr/d\\*/hacks/\\*.l" \n\t\t     "V:SYS$DISK:[D\\*.BACKUP.HACKS]BACKUP-\\*.\\*")) \n\u2192 "V:SYS$DISK:[DMR.BACKUP.HACKS]BACKUP-FROB.LSP" \n(namestring \n (translate-pathname "U:/usr/dmr/hacks/frob.l" \n\t\t     "U:/usr/d\\*/hacks/fr\\*.l" \n\t\t     "V:SYS$DISK:[D\\*.BACKUP.HACKS]BACKUP-\\*.\\*")) \n\u2192 "V:SYS$DISK:[DMR.BACKUP.HACKS]BACKUP-OB.LSP" \n\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"truename"}),", ",(0,r.jsx)(e.strong,{children:"merge-pathnames"}),", ",(0,r.jsx)(e.strong,{children:"pathname"}),", ",(0,r.jsx)(e.strong,{children:"logical-pathname"}),", Section 20.1 (File System Concepts), Section 19.1.2 (Pathnames as Filenames)"]})]})}function a(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(i,{...n})}):i(n)}const c={title:"namestring, file-namestring, directory-namestring, host-namestring, enough-namestring"},o="namestring, file-namestring, directory-namestring, host-namestring, enough-namestring",m={id:"chap-19/bj-e-dictionary/namestring_file-namestring_directory-namestring_host-namestring_enough-namestring_function",title:"namestring, file-namestring, directory-namestring, host-namestring, enough-namestring",description:"Expanded Reference: namestring, file-namestring, directory-namestring, host-namestring, enough-namestring",source:"@site/docs/chap-19/bj-e-dictionary/namestring_file-namestring_directory-namestring_host-namestring_enough-namestring_function.md",sourceDirName:"chap-19/bj-e-dictionary",slug:"/chap-19/bj-e-dictionary/namestring_file-namestring_directory-namestring_host-namestring_enough-namestring_function",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/namestring_file-namestring_directory-namestring_host-namestring_enough-namestring_function",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-19/bj-e-dictionary/namestring_file-namestring_directory-namestring_host-namestring_enough-namestring_function.md",tags:[],version:"current",frontMatter:{title:"namestring, file-namestring, directory-namestring, host-namestring, enough-namestring"},sidebar:"tutorialSidebar",previous:{title:"merge-pathnames",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/merge-pathnames_function"},next:{title:"parse-namestring",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/parse-namestring_function"}},h={},d=[{value:"Expanded Reference: namestring, file-namestring, directory-namestring, host-namestring, enough-namestring",id:"expanded-reference-namestring-file-namestring-directory-namestring-host-namestring-enough-namestring",level:2}];function g(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"namestring-file-namestring-directory-namestring-host-namestring-enough-namestring",children:"namestring, file-namestring, directory-namestring, host-namestring, enough-namestring"}),"\n","\n","\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(e.h2,{id:"expanded-reference-namestring-file-namestring-directory-namestring-host-namestring-enough-namestring",children:"Expanded Reference: namestring, file-namestring, directory-namestring, host-namestring, enough-namestring"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lisp",children:"(namestring, file-namestring, directory-namestring, host-namestring, enough-namestring )\n"})})]})}function l(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(g,{...n})}):g(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);