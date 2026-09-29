export const POST = async ({ request }) => {
	try {
		const data = await request.json();
		
		console.log('Analytics:', {
			session: data.session,
			page: data.page,
			referrer: data.referrer,
			timestamp: data.timestamp,
			screen: data.screen,
			language: data.language
		});
		
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
