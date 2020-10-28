import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'

const slider = (
  <AwesomeSlider>
    <div data-src={img1} />
    <div data-src={img2} />
    <div data-src={img3} />
    <div data-src={img4} />
    <div data-src={img5} />
    <div data-src={img6} />
  </AwesomeSlider>
);

export default slider;
