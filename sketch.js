 /* make a face (cat?) */
        let night = 80;

        let isNight = false;
        let isMousePressed = false;

        let earWidth = 80;
        let earHeight = 80;
        let earHeightFlat = 40;
        let earHeightAngry = 140;
        let faceHeight = 200;
        let faceWidth = 400;
        let jawHeight = 300;
        let jawWidth = 320;
        let eyeD = 100;
        let eyeDistance = 220;
        let noseD = 5;

        let miau;

        function setup() {
            createCanvas(windowWidth, windowHeight);
            miau = loadSound("./assets/tomcat2-41730.mp3");
        }

        function draw() {
            if (mouseY < night || mouseY > height - night || mouseX < 50 || mouseX > width - night) {
                isNight = true;
            } else {
                isNight = false;
            }
            if (isNight) {
                background("#18285F");
            } else {
                background("#E5BEF5");
            }
            stroke(255);
            strokeWeight(2); 
            // ears
            if (isNight && !isMousePressed) {
                line(
                    mouseX - jawWidth / 2 - earWidth / 2,
                    mouseY - jawHeight / 2 - earHeightFlat,
                    mouseX - jawWidth / 2 - earWidth / 2,
                    mouseY - jawHeight / 2
                );
                line(
                    mouseX - jawWidth / 2 - earWidth / 2,
                    mouseY - jawHeight / 2 - earHeightFlat,
                    mouseX - jawWidth / 2 + earWidth / 2,
                    mouseY - jawHeight / 2
                );
                line(
                    mouseX + jawWidth / 2 + earWidth / 2,
                    mouseY - jawHeight / 2 - earHeightFlat,
                    mouseX + jawWidth / 2 - earWidth / 2,
                    mouseY - jawHeight / 2
                );
                line(
                    mouseX + jawWidth / 2 + earWidth / 2,
                    mouseY - jawHeight / 2 - earHeightFlat,
                    mouseX + jawWidth / 2 + earWidth / 2,
                    mouseY - jawHeight / 2
                );
            } else if (isMousePressed) {
                line(
                    mouseX - jawWidth / 2,
                    mouseY - jawHeight / 2 - earHeightAngry,
                    mouseX - jawWidth / 2 - earWidth / 2,
                    mouseY - jawHeight / 2
                );
                line(
                    mouseX - jawWidth / 2,
                    mouseY - jawHeight / 2 - earHeightAngry,
                    mouseX - jawWidth / 2 + earWidth / 2,
                    mouseY - jawHeight / 2
                );
                line(
                    mouseX + jawWidth / 2,
                    mouseY - jawHeight / 2 - earHeightAngry,
                    mouseX + jawWidth / 2 - earWidth / 2,
                    mouseY - jawHeight / 2
                );
                line(
                    mouseX + jawWidth / 2,
                    mouseY - jawHeight / 2 - earHeightAngry,
                    mouseX + jawWidth / 2 + earWidth / 2,
                    mouseY - jawHeight / 2
                );
            } else {
                line(
                    mouseX - jawWidth / 2,
                    mouseY - jawHeight / 2 - earHeight,
                    mouseX - jawWidth / 2 - earWidth / 2,
                    mouseY - jawHeight / 2
                );
                line(
                    mouseX - jawWidth / 2,
                    mouseY - jawHeight / 2 - earHeight,
                    mouseX - jawWidth / 2 + earWidth / 2,
                    mouseY - jawHeight / 2
                );
                line(
                    mouseX + jawWidth / 2,
                    mouseY - jawHeight / 2 - earHeight,
                    mouseX + jawWidth / 2 - earWidth / 2,
                    mouseY - jawHeight / 2
                );
                line(
                    mouseX + jawWidth / 2,
                    mouseY - jawHeight / 2 - earHeight,
                    mouseX + jawWidth / 2 + earWidth / 2,
                    mouseY - jawHeight / 2
                );
            } // head
            line(
                mouseX - jawWidth / 4,
                mouseY - jawHeight / 2,
                mouseX + jawWidth / 4,
                mouseY - jawHeight / 2
            );
            line(
                mouseX - faceWidth / 2,
                mouseY - faceHeight / 2,
                mouseX - faceWidth / 2,
                mouseY + faceHeight / 2
            );
            line(
                mouseX + faceWidth / 2,
                mouseY - faceHeight / 2,
                mouseX + faceWidth / 2,
                mouseY + faceHeight / 2
            );
            line(
                mouseX - jawWidth / 2,
                mouseY + jawHeight / 2,
                mouseX + jawWidth / 2,
                mouseY + jawHeight / 2
            ); // eyes
            if (isNight) {
                fill(0);
            } else {
                fill(255);
            }
            circle(mouseX - eyeDistance / 2, mouseY + 20, eyeD);
            circle(mouseX + eyeDistance / 2, mouseY + 20, eyeD);
            line(
                mouseX - eyeDistance / 2,
                mouseY + 20 - eyeD / 2,
                mouseX - eyeDistance / 2,
                mouseY + 20 + eyeD / 2
            );
            line(
                mouseX + eyeDistance / 2,
                mouseY + 20 - eyeD / 2,
                mouseX + eyeDistance / 2,
                mouseY + 20 + eyeD / 2
            ); 
            
            // nose
            noFill();
            circle(mouseX - 10, mouseY + 60, noseD);
            circle(mouseX - 20, mouseY + 60, noseD); // mouth
            noFill();
            if (isNight && !isMousePressed) {
                arc(mouseX - 10, mouseY + 80, 60, 60, 0, PI);
            } else {
                arc(mouseX - 10, mouseY + 80, 30, 10, PI, TWO_PI);
            } 
            
            // angry
            if (isMousePressed) {
                line(mouseX - 20, mouseY - 10, mouseX - 15, mouseY + 10);
                line(mouseX - 5, mouseY - 10, mouseX - 10, mouseY + 10);
            } 

        }
        function mousePressed() {
            isMousePressed=true;
            miau.play();
        }
        function mouseReleased() {
            isMousePressed=false;
            miau.stop();
        }
        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
        }