import { Jwt} from "jsonwebtoken";

const user = {
    id: 1,
    name: 'Natan',
    email: "natanhvieira@gmail.com",
    permissions: ['admin']
};

const token = jwt.sign(user, 'secret-key');

