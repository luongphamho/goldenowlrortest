# README
# G-Sneaker
This is my Submission for web developer intern assignment at [Golden Owl](https://goldenowl.asia)

![Screenshot](./screenshots/Screenshot 2023-03-28 235643.png)

Link deploy front-end: https://goldenowlrortest.vercel.app

Link deploy back-end: https://goldenowlrortest.onrender.com/api/v1/shoes

(Because Heroku is no longer free, I deploy front-end to Vercel and back-end to Render)

[My Live Demo](https://goldenowlrortest.vercel.app)
# Guild to run project on local:
P1: Clone project from this repository 
`git clone https://github.com/luongphamho/goldenowlrortest.git`

P2: Change .env file [`./front-end/.env`] to back-end local URL (default: http://localhost:3000) and [https://github.com/luongphamho/goldenowlrortest/blob/main/config/database.yml#L24](this section to your local PostgreSQL database)

P2: Run `rails bundle` and `rails server` to install package and start back-end side

P3: Insert data to PostgreSQL database with file (scriptInsertSQL.sql)[https://github.com/luongphamho/goldenowlrortest/blob/main/scriptInsertSQL.sql]

P4: Run `cd front-end` and `run yarn` or `npm install` to install package in front-end side

P5: Run `yarn dev` from front-end path to start project
# Technical stack:
### Back-end:
- Ruby on rails, Rack-cors for CORS
### Front-end:
- ReactJs, Redux toolkit (thunk) for State management, Vite
- [Deploy](https://goldenowlrortest.vercel.app)
### Database:
- PostgreSQL (Remote database in render)