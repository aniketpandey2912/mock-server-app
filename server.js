const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);



// {
//     "users": [
//       {
//         "id": 1,
//         "name": "Gertrudis Tatterton",
//         "age": 18,
//         "email": "gtatterton0@ehow.com"
//       },
//       {
//         "id": 2,
//         "name": "Gail Newbatt",
//         "age": 53,
//         "email": "gnewbatt1@un.org"
//       },
//       {
//         "id": 3,
//         "name": "Walliw Wilstead",
//         "age": 49,
//         "email": "wwilstead2@tripadvisor.com"
//       },
//       {
//         "id": 4,
//         "name": "Abran Proback",
//         "age": 29,
//         "email": "aproback3@theglobeandmail.com"
//       },
//       {
//         "id": 5,
//         "name": "Roda Chappelow",
//         "age": 31,
//         "email": "rchappelow4@oaic.gov.au"
//       },
//       {
//         "id": 6,
//         "name": "Karney Wylie",
//         "age": 22,
//         "email": "kwylie5@miitbeian.gov.cn"
//       },
//       {
//         "id": 7,
//         "name": "Cammi Pimbley",
//         "age": 63,
//         "email": "cpimbley6@nyu.edu"
//       },
//       {
//         "id": 8,
//         "name": "Gavra Manning",
//         "age": 43,
//         "email": "gmanning7@lycos.com"
//       },
//       {
//         "id": 9,
//         "name": "Zachary Seward",
//         "age": 45,
//         "email": "zseward8@oracle.com"
//       },
//       {
//         "id": 10,
//         "name": "Chucho Norssister",
//         "age": 20,
//         "email": "cnorssister9@mayoclinic.com"
//       }
//     ],
  
//     "admins": {
//       "id": 1,
//       "type": "admin",
//       "_firstName": "Aniket",
//       "_lastName": "Pandey",
//       "email": "aniketpandey2912@cultfit.com",
//       "token": "admin0001"
//     },
//     "users": [
//       {
//         "id": 1,
//         "type": "user",
//         "_firstName": "Aniket",
//         "_lastName": "Pandey",
//         "email": "aniket@gmail.com",
//         "token": "Qz29ycw121997"
//       },
//       {
//         "id": 2,
//         "type": "user",
//         "_firstName": "Anurag",
//         "_lastName": "Pandey",
//         "email": "anurag@gmail.com",
//         "token": "Bw25gnc082000"
//       }
//     ],
//     "products": [
//       {
//         "id": 1,
//         "title": "Dumbbell stand x1",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/F15Wr3ApdJD5Nf3eHmigimNL",
//         "price": "7499",
//         "sold": false
//       },
//       {
//         "id": 2,
//         "title": "Barbell x1 (adjustable)",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/WNGb9o3xhWmsV2AAjeGZ7Fqz",
//         "price": "12499",
//         "sold": false
//       },
//       {
//         "id": 3,
//         "title": "Signature Boxing Hand Wraps",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/rqFrmhQat5ajC62f7rKCPU6m",
//         "price": "499",
//         "sold": false
//       },
//       {
//         "id": 4,
//         "title": "Yoga Strap",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/TtKkztyhA84pRRQb6SstMJSP",
//         "price": "399",
//         "sold": false
//       },
//       {
//         "id": 5,
//         "title": "10kg Pack of 2 Competition Bumper Plate with rubber coating",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/gDp17YA1XPMxLRmoYDXZLHmN",
//         "price": "7499",
//         "sold": false
//       },
//       {
//         "id": 6,
//         "title": "cult.fit Kettlebell - 4 KG x 1 Pc",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UZ98jkaDsvS3DRoUmbyJD7Ei",
//         "price": "1299",
//         "sold": false
//       },
//       {
//         "title": "Cultsport Raw Whey 80% Protein, 908g",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/DcaecB4PJ3kJKtDL18m4gzbA",
//         "price": "2000",
//         "sold": false,
//         "id": 7
//       },
//       {
//         "title": "Smartrun c2: Bluetooth enabled treadmill with 15-level auto incline",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/yHz1nfjmiafpYRHeTMiBfB9A",
//         "price": 40000,
//         "sold": false,
//         "id": 8
//       },
//       {
//         "title": "UT7001S26, (Black, Blue) Steel, Wire Brake, 26T City Bike (Single Speed)",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/VdG9oF1ViYTEBKrcgficLEcz",
//         "price": "7999",
//         "sold": false,
//         "id": 9
//       },
//       {
//         "title": "Smartcross b1: Bluetooth enabled elliptical cross trainer",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/KF46i4r6G5posz6tthrs68Vn",
//         "price": "19999",
//         "sold": false,
//         "id": 10
//       },
//       {
//         "title": "FK4000 (13.2lbs Flywheel) with Free Installation Spinner Exercise Bike",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/nCDTciXNxcFyAWhcgAjsAxW2",
//         "price": "12499",
//         "sold": false,
//         "id": 11
//       },
//       {
//         "title": "Workout Gloves",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/zkhLReorkx9L2bcBs1WAnmbn",
//         "price": "1049",
//         "sold": false,
//         "id": 12
//       },
//       {
//         "title": "Gymnastic Gloves",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/moh6wUaAi2wW5qYkQ6bmQjtE",
//         "price": "1249",
//         "sold": false,
//         "id": 13
//       },
//       {
//         "title": "Duffle Bag with Shoe Compartment ",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/bSt7FswCgcXUJGAFzhaMxLqP",
//         "price": "1199",
//         "sold": false,
//         "id": 14
//       },
//       {
//         "title": "2 in 1 Lightweight Yoga Mat",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UFEqV6v4mHfdL8ndaTwu5AQE",
//         "price": "719",
//         "sold": false,
//         "id": 15
//       },
//       {
//         "title": "Azani Pure & Ultra-Strong Omega 3 Fish Oil | Omega 3(1000mg)+Omega 6,7 & 9 + Vitamin D3, 60 Capsules",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/4gUCtbuHsPaUtCem2uqZZDUZ",
//         "price": "499",
//         "sold": false,
//         "id": 16
//       },
//       {
//         "title": "Azani Endurance PE Herbal Supplement | Time, Stamina |Safed Musli, Fenugreek |Men, 180 Capsules",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/UN7J4nDzBDYtnPY99L8LEWrN",
//         "price": "1159",
//         "sold": false,
//         "id": 17
//       },
//       {
//         "title": "Azani PMS Gummies |Balances PMS,Period Pain, Cramp Relief, Decreases Mood Swings & Acne, 30 Gummies",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/qKfuQvNB7SLDQwjqFBznXes4",
//         "price": "349",
//         "sold": false,
//         "id": 18
//       },
//       {
//         "title": "Boldfit Curcumin Complex Supplements - 60 Veg Tablets",
//         "img": "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/J5ruU5AQQBogHSqPkS1Q4pMR",
//         "price": "567",
//         "sold": false,
//         "id": 19
//       }
//     ],
//     "zee5Admins": [
//       {
//         "id": 1,
//         "type": "admin",
//         "_firstName": "Aniket",
//         "_lastName": "Pandey",
//         "email": "aniket.pandey@zee.com",
//         "token": "admin0001"
//       },
//       {
//         "id": 2,
//         "type": "admin",
//         "_firstName": "Anirudha",
//         "_lastName": "Mandal",
//         "email": "anirudha.mandal@zee.com",
//         "token": "admin0002"
//       },
//       {
//         "id": 3,
//         "type": "admin",
//         "_firstName": "Moumita",
//         "_lastName": "Das",
//         "email": "moumita.das@zee.com",
//         "token": "admin0003"
//       },
//       {
//         "id": 4,
//         "type": "admin",
//         "_firstName": "Ritik",
//         "_lastName": "Haldar",
//         "email": "ritik.haldar@zee.com",
//         "token": "admin0004"
//       },
//       {
//         "id": 5,
//         "type": "admin",
//         "_firstName": "Sajjan",
//         "_lastName": "Kumar",
//         "email": "sajjan.kumar@zee.com",
//         "token": "admin0005"
//       }
//     ],
//     "restaurant_users": [
//       {
//         "id": 1,
//         "name": "Aniket",
//         "email": "aniket@gmail.com",
//         "pass": "aniket"
//       },
//       {
//         "id": 2,
//         "name": "Ashu",
//         "email": "ashu@gmail.com",
//         "pass": "ashu"
//       }
//     ],
//     "restaurant_admins": [
//       { "id": 1, "name": "Admin", "email": "admin@admin.com", "pass": "admin" }
//     ],
  
//     "restaurant_foodItem": [
//       {
//         "id": 1,
//         "name": "Pizza",
//         "img": "https://upload.wikimedia.org/wikipedia/commons/8/86/Pizza_%281%29.jpg",
//         "price": "199"
//       }
//     ]
//   }
  