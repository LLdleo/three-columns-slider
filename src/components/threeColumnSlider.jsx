import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import addData from "./addData";
import addContent from "./addContent";
import '../style/slider.css'
// import {efData} from '../assets/data'
// import {formatData} from '../assets/readData'
import {newMeta} from "../assets/processData";
// import origin from './components/customNavigator'
// import img1 from './assets/halloween.jpg'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
// import originNavigator from './components/originalNavigator';
// import customBullets from './components/customNavigator'

console.log(newMeta)

export default class Slider extends React.Component{
  constructor() {
    super();
    this.state = { lastPressedKey: null , currentPage: 0, totalPage: 0};
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyPress);
    this.setState({
      totalPage: document.getElementsByClassName('awssld__bullets')[0].childNodes.length
    })
    var pageInput = document.getElementById('pageInput')
    pageInput.addEventListener('keyup', this.handleInput);
    // var nextBtn = document.getElementsByClassName("awssld__next")[0]
    // nextBtn.addEventListener('click', this.clickNextBtn)
    // var prevBtn = document.getElementsByClassName("awssld__prev")[0]
    // prevBtn.addEventListener('click', this.clickPrevBtn)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // const cp = document.getElementsByClassName('awssld__bullets--active')[0]
    // if (cp.innerHTML!==prevState.currentPage){
    //   this.setCurrentPage(cp.innerHTML)
    // }
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.key==='ArrowRight'){
      this.setCurrentPage(this.getCurrentPage())
      this.goNext()
    } else if (event.key==='ArrowLeft') {
      this.setCurrentPage(this.getCurrentPage())
      this.goPrev()
    }
    else {
      // just set current page number to prevent any possible error
      this.setCurrentPage(this.getCurrentPage())
    }
  }
  handleInput = event => {
    if (event.key==='Enter') {
      var pageInput = document.getElementById('pageInput')
      var pageInputVal
      if (!pageInput.value) {
        pageInputVal = parseInt(pageInput.getAttribute("placeholder"))-1
      }
      else {
        pageInputVal = parseInt(pageInput.value) - 1
      }
      if (pageInputVal >= this.state.totalPage) {
        pageInputVal = this.state.totalPage - 1
        pageInput.value = pageInputVal
      }
      var newPageBtn = this.getElementByAttr('button', 'data-index', pageInputVal)
      this.setCurrentPage(pageInputVal)
      newPageBtn.click()
      pageInput.value = null

      pageInput.setAttribute("placeholder", (pageInputVal+1))
    }
  }
  getElementByAttr(tag,attr,value) {
    var aElements=document.getElementsByTagName(tag);
    for(var i=0;i<aElements.length;i++)
    {
      if(aElements[i].getAttribute(attr)==value) {
        return aElements[i]
      }
    }
  }
  goNext = () => {
    var nextBtn = document.getElementsByClassName("awssld__next")[0]
    nextBtn.click()
    this.setCurrentPage(this.state.currentPage+1)
  }
  clickNextBtn = event => {
    this.setCurrentPage(this.state.currentPage+1)
  }
  goPrev = () => {
    var prevBtn = document.getElementsByClassName("awssld__prev")[0]
    this.setCurrentPage(this.state.currentPage-1)
    prevBtn.click()
  }
  clickPrevBtn = event => {
    this.setCurrentPage(this.state.currentPage-1)
  }
  getCurrentPage() {
    const cp = document.getElementsByClassName('awssld__bullets--active')[0]
    return parseInt(cp.getAttribute('data-index'))
  }
  setCurrentPage = (_number) => {
    if (_number >= this.state.totalPage) {
      _number = 0
    }
    else if (_number < 0) {
      _number = this.state.totalPage - 1
    }
    this.setState({
      currentPage: _number
    })
  }
  handleChange = event => {
    this.setState({
      currentPage: event.target.value
    })
    console.log(this.state.currentPage+1)
  }
  render(){
    return (
      <div className="sliderContainer">
        <AwesomeSlider>
          {addContent(newMeta)}
        </AwesomeSlider>
        <div className="navRow">
          <div className="navArrow" onClick={this.goPrev}>←</div>
          <input className="navInput" id="pageInput" type="number" min={1} max={this.state.totalPage} placeholder={(this.state.currentPage+1)} onChange={this.handleChange}/>
          <div className="totalPage">/{this.state.totalPage}</div>
          <div className="navArrow" onClick={this.goNext}>→</div>
        </div>
      </div>
    )
  }
}
