/* 
The code below is my own, 
However, the idea of the pattern came the repo credited below.
-----------------------------------------------
Author : Vincent Garreau  - vincentgarreau.com
MIT license: http://opensource.org/licenses/MIT
Demo / Generator : vincentgarreau.com/particles.js
GitHub : github.com/VincentGarreau/particles.js
----------------------------------------------- 
*/
import React, { useEffect } from "react";

function DarkConstellation() {
   const canvasRef = React.useRef();
   const savedCircles = [];
   const frameRate = 10;
   const exitRange = 100;
   let currentBallCount = 0;

   let lineLength = 120;
   let firstDraw = true;

   const randomNum = (low, high) => {
      return Math.floor(Math.random() * (high - low) + low);
   };

   const eventCircleInfo = function (e) {
      if (e === undefined) {
         e = false;
      }
      this.velX = randomNum(-2, 2);
      this.velY = randomNum(-1, -3);
      this.currentX = e.pageX || randomNum(0, e.pageX);
      this.currentY = e.pageY || e.pageY + exitRange;
      this.radius = randomNum(5, 10);
   };

   const handleCanvasClick = (e) => {
      for (let count = 5; count > 0; count--) {
         let circle = new eventCircleInfo(e);
         savedCircles.push(circle);
         currentBallCount++;
      }
   };

   useEffect(() => {
      const ctx = canvasRef.current.getContext("2d");

      let maxBallCount = 0;

      const originalCircleGen = function () {
         this.velX = randomNum(-2, 2);
         this.velY = randomNum(-1, -3);
         this.currentX = randomNum(0, ctx.canvas.width);
         this.currentY = randomNum(0, ctx.canvas.width);
         this.radius = randomNum(5, 10);
      };
      const circleInfo = function (e) {
         if (e === undefined) {
            e = false;
         }
         this.velX = randomNum(-2, 2);
         this.velY = randomNum(-1, -3);
         this.currentX = e.pageX || randomNum(0, ctx.canvas.width);
         this.currentY = e.pageY || ctx.canvas.height + exitRange;
         this.radius = randomNum(5, 10);
      };

      function drawBall(x, y, ballRad) {
         ctx.globalAlpha = 0.2;
         ctx.beginPath();
         ctx.arc(x, y, ballRad, 0, Math.PI * 2);
         ctx.fillStyle = "#ffcb9a";
         ctx.fill();
         ctx.closePath();
      }
      function drawLine(obj1, obj2, hypot) {
         // let alpha = lineLength / hypot
         ctx.globalAlpha = 0.1;
         ctx.beginPath();
         ctx.moveTo(obj1.currentX, obj1.currentY);
         ctx.lineTo(obj2.currentX, obj2.currentY);
         ctx.strokeStyle = "#ffcb9a";
         ctx.stroke();
      }
      let firstDraw = true;
      function draw() {
         ctx.canvas.width = window.innerWidth;
         ctx.canvas.height = window.innerHeight;
         maxBallCount = (ctx.canvas.width + ctx.canvas.height) / 20;
         if (currentBallCount < maxBallCount) {
            if (firstDraw === false) {
               let circle = new circleInfo();
               savedCircles.push(circle);
               currentBallCount++;
            } else {
               let circle = new originalCircleGen();
               savedCircles.push(circle);
               currentBallCount++;
               if (currentBallCount > maxBallCount - 20) {
                  firstDraw = false;
               }
            }
         }
         for (let i = 0; i < savedCircles.length - 1; i++) {
            for (let j = i + 1; j < savedCircles.length - 1; j++) {
               let hypot = Math.hypot(
                  Math.abs(savedCircles[i].currentX - savedCircles[j].currentX),
                  Math.abs(savedCircles[i].currentY - savedCircles[j].currentY)
               );
               if (hypot < lineLength) {
                  drawLine(savedCircles[i], savedCircles[j], hypot);
               }
            }
            drawBall(
               savedCircles[i].currentX,
               savedCircles[i].currentY,
               savedCircles[i].radius
            );
            savedCircles[i].currentX += savedCircles[i].velX;
            savedCircles[i].currentY += savedCircles[i].velY;
            if (
               savedCircles[i].currentX > ctx.canvas.width + exitRange ||
               savedCircles[i].currentX < -exitRange ||
               savedCircles[i].currentY < -exitRange
            ) {
               savedCircles.splice(i, 1);
               currentBallCount--;
            }
         }
      }
      setInterval(draw, frameRate);
   });

   return (
      <canvas className="canvas" ref={canvasRef} onClick={handleCanvasClick} />
   );
}

export default DarkConstellation;
