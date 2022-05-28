const canvas = document.querySelector('canvas');
// a 2d canvas rendering context 
const c = canvas.getContext('2d');

canvas.width = innerWidth; // innerWidth comes from the window object from the browser
canvas.height = innerHeight;

class Boudary {
    static width = 40;
    static height = 40;
    constructor({ position }) {
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        c.fillStyle = 'blue';
        c.fillRect(
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }
}

const map = [
    ['-', '-', '-', '-', '-', '-'],
    ['-', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', '-'],
    ['-', '-', '-', '-', '-', '-'],
];

const boundaries = [];

map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        switch (symbol) {
            case '-':
                boundaries.push(
                    new Boudary({
                        position: {
                            x: Boudary.width * j,
                            y: Boudary.height * i
                        }
                    })
                )
                break;
        }
    });
});

boundaries.forEach(boudary => {
    boudary.draw();
});