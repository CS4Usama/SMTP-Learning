const pool = require('../../components/db');


const DashboardHandler = async(req, res) => {
    const {
        method,
        body,
        query: { id },
      } = req;
// app.post('/api/dashboard', async(req, res) => {
    const client = await pool.connect();
    if(req.method === 'GET') {
        try {
            const userId = Number(req.body);
            console.log("datatype", typeof Number(userId));
            if(userId) {
                const getUser = await pool.query('SELECT * FROM users WHERE id = $1;', [Number(userId)]);

                // if(getUser) {
                if(getUser.rows[0]) {
                    const userProfile = getUser.rows[0];
                    res.json(userProfile);
                    // res.status(200).json({success: true, user: getUser.rows[0]});
                } else {
                    res.status(200).json( {success: false, error: 'No User Found'} );
                }
            }
            // console.log(req.body);
            
        } catch(err) {
            console.log(err.message);
        } finally {
            client.release();
        }
    } else if(req.method === 'PUT') {
        try {
            const userId = req.body;
            console.log('update put',userId, req.body);
            if(email) {
                const updateUserProfile = await pool.query('UPDATE users SET name = $1 WHERE id = $2 RETURNING *;', [name, userId]);
                return res.json(updateUserProfile.rows[0]);
            }
        } catch(err) {
            console.log(err.message);
        }
    } else {
        res.status(400).json({error: 'This Method is not Allowed'});
    }
}
// })

export default DashboardHandler;
