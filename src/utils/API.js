import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
		"api_key": "0052015a58a411d92d94b5ba384c5fa8",
		"language": "en-US"
	}
})

const tvAPI = {
	topRated: () => api.get("tv/top_rated"),
	popular: () => api.get("tv/popular"),
	airingToday: () => api.get("tv/airing_today"),
	showDetail: (id) => api.get(`tv/${id}`, {
		params: { append_to_response: "videos" }
	}), // 뒤에 붙이는 것은 query parameter
	search: (term) => api.get(`search/tv`, {
		params: {
			query: encodeURIComponent(term)
		} // 스페이스나 @같은 것을 encode된 값으로 넣어줘야 함
	})
}

const movieAPI = {
	nowPlaying: () => api.get("movie/now_playing"),
	upComing: () => api.get("movie/upcoming"),
	popular: () => api.get("movie/popular"),
	movieDetail: (id) => api.get(`movie/${id}`, {
		params: { append_to_response: "videos" }
	}),
	search: (term) => api.get(`search/movie`, {
		params: {
			query: encodeURIComponent(term)
		}
	})
}

export { tvAPI, movieAPI }