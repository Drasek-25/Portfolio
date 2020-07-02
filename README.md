# Developer Portfolio

## Live Version

[webdevpat.com](https://webdevpat.com)

## Summary

I created this online portfolio to display my knowledge in web development. This website is a react app using Material-UI hosted on AWS, serving as a homepage to my projects. I started this project multiple times testing different styling frameworks before deciding to use Material-UI, after which I moved forward with this site until completion. This project also served as my introduction to Material-UI and deploying a site.

## The Journey

This project was not smooth sailing considering my lack of knowledge in regards to Material-UI and site deployment. Material-UI was a long struggle, their documentation leaves a lot unsaid, and its a completely different method of styling a website compared to Bootstrap and CSS. It is odd using prebuilt components as containers inside of react, however I found this much more manageable than an ever growing and conflicting list of styles in a CSS doc. Dealing with the grid containers/items was the most confusing portion of the entire process as I knew I needed uniform card height aesthetically, but having bullet points on the cards adds a dynamic height. I eventually settles on a set bullet point height, however in the future I want to add a dynamic height for the cards that reads the height of all the text fields then sends the results to the parent were I find the largest size among them and pass it as a prop to all the children creating a dynamic but uniform card height.

When I originally envisioned this project I knew I needed a way for interested recruiters to contact me, but I did not want to have my information publicly accessible to bots to consume. I had previously decided to use a `mailto` link to a burner email address forwarding to my primary email address, so if it became compromised and began spamming me I could simply swap out the burner email. This worked, and I still ended up using this method, however I went a slightly different route with it. I had learned that `mailto` only works if the persons browser is setup with a mail account. Coincidentally, though my chrome is signed into my account, it did not assume that my email account and Gmail was the default, as such clicking the `mailto` link did nothing, and seemed to be broken. This presents a problem, I don't want recruiters to have the same experience of trying to contact me and just assuming my site is broken after using the `mailto` link and moving on, I knew now I needed a way for my site to email me.

I started to research any of all methods of sending emails from a frontend but every option had the same problem, they required API keys. This was a large problem for me because I did not want to make my API keys in any way publicly accessible, but the only method of hiding API keys is to create a backend and place them in a .env. I knew I did not want to create a backend for my portfolio as it would be a lot of work to accomplish such a simple task, I figured there had to be a better way, fortunately for me I ended up finding one. I found an article that had shown how it was possible to create a custom frontend for a google form which would allow someone accessing your frontend to submit answers to questions on your google form, and from there you can setup your google form to send you an email whenever an answer is sent to your google form. After tinkering with it for awhile I had finally figured out how to get it all to work and now successfully had a backendless contact me form. This would be the last major frontend problem I had to solve.

After making sure every single path resolves properly, removing lingering issues, and tinkering with styling. I completed the project. I added some fun things such as an interaction with the background animation and the "Live View" button for that project. After which I decided it was good to deploy. I choose AWS because a lot of the webhosting I have heard about that people tend to use for their portfolios, eg., Heroku and Firebase, seem to have a lot of negative things said about them in regards to site performance. It was because of this, and because I wanted to foray into the AWS ecosystem, that I chose AWS lightsail to host my portfolio. Hosting through AWS provided me with an apache server with node previously installed. After purchasing a domain, and forwarding it to the IP address of my server and I was ready to move forward.

My first site deployment on the server was easy enough, any files placed into the `htdocs` folder would be the files served when someone accessed my new site's URL. This worked, if only for a single site. Unfortunately though this did not work for me as I needed my server to host multiple sites to this server. After all, what good is a portfolio without projects? It would turn out that this challenge would be the largest one I would face throughout creating this portfolio. Fortunately after countless hours of search results and articles I would find out how to create a virtual host on my server. Through this virtual host, and the creation of multiple subdomains for my URL, I could specify that when one of these subdomains reached my server to direct them to the appropriate folder in which the project requested was located. This was essentially the end of my challenges for this project, I now had a live portfolio and multiple projects I had built previously hosted to my server, all functioning as they should. With the extensive notes I took during this process I have removed the chance of remembering how this all works and is interconnected thus future proofing my own knowledge of how my server operates, because I don't ever want to spend that much time reading article after article figuring this out again.

## Images

I kept these images as mementos of building my first fully functioning website, but they also serve to show the design process for this project.

### Initial layout whiteboarding

![portfolio-whiteboarding](https://githubmdimages.s3-us-west-2.amazonaws.com/Portfolio+Whiteboard+1.jpg)

### Original Design

#### XD Artboard 1

![portfolio-xd-artboard-1](https://githubmdimages.s3-us-west-2.amazonaws.com/Portfolio+XD+artboard+1.png)

#### XD Artboard 2

![portfolio-xd-artboard-2](https://githubmdimages.s3-us-west-2.amazonaws.com/Portfolio+XD+artboard+2.png)

#### XD Artboard 3

![portfolio-xd-artboard-3](https://githubmdimages.s3-us-west-2.amazonaws.com/Portfolio+XD+artboard+3.jpg)