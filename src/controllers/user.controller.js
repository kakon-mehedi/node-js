import { ApiError } from "../utils/apiError";
import { asyncHandler } from "../utils/asyncHandler";

const registerUser = asyncHandler((req, res) => {
    const { userName, email, password } = req.body;

    [userName, email, password].forEach((item) => {
        if (!item) throw new ApiError()
    })

})