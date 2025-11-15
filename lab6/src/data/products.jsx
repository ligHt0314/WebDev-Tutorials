// Simulating a database of products
export const allProducts = [
  {
    id: 1,
    name: 'Tshirt',
    price: 499,
    description: 'A comfortable and stylish Tshirt perfect for any occasion. Made from 100% premium cotton.',
    category: 'Apparel',
    imageUrl: 'https://nobero.com/cdn/shop/files/Powderblue_3ca4b69b-4fc3-46d0-adf5-9da036d88798.jpg?v=1761823619'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 7999,
    description: 'Noise-cancelling wireless headphones with 20-hour battery life and crystal clear audio.',
    category: 'Electronics',
    imageUrl: 'https://www.apple.com/newsroom/images/product/airpods/standard/apple_airpods-max_hero_12082020_big.jpg.large.jpg'
  },
  {
    id: 3,
    name: 'Leather Wallet',
    price: 1299,
    description: 'A sleek, minimalist wallet crafted from genuine leather. Features 6 card slots and a cash pocket.',
    category: 'Accessories',
    imageUrl: 'https://imagescdn.peterengland.com/img/app/product/3/39708534-14583048.jpg?auto=format&w=390'
  },
  {
    id: 4,
    name: 'Running Shoes',
    price: 2499,
    description: 'Lightweight and breathable running shoes designed for maximum comfort and performance.',
    category: 'Apparel',
    imageUrl: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/6c9bee45-9b41-4b38-997a-1c056e2797db/NIKE+VOMERO+PREMIUM.png'
  },
  {
    id: 5,
    name: 'Smartwatch',
    price: 14999,
    description: 'Track your fitness, receive notifications, and stay connected with this state-of-the-art smartwatch.',
    category: 'Electronics',
    imageUrl: 'https://iplanet.one/cdn/shop/files/Apple_Watch_Series_10_46mm_GPS_Jet_Black_Aluminium_Sport_Band_Black_PDP_Image_Position_1__en-IN_2f9657f4-9c60-4697-94f1-76bd4ee627f8.jpg?v=1727257318'
  },
  {
    id: 6,
    name: 'Coffee Mug',
    price: 349,
    description: 'A large, ceramic mug with death notes Kira print to keep your favorite beverage warm. Dishwasher and microwave safe.',
    category: 'Homeware',
    imageUrl: 'https://m.media-amazon.com/images/I/41J-sfcmKJL.jpg'
  },
  {
    id: 7,
    name: 'Smartphone 17',
    price: 79900,
    description: 'A new smartphone series 17 with lastest in market features.',
    category: 'Electronics',
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ',
    isFeatured: true
  },
  {
    id: 8,
    name: 'Laptop Air',
    price: 119000,
    description: 'A lightweight and poerfull laptop with 20 hours battery life that can handle everyday tasks easily.',
    category: 'Electronics',
    imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWN2h4SGtCQ2R3aStVaDRhL2VUV1NjdkJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk'
  },
  {
    id: 9,
    name: 'Laptop Pro',
    price: 159000,
    description: 'A pro laptop for Professionals',
    category: 'Electronics',
    imageUrl: 'https://www.imagineonline.store/cdn/shop/files/MacBook_Pro_14-in_Space_Gray_PDP_Image_Position-1__GBEN_351335a0-a669-4f75-9104-bb530357efc4.jpg?v=1760101505',
    isFeatured: true
  },
  {
    id: 10,
    name: 'Gaming Laptop',
    price: 189000,
    description: 'A powerfull laptop for gamers',
    category: 'Electronics',
    imageUrl: 'https://m.media-amazon.com/images/I/61jSHaXCNEL.jpg',
    isFeatured: true
  },
  {
    id: 11,
    name: 'Pants',
    price: 999,
    description: 'A classic pants made up of premium linen.',
    category: 'Apparel',
    imageUrl: 'https://frenchcrown.in/cdn/shop/files/T4049-SW_2.jpg?v=1723190583&width=3500'
  },
  {
    id: 12,
    name: 'Hoodies',
    price: 1999,
    description: 'A stylish hoodie made up of 100% premium cotton.',
    category: 'Apparel',
    imageUrl: 'https://nobero.com/cdn/shop/files/authentic_6275b1bf-598e-49d8-aaaa-3132ea43b2f8.jpg?v=1760172891',
    isFeatured: true
  },
  {
    id: 13,
    name: 'Sunglasses',
    price: 1599,
    description: 'A stylish framed sunglasses for mens, consisting glasses which are plorized, UV rays protection.',
    category: 'Accessories',
    imageUrl: 'https://himalayaoptical.com/cdn/shop/files/8056597945875_1_1024x.jpg?v=1725620796'
  }, 
  {
    id: 14,
    name: 'Hat',
    price: 1299,
    description: 'Mens Pure Cotton, Hand made Bucket Hat',
    category: 'Accessories',
    imageUrl: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/32339189/2025/1/15/59be1e44-9e3f-4986-b1fa-95aa64b09e4d1736929749378JackJonesBeigeLinenBucketHat1.jpg'
  }
];