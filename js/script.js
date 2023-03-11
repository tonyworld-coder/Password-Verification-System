$("#form").on('submit', (e) => {
    e.preventDefault();

    let name = $('#name').val();
    let email = $('#email').val();
    let pass = $('#pass').val();
    let cPass = $('#cPass').val();

    let emptyName = 'Please put your name!';
    let emptyEmail = 'Please put your Email Address!';
    let emptyPass = 'Please put your Password!';
    let emptyCPass = 'Please confirm your password!';
    let errMatchPassMsg = 'Your passwords does not match!'
    let pppmsg = "your password should be atleast 8 digits, with capital letters, small letters, numbers, and symbols." 


    if (name == "") {
        $('#errNameMsg').html(emptyName);
    } else {
        $('#errNameMsg').html("");
    }

    if (email == "") {
        $('#errEmailMsg').html(emptyEmail);
    }  else {
        $('#errEmailMsg').html("");
    }

    if (pass == "") {
        $('#errPassMsg').html(emptyPass);
    } else {
        $('#errPassMsg').html("");
    }

    if (cPass == "") {
        $('#errCPassMsg').html(emptyCPass);
    } else {
        $('#errCPassMsg').html("");
    }

    if (pass != cPass) {
        $('#errMatchPassMsg').html(errMatchPassMsg);      
    } else {
        $('#errMatchPassMsg').html("");
    }

    if (pass != 8 ) {
        $('.pppmsg').html(pppmsg);
    } else {
        $('.pppmsg').html("");
    }



    if (name != "" && email != "" && pass != "" && cPass != "" && pass == cPass && pass == 8) {
        $("#form").html('Form Submitted successfully!');
    }

    // document.location.href = "../index.html";

});


