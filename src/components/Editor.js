import React, { useRef, useEffect, useState } from 'react';

const Editor = () => {

    const [objectType, setObjectType] = useState('text');
    const [xPoint, setXPoint] = useState(0);
    const [yPoint, setYPoint] = useState(0);
    const canvasRef = useRef();
    let ctx = null;

    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI);
        ctx.fill();
    }

    useEffect(() => {
        const canvasEle = canvasRef.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
        ctx = canvasEle.getContext("2d");
        if(objectType === 'text') {
            const r2Info = { x: xPoint, y: yPoint, w: 100, h: 50 };
            drawRect(r2Info);
        }
        if(objectType === 'square') {
            const r4Info = { x: xPoint, y: yPoint, w: 100, h: 50 };
            drawFillRect(r4Info);
        }
    }, [draw, xPoint, yPoint]);
      
    const drawRect = (info, style = {}) => {
        const { x, y, w, h } = info;
        const { borderColor = 'black', borderWidth = 1 } = style;
        ctx.beginPath();
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.rect(x, y, w, h);
        ctx.stroke();
      }

    const drawFillRect = (info, style = {}) => {
        const { x, y, w, h } = info;
        const { backgroundColor = 'black' } = style;
        ctx.beginPath();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(x, y, w, h);
    }

    const onDrag = (event, object) => {
        event.preventDefault();
        setObjectType(object);
        setXPoint(event.clientX);
        setYPoint(event.clientY);
    }

    // const onDragEnd = (event) => {
    //     event.preventDefault();
    // }

    const onDrop = (event) => {
        event.preventDefault();
        // let id = event.dataTransfer.getData("text"); 
        // setXPoint(event.clientX);
        // setYPoint(event.clientY);
        // const dt = event.dataTransfer;
        // dt.setData('text/plain', 'Data to Drag');
        // dt.setDragImage(canvas, 100, 100);
        const data = event.dataTransfer.getData("text/plain");
        event.target.textContent = data;
        event.preventDefault();
    }

    return (
        <div style={{ display: 'flex' }}>
            <div className="tools-sidebar" style={{ paddingTop: '25px' }}>
                <div draggable onDrag={(event) => onDrag(event, 'text')}>
                    <img src="/text-icon.jpg" alt="text" width="40" height="40" style={{ cursor: 'pointer' }} />
                </div>
                <div draggable onDrag={(event) => onDrag(event, 'square')} style={{ paddingTop: '25px', cursor: 'pointer' }}>
                    <img src="/square-icon.png" alt="square" width="40" height="40" />
                </div>
            </div>
            <div className="editor">
                <canvas id="myCanvas" ref={canvasRef} ondragover={event => onDrop(event)}></canvas>
            </div>
        </div>
    )
}

export default Editor;
