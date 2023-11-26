 

Some text editors that purport to understand Lisp syntax treat any |...| as balanced pairs that cannot nest (as if they were just balanced pairs of the multiple escapes used in notating certain symbols). To compensate for this deficiency, some programmers use the notation #||...#||...||#...||# instead of #|...#|...|#...|#. Note that this alternate usage is not a different *reader macro*; it merely exploits the fact that the additional vertical-bars occur within the comment in a way that tricks certain text editor into better supporting nested comments. As such, one might sometimes see code like: 

#|| (+ #|| 3 ||# 4 5) ||# 

Such code is equivalent to: 

#| (+ #| 3 |# 4 5) |# 

