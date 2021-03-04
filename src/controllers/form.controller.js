const formsCtrl = {};

const pool = require('../database');

formsCtrl.renderAddForm = (req, res) => {
	res.render('form/add');
};

formsCtrl.addForm = async (req, res) => {
	const { fullname, username, password } = req.body;
	const newForm = {
		fullname,
		username,
		password,
	};
	await pool.query('INSERT INTO history set ?', newForm);
	req.flash('success', 'Form Saved Successfully');
	res.redirect('/form');
};

// formsCtrl.renderForms = async (req, res) => {
// 	const form = await pool.query('SELECT * FROM users', [req.user.id]);
// 	res.render('form/list', { form });
// };

// formsCtrl.deleteForm = async (req, res) => {
// 	const { id } = req.params;
// 	await pool.query('DELETE FROM users WHERE id = ?', [id]);
// 	req.flash('success', 'Form Removed Successfully');
// 	res.redirect('/form');
// };

// formsCtrl.renderEditForm = async (req, res) => {
// 	const { id } = req.params;
// 	const form = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
// 	console.log(form);
// 	res.render('form/edit', { form: form[0] });
// };

// formsCtrl.editForm = async (req, res) => {
// 	const { id } = req.params;
// 	const { fullname, username } = req.body;
// 	const newForm = {
// 		fullname,
// 		username,
// 	};
// 	await pool.query('UPDATE users set ? WHERE id = ?', [newForm, id]);
// 	req.flash('success', 'Form Updated Successfully');
// 	res.redirect('/form');
// };

module.exports = formsCtrl;
