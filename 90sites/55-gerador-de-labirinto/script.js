var cols, rows; //number of cols and rows of the grid
    var w = 20; //width of each cell
    var grid = []; //array of all cells
    var current; //current cell;

    var stack = []; //stack of cells on path -> used if there's no way to go on -> goes back to a cell where this is possible


    function setup() {
      createCanvas(600, 600);
      cols = floor(width/w);
      rows = floor(height/w);

      //frameRate(5);

      for(var j = 0; j < rows; j++){
        for(var i = 0; i < cols; i++){
          var cell = new Cell(i,j);
          grid.push(cell);
        }
      }

      current = grid[0]; //algorithm starts at cell with index 0
    }

    function draw() {

      background(51);

      for(var i = 0; i < grid.length; i++){
        grid[i].show();
      }

      current.visited = true; //current cell is visited
      current.highlight();

      //STEP 1
      var next = current.checkNeighbors();
      if(next){
        next.visited = true;


        //STEP 2
        stack.push(current);

        //STEP 3
        removeWalls(current, next); //removes the wall between current cell and next cell


        //STEP 4
        current = next;
      } else if (stack.length > 0){ //if function returns undefined (no free neighbors) -> the current cell is on cell beyond
        current = stack.pop(); 
      }

    }

    function index(i,j){ //returns the index of the cell in an 1-dim array
      if(i < 0 || j < 0 || i > cols-1 || j > rows-1){
        return -1;
      }
      return i + j * cols;
    }

    // cell obj -> i = col ; j = row
    function Cell(i,j) {
      this.i = i; //col of cell
      this.j = j; //row of cell
      this.walls = [true, true, true, true];  //top right bottom left
      this.visited = false; //if cell is visited

      this.checkNeighbors = function() { //checks if the cell has neighbors which aren't visited
        
        var neighbors = [];

        //if array would be 2-dimesional: var right = grid[i][j-1];
        var top = grid[index(i,j-1)];
        var right = grid[index(i+1, j)];
        var bottom = grid[index(i, j+1)];
        var left = grid[index(i-1,j)];

        if(top && !top.visited) { //top -> if top is really an object (otherwise index(i,j) would return -1 and the array[-1] is not an object)
          neighbors.push(top);
        }
        if(right && !right.visited) {
          neighbors.push(right);
        }
        if(bottom && !bottom.visited) {
          neighbors.push(bottom);
        }
        if(left && !left.visited) {
          neighbors.push(left);
        }

        if(neighbors.length > 0){
          var r = floor(random(0, neighbors.length));
          return neighbors[r];
        } else {
          return undefined;
        }

      }

      this.show = function() { //displays the cell
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        if(this.walls[0]) {
          line(x,    y,    x+w,   y);   //top
        }
        if(this.walls[1]){
          line(x+w,  y,    x+w,   y+w); //right
        }
        if(this.walls[2]){
          line(x+w,  y+w,  x+w,   y+w); //bottom
        }
        if(this.walls[3]){
          line(x,    y+w,  x,     y);   //left
        }

        if(this.visited) {
          noStroke();
          fill(255,0,255,100);
          rect(x,y,w,w);
        }
      }

      this.highlight = function() {
        var x = this.i*w;
        var y = this.j*w;
        noStroke();
        fill(0,0,255,100);
        rect(x,y,w,w);
      }
    }

    function removeWalls(a,b) { //removes walls between cell a and cell b

      console.log("remove");

      var x = a.i - b.i;
      if(x === 1){
        a.walls[3] = false;
        b.walls[1] = false;
      } else if(x === -1){
        a.walls[1] = false;
        b.walls[3] = false;
      } 

      var y = a.j - b.j;
      if(y === 1){
        a.walls[0] = false;
        b.walls[2] = false;
      } else if(y === -1){
        a.walls[2] = false;
        b.walls[0] = false;
      }

    }