"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[6034],{5175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(5893),s=n(1151);const i={slug:"2023-11-26-status",title:"Current Status",authors:"daniel",tags:["status","todo","beginning"]},o=void 0,a={permalink:"/cl-language-reference/blog/2023-11-26-status",editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/blog/2023-11-26-current-status.md",source:"@site/blog/2023-11-26-current-status.md",title:"Current Status",description:"So finally, first version is out!",date:"2023-11-26T00:00:00.000Z",formattedDate:"November 26, 2023",tags:[{label:"status",permalink:"/cl-language-reference/blog/tags/status"},{label:"todo",permalink:"/cl-language-reference/blog/tags/todo"},{label:"beginning",permalink:"/cl-language-reference/blog/tags/beginning"}],readingTime:1.57,hasTruncateMarker:!1,authors:[{name:"Daniel N",title:"Lisp Docs Contributor",url:"https://github.com/daninus14",key:"daniel"}],frontMatter:{slug:"2023-11-26-status",title:"Current Status",authors:"daniel",tags:["status","todo","beginning"]},unlisted:!1,nextItem:{title:"Mission",permalink:"/cl-language-reference/blog/mission"}},l={authorsImageUrls:[void 0]},c=[{value:"How The Project is Structured",id:"how-the-project-is-structured",level:2}];function d(e){const t={code:"code",del:"del",h2:"h2",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"So finally, first version is out!"}),"\n",(0,r.jsx)(t.p,{children:"However, this is a work in progress."}),"\n",(0,r.jsx)(t.p,{children:"These are the changes that are needed for it to reach a version 1.0:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.del,{children:"Fix all the markdown titles for the right side panel navigation bar. For some reason during the parsing, some of the titles got messed up in the navigation bar. The titles in the actual content are repeated. The second one must also be removed."})}),"\n",(0,r.jsx)(t.li,{children:"Need to link up all italics to the actual page in the reference."}),"\n",(0,r.jsx)(t.li,{children:"Need to fix the tables in all the files"}),"\n",(0,r.jsx)(t.li,{children:"Need to parse and find every bit of lisp code and wrap it in the proprer ``` backquote wrappers with the lisp syntax for pretty print."}),"\n",(0,r.jsx)(t.li,{children:"Make sure everything else is good!"}),"\n",(0,r.jsxs)(t.li,{children:["Change the ",(0,r.jsx)(t.code,{children:"_category_.json"})," files to display position of chapters in sidebar correctly..."]}),"\n",(0,r.jsxs)(t.li,{children:["Change the ",(0,r.jsx)(t.code,{children:"_category_.json"})," contents to use double quotes instead of single quotes..."]}),"\n",(0,r.jsx)(t.li,{children:"Add search plugin"}),"\n",(0,r.jsx)(t.li,{children:'"beach": "The description of each operator should probably be on a separate page, because for the language reference, more material will be added there"'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"However, with that said, the project is actually ready for contributions!"}),"\n",(0,r.jsx)(t.h2,{id:"how-the-project-is-structured",children:"How The Project is Structured"}),"\n",(0,r.jsx)(t.p,{children:"The idea here was to separate the files with the original dpANS3r text from the community additions. Therefore, to add examples or any content, just create a new file. Please name it relevant to the section you will add it to, and then just import it in that section like all the other files are imported."}),"\n",(0,r.jsxs)(t.p,{children:["So instead of writing the examples in the dpANS3r itself, it will be a new file ",(0,r.jsx)(t.code,{children:"examples.md"})," where you can write anything you want. Then you would import it wherever relevant."]}),"\n",(0,r.jsxs)(t.p,{children:["Please note that because react doesn't seem to allow using numbers in component names, I had to convert all numbers to letters. ",(0,r.jsx)(t.code,{children:"A=0"}),", ",(0,r.jsx)(t.code,{children:"B=1"}),", etc..."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(7294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);