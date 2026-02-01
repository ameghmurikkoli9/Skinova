use('Beginning');
db.getCollection("First DB").find({});
// db.getCollection("First DB").insertOne({ name: "Jack", age: 25 , city: "New York" , profession: "Engineer" , hobbies: ["reading", "traveling", "swimming"] });


// db.getCollection("First DB").find({ city: { $regex: "New York" } });
// db.getCollection("First DB").insertMany([{ name: "Rose" , "age" : 17, city: "Los Angeles" , profession: "Designer" , hobbies: ["painting", "dancing"] },
// { name: "Liam" , "age" : 30, city: "Chicago" , profession: "Chef" , hobbies: ["cooking", "cycling"] },
// { name: "Sophia" , "age" : 22, city: "Miami" , profession: "Photographer" , hobbies: ["photography", "hiking"] }
// ]);

// db.getCollection("First DB").find({ _id: 1022 });
// db.getCollection("First DB").find(
//   {},
//   {name: 1, _id: 1}
// )

// db.getCollection("First DB").find({role: "Full Stack Developer"});
// db.getCollection("First DB").updateOne(
//   { oid: "697bbee967af92ebad83a468" }, {$set : { _id :1022 } })
// ;
// db.getCollection("First DB").updateMany({ role: "MERN Developer" }, { $set: { role: "Full Stack Developer" } });
db.getCollection("First DB").deleteOne({ age: {$lte: 18 }});
