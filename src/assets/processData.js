import {formatData} from "./readData";

export let newMeta = []
for (let expId in formatData) {
  let exp = formatData[expId]
  if (!('expDataPlot' in exp)) {
    let expDataPlot = {
      title: exp.expData.title,
      x: [],
      scribe: [],
      blister: []
    }
    for (let key in exp.expData) {
      if (key==='title') {

      }
      else {
        expDataPlot.x.push(key)
        expDataPlot.scribe.push(exp.expData[key].scribe)
        expDataPlot.blister.push(exp.expData[key].blister)
      }
    }
    exp['expDataPlot'] = expDataPlot
  }
  let expDataPlot = exp.expDataPlot
  for (let key in exp) {
    if (['expData', 'expDataPlot'].indexOf(key) === -1) {
      let frameData = exp[key]
      frameData['plotData'] = Object.assign({}, expDataPlot)
      let scribePoint = Array(expDataPlot.x.length).fill(null)
      let blisterPoint = Array(expDataPlot.x.length).fill(null)
      let num = expDataPlot.x.indexOf(key)
      scribePoint[num] = frameData['pointData'].data.scribe
      blisterPoint[num] = frameData['pointData'].data.blister
      frameData['plotData']['scribePoint'] = scribePoint
      frameData['plotData']['blisterPoint'] = blisterPoint
      newMeta.push(frameData)
    }
  }
}

