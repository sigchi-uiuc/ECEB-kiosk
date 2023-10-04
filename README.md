# eceb-kiosk
The interactive display for two kiosks at UIUC's ECE building (in progress).  Developed by UIUC's ACM SIGCHI organization.  Deployed on http://ecebenergykiosk.web.illinois.edu/.

## About the project
This repo will contain the web app that will be installed on two touch-screen enabled kiosks at the University of Illinois's Electrical and Compueer Engineering building.  The goal is to teach students and staff on the environmental impact of the building and how they can improve their own carbon
footprint both on-campus and at home.

An on-going Figma prototype can be found [here](https://www.figma.com/file/RQzyJ7jlya5WCfaMxiasQd/ECEB-Kiosk-Prototype?node-id=0%3A1)

Project estimated completion time: December 2020

## Local Development
- First fork this repository to your personal GitHub, following [this](https://coda.io/@ethan-grinberg/sigchi/git-26) tutorial
- Then clone your personal copy of the repo to your local machine
- cd into the repository, then `cd eceb-kiosk`
- run `npm install`
- run `npm run serve` to start your development server
- since the screen size of the Kiosk is most likely much bigger than your screen, you have to resize your screen to see the whole website
  - Open developer tools in your browser
  - go into responsive design mode
  - change the dimensions to `1920 x 1080`
  - zoom out until you can see the whole website
- When ready to make changes live, make a pull request to the SIGCHI repository and someone from SIGCHI will merge your changes and publish them to the live website.

## About SIGCHI
We are a Special Interest Group focusing on Computer-Human Interaction, sponsored by the University of Illinois's Association for Computing Machinery.
Visit our website! https://sigchi.acm.illinois.edu/
