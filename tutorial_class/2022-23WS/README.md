# Tutorial class
 Here are some notes for the tutorial class. I'm lazy to type them or rewrite some of them, so I will upload some photos for temporary replacement.



For convenience, I put links here:

###Session 1

[Dimensions - A walk through mathematics](https://www.youtube.com/watch?v=oUn7jJ0E8tE&list=PL97CCC2CC4E89C7E5&index=5): I really like this video. Maybe we can see some of Part 5, 6 and 9 this time.

[The 5 ways to visualize complex functions](https://www.youtube.com/watch?v=NtoIXhUgqSk): The visualization of complex functions is always an interesting topic.

[Why care about complex analysis?](https://www.youtube.com/watch?v=LoTaJE16uLk&list=PLDcSwjT2BF_UDdkQ3KQjX5SRQ2DLLwv0R&index=1) We can see in class from 0:00 to 1:40. This explains the motivations for physical students to learn the complex analysis.

[exponential function](https://www.youtube.com/watch?v=v0YEaeIClKY) and [Euler's Formula Poem](https://www.youtube.com/watch?v=zLzLxVeqdQg): The work of 3Blue1Brown is usually nice.

[stereographic projection](https://syntopia.github.io/Polytopia/polytopes.html#rboxSimple3): Play with the stereographic projection!
#####Fourier analysis

[But what is the Fourier Transform? A visual introduction.](https://www.youtube.com/watch?v=spUNpyF58BY)
[But what is a Fourier series? From heat flow to drawing with circles | DE4](https://www.youtube.com/watch?v=r6sGWTCMz2k)
[What is a Fourier Series? (Explained by drawing circles)](https://www.youtube.com/watch?v=ds0cmAV-Yek) and [Animation](https://bilimneguzellan.net/fuyye-serisi/)
[The intuition behind Fourier and Laplace transforms](https://www.youtube.com/watch?v=3gjJDuCAEQQ)
<!--[What does the Laplace Transform really tell us? A visual explanation (plus applications)](https://www.youtube.com/watch?v=n2y7n6jw5d0) see 2:06-2:23-->

### Session 2

We mainly discuss some computations of partial derivatives (Task 1,2,4).

Task 3 concerns with the visualization of complex functions. Videos in session 1 are recommended.

[Divergence and curl: The language of Maxwell's equations, fluid flow, and more](https://www.youtube.com/watch?v=rB83DpBJQsE): It explains the physical meaning of divergence and curl.

### Session 3

We mainly discuss some computations of operators (Task 2,3).
[But what is a partial differential equation? | DE2](https://www.youtube.com/watch?v=ly4S0oi3Yz8&list=RDCMUCYO_jab_esuFRV4b17AJtAw&index=3): It explains the physical meaning of heat equation and laplacian.
[The equation of a wave](https://www.youtube.com/watch?v=9WZM68aVnGk): It explains the physical meaning of wave equation.

### Session 4

We mainly discuss some special cases of Stokes' Theorem: Green's Theorem and divergence theorem(Gauss's theorem)

[Stokes' Theorem on Manifolds](https://www.youtube.com/watch?v=1lGM5DEdMaw): The emphasis of this videa is the local-global correspodence.

### Session 5

We mainly discuss the distributions. In mathematics, we always want to work on a bigger spaces.

[Dirac Delta-Funktion und ihre wichtige Eigenschaften](https://www.youtube.com/watch?v=QdPJaZzEvD4): I like the motivation part especially.
[Distribution theory](https://www.youtube.com/watch?v=gwVEEUg8PBY&list=PLBh2i93oe2qsbptdcvFlowCl51EX_a3nB): It is long and a little boring actually.
[Was sind Distributionen? Ist der Dirac-Impuls eine Funktion?](https://www.youtube.com/watch?v=J8Gfq11eBlY): seeing the picture of  1:00 is enough.
[The graph of a bump function](https://en.wikipedia.org/wiki/Bump_function#/media/File:Bump.png)

### Session 6

You may use sage to double check your calculation:


```
sage: var('x,y,s,t');
sage: taylor( (x-y)/(x+y), (x,1), (y,1), 2 )
derivative((x-y)/(x+y), x)
derivative((x-y)/(x+y), y)
derivative(1/(x + y) - (x - y)/(x + y)^2, x)
derivative(1/(x + y) - (x - y)/(x + y)^2, y)
derivative(-1/(x + y) - (x - y)/(x + y)^2, y)

forget() # always remember to forget assumptions you no longer need
integrate((2*x+2)*4*((6-x)/6)^2,(x,0,6))
```
### Session 7

We mainly discuss the convergence of the power series.

### Session 8

This week we review two types of convergence of function series: pointwise convergence and uniform convergence.

### Session 10-11

This week we discuss the residue formula. The tutorial is roughly divided into two parts, the first part on local informations (singularity and Laurent series) and second part on global informations (contour integrals).

### Session 12

This week we compute the Fourier coefficient and constructs the existence of non-measurable set (assuming the axiom of choice).

### Session 13

This week we discuss the measurable functions and the (square) integrable functions.