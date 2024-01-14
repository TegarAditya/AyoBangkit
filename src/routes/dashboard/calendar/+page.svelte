<script lang="ts">
    import { CalendarView } from "fluent-svelte";
    import "fluent-svelte/theme.css";
    import { onMount } from 'svelte';

    let selectedDate = new Date();
    let note = ''; // This will hold the note text for the selected date

    const dateOptions: Intl.DateTimeFormatOptions = {
        dateStyle: "full",
    };

    // Convert the date to a string that can be used as a key in localStorage
    const getDateString = (date: Date) => {
        return date.toISOString().split('T')[0];
    };

    // Load the note for the selected date from localStorage
    const loadNote = () => {
        const dateString = getDateString(selectedDate);
        note = localStorage.getItem(dateString) || '';
    };

    // Save the note for the selected date to localStorage
    const saveNote = () => {
        const dateString = getDateString(selectedDate);
        localStorage.setItem(dateString, note);
    };

    // When the component is first created, load the note for today's date
    onMount(() => {
        loadNote();
    });

    // Watch for changes to the selectedDate and update the note accordingly
    $: if (selectedDate) {
        loadNote();
    }

    // Watch for changes to the note and save it to localStorage
    $: if (note !== undefined) {
        saveNote();
    }

    $: dates = selectedDate.toLocaleDateString('id-ID', dateOptions);
</script>

<div class="container pt-5 flex flex-col align-middle w-screen justify-center space-y-5">
    <CalendarView class="mx-auto" bind:value={selectedDate}/>
    <div class="bg-white mx-8 rounded-lg px-3">
        <p class="w-full text-center font-semibold py-3">{dates}</p>
        <textarea name="note" id="note" rows="5" class="w-full rounded-md mb-3" bind:value={note}></textarea>
    </div>
</div>
