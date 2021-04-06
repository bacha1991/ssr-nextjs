// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
import cors from "cors";

const handler = nc()
    // use connect based middleware
    .use(cors())
    // express like routing for methods
    .get((req, res) => {
        res.send("{A:'Hello world'}");
    })
    .post((req, res) => {
        res.json({ hello: "world" });
    })
    .put(async (req, res) => {
        res.end("hello");
    });

export default handler;
