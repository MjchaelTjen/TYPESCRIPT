"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello word typescript buoi 1");
// var - let -const
// scope: 
// - var: function scope
// - let: block scope - {}
// hoisting 
// -var: bị hoisting
// let, const: cũng bị hoisting, nhưng bị đưa vào vùng nhớ chết tạm thời, chỉ có thể truy cập được sau khi khai báo
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("đếm", i);
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log("đếm", i_1);
    }, 1000);
};
for (var i_1 = 0; i_1 < 5; i_1++) {
    _loop_1(i_1);
}
// IIFE function: là 1 function được khởi tạo và thực thi ngay tại thời điểm khởi tạo
for (var i = 0; i < 5; i++) {
    (function (i) {
        console.log(i);
        setTimeout(function () {
            console.log("đếm", i);
        }, 1000);
    })(i);
}
// Type
var userName = 'Tiến';
// userName = 10 => lỗi
// userName= false => lỗi
userName = 'Tí';
var score = 8;
// score = '8' => lỗi
var isActive = true;
// isActive = 9 => lỗi
isActive = false;
// Array
var numbers = [1, 2, 3.];
var alphabets = ['a', 'b', 'c'];
// Tuple
var tuple1 = ['điểm toán', 8];
// Enum
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
    Color["red"] = "#f00";
})(Color || (Color = {}));
console.log(Color.white);
// Color.white = 'abc' => lỗi
var n = null;
var u = undefined;
console.log(typeof n); // chú ý phần này vì cả null và {} đều trả về object
console.log(typeof {});
var result = 5;
result = 'abc';
// any: hạn chế dùng
var result1 = 'acb'; // gán bằng string,number,boolean có thể thay đổi giá trị cho biến được khai báo
result1 = 1;
result1 = false;
// void dùng cho function
function foo() {
    return "hello";
}
function foo1() {
    console.log('hello');
}
;
var sinhVien = {
    hoTen: 'Tiến',
    lop: 'fe54',
    tuoi: 9
};
var data = {};
// data.lichChieu.map()
// falsy value: null, undefined, 0,' ', false
// data && data.lichChieu && data.lichChieu.map()
// Optional chaining: TS version >= 3.7
// data?.lichChieu?.map()
// nullish coalescing: chỉ kiểm tra null hoặc undefined
var diemToan = 0;
var ketQua = diemToan || 'N/A';
var ketQua1 = diemToan !== null && diemToan !== void 0 ? diemToan : 'N/A';
console.log(ketQua);
console.log(ketQua1);
// Generic 
function getResult(value) {
    return value;
}
var res = getResult('hello world'); // thêm kiểu dữ liệu trước hàm <string,number,boolean>()
console.log(res);
var res1 = getResult(5);
console.log(res1);
var NhanVien = /** @class */ (function () {
    function NhanVien(hoTen, gioiTinh, tuoi) {
        this.hoTen = hoTen;
        this.gioiTinh = gioiTinh;
        this.tuoi = tuoi;
    }
    NhanVien.prototype.tinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
var nhanVien = new NhanVien("tiến", "nam", 32);
console.log(nhanVien);
var GiamDoc = /** @class */ (function (_super) {
    __extends(GiamDoc, _super);
    function GiamDoc(hoTen, gioiTinh, tuoi, heSoLuong) {
        var _this = _super.call(this, hoTen, gioiTinh, tuoi) || this;
        _this.heSoLuong = heSoLuong;
        return _this;
    }
    GiamDoc.prototype.tinhLuong = function () {
        return _super.prototype.tinhLuong.call(this) * this.heSoLuong;
    };
    return GiamDoc;
}(NhanVien));
var giamDoc = new GiamDoc('Hùng', 'nam', 45, 5);
console.log(giamDoc.tinhLuong());
var NhanVienThietKe = /** @class */ (function () {
    function NhanVienThietKe(hoTen, tuoi, chucDanh) {
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.chucDanh = chucDanh;
    }
    NhanVienThietKe.prototype.tinhLuong = function () {
        return 3000;
    };
    NhanVienThietKe.prototype.thucHienCongViec = function () {
        console.log('thiết kế nội thất');
    };
    return NhanVienThietKe;
}());
// DOM
var text = document.getElementById('text'); // phải khai báo thêm thẻ mà mình muốn DOM <HTMLInputElement>
text.value;
var btnSubmit = document.getElementById('bntSubmit');
btnSubmit.click();
