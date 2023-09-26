export default function getResponseFromAPI(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const responseData= {message:"API response"};
			resolve(responseData);
		}, 100)
	})
}
