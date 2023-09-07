# Ecommerce store build with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB

![Product](https://res.cloudinary.com/dbiliw2ja/image/upload/v1694095465/shoe_jg1rbp.png)
![Cart](https://res.cloudinary.com/dbiliw2ja/image/upload/v1694095465/cart_moihhy.png)
![PaymentSuccess](https://res.cloudinary.com/dbiliw2ja/image/upload/v1694095464/payment_ebtzvw.png)

This project served as a created store using the ecommerce-admin project, build with Next.js 13 App Router: 
    React, Tailwind + Headless UI, NextJS, Zustand, Stripe

Features:

- Tailwind design
- Tailwind animations and effects
- Fully responsive design
- Page loading state
- Notification using react-hot-toast
- Payment can be done by Stripe
- Advanced search algorithm by size, color.
- Fully customizable store content such as store name, billboard, category, product, color , size
- Shareable URL filters: lets say you select a size and color as your desire, you will be able to share the URL with other people in another browser and they will see the same results as yours.

Note:

- At this time if you want to change the home page billboard, you will have to do it manually by replacing the billboard id at getBillboard(billboardIdHere) on .../(routes)/page.tsx (billboard id can be copied to clipboard at admin dashboard -> billboard tab).
- To change store, simply change the environment variable NEXT_PUBLIC_API_URL, this public api come from the store you have created using ecommerce-admin and it can be found on the settings tab.

### Prerequisites

**Node version 14.x**

**NextJS version 13.x**

### Cloning the repository

```shell
git clone https://github.com/tuanloc288/ecommerce-store.git
```

### Install packages

```shell
npm install
```

### Setup .env file

```js
NEXT_PUBLIC_API_URL=
```

### Start the app

```shell
npm run dev
```
