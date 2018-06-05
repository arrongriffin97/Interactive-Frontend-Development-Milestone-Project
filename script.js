var random = [];
var i;
var j=0;
var count = 1;
var on;
var off;
var x;
var clicked = [];
var litID = [];
var lit;


function change1() {

    //set interval length
    if (count <= 10) {
        off = 400;
        on = 800;

    }

    else {
        off = 300;
        on = 600;
    }

           x = setInterval(function () {

            if (random[j] == 1) {

                lit = 'lit_green';
                $('#one').addClass(lit);
                litID.push(1);


                setTimeout(function () {

                    $('#one').removeClass(lit);

                }, off);

            }

            else if (random[j] == 2) {

                lit = 'lit_yellow';
                $('#two').addClass(lit);
                litID.push(2);


                setTimeout(function () {

                    $('#two').removeClass(lit);

                }, off);

            }

            else if (random[j] == 3) {

                lit = 'lit_blue';
                $('#three').addClass(lit);
                litID.push(3);


                setTimeout(function () {

                    $('#three').removeClass(lit);

                }, off);

            }

            else {

                lit = 'lit_red';
                $('#four').addClass(lit);
                litID.push(4);


                setTimeout(function () {

                    $('#four').removeClass(lit);

                }, off);
            }

             j++;

               if (j>=count) {
                   clearInterval(x);
               }

        }, on);

}


function checking() {

    if (litID.length == clicked.length) {

            if (litID.join() == clicked.join()) {

                    if (count == 20) {

                        setTimeout(function () {
                            alert("You win!");
                            location.reload();
                        }, 1000);
                    }

                    else {
                        setTimeout(function () {
                            $('#count').text(count + 1);
                            count++;
                            litID = [];
                            clicked = [];
                            j = 0;
                            change1();

                        }, 1000);
                    }
            }


                else {
                    setTimeout(function () {
                        $('#count').text('!!');

                        litID = [];
                        clicked = [];
                        j = 0;
                        change1();
                    }, 1000);
                }
            }
}


//to switch on
$('#on').on('click', function () {
    $('#count').text('--');

    for (i=0; i<20; i++) {
    random[i] = Math.ceil((Math.random() * 4));
    }

    //to start the game
    $('#start').on('click', function () {

        $('#count').text(count);

        change1();

    });

    //user to play
    $('#one').on('click', function () {

        $('#one').addClass('green');

        clicked.push(1);

        setTimeout(function () {
            $('#one').removeClass('green');

        }, 300);

        checking();

    });

    $('#two').on('click', function () {

        $('#two').addClass('yellow');

        clicked.push(2);

        setTimeout(function () {
            $('#two').removeClass('yellow');

        }, 300);

        checking();
    });

    $('#three').on('click', function () {

        $('#three').addClass('blue');

        clicked.push(3);

        setTimeout(function () {
            $('#three').removeClass('blue');

        }, 300);

        checking();
    });

    $('#four').on('click', function () {

        $('#four').addClass('red');

        clicked.push(4);

        setTimeout(function () {
            $('#four').removeClass('red');

        }, 300);

        checking();
    });

});

//to switch off
$('#off').on('click', function () {
    location.reload();
});

$('input[type=checkbox]').click(); 

