const connection = require("./connection")


function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}
  
function objToSql(ob) {
var arr = [];
for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
    }
    arr.push(key + "=" + value);
    }
}
    return arr.toString();
}

const orm = {
    selectAll: function(tableName, cb){
        const queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, (err, data)=>{
            if(err) throw err;
            cb(data)
        })
    },

    create: function(tableName, cols, vals, cb){
        const queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, cols.toString(), objToSql(vals)], (err, data)=>{
            if(err) throw err;
            cb(data)
        })
    },

    update: function(tableName, objColVals, condition, cb){
        const queryString = `UPDATE ${tableName} SET ${objToSql(objColVals)} WHERE ${condition}`;
        connection.query(queryString, (err, data)=>{
            if(err) throw err;
            cb(data)
        })
    },

    delete: function(table, condition, cb){
        const queryString = `DELETE FROM ${table} WHERE ${condition}`
        connection.query(queryString, (err, result)=>{
            if (err) throw err
            cb(result)
        })
    }
    
}


module.exports= orm