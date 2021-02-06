# Kata-Directions-Reduction-5kyu

Directions
-
     Once upon a time, on a way through the old wild mountainous west,…
     … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are
     opposite, "WEST" and "EAST" too.

     Going to one direction and coming back the opposite direction right away is a needless effort.
     Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, 
     otherwise you might die of thirst!

    How I crossed a mountainous desert the smart way.
    The directions given to the man are, for example, the following (depending on the language):

    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
    or
    { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
    or
    [North, South, South, East, West, North, West]
    You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, 
    better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

    ["WEST"]
    or
    { "WEST" }
    or
    [West]
    Other examples:










Test Cases:
-
     a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
     Test.assertSimilar(dirReduc(a), ["WEST"])
     b=["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]
     Test.assertSimilar(dirReduc(b), [])
     c = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"]
     Test.assertSimilar(dirReduc(c), ["NORTH"])
     u = ["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]
     Test.assertSimilar(dirReduc(u), ["EAST", "NORTH"])
     v = ["NORTH", "EAST", "NORTH", "EAST", "WEST", "WEST", "EAST", "EAST", "WEST", "SOUTH"]
     Test.assertSimilar(dirReduc(v), ["NORTH", "EAST"])
     u=["NORTH", "WEST", "SOUTH", "EAST"]
     Test.assertSimilar(dirReduc(u), ["NORTH", "WEST", "SOUTH", "EAST"])


     Test.describe( "More tests : . . . ", function(){
       var rr = [["NORTH","EAST"],["EAST","SOUTH"],["SOUTH","WEST"],["WEST","NORTH"],["NORTH","NORTH","NORTH"]]

       Test.randomize(rr).forEach(function(res){
           var aa = ["NORTH","SOUTH"], bb = ["EAST","WEST"];
           var rnd = function(){ return ~~(Math.random()*2)};
           var u = res.slice(0)

           for( var x=0, z=2+rnd(); x<z; x++ ){
             var a = rnd(), b = rnd();
             if( x%2 ){
               u.push(aa[a]);u.push(aa[(a+1)%2]);
               u.unshift(bb[b]);u.unshift(bb[(b+1)%2]);
             }else{
               u.push(bb[b]);u.push(bb[(b+1)%2]);
               u.unshift(aa[a]);u.unshift(aa[(a+1)%2]);
             }
           }

           console.log(Test.inspect(u));
           Test.assertSimilar(dirReduc(u),res);
         });

     })
