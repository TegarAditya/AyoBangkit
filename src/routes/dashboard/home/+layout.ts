import { exercisesData } from "$lib/data";

export const load = async () => {
	return { exercisesData };
};

export const ssr = true;
