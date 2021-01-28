import connect from '../../../utils/database';

export default async (req, res) => {
    const { db } = await connect();

    try {
        const result = await db.collection('bugs').find().toArray();
        res.json(result);
    } catch (error) {
        res.json(error);
    }

}