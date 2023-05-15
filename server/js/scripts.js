const { log } = require('console');
const fs = require('fs')
fs.readFile('../bteb_server/2nd.txt', (err, data) => {
    if (err) throw err
    data = data.toString()
    let target_index = data.search(658843)
    let result_part = ""
    let final_result = ""
    let result = ""

    if (data.substr(target_index+7,1) === '('){
        result_part = data.slice(target_index+6)
        final_result = result_part.indexOf(')')
        result = (result_part.slice(0,final_result+1))
    }else{
        result_part = data.slice(target_index+6)
        final_result = result_part.indexOf('}')
        result = (result_part.slice(0,final_result+1))
    }
    
    log(result)
})

