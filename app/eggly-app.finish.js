angular.module('Eggly', [

])
  .controller('MainCtrl', function ($scope) {
    var main = this;
      main.categories = [
          {"id": 0, "name": "Development"},
          {"id": 1, "name": "Design"},
          {"id": 2, "name": "Exercise"},
          {"id": 3, "name": "Humor"}
      ];

      main.bookmarks = [
          {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
          {"id": 1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development" },
          {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
          {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
          {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
          {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
          {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
          {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
          {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
      ];

      main.isCreating = false;
      main.isEditing = false;
      main.currentCategory = null;

      function isCurrentCategory(category) {
          return main.currentCategory !== null && category.name === main.currentCategory.name;
      }

      function setCurrentCategory(category) {
          main.currentCategory = category;

          cancelCreating();
          cancelEditing();
      }

      $scope.isCurrentCategory = isCurrentCategory;
      $scope.setCurrentCategory = setCurrentCategory;

      //-------------------------------------------------------------------------------------------------
      // CREATING AND EDITING STATES
      //-------------------------------------------------------------------------------------------------
      function shouldShowCreating() {
          return main.currentCategory && !main.isEditing;
      }

      function startCreating() {
          main.isCreating = true;
          main.isEditing = false;
      }

      function cancelCreating() {
          main.isCreating = false;
      }

      $scope.shouldShowCreating = shouldShowCreating;
      $scope.startCreating = startCreating;
      $scope.cancelCreating = cancelCreating;

      function shouldShowEditing() {
          return main.isEditing && !main.isCreating;
      }

      function startEditing() {
          main.isCreating = false;
          main.isEditing = true;
      }

      function cancelEditing() {
          main.isEditing = false;
          main.editedBookmark = null;
      }

      $scope.startEditing = startEditing;
      $scope.cancelEditing = cancelEditing;
      $scope.shouldShowEditing = shouldShowEditing;
  })
;