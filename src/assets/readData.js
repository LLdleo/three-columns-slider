import {efData} from "./data";

export let formatData = {}
for (let frame of efData) {
  if (!(frame.exp.exp_id in formatData)) {
    formatData[frame.exp.exp_id] = {
      expData: {
        title: frame.exp.title
      }
    }
  }
  let expTime = frame.exp_time.substr(0,10)
  let expData = formatData[frame.exp.exp_id].expData
  expData[expTime] = {
    scribe: frame.manual_rating_scribe,
    blister: frame.manual_rating_blister,
  }
  let pointData = {
    date: expTime,
    data: {
      scribe: frame.manual_rating_scribe,
      blister: frame.manual_rating_blister,
    }
  }
  let imgUrl = frame.image_link
  formatData[frame.exp.exp_id][expTime] = {
    metadata: frame,
    imgUrl: imgUrl,
    pointData: pointData
  }
}

