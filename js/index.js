// Bài 1: Quản lý tuyển sinh

document.getElementById('tinhDiem').onclick = function () {
    var diemChuan = document.getElementById('diemChuan').value * 1;
    var diemMonThuNhat = document.getElementById('diemMonThuNhat').value * 1;
    var diemMonThuHai = document.getElementById('diemMonThuHai').value * 1;
    var diemMonThuBa = document.getElementById('diemMonThuBa').value * 1;
    var diemKhuVuc = 0;
    var khuVuc = document.getElementById('khuVuc').value;
    var diemDoiTuong = 0;
    var doiTuong = document.getElementById('doiTuong').value;
    var diemTong = 0;

    switch (khuVuc) {
        case 'A' : diemKhuVuc = 2;
        break;
        case 'B' : diemKhuVuc = 1;
        break;
        case 'C' : diemKhuVuc = 0.5;
        break;
        default : {
            diemKhuVuc = 0;
        }
    }

    switch (doiTuong) {
        case '1' : diemDoiTuong = 2.5;
        break;
        case '2' : diemDoiTuong = 1.5;
        break;
        case '3' : diemDoiTuong = 1;
        break;
        default : {
            diemDoiTuong = 0;
        }
    }

    if (diemMonThuNhat > 10 || diemMonThuHai > 10 || diemMonThuBa > 10) {
        document.getElementById('dauRot').innerHTML = `Kiểm tra lại thông tin nhé..! Thang điểm tối đa của một môn là 10`
    } else {
        if (diemMonThuNhat == 0 || diemMonThuHai == 0 || diemMonThuBa == 0) {
            document.getElementById('dauRot').innerHTML = `Bạn đã RỚT do có điểm bằng 0`
        } else if (diemMonThuNhat < 0 || diemMonThuHai < 0 || diemMonThuBa < 0) {
            document.getElementById('dauRot').innerHTML = `Kiểm tra lại thông tin nhé..! Bạn vừa nhập vào số điểm nhỏ hơn 0`
        } else {
            diemTong = diemMonThuNhat + diemMonThuHai + diemMonThuBa + diemKhuVuc + diemDoiTuong;
            if (diemTong >= diemChuan) {
                document.getElementById('dauRot').innerHTML = `Bạn đã ĐẬU. Tổng điểm của bạn là ${diemTong}`
            } else {
                document.getElementById('dauRot').innerHTML = `Bạn đã RỚT. Tổng điểm của bạn là ${diemTong}`
            }
        }
    }
}

// Bài 2: Tính tiền điện

document.getElementById('tinhTienDien').onclick = function () {
    var khachHang = document.getElementById('khachHang').value;
    var soKW = document.getElementById('soKW').value * 1;
    var soTienDien = 0;
    const tienDien_50KW_Dau = 500;
    const tienDien_50KW_Ke = 650;
    const tienDien_100KW_Ke = 850;
    const tienDien_150KW_Ke = 1100;
    const tienDien_lon_hon_350KW = 1300;

    if (soKW <= 0) {
        document.getElementById('tienDien').innerHTML = `Số KW nhập vào không hợp lệ`
    } else {
        if (soKW > 0 && soKW <= 50) {
            soTienDien = soKW*tienDien_50KW_Dau;
        } else if (soKW > 50 && soKW <= 100) {
            soTienDien = (soKW - 50)*tienDien_50KW_Ke + 50*tienDien_50KW_Dau;
        } else if (soKW > 100 && soKW <= 200) {
            soTienDien = (soKW - 100)*tienDien_100KW_Ke + 50*tienDien_50KW_Dau + 50*tienDien_50KW_Ke;
        } else if (soKW > 200 && soKW <= 350) {
            soTienDien = (soKW - 200)*tienDien_150KW_Ke + 50*tienDien_50KW_Dau + 50*tienDien_50KW_Ke + 100*tienDien_100KW_Ke;
        } else {
            soTienDien = (soKW - 350)*tienDien_lon_hon_350KW + 50*tienDien_50KW_Dau + 50*tienDien_50KW_Ke + 100*tienDien_100KW_Ke + 150*tienDien_150KW_Ke;
        }
        document.getElementById('tienDien').innerHTML = `Khách hàng ${khachHang}. Tiền điện là ${new Intl.NumberFormat('vn-VN').format(soTienDien)} VNĐ`
    }
}

// Bài 3: Tính thuế thu nhập cá nhân

const giamTruTongThuNhapNam = 4000000;
const giamTruNguoiPhuThuoc = 1600000;
document.getElementById('tinhThue').onclick = function () {
    var caNhanTinhThue = document.getElementById('caNhanTinhThue').value;
    var tongThuNhapNam = document.getElementById('tongThuNhapNam').value * 1;
    var soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value * 1;
    var thuNhapChiuThue = tongThuNhapNam - giamTruTongThuNhapNam - soNguoiPhuThuoc*giamTruNguoiPhuThuoc;
    var soTienThue = 0;

    if (soNguoiPhuThuoc < 0) {
        alert('Số người phụ thuộc không hợp lệ');
        document.getElementById('tienThue').innerHTML = `Họ tên: ${caNhanTinhThue}. Tiền thuế thu nhập cá nhân là 0 VNĐ`;
    } else {
        if (tongThuNhapNam <= 0) {
            document.getElementById('tienThue').innerHTML = `Họ tên: ${caNhanTinhThue}. Tiền thuế thu nhập cá nhân là 0 VNĐ`;
            alert('Số tiền thu nhập không hợp lệ')
        } else {
            if (thuNhapChiuThue <= 0) {
            document.getElementById('tienThue').innerHTML = `Họ tên: ${caNhanTinhThue}. Tiền thuế thu nhập cá nhân là 0 VNĐ`;
            } else if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60e+6) {
                soTienThue = thuNhapChiuThue*5/100;
            } else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
                soTienThue = (thuNhapChiuThue - 60e+6)*10/100 + (60e+6)*5/100;
            } else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
                soTienThue = (thuNhapChiuThue - 120e+6)*15/100 + (60e+6)*5/100 + (60e+6)*10/100;
            } else if (thuNhapChiuThue > 210e+6 && thuNhapChiuThue <= 384e+6) {
                soTienThue = (thuNhapChiuThue - 210e+6)*20/100 + (60e+6)*5/100 + (60e+6)*10/100 + (90e+6)*15/100;
            } else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
                soTienThue = (thuNhapChiuThue - 384e+6)*25/100 + (60e+6)*5/100 + (60e+6)*10/100 + (90e+6)*15/100 + (174e+6)*20/100;
            } else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
                soTienThue = (thuNhapChiuThue - 624e+6)*30/100 + (60e+6)*5/100 + (60e+6)*10/100 + (90e+6)*15/100 + (174e+6)*20/100 + (240e+6)*25/100;
            } else {
                soTienThue = (thuNhapChiuThue - 960e+6)*35/100 + (60e+6)*5/100 + (60e+6)*10/100 + (90e+6)*15/100 + (174e+6)*20/100 + (240e+6)*25/100 + (336e+6)*30/100;
            }
            document.getElementById('tienThue').innerHTML = `Họ tên: ${caNhanTinhThue}. Tiền thuế thu nhập cá nhân là ${new Intl.NumberFormat('vn-VN').format(soTienThue)} VNĐ`;
        }
    }
}

// Bài 4: Tính tiền cáp

function functionAnHien() {
    var loaiKhachHang = document.getElementById('loaiKhachHang').value;
    if (loaiKhachHang === 'doanhNghiep') {
        document.getElementById('div_soKetNoi').style.display = 'initial';
    } else {
        document.getElementById('div_soKetNoi').style.display = 'none';
    }
}

document.getElementById('tinhTienCap').onclick = function () {
    var maKhachHang = document.getElementById('maKhachHang').value;
    var soKenh = document.getElementById('soKenh').value * 1;
    var loaiKhachHang = document.getElementById('loaiKhachHang').value;

    function tinhPhiXuLyHoaDon(loaiKhachHang) {
        switch (loaiKhachHang) {
            case 'nhaDan' : {
                return 4.5;
            }
            case 'doanhNghiep' : {
                return 15;
            }
            default : {
                return 0;
            }
        }
    }
    var phiXuLyHoaDon = tinhPhiXuLyHoaDon(loaiKhachHang);

    function tinhPhiThueKenhCaoCap(loaiKhachHang) {
        switch (loaiKhachHang) {
            case 'nhaDan' : {
                return 7.5;
            }
            case 'doanhNghiep' : {
                return 50;
            }
            default : {
                return 0;
            }
        }
    }
    var phiThueKenhCaoCap = tinhPhiThueKenhCaoCap(loaiKhachHang);

    var phiDVCoBanNhaDan = 20.5;
    var phiDVCoBanDoanhNghiep = 0;
    var soKetNoi = document.getElementById('soKetNoi').value * 1;
    var soTienCap = 0;

    if (loaiKhachHang === 'nhaDan') {
        if (soKenh < 0) {
            document.getElementById('tienCap').innerHTML = '';
            alert('số kênh không hợp lệ');
        } else {
            soTienCap = soKenh*phiThueKenhCaoCap + phiXuLyHoaDon + phiDVCoBanNhaDan;
            document.getElementById('tienCap').innerHTML = `Khách hàng ${maKhachHang}. Số tiền cáp là ${soTienCap.toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
        }
    } else if (loaiKhachHang === 'doanhNghiep') {
        if (soKenh < 0) {
            document.getElementById('tienCap').innerHTML = '';
            alert('số kênh không hợp lệ');
        } else {
            if (soKetNoi < 0) {
                document.getElementById('tienCap').innerHTML = '';
                alert('số kết nối không hợp lệ');
            } else if (soKetNoi >= 0 && soKetNoi <= 10) {
                phiDVCoBanDoanhNghiep = 75;
                soTienCap = soKenh*phiThueKenhCaoCap + phiXuLyHoaDon + phiDVCoBanDoanhNghiep;
                document.getElementById('tienCap').innerHTML = `Khách hàng ${maKhachHang}. Số tiền cáp là ${soTienCap.toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
            } else {
                phiDVCoBanDoanhNghiep = (soKetNoi - 10)*5 + 75;
                soTienCap = soKenh*phiThueKenhCaoCap + phiXuLyHoaDon + phiDVCoBanDoanhNghiep;
                document.getElementById('tienCap').innerHTML = `Khách hàng ${maKhachHang}. Số tiền cáp là ${soTienCap.toLocaleString("en-US", {style:"currency", currency:"USD"})}`;
            }
        }
    } else {
        document.getElementById('tienCap').innerHTML = `Khách hàng ${maKhachHang}. Số tiền cáp là $0.00`;
        alert('Bạn chưa chọn loại khách hàng');
    }
}