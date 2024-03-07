import { ServerClient } from "postmark";

const token = process.env.POSTMARK_API_KEY;
if (!token) process.exit(1);

export const client = new ServerClient(token, {
    useHttps: true,
});
