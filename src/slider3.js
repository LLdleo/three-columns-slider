import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import addData from "./components/addData";
import './style/slider.css'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
var data = [
  {
    metadata: {id: 1},
    img: img1,
    plot: "something"
  },
  {
    metadata: {id: 2},
    img: img2,
    plot: "something"
  },
  {
    metadata: {id: 3},
    img: img3,
    plot: "something"
  },
  {
    metadata: {id: 4},
    img: img4,
    plot: "something"
  },
  {
    metadata: {id: 5},
    img: img5,
    plot: "something"
  },
  {
    metadata: {id: 6},
    img: img6,
    plot: "something"
  },
]

function slider() {
  return (
    <AwesomeSlider>
      {addData(data)}
    </AwesomeSlider>
  )
}

export default slider;
