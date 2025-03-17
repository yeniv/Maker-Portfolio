import React from 'react';
import './InfoPage.css';

const About = () => {
  return (
    <div className="info-page">
      <div className="about-content">
        <h1>
          Tristan Viney is a multidisciplinary maker based in Sydney, Australia.

          His passion for brutally simple, well-crafted ideas manifests itself in web apps, advertising campaigns, portrait photography, and films.
          
          {/* He also thinks it's silly to write about himself in third person — so enough of that. */}
        </h1>
        <div className="page-grid about">
          <div className="column">
            <div className="row">
              <h3>Experience</h3>
              <p><b>Portrait photographer + filmmaker</b></p> 
              <p>Freelance, Toronto</p>
              <p>2023 — ongoing</p>
              <br />
              <p><b>Co-Founder</b></p>
              <p>Troopl, Amsterdam</p>
              <p>2020 — 2022</p>
              <br />
              <p><b>Full-stack developer</b></p>
              <p>ShopPop, Amsterdam</p>
              <p>2019 — 2020</p>
              <br />
              <p><b>Creative Director</b></p>
              <p>Eardrum, Sydney</p>
              <p>2017 — 2019</p>
              <br />
              <p><b>Copywriter</b></p>
              <p>Ogilvy, Sydney</p>
              <p>2016 — 2017</p>
              <br />
              <p><b>Copywriter</b></p>
              <p>AJF Partnership, Sydney</p>
              <p>2014 — 2016</p>
              <br />
              <p><b>Copywriter</b></p>
              <p>Y&R, Brisbane</p>
              <p>2012 — 2014</p>
              <br />
            </div>
            <div className="row">
              <h3>Education</h3>
              <p><b>Web Development Bootcamp</b></p>
              <p>Le Wagon, Amsterdam</p>
              <p>2019</p>
              <br />
              <p><b>AWARD School (2nd place)</b></p>
              <p>Advertising Council Australia, Brisbane</p>
              <p>2012</p>
              <br />
              <p><b>Bachelor of Business, Advertising (Honours)</b></p>
              <p>Queensland University of Technology, Brisbane</p>
              <p>2009-2011</p>
              <br />
              <p><b>Diploma of Screen</b></p>
              <p>Queensland School of Film & Television, Brisbane</p>
              <p>2006-2007</p>
              <br />
            </div>
          </div>
          <div className="column">
            <div className="row">
              <h3>Awards</h3>
              <p><b>Dead Center Film Festival</b></p>
              <p>Official Selection, Anything Helps</p>
              <p>2019</p>
              <br />
              <p><b>Tropfest</b></p>
              <p>Shortlist, Anything Helps</p>
              <p>2019</p>
              <br />
              <p><b>Australian Young Lions</b></p>
              <p>Winner, Digital</p>
              <p>2018</p>
              <br />
              <p><b>Spikes Asia</b></p>
              <p>Gold, Young Spikes Digital</p>
              <p>2017</p>
              <br />
              <p><b>Australian Young Lions</b></p>
              <p>Runner up, Digital</p>
              <p>2017</p>
              <br />
              <p><b>Siren Awards</b></p>
              <p>Campaign Finalist, Sounds Like</p>
              <p>2017</p>
              <br />
              <p><b>Cannes Lions</b></p>
              <p>Silver, Young Lions Film</p>
              <p>2014</p>
              <br />
              <p><b>Australian Young Lions</b></p>
              <p>Winner, Film</p>
              <p>2014</p>
              <br />
              <p><b>Young Glory</b></p>
              <p>Winner, Professional Category</p>
              <p>2013</p>
              <br />
            </div>
            <div className="row">
              <h3>Award Juries</h3>
              <p><b>The One Show</b></p>
              <p>Radio</p>
              <p>2018</p>
              <br />
              <p><b>AWARD Awards</b></p>
              <p>Radio</p>
              <p>2018</p>
              <br />
            </div>
          </div>
        </div>
        <div className="button-container">
          <a className='button' href="/tristan-viney-resume.pdf" download>Download resume</a>
        </div>
        <h2>
          Feel free to get in touch for collaboration requests, additional information, or coffee (on me).
        </h2>
        <div className="page-grid">
          <div className="column">
            <h3>Contact</h3>
            <p>(+61) 0438 527-815</p>
            <a className="text-link" href="mailto:hi@tristanviney.com">hi@tristanviney.com</a>
            <br />
          </div>
          <div className="column">
            <h3>Socials</h3>
            <a className="text-link" href="http://instagram.com/tristan_viney" target="_blank" rel="noreferrer" >Instagram</a>
            <a className="text-link" href="https://www.linkedin.com/in/tristanviney" target="_blank" rel="noreferrer" >LinkedIn</a>
            <a className="text-link" href="https://www.youtube.com/@tristan_viney" target="_blank" rel="noreferrer" >YouTube</a>
            <a className="text-link" href="https://github.com/yeniv" target="_blank" rel="noreferrer" >GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;