"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[26885],{933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>h,toc:()=>d});var a=t(85893),i=t(11151);function s(e){const n={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{DictionaryLink:t,GlossaryTerm:s}=n;return t||r("DictionaryLink",!0),s||r("GlossaryTerm",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"logical-pathname-translations"})," ",(0,a.jsx)(s,{term:"accessor",children:(0,a.jsx)("i",{children:"Accessor"})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Syntax:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(t,{term:"logical-pathname-translations",children:(0,a.jsx)("b",{children:"logical-pathname-translations"})})," ",(0,a.jsx)(n.em,{children:"host \u2192 translations"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"(setf (logical-pathname-translations"})," ",(0,a.jsx)(n.em,{children:"host"}),"**)** ",(0,a.jsx)(n.em,{children:"new-translations"}),"**)**"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Arguments and Values:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"host"}),"\u2013a ",(0,a.jsx)(n.em,{children:"logical host designator"})," ."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"translations"}),", ",(0,a.jsx)(n.em,{children:"new-translations"}),"\u2014a ",(0,a.jsx)(s,{term:"list",children:(0,a.jsx)("i",{children:"list"})}),"."]}),"\n",(0,a.jsx)(t,{term:"logical-pathname-translations",children:(0,a.jsx)("b",{children:"logical-pathname-translations"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Description:"})}),"\n",(0,a.jsxs)(n.p,{children:["Returns the host\u2019s ",(0,a.jsx)(s,{term:"list",children:(0,a.jsx)("i",{children:"list"})})," of translations. Each translation is a ",(0,a.jsx)(s,{term:"list",children:(0,a.jsx)("i",{children:"list"})})," of at least two elements: ",(0,a.jsx)(n.em,{children:"from-wildcard"})," and ",(0,a.jsx)(n.em,{children:"to-wildcard"}),". Any additional elements are ",(0,a.jsx)(s,{term:"implementation-defined",children:(0,a.jsx)("i",{children:"implementation-defined"})}),". ",(0,a.jsx)(n.em,{children:"From-wildcard"})," is a ",(0,a.jsx)(n.em,{children:"logical pathname"})," whose host is ",(0,a.jsx)(n.em,{children:"host"}),". ",(0,a.jsx)(n.em,{children:"To-wildcard"})," is a ",(0,a.jsx)(s,{term:"pathname",children:(0,a.jsx)("i",{children:"pathname"})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["(setf (logical-pathname-translations ",(0,a.jsx)(n.em,{children:"host"}),") ",(0,a.jsx)(n.em,{children:"translations"}),") sets a ",(0,a.jsx)(n.em,{children:"logical pathname"})," host\u2019s ",(0,a.jsx)(s,{term:"list",children:(0,a.jsx)("i",{children:"list"})})," of ",(0,a.jsx)(n.em,{children:"translations"}),". If ",(0,a.jsx)(n.em,{children:"host"})," is a ",(0,a.jsx)(s,{term:"string",children:(0,a.jsx)("i",{children:"string"})})," that has not been previously used as a ",(0,a.jsx)(n.em,{children:"logical pathname"})," host, a new ",(0,a.jsx)(n.em,{children:"logical pathname"})," host is defined; otherwise an existing host\u2019s translations are replaced. ",(0,a.jsx)(n.em,{children:"logical pathname"})," host names are compared with ",(0,a.jsx)(n.strong,{children:"string-equal"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["When setting the translations list, each ",(0,a.jsx)(n.em,{children:"from-wildcard"})," can be a ",(0,a.jsx)(s,{styled:!0,term:"logical pathname",children:(0,a.jsx)("i",{children:"logical pathname"})})," whose host is ",(0,a.jsx)(n.em,{children:"host"})," or a ",(0,a.jsx)(s,{styled:!0,term:"logical pathname",children:(0,a.jsx)("i",{children:"logical pathname"})})," namestring parseable by (parse-namestring ",(0,a.jsx)(n.em,{children:"string host"}),"), where ",(0,a.jsx)(n.em,{children:"host"})," represents the appropriate ",(0,a.jsx)(s,{term:"object",children:(0,a.jsx)("i",{children:"object"})})," as defined by ",(0,a.jsx)(t,{term:"parse-namestring",children:(0,a.jsx)("b",{children:"parse-namestring"})}),". Each ",(0,a.jsx)(n.em,{children:"to-wildcard"})," can be anything coercible to a ",(0,a.jsx)(s,{term:"pathname",children:(0,a.jsx)("i",{children:"pathname"})})," by (pathname ",(0,a.jsx)(n.em,{children:"to-wildcard"}),"). If ",(0,a.jsx)(n.em,{children:"to-wildcard"})," coerces to a ",(0,a.jsx)(s,{styled:!0,term:"logical pathname",children:(0,a.jsx)("i",{children:"logical pathname"})}),", ",(0,a.jsx)(t,{term:"translate-logical-pathname",children:(0,a.jsx)("b",{children:"translate-logical-pathname"})})," will perform repeated translation steps when it uses it."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"host"})," is either the host component of a ",(0,a.jsx)(s,{styled:!0,term:"logical pathname",children:(0,a.jsx)("i",{children:"logical pathname"})})," or a ",(0,a.jsx)(s,{term:"string",children:(0,a.jsx)("i",{children:"string"})})," that has been defined as a ",(0,a.jsx)(s,{styled:!0,term:"logical pathname",children:(0,a.jsx)("i",{children:"logical pathname"})})," host name by ",(0,a.jsx)(t,{term:"setf",children:(0,a.jsx)("b",{children:"setf"})})," of ",(0,a.jsx)(t,{term:"logical-pathname-translations",children:(0,a.jsx)("b",{children:"logical-pathname-translations"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:';;;A very simple example of setting up a logical pathname host. No \n;;;translations are necessary to get around file system restrictions, so \n;;;all that is necessary is to specify the root of the physical directory \n;;;tree that contains the logical file system. \n;;;The namestring syntax on the right-hand side is implementation-dependent. \n(setf (logical-pathname-translations "foo") \n      \u2019(("\\*\\*;\\*.\\*.\\*" "MY-LISPM:>library>foo>\\*\\*>"))) \n;;;Sample use of that logical pathname. The return value \n;;;is implementation-dependent. \n(translate-logical-pathname "foo:bar;baz;mum.quux.3") \n\u2192 #P"MY-LISPM:>library>foo>bar>baz>mum.quux.3" \n;;;A more complex example, dividing the files among two file servers \n;;;and several different directories. This Unix doesn\u2019t support \n;;;:WILD-INFERIORS in the directory, so each directory level must \n;;;be translated individually. No file name or type translations \n;;;are required except for .MAIL to .MBX. \n;;;The namestring syntax on the right-hand side is implementation-dependent. \n(setf (logical-pathname-translations "prog") \n      \u2019(("RELEASED;\\*.\\*.\\*" "MY-UNIX:/sys/bin/my-prog/") \n\t("RELEASED;\\*;\\*.\\*.\\*" "MY-UNIX:/sys/bin/my-prog/\\*/") \n\t("EXPERIMENTAL;\\*.\\*.\\*" "MY-UNIX:/usr/Joe/development/prog/") \n\t\n\t\n\t**logical-pathname-translations** \n\t("EXPERIMENTAL;DOCUMENTATION;\\*.\\*.\\*" \n\t "MY-VAX:SYS$DISK:[JOE.DOC]") \n\t("EXPERIMENTAL;\\*;\\*.\\*.\\*" "MY-UNIX:/usr/Joe/development/prog/\\*/") \n\t("MAIL;\\*\\*;\\*.MAIL" "MY-VAX:SYS$DISK:[JOE.MAIL.PROG...]\\*.MBX"))) \n;;;Sample use of that logical pathname. The return value \n;;;is implementation-dependent. \n(translate-logical-pathname "prog:mail;save;ideas.mail.3") \n\u2192 #P"MY-VAX:SYS$DISK:[JOE.MAIL.PROG.SAVE]IDEAS.MBX.3" \n;;;Example translations for a program that uses three files main.lisp, \n;;;auxiliary.lisp, and documentation.lisp. These translations might be \n;;;supplied by a software supplier as examples. \n;;;For Unix with long file names \n(setf (logical-pathname-translations "prog") \n      \u2019(("CODE;\\*.\\*.\\*" "/lib/prog/"))) \n;;;Sample use of that logical pathname. The return value \n;;;is implementation-dependent. \n(translate-logical-pathname "prog:code;documentation.lisp") \n\u2192 #P"/lib/prog/documentation.lisp" \n;;;For Unix with 14-character file names, using .lisp as the type \n(setf (logical-pathname-translations "prog") \n      \u2019(("CODE;DOCUMENTATION.\\*.\\*" "/lib/prog/docum.\\*") \n\t("CODE;\\*.\\*.\\*" "/lib/prog/"))) \n;;;Sample use of that logical pathname. The return value \n;;;is implementation-dependent. \n(translate-logical-pathname "prog:code;documentation.lisp") \n\u2192 #P"/lib/prog/docum.lisp" \n;;;For Unix with 14-character file names, using .l as the type \n;;;The second translation shortens the compiled file type to .b \n(setf (logical-pathname-translations "prog") \n      \u2018(("\\*\\*;\\*.LISP.\\*" ,(logical-pathname "PROG:\\*\\*;\\*.L.\\*")) \n\t(,(compile-file-pathname (logical-pathname "PROG:\\*\\*;\\*.LISP.\\*")) \n\t  \n\t  \n\t  **logical-pathname-translations** \n\t  ,(logical-pathname "PROG:\\*\\*;\\*.B.\\*")) \n\t("CODE;DOCUMENTATION.\\*.\\*" "/lib/prog/documentatio.\\*") \n\t("CODE;\\*.\\*.\\*" "/lib/prog/"))) \n;;;Sample use of that logical pathname. The return value \n;;;is implementation-dependent. \n(translate-logical-pathname "prog:code;documentation.lisp") \n\u2192 #P"/lib/prog/documentatio.l" \n;;;For a Cray with 6 character names and no directories, types, or versions. (setf (logical-pathname-translations "prog") \n(let ((l \u2019(("MAIN" "PGMN") \n\t   ("AUXILIARY" "PGAUX") \n\t   ("DOCUMENTATION" "PGDOC"))) \n      (logpath (logical-pathname "prog:code;")) \n      (phypath (pathname "XXX"))) \n  (append \n   ;; Translations for source files \n   (mapcar #\u2019(lambda (x) \n\t       (let ((log (first x)) \n\t\t     (phy (second x))) \n\t\t (list (make-pathname :name log \n\t\t\t\t      :type "LISP" \n\t\t\t\t      :version :wild \n\t\t\t\t      :defaults logpath) \n\t\t       (make-pathname :name phy \n\t\t\t\t      :defaults phypath)))) \n\t     l) \n   ;; Translations for compiled files \n   (mapcar #\u2019(lambda (x) \n\t       (let\\* ((log (first x)) \n\t\t       (phy (second x)) \n\t\t       (com (compile-file-pathname \n\t\t\t     (make-pathname :name log \n\t\t\t\t\t    :type "LISP" \n\t\t\t\t\t    :version :wild \n\t\t\t\t\t    :defaults logpath)))) \n\t\t      (setq phy (concatenate \u2019string phy "B")) \n\t\t      (list com \n\t\t\t    (make-pathname :name phy \n\t\t\t\t\t   :defaults phypath)))) \n\t     l)))) \n\n;;;Sample use of that logical pathname. The return value \n;;;is implementation-dependent. \n(translate-logical-pathname "prog:code;documentation.lisp") \n\u2192 #P"PGDOC" \n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Exceptional Situations:"})}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.em,{children:"host"})," is incorrectly supplied, an error of ",(0,a.jsx)(s,{term:"type",children:(0,a.jsx)("i",{children:"type"})})," ",(0,a.jsx)(t,{term:"type-error",children:(0,a.jsx)("b",{children:"type-error"})})," is signaled."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"See Also:"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(t,{term:"logical-pathname",children:(0,a.jsx)("b",{children:"logical-pathname"})}),", Section 19.1.2 (Pathnames as Filenames)"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,a.jsxs)(n.p,{children:["Implementations can define additional ",(0,a.jsx)(s,{term:"function",children:(0,a.jsx)("i",{children:"functions"})})," that operate on ",(0,a.jsx)(s,{styled:!0,term:"logical pathname",children:(0,a.jsx)("i",{children:"logical pathname"})})," hosts, for example to specify additional translation rules or options."]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}function r(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={title:"logical-pathname-translations"},c="logical-pathname-translations",h={id:"chap-19/bj-e-dictionary/logical-pathname-translations_accessor",title:"logical-pathname-translations",description:"Expanded Reference: logical-pathname-translations",source:"@site/docs/chap-19/bj-e-dictionary/logical-pathname-translations_accessor.md",sourceDirName:"chap-19/bj-e-dictionary",slug:"/chap-19/bj-e-dictionary/logical-pathname-translations_accessor",permalink:"/cl-language-reference/chap-19/bj-e-dictionary/logical-pathname-translations_accessor",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/chap-19/bj-e-dictionary/logical-pathname-translations_accessor.md",tags:[],version:"current",frontMatter:{title:"logical-pathname-translations"},sidebar:"tutorialSidebar",previous:{title:"load-logical-pathname-translations",permalink:"/cl-language-reference/chap-19/bj-e-dictionary/load-logical-pathname-translations_function"},next:{title:"logical-pathname",permalink:"/cl-language-reference/chap-19/bj-e-dictionary/logical-pathname_function"}},p={},d=[{value:"Expanded Reference: logical-pathname-translations",id:"expanded-reference-logical-pathname-translations",level:2}];function m(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"logical-pathname-translations",children:"logical-pathname-translations"}),"\n","\n","\n",(0,a.jsx)(l,{}),"\n",(0,a.jsx)(n.h2,{id:"expanded-reference-logical-pathname-translations",children:"Expanded Reference: logical-pathname-translations"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"TODO: Please contribute to this page by adding explanations and examples"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lisp",children:"(logical-pathname-translations )\n"})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var a=t(67294);const i={},s=a.createContext(i);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);