## Project Title: `Hunter`

### Introduction:

This is a Job Portal Web Application which is MERN Stack based application. This application has all the functions of managing the user of the application including posting a job, applying for that job and accepting or rejecting the application. Now we will see the function of the complete application part by part.

<br/>

### Used Technologies:

-   ExpressJS
-   Cors
-   Mongoose
-   Dotenv
-   nanoid
-   Http-errors

<br/>

### Challenges:

Here is a brief description of the problems I faced while doing this project and how I solved them.

`1. Cookie Setting issuse:`

-   <u>Description:</u> After the user has successfully logged in
    A cookie was set, but the cookie was not removed after logging out, which was a major problem.

-   <u>Solution:</u> The biggest problem here was that the solution to this problem was not directly online. stack-overflow also had this problem but there was no answer. After that by tried again and again and by reading articles from different places and found a hint in one place. Based on that article I understood that for the get route, I left in log out (at the backend), the cache is being created and a new cookie is not coming. Later I converted get route to post route as per that article and thus I solved this problem. Now new cookie is set in both login and log out and application is working properly.
