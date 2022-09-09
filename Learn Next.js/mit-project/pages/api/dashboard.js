const pool = require('../../components/db');



const DashboardHandler = async(req, res) => {
    if(req.method === 'POST') {
        try {
            const {email} = req.body;
            if(email) {
                const getUser = await pool.query('SELECT * FROM users WHERE email = $1;', [email]);

                if(getUser) {
                    res.status(200).json({success: true, user: getUser.rows[0]});
                } else {
                    res.status(200).json( {success: false, error: 'No User Found'} );
                }
            }
            // console.log(req.body);
        } catch(err) {
            console.log(err.message);
        }
    } else {
        res.status(400).json({error: 'This Method is not Allowed'});
    }
}

export default DashboardHandler;
