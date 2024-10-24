import * as d3 from 'd3'

export const fakemusic = Array.from(new Array(10000).keys()).map(_ => Math.random()).map((val, x) => ({ x, y: val }))
const fakeamps = fakemusic.filter(({ x }) => x % 100 == 0)
const faketrans = fakemusic.filter(({ x }) => x % 700 == 0)
const fakefreq = fakemusic.filter(({ x }) => x % Math.floor(fakemusic.length/50) == 0).map(({x}, i, {length}) => {
  let y = .1
  if(i > length * .25 && i < .75 * length){
    y = Math.abs(Math.sin(((i - length/4) / length) * 2 * Math.PI) * 0.8) + .1
  }
  return {x , y}
})


export const drawAxis = (d3svg, bounds, data) => {
  const { margin, box, width, height } = bounds
  const { portion: [min, max], duration } = data

  // AxisRanges
  const amplitudeAxis = d3.scaleLinear().domain([0, 1]).nice().rangeRound([box.bottom, margin.top])
  const timelineAxis = d3.scaleLinear().domain(d3.extent([min * duration, max * duration])).range([margin.left, width - margin.right])
  const frequencyAxis = d3.scaleLinear().domain([63, 300]).nice().rangeRound([box.bottom, margin.top])

  // Axis creator
  const createAxis = (classname, axisHandler) => {
    window.d3svg = d3svg
    let d3Node = d3svg.select('.' + classname)
    if (!d3Node.node()) {
      d3Node = d3svg.append("g")
      d3Node.node().classList.add(classname, 'whiteaxis')
    }
    if(classname == 'timeline-axis') d3Node.transition().duration(100).call(axisHandler)
    else d3Node.call(axisHandler)
  }
  
  // Draw Amplitude Axis
  const amplitudeAxisHandler = g => {
    g.attr("transform", `translate(${margin.left - 10},0)`)
      .call(d3.axisLeft(amplitudeAxis)
      .tickFormat(x => `${x.toFixed(2)}`)
      .tickValues([0, 0.25, 0.5, .75, 1]))
    const G = d3.select(g.node())
    G.selectAll('.fulline').remove()
    G.selectAll(".tick line").clone()
      .attr("x1", box.width)
      .attr("stroke-opacity", 0.1)
      .attr("class", 'fulline')
    return g
  }
  createAxis('amplitude-axis', amplitudeAxisHandler)

  // Draw Timeline Axis
  const timelineAxisHandler = g => {
    g.node().classList.add('whiteaxis')
    g.attr("transform", `translate(0,${margin.top - 10})`)
      .call(d3.axisTop(timelineAxis).tickFormat(x => `${x}`).ticks(10))
    return g
  }
  createAxis('timeline-axis', timelineAxisHandler)

  // Draw Frequency Axis
  const frequencyAxisHandler = g => {
    g.node().classList.add('whiteaxis')
    g.attr("transform", `translate(${box.right + 10},0)`)
      .call(d3.axisRight(frequencyAxis))
    return g
  }
  createAxis('frequency-axis', frequencyAxisHandler)


  // Little parts
  let leftpart = d3svg.select('.part-left').node()
  if(!leftpart) leftpart = d3svg.append("path")
    .attr("fill", "none")
    .attr("class", "part-left whiteaxis")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1)
  else leftpart = d3svg.select('.part-left')

  leftpart.datum([
    {x: margin.left - 10, y: margin.top},
    {x: margin.left - 10, y: margin.top - 10},
    {x: margin.left, y: margin.top - 10},
  ]).attr("d", d3.line()
    .x(d => d.x)
    .y(d => d.y)
  )

  let rightpart = d3svg.select('.part-right')
  if(!rightpart.node()) rightpart = leftpart.clone()
    .attr("class", "part-right whiteaxis")
  rightpart.datum([
      {x: width - margin.right + 10, y: margin.top},
      {x: width - margin.right + 10, y: margin.top - 10},
      {x: width - margin.right, y: margin.top - 10},
    ]).attr("d", d3.line()
      .x(d => d.x)
      .y(d => d.y)
    )
  
  // Textes
  let ampText = d3svg.select('.amp-text')
  if(!ampText.node()){
    ampText = d3svg.append('text').attr('class', 'amp-text').text('Amplitude').attr("text-anchor", "middle")
  }
  ampText.attr('transform', `rotate(-90) translate(${-height / 2}, ${13})`)

  let freqText = d3svg.select('.freq-text')
  if(!freqText.node()){
    freqText = d3svg.append('text').attr('class', 'freq-text').text('Frequence').attr("text-anchor", "middle")
  }
  freqText.attr('transform', `rotate(90) translate(${height / 2}, ${13 - width})`)
  

}

export const drawMusic = (d3svg, bounds, data) => {
  const { margin, box } = bounds
  let {
    total: {min: tmin, max:tmax},
    portion: [min, max],
    music = fakemusic
  } = data

  // transformation
  min = tmin + min * (tmax - tmin)
  max = tmin + max * (tmax - tmin)
  let musicdata = music.filter(({x}) => x >= min && x <= max)

  // Ranges
  const musicRange = d3.scaleLinear()
    .domain(d3.extent([min, max]))
    .range([margin.left, box.right])
  const musicRangeY = d3.scaleLinear()
    .domain(d3.extent([0, 1]))
    .range([box.bottom, margin.top])

  // Draw
  const area = d3.area()
    .x(({x}) => musicRange(x))
    .y0(box.bottom)
    .y1(({y}) => musicRangeY(y))
  let musicpath = d3svg.select('.music').node()
  if(musicpath) musicpath = d3.select(musicpath)
  else musicpath = d3svg.append("path").attr("class", "music").attr("fill", "rgb(15, 54, 40)")
  musicpath.attr("d", area(musicdata)).transition().duration(100);
}

export const drawAmplitudes = (d3svg, bounds, data) => {
  const { margin, box } = bounds
  let {
    portion: [min, max],
    total: {min: tmin, max:tmax},
    amps = fakeamps
  } = data

  // transformation
  min = tmin + min * (tmax - tmin)
  max = tmin + max * (tmax - tmin)
  let ampsdata = amps.filter(({x}) => x >= min && x <= max)


  // Ranges
  const ampsRange = d3.scaleLinear()
    .domain(d3.extent([min, max]))
    .range([margin.left, box.right])
  const ampsRangeY = d3.scaleLinear()
    .domain(d3.extent([0, 1]))
    .range([box.bottom, margin.top])

  // Draw Blue Line
  let ampg = d3svg.select('.squares')
  ampg = ampg.node() ? ampg : d3svg.append("g").attr("class", "squares")
  ampg.selectAll("rect").remove()
  ampg.selectAll("path").remove()
  ampg.append("path")
    .datum(ampsdata)
    .attr("fill", "none")
    .attr("stroke", "rgb(60, 152, 200)")
    .attr("stroke-width", 1)
    .attr("tabindex", "1")
    .attr("d", d3.line()
      .x(function (d) { return ampsRange(d.x)})
      .y(d => ampsRangeY(d.y))
    )

  // Draw Blue Squares
     // moving squares
    function dragged(event, d) {
      const square = d3.select(this)
      const x = event.sourceEvent.offsetX
      const y = event.sourceEvent.offsetY
      // d.x = ampsRange.invert(x)
      d.y = ampsRangeY.invert(y)
      square.attr('y', y) //.attr('x', x)
      ampg.select('path').attr('d', d3.line()
        .x(function (d) { return ampsRange(d.x)})
        .y(d => ampsRangeY(d.y))
      )
    }
    let drag = d3.drag().on('drag', dragged)

  ampg.selectAll("trucs").data(ampsdata).enter()
    .append("rect")
    .attr("fill", "#333")
    .attr("stroke", "rgb(60, 152, 200)")
    .attr("stroke-width", 2)
    .attr('class', 'zoom-rect-on-hover')
    .attr("x", function ({x}, i) { return ampsRange(x) - 3})
    .attr("y", function ({y}) { return ampsRangeY(y) - 3 })
    .attr("width", 6)
    .attr("tabindex", 1)
    .attr("height", 6)
    .call(drag)
  
}

export const drawTranscients = (d3svg, bounds, data) => {
  const { margin, box } = bounds
  let {
    portion: [min, max],
    domain,
    total: {min: tmin, max:tmax},
    trans = faketrans
  } = data

  // transformation
  min = tmin + min * (tmax - tmin)
  max = tmin + max * (tmax - tmin)
  let transdata = trans.filter(({x}) => x >= min && x <= max)

  // Ranges
  const transRange = d3.scaleLinear()
    .domain(d3.extent([min, max]))
    .range([margin.left, box.right])
  const transRangeY = d3.scaleLinear()
    .domain(d3.extent(domain || [0, 1]))
    .range([box.bottom, margin.top])

  // Draw
  let trtg = d3svg.select('.transcients').node()
  trtg = trtg ? d3.select(trtg) : d3svg.append("g").attr("class", "transcients")
  trtg.selectAll("g").remove()

  // Movable
  function dragged(event, d) {
    const circle = d3.select(this)
    const x = event.sourceEvent.offsetX
    const y = event.sourceEvent.offsetY
    // d.x = transRange.invert(x)
    d.y = transRangeY.invert(y)
    circle.attr('cy', y) //.attr('cx', x)
    d3.select(circle.node().parentNode.querySelector('line'))
      .attr("y2", function(d){ return transRangeY(d.y) })
  }
  let drag = d3.drag().on('drag', dragged)

  trtg.selectAll("trucs").data(transdata).enter()
    .append("g").each(function(data){
      const g = d3.select(this)
      g.classed('zoom-circle-on-hover', true)
      g.append('line')
      .attr("fill", "none")
      .attr("stroke", "rgb(242, 218, 62)")
      .attr("x1", function (d) { return transRange(d.x) })
      .attr("x2", function (d) { return transRange(d.x) })
      .attr("y1", d => transRangeY(0))
      .attr("y2", function(d){ return transRangeY(d.y) })
      g.append("circle")
      .attr("fill", "rgb(242, 218, 62)")
      .attr("stroke", "none")
      .attr("tabindex", 1)
      .attr("cx", function (d) { return transRange(d.x) })
      .attr("cy", function (d) { return transRangeY(d.y) })
      .attr("r", 3)
      .call(drag)
    })
}

export const drawFrequency = (d3svg, bounds, data) => {
  const { margin, box } = bounds
  let {
    portion: [min, max],
    total: {min: tmin, max:tmax},
    freqs = fakefreq
  } = data

  // transformation
  min = tmin + min * (tmax - tmin)
  max = tmin + max * (tmax - tmin)
  let freqdata = freqs.filter(({x}) => x >= min && x <= max)

  // Ranges
  const freqRange = d3.scaleLinear()
    .domain(d3.extent([min, max]))
    .range([margin.left, box.right])
  const freqRangeY = d3.scaleLinear()
    .domain(d3.extent([0, 1]))
    .range([box.bottom, margin.top])

  // Draw
  // Draw Blue Circles
    let freqg = d3svg.select('.freq')
    let freqline = freqg.select('path')
    if(!freqg.node()){
      freqg = d3svg.append("g").attr("class", "freq")
      freqline = freqg.append("path")
        .attr("fill", "none")
        .attr("stroke", "rgb(242, 218, 62)")
        .attr("stroke-width", 1)
    }

    // Movable
    function dragged(event, d) {
      const circle = d3.select(this)
      const x = event.sourceEvent.offsetX
      const y = event.sourceEvent.offsetY
      // d.x = freqRange.invert(x)
      d.y = freqRangeY.invert(y)
      circle.attr('cy', y) //.attr('cx', x)
      freqg.select('path').attr('d', d3.line()
        .x(function (d) { return freqRange(d.x)})
        .y(d => freqRangeY(d.y))
        .curve(d3.curveNatural)
      )
    }
    let drag = d3.drag().on('drag', dragged)

    freqg.selectAll("circle").remove()
    freqg.selectAll("trucs").data(freqdata).enter()
      .append("circle")
      .attr("fill", "rgba(242, 218, 62,0)")
      .attr("stroke-width", 2)
      .attr("class", 'zoom-on-hover')
      .attr("cx", function ({x}, i) { return freqRange(x)})
      .attr("cy", function ({y}) { return freqRangeY(y)})
      .attr("r", 1)
      .call(drag)
    
    freqline.datum(freqdata)
      .attr("d", d3.line()
        .x(function (d) { return freqRange(d.x)})
        .y(d => freqRangeY(d.y))
        .curve(d3.curveNatural)
      )
}

export const drawResultAxis = (d3svg, bounds, data) => {
  const { margin, box, width } = bounds
  const { portion: [min, max], duration } = data

  // AxisRanges
  const amplitudeAxis = d3.scaleLinear().domain([-1, 1]).nice().rangeRound([box.bottom, margin.top])

  // Axis creator
  const createAxis = (classname, axisHandler) => {
    window.d3svg = d3svg
    let d3Node = d3svg.select('.' + classname)
    if (!d3Node.node()) {
      d3Node = d3svg.append("g")
      d3Node.node().classList.add(classname, 'whiteaxis')
    }
    if(classname == 'timeline-axis') d3Node.transition().duration(100).call(axisHandler)
    else d3Node.call(axisHandler)
  }
  
  // Draw Amplitude Axis
  const amplitudeAxisHandler = g => {
    g.attr("transform", `translate(${margin.left - 1},0)`)
      .call(d3.axisLeft(amplitudeAxis)
      .tickFormat(x => `${x.toFixed(2)}`)
      .tickValues([-1, -0.75, -0.5, -.25, 0, 0.25, 0.5, .75, 1]))
    const G = d3.select(g.node())
    G.selectAll('.fulline').remove()
    G.selectAll(".tick line").clone()
      .attr("x1", box.width)
      .attr("stroke-opacity", 0.1)
      .attr("class", 'fulline')
    return g
  }
  createAxis('amplitude-axis', amplitudeAxisHandler)

  // Little parts

}