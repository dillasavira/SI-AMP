'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuadosen);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .post(jsonku.tambahDosen);

    app.route('/ubah')
        .put(jsonku.ubahDosen);

    app.route('/hapus')
        .delete(jsonku.hapusDosen);

    app.route('/tampilmatkul')
        .get(jsonku.tampilgroupmatakuliah)
}