import connect from '../../../utils/database';

export default async (req, res) => {
    const { db } = await connect();

    const { user, bug } = req.body;

    console.log(req.body);
    const result = await db.collection('bugs').insertOne({
        bugs: {
            user: user,
            bugDesc: bug
        },
        createdAt: new Date()
    })

    console.log(result.ops);
}