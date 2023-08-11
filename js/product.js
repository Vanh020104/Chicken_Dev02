$(document).ready(function() {
    $('.ttc1').click(function() {
        $(this).parent().children('.ttct1').slideToggle();
    });
});
$(document).ready(function() {
    $('.ttc2').click(function() {
        $(this).parent().children('.ttct2').slideToggle();
    });
});
$(document).ready(function() {
    $('.ttc3').click(function() {
        $(this).parent().children('.ttct3').slideToggle();
    });
});
$(document).ready(function() {
    $('.ttc4').click(function() {
        $(this).parent().children('.ttct4').slideToggle();
    });
});
$(document).ready(function() {
    $('.ttc5').click(function() {
        $(this).parent().children('.ttct5').slideToggle();
    });
});
function send() {
    var arr = document.getElementsByTagName('input');
    var qty = arr[3].value;
    if(qty == "") {
        alert("Please enter quantity");
        return;
    }
}  
var luaChonDaChon1 = 0;

function chonCai1(luaChon) {
    // Đặt lại kiểu dáng của các nút bấm
    if (luaChonDaChon1 !== 0) {
        var nutDaChon1 = document.getElementById("chonCai1" + luaChonDaChon1);
        nutDaChon1.classList.remove("button-selected");
    }

    // Lấy nội dung của lựa chọn đã chọn
    var thongTinLuaChon1 = "";
    if (luaChon1 === 1) {
        thongTinLuaChon1 = "";
    } else if (luaChon1 === 2) {
        thongTinLuaChon1 = "";
    }

    // Hiển thị thông tin của lựa chọn và cập nhật trạng thái lựa chọn đã chọn
    var thongTinElement1 = document.getElementById("thongTinLuaChon1");
    thongTinElement1.innerHTML = thongTinLuaChon1;
    luaChonDaChon1 = luaChon1;

    // Đặt kiểu dáng cho nút bấm được chọn
    var nutChonMoi1 = document.getElementById("chonCai1" + luaChon1);
    nutChonMoi1.classList.add("button-selected");
}



var luaChonDaChon = 0;

function chonCai(luaChon) {
    // Đặt lại kiểu dáng của các nút bấm
    if (luaChonDaChon !== 0) {
        var nutDaChon = document.getElementById("chonCai" + luaChonDaChon);
        nutDaChon.classList.remove("button-selected");
    }
    // Lấy nội dung của lựa chọn đã chọn
    var thongTinLuaChon = "";
    if (luaChon === 3) {
        thongTinLuaChon = "";
    } else if (luaChon === 4) {
        thongTinLuaChon = "";
    }
    // Hiển thị thông tin của lựa chọn và cập nhật trạng thái lựa chọn đã chọn
    var thongTinElement = document.getElementById("thongTinLuaChon");
    thongTinElement.innerHTML = thongTinLuaChon;
    luaChonDaChon = luaChon;

    // Đặt kiểu dáng cho nút bấm được chọn
    var nutChonMoi = document.getElementById("chonCai" + luaChon);
    nutChonMoi.classList.add("button-selected");
}