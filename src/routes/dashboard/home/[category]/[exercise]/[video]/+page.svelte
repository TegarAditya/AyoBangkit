<script lang="ts">
    export let data;

    const videoId = data.videoId;
</script>

<div class="container">
    <div class="mx-5 py-5 h-full">
        <div class="flex justify-center">
            <iframe
                class="w-full"
                height="400"
                src={`https://www.youtube.com/embed/${videoId}?controls=1&rel=0&autoplay=1`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="video">
            </iframe>
        </div>
    </div>
</div>