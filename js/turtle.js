class Turtle extends GameObject {

    constructor(x, y) {
        super(x, y);
    }

    moveUp() {
        this.changeY(-1);
    }

    moveDown() {
        this.changeY(1);
    }

    moveLeft() {
        this.changeX(-1);
    }

    moveRight() {
        this.changeX(1);
    }

    draw(game) {
        game.context.fillStyle = "#d6a";

        // body
        let r = Math.round(game.tileSize * .25),
            x = this.x * game.tileSize + (game.tileSize / 2),
            y = this.y * game.tileSize + (game.tileSize / 2);
        game.context.beginPath();
        game.context.arc(x, y, r, 0, 2*Math.PI);
        game.context.fill();

        // head
        r = Math.round(game.tileSize * .15);
        y = this.y * game.tileSize + (game.tileSize / 6);
        game.context.beginPath();
        game.context.arc(x, y, r, 0, 2*Math.PI);
        game.context.fill();

        // arms
        r = Math.round(game.tileSize * .1);
        x = this.x * game.tileSize + (game.tileSize / 4);
        y = this.y * game.tileSize + (game.tileSize / 4);
        game.context.beginPath();
        game.context.arc(x, y, r, 0, 2*Math.PI);
        game.context.fill();

        // arms
        x = this.x * game.tileSize + (game.tileSize * .75);
        y = this.y * game.tileSize + (game.tileSize / 4);
        game.context.beginPath();
        game.context.arc(x, y, r, 0, 2*Math.PI);
        game.context.fill();

        // legs
        x = this.x * game.tileSize + (game.tileSize * .75);
        y = this.y * game.tileSize + (game.tileSize * .75);
        game.context.beginPath();
        game.context.arc(x, y, r, 0, 2*Math.PI);
        game.context.fill();

        // legs
        x = this.x * game.tileSize + (game.tileSize / 4);
        y = this.y * game.tileSize + (game.tileSize * .75);
        game.context.beginPath();
        game.context.arc(x, y, r, 0, 2*Math.PI);
        game.context.fill();
    }
}