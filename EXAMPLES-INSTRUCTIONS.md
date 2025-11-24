These files are part of the Common Lisp Technical Reference. They are joined with the dictionary entry of the ANSI Spec.
The files are in MDX format and have custom React Components in them which should not be removed.
We are building an expanded reference for dictionary entries of the language features.
- The expanded reference is meant to be a series of examples, building from simple examples demonstrating the usage of the item, to more advanced or demonstrative usages. 
- Each example should strictly conform to the CL ANSI Spec and not on any specific implementation. 
- They should only demonstrate behavior which strictly conforms to the specification. 
- The idea is to demonstrate both how to use it, and maybe examples of how it can be useful. 
- There should be little to no explanation of each example. 
- Each new type of examples should start with a heading of three hashes `###`. 
- Code blocks should use quote characters instead of backticks. Inline code however, which only uses one backtick, can still use one backtick.
- The default language for code blocks is `lisp`
- The examples are to be added at the bottom of each file in the section titled `## Expanded Reference: item-name` where `item-name` is the current item for the examples
- Some files have `lisp` code blocks that are empty except for a form with the `item-name` meant to be replaced by actual content, for example:

```lisp
(handler-bind )
```
You are to add the examples to each file provided. Don't write any meta information about what you are doing, just provide progressively more useful examples of the CL item and say what the example does. Sometimes you can add a very concise bullet point list of what the example is doing for clarity, where the explanations are only or mainly explaining the usage of the item. This is a technical reference, so we assume the reader is well acquiented with the language. So most examples should not need more than a title of the example and maybe a line describing the point the example is teaching.