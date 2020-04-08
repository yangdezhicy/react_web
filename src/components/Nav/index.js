import React from 'react';
import './index.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
  }

  componentDidMount(){
    // this.someFunction();
    window.addEventListener('scroll', this.someFunction);
  }

  someFunction = () => {
    // console.log(window.scrollY)
    if(window.scrollY >= 1000){
      this.setState({
        flag: true
      })
    }else{
      this.setState({
        flag: false
      })
    }
   
  }

  render() {
    const { flag } = this.state;
    return (
      <div id="navBar" className={flag?"stick nav":"nav"}>
        <div className="navLeft">
          <h1 className="name">YangDeZhi</h1>
        </div>
        <div className="navRight">
          <ul className="clearfix">
            <li><a href="/home">主页</a></li>
            <li><a href="/about">关于</a></li>
            <li><a href="/service">经历</a></li>
            <li><a href="/education">个人总结</a></li>
            <li><a href="/contact">摘要</a></li>
            <li><a href="/contact">联系方式</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;