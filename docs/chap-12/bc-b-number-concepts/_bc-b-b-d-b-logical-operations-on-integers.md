 

Logical operations require *integers* as arguments; an error of *type* **type-error** should be signaled if an argument is supplied that is not an *integer* . *Integer* arguments to logical operations are treated as if they were represented in two’s-complement notation. 

Figure 12–5 shows *defined names* relating to logical operations on numbers. 

|&#60;p&#62;**ash boole-ior logbitp** &#60;/p&#62;&#60;p&#62;**boole boole-nand logcount** &#60;/p&#62;&#60;p&#62;**boole-1 boole-nor logeqv** &#60;/p&#62;&#60;p&#62;**boole-2 boole-orc1 logior** &#60;/p&#62;&#60;p&#62;**boole-and boole-orc2 lognand** &#60;/p&#62;&#60;p&#62;**boole-andc1 boole-set lognor** &#60;/p&#62;&#60;p&#62;**boole-andc2 boole-xor lognot** &#60;/p&#62;&#60;p&#62;**boole-c1 integer-length logorc1** &#60;/p&#62;&#60;p&#62;**boole-c2 logand logorc2** &#60;/p&#62;&#60;p&#62;**boole-clr logandc1 logtest** &#60;/p&#62;&#60;p&#62;**boole-eqv logandc2 logxor**&#60;/p&#62;|
| :- |


**Figure 12–5. Defined names relating to logical operations on numbers.** 

Numbers **12–3**

 

 

