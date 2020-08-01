module.exports = {

    getFollows: function(people,users) {
        const allFollows = new Set();
        people.forEach((person) => {
            users[person].Following.forEach((follow) => {
                allFollows.add(follow);
            });
        });
        return allFollows;
    },

    intersects: function(setA, setB) {
        if (setA.size > setB.size) {
          [setA, setB] = [setB, setA];
        }
      
        for (var elem of setA) {
          if (setB.has(elem)) {
            return true;
          }
        }
        return false;
    },

    calculateDistance: function(personA,personB,users) {
        if (personA === personB) {
          return 0;
        }

        let followsA = new Set([personA]);
        let followsB = new Set([personB]);
        let depth = 1;

        while (followsA.size > 0 && followsB.size > 0) {
            followsA = this.getFollows(followsA,users);
            if (this.intersects(followsA, followsB)) {
                return depth;
            }
            depth += 1;

            // followsB = getFollows(followsB,users);
            // console.log(followsB);
            // if (intersects(followsA, followsB)) {
            //   return depth;
            // }            
            // depth += 1;

        }
        return -1;
      }   
  };