
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
const bodyParser = require("body-parser");

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const { response } = require("express");

app.use(cors());

// Initialize the main project folder
app.use(express.static("src"));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
  console.log("server running");
  console.log(`running on local host: ${port}`);
}

let usersData = [{email: 'hassanmhk7@gmail.com',
  password: '12345678a@',
}];

// // GET route
// app.get("/register", getData);
// function getData(req, res) {
//   res.send(projectData);
//   console.log(projectData);
// }

// Handle GET requests to /register route
// app.get("/register", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

//POST route
app.post("/register", addData);
function addData(req, res) {
  let newData = req.body;
  let newEntry = {
    email: newData.email,
    password: newData.password,
    birthday: newData.birthday,
    gender: newData.gender,
  };

  function checkEmail(x){
    let found = 0;
      usersData.map((user) => {
        if(x.email === user.email){
          found = 1;
        }
      })
    if(found === 1){
      console.log("user already registered");
      res.send({ message: "The email address you entered is connected to an account."});
    }else{
      usersData.push(newEntry);
      res.send({ message: "Welcome to MarketX"});
    }
  }

  checkEmail(newEntry);
  console.log(usersData.length);
  console.log("usersData", usersData);



  res.json({ message: "Hello "+ newEntry.email});
}

// POST route
app.post("/login", checkData);
function checkData(req, res) {
  let newData = req.body;
  let loginEntry = {
    email: newData.email,
    password: newData.password,
  };

  function checkEmailPass(x){
    let found = 0;
      usersData.map((user) => {
        if(x.email === user.email && x.password === user.password){
          found = 1;
        }
        // console.log(x.email+user.email+x.password+user.password);
      })
    if(found === 1){
      res.send({ condition: "ok", message: "Welcome back"});
    }else{
      res.send({ message: "Sorry, your email or password was incorrect."});
    }
  }
  checkEmailPass(loginEntry);
}

// POST route
app.post("/", getHomeData);
function getHomeData(req, res) {
  // console.log(req);
  res.send(homeData);
}

app.get("/", getProducts);
function getProducts(req, res) {
  res.send(homeData);
}

app.post("/products/:id", getProduct);
function getProduct(req, res) {
  const id = req.params.id;
  homeData.laptops.map((product) => {
    if(product.id === Number(id)){
      res.send(product);
    }
  });
}

const homeData = {laptops: [
  {
    "id": 1,
    "img": "https://images-eu.ssl-images-amazon.com/images/I/41oAtcp2wZL._AC_SX184_.jpg",
    "name": "Laptop IdeaPad 5 15ITL05 - 11th Intel® Core™ i7-1165G7 - Ram 16GB - Hard 512GB SSD M.2 - GPUNVIDIA® GeForce MX450 2GB",
    "info": "Laptop IdeaPad 5 15ITL05 (11th Intel® Core™ i7-1165G7 - Ram 16GB - Hard 512GB SSD M.2 - GPUNVIDIA® GeForce MX450 2GB - Display 15.6' FHD IPS - Keyboard Backlit - OS DOS -Color Graphite Grey)",
    "price": 25650
  },
  {
    "id": 2,
    "img": "https://images-eu.ssl-images-amazon.com/images/I/31OZQ6HPTYL._AC_SX184_.jpg",
    "name": "HP Victus 15-fa0031ne - 12th i7-12700H 14-Cores, 8GB RAM, 512GB SSD,NVIDIA RTX3050 4GB GDDR6 Graphics",
    "info": "HP Victus 15-fa0031ne - 12th i7-12700H 14-Cores, 8GB RAM, 512GB SSD,NVIDIA RTX3050 4GB GDDR6 Graphics, 15.6' FHD (1920x1080) IPS 144Hz, Dos - Mica Silver",
    "price": 25000
  },
  {
    "id": 3,
    "img": "https://images-eu.ssl-images-amazon.com/images/I/31j2B+CKMUL._AC_SX184_.jpg",
    "name": "Lenovo Legion 5 15ACH6 Gaming Laptop - Ryzen 5 5600H 6-Cores, 16 GB RAM, 512 GB SSD,NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics",
    "info": "Lenovo Legion 5 15ACH6 Gaming Laptop - Ryzen 5 5600H 6-Cores, 16 GB RAM, 512 GB SSD,NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics, 15.6' FHD (1920x1080) IPS 120Hz, Backlit Keyboard, Windows 11",
    "price": 31999
  },
  {
    "id": 4,
    "img": "https://images-eu.ssl-images-amazon.com/images/I/41qFFF6N2hL._AC_SX184_.jpg",
    "name": "Dell Inspiron 5410 2-in-1 Convertible x360 laptop - 11th Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics",
    "info": "Dell Inspiron 5410 2-in-1 Convertible x360 laptop - 11th Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics, 14' FHD Touch, FingerPrint, Backlit keyboard, Windows 10 - Silver",
    "price": 25500
  },
  {
    "id": 5,
    "img": "https://images-eu.ssl-images-amazon.com/images/I/41Xp-kmG6PL._AC_SX184_.jpg",
    "name": "IdeaPad 3 15itl6 Laptop - Ci7-1165g7 8gb Ram 1tb 15.6 Fhd - Mx450 2gb - Dos - Arctic Grey",
    "info": "IdeaPad 3 15itl6 Laptop - Ci7-1165g7 8gb Ram 1tb 15.6 Fhd - Mx450 2gb - Dos - Arctic Grey",
    "price": 21999
  },
  {
    "id": 6,
    "img": "https://m.media-amazon.com/images/I/81kw-4atlRL._AC_UL320_.jpg",
    "name": "Dell G15-5520 Gaming Laptop - 12th Intel Core i7-12700H 14-Cores, 16GB RAM DDR5 4800 MHz, 512GB SSD",
    "info": "Dell G15-5520 Gaming Laptop - 12th Intel Core i7-12700H 14-Cores, 16GB RAM DDR5 4800 MHz, 512GB SSD,NVIDIA Geforce RTX3060 6GB GDDR6 Graphics, 15.6' FHD 120 Hz, Backlit Keyboard, UBUNTU, Shadow Grey",
    "price": 42266
  },
  {
    "id": 7,
    "img": "https://m.media-amazon.com/images/I/611fpHIoRZL._AC_UL320_.jpg",
    "name": "MSI GF65 Thin 9SE Core i7-9750H withNVIDIA RTX 2060 - 6 GB Ram 16GB SSD 512GB 15.6' FHD IPS",
    "info": "MSI GF65 Thin 9SE Core i7-9750H withNVIDIA RTX 2060 - 6 GB Ram 16GB SSD 512GB 15.6' FHD IPS , Windows 10 Home",
    "price": 40999
  },
  {
    "id": 8,
    "img": "https://m.media-amazon.com/images/I/5181KF5br-L._AC_UL320_.jpg",
    "name": "Lenovo IdeaPad Gaming 3 Laptop - Ryzen 5 5600H 6 Cores, 16GB RAM, 1TB SSD,NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics",
    "info": "Lenovo IdeaPad Gaming 3 Laptop - Ryzen 5 5600H 6 Cores, 16GB RAM, 1TB SSD,NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics, 15.6' FHD (1920x1080) IPS 120Hz, Backlit KB, Windows11",
    "price": 33585
  },
  {
    "id": 9,
    "img": "https://m.media-amazon.com/images/I/61Tow+3TrGL._AC_UL320_.jpg",
    "name": "Lenovo V15 Laptop - 4GB RAM, 1TB HDD, AMD Radeon Graphics, 15.6 Inch HD 220nits Anti-glare",
    "info": "Lenovo V15 Laptop - 4GB RAM, 1TB HDD, AMD Radeon Graphics, 15.6 Inch HD 220nits Anti-glare, Dos - Iron Grey",
    "price": 18744
  },
  {
    "id": 10,
    "img": "https://m.media-amazon.com/images/I/61csVaj6QqL._AC_UL320_.jpg",
    "name": "FX507ZC-HN003W Core i7-12700H, 8GB - 512GB SSD, 15.6in FHD 144Hz RTX 3050,4GB",
    "info": "FX507ZC-HN003W Core i7-12700H, 8GB - 512GB SSD, 15.6in FHD 144Hz RTX 3050,4GB - Window 11 Gaming Laptop - Mecha Grey",
    "price": 41499
  },{
    "id": 11,
    "img": "https://images-eu.ssl-images-amazon.com/images/I/41oAtcp2wZL._AC_SX184_.jpg",
    "name": "Laptop IdeaPad 5 15ITL05 - 11th Intel® Core™ i7-1165G7 - Ram 16GB - Hard 512GB SSD M.2 - GPUNVIDIA® GeForce MX450 2GB",
    "info": "Laptop IdeaPad 5 15ITL05 (11th Intel® Core™ i7-1165G7 - Ram 16GB - Hard 512GB SSD M.2 - GPUNVIDIA® GeForce MX450 2GB - Display 15.6' FHD IPS - Keyboard Backlit - OS DOS -Color Graphite Grey)",
    "price": 27500
  },
  {
    "id": 12,
    "img": "https://images-eu.ssl-images-amazon.com/images/I/31OZQ6HPTYL._AC_SX184_.jpg",
    "name": "HP Victus 15-fa0031ne - 12th i7-12700H 14-Cores, 8GB RAM, 512GB SSD,NVIDIA RTX3050 4GB GDDR6 Graphics",
    "info": "HP Victus 15-fa0031ne - 12th i7-12700H 14-Cores, 8GB RAM, 512GB SSD,NVIDIA RTX3050 4GB GDDR6 Graphics, 15.6' FHD (1920x1080) IPS 144Hz, Dos - Mica Silver",
    "price": 25600
  },
  {
    "id": 13,
    "img": "https://images-eu.ssl-images-amazon.com/images/I/31j2B+CKMUL._AC_SX184_.jpg",
    "name": "Lenovo Legion 5 15ACH6 Gaming Laptop - Ryzen 5 5600H 6-Cores, 16 GB RAM, 512 GB SSD,NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics",
    "info": "Lenovo Legion 5 15ACH6 Gaming Laptop - Ryzen 5 5600H 6-Cores, 16 GB RAM, 512 GB SSD,NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics, 15.6' FHD (1920x1080) IPS 120Hz, Backlit Keyboard, Windows 11",
    "price": 32999
  },
  {
    "id": 14,
    "img": "https://images-eu.ssl-images-amazon.com/images/I/41qFFF6N2hL._AC_SX184_.jpg",
    "name": "Dell Inspiron 5410 2-in-1 Convertible x360 laptop - 11th Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics",
    "info": "Dell Inspiron 5410 2-in-1 Convertible x360 laptop - 11th Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Intel Iris Xe Graphics, 14' FHD Touch, FingerPrint, Backlit keyboard, Windows 10 - Silver",
    "price": 25500
  },
  {
    "id": 15,
    "img": "https://images-eu.ssl-images-amazon.com/images/I/41Xp-kmG6PL._AC_SX184_.jpg",
    "name": "IdeaPad 3 15itl6 Laptop - Ci7-1165g7 8gb Ram 1tb 15.6 Fhd - Mx450 2gb - Dos - Arctic Grey",
    "info": "IdeaPad 3 15itl6 Laptop - Ci7-1165g7 8gb Ram 1tb 15.6 Fhd - Mx450 2gb - Dos - Arctic Grey",
    "price": 21999
  },
  {
    "id": 16,
    "img": "https://m.media-amazon.com/images/I/81kw-4atlRL._AC_UL320_.jpg",
    "name": "Dell G15-5520 Gaming Laptop - 12th Intel Core i7-12700H 14-Cores, 16GB RAM DDR5 4800 MHz, 512GB SSD",
    "info": "Dell G15-5520 Gaming Laptop - 12th Intel Core i7-12700H 14-Cores, 16GB RAM DDR5 4800 MHz, 512GB SSD,NVIDIA Geforce RTX3060 6GB GDDR6 Graphics, 15.6' FHD 120 Hz, Backlit Keyboard, UBUNTU, Shadow Grey",
    "price": 42260
  },
  {
    "id": 17,
    "img": "https://m.media-amazon.com/images/I/611fpHIoRZL._AC_UL320_.jpg",
    "name": "MSI GF65 Thin 9SE Core i7-9750H with NVIDia RTX 2060 - 6 GB Ram 16GB SSD 512GB 15.6' FHD IPS",
    "info": "MSI GF65 Thin 9SE Core i7-9750H with NVIDia RTX 2060 - 6 GB Ram 16GB SSD 512GB 15.6' FHD IPS , Windows 10 Home",
    "price": 40999
  },
  {
    "id": 18,
    "img": "https://m.media-amazon.com/images/I/5181KF5br-L._AC_UL320_.jpg",
    "name": "Lenovo IdeaPad Gaming 3 Laptop - Ryzen 5 5600H 6 Cores, 16GB RAM, 1TB SSD, NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics",
    "info": "Lenovo IDeaPad Gaming 3 Laptop - Ryzen 5 5600H 6 Cores, 16GB RAM, 1TB SSD, NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics, 15.6' FHD (1920x1080) IPS 120Hz, Backlit KB, Windows11",
    "price": 33500
  },
  {
    "id": 19,
    "img": "https://m.media-amazon.com/images/I/61Tow+3TrGL._AC_UL320_.jpg",
    "name": "Lenovo V15 Laptop - 4GB RAM, 1TB HDD, AMD Radeon Graphics, 15.6 Inch HD 220nits Anti-glare",
    "info": "Lenovo V15 Laptop - 4GB RAM, 1TB HDD, AMD Radeon Graphics, 15.6 Inch HD 220nits Anti-glare, Dos - Iron Grey",
    "price": 8700
  },
  {
    "id": 20,
    "img": "https://m.media-amazon.com/images/I/61csVaj6QqL._AC_UL320_.jpg",
    "name": "FX507ZC-HN003W Core i7-12700H, 8GB - 512GB SSD, 15.6in FHD 144Hz RTX 3050,4GB",
    "info": "FX507ZC-HN003W Core i7-12700H, 8GB - 512GB SSD, 15.6in FHD 144Hz RTX 3050,4GB - Window 11 Gaming Laptop - Mecha Grey",
    "price": 41499
  }
]};