let modal = $('.ReactModalPortal');
let BtnModalView = $('.btn_check_modal_view');
let BtnModalClose = $('.btn_modal_close');
$(modal).hide();

//   전체동의 모달 열기
$(BtnModalView).on('click', function () {
    $(modal).show();
});

//   전체동의 모달 닫기
$(BtnModalClose).on('click', function () {
    $(modal).hide();
});

/* 비밀번호 확인*/
let firstsvg = $('.firstsvg');
let secondsvg = $('.secondsvg');
let checkfirstsvg = $('.checkfirstsvg');
let checksecondsvg = $('.checksecondsvg');

$(secondsvg).hide();
$(checksecondsvg).hide();

$(firstsvg).on('click', function () {
    $(firstsvg).hide();
    $(secondsvg).show();
    $('#password').prop("type", "text");

});

$(secondsvg).on('click', function () {
    $(firstsvg).show();
    $(secondsvg).hide();
    $('#password').prop("type", "password");
});

$(checkfirstsvg).on('click', function () {
    $(checkfirstsvg).hide();
    $(checksecondsvg).show();
    $('#passwordcheck').prop("type", "text");
});

$(checksecondsvg).on('click', function () {
    $(checkfirstsvg).show();
    $(checksecondsvg).hide();
    $('#passwordcheck').prop("type", "password");
});

// 유효성 검사
var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);

$("#password").on("keyup", function () {
    if ($("#password").val() == "") {
        $("#ppassword").html("비밀번호를 입력해주세요.")
        $("#password").css("borderColor", "#f66")
        $("#password").focus();
        return false;

    } else if ($("#password").val().length < 10 || $("#password").val().length > 20) {
        $("#ppassword").html("10자리 이상 20자리 이하로 입력해주세요.")
        $("#password").css("borderColor", "#f66")
        $("#password").focus();
        return false;

    } else {
        $("#ppassword").html("")
        $("#password").css("borderColor", "rgba(0, 0, 0, 0.08)")
        return false;
    }
});
$("#email").on("keyup", function () {
    if ($("#email").val() == "") {
        $("#pemail").html("이메일을 입력해주세요.")
        $("#email").css("borderColor", "red")
        $("#email").focus();
        $("#checkEmail").css("opacity", ".45")
        $('#checkEmail').css("pointer-events", "none")
        return false;

    } else if (!getMail.test($("#email").val())) {
        $("#pemail").html("이메일에 형식에 맞게 입력해주세요.")
        $("#email").css("borderColor", "#f66")
        $("#pemail").css("Color", "#f66")
        $("#checkEmail").css("opacity", ".45")
        $('#checkEmail').css("pointer-events", "none")
        return false;

    } else {
        $("#pemail").html("")
        $("#email").css("borderColor", "rgba(0, 0, 0, 0.08)")
        $('#checkEmail').css("opacity", "1")
        $('#checkEmail').css("pointer-events", "auto")
        return false;
    }
});

$("#name").on("keyup", function () {
    if ($("#name").val() == "") {
        $("#pname").html("이름을 입력해주세요.")
        $("#name").css("borderColor", "red")
        $("#name").focus();
        return false;

    } else {
        $("#pname").html("")
        $("#name").css("borderColor", "rgba(0, 0, 0, 0.08)")
        return false;
    }
});

$("#passwordcheck").on("keyup", function () {
    if ($("#passwordcheck").val() == "") {
        $("#ppasswordcheck").html("비밀번호를 입력해주세요.")
        $("#passwordcheck").css("borderColor", "#f66")
        $("#passwordcheck").focus();
        return false;

    } else if ($("#passwordcheck").val() != $("#password").val()) {
        $("#ppasswordcheck").html("비밀번호가 다릅니다.")
        $("#passwordcheck").css("borderColor", "#f66")
        $("#passwordcheck").focus();
        return false;

    } else {
        $("#ppasswordcheck").html("")
        $("#passwordcheck").css("borderColor", "rgba(0, 0, 0, 0.08)")
        return false;
    }
});

