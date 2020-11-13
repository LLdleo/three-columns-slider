import ReactJson from "react-json-view";
import CustomChart from "./eChartsCustom";
import LazyLoad from 'react-lazyload'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'

function addContent(data) {
  return (
    data.map(d =>
      <div className="threeColumns" key={d.metadata.frame_id}>
        <div className="metadata">
          <div className="title">Metadata</div><ReactJson src={d.metadata} enableClipboard={false} displayDataTypes={false}/>
        </div>
        <div className="img">
          {/*<div className="title">Image</div><div className='imgRow'><LazyLoad ><img width="100%" height="100%" src={img1} alt="" /></LazyLoad></div>*/}
          <div className="title">Image</div><div className='imgRow'><LazyLoad ><img width="100%" height="100%" src={d.imgUrl} alt="" /></LazyLoad></div>
        </div>
        <div className="plot">
          <div className="title">Plot</div><CustomChart plotData={d.plotData}/>
        </div>
      </div>
    )
  )
}

export default addContent;
