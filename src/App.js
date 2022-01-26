import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <>
    
<NavBar/>
<div className="jumbotron text-center">
  <img className="avatar" src="https://avatars.githubusercontent.com/u/71576230?v=4" /> 
  <p>| React | NodeJS | HTML | CSS |</p> 
</div>


<div id="about" className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>About Company Page</h2><br/>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3><br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br/><button className="btn btn-default btn-lg">Get in Touch</button>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-signal logo"></span>
    </div>
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-globe logo slideanim"></span>
    </div>
    <div className="col-sm-8">
      <h2>Our Values</h2><br/>
      <h3><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3><br/>
      <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>


<div id="services" className="container-fluid text-center">
  <h2>SERVICES</h2>
  <h3>What we offer</h3>
  <br/>
  <div className="row slideanim">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-off logo-small"></span>
      <h3>POWER</h3>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-heart logo-small"></span>
      <h3>LOVE</h3>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock logo-small"></span>
      <h3>JOB DONE</h3>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
  <br/><br/>
  <div className="row slideanim">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf logo-small"></span>
      <h3>GREEN</h3>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"></span>
      <h3>CERTIFIED</h3>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"></span>
      <h3>HARD WORK</h3>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
</div>


<div id="portfolio" className="container-fluid text-center bg-grey">
  <h2>Portfolio</h2><br/>
  <h3>What we have created</h3>
  <div className="row text-center slideanim">
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="paris.jpg" alt="Paris" width="400" height="300"/>
        <p><strong>Paris</strong></p>
        <p>Yes, we built Paris</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="newyork.jpg" alt="New York" width="400" height="300"/>
        <p><strong>New York</strong></p>
        <p>We built New York</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src="sanfran.jpg" alt="San Francisco" width="400" height="300"/>
        <p><strong>San Francisco</strong></p>
        <p>Yes, San Fran is ours</p>
      </div>
    </div>
  </div><br/>
  
  <h2>What our customers say</h2>
  <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
    
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <h3>"This company is the best. I am so happy with the result!"<br/><span>Michael Roe, Vice President, Comment Box</span></h3>
      </div>
      <div className="item">
        <h3>"One word... WOW!!"<br/><span>John Doe, Salesman, Rep Inc</span></h3>
      </div>
      <div className="item">
        <h3>"Could I... BE any more happy with this company?"<br/><span>Chandler Bing, Actor, FriendsAlot</span></h3>
      </div>
    </div>

    
    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>


<div id="courses" className="container-fluid">
  <div className="text-center">
    <h2>Pricing</h2>
    <h3>Choose a payment plan that works for you</h3>
  </div>
  <div className="row slideanim">
    <div className="col-sm-4 col-xs-12">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>Basic</h1>
        </div>
        <div className="panel-body">
          <p><strong>20</strong> Lorem</p>
          <p><strong>15</strong> Ipsum</p>
          <p><strong>5</strong> Dolor</p>
          <p><strong>2</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>$19</h3>
          <h3>per month</h3>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </div>      
    </div>     
    <div className="col-sm-4 col-xs-12">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>Pro</h1>
        </div>
        <div className="panel-body">
          <p><strong>50</strong> Lorem</p>
          <p><strong>25</strong> Ipsum</p>
          <p><strong>10</strong> Dolor</p>
          <p><strong>5</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>$29</h3>
          <h3>per month</h3>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </div>      
    </div>       
    <div className="col-sm-4 col-xs-12">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>Premium</h1>
        </div>
        <div className="panel-body">
          <p><strong>100</strong> Lorem</p>
          <p><strong>50</strong> Ipsum</p>
          <p><strong>25</strong> Dolor</p>
          <p><strong>10</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>$49</h3>
          <h3>per month</h3>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </div>      
    </div>    
  </div>
</div>

<div id="contact" className="container-fluid bg-grey">
  <h2 className="text-center">CONTACT</h2>
  <div className="row">
    <div className="col-sm-5">
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><span className="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
      <p><span className="glyphicon glyphicon-phone"></span> +00 1515151515</p>
      <p><span className="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
    </div>
    <div className="col-sm-7 slideanim">
      <div className="row">
        <div className="col-sm-6 form-group">
          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
        </div>
        <div className="col-sm-6 form-group">
          <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div>
      <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
      <div className="row">
        <div className="col-sm-12 form-group">
          <button className="btn btn-default pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>


<footer className="container-fluid text-center">
  <a href="#myPage" title="To Top">
    <span className="glyphicon glyphicon-chevron-up"></span>
  </a>
  <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" title="Visit w3schools">www.w3schools.com</a></p>
</footer>
    </>
  );
}

export default App;
