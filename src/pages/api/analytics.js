export async function POST({ request }) {
	try {
		const data = await request.json();
		
		// Log the analytics data
		console.log('Analytics:', {
			session: data.session,
			page: data.page,
			referrer: data.referrer,
			timestamp: data.timestamp,
			screen: data.screen,
			language: data.language
		});
		
		// Store in memory or send to external service
		// For now just return success
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
}
