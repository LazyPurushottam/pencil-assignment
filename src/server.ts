// console.time("Started in");
// import express, { Application, Response, Request } from "express";
// import path from "path";
// import {
//   text as textParser,
//   json as jsonParser,
//   urlencoded as urlencodedParser,
// } from "body-parser";
// import http from "http";
// import os from "os";
// // import admin from "../admin-rest/router";
// // import routes from "../rest/routes";
// // import helmet from "helmet";
// // import queryStringParser from "./utils/queryStringParser";
// // import useragent from "express-useragent";
// // import v1 from "./api/v1/routes";
// import userRoutes from "./api/controller/user/routes";

// // const exit = process.exit;

// export default class ExpressServer {
//   public app: Application;
//   public env: "production" | "development" | "test";
//   constructor(env?: "production" | "development" | "test") {
//     this.app = express();
//     this.app.set("query parser", queryStringParser);
//     this.env = env;
//     const root = path.normalize(__dirname + "/../..");

//     this.app.set("appPath", root + "client");

//     this.app.use(jsonParser({ limit: process.env.REQUEST_LIMIT || "100kb" }));
//     this.app.use(
//       urlencodedParser({
//         extended: true,
//         limit: process.env.REQUEST_LIMIT || "100kb",
//       })
//     );
//     this.app.use(textParser({ limit: process.env.REQUEST_LIMIT || "100kb" }));

//     this.app.use(helmet());

//     this.app.use(useragent.express());
//     const setCacheControl = function (req: Request, res: Response, next): void {
//       res.setHeader("Cache-Control", "no-cache");
//       next();
//     };

//     this.app.use(setCacheControl);
//   }

//   allowCrossDomain(accessControlAllowOrigin: string) {
//     return (req: Request, res: Response, next): void => {
//       res.header("Access-Control-Allow-Credentials", "true");
//       res.header("Access-Control-Allow-Origin", accessControlAllowOrigin);
//       res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//       res.header(
//         "Access-Control-Allow-Headers",
//         "Content-Type, Authorization, access_token, pincode, google_recaptcha_token"
//       );
//       if ("OPTIONS" === req.method) {
//         res.sendStatus(200);
//       } else {
//         next();
//       }
//     };
//   }

//   async listen(port?: number): Promise<Application | void> {
//     try {
//       this.app.use("/api/v1", this.allowCrossDomain("*"), v1);
//       if (port != null) {
//         http.createServer(this.app).listen(port, () => {
//           console.log(`🚀🚀🚀 Running in port: ${port}`);
//           console.timeEnd("Started in");
//         });
//       }
//       return this.app;
//     } catch (e) {
//       exit(1);
//     }
//   }
// }
