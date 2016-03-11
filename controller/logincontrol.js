/**
 * Created by guangshuozang on 3/10/16.
 */

var CREDENTIALS = {
    appId: 36862,
    authKey: 'bRKqvP2v6Zgh5ff',
    authSecret: '3mHcF7VZbxe4Sbc'
};

QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret);

$(document).ready(function(){

    $("p").click(function(){
        $(this).hide();
    });

    console.log("running!");

    QB.createSession(function(err,result){
        console.log('Session create callback', err, result);
    });

    $('#sign_up').on('click', function() {
        console.log("start of method");
        var login = $('#usr_sgn_p_lgn').val();
        var password = $('#usr_sgn_p_pwd').val();
        var params = { 'login': login, 'password': password};
        QB.users.create(params, function(err, user){
            if (user) {
                $('#output_place').val(JSON.stringify(user));
            } else  {
                $('#output_place').val(JSON.stringify(err));
            }

            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
        console.log("end of method");
    });

    // Login user
    //
    $('#sign_in').on('click', function() {
        var login = $('#loginname').val();
        var password = $('#loginpwd').val();

        var params = { 'login': login, 'password': password};

        QB.login(params, function(err, user){
            if (user) {
                $('#output_place').val(JSON.stringify(user));
            } else  {
                $('#output_place').val(JSON.stringify(err));
            }


            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    });

    $('#get_user').on('click', function() {
        var params = { page: '1', per_page: '100'};
        QB.users.listUsers(params, function(err, result){
            if (result) {
                $('#output_place').val(JSON.stringify(result));
            } else  {
                $('#output_place').val(JSON.stringify(err));
            }

            console.log("current_page: " + result.current_page);
            console.log("per_page: " + result.per_page);
            console.log("total_entries: " + result.total_entries);
            console.log("count: " + result.items.length);


            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    });
});
