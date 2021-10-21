import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { UserProfileController } from "./controllers/UserProfileController";
import { auth } from "./middlewares/auth";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", auth, new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", auth, new UserProfileController().handle);

export { router };
