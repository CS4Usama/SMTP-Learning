const pool = require('../../components/db');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');


const LoginHandler = async(req, res) => {
    if(req.method === 'POST') {
        try {
            const {email, password} = req.body;
            if(email && password) {
                const getUser = await pool.query('SELECT * FROM users WHERE email = $1;', [email]);

                if(getUser) {
                    const bytes = CryptoJS.AES.decrypt(getUser.rows[0].password, process.env.PASSWORD_SECRET_ENCRYPTED_KEY);
                    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

                    if(getUser.rows[0].email === email && decryptedPassword === password) {
                        const token = jwt.sign({email: getUser.rows[0].email, name: getUser.rows[0].name}, process.env.JWT_SESSION_SECRET, {expiresIn: '2d'});
                        // res.json(getUser.rows[0]);
                        res.status(200).json({success: true, token, name: getUser.rows[0].name});
                    } else {
                        res.status(200).json( {success: false, error: 'Invalid Credentials'} );
                    }

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

export default LoginHandler;
