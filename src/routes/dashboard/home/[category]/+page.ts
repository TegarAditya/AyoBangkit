import { exercisesData } from '$lib/data/exerciseData.js';
import type { ExerciseCategory, Menu } from '$lib/types.js';

let exerciseData: ExerciseCategory;

export async function load({ params }) {
    if (params.category == 'latihan-di-atas-ranjang') {
        exerciseData = exercisesData[0];
    } else if (params.category == 'latihan-posisi-duduk') {
        exerciseData = exercisesData[1];
    } else if (params.category == 'latihan-posisi-berdiri') {
        exerciseData = exercisesData[2];
    } else if (params.category == 'latihan-berjalan') {
        exerciseData = exercisesData[3];
    }

    const title = exerciseData.category;
    const greetings = exerciseData.greetings;
    const purpose = exerciseData.purpose;
    const menuData: Menu[] = exerciseData.exercises.map((exercise) => {
        return {
            title: exercise.name,
            path: `/dashboard/home/${params.category}/${exercise.name.toLowerCase().replaceAll(' ', '-')}`
        };
    });

    return {title, greetings, purpose, menuData};
}

