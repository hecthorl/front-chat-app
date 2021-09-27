import mongoose from "mongoose";

/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/

const MONGODB_URI = process.env.MONGODB_URI;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
   cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
   if (cached.conn) {
      return cached.conn;
   }

   if (!cached.promise) {
      const opts = {
         autoIndex: false, // Don't build indexes
         serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
         socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
         family: 4, // Use IPv4, skip trying IPv6
      };

      cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
         return mongoose;
      });
   }
   cached.conn = await cached.promise;
   return cached.conn;
}

export default dbConnect;
