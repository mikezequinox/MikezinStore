import app from "./api/app.js"
import LOGGER from "./config/logger.js";
<<<<<<< Updated upstream
=======
import { initAllRoutes } from "./api/routes.js"
>>>>>>> Stashed changes

const PORT = 3000

app.listen(PORT, () => {LOGGER.info(`Server is running at port ${PORT}`)});


