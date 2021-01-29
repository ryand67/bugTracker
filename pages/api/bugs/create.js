import connect from '../../../utils/database';

export default async (req, res) => {
    const { db } = await connect();

    const { user, bug, subject } = req.body;

    const result = await db.collection('bugs').insertOne({
        bug: {
            user: user,
            subject: subject,
            bugDesc: bug
        },
        createdAt: new Date()
    })

    res.json(result);
    console.log(result.ops);
}