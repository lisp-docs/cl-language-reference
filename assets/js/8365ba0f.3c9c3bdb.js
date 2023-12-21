"use strict";(self.webpackChunkcl_language_reference=self.webpackChunkcl_language_reference||[]).push([[27852],{37941:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=i(85893),s=i(11151);const l={},r="Todo",o={id:"contribute/todo",title:"Todo",description:"Here we will list all the To Do items we have for this project, and you can help by taking care of any of them :D.",source:"@site/docs/contribute/todo.md",sourceDirName:"contribute",slug:"/contribute/todo",permalink:"/cl-language-reference/docs/contribute/todo",draft:!1,unlisted:!1,editUrl:"https://github.com/lisp-docs/cl-language-reference/tree/develop/docs/contribute/todo.md",tags:[],version:"current",frontMatter:{},sidebar:"contributeSidebar",previous:{title:"Common Lisp Dictionary Entries To Do's",permalink:"/cl-language-reference/docs/contribute/dictionary-todo"}},a={},c=[{value:"More TODOs",id:"more-todos",level:2},{value:"Done",id:"done",level:2}];function d(e){const n={a:"a",del:"del",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"todo",children:"Todo"}),"\n",(0,t.jsxs)(n.p,{children:["Here we will list all the To Do items we have for this project, and you can help by taking care of any of them ",":D","."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add Tooltips with definitions from the glossary everywhere that is relevant","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The best way to do it is by creating a hash table of the dictionary, and everywhere an italizaed word is present, suroound it with a React Component which will check if there's a definition for that text in the glossary and it will add a tooltip if it's relevant"}),"\n",(0,t.jsx)(n.li,{children:"This should probably be a react component so that it can also be used in oher Lisp Docs pages and tutorials and shared easily across projects"}),"\n",(0,t.jsx)(n.li,{children:"Update the glossary to be HTML and not markdown"}),"\n",(0,t.jsx)(n.li,{children:"Finish all the dicionary item's parsing, then update the json files for the glossary and the dicionary terms"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"We should add links to all the bolded items in the reference to go to the appropiate pages. This should be actually fairly straight forward to do with code. We can just build a hash table of the dictionary pages available, with the name of each page, then simply find all the bolded text in the reference, and if its name matches an entry in the hash table, turn in into a link for that page."}),"\n",(0,t.jsx)(n.li,{children:"We need to format al the Tables to markdown."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Examples"}),": We need expanded examples and ",(0,t.jsx)(n.strong,{children:"Explanations"})," for most of the content in the reference."]}),"\n",(0,t.jsxs)(n.li,{children:["Please take a look at the ",(0,t.jsx)(n.a,{href:"/docs/contribute/dictionary-todo",children:"Dictionary Items To Do's"})," in particular"]}),"\n",(0,t.jsxs)(n.li,{children:["Update ",(0,t.jsx)(n.del,{children:"all"})," the code blocks to be formated with markdown. ",(0,t.jsx)(n.del,{children:"We have made some available here, but please note that there may be characters or TeX terms that need to be changed to regular text."})," Markdown supports math formulas and special text, checkout the ",(0,t.jsx)(n.a,{href:"https://commonmark.org/help/",children:"Markdown Syntax"})," tutorial for how to do it. Note that we use ",(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features",children:"MDX"})," instead of vanilla markdown.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"2023/12/06 Update:"})," All the dictionary pages example sections were surrounded with code blocks for syntax highlighting, so therefore most of what's left are the code blocks in the write up sections of the reference."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"more-todos",children:"More TODOs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make the Tooltip Definition and links to dicionary pages"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/sidebar/multiple-sidebars",children:"Multiple Sidebars"})," for:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"Contribute"})}),"\n",(0,t.jsx)(n.li,{children:"Why Lisp Section: For beginners, professionals, CTOs or Project Managers"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make beginner and experienced programmer tutorials"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make the Common Lisp Standard Libary:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Goal, write the least amount of code possible."}),"\n",(0,t.jsx)(n.li,{children:"Mostly an interface which is well documented, and behind the covers calling an implementation."}),"\n",(0,t.jsx)(n.li,{children:"The actual implementation can change, but the interface stays the same."}),"\n",(0,t.jsx)(n.li,{children:"Choosing an implementation should be by 1. Security 2. Correctness 3. Performance in that order."}),"\n",(0,t.jsx)(n.li,{children:"The interface should contain whatever is necessary and in addition it may contain some extra functions to make them discoverable and ease of use to the begineer, even if in the CL specification it can be done simply, and the interface just calls the CL specified functions, goal is just to make it easer for begineers."}),"\n",(0,t.jsx)(n.li,{children:"Ideally should be available for making quick scripts as well without the need for a system definition. (maybe quicklisp already does that)."}),"\n",(0,t.jsxs)(n.li,{children:["Libraries:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Strings"}),"\n",(0,t.jsx)(n.li,{children:"regex"}),"\n",(0,t.jsx)(n.li,{children:"threads"}),"\n",(0,t.jsx)(n.li,{children:"requests"}),"\n",(0,t.jsx)(n.li,{children:"what else? see other languages... lisp script, python, java?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In all code blocks, replace &gt; and &lt; with ><,\nremove extra white lines script run...\nrun indent code blocks again\nany place that is not inside a code block, or in a title, which is italics and or bold, add the react lisp-docs util...\nget react router, test if it works, check base name, then do local route... Links...\ngo through all dictionary items, check that they are all there"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"make code blocks from sections named example which have figures..."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["title of section is examples","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"has a figure"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"no figure, then in that section, find first line which is either \\n\\s*( or \\n\\s;, and start code block from there till the end of the section"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Links to Sections like in See Also "Section 6.1.1.7 (Destructuring) "'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"done",children:"Done"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.del,{children:["All the ",(0,t.jsx)(n.em,{children:"Dictionary"})," Sections have to be separated in the docs. For example, all of section 9.2 in the original is included in our ",(0,t.jsx)(n.a,{href:"/docs/chap-9/j-b-condition-system-concepts",children:"9.1"}),". We need to split that file into two. Similarly for chapters"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"3.8"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"4.4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"5.3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"6.2"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"7.7"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"8.1?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"9.2"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.del,{children:["etc. It seems the last section of every chapter which is the ",(0,t.jsx)(n.em,{children:"Dictionary"})," was bundled into the next to last section."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"Fix the Dictionary Entry pages that were not parsed correctly."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"Indent Common Lisp code blocks."})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.del,{children:"Break the Glossary into 27 pages, one per letter, plus the introduction and non alphabetical symbols page."})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var t=i(67294);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);