function dirReduc(arr) {
      var xCord = 0;
      var yCord = 0;
      let newArr = [];

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


      while (xCord > 0) { newArr.push("East"); xCord--; };
      while (xCord < 0) { newArr.push("West"); xCord++; };
      while (yCord > 0) { newArr.push("North"); yCord--; };
      while (yCord < 0) { newArr.push("South"); yCord++; };

      console.log(newArr)
      return newArr.length()>0?newArr:'Better Stay Put'
}



