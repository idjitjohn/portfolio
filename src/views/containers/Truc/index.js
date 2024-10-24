import React, { useMemo } from 'react'
import './Truc.scss'
import * as d3 from 'd3'
import 'antd/dist/antd.css';
import { Slider } from 'antd';
import { useState, useRef } from 'react';
import { drawAmplitudes, drawAxis, drawFrequency, drawMusic, drawResultAxis, drawTranscients, fakemusic } from './drawings';

// static data - box computing
const computeBounds = (svg, margin) => {
  const bound = {}
  const { bottom, left, right, top } = margin
  bound.width = svg.clientWidth
  bound.margin = margin
  bound.height = svg.clientHeight
  const {width, height} = bound
  bound.box = {
    width: width - left - right,
    bottom: height - bottom,
    height: height - bottom - top,
    right: width - right
  }
  return bound
}

const Truc = (props) => {
  //Props & states
  const { music = fakemusic } = props
  const [portion, setPortion] = useState([0, 1])
  const mainSvgRef = useRef([20, 500])
  const resultSvgRef = useRef([20, 500])
  const total = useMemo(_ => {
    return {
      min: Math.min(...music.map(({x}) => x)),
      max: Math.max(...music.map(({x}) => x))
    }
  }, [music])
  return (
    <div className={'Truc'}>
    <span className='editor-title'>NOTE EDITOR</span>
      <div className="slider-parent">
        <Slider
          className='note-editor-slider'
          range
          min={0}
          step={0.0001}
          max={1}
          value={portion}
          tooltipVisible={false}
          onChange={portion => {
            setPortion(portion)
            if (mainSvgRef.current) updateMainSvg(mainSvgRef.current, { portion, total })
            if (resultSvgRef.current) updateResultSvg(resultSvgRef.current, { portion, total })
          }}
        />
      </div>
      <div className="main-editor-parent">
        <svg ref={ref => {
          updateMainSvg(ref, { portion, total })
          mainSvgRef.current = ref
        }} />
      </div>
      <span className='editor-title'>RESULT</span>
      <div className="result-editor-parent">
        <svg ref={ref => {
          updateResultSvg(ref, { portion, total })
          resultSvgRef.current = ref
        }} />
      </div>
    </div>
  )
}

const updateMainSvg = (svg, data) => {
  if(!data.duration) data.duration = 5
  const margin = { top: 40, right: 60, bottom: 20, left: 60 }
  if (svg) {
    const d3svg = d3.select(svg)
    const bounds = computeBounds(svg, margin)
    drawAxis(d3svg, bounds, data)
    drawMusic(d3svg, bounds, data)
    drawAmplitudes(d3svg, bounds, data)
    drawTranscients(d3svg, bounds, data)
    drawFrequency(d3svg, bounds, data)
  }
}

const updateResultSvg = (svg, data) => {
  const margin = { top: 30, right: 50, bottom: 30, left: 50 }
  if (svg){
    const d3svg = d3.select(svg)
    const bounds = computeBounds(svg, margin)
    drawResultAxis(d3svg, bounds, data)
    drawTranscients(d3svg, bounds, {...data, domain: [-1, 1]})
  }
  
}

export default Truc