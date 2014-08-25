/**
 * Created by matbroughty on 23/08/2014.
 */
bttsApp2.controller("MainController", ["$scope", "$firebase",
    function ($scope, $firebase) {


        $scope.alerts = [];

        $scope.selection = {};

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };


        $scope.submitChoices = function () {
            $scope.emailqueue = angular.copy($scope.selection);
            $scope.alerts.push({ type: 'success', msg: 'Well done! You successfully submitted your choices.'});

            var ref = new Firebase("https://fourfold.firebaseio.com/week/" + $scope.currentweek.week + "/selections");
            var sync = $firebase(ref);
            $scope.selections = sync.$asArray();

            $scope.selection.week = $scope.currentweek.week;
            var selectionObj = angular.copy($scope.selection);

            if(getByValue($scope.selections, selectionObj.name) === null){
                $scope.selections.$save(selectionObj);
            }else{
                $scope.selections.$add(selectionObj);
            }



            $scope.selection= {};

        }

        this.init = function () {

            this.toggle = false;


            var ref = new Firebase("https://fourfold.firebaseio.com/currentweek");
            // create an AngularFire reference to the data
            var sync = $firebase(ref);

            // download the data into a local object
            var syncObject = sync.$asObject();
            // synchronize the object with a three-way data binding
            // click on `index.html` above to see it used in the DOM!
            syncObject.$bindTo($scope, "currentweek");




            var usersRef = new Firebase("https://fourfold.firebaseio.com/users");
            // create an AngularFire reference to the data
            var syncUsers = $firebase(usersRef);

            // download the data into a local object
            var syncUsersObject = syncUsers.$asObject();
            // synchronize the object with a three-way data binding
            // click on `index.html` above to see it used in the DOM!
            syncUsersObject.$bindTo(this, "users");



            // this is cleared down by zapper
            var emailQueueRef = new Firebase("https://fourfold.firebaseio.com/emailqueue");
            // create an AngularFire reference to the data
            var syncEmailQueue = $firebase(emailQueueRef);

            // download the data into a local object
            var syncEmailQueueObject = syncEmailQueue.$asObject();
            // synchronize the object with a three-way data binding
            // click on `index.html` above to see it used in the DOM!
            syncEmailQueueObject.$bindTo($scope, "emailqueue");


        }

        function getByValue(arr, value) {

            for (var i=0, iLen=arr.length; i<iLen; i++) {

                if (arr[i].name === value) return arr[i];
            }
        }


    }
]);





