'use strict';

var response = require('./res');
var connection = require('./koneksi');
const { connect } = require('./koneksi');

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data dosen
exports.tampilsemuadosen = function(req, res) {
    connection.query('SELECT * FROM tbl_dosen',
        function(error, rows, fileds) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//menampilkan semua data berdasarkan id
exports.tampilberdasarkanid = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_dosen where id =?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data dosen
exports.tambahDosen = function(req, res) {
    var nama = req.body.nama;
    var matkul = req.body.matkul;
    var no_hp = req.body.no_hp;

    connection.query('INSERT INTO tbl_dosen(nama, matkul, no_hp) VALUES (?,?,?)', [nama, matkul, no_hp],
        function(error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("BErhasil Menambahkan Data Dosen", res)
            }
        })
}

//MENGUBAH DATA BERDASARKAN ID
exports.ubahDosen = function(req, res) {
    var id = req.body.id;
    var nama = req.body.nama;
    var matkul = req.body.matkul;
    var no_hp = req.body.no_hp;

    connection.query('UPDATE tbl_dosen SET nama=?, matkul=?, no_hp=? WHERE id=?', [nama, matkul, no_hp, id],
        function(error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah data!", res)
            }
        })
}

//menghapus data berdasarkan id
exports.hapusDosen = function(req, res) {
    var id = req.body.id;

    connection.query('DELETE FROM tbl_dosen WHERE id=?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus data!", res)
            }
        })
}

//menampilkan matakuliah group
exports.tampilgroupmatakuliah = function(req, res) {
    connection.query('SELECT m.* , d.* FROM tbl_dosen as d, tbl_matkul as m WHERE d.id=m.id',
        function(error, rows, fileds) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res)
            }
        });
};