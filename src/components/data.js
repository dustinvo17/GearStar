function returnImgUrl(itemType){

    return function(id,index,file){
        return `img/${itemType}/${id}/${index}.${file}`
    }
}
const headphoneUrl = returnImgUrl('headphone')
const  keyboardUrl = returnImgUrl('keyboard')
const moniterUrl = returnImgUrl('moniter')
const mouseUrl = returnImgUrl('mouse')
export const headphone = [
    {
    id: 1,
    title: "SteelSeries Arctis 7 Black Edition - 2019 Edition",
    img: [headphoneUrl(1,1,'jpg'),headphoneUrl(1,2,'png'),headphoneUrl(1,3,'png'),headphoneUrl(1,4,'png')],
    price: 180,
    company: "Steelseries",
    info:
      "https://www.tomsguide.com/us/steelseries-arctis-7,review-4140.html",
    video:"https://www.youtube.com/watch?v=jTHkKudg084",
    inCart: false,
    count: 0,
    total: 0
  },
  {
      id: 2,
    title: "Razer Nari Ultimate",
    img: [headphoneUrl(2,1,'png'),headphoneUrl(2,2,'png'),headphoneUrl(2,3,'png'),headphoneUrl(2,4,'png')],
    price: 199.99,
    company: "Razer",
    info:
      "https://www.tomsguide.com/us/razer-nari-ultimate,review-6037.html",
    video:"https://www.youtube.com/watch?v=Mi_bccLxGJg",
    inCart: false,
    count: 0,
    total: 0
  },
   {
      id: 3,
    title: "ROG Strix Fusion 500",
    img: [headphoneUrl(3,1,'jpg'),headphoneUrl(3,3,'jpg'),headphoneUrl(3,4,'jpg')],
    price: 159.99,
    company: "Asus",
    info:
      "https://www.tomsguide.com/us/razer-nari-ultimate,review-6037.html",
    video:"https://www.youtube.com/watch?v=CrCv1PoKrrA",
    inCart: false,
    count: 0,
    total: 0
  },
  {
      id: 4,
    title: "Asus ROG Strix 7.1",
    img: [headphoneUrl(4,1,'jpg'),headphoneUrl(4,2,'jpg'),headphoneUrl(4,3,'jpg')],
    price: 169.99,
    company: "Asus",
    info:
      "https://www.trustedreviews.com/reviews/asus-strix-7-1",
    video:"https://www.youtube.com/watch?v=xpOZVs3Dds8",
    inCart: false,
    count: 0,
    total: 0
  },
    {
      id: 5,
    title: "SteelSeries Arctis Pro",
    img: [headphoneUrl(5,1,'jpg')],
    price: 159.99,
    company: "SteelSeries",
    info:
      "https://www.techradar.com/reviews/steelseries-arctis-pro-headset",
    video:"https://www.youtube.com/watch?v=0AEcCQcB3D4",
    inCart: false,
    count: 0,
    total: 0
  },
  {
      id: 6,
    title: "Sennheiser GSP 500",
    img: [headphoneUrl(6,1,'jpg')],
    price: 229.95,
    company: "Sennheiser",
    info:
      "https://www.pcgamesn.com/sennheiser-gsp-500-gaming-headset-review-performance",
    video:"https://www.youtube.com/watch?v=EbbC1RmBTD4",
    inCart: false,
    count: 0,
    total: 0
  },
   {
      id: 7,
    title: "Razer Thresher Ultimate for PS4",
    img: [headphoneUrl(7,1,'jpg')],
    price: 229,
    company: "Razer",
    info:
      "https://www.techradar.com/reviews/razer-thresher-ultimate",
    video:"https://www.youtube.com/watch?v=km-aK4q_mgQ",
    inCart: false,
    count: 0,
    total: 0
  },
    {
      id: 8,
    title: "Razer Thresher Ultimate for Xbox One",
    img: [headphoneUrl(8,1,'jpg')],
    price: 249,
    company: "Razer",
    info:
      "https://www.soundguys.com/razer-thresher-ultimate-review-23103/",
    video:"https://www.youtube.com/watch?v=ejBLljBG5Ek",
    inCart: false,
    count: 0,
    total: 0
  },
    {
      id: 9,
    title: "Sennheiser GSP 600",
    img: [headphoneUrl(9,1,'jpg')],
    price: 215.99,
    company: "Sennheiser",
    info:
      "https://www.tomsguide.com/us/sennheiser-gsp-600,review-5576.html",
    video:"https://www.youtube.com/watch?v=dvDLCpMo8ls",
    inCart: false,
    count: 0,
    total: 0
  },
    {
      id: 10,
    title: "SteelSeries Arctis Pro Wireless",
    img: [headphoneUrl(10,1,'png'),headphoneUrl(10,2,'jpg')],
    price: 229.99,
    company: "Sennheiser",
    info:
      "https://www.tomsguide.com/us/steelseries-arctis-pro-wireless,review-5209.html",
    video:"https://www.youtube.com/watch?v=ffE4lC8gYEY",
    inCart: false,
    count: 0,
    total: 0
  },

]
export const keyboard = [
     {
      id: 1,
    title: "Steelseries Apex PRO",
    img: [keyboardUrl(1,1,'png'),keyboardUrl(1,2,'jpg'),keyboardUrl(1,3,'jpg'),
    keyboardUrl(1,4,'jpg'),keyboardUrl(1,5,'jpg'),keyboardUrl(1,6,'jpg'),keyboardUrl(1,7,'jpg'),
    keyboardUrl(1,8,'jpg'),keyboardUrl(1,9,'jpg'),keyboardUrl(1,10,'jpg')],
    price: 199.99,
    switch:'OmniPoint',
    company: "Steelseries",
    info:
      "https://www.tomsguide.com/us/steelseries-apex-pro,review-6606.html",
    video:"https://www.youtube.com/watch?v=-RakwYgTmmY",
    inCart: false,
    count: 0,
    total: 0
  },
     {
      id: 2,
    title: "Asus ROG Claymore Numpad",
    img: [keyboardUrl(2,1,'png'),keyboardUrl(2,2,'jpg'),keyboardUrl(2,3,'jpg'),
    keyboardUrl(2,4,'jpg'),keyboardUrl(2,5,'jpg')],
    price: 89.99,
    company: "Asus",
    info:
      "https://www.trustedreviews.com/reviews/asus-rog-claymore",
    video:"https://www.youtube.com/watch?v=od6fH8rlGow",
    inCart: false,
    count: 0,
    total: 0
  },
     {
      id: 3,
    title: "Asus Cerberus",
    img: [keyboardUrl(3,1,'jpg'),keyboardUrl(3,2,'jpg')],
    price: 49.99,
    company: "Asus",
    info:
      "https://www.kitguru.net/tech-news/featured-tech-reviews/briony-hannam/asus-cerberus-mechanical-rgb-keyboard-review/",
    video:"https://www.youtube.com/watch?v=gEqlR1aln7c",
    inCart: false,
    count: 0,
    total: 0
  },
    {
      id: 4,
    title: "Razer BlackWidow Ultimate OverWatch",
    img: [keyboardUrl(4,1,'png'),keyboardUrl(4,2,'jpg'),keyboardUrl(4,3,'jpg'),keyboardUrl(4,4,'png'),keyboardUrl(4,5,'png'),keyboardUrl(4,6,'png')],
     switch:'Green Switches',
    price: 119.99,
    company: "Razer",
    info:
      "https://www.destructoid.com/review-overwatch-razer-blackwidow-deathadder-chroma-goliathus-speed-361426.phtml",
    video:"https://www.youtube.com/watch?v=dKADyv8vLww",
    inCart: false,
    count: 0,
    total: 0
  },
    {
      id: 5,
    title: "Newmen T260",
    img: [keyboardUrl(5,1,'png'),keyboardUrl(5,2,'jpg'),keyboardUrl(5,3,'jpg')],
   
    price: 10.99,
    company: "Newmen T260",
    inCart: false,
    count: 0,
    total: 0
  },
     {
      id: 6,
    title: "Cougar Attack X3",
    img: [keyboardUrl(6,1,'jpg'),keyboardUrl(6,2,'jpg'),keyboardUrl(6,3,'png'),keyboardUrl(6,4,'png'),keyboardUrl(6,5,'png')],
    switch:'Cherry MX Blue/Red',
    price: 49.99,
    company: "Cougar",
      info:
      "https://www.pcworld.com/article/3137615/cougar-attack-x3-review-an-unpretentious-board-with-genuine-cherry-keys.html",
    video:"https://www.youtube.com/watch?v=oV2iIdT9Ew8",
    inCart: false,
    count: 0,
    total: 0
  },
     {
      id: 7,
    title: "Gaming DareU DK1280 RGB",
    img: [keyboardUrl(7,1,'png'),keyboardUrl(7,2,'png'),keyboardUrl(7,3,'png'),keyboardUrl(7,4,'png'),keyboardUrl(7,5,'png'),keyboardUrl(7,6,'png')],
    price: 49.99,
    company: "DareU",
    inCart: false,
    count: 0,
    total: 0
  },
    {
      id: 8,
    title: "Fuhlen D (Destroyer)",
    img: [keyboardUrl(8,1,'jpg'),keyboardUrl(8,2,'jpg'),keyboardUrl(8,3,'jpg'),keyboardUrl(8,4,'jpg'),keyboardUrl(8,5,'jpg'),keyboardUrl(8,6,'jpg')],
    price: 49.99,
    company:"Fuhlen",
    inCart: false,
    count: 0,
    total: 0
  },
     {
      id: 9,
    title: "Fuhlen Subverter Rainbow",
    img: [keyboardUrl(9,1,'jpg'),keyboardUrl(9,2,'jpg')],
    price: 51.99,
    company:"Fuhlen",
    inCart: false,
    count: 0,
    total: 0
  },
     {
      id: 10,
    title: "HyperX Alloy Core RGB",
    img: [keyboardUrl(10,1,'png'),keyboardUrl(10,2,'png'),keyboardUrl(10,3,'jpg'),keyboardUrl(10,4,'jpg'),keyboardUrl(10,5,'jpg'),keyboardUrl(10,6,'jpg')],
    price: 51.99,
    company:"HyperX Kingston",
    info:"https://www.hyperxgaming.com/us/keyboards/alloy-core-rgb-membrane-gaming-keyboard",
    video:"https://www.youtube.com/watch?v=7zb0Ua9R-Y4",
    inCart: false,
    count: 0,
    total: 0
  },
     {
      id: 11,
    title: "Combo Keyboard + Mouse Cougar Deathfire EX",
    img: [keyboardUrl(11,1,'jpg'),keyboardUrl(11,2,'jpg'),keyboardUrl(11,3,'jpg')],
    price: 51.99,
    company:"COUGAR",
    inCart: false,
    count: 0,
    total: 0
  },
    {
      id: 12,
    title: "Rapoo V720 RGB",
    img: [keyboardUrl(12,1,'jpg'),keyboardUrl(12,2,'png')],
    price: 51.99,
    company:"Rapoo",
    inCart: false,
    count: 0,
    total: 0
  },
   {
      id: 13,
    title: "Fuhlen Subverter RGB",
    img: [keyboardUrl(13,1,'jpg'),keyboardUrl(13,2,'jpg'),keyboardUrl(13,3,'jpg')],
    price: 51.99,
    company:"Fuhlen",
    inCart: false,
    count: 0,
    total: 0
  },
    {
      id: 14,
    title: "Asus Cerberus MKII",
    img: [keyboardUrl(14,1,'jpg')],
    price: 51.99,
    company:"Asus",
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 15,
    title: "Durgod V87",
    img: [keyboardUrl(15,1,'png'),keyboardUrl(15,2,'png')],
    price: 72.99,
    company:"Durgod",
    switch: 'Cherry Blue/Red/Brown',
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 16,
    title: "Logitech G613",
    img: [keyboardUrl(16,1,'jpg'),keyboardUrl(16,2,'jpg'),keyboardUrl(16,3,'jpg'),keyboardUrl(16,4,'jpg'),keyboardUrl(16,5,'jpg')],
    price: 73.99,
    company:"Logitech",
    info:"https://www.tomsguide.com/us/logitech-g613-gaming-keyboard,review-4648.html",
    video:"https://www.youtube.com/watch?v=BqfSjYJKB7A",
    switch: 'Romer-G',
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 17,
    title: "Gaming Cougar Puri RGB",
    img: [keyboardUrl(17,1,'png'),keyboardUrl(17,2,'png'),keyboardUrl(17,3,'png'),keyboardUrl(17,4,'png'),keyboardUrl(17,5,'png'),keyboardUrl(17,6,'png'),keyboardUrl(17,7,'png')],
    price: 73.99,
    company:"Cougar",
    info:"https://www.pcmag.com/review/360924/cougar-puri",
    switch: 'UIX mechanical RED',
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 18,
    title: "Razer Blackwidow Lite",
    img: [keyboardUrl(18,1,'png'),keyboardUrl(18,2,'jpg'),keyboardUrl(18,3,'jpg'),keyboardUrl(18,4,'jpg'),keyboardUrl(18,5,'jpg'),keyboardUrl(18,6,'jpg')],
    price: 73.99,
    company:"Razer",
    info:"https://www.tomshardware.com/reviews/razer-black-widow-lite,5910.html",
    video:"https://www.youtube.com/watch?v=Qy50_axI-y8",
    switch: 'Razer Orange Switch + O-ring',
    inCart: false,
    count: 0,
    total: 0
  },
   {
     id: 19,
    title: "Logitech G Pro",
    img: [keyboardUrl(19,1,'jpg'),keyboardUrl(19,2,'jpg'),keyboardUrl(19,3,'jpg'),keyboardUrl(19,4,'jpg'),keyboardUrl(19,5,'jpg')],
    price: 73.99,
    company:"Logitech",
    info:"https://prosettings.net/review/logitech-g-pro-mechanical-keyboard/",
    video:"https://www.youtube.com/watch?v=D1TYwnl4dW8",
    switch: 'Romer-G',
    inCart: false,
    count: 0,
    total: 0
  },
     {
     id: 20,
    title: "iKBC TD108 BLUE LED",
    img: [keyboardUrl(20,1,'jpg'),keyboardUrl(20,2,'jpg'),keyboardUrl(20,3,'jpg'),keyboardUrl(20,4,'jpg'),keyboardUrl(20,5,'jpg'),keyboardUrl(20,6,'jpg'),keyboardUrl(20,7,'jpg')],
    price: 79.99,
    company:"iKBC",
    info:"https://drop.com/buy/ikbc-td108-blue-led-backlit-mechanical-keyboard",
    video:"https://www.youtube.com/watch?v=KYWhge-0hR4",
    switch: 'Red/Brown/Blue ',
    inCart: false,
    count: 0,
    total: 0
  },
     {
     id: 21,
    title: "Durgod Taurus K320 - Space Gray",
    img: [keyboardUrl(21,1,'jpg'),keyboardUrl(21,2,'png'),keyboardUrl(21,3,'png'),keyboardUrl(21,4,'png')],
    price: 99.99,
    company:"Durgod",
    video:"https://www.youtube.com/watch?v=dSXrde3sJpc",
    switch: 'MX Cherry Blue/Brown/Red',
    inCart: false,
    count: 0,
    total: 0
  },
       {
     id: 22,
    title: "Durgod Taurus K320 - Nature White",
    img: [keyboardUrl(22,1,'jpg'),keyboardUrl(22,2,'png'),keyboardUrl(22,3,'png'),keyboardUrl(22,4,'png')],
    price: 99.99,
    company:"Durgod",
    video:"https://www.youtube.com/watch?v=dSXrde3sJpc",
    switch: 'MX Cherry Blue/Brown/Red',
    inCart: false,
    count: 0,
    total: 0
  },
        {
     id: 23,
    title: "Logitech G512 RGB",
    img: [keyboardUrl(23,1,'jpg'),keyboardUrl(23,2,'png'),keyboardUrl(23,3,'png'),keyboardUrl(23,4,'png'),keyboardUrl(23,5,'png'),keyboardUrl(23,6,'png'),keyboardUrl(23,7,'png')],
    price: 99.99,
    company:"Logitech",
    video:"https://www.youtube.com/watch?v=xSAbGup5HVA",
    switch: 'TACTILE / LINEAR (Romer G)',
    inCart: false,
    count: 0,
    total: 0
  },
      {
     id: 24,
    title: "Corsair K63",
    img: [keyboardUrl(24,1,'png'),keyboardUrl(24,2,'png'),keyboardUrl(24,3,'png'),keyboardUrl(24,4,'png'),keyboardUrl(24,5,'png')],
    price: 99.99,
    company:"Corsair",
    video:"https://www.youtube.com/watch?v=Q4wjpNMwlUg",
    inCart: false,
    count: 0,
    total: 0
  },
     {
     id: 25,
    title: "Razer Tartarus V2",
    img: [keyboardUrl(25,1,'jpg'),keyboardUrl(25,2,'jpg'),keyboardUrl(25,3,'jpg'),keyboardUrl(25,4,'jpg'),keyboardUrl(25,5,'jpg'),keyboardUrl(25,6,'jpg')
    ,keyboardUrl(25,7,'jpg')
  ,keyboardUrl(25,8,'jpg')
,keyboardUrl(25,9,'jpg')
,keyboardUrl(25,10,'jpg')],
    price: 99.99,
    company:"Razer",
    video:"https://www.youtube.com/watch?v=73ysn2YtTTE",
    inCart: false,
    count: 0,
    total: 0
  },
   {
     id: 26,
    title: "MSI Vigor GK60",
    img: [keyboardUrl(26,1,'png'),keyboardUrl(26,2,'png'),keyboardUrl(26,3,'png'),keyboardUrl(26,4,'png')],
    price: 99.99,
    company:"MSI",
    video:"https://www.youtube.com/watch?v=z8lzqnTyQxk",
    switch:"Cherry RED",
    inCart: false,
    count: 0,
    total: 0
  },
   {
     id: 27,
    title: "MSI GK70",
    img: [keyboardUrl(27,1,'jpg'),keyboardUrl(27,2,'png'),keyboardUrl(27,3,'png'),keyboardUrl(27,4,'png'),keyboardUrl(27,5,'png'),keyboardUrl(27,6,'png')],
    price: 99.99,
    company:"MSI",
    video:"https://www.youtube.com/watch?v=NRG1Q9yQsk8",
    inCart: false,
    count: 0,
    total: 0
  },
   {
     id: 28,
    title: "Corsair K68 - Blue Led",
    img: [keyboardUrl(28,1,'png'),keyboardUrl(28,2,'png'),keyboardUrl(28,3,'jpg'),keyboardUrl(28,4,'png'),keyboardUrl(28,5,'png')],
    price: 99.99,
    company:"Corsair",
    switch:"Blue Switches",
    video:"https://www.youtube.com/watch?v=v__GMbOH9Nc",
    inCart: false,
    count: 0,
    total: 0
  },
     {
     id: 29,
    title: "Gigabyte Aorus K7",
    img: [keyboardUrl(29,1,'jpg'),keyboardUrl(29,2,'png'),keyboardUrl(29,3,'png'),keyboardUrl(29,4,'png'),keyboardUrl(29,5,'png')],
    price: 99.99,
    company:"Gigabyte",
    switch:"Red",
    video:"https://www.youtube.com/watch?v=44g8lk2IEzY",
    inCart: false,
    count: 0,
    total: 0
  },
     {
     id: 30,
    title: "Vortex Cypher",
    img: [keyboardUrl(30,1,'png'),keyboardUrl(30,2,'jpg'),keyboardUrl(30,3,'jpg')],
    price: 99.99,
    company:"Vortex",
    switch:"Cherry MX White/Red/Brown",
    video:"https://www.youtube.com/watch?v=f9fWogcwmXI",
    inCart: false,
    count: 0,
    total: 0
  }
  
  
  

]
export const monitor = [
  {
     id: 1,
    title: "Viewsonic VA2261H-8 Full HD",
    img: [moniterUrl(1,1,'jpg'),moniterUrl(1,2,'jpg')],
    video:"https://www.youtube.com/watch?v=O3hfgcs5Po8&t=161s",
    price: 95.99,
    company:"Viewsonic",
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 2,
    title: "Viewsonic VA2456-H",
    img: [moniterUrl(2,1,'png'),moniterUrl(2,2,'png')],
    price: 99.99,
    company:"Viewsonic",
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 3,
    title: "HKC HA238",
    img: [moniterUrl(3,1,'jpg'),moniterUrl(3,2,'jpg'),moniterUrl(3,3,'jpg'),moniterUrl(3,4,'jpg'),moniterUrl(3,5,'jpg')],
    price: 120.00,
    company:"HKC",
    inCart: false,
    count: 0,
    total: 0
  },
     {
     id: 4,
    title: "Philips 243V7QJAB",
    img: [moniterUrl(4,1,'jpg'),moniterUrl(4,2,'jpg'),moniterUrl(4,3,'jpg')],
    price: 120.00,
    company:"Philips",
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 5,
    title: "Acer R221QB Full HD",
    img: [moniterUrl(5,1,'jpg'),moniterUrl(5,2,'png'),moniterUrl(5,3,'png'),moniterUrl(5,4,'png'),moniterUrl(5,5,'png')],
    price: 120.00,
    company:"Acer",
    inCart: false,
    count: 0,
    total: 0
  },
   {
     id: 6,
    title: "HKC M27A9X-W White 75Hz",
    img: [moniterUrl(6,1,'jpg'),moniterUrl(6,2,'png'),moniterUrl(6,3,'png'),moniterUrl(6,4,'png'),moniterUrl(6,5,'png')],
    price: 120.00,
    company:"HKC",
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 7,
    title: "LG 27MP59G-P",
    img: [moniterUrl(7,1,'jpg'),moniterUrl(7,2,'jpg'),moniterUrl(7,3,'jpg'),moniterUrl(7,4,'jpg')],
    price: 210.99,
    company:"LG",
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 8,
    title: "Viewsonic VX2776-SMHD",
    img: [moniterUrl(8,1,'jpg'),moniterUrl(8,2,'jpg'),moniterUrl(8,3,'jpg'),moniterUrl(8,4,'jpg'),moniterUrl(8,5,'jpg'),moniterUrl(8,6,'jpg')],
    price: 210.99,
    company:"Viewsonic",
    inCart: false,
    count: 0,
    total: 0
  },
   {
     id: 9,
    title: "ACER VG270 27",
    img: [moniterUrl(9,1,'jpg'),moniterUrl(9,2,'png'),moniterUrl(9,3,'jpg'),moniterUrl(9,4,'png'),moniterUrl(9,5,'jpg')],
    price: 225.99,
    company:"Acer",
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 10,
    title: "HKC M24G1 - 144Hz",
    img: [moniterUrl(10,1,'jpg'),moniterUrl(10,2,'png'),moniterUrl(10,3,'jpg'),moniterUrl(10,4,'png'),moniterUrl(10,5,'png')],
    price: 225.99,
    company:"HKC",
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 11,
    title: "Viewsonic VX2458-C-MHD - 144Hz",
    img: [moniterUrl(11,1,'jpg')],
    price: 225.99,
    company:"Viewsonic",
    inCart: false,
    count: 0,
    total: 0
  }
  ,
  {
     id: 12,
    title: "HKC M27G1Q - 2K 144Hz",
    img: [moniterUrl(12,1,'jpg')],
    price: 370.99,
    company:"HKC",
    inCart: false,
    count: 0,
    total: 0
  },
  {
     id: 13,
    title: "HKC M32A7Q - 144Hz-2K",
    img: [moniterUrl(13,1,'jpg')],
    price: 372.99,
    company:"HKC",
    inCart: false,
    count: 0,
    total: 0
  },
  {
     id: 14,
    title: "HP 27X 3WL53AA 144Hz-1ms 2k",
    img: [moniterUrl(14,1,'jpg'),moniterUrl(14,2,'png'),moniterUrl(14,3,'png')],
    price: 380.99,
    company:"HP",
    inCart: false,
    count: 0,
    total: 0
  },
  
  
]
export const mouse = [
  {
     id: 1,
    title: "Rapoo V280 RGBn",
    img: [mouseUrl(20,1,'png'),mouseUrl(20,2,'png')],
    company:"Rapoo",
    price:30.99,
    inCart: false,
    count: 0,
    total: 0
  },
   {
     id: 2,
    title: "Asus Cerberus",
    img: [mouseUrl(21,1,'png'),mouseUrl(21,2,'png'),mouseUrl(21,3,'png')],
    company:"Asus",
       price:30.99,
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 3,
    title: "Fuhlen G90 White",
    img: [mouseUrl(22,1,'jpg')],
    company:"Fuhlen",
       price:30.99,
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 4,
    title: "Fuhlen G90 Pro",
    img: [mouseUrl(23,1,'png'),mouseUrl(23,2,'jpg'),mouseUrl(23,3,'png')],
    company:"Fuhlen",
       price:30.99,
    inCart: false,
    count: 0,
    total: 0
  },
     {
     id: 5,
    title: "Lenovo Legion M200 RGB",
    img: [mouseUrl(24,1,'jpg'),mouseUrl(24,2,'jpg'),mouseUrl(24,3,'jpg'),mouseUrl(24,4,'jpg'),mouseUrl(24,5,'jpg')],
    company:"Lenovo",
       price:30.99,
    inCart: false,

    count: 0,
    total: 0
  },
     {
     id: 6,
    title: "Cougar Minos X3 White",
    img: [mouseUrl(25,1,'jpg'),mouseUrl(25,2,'png'),mouseUrl(25,3,'png'),mouseUrl(25,4,'png'),mouseUrl(25,5,'png')],
    company:"Cougar",
       price:30.99,
    inCart: false,
    count: 0,
    total: 0
  },
     {
     id: 7,
    title: "Steelseries Sensei RAW Ruberized",
    img: [mouseUrl(26,1,'jpg'),mouseUrl(26,2,'jpg'),mouseUrl(26,3,'jpg'),mouseUrl(26,4,'jpg'),mouseUrl(26,5,'jpg')],
    company:"Steelseries",
    price:30.99,
    inCart: false,
    count: 0,
    total: 0
  },
     {
     id: 8,
    title: "Razer Deathadder Essential",
    img: [mouseUrl(27,1,'jpg'),mouseUrl(27,2,'png'),mouseUrl(27,3,'png'),mouseUrl(27,4,'png')],
    company:"Razer",
    price:30.99,
    inCart: false,
    count: 0,
    total: 0
  },
   {
     id: 9,
    title: "Razer Abyssus Essential",
    img: [mouseUrl(28,1,'jpg'),mouseUrl(28,2,'jpg'),mouseUrl(28,3,'jpg'),mouseUrl(28,4,'jpg')],
    company:"Razer",
    price:42.99,
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 10,
    title: "ASUS Espada GT200 Gaming Mouse",
    img: [mouseUrl(29,1,'png'),mouseUrl(29,2,'png'),mouseUrl(29,3,'png'),mouseUrl(29,4,'png')],
    company:"Asus",
    price:42.99,
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 11,
    title: "Razer Abyssus 2000 DPI",
    img: [mouseUrl(30,1,'jpg'),mouseUrl(30,2,'jpg')],
    company:"Razer",
    price:42.99,
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 12,
    title: "Steelseries Rival 110 Arctis White",
    img: [mouseUrl(31,1,'jpg'),mouseUrl(31,2,'png'),mouseUrl(31,3,'png'),mouseUrl(31,4,'png'),mouseUrl(31,5,'png')],
    company:"Steelseries",
    price:42.99,
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 13,
    title: "Steelseries Rival 110",
    img: [mouseUrl(32,1,'jpg'),mouseUrl(32,2,'png'),mouseUrl(32,3,'png'),mouseUrl(32,4,'png')],
    company:"Steelseries",
    price:42.99,
    inCart: false,
    count: 0,
    total: 0
  },
      {
     id: 14,
    title: "Rapoo Multi-mode Wireless MT750",
    img: [mouseUrl(34,1,'png'),mouseUrl(34,2,'png'),mouseUrl(34,3,'png')],
    company:"Rapoo",
    price:42.99,
    inCart: false,
    count: 0,
    total: 0
  },
      {
     id: 15,
    title: "Corsair M55 RGB Pro",
    img: [mouseUrl(35,1,'png'),mouseUrl(35,2,'png'),mouseUrl(35,3,'png'),mouseUrl(35,4,'png'),mouseUrl(35,5,'png'),mouseUrl(35,6,'png')],
    company:"Corsair",
    price:42.99,
    inCart: false,
    count: 0,
    total: 0
  },
       {
     id: 16,
    title: "Corsair Harpoon RGB Wireless",
    img: [mouseUrl(36,1,'jpg'),mouseUrl(36,2,'png'),mouseUrl(36,3,'png'),mouseUrl(36,4,'png')],
    company:"Corsair",
    price:51.99,
    inCart: false,
    count: 0,
    total: 0
  },
    {
     id: 17,
    title: "Razer DeathAdder Elite",
    img: [mouseUrl(37,1,'png'),mouseUrl(37,2,'png'),mouseUrl(37,3,'png'),mouseUrl(37,4,'png'),mouseUrl(37,5,'png')],
    company:"Razer",
    price:51.99,
    inCart: false,
    count: 0,
    total: 0
  },
      {
     id: 18,
    title: "Razer Basilisk Essential",
    img: [mouseUrl(38,1,'png'),mouseUrl(38,2,'png'),mouseUrl(38,3,'png'),mouseUrl(38,4,'png'),mouseUrl(38,5,'png')],
    company:"Razer",
    price:55.99,
    inCart: false,
    count: 0,
    total: 0
  },    {
     id: 19,
    title: "Steelseries Rival 310",
    img: [mouseUrl(39,1,'png'),mouseUrl(39,2,'png'),mouseUrl(39,3,'png'),mouseUrl(39,4,'png'),mouseUrl(39,5,'png'),mouseUrl(39,6,'png')],
    company:"Steelseries",
    price:55.99,
    inCart: false,
    count: 0,
    total: 0
  },
     {
     id: 20,
    title: "HyperX Pulsefire FPS Pro",
    img: [mouseUrl(40,1,'png'),mouseUrl(40,2,'jpg'),mouseUrl(40,3,'jpg'),mouseUrl(40,4,'jpg'),mouseUrl(40,5,'jpg'),mouseUrl(40,6,'jpg'),mouseUrl(40,7,'jpg')],
    company:"Kingston",
    price:58.99,
    inCart: false,
    count: 0,
    total: 0
  }
  
  
]