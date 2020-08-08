import React from "react";
import { Grid, Cell,} from "react-mdl";



const About = () => {
  return (
    <div className="container-fluid">
     <Grid className="contact-grid">
      <Cell col={12}>
    
            <h2>Ian Edwards</h2>
            <img src = {process.env.PUBLIC_URL + '/img/Me.jpg'}
              alt="me"
              style={{ height: "350px" }}
              style={{ height: "350px" }}
            />
            <h4 style={{ color: "grey" }}>My Story</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          
          
            <p>
            I'm a full-stack developer meticulous about creating pixel-perfect applications for clients as well as my own personal projects. I have experience in the front end with everything from ReactJS to Handlebar templating, PWA, HTML5, CSS, JS/Node.JS. My back end experience includes Express/React Router, MySQL, NoSQL, MongoDB, Mongoose and Heroku. Outside of developing, I'm usually playing video games or walking around in the woods. I love to cook and am always ready to go somewhere new!

{/* Education:University of Connecticut, Stamford CT (Full Stack Web Development Bootcamp), Feb-July 2020. University of Connecticut, Storrs, CT (Bachelor Arts, Cognitive Science) Aug 2015-Dec 2017. */}

{/* Skill:HTML5, CSS3, SCSS, Javascript, JavaScript Frameworks (React), JQuery, Node, Express, MySQL, NoSQL (MongoDB), AJAX, Git */}

            </p>
          </Cell>
          </Grid>
    </div>
  );
}

export default About;