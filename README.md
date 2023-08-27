<!--Category:React--> 
 <p align="right">
    <a href="http://productivitytools.top/"><img src="Images/Header/ProductivityTools_green_40px_2.png" /><a> 
    <a href="https://github.com/ProductivityTools-PhotoGallery/ProductivityTools.PhotoGallery.Web"><img src="Images/Header/Github_border_40px.png" /></a>
</p>
<p align="center">
    <a href="http://http://productivitytools.top/">
        <img src="Images/Header/LogoTitle_green_500px.png" />
    </a>
</p>


# PhotoGallery Web

Fronted to the Photo gallery application.

<!--more-->

Aplication is in the early stage, but I won't be investing more time in it. The idea was to create simple gallery, which will be hosted on the local server but producs on the market are more advanced.

Currently done
- List of galleries
- Login 

To run application go to http://localhost:3000/Login and provide your gmail account. It will redirect to list of galeries. Galeries are taken from the server. 

![](Images/2023-08-27-22-42-48.png)

Clicking on gallery should load the pictures.

The next step was to add bearer to the picture url param and validate on the server side.


![](Images/2023-08-27-22-48-20.png)