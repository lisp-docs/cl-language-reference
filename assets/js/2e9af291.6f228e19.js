"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[90561],{57181:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=a(85893),s=a(11151);function i(n){const e={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"logical-pathname-translations"})," ",(0,t.jsx)(e.em,{children:"Accessor"})]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"logical-pathname-translations"})," ",(0,t.jsx)(e.em,{children:"host \u2192 translations"})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"(setf (logical-pathname-translations"})," ",(0,t.jsx)(e.em,{children:"host"}),"**)** ",(0,t.jsx)(e.em,{children:"new-translations"}),"**)**"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Arguments and Values:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"host"}),"\u2013a ",(0,t.jsx)(e.em,{children:"logical host designator"})," ."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"translations"}),", ",(0,t.jsx)(e.em,{children:"new-translations"}),"\u2014a ",(0,t.jsx)(e.em,{children:"list"}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"logical-pathname-translations"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Description:"})}),"\n",(0,t.jsxs)(e.p,{children:["Returns the host\u2019s ",(0,t.jsx)(e.em,{children:"list"})," of translations. Each translation is a ",(0,t.jsx)(e.em,{children:"list"})," of at least two elements: ",(0,t.jsx)(e.em,{children:"from-wildcard"})," and ",(0,t.jsx)(e.em,{children:"to-wildcard"}),". Any additional elements are ",(0,t.jsx)(e.em,{children:"implementation-defined"}),". ",(0,t.jsx)(e.em,{children:"From-wildcard"})," is a ",(0,t.jsx)(e.em,{children:"logical pathname"})," whose host is ",(0,t.jsx)(e.em,{children:"host"}),". ",(0,t.jsx)(e.em,{children:"To-wildcard"})," is a ",(0,t.jsx)(e.em,{children:"pathname"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["(setf (logical-pathname-translations ",(0,t.jsx)(e.em,{children:"host"}),") ",(0,t.jsx)(e.em,{children:"translations"}),") sets a ",(0,t.jsx)(e.em,{children:"logical pathname"})," host\u2019s ",(0,t.jsx)(e.em,{children:"list"})," of ",(0,t.jsx)(e.em,{children:"translations"}),". If ",(0,t.jsx)(e.em,{children:"host"})," is a ",(0,t.jsx)(e.em,{children:"string"})," that has not been previously used as a ",(0,t.jsx)(e.em,{children:"logical pathname"})," host, a new ",(0,t.jsx)(e.em,{children:"logical pathname"})," host is defined; otherwise an existing host\u2019s translations are replaced. ",(0,t.jsx)(e.em,{children:"logical pathname"})," host names are compared with ",(0,t.jsx)(e.strong,{children:"string-equal"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["When setting the translations list, each ",(0,t.jsx)(e.em,{children:"from-wildcard"})," can be a ",(0,t.jsx)(e.em,{children:"logical pathname"})," whose host is ",(0,t.jsx)(e.em,{children:"host"})," or a ",(0,t.jsx)(e.em,{children:"logical pathname"})," namestring parseable by (parse-namestring ",(0,t.jsx)(e.em,{children:"string host"}),"), where ",(0,t.jsx)(e.em,{children:"host"})," represents the appropriate ",(0,t.jsx)(e.em,{children:"object"})," as defined by ",(0,t.jsx)(e.strong,{children:"parse-namestring"}),". Each ",(0,t.jsx)(e.em,{children:"to-wildcard"})," can be anything coercible to a ",(0,t.jsx)(e.em,{children:"pathname"})," by (pathname ",(0,t.jsx)(e.em,{children:"to-wildcard"}),"). If ",(0,t.jsx)(e.em,{children:"to-wildcard"})," coerces to a ",(0,t.jsx)(e.em,{children:"logical pathname"}),", ",(0,t.jsx)(e.strong,{children:"translate-logical-pathname"})," will perform repeated translation steps when it uses it."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.em,{children:"host"})," is either the host component of a ",(0,t.jsx)(e.em,{children:"logical pathname"})," or a ",(0,t.jsx)(e.em,{children:"string"})," that has been defined as a ",(0,t.jsx)(e.em,{children:"logical pathname"})," host name by ",(0,t.jsx)(e.strong,{children:"setf"})," of ",(0,t.jsx)(e.strong,{children:"logical-pathname-translations"}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Examples:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lisp",children:' \n\n\n\n;;;A very simple example of setting up a logical pathname host. No \n\n\n\n;;;translations are necessary to get around file system restrictions, so \n\n\n\n;;;all that is necessary is to specify the root of the physical directory \n\n\n\n;;;tree that contains the logical file system. \n\n\n\n;;;The namestring syntax on the right-hand side is implementation-dependent. \n\n\n\n(setf (logical-pathname-translations "foo") \n\n\n\n\u2019(("\\*\\*;\\*.\\*.\\*" "MY-LISPM:&gt;library&gt;foo&gt;\\*\\*&gt;"))) \n\n\n\n;;;Sample use of that logical pathname. The return value \n\n\n\n;;;is implementation-dependent. \n\n\n\n(translate-logical-pathname "foo:bar;baz;mum.quux.3") \n\n\n\n*\u2192* #P"MY-LISPM:&gt;library&gt;foo&gt;bar&gt;baz&gt;mum.quux.3" \n\n\n\n;;;A more complex example, dividing the files among two file servers \n\n\n\n;;;and several different directories. This Unix doesn\u2019t support \n\n\n\n;;;:WILD-INFERIORS in the directory, so each directory level must \n\n\n\n;;;be translated individually. No file name or type translations \n\n\n\n;;;are required except for .MAIL to .MBX. \n\n\n\n;;;The namestring syntax on the right-hand side is implementation-dependent. \n\n\n\n(setf (logical-pathname-translations "prog") \n\n\n\n\u2019(("RELEASED;\\*.\\*.\\*" "MY-UNIX:/sys/bin/my-prog/") \n\n\n\n("RELEASED;\\*;\\*.\\*.\\*" "MY-UNIX:/sys/bin/my-prog/\\*/") \n\n\n\n("EXPERIMENTAL;\\*.\\*.\\*" "MY-UNIX:/usr/Joe/development/prog/") \n\n\n\n\n\n\n\n \n\n\n\n \n\n\n\n**logical-pathname-translations** \n\n\n\n("EXPERIMENTAL;DOCUMENTATION;\\*.\\*.\\*" \n\n\n\n"MY-VAX:SYS$DISK:[JOE.DOC]") \n\n\n\n("EXPERIMENTAL;\\*;\\*.\\*.\\*" "MY-UNIX:/usr/Joe/development/prog/\\*/") \n\n\n\n("MAIL;\\*\\*;\\*.MAIL" "MY-VAX:SYS$DISK:[JOE.MAIL.PROG...]\\*.MBX"))) \n\n\n\n;;;Sample use of that logical pathname. The return value \n\n\n\n;;;is implementation-dependent. \n\n\n\n(translate-logical-pathname "prog:mail;save;ideas.mail.3") \n\n\n\n*\u2192* #P"MY-VAX:SYS$DISK:[JOE.MAIL.PROG.SAVE]IDEAS.MBX.3" \n\n\n\n;;;Example translations for a program that uses three files main.lisp, \n\n\n\n;;;auxiliary.lisp, and documentation.lisp. These translations might be \n\n\n\n;;;supplied by a software supplier as examples. \n\n\n\n;;;For Unix with long file names \n\n\n\n(setf (logical-pathname-translations "prog") \n\n\n\n\u2019(("CODE;\\*.\\*.\\*" "/lib/prog/"))) \n\n\n\n;;;Sample use of that logical pathname. The return value \n\n\n\n;;;is implementation-dependent. \n\n\n\n(translate-logical-pathname "prog:code;documentation.lisp") \n\n\n\n*\u2192* #P"/lib/prog/documentation.lisp" \n\n\n\n;;;For Unix with 14-character file names, using .lisp as the type \n\n\n\n(setf (logical-pathname-translations "prog") \n\n\n\n\u2019(("CODE;DOCUMENTATION.\\*.\\*" "/lib/prog/docum.\\*") \n\n\n\n("CODE;\\*.\\*.\\*" "/lib/prog/"))) \n\n\n\n;;;Sample use of that logical pathname. The return value \n\n\n\n;;;is implementation-dependent. \n\n\n\n(translate-logical-pathname "prog:code;documentation.lisp") \n\n\n\n*\u2192* #P"/lib/prog/docum.lisp" \n\n\n\n;;;For Unix with 14-character file names, using .l as the type \n\n\n\n;;;The second translation shortens the compiled file type to .b \n\n\n\n(setf (logical-pathname-translations "prog") \n\n\n\n\u2018(("\\*\\*;\\*.LISP.\\*" ,(logical-pathname "PROG:\\*\\*;\\*.L.\\*")) \n\n\n\n(,(compile-file-pathname (logical-pathname "PROG:\\*\\*;\\*.LISP.\\*")) \n\n\n\n\n\n\n\n \n\n\n\n \n\n\n\n**logical-pathname-translations** \n\n\n\n,(logical-pathname "PROG:\\*\\*;\\*.B.\\*")) \n\n\n\n("CODE;DOCUMENTATION.\\*.\\*" "/lib/prog/documentatio.\\*") \n\n\n\n("CODE;\\*.\\*.\\*" "/lib/prog/"))) \n\n\n\n;;;Sample use of that logical pathname. The return value \n\n\n\n;;;is implementation-dependent. \n\n\n\n(translate-logical-pathname "prog:code;documentation.lisp") \n\n\n\n*\u2192* #P"/lib/prog/documentatio.l" \n\n\n\n;;;For a Cray with 6 character names and no directories, types, or versions. (setf (logical-pathname-translations "prog") \n\n\n\n(let ((l \u2019(("MAIN" "PGMN") \n\n\n\n("AUXILIARY" "PGAUX") \n\n\n\n("DOCUMENTATION" "PGDOC"))) \n\n\n\n(logpath (logical-pathname "prog:code;")) \n\n\n\n(phypath (pathname "XXX"))) \n\n\n\n(append \n\n\n\n;; Translations for source files \n\n\n\n(mapcar #\u2019(lambda (x) \n\n\n\n(let ((log (first x)) \n\n\n\n(phy (second x))) \n\n\n\n(list (make-pathname :name log \n\n\n\n:type "LISP" \n\n\n\n:version :wild \n\n\n\n:defaults logpath) \n\n\n\n(make-pathname :name phy \n\n\n\n:defaults phypath)))) \n\n\n\nl) \n\n\n\n;; Translations for compiled files \n\n\n\n(mapcar #\u2019(lambda (x) \n\n\n\n(let\\* ((log (first x)) \n\n\n\n(phy (second x)) \n\n\n\n(com (compile-file-pathname \n\n\n\n(make-pathname :name log \n\n\n\n:type "LISP" \n\n\n\n:version :wild \n\n\n\n:defaults logpath)))) \n\n\n\n(setq phy (concatenate \u2019string phy "B")) \n\n\n\n(list com \n\n\n\n(make-pathname :name phy \n\n\n\n:defaults phypath)))) \n\n\n\nl)))) \n\n\n\n\n\n\n\n \n\n\n\n \n\n\n\n;;;Sample use of that logical pathname. The return value \n\n\n\n;;;is implementation-dependent. \n\n\n\n(translate-logical-pathname "prog:code;documentation.lisp") \n\n\n\n*\u2192* #P"PGDOC" \n\n\n\n\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Exceptional Situations:"})}),"\n",(0,t.jsxs)(e.p,{children:["If ",(0,t.jsx)(e.em,{children:"host"})," is incorrectly supplied, an error of ",(0,t.jsx)(e.em,{children:"type"})," ",(0,t.jsx)(e.strong,{children:"type-error"})," is signaled."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"See Also:"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"logical-pathname"}),", Section 19.1.2 (Pathnames as Filenames)"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(e.p,{children:["Implementations can define additional ",(0,t.jsx)(e.em,{children:"functions"})," that operate on ",(0,t.jsx)(e.em,{children:"logical pathname"})," hosts, for example to specify additional translation rules or options."]})]})}function l(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(i,{...n})}):i(n)}const o={},r="logical-pathname-translations",c={id:"chap-19/bj-e-dictionary/logicalpathnametranslations",title:"logical-pathname-translations",description:"Expanded Reference: logical-pathname-translations",source:"@site/docs/chap-19/bj-e-dictionary/logicalpathnametranslations.md",sourceDirName:"chap-19/bj-e-dictionary",slug:"/chap-19/bj-e-dictionary/logicalpathnametranslations",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/logicalpathnametranslations",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-19/bj-e-dictionary/logicalpathnametranslations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"logical-pathname",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/logicalpathname"},next:{title:"make-pathname",permalink:"/cl-language-reference/docs/chap-19/bj-e-dictionary/makepathname"}},h={},p=[{value:"Expanded Reference: logical-pathname-translations",id:"expanded-reference-logical-pathname-translations",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"logical-pathname-translations",children:"logical-pathname-translations"}),"\n","\n","\n",(0,t.jsx)(l,{}),"\n",(0,t.jsx)(e.h2,{id:"expanded-reference-logical-pathname-translations",children:"Expanded Reference: logical-pathname-translations"}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-lisp",children:"(logical-pathname-translations )\n"})})]})}function m(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>o,a:()=>l});var t=a(67294);const s={},i=t.createContext(s);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);