var timeSplash = 5000, db, pictureSource = "", destinationType = "",
        app = {
            initialize: function () {
                app.bindEvents();
            },
            bindEvents: function () {
                document.addEventListener('deviceready', function () {
                    app.onDeviceReady();
                }, false)
            },
            onDeviceReady: function () {
                pictureSource = navigator.camera.PictureSourceType;
                destinationType = navigator.camera.DestinationType;
                var db = window.sqlitePlugin.openDatabase({name: "clase.bd"});

                db.transaction(function(tx) {
                    tx.executeSql('DROP TABLE IF EXISTS tbl_estudiante');
                    tx.executeSql('CREATE TABLE IF NOT EXISTS tbl_estudiante (est_id integer primary key, est_nombre text, est_edad integer)');

                    // demonstrate PRAGMA:
                    db.executeSql("pragma table_info (tbl_estudiante);", [], function(res) {
                    alert("PRAGMA res: " + JSON.stringify(res));
                    //alert("PRAGMA res: " + JSON.stringify(res));
                    });

                    tx.executeSql("INSERT INTO tbl_estudiante (est_nombre, est_edad) VALUES (?,?)", ["jga", 24], function(tx, res) {
                        alert("insertId: " + res.insertId + " -- probably 1");
                        alert("rowsAffected: " + res.rowsAffected + " -- should be 1");

                        db.transaction(function(tx) {
                        tx.executeSql("select count(est_id) as cnt from tbl_estudiante;", [], function(tx, res) {
                          alert("res.rows.length: " + res.rows.length + " -- should be 1");
                          alert("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
                        });
                        });

                    }, function(e) {
                        alert("ERROR: " + e.message);
                    });
                });
            }
            
            /*,onMenuKeyDown: function () {
             alert();
             return false;
             }*/
            /*,onBackKeyDown: function () {
             alert();
             return false;
             }*/
        };

function vibrate() {
    navigator.notification.vibrate(100);
    return false;
}

$(document).ready(function () {
    app.initialize();
});