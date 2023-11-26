**12.1.1.3.1 Logical Operations on Integers** 

Logical operations require *integers* as arguments; an error of *type* **type-error** should be signaled if an argument is supplied that is not an *integer* . *Integer* arguments to logical operations are treated as if they were represented in two’s-complement notation. 

Figure 12–5 shows *defined names* relating to logical operations on numbers. 

|\<p\>**ash boole-ior logbitp** \</p\>\<p\>**boole boole-nand logcount** \</p\>\<p\>**boole-1 boole-nor logeqv** \</p\>\<p\>**boole-2 boole-orc1 logior** \</p\>\<p\>**boole-and boole-orc2 lognand** \</p\>\<p\>**boole-andc1 boole-set lognor** \</p\>\<p\>**boole-andc2 boole-xor lognot** \</p\>\<p\>**boole-c1 integer-length logorc1** \</p\>\<p\>**boole-c2 logand logorc2** \</p\>\<p\>**boole-clr logandc1 logtest** \</p\>\<p\>**boole-eqv logandc2 logxor**\</p\>|
| :- |


**Figure 12–5. Defined names relating to logical operations on numbers.** 

Numbers **12–3**

 

 

