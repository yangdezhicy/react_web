import React from 'react';
import './index.scss';
// import bg from '../../image/bg.jpg';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import Particles from 'react-particles-js';
import config from '../../test-particles.json'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="home">          
        <div className="left"></div>
        <div className="right">
          <div className="title">
            <h4 className="fadeInUp animated" style={{visibility: "visible", animationDelay: "0.3s",animationName: "fadeInUp"}}>welcome to my website</h4>
            <h1 className="fadeInUp animated" style={{visibility: "visible", animationDelay: "0.6s",animationName: "fadeInUp"}}>Hello, I am <strong>YangDeZhi</strong>  湖北-武汉</h1>
            <p className="fadeInUp animated" style={{visibility: "visible", animationDelay: "0.9s",animationName: "fadeInUp"}}>独学而无友 则孤陋而寡闻</p>
            <a href="/about" className="animated fadeInUp section-btn btn btn-success" data-wow-delay="1.4s"  style={{visibility: "visible", animationDelay: "0.9s",animationName: "fadeInUp"}}>Get Started</a>
          </div>
          <Particles
            params={config}
            style={{
              width: '100%',
              height: "1000px",
              backgroundColor: "#000" 
            }}
          />
        </div>
        <Nav/>
        <Footer/>
      </div>
    )
  }
}

export default Home;