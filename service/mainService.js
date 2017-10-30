       mainApp.service('UserService', function() {
           //to create unique user id
           var uid = 2;

           //users array to hold list of all users
           var users = [{
                   id: 0,
                   'name': 'Sabeer',
                   'date': '05-09-1984',
                   'singleSelect': 'Invisibility'
               }, {
                   id: 1,
                   'name': 'Jack',
                   'date': '04-29-1971',
                   'singleSelect': 'Time Travel'
               }, {
                   id: 2,
                   'name': 'Helton',
                   'date': '07-15-1975',
                   'singleSelect': 'Invisibility'
               }

           ];

           //save method create a new user if not already exists
           //else update the existing object
           this.save = function(user) {
               // $scope.successMassage = "Successfully Added";
               if (user.id == null) {
                   //if this is new user, add it in users array
                   user.id = uid++;
                   users.push(user);

               } else {
                   //for existing user, find this user using id
                   //and update it.
                   for (i in users) {
                       if (users[i].id == user.id) {
                           users[i] = user;
                       }
                   }
               }

           }

           //simply search users list for given id
           //and returns the user object if found
           this.get = function(id) {
               for (i in users) {
                   if (users[i].id == id) {
                       return users[i];
                   }
               }

           }

           //iterate through users list and delete 
           //user if found
           this.delete = function(id) {
               for (i in users) {
                   if (users[i].id == id) {
                       users.splice(i, 1);
                   }
               }
           }

           //simply returns the users list
           this.list = function() {
               return users;
           }
       });