import React, {Component} from 'react';
import '../styles/landing/css/agency.min.css';
import '../styles/landing/css/agency.css';
import { SocialIcon } from 'react-social-icons';



class landingPage extends Component {
    
    render() {
        
        return (
          <div>
         
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">Project Management System</a>
              
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item">
                  <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/login">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      
          <header className="masthead">
            <div className="container">
              <div className="intro-text">
                <div className="intro-heading text-uppercase">Welcome To PMS!</div>
                <div className="intro-lead-in">Manage your projects 
                from start to finish with PMS</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
              </div>
            </div>
          </header>
      
          
          <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">About</h2>
                  <h3 className="section-subheading text-muted">Serious Software, Friendly Company.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="timeline">
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={require("../assets/landingimg/about/1.jpg")} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>2009-2011</h4>
                          <h4 className="subheading">Our Humble Beginnings</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">Atlassian, inspired us to make a Project Management System.</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={require("../assets/landingimg/about/2.jpg")} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>March 2011</h4>
                          <h4 className="subheading">An Agency is Born</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">We welcome our first employees Ali and Sana college friends.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={require("../assets/landingimg/about/3.jpg")} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>December 2012</h4>
                          <h4 className="subheading">We get our 1,000th customer</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">We begin hosting our quarterly internal innovation days, ShipIt. It's like 20% time on steroids.</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={require("../assets/landingimg/about/5.jpg")} alt=""/>
                      </div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <h4>July 2018</h4>
                          <h4 className="subheading">10 years!</h4>
                        </div>
                        <div className="timeline-body">
                          <p className="text-muted">PMS celebrates its 10th anniversary. We hit $100 million dollars of revenue without a sales team.</p>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-image">
                        <h4>Be Part
                          <br />Of Our
                          <br />Story!</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
      
    
          <section className="bg-light" id="team">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                  <h3 className="section-subheading text-muted">Some of the nicest people you'll ever meet.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src={require("../assets/landingimg/team/4.JPG")} alt=""/>
                    <h4>Malik Mubashir</h4>
                    <p className="text-muted">Founder</p>
                    <ul className="list-inline social-buttons">
                      <li className="list-inline-item">
                      <SocialIcon url="http://linkedin.com/in/em-mubashir" />
                      </li>
                      <li className="list-inline-item">
                      <SocialIcon url="http://twitter.com/em_mubashir" />
                      </li>
                      <li className="list-inline-item">
                      <SocialIcon url="http://facebook.com/Em.Mubashir.7" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src={require("../assets/landingimg/team/5.JPG")} alt=""/>
                    <h4>Muzamil Sabir</h4>
                    <p className="text-muted">Lead Marketer</p>
                    <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                    <SocialIcon url="http://linkedin.com/in/em-mubashir" />
                    </li>
                    <li className="list-inline-item">
                    <SocialIcon url="http://twitter.com/em_mubashir" />
                    </li>
                    <li className="list-inline-item">
                    <SocialIcon url="http://facebook.com/Em.Mubashir.7" />
                    </li>
                  </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="team-member">
                    <img className="mx-auto rounded-circle" src={require("../assets/landingimg/team/6.JPG")} alt=""/>
                    <h4>Ebad ul Hassan</h4>
                    <p className="text-muted">Lead Developer</p>
                    <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                    <SocialIcon url="http://linkedin.com/in/em-mubashir" />
                    </li>
                    <li className="list-inline-item">
                    <SocialIcon url="http://twitter.com/em_mubashir" />
                    </li>
                    <li className="list-inline-item">
                    <SocialIcon url="http://facebook.com/Em.Mubashir.7" />
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h3 style = {{textAlign: 'center'}}>Trusted by over 35,000 customers world-wide</h3>
          <section className="py-5">
          
            <div className="container">
            
              <div className="row">
              
                  
               
                
                <div className="col-md-3 col-sm-6">
                  <a href="#">
                    <img className="img-fluid d-block mx-auto" style = {{height: '50px', width: '200px'}} src={require("../assets/landingimg/logos/creative-market.jpg")}  alt=""/>
                  </a>
                </div>
                <div className="col-md-3 col-sm-6">
                  <a href="#">
                    <img className="img-fluid d-block mx-auto" style = {{height: '50px', width: '200px'}} src={require("../assets/landingimg/logos/designmodo.jpg")} alt=""/>
                  </a>
                </div>
                <div className="col-md-3 col-sm-6">
                  <a href="#">
                    <img className="img-fluid d-block mx-auto" style = {{height: '50px', width: '200px'}} src={require("../assets/landingimg/logos/TV-canada-1.png")} alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </section>
      
          <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Contact Us</h2>
                  <h3 className="section-subheading text-muted">Let us know if you have any query.</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                          <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                          <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                          <p className="help-block text-danger"></p>
                        </div>
                        <div className="form-group">
                          <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                          <p className="help-block text-danger"></p>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
      
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <span className="copyright">Copyright &copy; PMS 2018</span>
                </div>
              
                <div className="col-md-6">
                  <ul className="list-inline quicklinks" style ={{float:'right'}}>
                    <li className="list-inline-item">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
      
          <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal">
                  <div className="lr">
                    <div className="rl"></div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                        
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src={require("../assets/landingimg/portfolio/01-full.jpg")} alt=""/>
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2017</li>
                          <li>Client: Threads</li>
                          <li>Category: Illustration</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times"></i>
                          Close Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal">
                  <div className="lr">
                    <div className="rl"></div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                     
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src={require("../assets/landingimg/portfolio/02-full.jpg")} alt=""/>
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2017</li>
                          <li>Client: Explore</li>
                          <li>Category: Graphic Design</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times"></i>
                          Close Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
   
          <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal">
                  <div className="lr">
                    <div className="rl"></div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                  
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src={require("../assets/landingimg/portfolio/03-full.jpg")} alt=""/>
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2017</li>
                          <li>Client: Finish</li>
                          <li>Category: Identity</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times"></i>
                          Close Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
  
          <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal">
                  <div className="lr">
                    <div className="rl"></div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                      
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src={require("../assets/landingimg/portfolio/04-full.jpg")} alt=""/>
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2017</li>
                          <li>Client: Lines</li>
                          <li>Category: Branding</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times"></i>
                          Close Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
     
          <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal">
                  <div className="lr">
                    <div className="rl"></div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
              
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src={require("../assets/landingimg/portfolio/05-full.jpg")} alt=""/>
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2017</li>
                          <li>Client: Southwest</li>
                          <li>Category: Website Design</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times"></i>
                          Close Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
 
          <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="close-modal" data-dismiss="modal">
                  <div className="lr">
                    <div className="rl"></div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="modal-body">
                       
                        <h2 className="text-uppercase">Project Name</h2>
                        <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                        <img className="img-fluid d-block mx-auto" src={require("../assets/landingimg/portfolio/06-full.jpg")} alt=""/>
                        <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                        <ul className="list-inline">
                          <li>Date: January 2017</li>
                          <li>Client: Window</li>
                          <li>Category: Photography</li>
                        </ul>
                        <button className="btn btn-primary" data-dismiss="modal" type="button">
                          <i className="fas fa-times"></i>
                          Close Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          </div>
        );
      }

}
export default landingPage;