import { exercisesData } from '$lib/data';
import type { VideoMenu } from '$lib/types.js';
import { getYoutubeVideoId } from '$lib/utils/getYouTube.js';

export async function load({ params }) {
	const category = params.category;
	const exerciseParams = params.exercise;

	const title = exerciseParams.replaceAll('-', ' ');
	const exerciseData = exercisesData.find(
		(exerciseData) => exerciseData.category.toLowerCase().replaceAll(' ', '-') == category
	);
	const videoData = exerciseData?.exercises.find(
		(exercise) => exercise.name.toLowerCase().replaceAll(' ', '-') == exerciseParams
	);
	const menuData: VideoMenu[] =
		videoData?.video.map((video) => {
			return {
				title: video.title,
				path: `/dashboard/home/${category}/${exerciseParams}/${getYoutubeVideoId(video.url)}`,
                videoId: getYoutubeVideoId(video.url)
			};
		}) ?? [];

	return { title, menuData };
}
