import connect from '../../../utils/database';

export default async (req, res) => {
    const { db } = await connect();

    const { user, bug } = req.body;

    const result = await db.collection('bugs').insertOne({
        bugs: {
            user: user,
            bugDesc: bug
        },
        createdAt: new Date()
    })

    res.json(result);
    console.log(result.ops);
}