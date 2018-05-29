  var random = [];
  var litID = [];
  var lit;
  var clicked = [];
  var count = 1;
  var start;
  var finish;


      if (count <= 10) {
          off = 200;
          on = 100;

      }

      else {
          off = 100;
          on = 200;
      }

              if (random[j] == 1) {

                lit = 'green_lit';

                  setTimeout(function () {

                      $('#green').removeClass(lit);

                  }, off);

              }

              else if (random[j] == 2) {

                lit = 'yellow_lit';

                  setTimeout(function () {

                      $('#yellow').removeClass(lit);

                  }, off);

              }

              else if (random[j] == 3) {

                lit = 'blue_lit';

                  setTimeout(function () {

                      $('#blue').removeClass(lit);

                  }, off);

              }

              else {

                lit = 'red_lit';

                 setTimeout(function () {

                      $('#red').removeClass(lit);

                  }, off);
            }

