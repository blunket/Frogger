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
    }
}


var level = {
    tileSize: 16,
    gridWidth: 15,
    gridHeight: 10,
    rows: [
        {type: 'road',  row: 2, speed: 1},
        {type: 'road',  row: 3, speed: -1},
        {type: 'river', row: 5, speed: -1},
        {type: 'road',  row: 6, speed: 1},
    ]
}

const game = new Game("game");
game.setupLevel(level);

game.draw();


