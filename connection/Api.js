import AxiosWrapper from "./AxiosWrapper";
import { sendMessageUrl, emailSubUrl } from "./urls";


export function ApiException(message) {
	this.message = message;
	this.name = 'ApiException';
	this.severity = 'error';
}

export async function sendMessage({ payload}) {
	const url = sendMessageUrl();
	try {
		return await AxiosWrapper.post(url,JSON.stringify(payload));
	} catch (e) {	
		if (e?.message) {
			throw new ApiException(e?.message);
		}
	}
	
}

export async function sendEmailSubscription({ payload}) {
	const url = emailSubUrl();
	try {
		return await AxiosWrapper.post(url, JSON.stringify(payload));
	} catch (e) {
		if (e?.message) {
			throw new ApiException(e?.message);
		}
	}

}