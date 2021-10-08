import { MongoClient } from 'mongodb';
import  mongoose from 'mongoose'


// /api/new-meetup
// POST /api/new-meetup
// الداتا الي جيه من الفيتش ريكوتس وبتتخزن في البودي ثم تتحط في الداتا بيز 


async function handler(req, res) {
  

    if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://bdAdmin:bdAdminbdAdmin@cluster0.akpi1.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;