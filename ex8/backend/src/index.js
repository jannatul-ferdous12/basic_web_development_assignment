import "babel-polyfill";
import Koa from "koa";
import Router from "koa-router";
import mysql from "mysql2/promise";

const port = process.env.PORT || 9000;
const app = new Koa();
const test = new Router();
const apiPath = "/api";

const connectionSetting = {
    host: "172.16.5.190",
    user: "root",
    database: "db_1",
    password: "db_rootpass",
    namedPlaceholder: true
};

test.get(`${apiPath}/all`, async (ctx) => {
    try {
        const conn = await mysql.createConnection(connectionSetting);
        const sqlCommand = `SELECT * FROM todos;`;
        const [data] = await conn.execute(sqlCommand);

        ctx.type = "application/json; charset=utf-8"; 
        ctx.body = data;
    } catch (error){
        console.error("Error occured: ", error);
        ctx.throw(500, error);
    }
});


test.get(`${apiPath}/all/DESC`, async (ctx) => {
    try {
        const conn = await mysql.createConnection(connectionSetting);
        const sqlCommand = `SELECT * FROM todos ORDER BY date_time DESC;`;
        const [data] = await conn.execute(sqlCommand);

        ctx.type = "application/json; charset=utf-8"; 
        ctx.body = data;
    } catch (error){
        console.error("Error occured: ", error);
        ctx.throw(500, error);
    }
});


test.get(`${apiPath}/latest4`, async (ctx) => {
    try {
        const conn = await mysql.createConnection(connectionSetting);
        const sqlCommand = `SELECT * FROM todos ORDER BY id DESC LIMIT 4;`;
        const [data] = await conn.execute(sqlCommand);

        ctx.type = "application/json; charset=utf-8"; 
        ctx.body = data;
    } catch (error){
        console.error("Error occured: ", error);
        ctx.throw(500, error);
    }
});


test.get(`${apiPath}/temperature`, async (ctx) => {
    try {
        const conn = await mysql.createConnection(connectionSetting);
        const sqlCommand = `SELECT(data->>'$.temperature') as temperature from todos where
                            (data->'$.temperature') is not NULL;`;
        const [data] = await conn.execute(sqlCommand);

        ctx.type = "application/json; charset=utf-8"; 
        ctx.body = data;
    } catch (error){
        console.error("Error occured: ", error);
        ctx.throw(500, error);
    }
});


test.get(`${apiPath}/humidity/average`, async (ctx) => {
    try {
        const conn = await mysql.createConnection(connectionSetting);
        const sqlCommand = `SELECT CAST(AVG(data->>'$.humidity_in') as decimal(3,2)) as humidity_in from todos
                            where (data->'$.humidity_in') is not null;`;
        const [data] = await conn.execute(sqlCommand);

        ctx.type = "application/json; charset=utf-8"; 
        ctx.body = data;
    } catch (error){
        console.error("Error occured: ", error);
        ctx.throw(500, error);
    }
});

app.use(test.routes());
app.use(test.allowedMethods());
app.listen(port);
console.log(`App listening on port ${port}`);
