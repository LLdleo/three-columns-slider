import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import addData from "./components/addData";
import './style/slider.css'
// import origin from './components/customNavigator'
// import img1 from './assets/halloween.jpg'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
// import originNavigator from './components/originalNavigator';

let metadata = {
  "frame_id": "B1CF2B1B-1EB5-4AAD-A8A5-86712E8C1569-2015-02-28-00:00:00.000",
  "exp": {
    "exp_id": "B1CF2B1B-1EB5-4AAD-A8A5-86712E8C1569",
    "session": {
      "session_id": "5",
      "user": {
        "id": 2,
        "first_name": "Tom",
        "last_name": "Considine",
        "email": ""
      },
      "title": "ALR2",
      "comment": null
    },
    "type": "Outdoor: ASTM G50",
    "title": "53022 Fe-3",
    "creation_time": "2015-02-28T00:00:00Z",
    "substrate": "cold rolled steel",
    "primer": "MIL-DTL-53022 Type IV",
    "pretreatment": "none",
    "topcoat": "MIL-DTL-53039",
    "profile": "mill finish",
    "panel": "6\" x 4\"",
    "deleted": false
  },
  "image_link": "http://127.0.0.1:8008/datastorage/53022%20Fe-3%20(2018%2C%208-28).jpg",
  "comment": null,
  "exp_time": "2018-08-28T00:00:00Z",
  "manual_rating_scribe": 5,
  "manual_rating_blister": 10,
  "auto_rating_scribe": null,
  "auto_rating_blister": null,
  "point_ratings": [
    5.6,
    2.5,
    7.4,
    3.0,
    4.0,
    5.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0
  ],
  "min_point_rating": 2.5,
  "max_point_rating": 7.4,
  "avg_point_rating": 4.583333333,
  "mode_point_rating": 0.0,
  "scribe_rating_ds": 0,
  "min_max_difference": 0.0,
  "color_L": null,
  "color_a": null,
  "color_b": null,
  "gloss_20": null,
  "gloss_60": null,
  "gloss_80": null,
  "deleted": false
}
var data = [
  {
    metadata: metadata,
    img: img1,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img2,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img3,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img4,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img5,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
    img: img6,
    plot: "something"
  },
  {
    metadata: metadata,
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
