export function getYoutubeVideoId(url: string) {
	// Regular expression to match YouTube URL patterns
	var regex =
		/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

	// Try to match the URL with the regular expression
	var match = url.match(regex);

	// If a match is found, return the video ID, otherwise return null
	return match ? match[1] : null;
}

export function getYoutubeVideoUrl(id: string) {
	return `https://www.youtube.com/embed/${id}`;
}

export function getYoutubeVideoThumbnailUrl(id: string) {
	return `https://img.youtube.com/vi/${id}/0.jpg`;
}
