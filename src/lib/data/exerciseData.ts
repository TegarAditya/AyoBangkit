import type { ExerciseDataArray } from '$lib/types';

export const exercisesData: ExerciseDataArray = [
	{
		category: 'Latihan di atas ranjang',
		greetings: 'Semangat latihannya Anda pasti bisa',
		purpose: [
			'Mencegah kerusakan kulit akibat penekanan',
			'Mencegah penurunan kekuatan otot pada sisi yang sehat',
			'Belajar kembali gerakan yang biasanya dilakukan pada sisi yang lemah'
		],
		exercises: [
			{
				name: 'Kepala',
				video: [
					{ title: 'Latihan 1', url: 'https://youtu.be/IG_DAoPmxgw' },
					{ title: 'Latihan 2', url: 'https://youtu.be/BV8-3E4Nvzk' }
				]
			},
			{
				name: 'Anggota Gerak Atas',
				video: [
					{ title: 'Latihan 1', url: 'https://youtu.be/BeQbroRdu-0' },
					{ title: 'Latihan 2', url: 'https://youtu.be/s_G21mTQcRQ' },
					{ title: 'Latihan 3', url: 'https://youtu.be/_UeMDA600sA' }
				]
			},
			{
				name: 'Badan',
				video: [{ title: 'Latihan 1', url: 'https://youtu.be/ygNpVQcq4aU' }]
			},
			{
				name: 'Anggota Gerak Bawah',
				video: [
					{ title: 'Latihan 1', url: 'https://youtu.be/OstTP7faYl0' },
					{ title: 'Latihan 2', url: 'https://youtu.be/HbeNhKuwNiU' }
				]
			}
		]
	},
	{
		category: 'Latihan posisi duduk',
		greetings: 'Waah, progres yang luar biasa. Ayo lebih semangat lagi!',
		purpose: [
			'Anda mampu duduk secara mandiri',
			'Meningkatkan kesimbangan tubuh saat duduk',
			'Mampu melakukan aktivitas yang melibatkan posisi duduk'
		],
		exercises: [
			{
				name: 'Anggota Gerak Atas',
				video: [
					{ title: 'Latihan 1', url: 'https://youtu.be/73SrRphvDLg' },
					{ title: 'Latihan 2', url: 'https://youtu.be/67qAsSN7AP0' },
					{ title: 'Latihan 3', url: 'https://youtu.be/iWUWxYBX2v8' },
					{ title: 'Latihan 4', url: 'https://youtu.be/XrlTb_as4jM' }
				]
			},
			{
				name: 'Badan',
				video: [
					{ title: 'Latihan 1', url: 'https://youtube.com/shorts/skE1KR1fCN8?feature=share' },
					{ title: 'Latihan 2', url: 'https://youtube.com/shorts/hAGnDe2P_1c?feature=share' },
					{ title: 'Latihan 3', url: 'https://youtube.com/shorts/lgE0AJQMPyw?feature=share' },
					{ title: 'Latihan 4', url: 'https://youtube.com/shorts/1_e0IQoAvl4?feature=share' }
				]
			},
			{
				name: 'Anggota Gerak Bawah',
				video: [
					{ title: 'Latihan 1', url: 'https://youtube.com/shorts/CZoLXRz1e6k?feature=share' },
					{ title: 'Latihan 2', url: 'https://youtube.com/shorts/FKn1VPwn6gA?feature=share' },
					{ title: 'Latihan 3', url: 'https://youtube.com/shorts/YD3qJ3idQW4?feature=share' }
				]
			}
		]
	},
	{
		category: 'Latihan posisi berdiri',
		greetings: 'Hebat! Tingkatkan semangat Anda, sebentar lagi Anda sudah bisa berdiri',
		purpose: [
			'Anda mampu berdiri secara mandiri',
			'Meningkatkan kesimbangan tubuh',
			'Menguatkan otot-otot postur tubuh',
			'Mempersiapkan Anda agar mampu berjalan'
		],
		exercises: [
			{
				name: 'Otot-otot kaki',
				video: [
					{ title: 'Latihan 1', url: 'https://youtube.com/shorts/Hsl8rRcEqCY?feature=share' },
					{ title: 'Latihan 2', url: 'https://youtube.com/shorts/7Sf6SJnYXWw?feature=share' }
				]
			},
			{
				name: 'Keseimbangan',
				video: [
					{ title: 'Latihan 1', url: 'https://youtube.com/shorts/UJcTNQqh-jE?feature=share' },
					{ title: 'Latihan 2', url: 'https://youtube.com/shorts/-as9c9enPng?feature=share' }
				]
			},
			{
				name: 'Persiapan berjalan',
				video: [{ title: 'Latihan 1', url: 'https://youtube.com/shorts/pxnfyQhCTDU' }]
			}
		]
	},
	{
		category: 'Latihan Berjalan',
		greetings:
			'Akhirnya Anda sudah pada tahap latihan berjalan, ayo terus semangat latihan. Anda pasti bisa!',
		purpose: [
			'Mengembalikan kemampuan berjalan secara normal setelah stroke. Tanpa melakukan latihan berjalan Anda akan berjalan dengan cara yang tidak normal setelah sembuh',
			'Meningkatkan kesimbangan tubuh saat berjalan',
			'Meningkatkan kemampuan fisik'
		],
		exercises: [
			{
				name: 'Latihan berjalan',
				video: [
					{ title: 'Latihan 1', url: 'https://youtube.com/shorts/axM6Sd65faY?feature=share' },
					{ title: 'Latihan 2', url: 'https://youtube.com/shorts/Hrh6rgD1288?feature=share' }
				]
			}
		]
	}
];