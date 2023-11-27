 

The actions of the *pretty printer* when a piece of output is too large to fit in the space available can be precisely controlled. Three concepts underlie the way these operations work—*logical blocks*, *conditional newlines*, and *sections*. Before proceeding further, it is important to define these terms. 

The first line of Figure 22–3 shows a schematic piece of output. Each of the characters in the output is represented by “-”. The positions of conditional newlines are indicated by digits. The beginnings and ends of logical blocks are indicated by “&#60;” and “&#62;” respectively. 

The output as a whole is a logical block and the outermost section. This section is indicated by the 0’s on the second line of Figure 1. Logical blocks nested within the output are specified by the macro **pprint-logical-block**. Conditional newline positions are specified by calls to **pprint-newline**. Each conditional newline defines two sections (one before it and one after it) and is associated with a third (the section immediately containing it). 

The section after a conditional newline consists of: all the output up to, but not including, (a) the next conditional newline immediately contained in the same logical block; or if (a) is not applicable, (b) the next newline that is at a lesser level of nesting in logical blocks; or if (b) is not applicable, (c) the end of the output. 

The section before a conditional newline consists of: all the output back to, but not including, (a) the previous conditional newline that is immediately contained in the same logical block; or if (a) 



 

 

is not applicable, (b) the beginning of the immediately containing logical block. The last four lines in Figure 1 indicate the sections before and after the four conditional newlines. 

The section immediately containing a conditional newline is the shortest section that contains the conditional newline in question. In Figure 22–3, the first conditional newline is immediately contained in the section marked with 0’s, the second and third conditional newlines are immediately contained in the section before the fourth conditional newline, and the fourth conditional newline is immediately contained in the section after the first conditional newline. 

&#60;-1–-&#60;–&#60;–2–-3-&#62;–4–&#62;-&#62; 

000000000000000000000000000 

11 111111111111111111111111 

22 222 

333 3333 

44444444444444 44444 

**Figure 22–3. Example of Logical Blocks, Conditional Newlines, and Sections** 

Whenever possible, the pretty printer displays the entire contents of a section on a single line. However, if the section is too long to fit in the space available, line breaks are inserted at conditional newline positions within the section. 

