const pool = require('../database');
const formsCtrl = {};

formsCtrl.renderAddForm = (req, res) => {
	res.render('form/add');
};

formsCtrl.addForm = async (req, res) => {
	let { place, emergency, need, message } = req.body;
	const node = 1;
	if (emergency != undefined && need != undefined) {
		emergency = emergency.toString();
		need = need.toString();
	}
	const newForm = {
		place,
		emergency,
		need,
		message,
		node,
	};
	await pool.query('INSERT INTO history set ?', newForm);
	res.redirect('/form/sent');
};

formsCtrl.renderForm = async (req, res) => {
	res.render('form/sent');
};

formsCtrl.renderSentForm = async (req, res) => {
	const sentForm = await pool.query('SELECT * FROM history');
	res.render('form/sent', { sentForm });
};

formsCtrl.renderEditForm = async (req, res) => {
	const { id } = req.params;
	const sentForm = await pool.query('SELECT * FROM history WHERE id = ?', [
		id,
	]);
	console.log(sentForm);
	res.render('form/edit', { sentForm: sentForm[0] });
};

formsCtrl.editForm = async (req, res) => {
	let { place, emergency, need, message } = req.body;
	const node = 1;
	if (emergency != undefined && need != undefined) {
		emergency = emergency.toString();
		need = need.toString();
	}
	const newForm = {
		place,
		emergency,
		need,
		message,
		node,
	};
	await pool.query('UPDATE history set ? WHERE id = ?', [newForm, id]);
	res.redirect('/form/sent');
};

module.exports = formsCtrl;
