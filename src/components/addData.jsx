import ReactJson from "react-json-view";

function addData(data) {
  return (
    data.map(d =>
      <div className="threeColumns" key={d.metadata.id}>
        <div className="metadata"><div className="title">Metadata</div><ReactJson src={d.metadata} enableClipboard={false} /></div>
        <div className="img"><div className="title">Image</div><div className='imgRow'><img width="100%" height="100%" src={d.img} alt="" /></div></div>
        <div className="plot"><div className="title">Plot</div>{d.plot}</div>
      </div>
    )
  )
}

export default addData;
