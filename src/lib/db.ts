import mongoose from 'mongoose'

const MONGODB_URI=process.env.MONGODB_URI!


if(!MONGODB_URI){
    throw new Error("FUCK WE MESSED IT UP AGAIN")
}

let cached= global.mongoose;

if(!cached){
    cached= global.mongoose={conn: null,promise:null};
}

export async  function connectToDB() {
    
    if(cached.conn){
        return cached.conn
    }
    //maxPoolSize determines the no. of concurrent connections with the db 
    //bufferCommands queues ops like queries , inserts untill the db conn is established 
    //if flase mongoose won't queue the ops and throw error 
    if(!cached.promise){
        const opts={
            bufferCommands : true,
            maxPoolSize:10
        }
        cached.promise= mongoose.connect(MONGODB_URI,opts).then(()=>
            mongoose.connection
        )
    }

    try{
        cached.conn= await cached.promise

    } catch(error){
        cached.promise=null
        throw error
    }

    return cached.conn
} 

