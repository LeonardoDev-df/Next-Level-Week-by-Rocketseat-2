const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{
    // Inserir dados
    proffyValue = {
        name: "lion",
        avatar: "qwe",
        whastapp: "12312",
        bio: "asdgf",   
    }
    // Consultar dados inseridos
    classValue = {
        subjects: 1,
        cost: "20",
        // o proffy id virá pelo banco de dados
    }
    //
    classScheduleValues = [
    // class id vira depois 
    {
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 1220
    }
   ]
     //await createProffy(db, {proffyValue, classValue, classScheduleValues })

     // consultar os dados inseridos

     //todos os proffys
     const selectProffys = await db.all("SELECT * FROM  proffys")
     //console.log(selectedProffys)

     // consultar as classes de um determinado professor
     // e trazer junto os dados do professor
     const selectClassesAndProffys = await db.all(`
           SELECT classes.*,proffys.*
           FROM proffys
           JOIN classes ON (classes.proffy_id = proffys.id)
           WHERE classes.proffy_id = 1; 
     `)
     //console.log(selectClassesAndProffys)
     
     // o horario q a pessoa trabalha time_from prrecisa ser menor ou igual ao horario solicitado
     // time_to precisa ser acima
     const selectClassesSchedules = await db.all(`
          SELECT class_schedule.*
          FROM class_schedule
          WHERE class_schedule.class_id = "1"
          AND class_schedule.weekday = "0"
          AND class_schedule.time_from <= "1300"
          AND class_schedule.time_to > "1300"
     `)
     //console.log(selectClassesSchedules)
})
