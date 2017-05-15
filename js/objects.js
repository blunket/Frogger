class GameObject {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    changeX(amt) {
        this.x += amt;
    }

    changeY(amt) {
        this.y += amt;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    draw(game) {
        let w = h = game.tileSize,
            x = this.x * game.tileSize,
            y = this.y * game.tileSize;

        game.context.fillStyle = "#ff0";
        game.context.fillRect(x, y, w, h);
    }
}