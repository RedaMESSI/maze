class Mouv {
    constructor(maze){
        this.maze = maze;
    }

    top (x, y){
        if (maze[x-1][y+1]){
            true 
        }else {
            false 
        }
    }
    bottom (x, y){
        if (maze[x+1][y+1]){
            return true
        }else {
            false
        }
    }
    left (x, y) {
        if(maze[x][y+1]){
            true
        }else {
            false
        }
    }
    right(x, y){
        if(maze[x][y-1]){
            true
        }else{
            false
        }


    }
}