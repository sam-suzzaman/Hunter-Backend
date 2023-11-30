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
-   bcrypt
-   cookie-parser
-   dayjs
-   express-validator
-   jsonwebtoken

<br/>

### Key Function:

-   Protecting Routes
-   User related (CRUD) operation
-   User Authentication and Authorization
-   Job related (CRUD) operation
-   Application related operation
    -   apply to a job
    -   accept/reject application
-   and so on

<br/>

### Challenges:

Here is a brief description of the problems I faced while doing this project and how I solved them.

`1. Cookie Setting issuse:`

-   <u>Description:</u> After the user has successfully logged in
    A cookie was set, but the cookie was not removed after logging out, which was a major problem.

-   <u>Solution:</u> By tried again and again and by reading articles from different places, found a hint in one place. Based on that article I understood that for the get route, I left in log out (at the backend), the cache is being created and a new cookie is not coming. Later I converted get route to post route as per that article and thus I solved this problem. Now new cookie is set in both login and log out and application is working properly.

`2. Generating Monthly Information:`

-   <u>Description:</u> One of the biggest challenges for this project was generating monthly application info.

-   <u>Solution:</u> To solve this problem, with the help of Chat GPT, I have created the api of monthly information using mongodb's aggregation concept.
