<doctype! html>
<html>
  <head>
    <script src='lib/angular.js'></script>
    <script src='lib/angular-route.js'></script>
    <script src='app.js'></script>
  </head>
  <body>
    <div ng-app='app.js'>
      <nav>
        <a href="#/">Homepage</a>
      </nav>
      <div ng-view></div>
    </div>
  </body>