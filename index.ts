console.log("hello word typescript buoi 1")

// var - let -const


// scope: 
// - var: function scope
// - let: block scope - {}


// hoisting 
// -var: bị hoisting
// let, const: cũng bị hoisting, nhưng bị đưa vào vùng nhớ chết tạm thời, chỉ có thể truy cập được sau khi khai báo

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("đếm", i)
    }, 1000)
}

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("đếm", i);
    }, 1000);
}

// IIFE function: là 1 function được khởi tạo và thực thi ngay tại thời điểm khởi tạo

for (var i = 0; i < 5; i++) {
    (function (i) {
        console.log(i)
        setTimeout(function () {
            console.log("đếm", i)
        }, 1000)
    })(i)
}


// Type

let userName: String = 'Tiến'
// userName = 10 => lỗi
// userName= false => lỗi
userName = 'Tí'

let score: number = 8
// score = '8' => lỗi


let isActive: boolean = true
// isActive = 9 => lỗi
isActive = false


// Array
let numbers: number[] = [1, 2, 3.]
let alphabets: Array<string> = ['a', 'b', 'c']

// Tuple
let tuple1: [string, number] = ['điểm toán', 8]

// Enum
enum Color {
    white = '#fff',
    black = '#000',
    red = '#f00'
}

console.log(Color.white)
// Color.white = 'abc' => lỗi


let n: null = null
let u: undefined = undefined

console.log(typeof n) // chú ý phần này vì cả null và {} đều trả về object
console.log(typeof {})


let result: number | string = 5
result = 'abc'

// any: hạn chế dùng
let result1: any = 'acb' // gán bằng string,number,boolean có thể thay đổi giá trị cho biến được khai báo
result1 = 1
result1 = false

// void dùng cho function
function foo(): string { // dùng trong trường hợp bắt buộc phải trả về 1 giá trị đúng với kiểu dữ liệu đã khai báo
    return "hello"
}

function foo1(): void {  // dùng trong trường hợp không cần trả về giá trị
    console.log('hello')
}


interface SinhVien {// kiểu dữ iệu mới do mình tạo ra, lưu ý viết hoa chữ đầu tiên 
    hoTen: string,
    lop: string,
    tuoi?: number // optional dấu ? tùy chọn cho option muốn thêm vào hay không
};
const sinhVien: SinhVien = {
    hoTen: 'Tiến',
    lop: 'fe54',
    tuoi: 9
};



let data = {}
// data.lichChieu.map()

// falsy value: null, undefined, 0,' ', false
// data && data.lichChieu && data.lichChieu.map()

// Optional chaining: TS version >= 3.7
// data?.lichChieu?.map()



// nullish coalescing: chỉ kiểm tra null hoặc undefined
let diemToan = 0
let ketQua = diemToan || 'N/A'
let ketQua1 = diemToan ?? 'N/A'

console.log(ketQua)
console.log(ketQua1)


// Generic 
function getResult<T>(value: T): T { // cần khai báo 3 kiểu dữ liệu tạm T
    return value
}
let res = getResult<string>('hello world') // thêm kiểu dữ liệu trước hàm <string,number,boolean>()
console.log(res)
let res1 = getResult<number>(5)
console.log(res1)



class NhanVien {
    protected hoTen: string;  // có tính đóng gói privte 
    protected gioiTinh: string; // để có thể cho các thằng con kế thừa thì khai báo protected
    protected tuoi: number
    constructor(hoTen: string, gioiTinh: string, tuoi: number) {
        this.hoTen = hoTen;
        this.gioiTinh = gioiTinh;
        this.tuoi = tuoi
    }

    tinhLuong(): number {
        return 1000
    }
}


const nhanVien = new NhanVien("tiến", "nam", 32)
console.log(nhanVien)


class GiamDoc extends NhanVien { // kế thừa từ NhanVien
    private heSoLuong: number
    constructor(hoTen: string, gioiTinh: string, tuoi: number, heSoLuong: number) {
        super(hoTen, gioiTinh, tuoi);
        this.heSoLuong = heSoLuong
    }
    tinhLuong(): number {
        return super.tinhLuong() * this.heSoLuong
    }
}

const giamDoc = new GiamDoc('Hùng', 'nam', 45, 5)
console.log(giamDoc.tinhLuong())




// Interface

interface INhanVien {
    hoTen: string;
    tuoi: number
    tinhLuong(): number
}

interface IThietKe {
    readonly chucDanh: string; // **************readonly chỉ đọc không thể thay đổi******************
    thucHienCongViec(): void
}

class NhanVienThietKe implements INhanVien, IThietKe {
    hoTen: string;
    tuoi: number;
    chucDanh: string
    constructor(hoTen: string, tuoi: number, chucDanh: string) {
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.chucDanh = chucDanh;
    }
    tinhLuong(): number {
        return 3000
    }
    thucHienCongViec(): void {
        console.log('thiết kế nội thất')
    }
}



// DOM

const text = <HTMLInputElement>document.getElementById('text') // phải khai báo thêm thẻ mà mình muốn DOM <HTMLInputElement>
text.value

const btnSubmit = <HTMLButtonElement>document.getElementById('bntSubmit')
btnSubmit.click()