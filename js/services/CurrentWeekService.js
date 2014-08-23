/**
 * Created by matbroughty on 23/08/2014.
 */
// this factory returns a synchronized array of chat messages
bttsApp2.service("currentWeek", ["firebase",
    function($firebase) {
        // create a reference to the Firebase where we will store our data
        var ref = new Firebase("https://fourfold.firebaseio.com/currentweek");

        // create an AngularFire reference to the data
        var sync = $firebase(ref);
        // download the data into a local object
        $scope.currentWeek = sync.$asObject();
    }
]);