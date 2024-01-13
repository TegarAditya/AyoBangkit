export interface Video {
	title: string;
	url: string;
}

export interface Exercise {
	name: string;
	video: Video[];
}

export interface ExerciseCategory {
	category: string;
	greetings: string;
	purpose: string[];
	exercises: Exercise[];
}

export type ExerciseDataArray = ExerciseCategory[];

export type Menu = {
	title: string;
	path: string;
};

export type VideoMenu = {
	title: string;
	path: string;
	videoId: string | null;
};
