const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://prabhuvamsi:MknZp0p0JOzbNPeM@cluster0.enb7uoz.mongodb.net/Cluster0?retryWrites=true&w=majority'; // MongoDB connection URL
const dbName = 'cluster'; // Name of your MongoDB database
const collectionName = 'products'; // Name of the collection where you want to insert the data

const data = [
    {
        id: 1,
        title: "My First Book of Pencil Control",
        author: "by Wonder House Books | 25 April 2018",
        price: 189,
        img: "https://m.media-amazon.com/images/I/810OOg88LoL._AC_UY327_FMwebp_QL65_.jpg",
        amount: 1,
      },
      {
        id: 2,
        title: "108 Panchatantra Stories",
        author: "by Maple Press  | 1 September 2020",
        price: 198,
        img: "https://m.media-amazon.com/images/I/71rmxx8P2qL._AC_UY327_FMwebp_QL65_.jpg",
        amount: 1,
      },
      {
        id: 3,
        title: "Amazing Questions & Answers Science",
        author: "by Om Books Editorial Team  | 25 November 2018",
        price: 143,
        img: "https://m.media-amazon.com/images/I/81Gbz0XnW7L._AC_UY327_FMwebp_QL65_.jpg",
        amount: 1,
      },
      {
        id: 4,
        title: "How Many Legs",
        author: "by Wonder House Books | 25 April 2018",
        price: 157,
        img: "https://tse4.mm.bing.net/th?id=OIP.Lq-x5fP2OhNLYz84ZTRm3wHaHZ&pid=Api&P=0&h=180",
        amount: 1,
      },
      {
        id: 5,
        title: "My First 1000 Words",
        author: "by Wonder House Books  | 1 January 2018",
        price: 149,
        img: "https://m.media-amazon.com/images/I/71O-FI7QApL._AC_UY327_FMwebp_QL65_.jpg",
        amount: 1,
      },
      {
        id: 6,
        title: "101 Panchatantra Stories for Children",
        author: "by Om Books Editorial Team | 30 September 2020",
        price: 135,
        img: "https://m.media-amazon.com/images/I/9173YBkMIsL._AC_UY327_FMwebp_QL65_.jpg",
        amount: 1,
      },
      {
        id: 7,
        title: "Pre-School Activities Pack ",
        author: "by Om Books Editorial Team  | 1 January 2021",
        price: 693,
        img: "https://m.media-amazon.com/images/I/913sv4sex3L._AC_UY327_FMwebp_QL65_.jpg",
        amount: 1,
      },
      {
        id: 8,
        title: "Early Learning Library Pack 1",
        author: "by Wonder House Books  | 6 December 2020",
        price: 289,
        img: "https://m.media-amazon.com/images/I/71xMttNhr7L._AC_UY327_FMwebp_QL65_.jpg",
        amount: 1,
      },
      {
        id: 9,
        title: "Blossom Moral Story Book for Kids ",
        author: "by Content Team at Target Publications",
        price: 180,
        img: "https://m.media-amazon.com/images/I/7122h3jWvEL._AC_UY327_FMwebp_QL65_.jpg",
        amount: 1,
      },
      {
        id: 10,
        title: "Brain Activity Book for Kids",
        author: "by Maple Press | 1 September 2021",
        price: 186,
        img: "https://m.media-amazon.com/images/I/7175YpTSa7L._AC_UY327_FMwebp_QL65_.jpg",
        amount: 1,
      },
      {
        id: 11,
        title: "Can a Cookie Change the world",
        author: "by Rebecca Smith  | 14 December 2021",
        price: 120,
        img: "https://tse2.mm.bing.net/th?id=OIP.2oib1I2gbFovffTrHysa5QHaJQ&pid=Api&P=0&h=180",
        amount: 1,
      },
      {
        id: 12,
        title: "Grandma's Bag of Stories",
        author: "by Sudha Murty | 1 January 2015",
        price: 157,
        img: "https://m.media-amazon.com/images/I/81jv44QdNwL._AC_UY327_FMwebp_QL65_.jpg",
        amount: 1,
      },
      {
          id: 13,
          title: "Hazel",
          author: "by Sudha Murty | 1 January 2015",
          price: 177,
          img: "https://tse4.mm.bing.net/th?id=OIP.UzYhaRhoHmIacYz8BV0AIgHaIG&pid=Api&P=0&h=180",
          amount: 1,
        },
        {
          id: 14,
          title: "Some bugs",
          author: "by Sudha Murty | 1 January 2015",
          price: 188,
          img: "https://tse2.mm.bing.net/th?id=OIP.0O2ShrL_DLeTH7bSUNp3pAHaHa&pid=Api&P=0&h=180",
          amount: 1,
        },
         {
        id: 15,
        title: "Roald Dahl",
        author: "by Sudha Murty | 1 January 2015",
        price: 157,
        img: "https://tse4.mm.bing.net/th?id=OIP.H8rwUHXrGkpdH8_0PBG9_gHaLA&pid=Api&P=0&h=180",
        amount: 1,
      },
      {
          id: 16,
          title: "Hackle Berry Finn",
          author: "by Maple Press | 1 September 2021",
          price:159,
          img: "https://tse3.mm.bing.net/th?id=OIP.NtRILMhZcFNbEuNCuk-fuQHaKC&pid=Api&P=0&h=180",
          amount: 1,
        },
        {
          id: 17,
          title: "Peter Pan",
          author: "by Maple Press | 1 September 2021",
          price: 105,
          img: "https://tse4.mm.bing.net/th?id=OIP.WOo5TsKapaAfTH62DyZvEAHaI3&pid=Api&P=0&h=180",
          amount: 1,
        },
        {
          id: 18,
          title: "Owl Babies",
          author: "by Maple Press | 1 September 2021",
          price: 199,
          img: "https://media.timeout.com/images/103072855/image.jpg",
          amount: 1,
        },
        {
          id: 19,
          title: "lonly Monster",
          author: "by Maple Press | 1 September 2021",
          price: 102,
          img: "https://tse1.mm.bing.net/th?id=OIP.0VZU_gNQWBdEXqFdhGrVgwHaL1&pid=Api&P=0&h=180",
          amount: 1,
        },
        {
          id: 20,
          title: "The tiger Who come to Tea",
          author: "by Maple Press | 1 September 2021",
          price: 186,
          img: "http://www.anorak.co.uk/wp-content/uploads/2015/03/kids-book-covers.jpg",
          amount: 1,
        },
];

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error occurred while connecting to MongoDB', err);
    return;
  }

  console.log('Connected to MongoDB successfully');

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  collection.insertMany(data, (err, result) => {
    if (err) {
      console.error('Error occurred while inserting data', err);
    } else {
      console.log(`${result.insertedCount} documents inserted successfully`);
    }

    client.close();
  });
});
