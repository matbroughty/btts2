/**
 * Created by matbroughty on 23/08/2014.
 */
bttsApp2.controller("MainController", ["$scope", "$firebase",
    function ($scope, $firebase) {


        this.init = function () {

            var ref = new Firebase("https://fourfold.firebaseio.com/currentweek");
            // create an AngularFire reference to the data
            var sync = $firebase(ref);

            // download the data into a local object
            var syncObject = sync.$asObject();
            // synchronize the object with a three-way data binding
            // click on `index.html` above to see it used in the DOM!
            syncObject.$bindTo(this, "currentweek");


//            if(typeof $scope.currentweek === "undefined"){
//                $scope.currentweek = {week:1, startDate: new Date("August 22, 2014 11:13:00"), endDate:new Date("August 25, 2014 11:13:00")};
//                this.currentweek = {week:1, startDate: new Date("August 22, 2014 11:13:00"), endDate:new Date("August 25, 2014 11:13:00")};
//            }

        }

    }
]);





