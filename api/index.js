import { Router } from "express"
import bills from "./bills"
import subscriptions from "./subscriptions"
import articles from "./articles"
import lessons from "./lessons"
import team from "./team"

const router = Router()

router.use("/bills", bills)
router.use("/articles", articles)
router.use("/subscriptions", subscriptions)
router.use("/lessons", lessons)
router.use("/team", team)

export default router
