const { act } = require("react")

use("Beginning")

// db['First DB'].find({ salary:{$lt:60000} })



// db["First DB"].updateMany(
//   { salary: { $exists: false } },
//   [
//     {
//       $set: {
//         salary: {
//           $toInt: {
//             $add: [
//               25000,
//               { $multiply: [ { $rand: {} }, 50000 ] }
//             ]
//           }
//         }
//       }
//     }
//   ]
// )

// db["First DB"].find({ age: { $lt: 30 , $gt:20 } })
// db["First DB"].find({ salary: {$gt:60000 } })

// db["First DB"].find({ $and: [ { city:  "Miami" }, { salary: { $gt: 30000 } } ] })
// db['First DB'].find({city: {$in: ["Miami", "New York"]}})
// db['First DB'].find({active : true},
//     {_id:0, name:1, salary:1,role:1})

// db["First DB"].find().sort({ age: 1 })

// db["First DB"].find({ active: true, salary: { $gt: 30000 } })
//   .sort({ salary: -1 })
//   .limit(3)

db["First DB"].find({age: { $gt: 15 ,$lt:45 }},
    {_id:0, name:1, age:1, city:1}
)
.limit(5)
