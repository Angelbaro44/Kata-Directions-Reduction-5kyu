function dirReduc(arr) {
      var xCord = 0; // -West <-+-> +East
      var yCord = 0;// -South <-+-> +North
      let newArr = [];

// We will calc the best path in the x and y axis EX:-2,1 = West, West, North
//      +North
//         ↑
// -West <-+-> +East
//         ↓
//      -South

      arr.map(x => {
            switch (x.toLowerCase()) {
                  case 'north':
                        yCord++;
                        break;

                  case 'south':
                        yCord--;
                        break;

                  case 'east':
                        xCord++;
                        break;

                  case 'west':
                        xCord--;
                        break;
            }
      });

//Next we construct newArr, first x then y
      while (xCord > 0) { newArr.push("East"); xCord--; };// +x
      while (xCord < 0) { newArr.push("West"); xCord++; };// -x
      while (yCord > 0) { newArr.push("North"); yCord--; };// +y
      while (yCord < 0) { newArr.push("South"); yCord++; };// -y

      console.log(newArr.length>0?newArr:'Better Stay Put')
      return newArr.length>0?newArr:'Better Stay Put'
}



// Test Case

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])// Expected Result: ["WEST"]
dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])// Expected Result: Better Stay Put
dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])// Expected Result: Better Stay Put
dirReduc(["NORTH", "EAST", "SOUTH", "EAST", "NORTH", "EAST",])// Expected Result: [ 'East', 'East', 'East', 'North' ]
dirReduc(["NORTH", "SOUTH", "SOUTH", "WEST", "SOUTH", "WEST"])// Expected Result: [ 'West', 'West', 'South', 'South' ]
dirReduc(["NORTH", "EAST", "SOUTH", "EAST", "NORTH", "EAST", "WEST", "EAST", "WEST", "NORTH", "NORTH", "NORTH"])// Expected Result: [ 'East', 'East', 'North', 'North', 'North', 'North' ]
