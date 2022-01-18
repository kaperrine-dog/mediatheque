import React from "react";
import styled from "styled-components";

const Network = ({ id, randomRangeMin , randomRangeMax }) => {
  
  const canvasAnimation = ( randomRangeMin, randomRangeMax, scale, viewWidth, viewHeight, nodesNumber, drawingCanvas ) => {
    let ctx,
        timeStep = (1/60),
        time = 0;
    let nodes = [],
        signals = [];
  
    let signalCount = 0;
    
    function initDrawingCanvas() {
        drawingCanvas.width = viewWidth * scale;
        drawingCanvas.height = viewHeight * scale;
        ctx = drawingCanvas.getContext('2d');
				ctx.scale(scale, scale)
    }
  
    function createNodes(nodesNumber) {
        let rad = viewWidth * 0.5 - 10;
  
        for (let i = 0; i < nodesNumber; i++) {
            let q = Math.random() * (Math.PI * 2);
            let r = Math.sqrt(Math.random());
            let x = (rad * r) * Math.cos(q) + viewWidth * 0.5;
            let y = (rad * r) * Math.sin(q) + viewWidth * 0.5;
  
            nodes[i] = new Node(x, y);
        }
    }
  
    function connectNodes() {
        let connection,
            j,
            connectCount;
  
        for (let i = 0; i < nodes.length; i++) {
            j = 0;
  
            connectCount = Math.floor(randomRange(3, 6));
  
            while (j < connectCount) {
                connection = getRandom(nodes);
  
                if (nodes[i] !== connection) {
                    nodes[i].connections.push(connection);
                    j++;
                }
            }
        }
    }
  
    function transmit() {
        signals.push(new Signal(getRandom(nodes)));
        signalCount++;
    }
  
    function update() {
        nodes.forEach(function(n) {
            n.update();
        });
  
        signals.forEach(function(s) {
            if (s.update() === true) {
                signals.splice(signals.indexOf(s), 1);
            }
        });
    }
  
    function draw() {
        ctx.clearRect(0, 0, viewWidth, viewHeight);
  
        nodes.forEach(function(n) {
            n.draw();
        });
  
        signals.forEach(function(s) {
            s.draw();
        });
    }
  
    function loop() {
        update();
        draw();
        time += timeStep;
        requestAnimationFrame(loop);
    }
  
    function Node(x, y) {
        this.x = this._x = x;
        this.y = this._y = y;
  
        this.connections = [];
  
        this.r = randomRange( randomRangeMin, randomRangeMax);
    }
    Node.prototype = {
        update:function() {
            this.x = this._x + Math.sin(time) * this.r;
            this.y = this._y + Math.cos(time) * this.r;
        },
        draw:function() {
            ctx.strokeStyle = '#777';
            ctx.fillStyle = '#777';
            ctx.lineWidth = 0.4;
  
            ctx.fillRect(this.x, this.y, 1, 1);
  
            for (let i = 0; i < this.connections.length; i++) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.connections[i].x, this.connections[i].y);
                ctx.stroke();
                
            }
        }
    };
  
    function Signal(start) {
        this.start = start;
        this.parts = [];
        this.completeParts = [];
        this.strength = 2.0;
        this.jumps = 0;
        
        //let tint = (signalCount % 24) * 50;
        let tint = Math.floor(Math.random() * 360);
        this.style = 'hsl(' + tint + ',100%,50%)';
  
        for (let i = 0; i < start.connections.length; i++) {
            this.parts.push(new SignalPart(this.start, this.start.connections[i], this.strength, this.style));
        }
    }
    Signal.prototype = {
        update:function() {
            let complete = false;
            this.completeParts.length = 0;
  
            for (let i = this.parts.length - 1; i >= 0; i--) {
                this.parts[i].time += timeStep;
  
                if (this.parts[i].complete) {
                    this.completeParts.push(this.parts.splice(i, 1)[0]);
                }
            }
            
            if (this.completeParts.length > 0) {
                this.jumps++;
                this.strength--;
                complete = this.jumps === 1;
            }
        
            if (complete === false) {
                let part,
                end,
                connection;
  
                for (let j = 0; j < this.completeParts.length; j++) {
                    part = this.completeParts[j];
                    end = part.end;
  
                    for (let k = 0; k < end.connections.length; k++) {
                        connection = end.connections[k];
  
                        this.parts.push(new SignalPart(end, connection, this.strength, this.style));
                    }
                }
            }
        
            return complete;
        },
        draw:function() {
            for (let i = 0; i < this.parts.length; i++) {
                this.parts[i].draw();
            }
        }
    };
  
    function SignalPart(start, end, strength, style) {
        this.start = start;
        this.end = end;
        this.strength = strength;
        this.style = style;
        this._time = 0;
        this.prevTime = 0;
        this.duration = 2;//2
        this.complete = false;

        this.p0 = {x:0, y:0};
        this.p1 = {x:0, y:0};
    }
    SignalPart.prototype = {
        set time(v) {
            this.prevTime = this._time;
            this._time = v >= this.duration ? this.duration : v;
            this.complete = this._time === this.duration;
        },
        get time() {
            return this._time;
        },
        draw:function() {
            let t0 = Ease.outCubic(this.prevTime, 0, 1, this.duration);
            let t1 = Ease.outQuad(this.time, 0, 1, this.duration);
            lerp(this.start, this.end, t0, this.p0);
            lerp(this.start, this.end, t1, this.p1);
  
            ctx.strokeStyle = this.style;
            ctx.lineWidth = this.strength * 0.5;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(this.p0.x, this.p0.y);
            ctx.lineTo(this.p1.x, this.p1.y);
            ctx.stroke();
        }
    };
  
  
  
    function randomRange(min, max) {
        return min + Math.random() * (max - min);
    }
  
    function getRandom(a) {
        return a[Math.floor(Math.random() * a.length)];
    }
  
    function lerp(n1, n2, t, p) {
        p = p || {x:0, y:0};
  
        p.x = n1.x + t * (n2.x - n1.x);
        p.y = n1.y + t * (n2.y - n1.y);
  
        return p;
    }
  
    /**
     * easing equations from http://gizma.com/easing/
     * t = current time
     * b = start value
     * c = delta value
     * d = duration
     */
    let Ease = {
        inCubic:function (t, b, c, d) {
            t /= d;
            return c*t*t*t + b;
        },
        outCubic:function(t, b, c, d) {
            t /= d;
            t--;
            return c*(t*t*t + 1) + b;
        },
        inQuad: function (t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        outQuad: function (t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        inOutCubic:function(t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t + 2) + b;
        }
    };
  
    initDrawingCanvas();
    createNodes(nodesNumber);
    connectNodes();
    transmit();
    setInterval(transmit, 1000);
    requestAnimationFrame(loop);
  }

  const StyledFlexBox = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `
  //--------------------------------------------

	
  React.useEffect(
		( ) => {
			const resizeCanvas = (scale, width, height, nodesNumber, canvas ) => {
				let viewWidth = window.innerWidth
				let viewHeight = window.innerHeight
				//height = canvas.parentElement.parentElement.clientHeight
				//width = canvas.parentElement.parentElement.clientWidth
				viewWidth >= viewHeight ? (nodesNumber=60) : (nodesNumber=30)
				setTimeout( () => {
					canvasAnimation(randomRangeMin , randomRangeMax, scale, height , height , nodesNumber, canvas );
				}, 500)
			}
      const renderCanvas = ( ) => {
				const scale = window.devicePixelRatio;
				let drawingCanvas = document.getElementById( id )
				let canvasWidth = drawingCanvas.parentElement.clientWidth
				let canvasHeight = drawingCanvas.parentElement.clientHeight
				drawingCanvas.style.width = `${canvasWidth}px`
				drawingCanvas.style.height = `${canvasHeight}px`
				let nodesNumber
				setTimeout(() => {
					resizeCanvas(scale, canvasHeight, canvasWidth, nodesNumber, drawingCanvas )
				}, 250);
			}
      renderCanvas(id)
			window.addEventListener('resize' , renderCanvas)
      return () => { window.removeEventListener('resize' , renderCanvas) }
    }
  )
    
  return(
    <StyledFlexBox>
      <canvas 
        className="drawingCanvas"
        id= { id }
      ></canvas>
    </StyledFlexBox>
  )
}
export default Network