import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import apiRouter from "./routers/apiRouter";
import flash from "express-flash";

import "./passport";

const app = express();

const CokieStore = MongoStore(session);

app.use(helmet({contentSecurityPolicy: false}));

app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: true,
      saveUninitialized: false,
      store: new CokieStore({ mongooseConnection: mongoose.connection })
    })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());


app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

app.use(routes.api, apiRouter);

export default app;



/* 
app.use :app.use 는 미들웨어 등록 순서에 따라 엔드 라우트 논리 또는 
        중간 경로 논리를 실행하기 전에 미들웨어 또는 미들웨어 체인 (또는 다중 미들웨어) 을 등록하는 방법
*/