import app from "./express-app"
import cluster from "cluster";
import { cpus } from 'os'
import 'dotenv/config'
// var cluster = require('cluster'),
// app = require('./express-app');

let workers: any = {},
    count = cpus().length;

function spawn() {
    let worker = cluster.fork();
    workers[worker.id] = worker;
    return worker;
}

if (cluster.isPrimary) {
    console.log("Spawning some workers")

    for (var i = 0; i < count; i++) {
        spawn();
    }
    cluster.on('death', function (worker) {
        console.log('worker ' + worker.pid + ' died. spawning a new process...');
        delete workers[worker.pid];
        spawn();
    });
} else {
    app.listen(process.env.PORT || 8080, () => {
        console.log("Connected")

    });
}