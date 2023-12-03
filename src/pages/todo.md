
# Todo

Here we will list all the To Do items we have for this project, and you can help by taking care of any of them :D.

- ~~All the *Dictionary* Sections have to be separated in the docs. For example, all of section 9.2 in the original is included in our [9.1](/docs/chap-9/j-b-condition-system-concepts). We need to split that file into two. Similarly for chapters~~
  - ~~3.8~~
  - ~~4.4~~
  - ~~5.3~~
  - ~~6.2~~
  - ~~7.7~~
  - ~~8.1?~~
  - ~~9.2~~
  - ~~etc. It seems the last section of every chapter which is the *Dictionary* was bundled into the next to last section.~~
- Fix the Dictionary Entry pages that were not parsed correctly.
- Update all the code blocks to be formated with markdown. We have made some available [here](/docs/code-blocks), but please note that there may be characters or TeX terms that need to be changed to regular text. Markdown supports math formulas and special text, checkout the [Markdown Syntax](https://commonmark.org/help/) tutorial for how to do it. Note that we use [MDX](https://docusaurus.io/docs/markdown-features) instead of vanilla markdown.
- We need to format al the Tables to markdown.
- **Examples**: We need expanded examples and **Explanations** for most of the content in the reference.
 - Please take a look at the [Dictionary Items To Do's](/dictionary-todo) in particular
- Add Tooltips with definitions from the glossary everywhere that is relevant
  - The best way to do it is by creating a hash table of the dictionary, and everywhere an italizaed word is present, suroound it with a React Component which will check if there's a definition for that text in the glossary and it will add a tooltip if it's relevant
- Break the Glossary into 27 pages, one per letter, plus the introduction and non alphabetical symbols page.
