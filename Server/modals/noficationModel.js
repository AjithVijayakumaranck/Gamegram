const mongoose = require('mongoose')

const notificationDataSchema = new mongoose.Schema({
    date:{
        require:true,
        default: Date.now,
        type:Date
    },
    type:{
        require:true,
        type:String
    },
    userId:{
        require:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    })

const notificationSchema = new mongoose.Schema({
userId:{
    require:true,
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
},
notification:{
    type:[notificationDataSchema]
}
},{timestamps: true})

const Notification = mongoose.model('notificaton',notificationSchema)
module.exports=Notification