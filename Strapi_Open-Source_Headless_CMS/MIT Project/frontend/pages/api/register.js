const pool = require('../../components/db');
const CryptoJS = require('crypto-js');


const RegisterHandler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            let { name, email, password } = req.body;
            if (name && email && password) {
                const newUser = await pool.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING name, email;',
                    [
                        name,
                        email,
                        password = CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET_ENCRYPTED_KEY).toString()
                    ]
                );
                res.json(newUser.rows[0]);
                // res.status(200).json({success: 'Success'});
            }
            // console.log(req.body);
        } catch (err) {
            console.log(err.message);
        }
    } else {
        res.status(400).json({ error: 'This Method is not Allowed' });
    }
}

export default RegisterHandler;

// postgresql://postgres:usama@localhost:5432/mitproject