![Cardiff city](assets/images/Cardiff_City_Fanpage.png)

Welcome To the CCFC Fan Page, The Cardiff City Football Club and everything it stands for are the focus of this website. You can find upcoming fixtures, top scorers and the history.

## Getting Started

Visit https://rgraingerdev.github.io/CCFCfanpage/ on your preferred web browser to access the CCFC Fan Page. The website is completely responsive; regardless of whether you're using a desktop computer, tablet or smartphone, it should look excellent on all of them.

## User Storys
I have developed user stories to direct my design and development process; in order to make sure that the CCFC Fan Page satisfies the requirements of my users. Here are some usage examples for user stories:


* As a supporter of Cardiff City, I want to be able to swiftly and conveniently find out the latest information on the squad.
* I want to be able to see upcoming fixtures.
* I want to be able to book tickets for upcoming fixtures.
* I want to have access to the most recent standings and top scorers.
* I want to learn more about Cardiff City club history.
* i want to be able to easily navigate the website.
* I want to be able to contact the page creator with my questions.
* I want to be able to know where the stadium is located.
* I want to be able to view the webpage on mobile or tablet.


By developing user stories, I can make sure that the website satisfies user needs and offers a satisfying browsing experience. I regularly gather user feedback and apply it to the design and functionality of the website.

## UI/UX

* The aim is for a first-time user to be able to easily navigate.
* The colour scheme was chosen to reflect the colours of the football team with the intention of making it simple for a novice user to navigate. 
* This page was made so that both new and current club supporters would have a place to check future games and monitor the progress of the current campaign.

### Future features
* Add auto updates for upcoming fixtures.
* A rolling gallery of images of past and present teams.
* Add a live standings table to the season page.

### Font

* Quicksand was the font I chose. The typeface was picked because it is slick and simple for the end user to read, additionally it comes from Google Fonts.
* ![wireframe](assets/Screenshots/Quicksand_font.png)

## Wireframes
* I began my project with wireframing my design below:

* ![wireframe](assets/Screenshots/wireframemobile.png)
* ![wireframe desktop](assets/Screenshots/wireframe1.png)
* ![wireframe desktop 2](assets/Screenshots/wireframe2.png)
* ![wireframe desktop 3](assets/Screenshots/wireframe3.png)

## Technologies used
* HTML - Was used for the structure of the page.
* CSS - was used for the style of elements.
* Github - is the hosting site for storing the code and version control.
* balsamiq - used for wireframes.
* Fontawesome - for icons on navbar.
* google fonts - used for the Quicksand font.
* Devtools - used for debugging and testing to ensure responsiveness.
* Google chrome lighthouse - used for testing.
* W3C HTML Validator - used for validating HTML of the page.
* W3C CSS validator - used for validating CSS of the page.

## Testing
The CCFC Fan Page has undergone comprehensive testing to guarantee that it operates properly and offers a satisfying user experience. The website has been tested on a variety of hardware, browsers, and operating systems, including:

Systems running Windows, macOS, and Linux.
Web browsers such as Safari, Edge, Firefox and Chrome that can run on mobile and desktop.
I carried out user testing to gather opinions from people. I used this feedback to improve the website's functionality and appearance.

Please contact me via the website's contact form if you experience any problems while using the CCFC Fan Page. I consider all comments carefully and attempt to resolve any problems as soon as possible.

### Page Testing

Testing began with automated testing as per the table below with screenshots.

|Test |Lighthouse| W3 html validator| W3 schools jigsaw| 
|-----|-----|-----|-----|
|home| Pass| Pass| Pass|
|History| Pass| Pass| Pass|
|Season| Pass| Pass| Pass|
|Contact| Pass | Pass| Pass|

![Home](assets/Screenshots/validator_home.png)  

![Home](assets/Screenshots/validator_history.png)  

![Home](assets/Screenshots/validator_season.png)  

![Home](assets/Screenshots/validator_contact.png)  

![Home](assets/Screenshots/lighthuse_desktop.png)

![Home](assets/Screenshots/Lighthouse-testing.png)

### Manual testing

#### Home page

| Feature | Expect | Action | Result | Pass/Fail |
|-----|-----|-----|-----|-----|
|Enter button| To navigate to history page | clicked the enter button | Opened history page correctly | Pass |
|Nav links | When clicked navigate to page | Clicked all nav links on all pages| All pages opened as expected| Pass
|Social link icons | Social link icons to open links in new tab| clicked social link icons| Link opened in new tab and on correct site| Pass|
|Menu Drop down | To drop down on mobile and tablet devices | opened on mutiple devices and pressed button | menu droped and displayed correctly| Pass|

#### Contact form

| Feature | Expect | Action | Result | Pass/Fail |
|-----|-----|-----|-----|-----|
|Nav links | When clicked navigate to page | Clicked all nav links on all pages| All pages opened as expected| Pass
|Menu Drop down | To drop down on mobile and tablet devices | opened on mutiple devices and pressed button | menu droped and displayed correctly| Pass|
|Social link icons | Social link icons to open links in new tab| clicked social link icons| Link opened in new tab and on correct site| Pass|
|Contact form | To  submit for when inputs are filled | left form blank and attempted submit/filled form and submitted | prompted to fill input boxes/ submitted to input page| Pass|
|return home button | to navigate back to history page after form submission | clicked return home button | returned to history page | Pass |


#### History page

| Feature | Expect | Action | Result | Pass/Fail |
|-----|-----|-----|-----|-----|
|Nav links | When clicked navigate to page | Clicked all nav links on all pages| All pages opened as expected| Pass
|Menu Drop down | To drop down on mobile and tablet devices | opened on mutiple devices and pressed button | menu droped and displayed correctly| Pass|
|Social link icons | Social link icons to open links in new tab| clicked social link icons| Link opened in new tab and on correct site| Pass|

#### Seasons page

| Feature | Expect | Action | Result | Pass/Fail |
|-----|-----|-----|-----|-----|
|Nav links | When clicked navigate to page | Clicked all nav links on all pages| All pages opened as expected| Pass
|Menu Drop down | To drop down on mobile and tablet devices | opened on mutiple devices and pressed button | menu droped and displayed correctly| Pass|
|Social link icons | Social link icons to open links in new tab| clicked social link icons| Link opened in new tab and on correct site| Pass|
|Ticket buttons | to open in new tab on ticket office | clicked ticket buttons | navigated to ticket office in new tab| Pass |
|Season badge button | To open CCFC wiki in new tab | clicked the button | opened CCFC wiki in new tab| Pass|
|Map | To display a map to stadium | opened in multiple browsers and devices | displayed correctly| Pass|


Continuing with testing, I tested the page across multiple devices (iPhone, Galaxy Fold, Edge and Firefox) ensuring all links and pages loaded all elements correctly and promptly.

![iphone home](assets/Screenshots/iphone_home.png)  


![fold contact](assets/Screenshots/fold_contact.png) 

![Fold open history](assets/Screenshots/fold_open_history.png)


![Desktop Home](assets/Screenshots/desktop_dis_home.png)


![Firefox Home](assets/Screenshots/firefox_season.png)  


### known bugs

Bugs found during writing have been fixed. The footer obscuring certain information at the bottom of the page presented a challenging bug to fix. It also got stuck in the centre of the page, hiding several items, this has been fixed, and all pages now reply as intended.

## Deployment
1. Navigate to the [repository](https://github.com/rgraingerdev/Milestone-project)
2. Click on Settings on the top.
3. Click on Pages on the menu on the left which will open GitHub Pages window.
4. From the drop-down menu under source select deploy from branch.
5. From the drop-down menu under branch select main, this tells GitHub which branch to use for the deployment. Click Save.
6. The page should refresh, and the deployment link should appear.

## Creating a fork
1. Navigate to the [repository](https://github.com/rgraingerdev/Milestone-project)
2. In the top-right corner of the page click on the fork button and select create a fork.
3. You can change the name of the fork and add description 
4. Choose to copy only the main branch or all branches to the new fork. 
5. Click Create a Fork. A repository should appear in your GitHub.

### Cloning Repository
1. Navigate to the [repository](https://github.com/rgraingerdev/Milestone-project)
2. Click on the Code button on top of the repository and copy the link. 
3. Open Git Bash and change the working directory to the location where you want the cloned directory. 
4. Type git clone and then paste the link.
5. Press Enter to create your local clone.

## Sources

upcoming games - https://www.cardiffcityfc.co.uk/fixture/list/594
history gathered from https://en.wikipedia.org/wiki/Cardiff_City_F.C.

### images from:
* Badge - https://www.facebook.com/cardiffcityfc/
* Ninian park - https://nigelblues.blogspot.com/2010/09/100-years-old-today-well-it-would-have.html
* Promotion celebration - https://www.gettyimages.co.uk/detail/news-photo/ * cardiff-captain-sean-morrison-and-manager-neil-warnock-news-photo/955307338 
* Timeline assistance - https://mdbootstrap.com/docs/b4/jquery/plugins/timeline/

## Acknowledgements
* Thank you to my mentor for supporting me through this project
* Everybody on slack for answering any questions I had along the way.
