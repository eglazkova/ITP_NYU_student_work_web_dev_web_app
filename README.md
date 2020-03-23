# Full stack evidence of ecological disaster 
This is my final assignment for the Dynamic Web Development class in ITP, NYU. The course focuses on the fundamentals of building "full stack" web applications. 

## About
I am coming from Russia and believe that in my country ecological disasters of different kinds usually don't get necessary coverage in the media space, causing a lot of people suffer from the consequences, sometimes for years, most of the times unwillingly and unknowingly. 

I personally experienced this 'phenomena'. When my mother was pregnant with me she lived in the area with exceedence of the fluorin maximum allowable concentration in water, which finally affected me and my health as a child.

The problem is even deeper. There is very often the lack of reliable data around many ecological issues, such as: landfill sites about the size of the cities (both illegal and legal ones), giant 'storages' of chemical wastes, massive understatement of the ecological catastrophes (explosions, etc.), wrong or no statistics on cases of diseases caused by emissions of harmful substances and fumes. 

So, I am making the tool to collect the data on the harmful causes of such cases. 

MVP looks as follows — the interactive map of the area around small Russian town [Shatura](https://en.wikipedia.org/wiki/Shatura) not far from Moscow. There, residents are protesting against the semi-legal landfill site located within town' boundaries next to school and kindergarten, so that they can literally smell its fumes.

I focused on Shatura because I was able to find [results of the inspection on the ecological situation in the town](https://e-ecolog.ru/reestr/doc/1317700) which shows the exceedings of the hydrogen sulphide, formaldehyde, nitrogen dioxide, dimethylbenzene (xylene), to begin with. All of the mentioned substances cause serious diseases.

I would like to give people living around the opportunity to upload the evidence if they have been diagnosed with any of the illnesses that are most likely to be caused by the dangerous neighbourhood. This data should be dynamically visualised on the interactive map.

However, this is the most challenging part of the project. I would like people to be only able to upload RELIABLE DATA, and at the same time stay ANONYMOUS and SAFE which is relevant to the current political situation in my homeland. If I succeed even just a little, we'll get the tool that might be used to collect data on different controversial subjects including elections or confirmed coronavirus cases.

I am developing this project within the frameworks of 'Designing meaningful interactions', 'Dynamic Web Development', ['Nature of code'](https://medium.com/@elenaglazkova/nature-of-code-steering-behaviors-and-simulation-project-c1430076b15b), and 'Maths for artists' classes at Interactive Telecommunications Program, NYU, and want to have a ready prototype by June, 2020.

## Basic concept

One of the possible ways to build the MVP looks as follows — on the landing page people are greeted with an interactive map of diseases and marks of the landfills. Below there is an invitation to participate in a survey. The user clicks on the survey, and a message pops out: "for the reliability of the entered data and to avoid duplication of information, we suggest that you log in with Google, Facebook (etc), with phone number, with email, or via Telegram (or any messenger). Also there is the opportunity not to log in. 

## What is ready for now (March 22, 2020)

![demo](https://github.com/eglazkova/dwd-final/blob/master/ezgif.com-video-to-gif.gif)

Current repository is a VERY BASIC, non-final prototype of the project's client-side part. For now this is the responsive map of the area around Shatura's landfill built with [react map gl library](https://uber.github.io/react-map-gl/) and [mapbox](https://www.mapbox.com/). 

[YOUTUBE DEMO 1](https://www.youtube.com/watch?v=wKZ9cbiERiI)
[YOTUBE DEMO 2, INTERFACE AND INTERACTION](https://www.youtube.com/watch?v=C-DeTZlPjLk)
[YOUTUBE DEMO 3, voice over](https://www.youtube.com/watch?v=cuGvsDMMgT4)
[Google Slides](https://docs.google.com/presentation/d/1YyAiTcGXHN8QETjcrVDnsMDllNo3PTUZ9ePEKQEJJEs/edit?usp=sharing)


<a href="https://ibb.co/jJYVsL3"><img src="https://i.ibb.co/Y0SDwtf/Screenshot-2020-03-22-at-19-53-42.png" alt="Screenshot-2020-03-22-at-19-53-42" border="0"></a>
<a href="https://ibb.co/GpdQtZP"><img src="https://i.ibb.co/h9gFZG8/Screenshot-2020-03-22-at-17-00-25.png" alt="Screenshot-2020-03-22-at-17-00-25" border="0"></a>
<a href="https://ibb.co/cw36y6y"><img src="https://i.ibb.co/YXQcNcN/Screenshot-2020-03-22-at-20-01-26.png" alt="Screenshot-2020-03-22-at-20-01-26" border="0"></a>

I also have a VERY BASIC, non-final [prototype of the application's server-side part](https://github.com/eglazkova/DWD-A5-Database-API). 

### Deployment
The frontend part (map) is now [deployed](https://glitch.com/~eglazkova-dwd-final) on glitch.com

### Challenges
Working with Mapbox I struggled with getting my 'mapboxApiAccessToken'. I ended up putting the token directly into the App.js file instead of .env.local file which was [understandably reccommended](https://www.youtube.com/watch?v=JJatzkPcmoI). 

<a href="https://imgbb.com/"><img src="https://i.ibb.co/Tkn8SSh/Screenshot-2020-03-22-at-16-00-21.png" alt="Screenshot-2020-03-22-at-16-00-21" border="0"></a>

### Built with
* [VS Code](https://code.visualstudio.com/)
* [react-map-gl](https://uber.github.io/react-map-gl/)
* [Glitch](https://glitch.com/)
* [Mapbox](https://www.mapbox.com/)
* [GPS Coordinates](https://www.gps-coordinates.net/)

### Resources & inspiration

* [The dynamic map of the coronavirus cases in the world by Yandex](https://yandex.ru/web-maps/covid19?ll=61.687496%2C11.974044&z=2) 
* [Moscow recycle map](https://recyclemap.ru/)
* [Mapbox - Interactive maps in React](https://www.youtube.com/watch?v=JJatzkPcmoI)
* [Coding Challenge #57: Mapping Earthquake Data](https://www.youtube.com/watch?v=ZiYdOwOrGyc&feature=emb_logo)
* [Google Maps Marker Clustering](https://www.leighhalliday.com/google-maps-clustering)
* [Google Maps in React - Building interactive maps](https://www.youtube.com/watch?v=Pf7g32CwX_s)

<a href="https://ibb.co/nCmRxcD"><img src="https://i.ibb.co/GTpFz2V/Screenshot-2020-03-22-at-20-07-24.png" alt="Screenshot-2020-03-22-at-20-07-24" border="0"></a>

## Further development plan

* I want to use [Voronoi diagram](https://www.google.com/search?rlz=1C5CHFA_enRU823RU823&q=Voronoi+diagram+pictures&tbm=isch&source=univ&sa=X&ved=2ahUKEwid5LbBrK_oAhU2kHIEHaiXC98QsAR6BAgHEAE&biw=1357&bih=698) — “A map divided into cells, each cell covering the region closest to a particular centre" as the tool for the data visualization. 

"In epidemiology, it can help in identifying the source of infections". 

"One of the first applications of a Voronoi diagram was by Dr John Snow, a prominent London physician. Cholera, which became widespread in the 19th century, has killed tens of millions of people. Before the cholera bacterium was isolated, overcrowding, bad diet, poor sanitation and noxious miasma emanating from rotting organic matter were all suspected. Snow believed that cholera was caused by infected drinking water”.

Thus, it might help to identify the non-legal landfills in different areas. It's also a great visual tool. 

* I also consider adding video to the functionality, for I have been previously working for the video provider that made video streams of the works on the landfills for the residents of the areas around them.

<a href="https://ibb.co/K6TJKxY"><img src="https://i.ibb.co/mJf3N5m/Screenshot-2020-03-20-at-16-03-11.png" alt="Screenshot-2020-03-20-at-16-03-11" border="0"></a>

* The main issues to solve for the project include the necessity for the users data to stay safe, necessity to find the way to get rid of trolls or irrelevant data, to motivate people to use the app in the first place and prove its safety. 

* I am currently in the process of research on whether blockchain technology might be helpful.

* I am also in the process of research on whether [Telegram API](https://core.telegram.org/) might be helpful for this project.

* I consider adding additional functionality to the project, such as an app where user can mark the geolocation and upload pictures of the illegal landfills or report any other contravention. 


## Authors

* [Elena Glazkova](https://medium.com/@elenaglazkova) -- MPS candidate -- [NYU ITP](https://itp.nyu.edu)

