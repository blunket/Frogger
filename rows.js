class Row {

    constructor(y, speed) {
        this.y = y;

        if (typeof speed === 'undefined') {
            this.speed = 0;
        } else {
            this.speed = speed;
        }
    }

    step(game) {
        let thisrow = this;
        game.objs.forEach(function(obj) {
            if (obj.y == thisrow.y) {
                obj.changeX(thisrow.speed);
            }
        });
    }
}


class Road extends Row {
    constructor(y, speed) {
        super(y, speed);
    }

    draw(game) {
        let w = game.gridWidth * game.tileSize,
            h = game.tileSize,
            x = 0,
            y = this.y * game.tileSize;

        // gray bg
        game.context.fillStyle = "#888";
        game.context.fillRect(x, y, w, h);

        // stripes
        game.context.fillStyle = "#fff";
        for (let i = 0; i <= game.gridWidth; i++) {
            let w = Math.round(game.tileSize / 2), // 1/2 tile width
                h = Math.round(game.tileSize / 8), // 1/8th tile height
                x = i * game.tileSize - ((game.tileSize - w) / 2), // center x
                y = this.y * game.tileSize + ((game.tileSize - h) / 2); // center y

            game.context.fillRect(x, y, w, h);
        }
    }

}


class River extends Row {
    constructor(y, speed) {
        super(y, speed);
    }

    draw(game) {
        // blue bg
        game.context.fillStyle = "#5af";
        game.context.fillRect(0, this.y * game.tileSize, game.gridWidth * game.tileSize, game.tileSize);

        // waves
    }

}