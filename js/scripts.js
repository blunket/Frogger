class Game {

    constructor(canvasId, level) {
        console.log("Creating new Game");
        this.canvas     = document.getElementById(canvasId);
        this.context    = this.canvas.getContext("2d");
        this.tileSize   = 40;
        this.gridWidth  = 14;
        this.gridHeight = 8;

        this.canvas.width = this.tileSize * this.gridWidth;
        this.canvas.height = this.tileSize * this.gridHeight;

        this.rows = [];
        this.objs = [];

        if (typeof level !== 'undefined') {
            this.setupLevel(level);
        }

    }

    setupLevel(level) {
        let game = this;

        if (typeof level == 'object') {
            game.tileSize   = level.tileSize;
            game.gridWidth  = level.gridWidth;
            game.gridHeight = level.gridHeight;

            game.canvas.width = game.tileSize * game.gridWidth;
            game.canvas.height = game.tileSize * game.gridHeight;

            game.rows = [];
            game.objs = [];

            level.rows.forEach(function(row) {
                if (row.type == 'road') {
                    game.addRoad(row.row, row.speed);
                } else if (row.type == 'river') {
                    game.addRiver(row.row, row.speed);
                }
            });

            let startX = Math.round(game.gridWidth / 2),
                startY = Math.round(game.gridHeight - 1);

            game.turtle = new Turtle(startX, startY);
        }
    }

    rowAt(y) {
        console.log("- Checking Row at y: " + y);
        let rowexists = false;
        this.rows.forEach(function(row) {
            if (row.y == y) {
                rowexists = row;
            }
        });
        console.log(rowexists);
        return rowexists;
    }

    addRoad(y, speed) {
        console.log("- Adding Road");
        if (this.rowAt(y) !== false) {
            throw new Error("A row already exists at y: " + y);
            return false;
        }
        let road = new Road(y, speed);
        this.rows.push(road);
        console.log(road);
        return road;
    }

    addRiver(y, speed) {
        console.log("- Adding River");
        if (this.rowAt(y) !== false) {
            throw new Error("A row already exists at y: " + y);
            return false;
        }
        let river = new River(y, speed);
        this.rows.push(river);
        console.log(river);
        return river;
    }

    addObj(x, y) {
        console.log("- Adding Object");
        let obj = new GameObject(x, y);
        this.objs.push(obj);
        console.log(obj);
        return obj;
    }

    clear() {
        console.log("- Clearing Canvas");
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawRows() {
        console.log("- Drawing Rows");
        let game = this;
        game.rows.forEach(function(row) {
            console.log(row);
            row.draw(game);
        })
    }

    drawObjs() {
        console.log("- Drawing Objects");
        let game = this;
        game.objs.forEach(function(obj) {
            console.log(obj);
            obj.draw(game);
        });
    }

    drawTurtle() {
        console.log("- Drawing Turtle");
        this.turtle.draw(game);
    }

    step() {
        let game = this;
        game.rows.forEach(function(row) {
            row.step(game);
        });
    }

    draw() {
        let game = this;
        game.clear();
        game.drawRows();
        game.drawObjs();
        game.drawTurtle();
    }
}


var level = {
    tileSize: 30,
    gridWidth: 15,
    gridHeight: 10,
    rows: [
        {row: 2, type: 'road',  speed: 1},
        {row: 3, type: 'road',  speed: -1},
        {row: 5, type: 'river', speed: -1},
        {row: 6, type: 'road',  speed: 1},
    ]
}

const game = new Game("game");
game.setupLevel(level);

game.draw();


