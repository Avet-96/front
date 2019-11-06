export const URL_FUNCTION_REQUEST = 'URL_FUNCTION_REQUEST';


export function getFunctionUrl(data) {
	return {
		type: URL_FUNCTION_REQUEST, payload: { data }
	}
}
