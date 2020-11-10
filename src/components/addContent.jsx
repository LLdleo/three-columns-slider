import ReactJson from "react-json-view";
import CustomChart from "./eChartsCustom";
import LazyLoad from 'react-lazyload'

function addContent(data) {
  return (
    data.map(d =>
      <div className="threeColumns" key={d.metadata.frame_id}>
        <div className="metadata">
          <div className="title">Metadata</div><ReactJson src={d.metadata} enableClipboard={false} displayDataTypes={false}/>
        </div>
        <div className="img">
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
