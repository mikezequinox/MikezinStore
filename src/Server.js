import app from "./api/app.js"
import LOGGER from "./config/logger.js";
import { initAllRoutes } from "./api/routes.js";

const PORT = 3000

initAllRoutes(app)

app.listen(PORT, () => {LOGGER.info(`Server is running at port ${PORT}`)});


