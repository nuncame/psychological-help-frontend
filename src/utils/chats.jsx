const chats = [
	{
		client: {
			first_name: 'Анастасия',
			complaint: 'Психосоматика / физическое здоровье',
		},
		id: 42,
		chat_secret_key: '1',
		active: true,
		new: false,
	},

	{
		client: {
			first_name: 'User',
			complaint: 'Семейные проблемы',
		},
		id: 43,
		chat_secret_key: '2',
		active: false,
		new: true,
	},
	{
		client: {
			first_name: '',
			complaint: 'Я не знаю что со мной',
		},
		id: 44,
		chat_secret_key: '3',
		active: true,
		new: false,
	},
];

export default chats;