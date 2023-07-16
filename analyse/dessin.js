const canvas = document.querySelector('.monCanevas');
            const width = 100;
            const height = 100;

            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'pink';
            ctx.fillRect(0, 0, width, height);



            function degToRad(degrees) {
              return degrees * Math.PI / 180;
            }

            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.lineTo(150, 50);
            const triHeight = 50 * Math.tan(degToRad(60));
            ctx.lineTo(100, 50 + triHeight);
            ctx.lineTo(50, 50);
            ctx.fill();